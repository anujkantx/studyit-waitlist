"use client";

import { roadmapPhases } from "@/data/roadmap";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { CheckCircle2, Circle, Clock } from "lucide-react";

const phaseStatusIcons = {
  building: <Clock size={16} />,
  next: <Circle size={16} />,
  planned: <Circle size={16} />,
  done: <CheckCircle2 size={16} />,
};

const phaseStatusStyles: Record<string, { cls: string; iconColor: string }> = {
  building: { cls: "status-building", iconColor: "#B45309" },
  next: { cls: "status-next", iconColor: "var(--color-primary)" },
  planned: { cls: "status-planned", iconColor: "var(--color-text-muted)" },
  done: { cls: "badge badge-success", iconColor: "var(--color-success)" },
};

export function Roadmap() {
  return (
    <section id="roadmap" style={{ padding: "6rem 0", background: "var(--color-surface)" }}>
      <div className="section-sep" />
      <div className="container-wide">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge badge-accent" style={{ marginBottom: 20, display: "inline-flex" }}>
              Roadmap
            </span>
            <h2 className="display-lg" style={{ marginBottom: 16 }}>
              What we&apos;re building, in order
            </h2>
            <p className="text-xl-body" style={{ maxWidth: 480, margin: "0 auto" }}>
              Transparent about where we are and where we&apos;re going. No hype — just what&apos;s real.
            </p>
          </div>
        </Reveal>

        <Stagger staggerDelay={0.1}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 780, margin: "0 auto" }}>
            {roadmapPhases.map((phase, pIdx) => {
              const st = phaseStatusStyles[phase.status] ?? phaseStatusStyles.planned;
              return (
                <StaggerItem key={phase.id}>
                  <div
                    style={{
                      background: "var(--color-surface)",
                      border: `1.5px solid ${phase.status === "building" ? "rgba(217,119,6,0.25)" : "var(--color-border)"}`,
                      borderRadius: 14,
                      overflow: "hidden",
                      boxShadow: phase.status === "building" ? "var(--shadow-md)" : "var(--shadow-sm)",
                    }}
                  >
                    {/* Phase header */}
                    <div
                      style={{
                        padding: "16px 20px",
                        background: phase.status === "building"
                          ? "linear-gradient(135deg, rgba(217,119,6,0.05), rgba(217,119,6,0.02))"
                          : "var(--color-surface-2)",
                        borderBottom: "1px solid var(--color-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 12,
                        flexWrap: "wrap",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius: "50%",
                            background: phase.status === "building" ? "rgba(217,119,6,0.1)" : "var(--color-surface-3)",
                            border: `1.5px solid ${phase.status === "building" ? "rgba(217,119,6,0.25)" : "var(--color-border)"}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.8125rem",
                            fontWeight: 700,
                            color: phase.status === "building" ? "#B45309" : "var(--color-text-muted)",
                            flexShrink: 0,
                          }}
                        >
                          {pIdx + 1}
                        </span>
                        <div>
                          <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-text)", fontFamily: "var(--font-sans)", marginBottom: 2 }}>
                            {phase.title}
                          </h3>
                          <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>{phase.subtitle}</p>
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ color: st.iconColor }}>{phaseStatusIcons[phase.status as keyof typeof phaseStatusIcons]}</span>
                        <span className={st.cls}>{phase.status.charAt(0).toUpperCase() + phase.status.slice(1)}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div style={{ padding: "16px 20px", display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {phase.items.map((feature) => (
                        <div
                          key={feature.label}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            padding: "5px 12px",
                            background: phase.status === "building" ? "rgba(217,119,6,0.06)" : "var(--color-surface-2)",
                            border: `1px solid ${phase.status === "building" ? "rgba(217,119,6,0.15)" : "var(--color-border)"}`,
                            borderRadius: 6,
                            fontSize: "0.875rem",
                            color: phase.status === "building" ? "#92400E" : "var(--color-text-secondary)",
                            fontWeight: 500,
                          }}
                        >
                          <CheckCircle2 size={12} style={{ color: phase.status === "building" ? "#B45309" : "var(--color-text-muted)", flexShrink: 0 }} />
                          {feature.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
