"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Zap, FileText, Target, ChevronRight, Clock, Star, Hash, AlertCircle } from "lucide-react";
import { demoUniversities, defaultDemo } from "@/data/demo";
import { Reveal } from "@/components/motion/Reveal";
import { track } from "@/lib/analytics";
import type { DemoQuestion, DemoResource } from "@/types";

type Tab = "pyqs" | "practice" | "notes" | "quiz";

const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: "pyqs", label: "PYQs", icon: <BookOpen size={14} /> },
  { id: "practice", label: "Practice", icon: <Zap size={14} /> },
  { id: "notes", label: "Notes", icon: <FileText size={14} /> },
  { id: "quiz", label: "Quiz", icon: <Target size={14} /> },
];

const difficultyStyles: Record<string, { color: string; bg: string; border: string }> = {
  Easy: { color: "#059669", bg: "rgba(5,150,105,0.08)", border: "rgba(5,150,105,0.2)" },
  Medium: { color: "#B45309", bg: "rgba(217,119,6,0.08)", border: "rgba(217,119,6,0.2)" },
  Hard: { color: "#DC2626", bg: "rgba(220,38,38,0.08)", border: "rgba(220,38,38,0.2)" },
};

const typeStyles: Record<string, { color: string; bg: string; border: string }> = {
  PDF: { color: "#4F46E5", bg: "rgba(79,70,229,0.08)", border: "rgba(79,70,229,0.2)" },
  Notes: { color: "#059669", bg: "rgba(5,150,105,0.08)", border: "rgba(5,150,105,0.2)" },
  Slides: { color: "#B45309", bg: "rgba(217,119,6,0.08)", border: "rgba(217,119,6,0.2)" },
  Video: { color: "#DC2626", bg: "rgba(220,38,38,0.08)", border: "rgba(220,38,38,0.2)" },
};

export function ProductPreview() {
  const [activeTab, setActiveTab] = useState<Tab>("pyqs");

  const uni = demoUniversities.find((u) => u.id === defaultDemo.universityId)!;
  const program = uni.programs.find((p) => p.id === defaultDemo.programId)!;
  const semester = program.semesters.find((s) => s.id === defaultDemo.semesterId)!;
  const subject = semester.subjects.find((s) => s.id === defaultDemo.subjectId)!;

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    track("product_demo_tab_changed", { tab });
  };

  return (
    <section id="product-preview" style={{ padding: "6rem 0", background: "var(--color-bg)" }}>
      <div className="section-sep" />
      <div className="container-wide">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge badge-primary" style={{ marginBottom: 20, display: "inline-flex" }}>
              Product preview
            </span>
            <h2 className="display-lg" style={{ marginBottom: 16 }}>
              What Studyit looks like
            </h2>
            <p className="text-xl-body" style={{ maxWidth: 480, margin: "0 auto" }}>
              A real academic structure — not a folder dump. Everything tied to your university, semester and subjects.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div className="demo-window">
              {/* Title bar */}
              <div className="demo-titlebar">
                <div className="demo-dot" style={{ background: "#ef4444", opacity: 0.5 }} />
                <div className="demo-dot" style={{ background: "#f59e0b", opacity: 0.5 }} />
                <div className="demo-dot" style={{ background: "#22c55e", opacity: 0.5 }} />
                <span style={{ marginLeft: 14, fontSize: "0.8125rem", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
                  studyit.in / dtu / btech-cs / sem-3 / dsa
                </span>
              </div>

              <div style={{ padding: "20px 24px" }}>
                {/* Breadcrumb */}
                <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
                  {[uni.shortName, program.shortName, semester.label, subject.name].map((crumb, i) => (
                    <span key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      {i > 0 && <ChevronRight size={12} style={{ color: "var(--color-text-subtle)", flexShrink: 0 }} />}
                      <span style={{
                        padding: "3px 10px",
                        background: i === 3 ? "var(--color-primary-dim)" : i === 2 ? "var(--color-surface-2)" : "transparent",
                        border: i === 3 ? "1px solid rgba(79,70,229,0.2)" : i === 2 ? "1px solid var(--color-border)" : "none",
                        borderRadius: 6,
                        fontSize: "0.8125rem",
                        color: i === 3 ? "var(--color-primary)" : i >= 2 ? "var(--color-text-secondary)" : "var(--color-text-muted)",
                        fontWeight: i === 3 ? 700 : 400,
                      }}>
                        {crumb}
                      </span>
                    </span>
                  ))}
                </div>

                {/* Stats row */}
                <div style={{ display: "flex", gap: 12, marginBottom: 20, padding: "12px 16px", background: "var(--color-surface-2)", borderRadius: 10, border: "1px solid var(--color-border)", flexWrap: "wrap" }}>
                  {[
                    { label: "PYQs", value: subject.pyqCount, icon: <BookOpen size={13} />, color: "#4F46E5" },
                    { label: "Practice", value: subject.practiceCount, icon: <Zap size={13} />, color: "#7C3AED" },
                    { label: "Notes", value: subject.notesCount, icon: <FileText size={13} />, color: "#B45309" },
                    { label: "Quiz", value: `${subject.quizCount}Q`, icon: <Target size={13} />, color: "#059669" },
                  ].map((stat) => (
                    <div key={stat.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ color: stat.color }}>{stat.icon}</span>
                      <span style={{ fontWeight: 700, color: stat.color, fontFamily: "var(--font-mono)", fontSize: "0.9rem" }}>{stat.value}</span>
                      <span style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tabs */}
                <div style={{ display: "flex", gap: 4, marginBottom: 20, flexWrap: "wrap" }}>
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      className={`demo-tab ${activeTab === tab.id ? "active" : ""}`}
                      style={{ display: "flex", alignItems: "center", gap: 6 }}
                    >
                      {tab.icon}{tab.label}
                    </button>
                  ))}
                </div>

                {/* Content */}
                <div style={{ minHeight: 280 }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                    >
                      {activeTab === "pyqs" && <PYQsTab questions={subject.questions} />}
                      {activeTab === "practice" && <PracticeTab topics={subject.practiceTopics} />}
                      {activeTab === "notes" && <NotesTab resources={subject.resources} />}
                      {activeTab === "quiz" && <QuizTab count={subject.quizCount} />}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 14, color: "var(--color-text-muted)", fontSize: "0.8125rem", fontFamily: "var(--font-mono)" }}>
              <AlertCircle size={12} />
              Demonstration only · not real platform data
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PYQsTab({ questions }: { questions: DemoQuestion[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {questions.slice(0, 3).map((q) => {
        const diff = difficultyStyles[q.difficulty] ?? difficultyStyles.Medium;
        return (
          <motion.div
            key={q.id}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            style={{ padding: "14px 16px", background: "var(--color-surface)", border: "1.5px solid var(--color-border)", borderRadius: 10, boxShadow: "var(--shadow-sm)" }}
            whileHover={{ borderColor: "rgba(79,70,229,0.25)", boxShadow: "var(--shadow-md)" }}
          >
            <p style={{ fontSize: "0.9rem", color: "var(--color-text)", lineHeight: 1.55, marginBottom: 10 }}>
              {q.text}
            </p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
              <span className="meta-tag"><Clock size={10} style={{ marginRight: 3 }} />{q.year}</span>
              <span className="meta-tag">{q.examType}</span>
              <span className="meta-tag">{q.marks} marks</span>
              {q.topic && <span className="meta-tag"><Hash size={10} style={{ marginRight: 2 }} />{q.topic}</span>}
              <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: "0.75rem", fontWeight: 600, color: diff.color, background: diff.bg, border: `1px solid ${diff.border}`, fontFamily: "var(--font-mono)" }}>
                {q.difficulty}
              </span>
            </div>
          </motion.div>
        );
      })}
      <div style={{ textAlign: "center", padding: "10px", fontSize: "0.8125rem", color: "var(--color-text-muted)", border: "1px dashed var(--color-border)", borderRadius: 8 }}>
        +{questions.length > 3 ? 125 : 0} more questions across all years
      </div>
    </div>
  );
}

