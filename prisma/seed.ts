import "dotenv/config";
import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding database...\n");

  await prisma.message.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.project.deleteMany();

  console.log("✅ Cleared existing data");

  const projects = await Promise.all([
    prisma.project.create({
      data: {
        title: "Portfolio V2",
        slug: "portfolio-v2",
        description:
          "Website portofolio pribadi versi kedua yang dibangun menggunakan Next.js App Router, Supabase, dan Prisma ORM. Menampilkan proyek, skill, dan pengalaman secara interaktif dengan desain modern dan responsif.",
        thumbnail: "/images/projects/portfolio-v2.webp",
        githubUrl: "https://github.com/bayuTri-Code/Portfolio-v2",
        liveUrl: "https://bayutri.dev",
        techStack: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Supabase",
          "Prisma",
          "PostgreSQL",
        ],
        isFeatured: true,
        order: 1,
      },
    }),
    prisma.project.create({
      data: {
        title: "Portfolio V1",
        slug: "portfolio-v1",
        description:
          "Website portofolio pertama yang dibangun menggunakan Laravel dan Inertia.js dengan React. Memiliki fitur admin panel untuk mengelola konten secara dinamis.",
        thumbnail: "/images/projects/portfolio-v1.webp",
        githubUrl: "https://github.com/bayuTri-Code/Portfolio-v1",
        techStack: [
          "Laravel",
          "Inertia.js",
          "React",
          "TypeScript",
          "MySQL",
          "Tailwind CSS",
        ],
        isFeatured: true,
        order: 2,
      },
    }),
    prisma.project.create({
      data: {
        title: "E-Commerce Platform",
        slug: "e-commerce-platform",
        description:
          "Aplikasi e-commerce sederhana dengan fitur CRUD produk, keranjang belanja, dan checkout. Dibangun sebagai proyek belajar untuk memahami arsitektur MVC dan RESTful API.",
        thumbnail: "/images/projects/ecommerce.webp",
        githubUrl: "https://github.com/bayuTri-Code/ecommerce",
        techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "jQuery"],
        isFeatured: false,
        order: 3,
      },
    }),
  ]);

  console.log(`✅ Created ${projects.length} projects`);

  const experiences = await Promise.all([
    prisma.experience.create({
      data: {
        type: "WORK",
        position: "Backend Developer Intern",
        institution: "PT OSI (Odoo Support Indonesia) Jogja",
        description:
          "Magang sebagai Backend Developer, bertanggung jawab dalam pengembangan modul custom Odoo, integrasi API, serta optimasi query database PostgreSQL untuk meningkatkan performa aplikasi klien.",
        startDate: new Date("2025-07-01"),
        endDate: new Date("2025-12-31"),
        order: 1,
      },
    }),
    prisma.experience.create({
      data: {
        type: "EDUCATION",
        position: "Siswa Jurusan PPLG",
        institution: "SMK Negeri 1 — Pengembangan Perangkat Lunak dan Gim",
        description:
          "Menempuh pendidikan kejuruan di jurusan PPLG (Pengembangan Perangkat Lunak dan Gim). Mempelajari dasar-dasar pemrograman, algoritma, basis data, serta pengembangan web fullstack.",
        startDate: new Date("2023-07-01"),
        endDate: new Date("2026-06-30"),
        order: 2,
      },
    }),
  ]);

  console.log(`✅ Created ${experiences.length} experiences`);

  const skills = await Promise.all([
    prisma.skill.create({
      data: { name: "React", icon: "react", category: "FRONTEND", order: 1 },
    }),
    prisma.skill.create({
      data: { name: "Next.js", icon: "nextjs", category: "FRONTEND", order: 2 },
    }),
    prisma.skill.create({
      data: { name: "TypeScript", icon: "typescript", category: "FRONTEND", order: 3 },
    }),
    prisma.skill.create({
      data: { name: "Tailwind CSS", icon: "tailwindcss", category: "FRONTEND", order: 4 },
    }),
    prisma.skill.create({
      data: { name: "HTML & CSS", icon: "html5", category: "FRONTEND", order: 5 },
    }),
    prisma.skill.create({
      data: { name: "Laravel", icon: "laravel", category: "BACKEND", order: 1 },
    }),
    prisma.skill.create({
      data: { name: "Node.js", icon: "nodejs", category: "BACKEND", order: 2 },
    }),
    prisma.skill.create({
      data: { name: "PHP", icon: "php", category: "BACKEND", order: 3 },
    }),
    prisma.skill.create({
      data: { name: "PostgreSQL", icon: "postgresql", category: "BACKEND", order: 4 },
    }),
    prisma.skill.create({
      data: { name: "MySQL", icon: "mysql", category: "BACKEND", order: 5 },
    }),
    prisma.skill.create({
      data: { name: "Prisma", icon: "prisma", category: "BACKEND", order: 6 },
    }),
    prisma.skill.create({
      data: { name: "Git & GitHub", icon: "git", category: "TOOLS", order: 1 },
    }),
    prisma.skill.create({
      data: { name: "VS Code", icon: "vscode", category: "TOOLS", order: 2 },
    }),
    prisma.skill.create({
      data: { name: "Docker", icon: "docker", category: "TOOLS", order: 3 },
    }),
    prisma.skill.create({
      data: { name: "Postman", icon: "postman", category: "TOOLS", order: 4 },
    }),
    prisma.skill.create({
      data: { name: "Figma", icon: "figma", category: "TOOLS", order: 5 },
    }),
  ]);

  console.log(`✅ Created ${skills.length} skills`);

  const messages = await Promise.all([
    prisma.message.create({
      data: {
        name: "John Doe",
        email: "john@example.com",
        body: "Hi Bayu! Saya sangat terkesan dengan portofolio Anda. Apakah Anda terbuka untuk proyek freelance? Kami sedang mencari developer untuk membangun dashboard analytics.",
        isRead: false,
      },
    }),
    prisma.message.create({
      data: {
        name: "Jane Smith",
        email: "jane.smith@company.co.id",
        body: "Halo, saya HR dari sebuah startup tech di Jakarta. Kami ingin mengundang Anda untuk interview posisi Junior Fullstack Developer. Silakan balas jika tertarik!",
        isRead: true,
      },
    }),
  ]);

  console.log(`✅ Created ${messages.length} messages`);

  console.log("\n🎉 Seeding complete!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seeding failed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
