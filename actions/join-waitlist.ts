"use server";

import { waitlistSchema, type WaitlistSchema } from "@/lib/validation";
import { createSupabaseAdmin } from "@/lib/supabase/server";

export type WaitlistResult =
  | { success: true; status: "created"; referralCode: string }
  | { success: true; status: "already_registered" }
  | { success: false; status: "validation_error" | "server_error"; message: string };

function generateReferralCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export async function joinWaitlist(data: WaitlistSchema): Promise<WaitlistResult> {
  try {
    // 1. Validate incoming data
    const parsed = waitlistSchema.safeParse(data);
    if (!parsed.success) {
      return { success: false, status: "validation_error", message: "Invalid data provided." };
    }

    const { email, name, university, program, semester, wantsToContribute, campusAmbassadorInterest, ...attribution } = parsed.data;

    // 2. Normalize
    const normalizedEmail = email.toLowerCase().trim();
    const normalizedName = name?.trim();
    const normalizedUniversity = university.trim();

    const supabase = createSupabaseAdmin();

    // 3. Check for existing email to avoid throwing nasty constraints to the user
    const { data: existingUser, error: checkError } = await supabase
      .from("waitlist")
      .select("id")
      .eq("email", normalizedEmail)
      .maybeSingle();

    if (checkError) {
      console.error("[Waitlist] Error checking existing user:", checkError);
      return { success: false, status: "server_error", message: "Could not process request." };
    }

    if (existingUser) {
      return { success: true, status: "already_registered" };
    }

    // 4. Generate referral code
    // A robust system would loop to ensure uniqueness, but for 6 chars (1B permutations) 
    // in a pre-launch waitlist, simple generation is sufficient.
    const referralCode = generateReferralCode();

    // 5. Insert
    const { error: insertError } = await supabase.from("waitlist").insert({
      email: normalizedEmail,
      name: normalizedName || null,
      university: normalizedUniversity,
      program: program?.trim() || null,
      semester: semester?.trim() || null,
      wants_to_contribute: wantsToContribute,
      campus_ambassador_interest: campusAmbassadorInterest,
      source: attribution.source || null,
      utm_source: attribution.utm_source || null,
      utm_medium: attribution.utm_medium || null,
      utm_campaign: attribution.utm_campaign || null,
      utm_content: attribution.utm_content || null,
      utm_term: attribution.utm_term || null,
      referred_by: attribution.referred_by || null,
      referral_code: referralCode,
    });

    if (insertError) {
      // Catch race condition where email was inserted between check and insert
      if (insertError.code === "23505" && insertError.message.includes("waitlist_email_key")) {
        return { success: true, status: "already_registered" };
      }
      
      console.error("[Waitlist] Error inserting user:", insertError);
      return { success: false, status: "server_error", message: "Could not join waitlist. Please try again." };
    }

    return { success: true, status: "created", referralCode };
  } catch (error) {
    console.error("[Waitlist] Unexpected server error:", error);
    return { success: false, status: "server_error", message: "An unexpected error occurred." };
  }
}
