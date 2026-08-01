"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Share2, Copy, Check, MessageCircle, ExternalLink, Sparkles } from "lucide-react";
import { waitlistSchema, type WaitlistSchema } from "@/lib/validation";
import { joinWaitlist, type WaitlistResult } from "@/actions/join-waitlist";
import { useAttribution } from "@/lib/attribution";
import { track } from "@/lib/analytics";
import { getWhatsAppShareUrl, getLinkedInShareUrl, getXShareUrl, copyShareLink } from "@/lib/share";
import { universities } from "@/data/universities";
import { motion, AnimatePresence } from "framer-motion";

type FormStatus = "idle" | "submitting" | "success" | "already_registered" | "error";

export function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [referralCode, setReferralCode] = useState<string | null>(null);

  const attribution = useAttribution();

  const { register, handleSubmit, formState: { errors } } = useForm<any>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistSchema) => {
    // Simple honeypot check
    if ((data as any).website) return;

    try {
      setStatus("submitting");
      track("early_access_started");

      const payload = { ...data, ...attribution };
      const result: WaitlistResult = await joinWaitlist(payload);

      if (result.success) {
        if (result.status === "already_registered") {
          setStatus("already_registered");
          track("early_access_duplicate");
        } else {
          setReferralCode(result.referralCode);
          setStatus("success");
          track("early_access_success", { university: data.university });
          
          if (data.wantsToContribute) track("contributor_interest");
          if (data.campusAmbassadorInterest) track("campus_ambassador_interest");
        }
      } else {
        setErrorMessage(result.message);
        setStatus("error");
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const handleCopy = async () => {
    const ok = await copyShareLink(referralCode || undefined);
    if (ok) {
      setCopied(true);
      track("copy_share_link");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (status === "success") {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        style={{ textAlign: "center", padding: compact ? "28px 20px" : "44px 28px", background: "var(--color-success-dim)", border: "1.5px solid rgba(5,150,105,0.2)", borderRadius: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}
      >
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.1 }}
          style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(5,150,105,0.12)", border: "1.5px solid rgba(5,150,105,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-success)" }}
        >
          <CheckCircle size={26} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text)", fontFamily: "var(--font-sans)", marginBottom: 8 }}>You&apos;re in 🎉</h3>
          <p style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)", lineHeight: 1.6, maxWidth: 360 }}>
            You&apos;re now on the Studyit early-access list. We&apos;ll let you know when it&apos;s ready for your university.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ width: "100%", maxWidth: 360, marginTop: 12 }}>
          <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", marginBottom: 12, display: "flex", alignItems: "center", gap: 6, justifyContent: "center" }}>
            <Share2 size={13} />
            Move Studyit one student closer to launch
          </p>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={getWhatsAppShareUrl(referralCode || undefined)} target="_blank" rel="noopener noreferrer" onClick={() => track("share_whatsapp")}
              style={{ padding: "8px 14px", background: "rgba(5,150,105,0.08)", border: "1px solid rgba(5,150,105,0.2)", borderRadius: 8, fontSize: "0.875rem", color: "var(--color-success)", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
              <MessageCircle size={14} /> WhatsApp
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={getLinkedInShareUrl(referralCode || undefined)} target="_blank" rel="noopener noreferrer" onClick={() => track("share_linkedin")}
              style={{ padding: "8px 14px", background: "var(--color-primary-dim)", border: "1px solid rgba(79,70,229,0.2)", borderRadius: 8, fontSize: "0.875rem", color: "var(--color-primary)", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
              <ExternalLink size={14} /> LinkedIn
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={getXShareUrl(referralCode || undefined)} target="_blank" rel="noopener noreferrer" onClick={() => track("share_x")}
              style={{ padding: "8px 14px", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: 8, fontSize: "0.875rem", color: "var(--color-text-secondary)", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
              <ExternalLink size={14} /> Post on X
            </motion.a>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleCopy}
              style={{ padding: "8px 14px", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: 8, fontSize: "0.875rem", color: "var(--color-text-secondary)", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
              {copied ? <Check size={13} /> : <Copy size={13} />}
              {copied ? "Copied" : "Copy Link"}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  if (status === "already_registered") {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        style={{ textAlign: "center", padding: "32px 24px", background: "var(--color-surface-2)", border: "1px solid var(--color-border)", borderRadius: 16 }}
      >
        <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--color-text)", marginBottom: 8 }}>You&apos;re already on the list 🎓</h3>
        <p style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
          We already have your email on the early-access list. We&apos;ll notify you when Studyit is ready!
        </p>
        <button onClick={() => setStatus("idle")} className="btn btn-secondary" style={{ marginTop: 20 }}>
          Back
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: "flex", flexDirection: "column", gap: 16, position: "relative" }}>
      {/* Honeypot field for basic anti-spam */}
      <input type="text" {...register("website" as any)} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      {!compact && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <label htmlFor="wl-name" className="label">Name <span style={{ color: "var(--color-text-muted)", fontWeight: 400 }}>(optional)</span></label>
          <motion.input whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(79,70,229,0.3)" }} transition={{ type: "spring", stiffness: 300, damping: 20 }} id="wl-name" type="text" placeholder="Your name" autoComplete="name" className={`input${errors.name ? " input-error" : ""}`} {...register("name")} />
          <AnimatePresence>
            {errors.name && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="error-message">{errors.name.message as string}</motion.p>}
          </AnimatePresence>
        </motion.div>
      )}

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <label htmlFor="wl-email" className="label">Email address *</label>
        <motion.input whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(79,70,229,0.3)" }} transition={{ type: "spring", stiffness: 300, damping: 20 }} id="wl-email" type="email" placeholder="your@email.com" autoComplete="email" className={`input${errors.email ? " input-error" : ""}`} {...register("email")} />
        <AnimatePresence>
          {errors.email && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="error-message">{errors.email.message as string}</motion.p>}
        </AnimatePresence>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <label htmlFor="wl-uni" className="label">Your university *</label>
        <motion.input whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(79,70,229,0.3)" }} transition={{ type: "spring", stiffness: 300, damping: 20 }} id="wl-uni" type="text" placeholder="e.g. Delhi Technological University" autoComplete="organization" className={`input${errors.university ? " input-error" : ""}`} list="uni-list" {...register("university")} />
        <datalist id="uni-list">{universities.map(u => <option key={u.id} value={u.name} />)}</datalist>
        <AnimatePresence>
          {errors.university && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="error-message">{errors.university.message as string}</motion.p>}
        </AnimatePresence>
      </motion.div>

      {!compact && (
        <>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <label htmlFor="wl-program" className="label">Program <span style={{ color: "var(--color-text-muted)", fontWeight: 400 }}>(optional)</span></label>
              <motion.input whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(79,70,229,0.3)" }} transition={{ type: "spring", stiffness: 300, damping: 20 }} id="wl-program" type="text" placeholder="e.g. B.Tech CS" className={`input${errors.program ? " input-error" : ""}`} {...register("program")} />
            </div>
            <div>
              <label htmlFor="wl-semester" className="label">Semester <span style={{ color: "var(--color-text-muted)", fontWeight: 400 }}>(optional)</span></label>
              <motion.input whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(79,70,229,0.3)" }} transition={{ type: "spring", stiffness: 300, damping: 20 }} id="wl-semester" type="text" placeholder="e.g. Semester 3" className={`input${errors.semester ? " input-error" : ""}`} {...register("semester")} />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 4 }}>
            <motion.label whileHover={{ x: 2 }} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>
              <input type="checkbox" {...register("wantsToContribute")} style={{ accentColor: "var(--color-primary)", width: 16, height: 16 }} />
              I want to contribute study resources
            </motion.label>
            <motion.label whileHover={{ x: 2 }} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>
              <input type="checkbox" {...register("campusAmbassadorInterest")} style={{ accentColor: "var(--color-primary)", width: 16, height: 16 }} />
              I&apos;m interested in helping Studyit grow on my campus
            </motion.label>
          </motion.div>
        </>
      )}

      <motion.button 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.6 }}
        whileHover={status !== "submitting" ? { scale: 1.02, boxShadow: "0 10px 25px -5px rgba(79,70,229,0.4)" } : {}}
        whileTap={status !== "submitting" ? { scale: 0.98 } : {}}
        type="submit" 
        disabled={status === "submitting"} 
        className="btn btn-primary btn-lg" 
        style={{ width: "100%", marginTop: 8, position: "relative", overflow: "hidden" }}
      >
        {status === "submitting" ? (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.4)", borderTopColor: "#fff", borderRadius: "50%", display: "inline-block" }} />
            Joining…
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            Get Early Access
            <Sparkles size={16} />
          </div>
        )}
      </motion.button>

      <AnimatePresence>
        {status === "error" && (
          <motion.p initial={{ opacity: 0, y: -10, height: 0 }} animate={{ opacity: 1, y: 0, height: "auto" }} exit={{ opacity: 0, height: 0 }} style={{ padding: "10px 14px", background: "var(--color-error-dim)", border: "1px solid rgba(220,38,38,0.2)", borderRadius: 8, fontSize: "0.875rem", color: "var(--color-error)", textAlign: "center" }}>
            {errorMessage || "Something went wrong. Please try again."}
          </motion.p>
        )}
      </AnimatePresence>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", textAlign: "center" }}>
        Join the early-access list. No spam. · <a href="/privacy" style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: 2 }}>Privacy</a>
      </motion.p>
    </form>
  );
}

