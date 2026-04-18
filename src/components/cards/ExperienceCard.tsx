"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";
import type { Experience } from "@/src/types";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[parseInt(month) - 1]} ${year}`;
}

export default function ExperienceCard({ experience, index, isLast }: ExperienceCardProps) {
  const isWork = experience.type === "WORK";
  const Icon = isWork ? FiBriefcase : FiBookOpen;

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex gap-6"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors ${
            isWork
              ? "border-accent/30 bg-accent/10 text-accent"
              : "border-border bg-surface text-text-secondary"
          }`}
        >
          <Icon size={16} />
        </div>
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-gradient-to-b from-border to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-10 ${isLast ? "pb-0" : ""}`}>
        {/* Date range */}
        <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
          {formatDate(experience.startDate)} —{" "}
          {experience.endDate ? formatDate(experience.endDate) : "Present"}
        </span>

        {/* Position */}
        <h3 className="mt-1.5 text-base font-semibold text-text">
          {experience.position}
        </h3>

        {/* Institution */}
        <p className="mt-0.5 text-sm text-accent/80">{experience.institution}</p>

        {/* Description */}
        {experience.description && (
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-text-secondary">
            {experience.description}
          </p>
        )}

        {/* Type badge */}
        <span
          className={`mt-3 inline-block rounded-md px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${
            isWork
              ? "bg-accent/10 text-accent"
              : "bg-surface text-text-muted"
          }`}
        >
          {experience.type}
        </span>
      </div>
    </motion.div>
  );
}
