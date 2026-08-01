"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, BookOpen, FileText, Target, Zap, AlertCircle } from "lucide-react";
import { demoUniversities } from "@/data/demo";
import { Reveal } from "@/components/motion/Reveal";
import { track } from "@/lib/analytics";

export function UniversityExperience() {
  const [selectedUniId, setSelectedUniId] = useState("dtu");
  const [selectedProgramId, setSelectedProgramId] = useState("btech-cs");
  const [selectedSemesterId, setSelectedSemesterId] = useState("sem3");
  const [selectedSubjectId, setSelectedSubjectId] = useState("dsa");

  const uni = demoUniversities.find((u) => u.id === selectedUniId)!;
  const program = uni.programs.find((p) => p.id === selectedProgramId) ?? uni.programs[0];
  const semester = program.semesters.find((s) => s.id === selectedSemesterId) ?? program.semesters[0];
  const subject = semester.subjects.find((s) => s.id === selectedSubjectId) ?? semester.subjects[0];

  const handleUniChange = (id: string) => {
    const u = demoUniversities.find((x) => x.id === id)!;
    setSelectedUniId(id);
    const prog = u.programs[0];
    setSelectedProgramId(prog.id);
    const sem = prog.semesters[0];
    setSelectedSemesterId(sem.id);
    setSelectedSubjectId(sem.subjects[0].id);
    track("university_selector_changed", { university: id });
  };

  const handleSemChange = (id: string) => {
    setSelectedSemesterId(id);
    const sem = program.semesters.find((s) => s.id === id)!;
    setSelectedSubjectId(sem.subjects[0].id);
  };

  const selectStyle: React.CSSProperties = {
    width: "100%",
    padding: "9px 36px 9px 12px",
    background: "var(--color-surface)",
    border: "1.5px solid var(--color-border)",
    borderRadius: 8,
    color: "var(--color-text)",
    fontFamily: "var(--font-body)",
    fontSize: "0.9rem",
    appearance: "none",
    cursor: "pointer",
    outline: "none",
    boxShadow: "var(--shadow-sm)",
  };

  return (
    <section id="university-experience" style={{ padding: "6rem 0", background: "var(--color-surface)" }}>
      <div className="section-sep" />
      <div className="container-wide">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge badge-accent" style={{ marginBottom: 20, display: "inline-flex" }}>
              Personalized
            </span>
            <h2 className="display-lg" style={{ marginBottom: 16 }}>
              Built around{" "}
              <span className="gradient-text-accent">your university</span>
            </h2>
            <p className="text-xl-body" style={{ maxWidth: 480, margin: "0 auto" }}>
              Studyit isn&apos;t a generic content dump. Everything maps to your actual university, program and semester.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 24, maxWidth: 880, margin: "0 auto" }} className="uni-grid">
            {/* Selectors */}
            <div style={{ background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: 16, padding: 24, display: "flex", flexDirection: "column", gap: 20, boxShadow: "var(--shadow-sm)" }}>
              <p style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600 }}>
                Your context
              </p>

              {/* University */}
              <div>
                <label htmlFor="uni-sel" style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 6 }}>University</label>
                <div style={{ position: "relative" }}>
                  <select id="uni-sel" value={selectedUniId} onChange={e => handleUniChange(e.target.value)} style={selectStyle}>
                    {demoUniversities.map(u => <option key={u.id} value={u.id}>{u.shortName} — {u.city}</option>)}
                  </select>
                  <ChevronDown size={14} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "var(--color-text-muted)", pointerEvents: "none" }} />
                </div>
              </div>

              {/* Program */}
              <div>
                <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 6 }}>Program</label>
                <div style={{ position: "relative" }}>
                  <select value={selectedProgramId} onChange={e => { setSelectedProgramId(e.target.value); const prog = uni.programs.find(p => p.id === e.target.value)!; setSelectedSemesterId(prog.semesters[0].id); setSelectedSubjectId(prog.semesters[0].subjects[0].id); }} style={selectStyle}>
                    {uni.programs.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                  </select>
                  <ChevronDown size={14} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "var(--color-text-muted)", pointerEvents: "none" }} />
                </div>
              </div>

              {/* Semester */}
              <div>
                <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 6 }}>Semester</label>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {program.semesters.map(sem => (
                    <button
                      key={sem.id}
                      onClick={() => handleSemChange(sem.id)}
                      style={{
                        padding: "6px 14px", borderRadius: 8, fontSize: "0.875rem", fontFamily: "var(--font-body)", fontWeight: 600, cursor: "pointer",
                        border: `1.5px solid ${selectedSemesterId === sem.id ? "var(--color-primary)" : "var(--color-border)"}`,
                        background: selectedSemesterId === sem.id ? "var(--color-primary-dim)" : "var(--color-surface)",
                        color: selectedSemesterId === sem.id ? "var(--color-primary)" : "var(--color-text-secondary)",
                        transition: "all 140ms", boxShadow: "var(--shadow-sm)",
                      }}
                    >{sem.label}</button>
                  ))}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 6 }}>Subject</label>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {semester.subjects.map(subj => (
                    <button
                      key={subj.id}
                      onClick={() => setSelectedSubjectId(subj.id)}
                      style={{
                        width: "100%", textAlign: "left", padding: "8px 12px", borderRadius: 8, fontSize: "0.875rem", fontFamily: "var(--font-body)", cursor: "pointer",
                        border: `1.5px solid ${selectedSubjectId === subj.id ? "var(--color-primary)" : "var(--color-border)"}`,
                        background: selectedSubjectId === subj.id ? "var(--color-primary-dim)" : "var(--color-surface)",
                        color: selectedSubjectId === subj.id ? "var(--color-primary)" : "var(--color-text-secondary)",
                        fontWeight: selectedSubjectId === subj.id ? 700 : 400,
                        transition: "all 140ms", boxShadow: "var(--shadow-sm)",
                      }}
                    >
                      {subj.name}
                      {subj.code && <span style={{ marginLeft: 8, fontSize: "0.75rem", opacity: 0.6, fontFamily: "var(--font-mono)" }}>{subj.code}</span>}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Preview panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedUniId}-${selectedProgramId}-${selectedSemesterId}-${selectedSubjectId}`}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.22 }}
                style={{ background: "var(--color-surface)", border: "1.5px solid rgba(79,70,229,0.2)", borderRadius: 16, padding: 24, display: "flex", flexDirection: "column", gap: 20, boxShadow: "var(--shadow-md)" }}
              >
                <div>
                  <p style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: 8, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600 }}>Your subject</p>
                  <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, fontFamily: "var(--font-sans)", color: "var(--color-text)", lineHeight: 1.3, marginBottom: 4 }}>{subject.name}</h3>
                  <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>{uni.shortName} · {program.shortName} · {semester.label}</p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {[
                    { label: "PYQs", count: subject.pyqCount, Icon: BookOpen, color: "#4F46E5", bg: "rgba(79,70,229,0.07)", border: "rgba(79,70,229,0.15)" },
                    { label: "Practice", count: subject.practiceCount, Icon: Zap, color: "#7C3AED", bg: "rgba(124,58,237,0.07)", border: "rgba(124,58,237,0.15)" },
                    { label: "Notes", count: subject.notesCount, Icon: FileText, color: "#B45309", bg: "rgba(217,119,6,0.07)", border: "rgba(217,119,6,0.15)" },
                    { label: "Quiz", count: subject.quizCount, Icon: Target, color: "#059669", bg: "rgba(5,150,105,0.07)", border: "rgba(5,150,105,0.15)" },
                  ].map(res => (
                    <div key={res.label} style={{ padding: "14px", background: res.bg, border: `1px solid ${res.border}`, borderRadius: 10, display: "flex", flexDirection: "column", gap: 8 }}>
                      <res.Icon size={16} style={{ color: res.color }} />
                      <div>
                        <div style={{ fontSize: "1.375rem", fontWeight: 800, color: res.color, fontFamily: "var(--font-mono)", lineHeight: 1 }}>{res.count}</div>
                        <div style={{ fontSize: "0.8125rem", color: "var(--color-text-secondary)", marginTop: 2 }}>{res.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {subject.practiceTopics.length > 0 && (
                  <div>
                    <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", marginBottom: 8, fontWeight: 600 }}>Practice topics</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {subject.practiceTopics.slice(0, 5).map(t => <span key={t} className="meta-tag">{t}</span>)}
                      {subject.practiceTopics.length > 5 && <span className="meta-tag">+{subject.practiceTopics.length - 5} more</span>}
                    </div>
                  </div>
                )}

                <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 12px", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: 8, fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
                  <AlertCircle size={12} />
                  Demonstration only — not real platform data
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
      <style>{`@media(max-width:767px){.uni-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
