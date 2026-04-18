import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiHeart, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { navLinks } from "@/src/data/dummy";

const socialIcons = [
  { icon: <FiGithub size={18} />, href: "https://github.com/bayutri", label: "GitHub" },
  { icon: <FiLinkedin size={18} />, href: "https://linkedin.com/in/bayutri", label: "LinkedIn" },
  { icon: <FiInstagram size={18} />, href: "https://instagram.com/bayutri", label: "Instagram" },
  { icon: <FiMail size={18} />, href: "mailto:bayutri@example.com", label: "Email" },
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
    <footer className="border-t border-border bg-surface-alt">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Top section — 3 columns */}
        <div className="grid gap-10 py-16 md:grid-cols-3">
          {/* Column 1 — Brand & description */}
          <div className="md:col-span-1">
            <a href="#home" className="text-lg font-bold tracking-tight text-text">
              <span className="text-accent">{"<"}</span>
              BayuTri
              <span className="text-accent">{" />"}</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-secondary">
              Building impactful digital experiences with modern web technologies.
              Focused on performance, scalability, and premium design.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-text-muted">
              <FiMapPin size={12} />
              <span>Yogyakarta, Indonesia</span>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    {link.label}
                    <FiArrowUpRight
                      size={12}
                      className="opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Built With & Socials */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              Built With
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="mt-8 text-xs font-semibold uppercase tracking-wider text-text-muted">
              Connect
            </h3>
            <div className="mt-3 flex items-center gap-2.5">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-secondary transition-all duration-200 hover:border-accent/30 hover:bg-accent/10 hover:text-accent"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-3 py-6 text-center text-xs text-text-muted md:flex-row md:justify-between">
          <p>© {currentYear} Bayu Tri. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <FiHeart size={12} className="text-accent" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
