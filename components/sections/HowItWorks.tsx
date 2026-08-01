"use client";

import { Building2, CalendarDays, Layers, BookOpen, Zap, FileText, Target } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const steps = [
  {
    number: "01",
    Icon: Building2,
    title: "Choose your university",
    description: "Select from universities across India. Studyit maps to your actual curriculum.",
  },
  {
    number: "02",
    Icon: CalendarDays,
    title: "Select your semester & subjects",
    description: "Pick your current semester. Your subjects and all their resources appear instantly.",
  },
  {
    number: "03",
    Icon: Layers,
    title: "Start preparing",
    description: "Access PYQs, practice questions, quizzes and notes — organized exactly how you need them.",
  },
];

const hierarchy = [
  { label: "University", variant: "top" },
  { label: "Program", variant: "mid" },
  { label: "Semester", variant: "mid" },
  { label: "Subject", variant: "mid" },
  { label: "PYQs · Practice · Notes · Quiz", variant: "bottom" },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "6rem 0", background: "var(--color-bg)", position: "relative" }}>
      <div className="section-sep" />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(79,70,229,0.03) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      <div className="container-wide" style={{ position: "relative" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="badge badge-primary" style={{ marginBottom: 20, display: "inline-flex" }}>
              How it works
            </span>
            <h2 className="display-lg" style={{ marginBottom: 16 }}>
              Three steps to{" "}
              <span className="gradient-text-primary">organized preparation</span>
            </h2>
            <p className="text-xl-body" style={{ maxWidth: 460, margin: "0 auto" }}>
              No setup. No searching. Choose where you are, and start preparing.
            </p>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1px 1fr",
            gap: 48,
            alignItems: "start",
          }}
          className="how-grid"
        >
          {/* Steps */}
          <div>
            <Stagger staggerDelay={0.12}>
              {steps.map((step, i) => (
                <StaggerItem key={step.number}>
                  <div
                    style={{
                      display: "flex",
                      gap: 20,
                      paddingBottom: i < steps.length - 1 ? 32 : 0,
                      position: "relative",
                    }}
                  >
                    {/* Connector line */}
                    {i < steps.length - 1 && (
                      <div
                        style={{
                          position: "absolute",
                          left: 21,
                          top: 48,
                          bottom: 0,
                          width: 2,
                          background: `linear-gradient(to bottom, var(--color-primary), var(--color-border))`,
                          opacity: 0.3,
                          borderRadius: 2,
                        }}
                      />
                    )}

                    {/* Step circle */}
                    <div style={{ flexShrink: 0 }}>
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          background: "var(--color-primary)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "var(--shadow-primary)",
                          color: "#fff",
                        }}
                      >
                        <step.Icon size={18} />
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ paddingTop: 10 }}>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontFamily: "var(--font-mono)",
                          fontWeight: 700,
                          color: "var(--color-primary)",
                          letterSpacing: "0.06em",
                          display: "block",
                          marginBottom: 4,
                        }}
                      >
                        {step.number}
                      </span>
                      <h3
                        style={{
                          fontSize: "1.0625rem",
                          fontWeight: 700,
                          color: "var(--color-text)",
                          fontFamily: "var(--font-sans)",
                          marginBottom: 8,
                          lineHeight: 1.3,
                        }}
                      >
                        {step.title}
                      </h3>
                      <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Center divider */}
          <div style={{ height: "100%", background: "var(--color-border)", alignSelf: "stretch", marginTop: 8 }} className="how-divider" />

          {/* Hierarchy visual */}
          <Reveal direction="right" delay={0.2}>
            <div
              style={{
                background: "var(--color-surface)",
                border: "1.5px solid var(--color-border)",
                borderRadius: 16,
                padding: 28,
                boxShadow: "var(--shadow-md)",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-text-muted)",
                  marginBottom: 20,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Academic structure
              </p>

              {hierarchy.map((level, i) => {
                const isBottom = level.variant === "bottom";
                const isTop = level.variant === "top";
                return (
                  <div key={level.label} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
                    <div
                      style={{
                        padding: isBottom ? "8px 16px" : "7px 14px",
                        background: isBottom ? "var(--color-primary)" : isTop ? "var(--color-surface-2)" : "var(--color-surface)",
                        border: `1.5px solid ${isBottom ? "var(--color-primary)" : "var(--color-border)"}`,
                        borderRadius: 8,
                        fontSize: isBottom ? "0.8125rem" : "0.875rem",
                        fontWeight: isBottom ? 700 : isTop ? 600 : 400,
                        color: isBottom ? "#fff" : isTop ? "var(--color-text)" : "var(--color-text-secondary)",
                        marginLeft: `${i * 10}px`,
                        width: `calc(100% - ${i * 10}px)`,
                        boxShadow: isBottom ? "var(--shadow-primary)" : "var(--shadow-sm)",
                        fontFamily: isBottom ? "var(--font-mono)" : "var(--font-body)",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      {isBottom && (
                        <span style={{ display: "flex", gap: 6 }}>
                          <BookOpen size={12} />
                          <Zap size={12} />
                          <FileText size={12} />
                          <Target size={12} />
                        </span>
                      )}
                      {level.label}
                    </div>
                    {i < hierarchy.length - 1 && (
                      <div style={{ width: 2, height: 12, background: "var(--color-border)", marginLeft: `${i * 10 + 16}px`, borderRadius: 2 }} />
                    )}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .how-grid { grid-template-columns: 1fr !important; }
          .how-divider { display: none !important; }
        }
      `}</style>
    </section>
  );
}
