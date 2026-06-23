"use client";

import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import type { Project } from "@/src/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export default function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-border-hover hover:bg-surface-hover ${
        featured ? "md:col-span-2 md:flex-row" : ""
      }`}
    >
      {/* Thumbnail area */}
      <div
        className={`relative overflow-hidden bg-surface-alt ${
          featured
            ? "aspect-[16/10] md:aspect-auto md:w-1/2"
            : "aspect-[16/10]"
        }`}
      >
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          /* Placeholder gradient — will be replaced by real image */
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-surface to-surface-alt" />
        )}

        {/* Decorative grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 0h1v40H0zM40 0h1v40h-1zM0 0v1h40V0zM0 40v1h40v-1z' fill='%23fff'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating tech badges on thumbnail */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-bg/70 px-2 py-0.5 text-[10px] font-medium text-text-secondary backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="rounded-md bg-bg/70 px-2 py-0.5 text-[10px] font-medium text-text-muted backdrop-blur-sm">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Hover arrow */}
        <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-bg/50 text-text-secondary opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          <FiArrowUpRight size={14} />
        </div>
      </div>

      {/* Content */}
      <div className={`flex flex-1 flex-col p-5 ${featured ? "md:p-7" : ""}`}>
        <h3 className="text-lg font-semibold text-text transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className={`mt-2 text-sm leading-relaxed text-text-secondary ${featured ? "line-clamp-4" : "line-clamp-2"}`}>
          {project.description}
        </p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Links */}
        <div className="mt-4 flex items-center gap-3 pt-4 border-t border-border/50">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-text-secondary transition-colors hover:text-accent"
            >
              <FiGithub size={14} />
              Source
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-text-secondary transition-colors hover:text-accent"
            >
              <FiExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
