// ============================================
// Dummy Data — Portfolio Bayu Tri V2
// Hardcoded data for Phase 2 (Static UI)
// Will be replaced with Prisma queries in Phase 3
// ============================================

import type { Project, Experience, Skill, NavLink, SocialLink } from "@/src/types";

// ---- Navigation ----
export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// ---- Social Links ----
export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/bayutri",
    icon: "FiGithub",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/bayutri",
    icon: "FiLinkedin",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/bayutri",
    icon: "FiInstagram",
  },
  {
    label: "Email",
    href: "mailto:bayutrihardians@gmail.com",
    icon: "FiMail",
  },
];

// ---- Projects ----
export const projects: Project[] = [
  {
    id: "1",
    title: "Sukodono Master Carver Collective",
    slug: "sukodono-master-carver-collective",
    description:
      "A community portfolio platform showcasing the exquisite traditional woodcarving masterpieces of local carvers from Sukodono village, built to preserve cultural heritage and reach global buyers.",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    githubUrl: "https://github.com/bayutri/sukodono-master-carver",
    liveUrl: "https://mastercarver.my.id",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "PostgreSQL"],
    isFeatured: true,
    order: 1,
  },
  {
    id: "2",
    title: "Task Management App",
    slug: "task-management-app",
    description:
      "Real-time task management application with team collaboration features, drag-and-drop interface, and role-based access control.",
    thumbnail: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=600&auto=format&fit=crop",
    githubUrl: "https://github.com/bayutri/task-app",
    liveUrl: "https://task-app-demo.vercel.app",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    isFeatured: true,
    order: 2,
  },
  {
    id: "3",
    title: "Portfolio Website V1",
    slug: "portfolio-v1",
    description:
      "First iteration of my personal portfolio website. Built with clean design principles and smooth animations.",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
    githubUrl: "https://github.com/bayutri/portfolio-v1",
    liveUrl: "https://bayutri-v1.vercel.app",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    isFeatured: true,
    order: 3,
  },
  {
    id: "4",
    title: "REST API Service",
    slug: "rest-api-service",
    description:
      "Scalable RESTful API service with authentication, rate limiting, and comprehensive API documentation.",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    githubUrl: "https://github.com/bayutri/rest-api",
    liveUrl: null,
    techStack: ["Laravel", "PostgreSQL", "Redis", "Docker"],
    isFeatured: false,
    order: 4,
  },
  {
    id: "5",
    title: "Chat Application",
    slug: "chat-application",
    description:
      "Real-time chat application with group messaging, file sharing, and online status indicators.",
    thumbnail: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=600&auto=format&fit=crop",
    githubUrl: "https://github.com/bayutri/chat-app",
    liveUrl: null,
    techStack: ["Next.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    isFeatured: false,
    order: 5,
  },
  {
    id: "6",
    title: "Blog CMS",
    slug: "blog-cms",
    description:
      "Content management system with Markdown editor, image optimization, and SEO-friendly URLs.",
    thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600&auto=format&fit=crop",
    githubUrl: "https://github.com/bayutri/blog-cms",
    liveUrl: "https://blog-demo.vercel.app",
    techStack: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    isFeatured: false,
    order: 6,
  },
];

// ---- Experiences ----
export const experiences: Experience[] = [
  {
    id: "1",
    type: "EDUCATION",
    position: "PPLG Student",
    institution: "SMK Negeri — Software Engineering Major",
    description:
      "Studied programming fundamentals, database management, and web development. Focused on building fullstack applications using modern technologies.",
    startDate: "2021-07",
    endDate: "2024-06",
    order: 1,
  },
  {
    id: "2",
    type: "WORK",
    position: "Backend Developer Intern",
    institution: "PT OSI Jogja",
    description:
      "Backend development internship handling REST API development, database design, and system integration using Laravel & PostgreSQL.",
    startDate: "2023-08",
    endDate: "2024-01",
    order: 2,
  },
];

// ---- Skills ----
export const skills: Skill[] = [
  // Frontend
  { id: "1", name: "React", icon: "SiReact", category: "FRONTEND", order: 1 },
  { id: "2", name: "Next.js", icon: "SiNextdotjs", category: "FRONTEND", order: 2 },
  { id: "3", name: "TypeScript", icon: "SiTypescript", category: "FRONTEND", order: 3 },
  { id: "4", name: "Tailwind CSS", icon: "SiTailwindcss", category: "FRONTEND", order: 4 },
  { id: "5", name: "JavaScript", icon: "SiJavascript", category: "FRONTEND", order: 5 },
  { id: "6", name: "HTML & CSS", icon: "SiHtml5", category: "FRONTEND", order: 6 },
  { id: "7", name: "Framer Motion", icon: "SiFramer", category: "FRONTEND", order: 7 },

  // Backend
  { id: "8", name: "Laravel", icon: "SiLaravel", category: "BACKEND", order: 1 },
  { id: "9", name: "PHP", icon: "SiPhp", category: "BACKEND", order: 2 },
  { id: "10", name: "Node.js", icon: "SiNodedotjs", category: "BACKEND", order: 3 },
  { id: "11", name: "PostgreSQL", icon: "SiPostgresql", category: "BACKEND", order: 4 },
  { id: "12", name: "MySQL", icon: "SiMysql", category: "BACKEND", order: 5 },
  { id: "13", name: "Prisma", icon: "SiPrisma", category: "BACKEND", order: 6 },
  { id: "14", name: "REST API", icon: "SiPostman", category: "BACKEND", order: 7 },

  // Tools
  { id: "15", name: "Git", icon: "SiGit", category: "TOOLS", order: 1 },
  { id: "16", name: "GitHub", icon: "SiGithub", category: "TOOLS", order: 2 },
  { id: "17", name: "VS Code", icon: "VscCode", category: "TOOLS", order: 3 },
  { id: "18", name: "Docker", icon: "SiDocker", category: "TOOLS", order: 4 },
  { id: "19", name: "Vercel", icon: "SiVercel", category: "TOOLS", order: 5 },
  { id: "20", name: "Figma", icon: "SiFigma", category: "TOOLS", order: 6 },
];

// ---- About / Hero ----
export const heroData = {
  greeting: "Hi, I'm",
  name: "Bayu Tri",
  roles: ["Fullstack Developer", "Backend Enthusiast", "UI/UX Explorer"],
  tagline: "Building impactful digital experiences.",
  description:
    "A software engineering graduate with backend internship experience at OSI Jogja. I focus on building performant, scalable web applications with premium user interfaces.",
  resumeUrl: "#",
  avatarUrl: null,
};

export const aboutData = {
  bio: [
    "I'm a Fullstack Web Developer passionate about crafting high-quality digital products. With a strong foundation in backend development and a deep interest in UI/UX design, I bridge the gap between logic and aesthetics.",
    "My internship at PT OSI Jogja gave me hands-on experience in backend development, database design, and software engineering best practices. I'm constantly learning and exploring the latest technologies to deliver better solutions.",
  ],
  stats: [
    { label: "Projects", value: "10+" },
    { label: "Technologies", value: "15+" },
    { label: "Experience", value: "2+ yrs" },
  ],
};
