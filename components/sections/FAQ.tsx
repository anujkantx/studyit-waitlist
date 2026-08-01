"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems } from "@/data/faq";
import { Reveal } from "@/components/motion/Reveal";

export function FAQ() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="faq" style={{ padding: "6rem 0", background: "var(--color-bg)" }}>
      <div className="section-sep" />
      <div className="container-content">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge badge-primary" style={{ marginBottom: 20, display: "inline-flex" }}>
              FAQ
            </span>
            <h2 className="display-lg" style={{ marginBottom: 16 }}>
              Questions students ask
            </h2>
            <p className="text-xl-body" style={{ maxWidth: 420, margin: "0 auto" }}>
              Straightforward answers about what Studyit is and how it works.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{ background: "var(--color-surface)", border: "1.5px solid var(--color-border)", borderRadius: 16, overflow: "hidden", boxShadow: "var(--shadow-md)" }}>
            {faqItems.map((item, index) => {
              const isOpen = open === item.id;
              return (
                <div key={item.id} className="accordion-item" style={{ borderBottom: index === faqItems.length - 1 ? "none" : undefined }}>
                  <button
                    className="accordion-trigger"
                    onClick={() => setOpen(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    style={{ padding: "1.125rem 1.5rem" }}
                  >
                    <span style={{ flex: 1, textAlign: "left" }}>{item.question}</span>
                    <span style={{ flexShrink: 0, marginLeft: 16, color: isOpen ? "var(--color-primary)" : "var(--color-text-muted)", transition: "color var(--transition-fast)" }}>
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="accordion-content" style={{ padding: "0 1.5rem 1.375rem", borderTop: "1px solid var(--color-border-subtle)" }}>
                          <p style={{ paddingTop: "1rem" }}>{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
