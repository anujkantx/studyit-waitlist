"use client";

import { Lock, Star, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { WaitlistForm } from "@/components/forms/WaitlistForm";

const trustBadges = [
  { Icon: Lock, text: "Your data stays private" },
  { Icon: Star, text: "Free early access" },
  { Icon: GraduationCap, text: "Built for students" },
];

export function EarlyAccess() {
  return (
    <section id="early-access" style={{ padding: "6rem 0", background: "var(--color-surface)", position: "relative", overflow: "hidden" }}>
      <div className="section-sep" />

      {/* Top accent line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, transparent, var(--color-primary), transparent)", opacity: 0.5 }} />

      {/* Background geometry */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(79,70,229,0.05) 0%, transparent 100%)", pointerEvents: "none" }} />

      <div className="container-narrow" style={{ position: "relative" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="badge badge-primary" style={{ marginBottom: 20, display: "inline-flex" }}>
              Early access
            </span>
            <h2 className="display-lg" style={{ marginBottom: 16 }}>
              Be there before everyone{" "}
              <span className="gradient-text-primary">asks for the link.</span>
            </h2>
            <p className="text-xl-body" style={{ maxWidth: 420, margin: "0 auto" }}>
              Join the first students getting access to Studyit. Early access students shape what we build first.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div style={{ background: "var(--color-surface)", border: "1.5px solid var(--color-border)", borderRadius: 20, padding: "36px", boxShadow: "var(--shadow-xl)" }}>
            <WaitlistForm />
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div style={{ marginTop: 28, display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            {trustBadges.map(({ Icon, text }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>
                <Icon size={14} style={{ color: "var(--color-primary)", flexShrink: 0 }} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
