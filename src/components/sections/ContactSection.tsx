"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import SectionWrapper from "@/src/components/ui/SectionWrapper";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    body: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Static UI — simulate submission
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", body: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1500);
  };

  return (
    <SectionWrapper id="contact" title="Get In Touch" subtitle="Contact">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Left — Info */}
        <div>
          <p className="max-w-md text-sm leading-relaxed text-text-secondary">
            Have an exciting project or want to collaborate? Don&apos;t hesitate
            to reach out. I&apos;m always open to discussing new opportunities
            and creative ideas.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <FiMail size={16} />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                  Email
                </p>
                <p className="text-sm text-text">bayutri@example.com</p>
              </div>
            </div>
          </div>

          {/* Decorative element */}
          <div className="mt-12 hidden md:block">
            <div className="h-px w-16 bg-border" />
            <p className="mt-4 text-xs text-text-muted">
              Usually responds within 1-2 business days.
            </p>
          </div>
        </div>

        {/* Right — Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="group relative">
            <label
              htmlFor="contact-name"
              className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-muted"
            >
              Name
            </label>
            <div className="relative">
              <FiUser
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted transition-colors group-focus-within:text-accent"
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
                className="w-full rounded-xl border border-border bg-surface py-3 pl-10 pr-4 text-sm text-text placeholder:text-text-muted transition-all duration-200 focus:border-accent/40 focus:bg-surface-hover focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="group relative">
            <label
              htmlFor="contact-email"
              className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-muted"
            >
              Email
            </label>
            <div className="relative">
              <FiMail
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted transition-colors group-focus-within:text-accent"
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
                className="w-full rounded-xl border border-border bg-surface py-3 pl-10 pr-4 text-sm text-text placeholder:text-text-muted transition-all duration-200 focus:border-accent/40 focus:bg-surface-hover focus:outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div className="group relative">
            <label
              htmlFor="contact-body"
              className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-muted"
            >
              Message
            </label>
            <div className="relative">
              <FiMessageSquare
                size={14}
                className="absolute left-3.5 top-3.5 text-text-muted transition-colors group-focus-within:text-accent"
              />
              <textarea
                id="contact-body"
                rows={5}
                value={formState.body}
                onChange={(e) =>
                  setFormState({ ...formState, body: e.target.value })
                }
                placeholder="Tell me about your project or idea..."
                required
                className="w-full resize-none rounded-xl border border-border bg-surface py-3 pl-10 pr-4 text-sm text-text placeholder:text-text-muted transition-all duration-200 focus:border-accent/40 focus:bg-surface-hover focus:outline-none"
              />
            </div>
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="relative flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3 text-sm font-semibold text-bg transition-all duration-200 hover:bg-accent-soft hover:shadow-lg hover:shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed"
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
                <FiSend size={14} />
              </>
            )}
          </motion.button>

          {/* Success message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-center text-sm text-green-400"
            >
              ✓ Message sent successfully! Thank you.
            </motion.div>
          )}
        </form>
      </div>
    </SectionWrapper>
  );
}
