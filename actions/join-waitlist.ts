"use server";

import { waitlistSchema, type WaitlistSchema } from "@/lib/validation";
import { Pool } from "pg";

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

// Create a single pool instance
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

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

    // 4. Insert or check existing
    const query = `
      INSERT INTO public.waitlist (
        email, name, university, program, semester, wants_to_contribute, campus_ambassador_interest,
        source, utm_source, utm_medium, utm_campaign, utm_content, utm_term, referred_by, referral_code
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15
      ) RETURNING id;
    `;

    const values = [
      normalizedEmail,
      normalizedName || null,
      normalizedUniversity,
      program?.trim() || null,
      semester?.trim() || null,
      wantsToContribute,
      campusAmbassadorInterest,
      attribution.source || null,
      attribution.utm_source || null,
      attribution.utm_medium || null,
      attribution.utm_campaign || null,
      attribution.utm_content || null,
      attribution.utm_term || null,
      attribution.referred_by || null,
      referralCode
    ];

    try {
      await pool.query(query, values);
      return { success: true, status: "created", referralCode };
    } catch (dbError: any) {
      // 23505 is the PostgreSQL error code for unique violation
      if (dbError.code === "23505" && dbError.constraint === "waitlist_email_key") {
        return { success: true, status: "already_registered" };
      }
      console.error("[Waitlist] Database error:", dbError);
      return { success: false, status: "server_error", message: "Could not join waitlist. Please try again." };
    }
  } catch (error) {
    console.error("[Waitlist] Unexpected server error:", error);
    return { success: false, status: "server_error", message: "An unexpected error occurred." };
  }
}
