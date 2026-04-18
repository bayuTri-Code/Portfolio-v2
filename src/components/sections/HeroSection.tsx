"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin } from "react-icons/fi";
import { heroData } from "@/src/data/dummy";

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % heroData.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background accent glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/[0.04] blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-accent/[0.03] blur-[100px]" />
      </div>

      {/* Grid decoration */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h1v60H0zM60 0v60h-1V0zM0 0h60v1H0zM0 59h60v1H0z' fill='%23fff'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-32 lg:px-8">
        <div className="max-w-2xl">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-medium tracking-wider text-accent uppercase"
          >
            {heroData.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-4 text-5xl font-bold tracking-tight text-text sm:text-6xl lg:text-7xl"
          >
            {heroData.name}
            <span className="text-accent">.</span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 h-9"
          >
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-xl font-medium text-text-secondary sm:text-2xl"
            >
              {heroData.roles[roleIndex]}
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary"
          >
            {heroData.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-bg transition-all duration-200 hover:bg-accent-soft hover:shadow-lg hover:shadow-accent/20"
            >
              View Projects
              <FiArrowDown size={14} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-medium text-text transition-all duration-200 hover:border-accent/30 hover:bg-surface"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social mini links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-14 flex items-center gap-4"
          >
            <span className="h-px w-8 bg-border" />
            <a
              href="https://github.com/bayutri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <FiGithub size={16} />
            </a>
            <a
              href="https://linkedin.com/in/bayutri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={16} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium uppercase tracking-widest text-text-muted">
            Scroll
          </span>
          <FiArrowDown size={14} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
