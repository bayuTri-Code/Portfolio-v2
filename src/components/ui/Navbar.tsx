"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "@/src/data/dummy";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const sectionId of sections.reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      // Offset for floating navbar
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, x: "-50%" }}
      animate={{ y: 0, x: "-50%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl transition-all duration-500 ${
        isOpen ? "rounded-[24px]" : "rounded-full"
      } border border-border/80 bg-surface/70 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] ${
        scrolled
          ? "border-accent/20 bg-surface/85 shadow-[0_12px_40px_rgba(3,7,20,0.5)]"
          : ""
      }`}
    >
      <div className="flex flex-col w-full">
        {/* Main Nav Bar */}
        <nav className="flex items-center justify-between px-5 py-3 md:px-6">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-1.5 text-sm font-semibold tracking-wider uppercase text-text hover:text-accent transition-colors duration-300"
          >
            <span className="font-light text-text-secondary">Bayu</span>
            <span className="font-extrabold text-accent">Tri</span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`relative rounded-full px-4.5 py-2 text-[11px] font-semibold uppercase tracking-wider transition-colors duration-300 ${
                      isActive ? "text-accent" : "text-text-secondary hover:text-text"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="active-pill"
                        className="absolute inset-0 -z-10 rounded-full border border-accent/20 bg-accent-dim shadow-[0_0_12px_rgba(56,189,248,0.15)]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="hidden rounded-full bg-accent px-4.5 py-2 text-[11px] font-bold uppercase tracking-wider text-bg shadow-md shadow-accent/20 transition-all duration-300 hover:scale-105 hover:bg-accent-soft hover:shadow-lg hover:shadow-accent/35 active:scale-95 sm:inline-flex"
            >
              Let&apos;s Talk
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-alt/80 text-text-secondary transition-all hover:border-accent/30 hover:text-accent md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={16} /> : <FiMenu size={16} />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-border/50 px-6 py-4 md:hidden"
            >
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, index) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className={`block rounded-xl px-4 py-3 text-xs font-semibold uppercase tracking-wider transition-all ${
                          isActive
                            ? "bg-accent-dim text-accent border border-accent/20"
                            : "text-text-secondary hover:bg-surface-hover hover:text-text border border-transparent"
                        }`}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  );
                })}
                <motion.li
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-2"
                >
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#contact");
                    }}
                    className="block rounded-xl bg-accent px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-bg shadow-md shadow-accent/20 transition-all hover:bg-accent-soft"
                  >
                    Let&apos;s Talk
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
