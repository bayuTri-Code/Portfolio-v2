import { FiGithub, FiInstagram, FiMail, FiHeart, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { navLinks } from "@/src/data/dummy";

const socialIcons = [
  { icon: <FiGithub size={18} />, href: "https://github.com/bayuTri-Code/", label: "GitHub" },
  { icon: <FiInstagram size={18} />, href: "https://www.instagram.com/bayu_tri_syh/", label: "Instagram" },
  { icon: <FiMail size={18} />, href: "mailto:bayutrihardians@gmail.com", label: "Email" },
];

const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Prisma",
  "PostgreSQL",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-gradient-to-b from-surface to-bg">
      {/* Ambient background glow */}
      <div className="absolute -bottom-48 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Top section — 3 columns */}
        <div className="grid gap-12 py-16 md:grid-cols-3 md:gap-8">
          {/* Column 1 — Brand & Status */}
          <div className="md:col-span-1 flex flex-col items-start">
            <a
              href="#home"
              className="flex items-center gap-1.5 text-base font-semibold tracking-wider uppercase text-text hover:text-accent transition-colors duration-300"
            >
              <span className="font-light text-text-secondary">Bayu</span>
              <span className="font-extrabold text-accent">Tri</span>
            </a>
            
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              Building impactful digital experiences with modern web technologies.
              Focused on performance, scalability, and premium design.
            </p>

 

            <div className="mt-4 flex items-center gap-1.5 text-xs text-text-muted">
              <FiMapPin size={12} className="text-accent/60" />
              <span>Jepara, Indonesia</span>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="flex flex-col md:items-center">
            <div className="w-full max-w-[160px] md:mx-auto">
              <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted">
                Navigation
              </h3>
              <ul className="mt-5 space-y-3.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-text-secondary transition-all hover:text-accent hover:translate-x-0.5"
                    >
                      {link.label}
                      <FiArrowUpRight
                        size={12}
                        className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3 — Built With & Socials */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted">
              Core Tech
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-surface-alt px-3.5 py-1 text-[11px] font-medium text-text-secondary transition-colors hover:border-accent/30 hover:text-text"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="mt-8 text-xs font-bold uppercase tracking-widest text-text-muted">
              Let&apos;s Connect
            </h3>
            <div className="mt-4 flex items-center gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-alt text-text-secondary transition-all duration-300 hover:border-accent hover:bg-accent-dim hover:text-accent hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-3 py-8 text-center text-xs text-text-muted md:flex-row md:justify-between">
          <p>© {currentYear} Bayu Tri. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <FiHeart size={12} className="text-accent animate-pulse" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
