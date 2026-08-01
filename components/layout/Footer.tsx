"use client";

import { GitBranch, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";

const footerNav = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
  { label: "Early Access", href: "#early-access" },
  { label: "Campus Program", href: "#campus" },
];

const scrollTo = (href: string) => {
  if (href.startsWith("#")) {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  }
};

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-text)",
        color: "rgba(255,255,255,0.65)",
        padding: "4rem 0 2.5rem",
      }}
    >
      <div className="container-wide">
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 32,
            marginBottom: 40,
            alignItems: "start",
          }}
          className="footer-top"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #6366F1, #7C3AED)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(99,102,241,0.4)",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 4h12M2 8h8M2 12h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 800,
                  fontSize: "1.125rem",
                  color: "#fff",
                  letterSpacing: "-0.025em",
                }}
              >
                Studyit
              </span>
            </div>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.65, maxWidth: 360, color: "rgba(255,255,255,0.5)" }}>
              {siteConfig.tagline}. Organized PYQs, practice questions, quizzes and notes — built around your university and semester.
            </p>
            <p style={{ marginTop: 12, fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-mono)" }}>
              studyit.in · Building in public
            </p>
          </div>

          {/* Social */}
          <div style={{ display: "flex", gap: 8 }}>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                width: 38,
                height: 38,
                borderRadius: 9,
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                transition: "all var(--transition-fast)",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "rgba(255,255,255,0.14)";
                el.style.color = "#fff";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "rgba(255,255,255,0.07)";
                el.style.color = "rgba(255,255,255,0.6)";
              }}
            >
              <GitBranch size={17} />
            </a>
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              style={{
                width: 38,
                height: 38,
                borderRadius: 9,
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                transition: "all var(--transition-fast)",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "rgba(255,255,255,0.14)";
                el.style.color = "#fff";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "rgba(255,255,255,0.07)";
                el.style.color = "rgba(255,255,255,0.6)";
              }}
            >
              <ExternalLink size={17} />
            </a>
          </div>
        </div>

        {/* Nav links */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 28,
            display: "flex",
            flexWrap: "wrap",
            gap: "10px 24px",
            marginBottom: 28,
          }}
        >
          {footerNav.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.5)",
                fontFamily: "var(--font-body)",
                padding: 0,
                transition: "color var(--transition-fast)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.5)"; }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-mono)" }}>
            © {new Date().getFullYear()} Studyit. Pre-launch — all data is demo only.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            {["Privacy", "Terms"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(255,255,255,0.3)",
                  textDecoration: "none",
                  fontFamily: "var(--font-mono)",
                  transition: "color var(--transition-fast)",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.3)"; }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:640px){.footer-top{grid-template-columns:1fr!important;}}`}</style>
    </footer>
  );
}
