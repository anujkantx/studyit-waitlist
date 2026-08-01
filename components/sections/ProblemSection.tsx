"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Send, FileText, FolderOpen, Camera, Globe, BookCopy, Link2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const chaosItems = [
  { icon: <MessageCircle size={14} />, label: "WhatsApp group" },
  { icon: <Send size={14} />, label: "Telegram channel" },
  { icon: <FileText size={14} />, label: "Random PDF" },
  { icon: <FolderOpen size={14} />, label: "Google Drive folder" },
  { icon: <Camera size={14} />, label: "Screenshot of notes" },
  { icon: <Globe size={14} />, label: "Random website" },
  { icon: <BookCopy size={14} />, label: "Senior&apos;s old notes" },
  { icon: <Link2 size={14} />, label: "Forwarded link" },
];

const organizedItems = [
  { label: "PYQs", sub: "By year, exam & topic" },
  { label: "Practice", sub: "Topic-based banks" },
  { label: "Notes", sub: "Unit and subject" },
  { label: "Quizzes", sub: "Quick self-testing" },
];

const rotations = ["-2deg", "1.5deg", "-1deg", "2deg", "-1.5deg", "1deg", "-2.5deg", "2.5deg"];

export function ProblemSection() {
  return (
    <section id="problem" style={{ padding: "6rem 0", position: "relative", background: "var(--color-surface)" }}>
      <div className="section-sep" />

      <div className="container-wide">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="badge badge-accent" style={{ marginBottom: 20, display: "inline-flex" }}>
              The problem
            </span>
            <h2 className="display-lg" style={{ marginBottom: 16 }}>
              Exam tomorrow.{" "}
              <span className="gradient-text-accent">Resources everywhere.</span>
            </h2>
            <p className="text-xl-body" style={{ maxWidth: 500, margin: "0 auto" }}>
              Students spend more time hunting for study material than actually
              studying. That&apos;s the problem Studyit fixes.
            </p>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: 24,
            alignItems: "center",
          }}
          className="problem-grid"
        >
          {/* Chaos panel */}
          <Reveal direction="left">
            <div
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: 16,
                padding: 28,
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div style={{ marginBottom: 16 }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-text-muted)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  Right now · Before every exam
                </span>
              </div>

              <Stagger staggerDelay={0.06}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {chaosItems.map((item, i) => (
                    <StaggerItem key={item.label}>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "7px 12px",
                          background: "var(--color-surface)",
                          border: "1.5px solid var(--color-border)",
                          borderRadius: 8,
                          fontSize: "0.875rem",
                          color: "var(--color-text-secondary)",
                          transform: `rotate(${rotations[i % rotations.length]})`,
                          boxShadow: "var(--shadow-sm)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <span style={{ color: "var(--color-text-muted)" }}>
                          {item.icon}
                        </span>
                        <span>{item.label}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </Stagger>

              <div
                style={{
                  marginTop: 20,
                  padding: "10px 14px",
                  background: "rgba(220,38,38,0.06)",
                  border: "1px solid rgba(220,38,38,0.15)",
                  borderRadius: 8,
                  fontSize: "0.875rem",
                  color: "#B91C1C",
                  fontStyle: "italic",
                }}
              >
                &ldquo;Anyone have DSA PYQs for DTU Sem 3??&rdquo;
              </div>
            </div>
          </Reveal>

          {/* Arrow */}
          <Reveal>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
              }}
            >
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: 48,
                  height: 48,
                  background: "var(--color-primary)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  boxShadow: "var(--shadow-primary)",
                  flexShrink: 0,
                }}
              >
                <ArrowRight size={20} />
              </motion.div>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "var(--color-text-muted)",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 600,
                }}
              >
                Studyit
              </span>
            </div>
          </Reveal>

          {/* Organized panel */}
          <Reveal direction="right">
            <div
              style={{
                background: "linear-gradient(135deg, rgba(79,70,229,0.05) 0%, rgba(124,58,237,0.03) 100%)",
                border: "1.5px solid rgba(79,70,229,0.15)",
                borderRadius: 16,
                padding: 28,
                boxShadow: "var(--shadow-md)",
              }}
            >
              <div style={{ marginBottom: 16 }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-text-muted)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  With Studyit
                </span>
              </div>

              {/* Hierarchy */}
              <div style={{ marginBottom: 16 }}>
                {["University", "Program", "Semester", "Subject"].map(
                  (level, i) => (
                    <div
                      key={level}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          padding: "6px 14px",
                          background:
                            i === 3
                              ? "var(--color-primary)"
                              : i === 0
                              ? "var(--color-surface)"
                              : "var(--color-surface)",
                          border: `1.5px solid ${
                            i === 3
                              ? "var(--color-primary)"
                              : "var(--color-border)"
                          }`,
                          borderRadius: 8,
                          fontSize: "0.875rem",
                          color:
                            i === 3
                              ? "#fff"
                              : "var(--color-text-secondary)",
                          fontWeight: i === 3 ? 700 : i === 0 ? 600 : 400,
                          boxShadow: i === 3 ? "var(--shadow-primary)" : "var(--shadow-sm)",
                        }}
                      >
                        {level}
                      </div>
                      {i < 3 && (
                        <div
                          style={{
                            width: 1,
                            height: 12,
                            background: "var(--color-border)",
                            marginLeft: 18,
                          }}
                        />
                      )}
                    </div>
                  )
                )}
              </div>

              {/* Resource chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {organizedItems.map((item) => (
                  <div
                    key={item.label}
                    style={{
                      padding: "6px 12px",
                      background: "var(--color-primary-dim)",
                      border: "1px solid rgba(79,70,229,0.15)",
                      borderRadius: 8,
                      fontSize: "0.8125rem",
                      color: "var(--color-primary)",
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Tagline */}
        <Reveal delay={0.2}>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "var(--color-text)",
                fontFamily: "var(--font-sans)",
                letterSpacing: "-0.025em",
                marginBottom: 8,
              }}
            >
              Stop hunting.{" "}
              <span className="gradient-text-primary">Start preparing.</span>
            </p>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "var(--color-text-secondary)",
              }}
            >
              Studyit organizes academic resources around your actual university
              curriculum.
            </p>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .problem-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
