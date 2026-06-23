"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionWrapper from "@/src/components/ui/SectionWrapper";
import ExperienceCard from "@/src/components/cards/ExperienceCard";
import { experiences } from "@/src/data/dummy";

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Sort by order descending (newest first)
  const sorted = [...experiences].sort((a, b) => b.order - a.order);

  // track scroll progress relative to this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Scale the height of the glowing progress line
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <SectionWrapper id="experience" title="Experience" subtitle="My Journey">
      <div ref={containerRef} className="relative max-w-3xl pl-2 sm:pl-4">
        
        {/* Static Background Line */}
        <div className="absolute left-[19px] sm:left-[21px] top-4 bottom-4 w-px bg-border/40" />
        
        {/* Dynamic Glowing Progress Line */}
        <motion.div 
          style={{ scaleY, originY: 0 }}
          className="absolute left-[19px] sm:left-[21px] top-4 bottom-4 w-px bg-gradient-to-b from-accent to-accent-soft shadow-[0_0_10px_rgba(56,189,248,0.5)]" 
        />

        {/* Cards container */}
        <div className="flex flex-col gap-8">
          {sorted.map((exp, i) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              index={i}
              isLast={i === sorted.length - 1}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
