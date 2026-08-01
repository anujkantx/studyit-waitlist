// lib/utils.ts
// General utilities for the coming soon website.

type ClassValue = string | number | boolean | null | undefined | ClassValue[];

/**
 * Merges class names, filtering falsy values.
 * A lightweight alternative to clsx for this project.
 */
export function cn(...inputs: ClassValue[]): string {
  return inputs
    .flat()
    .filter((v): v is string => typeof v === "string" && v.length > 0)
    .join(" ");
}

/**
 * Generates a short random referral code.
 * Not persisted — purely for UI demo purposes.
 */
export function generateReferralCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let result = "";
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Formats a number with optional suffix (K, M).
 */
export function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

/**
 * Clamps a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Sleeps for a given number of milliseconds.
 * Used to simulate async operations in frontend-only flows.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Truncates text to a given length with ellipsis.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}
