// ============================================
// Types — Portfolio Bayu Tri V2
// Mirrors Prisma schema for static usage
// ============================================

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string | null;
  githubUrl: string | null;
  liveUrl: string | null;
  techStack: string[];
  isFeatured: boolean;
  order: number;
}

export type ExperienceType = "EDUCATION" | "WORK";

export interface Experience {
  id: string;
  type: ExperienceType;
  position: string;
  institution: string;
  description: string | null;
  startDate: string;
  endDate: string | null;
  order: number;
}

export type SkillCategory = "FRONTEND" | "BACKEND" | "TOOLS";

export interface Skill {
  id: string;
  name: string;
  icon: string | null;
  category: SkillCategory;
  order: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
