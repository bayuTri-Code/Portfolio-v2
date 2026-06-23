"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin, FiActivity, FiDatabase, FiServer, FiCpu } from "react-icons/fi";
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
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-16 lg:py-0"
    >
      {/* Background radial gradient glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Sky blue/indigo gradient light in top right */}
        <div className="absolute -top-[10%] right-[10%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-accent/10 to-indigo-500/0 blur-[130px] opacity-70" />
        {/* Soft violet light in bottom left */}
        <div className="absolute -bottom-[10%] left-[5%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-accent/5 to-cyan-500/0 blur-[110px] opacity-50" />
      </div>

      {/* Grid decoration */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h1v40H0zM40 0v40h-1V0zM0 0h40v1H0zM0 39h40v1H0z' fill='%23fff'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 w-full lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Left Column - Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
         

            {/* Sub-greeting */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-sm font-bold tracking-widest text-accent uppercase"
            >
              {heroData.greeting}
            </motion.p>

            {/* Main Name Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 text-4xl font-extrabold tracking-tight text-text sm:text-5xl md:text-6xl"
            >
              {heroData.name}
            </motion.h1>

            {/* Animated Roles */}
            <div className="mt-2.5 h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="text-lg font-bold text-text-secondary md:text-xl flex items-center gap-2"
                >
                  <span className="text-accent">—</span> {heroData.roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

         

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-lg text-sm md:text-base leading-relaxed text-text-secondary"
            >
              {heroData.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-bold uppercase tracking-wider text-bg shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-105 hover:bg-accent-soft hover:shadow-xl hover:shadow-accent/35 active:scale-95 w-full sm:w-auto"
              >
                Explore Projects
                <FiArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-border bg-surface-alt/60 px-6 py-3 text-xs font-bold uppercase tracking-wider text-text backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-surface w-full sm:w-auto"
              >
                Let&apos;s Build
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 flex items-center gap-4"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">
                Profiles
              </span>
              <span className="h-px w-8 bg-border" />
              <div className="flex gap-2.5">
                <a
                  href="https://github.com/bayutri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface-alt/80 text-text-secondary transition-all hover:border-accent hover:text-accent"
                  aria-label="GitHub"
                >
                  <FiGithub size={14} />
                </a>
                <a
                  href="https://linkedin.com/in/bayutri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface-alt/80 text-text-secondary transition-all hover:border-accent hover:text-accent"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={14} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Premium Fullstack Dashboard Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full flex items-center justify-center"
          >
            {/* Outer ambient blur shadow */}
            <div className="absolute h-72 w-72 rounded-full bg-accent/10 blur-[80px] pointer-events-none z-0" />

            {/* Main Interactive Showcase Card */}
            <div className="relative z-10 w-full max-w-[400px] rounded-2xl border border-border/80 bg-surface-alt/80 p-5 md:p-6 backdrop-blur-md shadow-2xl">
              
              {/* Window Controls */}
              <div className="flex items-center justify-between pb-4 border-b border-border/50">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-text-muted">
                  server_monitor.py
                </span>
              </div>

              {/* Status List */}
              <div className="mt-5 space-y-4">
                
                {/* Status Item 1: Database Status */}
                <div className="rounded-xl border border-border/50 bg-surface/50 p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                      <FiDatabase size={16} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-text">Database</h4>
                      <p className="text-[10px] text-text-secondary font-medium">PostgreSQL Server</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Online</span>
                  </div>
                </div>

                {/* Status Item 2: Latency Monitor */}
                <div className="rounded-xl border border-border/50 bg-surface/50 p-3.5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <FiActivity size={16} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-text">API Latency</h4>
                        <p className="text-[10px] text-text-secondary font-medium">Internal routing latency</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold font-mono text-accent">12ms</span>
                  </div>
                  {/* Glowing mini bar chart */}
                  <div className="flex items-end gap-1.5 h-8 px-1">
                    {[35, 60, 45, 80, 50, 65, 30, 45, 55, 40, 75, 45].map((val, idx) => (
                      <motion.div
                        key={idx}
                        className="w-full bg-accent/25 rounded-t-sm"
                        style={{ height: `${val}%` }}
                        initial={{ height: 0 }}
                        animate={{ height: `${val}%` }}
                        transition={{
                          delay: 0.6 + idx * 0.05,
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Status Item 3: Uptime and Load */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border/50 bg-surface/50 p-3 flex flex-col justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-text-muted">Uptime</span>
                    <div className="mt-1 flex items-baseline gap-1">
                      <span className="text-base font-extrabold text-text">99.99</span>
                      <span className="text-[10px] font-medium text-text-secondary">%</span>
                    </div>
                  </div>
                  <div className="rounded-xl border border-border/50 bg-surface/50 p-3 flex flex-col justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-text-muted">Load</span>
                    <div className="mt-1 flex items-baseline gap-1">
                      <span className="text-base font-extrabold text-text">0.12</span>
                      <span className="text-[10px] font-medium text-text-secondary">/s</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative side tags */}
              <div className="absolute -top-3.5 -left-3.5 rounded-lg border border-border/80 bg-surface p-2.5 shadow-lg flex items-center gap-2">
                <FiCpu className="text-accent" size={14} />
                <span className="text-[9px] font-bold uppercase tracking-wider text-text-secondary">Laravel API</span>
              </div>

              <div className="absolute -bottom-3.5 -right-3.5 rounded-lg border border-border/80 bg-surface p-2.5 shadow-lg flex items-center gap-2">
                <FiServer className="text-accent" size={14} />
                <span className="text-[9px] font-bold uppercase tracking-wider text-text-secondary">Vercel Edge</span>
              </div>

            </div>
          </motion.div>
          
        </div>
      </div>

      {/* Floating scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 opacity-55"
        >
          <span className="text-[9px] font-bold uppercase tracking-widest text-text-muted">
            Scroll down
          </span>
          <span className="h-4 w-px bg-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
