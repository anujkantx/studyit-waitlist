// lib/share.ts
// Share utility functions for the social sharing section.

import { shareConfig } from "@/config/social";

/**
 * Build platform-specific sharing URLs.
 */

export function getWhatsAppShareUrl(referralCode?: string): string {
  const url = referralCode ? `${shareConfig.siteUrl}/?ref=${referralCode}` : shareConfig.siteUrl;
  const text = encodeURIComponent(
    `${shareConfig.shareMessage}\n${url}`
  );
  return `https://wa.me/?text=${text}`;
}

export function getLinkedInShareUrl(referralCode?: string): string {
  const url = encodeURIComponent(referralCode ? `${shareConfig.siteUrl}/?ref=${referralCode}` : shareConfig.siteUrl);
  return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
}

export function getXShareUrl(referralCode?: string): string {
  const text = encodeURIComponent(shareConfig.shareMessage);
  const url = encodeURIComponent(referralCode ? `${shareConfig.siteUrl}/?ref=${referralCode}` : shareConfig.siteUrl);
  return `https://x.com/intent/tweet?text=${text}&url=${url}`;
}

/**
 * Use native Web Share API on supported devices, fallback to URL copy.
 */
export async function nativeShare(referralCode?: string): Promise<boolean> {
  if (typeof navigator !== "undefined" && navigator.share) {
    try {
      await navigator.share({
        title: "Studyit — College Exam Preparation",
        text: shareConfig.shareMessage,
        url: referralCode ? `${shareConfig.siteUrl}/?ref=${referralCode}` : shareConfig.siteUrl,
      });
      return true;
    } catch {
      return false;
    }
  }
  return false;
}

/**
 * Copy the site URL to clipboard.
 */
export async function copyShareLink(referralCode?: string): Promise<boolean> {
  if (typeof navigator !== "undefined" && navigator.clipboard) {
    try {
      const url = referralCode ? `${shareConfig.siteUrl}/?ref=${referralCode}` : shareConfig.siteUrl;
      await navigator.clipboard.writeText(url);
      return true;
    } catch {
      return false;
    }
  }
  return false;
}
