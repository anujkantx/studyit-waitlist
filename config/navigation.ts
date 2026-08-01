// config/navigation.ts
// All navigation links. Centralized so Navbar and Footer share the same source.

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const mainNav: NavItem[] = [
  { label: "Product", href: "#product-preview" },
  { label: "Why Studyit", href: "#problem" },
  { label: "For Students", href: "#how-it-works" },
  { label: "Community", href: "#community" },
  { label: "FAQ", href: "#faq" },
];

export const footerNav = {
  product: [
    { label: "What's Coming", href: "#product-preview" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Roadmap", href: "#roadmap" },
  ],
  community: [
    { label: "Early Access", href: "#early-access" },
    { label: "For Students", href: "#community" },
    { label: "Bring to Campus", href: "#campus" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  company: [
    { label: "Contact", href: "mailto:hello@studyit.in" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;
