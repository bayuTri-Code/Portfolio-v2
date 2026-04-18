"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className = "",
  fullWidth = false,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-20 md:py-28 ${className}`}
    >
      <div className={fullWidth ? "px-6 lg:px-8" : "mx-auto max-w-6xl px-6 lg:px-8"}>
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14 md:mb-16"
          >
            {subtitle && (
              <p className="mb-2 text-sm font-medium tracking-wider text-accent uppercase">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
                {title}
                <span className="text-accent">.</span>
              </h2>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
