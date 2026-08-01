"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/config/navigation";
import { track } from "@/lib/analytics";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    if (id.startsWith("#")) {
      document.getElementById(id.slice(1))?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleJoin = () => {
    track("hero_join_clicked", { source: "navbar" });
    scrollTo("#early-access");
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 240ms cubic-bezier(0.4,0,0.2,1)",
          backgroundColor: scrolled ? "rgba(247,248,255,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
          boxShadow: scrolled ? "0 1px 12px rgba(13,14,38,0.06)" : "none",
        }}
      >
        <div className="container-wide">
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: scrolled ? 58 : 70,
              transition: "height 240ms cubic-bezier(0.4,0,0.2,1)",
            }}
            aria-label="Main navigation"
          >
            {/* Logo */}
            <a
              href="/"
              style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
              aria-label="Studyit home"
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 9,
                  background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 2px 10px rgba(79,70,229,0.3)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 4h12M2 8h8M2 12h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 800,
                  fontSize: "1.125rem",
                  color: "var(--color-text)",
                  letterSpacing: "-0.025em",
                }}
              >
                Studyit
              </span>
            </a>

            {/* Desktop navigation */}
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
              className="nav-desktop"
            >
              {mainNav.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "0.5rem 0.875rem",
                      borderRadius: 8,
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      color: "var(--color-text-secondary)",
                      fontFamily: "var(--font-body)",
                      transition: "color var(--transition-fast), background var(--transition-fast)",
                    }}
                    onMouseEnter={e => {
                      const t = e.currentTarget;
                      t.style.color = "var(--color-text)";
                      t.style.background = "var(--color-surface-2)";
                    }}
                    onMouseLeave={e => {
                      const t = e.currentTarget;
                      t.style.color = "var(--color-text-secondary)";
                      t.style.background = "transparent";
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {/* CTA */}
              <button
                onClick={handleJoin}
                className="btn btn-primary"
                style={{ fontSize: "0.9rem", padding: "0.5625rem 1.25rem" }}
              >
                Join Early Access
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                style={{
                  background: "var(--color-surface)",
                  border: "1.5px solid var(--color-border)",
                  borderRadius: 8,
                  padding: "0.4375rem",
                  cursor: "pointer",
                  color: "var(--color-text-secondary)",
                  display: "none",
                  boxShadow: "var(--shadow-sm)",
                }}
                className="nav-mobile-btn"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              backgroundColor: "rgba(247,248,255,0.98)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              paddingTop: 80,
              paddingInline: 24,
            }}
          >
            <motion.nav
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
            >
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 4 }}>
                {mainNav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <button
                      onClick={() => scrollTo(item.href)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        background: "none",
                        border: "none",
                        padding: "1rem 0.5rem",
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        fontFamily: "var(--font-sans)",
                        color: "var(--color-text-secondary)",
                        cursor: "pointer",
                        borderBottom: "1px solid var(--color-border)",
                        transition: "color var(--transition-fast)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                style={{ marginTop: 28 }}
              >
                <button
                  onClick={handleJoin}
                  style={{
                    width: "100%",
                    padding: "1rem",
                    borderRadius: 12,
                    background: "var(--color-primary)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1rem",
                    fontFamily: "var(--font-body)",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "var(--shadow-primary)",
                  }}
                >
                  Join Early Access
                </button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .nav-desktop { display: flex !important; }
          .nav-mobile-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
