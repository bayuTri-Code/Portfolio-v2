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

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

export default function SkillBadge({ skill, index }: SkillBadgeProps) {
  const icon = skill.icon ? iconMap[skill.icon] : null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ y: -3 }}
      className="group flex items-center gap-2.5 rounded-xl border border-border bg-surface px-4 py-3 transition-all duration-200 hover:border-accent/30 hover:bg-surface-hover"
    >
      {icon && (
        <span className="text-base text-text-secondary transition-colors duration-200 group-hover:text-accent">
          {icon}
        </span>
      )}
      <span className="text-sm font-medium text-text-secondary transition-colors duration-200 group-hover:text-text">
        {skill.name}
      </span>
    </motion.div>
  );
}
