"use client";

import { BookOpen, Zap, Target, FileText } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const pillars = [
  {
    id: "pyqs",
    Icon: BookOpen,
    accentColor: "#4F46E5",
    bgColor: "rgba(79,70,229,0.07)",
    borderColor: "rgba(79,70,229,0.15)",
    label: "PYQs",
    title: "Previous Year Questions",
    description: "Questions from actual university exams, organized by year, semester, exam type and topic. Find what actually comes up.",
    tags: ["2025", "End Semester", "10 Marks", "Unit 3"],
    highlight: "Find the questions that actually matter.",
    highlightColor: "rgba(79,70,229,0.07)",
    highlightBorder: "rgba(79,70,229,0.15)",
    highlightText: "#4F46E5",
  },
  {
    id: "practice",
    Icon: Zap,
    accentColor: "#7C3AED",
    bgColor: "rgba(124,58,237,0.07)",
    borderColor: "rgba(124,58,237,0.15)",
    label: "Practice",
    title: "Topic-based Practice",
    description: "Drill down into specific topics before your exam. Questions tagged by difficulty, marks and concept.",
    tags: ["Arrays", "Trees", "Graphs", "DP"],
    highlight: "Target your weak areas before the exam.",
    highlightColor: "rgba(124,58,237,0.07)",
    highlightBorder: "rgba(124,58,237,0.15)",
    highlightText: "#7C3AED",
  },
  {
    id: "quizzes",
    Icon: Target,
    accentColor: "#059669",
    bgColor: "rgba(5,150,105,0.07)",
    borderColor: "rgba(5,150,105,0.15)",
    label: "Quizzes",
    title: "Quick Revision Quizzes",
    description: "Short subject and topic quizzes for last-minute revision. Instant feedback, progress tracking.",
    tags: ["20 Questions", "15 min", "Instant Feedback"],
    highlight: "Revise fast. Know where you stand.",
    highlightColor: "rgba(5,150,105,0.07)",
    highlightBorder: "rgba(5,150,105,0.15)",
    highlightText: "#059669",
  },
  {
    id: "notes",
    Icon: FileText,
    accentColor: "#B45309",
    bgColor: "rgba(217,119,6,0.07)",
    borderColor: "rgba(217,119,6,0.15)",
    label: "Notes",
    title: "Notes & Resources",
    description: "Subject notes organized by unit and topic — not random Drive links. Uploaded by students from your university.",
    tags: ["Unit 03", "Graph Algorithms", "12 Resources"],
    highlight: "Organized material, not random file dumps.",
    highlightColor: "rgba(217,119,6,0.07)",
    highlightBorder: "rgba(217,119,6,0.15)",
    highlightText: "#B45309",
  },
];

export function ProductPillars() {
  return (
    <section id="features" style={{ padding: "6rem 0", background: "var(--color-surface)" }}>
      <div className="section-sep" />
      <div className="container-wide">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge badge-primary" style={{ marginBottom: 20, display: "inline-flex" }}>
              What&apos;s inside
            </span>
            <h2 className="display-lg" style={{ marginBottom: 16 }}>
              Everything you need before the exam
            </h2>
            <p className="text-xl-body" style={{ maxWidth: 480, margin: "0 auto" }}>
              Four ways to prepare — all organized around your university, semester and subjects.
            </p>
          </div>
        </Reveal>

        <Stagger staggerDelay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            {pillars.map((p) => (
              <StaggerItem key={p.id}>
                <div
                  style={{
                    height: "100%",
                    background: "var(--color-surface)",
                    border: "1.5px solid var(--color-border)",
                    borderRadius: 16,
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    boxShadow: "var(--shadow-sm)",
                    transition: "box-shadow var(--transition-base), border-color var(--transition-base), transform var(--transition-base)",
                    cursor: "default",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = "var(--shadow-lg)";
                    el.style.borderColor = p.borderColor;
                    el.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = "var(--shadow-sm)";
                    el.style.borderColor = "var(--color-border)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: p.bgColor,
                      border: `1.5px solid ${p.borderColor}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: p.accentColor,
                      flexShrink: 0,
                    }}
                  >
                    <p.Icon size={22} />
                  </div>

                  {/* Text */}
                  <div>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: p.accentColor,
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      {p.label}
                    </span>
                    <h3
                      style={{
                        fontSize: "1.0625rem",
                        fontWeight: 700,
                        color: "var(--color-text)",
                        fontFamily: "var(--font-sans)",
                        lineHeight: 1.3,
                        marginBottom: 10,
                      }}
                    >
                      {p.title}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.65 }}>
                      {p.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {p.tags.map((tag) => (
                      <span key={tag} className="meta-tag">{tag}</span>
                    ))}
                  </div>

                  {/* Highlight */}
                  <div
                    style={{
                      marginTop: "auto",
                      padding: "10px 12px",
                      background: p.highlightColor,
                      border: `1px solid ${p.highlightBorder}`,
                      borderRadius: 8,
                      fontSize: "0.8125rem",
                      color: p.highlightText,
                      fontWeight: 600,
                    }}
                  >
                    {p.highlight}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
