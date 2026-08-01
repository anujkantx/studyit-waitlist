"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, GraduationCap } from "lucide-react";
import { track } from "@/lib/analytics";

export function Hero() {
  const handleJoin = () => {
    track("hero_join_clicked", { source: "hero" });
    document.getElementById("early-access")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleExplore = () => {
    track("hero_explore_clicked");
    document.getElementById("product-preview")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 100,
        paddingBottom: 80,
        overflow: "hidden",
      }}
    >
      {/* Grid background */}
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
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Ambient top gradient */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 500,
          borderRadius: "0 0 50% 50%",
          background: "radial-gradient(ellipse, rgba(79,70,229,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-wide"
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="badge badge-primary"
            style={{ marginBottom: 28, gap: 6 }}
          >
            <GraduationCap size={13} />
            Built for college students
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="display-xl"
          style={{ textAlign: "center", maxWidth: 760, marginBottom: 24 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Your semester.{" "}
          <span className="gradient-text-primary">Finally organized.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-xl-body"
          style={{ textAlign: "center", maxWidth: 540, marginBottom: 40 }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Studyit brings PYQs, practice questions, quizzes, notes and academic
          resources together — organized around your university, semester and subjects.
        </motion.p>

        {/* CTAs */}
        <motion.div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 20,
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={handleJoin}
            className="btn btn-primary btn-lg"
          >
            Join Early Access
            <ArrowRight size={18} />
          </button>
          <button
            onClick={handleExplore}
            className="btn btn-secondary btn-lg"
          >
            See What&apos;s Coming
          </button>
        </motion.div>

        {/* Microcopy */}
        <motion.p
          style={{
            fontSize: "0.875rem",
            color: "var(--color-text-muted)",
            textAlign: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          Free early access · Built with students
        </motion.p>

        {/* Product strip */}
        <motion.div
          style={{ marginTop: 64, width: "100%", maxWidth: 920 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <HeroStrip />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          color: "var(--color-text-subtle)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function HeroStrip() {
  const subjects = [
    { name: "Data Structures & Algorithms", uni: "DTU", sem: "Sem 3", pyqs: 128, practice: 240, notes: 34, active: true },
    { name: "Operating Systems", uni: "DTU", sem: "Sem 4", pyqs: 112, practice: 200, notes: 28, active: false },
    { name: "Database Management Systems", uni: "MU", sem: "Sem 5", pyqs: 104, practice: 190, notes: 26, active: false },
  ];

  return (
    <div
      className="demo-window"
      style={{ boxShadow: "0 32px 80px -20px rgba(13,14,38,0.14), 0 0 0 1px rgba(13,14,38,0.04)" }}
    >
      {/* Title bar */}
      <div className="demo-titlebar">
        <div className="demo-dot" style={{ background: "#ef4444", opacity: 0.6 }} />
        <div className="demo-dot" style={{ background: "#f59e0b", opacity: 0.6 }} />
        <div className="demo-dot" style={{ background: "#22c55e", opacity: 0.6 }} />
        <span
          style={{
            marginLeft: 12,
            fontSize: "0.8125rem",
            color: "var(--color-text-muted)",
            fontFamily: "var(--font-mono)",
          }}
        >
          studyit.in / dtu / btech-cs / sem-3
        </span>
      </div>

      <div style={{ padding: "24px" }}>
        {/* Breadcrumb */}
        <div
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
            marginBottom: 20,
            flexWrap: "wrap",
          }}
        >
          {["Delhi Technological University", "B.Tech CS", "Semester 3"].map(
            (crumb, i) => (
              <span
                key={crumb}
                style={{ display: "flex", alignItems: "center", gap: 8 }}
              >
                <span
                  style={{
                    padding: "3px 10px",
                    background:
                      i === 2
                        ? "var(--color-primary-dim)"
                        : "var(--color-surface-2)",
                    border: `1px solid ${
                      i === 2
                        ? "rgba(79,70,229,0.2)"
                        : "var(--color-border)"
                    }`,
                    borderRadius: 6,
                    fontSize: "0.8125rem",
                    color:
                      i === 2
                        ? "var(--color-primary)"
                        : "var(--color-text-secondary)",
                    fontWeight: i === 2 ? 600 : 400,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {crumb}
                </span>
                {i < 2 && (
                  <span
                    style={{
                      color: "var(--color-text-subtle)",
                      fontSize: "0.75rem",
                    }}
                  >
                    ›
                  </span>
                )}
              </span>
            )
          )}
        </div>

        {/* Subject cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 12,
          }}
        >
          {subjects.map((subject, i) => (
            <motion.div
              key={subject.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              style={{
                background: subject.active
                  ? "linear-gradient(135deg, rgba(79,70,229,0.06), rgba(124,58,237,0.04))"
                  : "var(--color-surface-2)",
                border: `1px solid ${
                  subject.active
                    ? "rgba(79,70,229,0.18)"
                    : "var(--color-border)"
                }`,
                borderRadius: 12,
                padding: 16,
                boxShadow: subject.active ? "var(--shadow-sm)" : "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 12,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: "var(--color-text)",
                      marginBottom: 4,
                      lineHeight: 1.3,
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {subject.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--color-text-muted)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {subject.uni} · {subject.sem}
                  </div>
                </div>
                {subject.active && (
                  <span className="badge badge-primary" style={{ fontSize: "0.7rem", padding: "2px 8px" }}>
                    Active
                  </span>
                )}
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <StatPill label="PYQs" value={subject.pyqs} />
                <StatPill label="Practice" value={subject.practice} />
                <StatPill label="Notes" value={subject.notes} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatPill({ label, value }: { label: string; value: number }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        padding: "3px 8px",
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: 6,
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <span
        style={{
          fontSize: "0.8125rem",
          fontWeight: 700,
          color: "var(--color-primary)",
          fontFamily: "var(--font-mono)",
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontSize: "0.75rem",
          color: "var(--color-text-muted)",
          fontFamily: "var(--font-body)",
        }}
      >
        {label}
      </span>
    </div>
  );
}
