"use server";

import { waitlistSchema, type WaitlistSchema } from "@/lib/validation";
import { createClient } from "@supabase/supabase-js";

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

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

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

    // 3. Generate referral code
    const referralCode = generateReferralCode();

    // 4. Insert
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
      if (insertError.code === "23505" || insertError.message?.includes("duplicate key")) {
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
