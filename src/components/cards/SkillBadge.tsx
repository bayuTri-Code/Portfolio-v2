"use client";

import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript,
  SiHtml5, SiFramer, SiLaravel, SiPhp, SiNodedotjs,
  SiPostgresql, SiMysql, SiPrisma, SiPostman,
  SiGit, SiGithub, SiDocker, SiVercel, SiFigma,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import type { Skill } from "@/src/types";

// Map icon string to component
const iconMap: Record<string, React.ReactNode> = {
  SiReact: <SiReact />,
  SiNextdotjs: <SiNextdotjs />,
  SiTypescript: <SiTypescript />,
  SiTailwindcss: <SiTailwindcss />,
  SiJavascript: <SiJavascript />,
  SiHtml5: <SiHtml5 />,
  SiFramer: <SiFramer />,
  SiLaravel: <SiLaravel />,
  SiPhp: <SiPhp />,
  SiNodedotjs: <SiNodedotjs />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiPrisma: <SiPrisma />,
  SiPostman: <SiPostman />,
  SiGit: <SiGit />,
  SiGithub: <SiGithub />,
  VscCode: <VscCode />,
  SiDocker: <SiDocker />,
  SiVercel: <SiVercel />,
  SiFigma: <SiFigma />,
};

// Map icon string to hover color classes
const iconColorMap: Record<string, string> = {
  SiReact: "group-hover:text-[#61DAFB] group-hover:scale-110",
  SiNextdotjs: "group-hover:text-[#ffffff] group-hover:scale-110",
  SiTypescript: "group-hover:text-[#3178C6] group-hover:scale-110",
  SiTailwindcss: "group-hover:text-[#06B6D4] group-hover:scale-110",
  SiJavascript: "group-hover:text-[#F7DF1E] group-hover:scale-110",
  SiHtml5: "group-hover:text-[#E34F26] group-hover:scale-110",
  SiFramer: "group-hover:text-[#F024B6] group-hover:scale-110",
  SiLaravel: "group-hover:text-[#FF2D20] group-hover:scale-110",
  SiPhp: "group-hover:text-[#777BB4] group-hover:scale-110",
  SiNodedotjs: "group-hover:text-[#339933] group-hover:scale-110",
  SiPostgresql: "group-hover:text-[#4169E1] group-hover:scale-110",
  SiMysql: "group-hover:text-[#4479A1] group-hover:scale-110",
  SiPrisma: "group-hover:text-[#5A67D8] group-hover:scale-110",
  SiPostman: "group-hover:text-[#FF6C37] group-hover:scale-110",
  SiGit: "group-hover:text-[#F05032] group-hover:scale-110",
  SiGithub: "group-hover:text-[#ffffff] group-hover:scale-110",
  VscCode: "group-hover:text-[#007ACC] group-hover:scale-110",
  SiDocker: "group-hover:text-[#2496ED] group-hover:scale-110",
  SiVercel: "group-hover:text-[#ffffff] group-hover:scale-110",
  SiFigma: "group-hover:text-[#F24E1E] group-hover:scale-110",
};

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

export default function SkillBadge({ skill, index }: SkillBadgeProps) {
  const icon = skill.icon ? iconMap[skill.icon] : null;
  const colorClass = skill.icon ? iconColorMap[skill.icon] : "group-hover:text-accent";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.02, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -2 }}
      className="group flex items-center gap-3 rounded-xl border border-border/80 bg-surface/50 px-3.5 py-2.5 transition-all duration-300 hover:border-accent/25 hover:bg-surface-hover/50 hover:shadow-md"
    >
      {icon && (
        <span className={`text-base text-text-secondary transition-all duration-300 ${colorClass}`}>
          {icon}
        </span>
      )}
      <span className="text-xs font-semibold text-text-secondary transition-all duration-300 group-hover:text-text tracking-wide">
        {skill.name}
      </span>
    </motion.div>
  );
}
