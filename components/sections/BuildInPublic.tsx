"use client";

import { GitBranch, MessageCircle, ExternalLink, Rss } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const updates = [
  {
    date: "Jul 2026",
    title: "Project started",
    description: "Decided to build Studyit after spending an hour hunting for DSA PYQs in three different WhatsApp groups before an exam.",
    tag: "Origin",
    tagColor: "#4F46E5",
    tagBg: "rgba(79,70,229,0.08)",
    tagBorder: "rgba(79,70,229,0.2)",
  },
  {
    date: "Jul 2026",
    title: "Design system locked",
    description: "Finalized the core structure: University → Program → Semester → Subject. Every resource lives in this hierarchy.",
    tag: "Design",
    tagColor: "#7C3AED",
    tagBg: "rgba(124,58,237,0.08)",
    tagBorder: "rgba(124,58,237,0.2)",
  },
  {
    date: "Now",
    title: "Coming soon page live",
    description: "Building in public from day one. Collecting early access signups and university requests to inform what we build first.",
    tag: "Live",
    tagColor: "#059669",
    tagBg: "rgba(5,150,105,0.08)",
    tagBorder: "rgba(5,150,105,0.2)",
    isActive: true,
  },
  {
    date: "Next",
    title: "First university launch",
    description: "First release focused on 2–3 universities with PYQs and practice questions for core CS/Engineering subjects.",
    tag: "Upcoming",
    tagColor: "#B45309",
    tagBg: "rgba(217,119,6,0.08)",
    tagBorder: "rgba(217,119,6,0.2)",
    isFuture: true,
  },
];

const socialLinks = [
  { Icon: GitBranch, label: "GitHub", href: "https://github.com", desc: "Follow the build" },
  { Icon: MessageCircle, label: "Updates on X", href: "https://twitter.com", desc: "Progress posts" },
  { Icon: Rss, label: "Dev log", href: "#", desc: "Coming soon" },
];

export function BuildInPublic() {
  return (
    <section id="build-in-public" style={{ padding: "6rem 0", background: "var(--color-bg)" }}>
      <div className="section-sep" />
      <div className="container-wide">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "start" }} className="bip-grid">
          <Reveal direction="left">
            <div style={{ position: "sticky", top: 100 }}>
              <span className="badge badge-primary" style={{ marginBottom: 20, display: "inline-flex" }}>
                Building in public
              </span>
              <h2 className="display-md" style={{ marginBottom: 16 }}>
                No hype. Just{" "}
                <span className="gradient-text-primary">honest progress.</span>
              </h2>
              <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 28 }}>
                Studyit is being built in the open. Every milestone, decision and setback is shared publicly. Follow along so you know exactly what you&apos;re signing up for.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {socialLinks.map(({ Icon, label, href, desc }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "14px 16px",
                      background: "var(--color-surface)",
                      border: "1.5px solid var(--color-border)",
                      borderRadius: 12,
                      textDecoration: "none",
                      boxShadow: "var(--shadow-sm)",
                      transition: "all var(--transition-base)",
                      color: "var(--color-text)",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = "var(--color-primary)";
                      el.style.boxShadow = "var(--shadow-md)";
                      el.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderColor = "var(--color-border)";
                      el.style.boxShadow = "var(--shadow-sm)";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    <div style={{ width: 36, height: 36, borderRadius: 9, background: "var(--color-primary-dim)", border: "1px solid rgba(79,70,229,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary)", flexShrink: 0 }}>
                      <Icon size={17} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--color-text)" }}>{label}</div>
                      <div style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>{desc}</div>
                    </div>
                    <ExternalLink size={14} style={{ color: "var(--color-text-subtle)" }} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Stagger staggerDelay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, position: "relative" }}>
              {/* Timeline line */}
              <div style={{ position: "absolute", left: 15, top: 28, bottom: 28, width: 2, background: "var(--color-border)", borderRadius: 2 }} />

              {updates.map((update, i) => (
                <StaggerItem key={update.title}>
                  <div style={{ display: "flex", gap: 20, paddingBottom: i < updates.length - 1 ? 28 : 0, position: "relative" }}>
                    {/* Timeline dot */}
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        background: update.isActive ? "var(--color-primary)" : update.isFuture ? "var(--color-surface)" : "var(--color-surface)",
                        border: `2px solid ${update.isActive ? "var(--color-primary)" : update.isFuture ? "var(--color-border)" : "#a8b4d6"}`,
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1,
                        boxShadow: update.isActive ? "var(--shadow-primary)" : "var(--shadow-sm)",
                        marginTop: 2,
                      }}
                    >
                      {update.isActive && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#fff" }} />}
                    </div>

                    {/* Card */}
                    <div
                      style={{
                        flex: 1,
                        padding: "16px 18px",
                        background: update.isActive ? "linear-gradient(135deg, rgba(79,70,229,0.05), rgba(124,58,237,0.03))" : "var(--color-surface)",
                        border: `1.5px solid ${update.isActive ? "rgba(79,70,229,0.2)" : "var(--color-border)"}`,
                        borderRadius: 12,
                        boxShadow: update.isActive ? "var(--shadow-md)" : "var(--shadow-sm)",
                        opacity: update.isFuture ? 0.7 : 1,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8, gap: 8, flexWrap: "wrap" }}>
                        <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", fontWeight: 600 }}>{update.date}</span>
                        <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: "0.75rem", fontWeight: 700, color: update.tagColor, background: update.tagBg, border: `1px solid ${update.tagBorder}`, fontFamily: "var(--font-mono)" }}>
                          {update.tag}
                        </span>
                      </div>
                      <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-text)", fontFamily: "var(--font-sans)", marginBottom: 6, lineHeight: 1.3 }}>{update.title}</h4>
                      <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{update.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </div>
      </div>
      <style>{`@media(max-width:1023px){.bip-grid{grid-template-columns:1fr!important;}.bip-grid>*:first-child{position:static!important;}}`}</style>
    </section>
  );
}
