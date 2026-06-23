"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";
import type { Experience } from "@/src/types";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

// Hardcoded tags for Phase 2/Static UI representation
const experienceTags: Record<string, string[]> = {
  "1": ["OOP", "HTML/CSS", "JavaScript", "SQL", "Git"],
  "2": ["Laravel", "PostgreSQL", "REST API", "Database Design", "Git"],
};

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[parseInt(month) - 1]} ${year}`;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const isWork = experience.type === "WORK";
  const Icon = isWork ? FiBriefcase : FiBookOpen;
  const tags = experienceTags[experience.id] || [];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex gap-4 sm:gap-6"
    >
      {/* Icon Node (positioned directly above the timeline line) */}
      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-alt text-text-secondary shadow-md transition-all duration-300 group-hover:border-accent hover:border-accent hover:text-accent">
        <Icon size={15} />
      </div>

      {/* Card Content Container */}
      <div className="w-full pb-2">
        <div className="group relative rounded-2xl border border-border/80 bg-surface/40 p-5 md:p-6 backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-accent/25 hover:bg-surface-hover/30 hover:shadow-[0_10px_30px_rgba(3,7,20,0.25)]">
          {/* Subtle accent line on hover */}
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent transition-all duration-500 group-hover:via-accent/40" />

          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <span className="text-xs font-bold uppercase tracking-widest text-text-muted">
              {formatDate(experience.startDate)} —{" "}
              {experience.endDate ? formatDate(experience.endDate) : "Present"}
            </span>

            {/* Type badge */}
            <span
              className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                isWork
                  ? "bg-accent-dim text-accent border border-accent/15"
                  : "bg-surface-alt text-text-muted border border-border/50"
              }`}
            >
              {experience.type === "WORK" ? "Internship / Work" : "Education"}
            </span>
          </div>

          {/* Job Title & Company */}
          <h3 className="mt-3 text-base md:text-lg font-extrabold text-text tracking-tight group-hover:text-accent transition-colors duration-300">
            {experience.position}
          </h3>
          <p className="text-sm font-semibold text-accent-soft/90 mt-0.5">
            {experience.institution}
          </p>

          {/* Job Description */}
          {experience.description && (
            <p className="mt-3.5 text-xs md:text-sm leading-relaxed text-text-secondary">
              {experience.description}
            </p>
          )}

          {/* Technology Badges */}
          {tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-border/30">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-border/50 bg-surface-alt/70 px-2.5 py-1 text-[10px] font-semibold text-text-secondary hover:border-accent/20 hover:text-text transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
