"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Building2, CheckCircle, Users } from "lucide-react";
import { campusInterestSchema, type CampusInterestSchema } from "@/lib/validation";
import { joinWaitlist } from "@/actions/join-waitlist";
import { useAttribution } from "@/lib/attribution";
import { track } from "@/lib/analytics";
import { universities } from "@/data/universities";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const perks = [
  { Icon: Building2, title: "Priority for your university", desc: "Universities with more interest get prioritized in our rollout." },
  { Icon: Users, title: "Campus representative", desc: "Campus rep opportunity — contribute and help grow Studyit at your college." },
  { Icon: CheckCircle, title: "Early access guarantee", desc: "Campus reps get early access before general student launch." },
];

export function CampusSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const attribution = useAttribution();

  const { register, handleSubmit, formState: { errors } } = useForm<any>({
    resolver: zodResolver(campusInterestSchema),
  });

  const onSubmit = async (data: CampusInterestSchema) => {
    // Basic honeypot
    if ((data as any).website) return;

    setSubmitting(true);
    setErrorMessage("");
    try {
      // We map the campus interest schema over to the waitlist schema
      // ensuring campusAmbassadorInterest is forced true.
      const payload = {
        ...data,
        ...attribution,
        campusAmbassadorInterest: true,
        // Optional role can map to program if missing
        program: data.program || data.role || undefined,
      };

      const result = await joinWaitlist(payload);

      if (result.success) {
        setSubmitted(true);
        track("campus_interest_submitted", { university: data.university });
      } else {
        setErrorMessage(result.message);
        setSubmitting(false);
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <section id="campus" style={{ padding: "6rem 0", background: "var(--color-surface)" }}>
      <div className="section-sep" />
      <div className="container-wide">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge badge-accent" style={{ marginBottom: 20, display: "inline-flex" }}>
              Campus program
            </span>
            <h2 className="display-lg" style={{ marginBottom: 16 }}>
              Get Studyit at{" "}
              <span className="gradient-text-accent">your campus first.</span>
            </h2>
            <p className="text-xl-body" style={{ maxWidth: 480, margin: "0 auto" }}>
              Register your university&apos;s interest and become a campus representative.
              Universities with more registrations get prioritized.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, maxWidth: 880, margin: "0 auto" }} className="campus-grid">
          {/* Perks */}
          <Stagger staggerDelay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {perks.map(({ Icon, title, desc }) => (
                <StaggerItem key={title}>
                  <div style={{ display: "flex", gap: 16, padding: "18px", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: 12, boxShadow: "var(--shadow-sm)" }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--color-accent-dim)", border: "1px solid rgba(217,119,6,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)", flexShrink: 0 }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--color-text)", fontFamily: "var(--font-sans)", marginBottom: 4 }}>{title}</h4>
                      <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>

          {/* Form */}
          <Reveal direction="right" delay={0.1}>
            <div style={{ background: "var(--color-surface)", border: "1.5px solid var(--color-border)", borderRadius: 16, padding: "28px", boxShadow: "var(--shadow-lg)" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "24px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--color-success-dim)", border: "1.5px solid rgba(5,150,105,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-success)" }}>
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--color-text)", fontFamily: "var(--font-sans)", marginBottom: 6 }}>University registered</h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                      We&apos;ve noted your university. You&apos;ll hear from us when we&apos;re ready to launch there.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {/* Honeypot field for basic anti-spam */}
                  <input type="text" {...register("website" as any)} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                  <div>
                    <p style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--color-text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>
                      Register your university
                    </p>
                  </div>

                  <div>
                    <label htmlFor="campus-name" className="label">Your name *</label>
                    <input id="campus-name" type="text" placeholder="Full name" autoComplete="name" className={`input${errors.name ? " input-error" : ""}`} {...register("name")} />
                    {errors.name && <p className="error-message">{errors.name.message as string}</p>}
                  </div>

                  <div>
                    <label htmlFor="campus-email" className="label">College email *</label>
                    <input id="campus-email" type="email" placeholder="name@college.edu.in" autoComplete="email" className={`input${errors.email ? " input-error" : ""}`} {...register("email")} />
                    {errors.email && <p className="error-message">{errors.email.message as string}</p>}
                  </div>

                  <div>
                    <label htmlFor="campus-uni" className="label">University *</label>
                    <input id="campus-uni" type="text" placeholder="e.g. Delhi Technological University" autoComplete="organization" className={`input${errors.university ? " input-error" : ""}`} list="campus-uni-list" {...register("university")} />
                    <datalist id="campus-uni-list">{universities.map(u => <option key={u.id} value={u.name} />)}</datalist>
                    {errors.university && <p className="error-message">{errors.university.message as string}</p>}
                  </div>

                  <div>
                    <label htmlFor="campus-role" className="label">Your role <span style={{ color: "var(--color-text-muted)", fontWeight: 400 }}>(optional)</span></label>
                    <input id="campus-role" type="text" placeholder="e.g. 3rd year B.Tech CS" className={`input${errors.role ? " input-error" : ""}`} {...register("role")} />
                  </div>

                  <button type="submit" disabled={submitting} className="btn btn-primary btn-lg" style={{ width: "100%", background: "var(--color-accent)", boxShadow: "0 4px 16px rgba(217,119,6,0.25)" }}>
                    {submitting ? (
                      <>
                        <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.4)", borderTopColor: "#fff", borderRadius: "50%", display: "inline-block", animation: "spin 0.6s linear infinite" }} />
                        Registering…
                      </>
                    ) : "Register My University"}
                  </button>

                  {errorMessage && (
                    <p style={{ padding: "10px 14px", background: "var(--color-error-dim)", border: "1px solid rgba(220,38,38,0.2)", borderRadius: 8, fontSize: "0.875rem", color: "var(--color-error)" }}>
                      {errorMessage}
                    </p>
                  )}

                  <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", textAlign: "center" }}>
                    Free · No commitment · Campus-first rollout
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`@media(max-width:767px){.campus-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
