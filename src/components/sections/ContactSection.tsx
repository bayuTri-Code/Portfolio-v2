"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiUser, FiMessageSquare, FiGithub, FiLinkedin, FiClock, FiArrowUpRight } from "react-icons/fi";
import SectionWrapper from "@/src/components/ui/SectionWrapper";
import { sendContactEmail } from "@/app/actions";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    body: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);
    setSubmitted(false);

    try {
      const result = await sendContactEmail(formState);
      if (result.success) {
        setSubmitted(true);
        setFormState({ name: "", email: "", body: "" });
      } else {
        setErrorMsg(result.error || "Failed to send message.");
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" title="Get In Touch" subtitle="Contact">
      <div className="grid gap-8 lg:grid-cols-12 items-stretch">
        
        {/* Left Side — Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col gap-4 h-full"
        >
          {/* Main Info Card */}
          <div className="flex-1 rounded-2xl border border-border/80 bg-surface-alt/40 p-6 backdrop-blur-sm flex flex-col justify-between relative overflow-hidden">
            {/* Ambient decoration */}
            <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-accent/5 blur-[50px] pointer-events-none" />

            <div>
              <h3 className="text-lg font-extrabold text-text tracking-tight flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Let&apos;s Build Together
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Have an exciting project, freelance opportunity, or just want to chat?
                Drop me a message! I&apos;m always open to discussing new ideas, 
                architectures, and digital products.
              </p>
            </div>

            <div className="mt-8 space-y-3.5">
              {/* Email Link */}
              <a
                href="mailto:bayutrihardians@gmail.com"
                className="group flex items-center justify-between rounded-xl border border-border/60 bg-surface/30 p-3.5 hover:border-accent/25 hover:bg-surface-hover/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-dim text-accent border border-accent/10">
                    <FiMail size={14} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-text-muted">Email</span>
                    <span className="text-xs font-bold text-text-secondary group-hover:text-text transition-colors">bayutrihardians@gmail.com</span>
                  </div>
                </div>
                <FiArrowUpRight size={14} className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* GitHub Link */}
              <a
                href="https://github.com/bayutri"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border/60 bg-surface/30 p-3.5 hover:border-accent/25 hover:bg-surface-hover/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-alt text-text-secondary border border-border/60">
                    <FiGithub size={14} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-text-muted">GitHub</span>
                    <span className="text-xs font-bold text-text-secondary group-hover:text-text transition-colors">github.com/bayutri</span>
                  </div>
                </div>
                <FiArrowUpRight size={14} className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* LinkedIn Link */}
              <a
                href="https://linkedin.com/in/bayutri"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border/60 bg-surface/30 p-3.5 hover:border-accent/25 hover:bg-surface-hover/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-alt text-text-secondary border border-border/60">
                    <FiLinkedin size={14} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-text-muted">LinkedIn</span>
                    <span className="text-xs font-bold text-text-secondary group-hover:text-text transition-colors">linkedin.com/in/bayutri</span>
                  </div>
                </div>
                <FiArrowUpRight size={14} className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs text-text-muted border-t border-border/30 pt-4">
              <FiClock size={13} className="text-accent/60" />
              <span>Typical response: under 24 hours</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side — Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <div className="rounded-2xl border border-border/80 bg-surface-alt/40 p-6 md:p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name Input */}
              <div className="group relative">
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-text-muted"
                >
                  Name
                </label>
                <div className="relative rounded-xl border border-border bg-surface/30 px-3.5 py-3 flex items-center gap-3 focus-within:border-accent/30 focus-within:bg-surface-hover/30 transition-all duration-300">
                  <FiUser
                    size={14}
                    className="text-text-muted group-focus-within:text-accent transition-colors"
                  />
                  <input
                    id="contact-name"
                    type="text"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    placeholder="Full name"
                    required
                    className="w-full bg-transparent text-sm text-text placeholder:text-text-muted focus:outline-none"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="group relative">
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-text-muted"
                >
                  Email
                </label>
                <div className="relative rounded-xl border border-border bg-surface/30 px-3.5 py-3 flex items-center gap-3 focus-within:border-accent/30 focus-within:bg-surface-hover/30 transition-all duration-300">
                  <FiMail
                    size={14}
                    className="text-text-muted group-focus-within:text-accent transition-colors"
                  />
                  <input
                    id="contact-email"
                    type="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder="email@example.com"
                    required
                    className="w-full bg-transparent text-sm text-text placeholder:text-text-muted focus:outline-none"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="group relative">
                <label
                  htmlFor="contact-body"
                  className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-text-muted"
                >
                  Message
                </label>
                <div className="relative rounded-xl border border-border bg-surface/30 px-3.5 py-3 flex items-start gap-3 focus-within:border-accent/30 focus-within:bg-surface-hover/30 transition-all duration-300">
                  <FiMessageSquare
                    size={14}
                    className="text-text-muted mt-1 group-focus-within:text-accent transition-colors"
                  />
                  <textarea
                    id="contact-body"
                    rows={5}
                    value={formState.body}
                    onChange={(e) =>
                      setFormState({ ...formState, body: e.target.value })
                    }
                    placeholder="Tell me about your project, idea, or role..."
                    required
                    className="w-full bg-transparent resize-none text-sm text-text placeholder:text-text-muted focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-xs font-bold uppercase tracking-wider text-bg shadow-md shadow-accent/15 transition-all duration-300 hover:bg-accent-soft hover:shadow-lg hover:shadow-accent/25 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="opacity-25"
                      />
                      <path
                        d="M4 12a8 8 0 018-8"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message
                    <FiSend size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </motion.button>

              {/* Success Banner */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-emerald-400"
                >
                  ✓ Message sent successfully! Thank you.
                </motion.div>
              )}

              {/* Error Banner */}
              {errorMsg && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-rose-400"
                >
                  ⚠ {errorMsg}
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
