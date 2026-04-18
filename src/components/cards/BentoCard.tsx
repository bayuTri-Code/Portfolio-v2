"use client";

import { motion } from "framer-motion";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function BentoCard({
  children,
  className = "",
  hover = true,
}: BentoCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -2 } : undefined}
      transition={{ duration: 0.2 }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 ${
        hover ? "hover:border-border-hover hover:bg-surface-hover" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
