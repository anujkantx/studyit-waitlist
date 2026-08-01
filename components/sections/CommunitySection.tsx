"use client";

import { Upload, FileQuestion, BookCopy, CheckCircle, Heart, Award, Users } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const contributions = [
  { Icon: FileQuestion, title: "Submit PYQs", desc: "Upload previous year questions from your exams", status: "planned" },
  { Icon: BookCopy, title: "Contribute notes", desc: "Share your notes organized by unit and topic", status: "planned" },
  { Icon: Upload, title: "Add questions", desc: "Build out the practice question bank for your subject", status: "planned" },
  { Icon: CheckCircle, title: "Verify resources", desc: "Confirm accuracy of existing resources for your university", status: "planned" },
  { Icon: Heart, title: "Help juniors", desc: "Your contributions benefit students after you every semester", status: "planned" },
  { Icon: Award, title: "Top contributor", desc: "Get recognized for your academic contributions", status: "planned" },
];

const statusStyles = {
  building: { label: "Building", cls: "status-building" },
  planned: { label: "Planned", cls: "status-planned" },
  next: { label: "Next", cls: "status-next" },
};

export function CommunitySection() {
  return (
    <section id="community" style={{ padding: "6rem 0", background: "var(--color-bg)" }}>
      <div className="section-sep" />
      <div className="container-wide">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "start" }} className="community-grid">
          {/* Left */}
          <Reveal direction="left">
            <div style={{ position: "sticky", top: 100 }}>
              <span className="badge badge-accent" style={{ marginBottom: 20, display: "inline-flex" }}>Community</span>
              <h2 className="display-md" style={{ marginBottom: 16 }}>
                Built by students.{" "}
                <span className="gradient-text-accent">Better with students.</span>
              </h2>
              <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 24 }}>
                Studyit isn&apos;t a top-down content repository. It&apos;s designed for students to contribute, verify and improve the academic resources that every junior after them will benefit from.
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 28 }}>
                The more students contribute at a university, the stronger that university&apos;s resources become.
              </p>

              {/* Contributor preview card */}
              <div style={{ padding: "20px", background: "var(--color-surface)", border: "1.5px solid var(--color-border)", borderRadius: 14, boxShadow: "var(--shadow-md)" }}>
                <p style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", marginBottom: 14, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600 }}>
                  Future contributor profile
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--color-primary-dim)", border: "1.5px solid rgba(79,70,229,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary)" }}>
                    <Users size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--color-text)" }}>Campus Contributor</div>
                    <div style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>Delhi Technological University</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
                  {["42 PYQs", "18 notes", "Top contributor"].map(tag => <span key={tag} className="meta-tag">{tag}</span>)}
                </div>
                <span className="status-planned">Planned for Phase 3</span>
              </div>
            </div>
          </Reveal>

          {/* Right — contribution cards */}
          <Stagger staggerDelay={0.08}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="contrib-cards">
              {contributions.map(({ Icon, title, desc, status }) => {
                const st = statusStyles[status as keyof typeof statusStyles];
                return (
                  <StaggerItem key={title}>
                    <div
                      style={{
                        padding: "20px",
                        background: "var(--color-surface)",
                        border: "1.5px solid var(--color-border)",
                        borderRadius: 14,
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                        boxShadow: "var(--shadow-sm)",
                        transition: "box-shadow var(--transition-base), border-color var(--transition-base), transform var(--transition-base)",
                        cursor: "default",
                        height: "100%",
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.boxShadow = "var(--shadow-md)";
                        el.style.borderColor = "rgba(79,70,229,0.2)";
                        el.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.boxShadow = "var(--shadow-sm)";
                        el.style.borderColor = "var(--color-border)";
                        el.style.transform = "translateY(0)";
                      }}
                    >
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--color-surface-2)", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text-secondary)" }}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--color-text)", fontFamily: "var(--font-sans)", marginBottom: 4, lineHeight: 1.3 }}>{title}</h4>
                        <p style={{ fontSize: "0.84rem", color: "var(--color-text-secondary)", lineHeight: 1.55 }}>{desc}</p>
                      </div>
                      <div style={{ marginTop: "auto" }}>
                        <span className={st.cls}>{st.label}</span>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </div>
          </Stagger>
        </div>
      </div>
      <style>{`
        @media(max-width:1023px){.community-grid{grid-template-columns:1fr!important;}.community-grid>*:first-child{position:static!important;}}
        @media(max-width:480px){.contrib-cards{grid-template-columns:1fr!important;}}
      `}</style>
    </section>
  );
}
