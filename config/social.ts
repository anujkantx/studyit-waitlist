// config/social.ts
// Social media links. Only add URLs that have been configured.
// Remove or comment out any platform that doesn't have an active presence.

export interface SocialLink {
  platform: string;
  label: string;
  href: string;
  icon: string; // Lucide icon name
}

export const socialLinks: SocialLink[] = [
  // Uncomment as each social account is set up:
  // { platform: "instagram", label: "Instagram", href: "https://instagram.com/studyitin", icon: "Instagram" },
  // { platform: "linkedin", label: "LinkedIn", href: "https://linkedin.com/company/studyitin", icon: "Linkedin" },
  // { platform: "twitter", label: "X (Twitter)", href: "https://x.com/studyitin", icon: "Twitter" },
  // { platform: "youtube", label: "YouTube", href: "https://youtube.com/@studyitin", icon: "Youtube" },
  // { platform: "github", label: "GitHub", href: "https://github.com/studyitin", icon: "Github" },
];

// Share URLs for the share section (these use studyit.in domain)
export const shareConfig = {
  siteUrl: "https://studyit.in",
  shareMessage:
    "Studyit is building one place for college PYQs, practice, notes and exam resources. Check it out.",
};
