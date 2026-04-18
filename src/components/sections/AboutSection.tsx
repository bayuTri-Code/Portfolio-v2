"use client";

import { motion } from "framer-motion";
import { FiCode, FiServer, FiLayers } from "react-icons/fi";
import SectionWrapper from "@/src/components/ui/SectionWrapper";
import BentoCard from "@/src/components/cards/BentoCard";
import { aboutData } from "@/src/data/dummy";

const highlights = [
  {
    icon: <FiCode size={20} />,
    title: "Frontend",
    description: "React, Next.js, TypeScript — building interfaces that feel alive.",
  },
  {
    icon: <FiServer size={20} />,
    title: "Backend",
    description: "Laravel, Node.js, PostgreSQL — scalable & clean architecture.",
  },
  {
    icon: <FiLayers size={20} />,
    title: "Fullstack",
    description: "End-to-end development from database to pixel-perfect UI.",
  },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about" title="About Me" subtitle="Who I Am">
      <div className="grid gap-5 md:grid-cols-3">
        {/* Bio card — spans 2 cols */}
        <BentoCard className="md:col-span-2" hover={false}>
          <div className="space-y-4">
            {aboutData.bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed text-text-secondary"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </BentoCard>

        {/* Stats card */}
        <BentoCard hover={false}>
          <div className="flex h-full flex-col justify-center gap-6">
            {aboutData.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl font-bold text-accent">{stat.value}</p>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-text-muted">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </BentoCard>

        {/* Highlight cards */}
        {highlights.map((item, i) => (
          <BentoCard key={item.title}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                {item.icon}
              </span>
              <h3 className="text-sm font-semibold text-text">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </motion.div>
          </BentoCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
