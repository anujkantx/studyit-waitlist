// config/site.ts
// Central source of truth for all brand/site configuration.

export const siteConfig = {
  name: "Studyit",
  tagline: "Built for students.",
  fullName: "Studyit.in",
  domain: "studyit.in",
  url: "https://studyit.in",
  description:
    "Studyit helps college students prepare with organized PYQs, practice questions, quizzes, notes and academic resources built around their university and subjects.",
  shortDescription: "PYQs, practice, quizzes and notes organized around your semester.",
  ogImage: "/og/og-image.png",
  twitterHandle: "@studyitin",
  email: "hello@studyit.in",
  links: {
    github: "https://github.com",
    twitter: "https://x.com/studyitin",
  },
  madeIn: "India",
  keywords: [
    "PYQs",
    "college exam preparation",
    "previous year questions",
    "study notes",
    "university resources",
    "semester exam",
    "practice questions",
    "student platform",
    "college students",
    "India education",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
