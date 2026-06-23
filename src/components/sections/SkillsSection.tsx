"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/src/components/ui/SectionWrapper";
import SkillBadge from "@/src/components/cards/SkillBadge";
import { skills } from "@/src/data/dummy";
import type { SkillCategory } from "@/src/types";

const categoryLabels: Record<SkillCategory, string> = {
  FRONTEND: "Frontend Stack",
  BACKEND: "Backend Systems",
  TOOLS: "DevOps & Tools",
};

const categoryDescriptions: Record<SkillCategory, string> = {
  FRONTEND: "Building sleek, responsive, and interactive user interfaces.",
  BACKEND: "Developing scalable APIs, logic, and database schemas.",
  TOOLS: "Version control, workflow optimization, and deployment.",
};

const categoryOrder: SkillCategory[] = ["FRONTEND", "BACKEND", "TOOLS"];

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" title="Skills" subtitle="Tech Stack">
      <div className="grid gap-6 md:grid-cols-3">
        {categoryOrder.map((category, idx) => {
          const categorySkills = skills
            .filter((s) => s.category === category)
            .sort((a, b) => a.order - b.order);

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col rounded-2xl border border-border/80 bg-surface-alt/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/20"
            >
              {/* Decorative top gradient accent on hover */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent transition-all duration-500 group-hover:via-accent/35" />

              {/* Title & Description */}
              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-text">
                    {categoryLabels[category]}
                  </h3>
                </div>
                <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                  {categoryDescriptions[category]}
                </p>
              </div>

              {/* Skills Flex Container */}
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {categorySkills.map((skill, i) => (
                  <SkillBadge key={skill.id} skill={skill} index={i} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
