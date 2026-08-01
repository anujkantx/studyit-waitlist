"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { track } from "@/lib/analytics";

export function FinalCTA() {
  const handleJoin = () => {
    track("final_cta_clicked");
    document.getElementById("early-access")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="final-cta" style={{ padding: "6rem 0", background: "var(--color-surface)", position: "relative", overflow: "hidden" }}>
      <div className="section-sep" />

      {/* Background grid */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(79,70,229,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(79,70,229,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(79,70,229,0.06) 0%, transparent 100%)", pointerEvents: "none" }} />

      <div className="container-narrow" style={{ position: "relative", textAlign: "center" }}>
        <Reveal>
          <span className="badge badge-primary" style={{ marginBottom: 24, display: "inline-flex" }}>
            Ready?
          </span>
          <h2 className="display-lg" style={{ marginBottom: 20 }}>
            College preparation is messy.{" "}
            <span className="gradient-text-primary">Studyit is organizing it.</span>
          </h2>
          <p className="text-xl-body" style={{ marginBottom: 36, maxWidth: 440, margin: "0 auto 36px" }}>
            Join early access and be among the first students to use Studyit when it launches.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={handleJoin}
              className="btn btn-primary btn-lg"
              style={{ minWidth: 200 }}
            >
              Join Early Access
              <ArrowRight size={18} />
            </button>
          </div>

          <p style={{ marginTop: 16, fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
            Free · No spam · Built for college students
          </p>
        </Reveal>
      </div>
    </section>
  );
}
