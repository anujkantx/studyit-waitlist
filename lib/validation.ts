// lib/validation.ts
// Zod schemas for all frontend forms.

import { z } from "zod";

// ============================================================
// Waitlist / Early Access Form
// ============================================================

export const waitlistSchema = z.object({
  name: z
    .string()
    .max(100, "Name must be under 100 characters")
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  university: z
    .string()
    .min(2, "Please enter your university")
    .max(150, "University name must be under 150 characters"),
  program: z.string().max(100).optional().or(z.literal("")),
  semester: z.string().max(50).optional().or(z.literal("")),
  wantsToContribute: z.boolean().default(false),
  campusAmbassadorInterest: z.boolean().default(false),
  
  // Attribution & Referrals
  source: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_content: z.string().optional(),
  utm_term: z.string().optional(),
  referred_by: z.string().optional(),
});

export type WaitlistSchema = z.infer<typeof waitlistSchema>;

// ============================================================
// Campus Interest Form
// ============================================================

export const campusInterestSchema = waitlistSchema.extend({
  // Role is captured in the UI, map to program or leave it as extra data
  role: z.string().max(100).optional().or(z.literal("")),
});

export type CampusInterestSchema = z.infer<typeof campusInterestSchema>;