function PracticeTab({ topics }: { topics: string[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", marginBottom: 4 }}>
        Practice by topic — pick where to start
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {topics.map((topic, i) => (
          <motion.button
            key={topic}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.04 }}
            style={{ padding: "8px 14px", background: "var(--color-surface)", border: "1.5px solid var(--color-border)", borderRadius: 8, fontSize: "0.875rem", color: "var(--color-text-secondary)", cursor: "pointer", fontFamily: "var(--font-body)", display: "flex", alignItems: "center", gap: 6, boxShadow: "var(--shadow-sm)", transition: "all 140ms" }}
            whileHover={{ borderColor: "rgba(79,70,229,0.35)", color: "var(--color-primary)", backgroundColor: "var(--color-primary-dim)" }}
          >
            <ChevronRight size={12} />{topic}
          </motion.button>
        ))}
      </div>
      <div style={{ marginTop: 8, padding: "10px 14px", background: "var(--color-surface-2)", borderRadius: 8, border: "1px solid var(--color-border)", fontSize: "0.8125rem", color: "var(--color-text-muted)", display: "flex", alignItems: "center", gap: 6 }}>
        <Star size={12} style={{ color: "#B45309" }} />
        240 practice questions across 8 topics
      </div>
    </div>
  );
}

function NotesTab({ resources }: { resources: DemoResource[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {resources.map((r, i) => {
        const ts = typeStyles[r.type] ?? typeStyles.Notes;
        return (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 14px", background: "var(--color-surface)", border: "1.5px solid var(--color-border)", borderRadius: 10, cursor: "pointer", gap: 12, boxShadow: "var(--shadow-sm)" }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--color-text)", marginBottom: 4, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.title}</div>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span className="meta-tag">{r.unit}</span>
                <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>{r.topic}</span>
              </div>
            </div>
            <span style={{ padding: "3px 8px", borderRadius: 4, fontSize: "0.75rem", fontWeight: 700, color: ts.color, background: ts.bg, border: `1px solid ${ts.border}`, fontFamily: "var(--font-mono)", flexShrink: 0 }}>
              {r.type}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

function QuizTab({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px", textAlign: "center", gap: 16 }}>
      <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--color-primary-dim)", border: "1.5px solid rgba(79,70,229,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary)" }}>
        <Target size={28} />
      </div>
      <div>
        <h4 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--color-text)", marginBottom: 6, fontFamily: "var(--font-sans)" }}>DSA Quick Quiz</h4>
        <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>{count} questions · ~15 min · Mixed topics</p>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        {["Time Complexity", "Trees", "Sorting"].map((t) => <span key={t} className="meta-tag">{t}</span>)}
      </div>
      <button className="btn btn-secondary" disabled style={{ cursor: "not-allowed", opacity: 0.6 }}>
        Start Quiz — Coming Soon
      </button>
    </div>
  );
}
