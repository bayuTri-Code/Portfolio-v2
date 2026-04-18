<!-- BEGIN:nextjs-agent-rules -->

# ⚠️ This is NOT the Next.js you know
This version has breaking changes — APIs, conventions, and file structure may differ from standard references.
AI MUST consult `node_modules/next/dist/docs/` before writing code and respect deprecations.

---

# 🚀 PROJECT BLUEPRINT: V2 FULLSTACK PORTFOLIO

## 1. 👨‍💻 Project Overview & Developer Persona

- **Developer Profile:**
  Fullstack Web Developer (SMK PPLG Graduate)
  - Backend Internship Experience at OSI Jogja
  - Strong foundation: Laravel, React, Tailwind, Database Design

- **Project Goal:**
  Build a modern, high-performance portfolio (V2) that acts as:
  - A technical showcase
  - A real-world case study
  - A conversion tool (clients / recruiters)

- **Core Principle:**
  > This is NOT just a portfolio. This is a PRODUCT.

---

## 2. 🎨 Design System & UI Philosophy

### 🎯 Visual Direction
- Dark Theme (Premium feel)
- Clean, minimal, but expressive
- Developer aesthetic (not template-like)

### 🎨 Color Tokens (MANDATORY)
- Background: `#050505`
- Surface (Card): `#12121A`
- Accent: `#60A5FA` or `#8BB4F7`
- Text: High contrast white/gray

### 🧱 Layout System
- Bento Grid (responsive & modular)
- Asymmetrical but balanced
- Avoid "perfect symmetry" → looks AI-generated

### ⚠️ Anti-AI Design Rules
AI MUST follow:
- Avoid generic spacing (too perfect = AI feel)
- Add slight variation in card sizes
- Use intentional imperfection (human touch)
- Avoid overusing gradients
- Limit animations → subtle & meaningful only

---

## 3. 🧰 Tech Stack & Infrastructure

- **Framework:** Next.js (App Router, React 18+)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS + Framer Motion
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **Deployment:** Vercel (CI/CD via GitHub)

---

## 4. 🧱 Database Architecture (Prisma Schema)

### Core Entities:

#### 1. Project
- id
- title
- description
- imageUrl
- githubUrl
- liveUrl
- techStack (Array)
- isFeatured (Boolean)

#### 2. Experience
- id
- role
- company
- startDate
- endDate (Nullable)
- description
- type (Education / Internship / Work)

#### 3. Skill
- id
- name
- category (Frontend / Backend / Tools)
- icon

#### 4. Message
- id
- senderName
- senderEmail
- content
- isRead (Boolean)

---

## 5. ⚙️ AI AGENT DIRECTIVES (STRICT RULES)

### 🧠 Core Engineering Rules
- TypeScript FIRST (no `any`)
- Use Server Components by default
- Use `'use client'` ONLY when necessary
- No unnecessary API routes
- Fetch data directly via Prisma in Server Components

### 🧼 Clean Code Rules
- Small reusable components
- Early return pattern
- Avoid deeply nested logic
- Separate UI & logic clearly

---

## 6. 🧠 SENIOR DEVELOPMENT WORKFLOW (MANDATORY FLOW)

AI MUST follow this exact workflow:

### STEP 1 — Problem Framing
- What is being built?
- Who is the user?
- What is the outcome?

### STEP 2 — System Design
- Define pages
- Define components
- Define data flow
- Define DB schema

### STEP 3 — UI Wireframe (LOW FIDELITY FIRST)
- No code yet
- Only structure/layout thinking

### STEP 4 — Static UI Implementation
- Build UI WITHOUT data
- Use mock/dummy content
- Focus on layout & responsiveness

### STEP 5 — Component Abstraction
- Break UI into reusable components

### STEP 6 — Data Integration (Server Side)
- Connect Prisma
- Fetch in Server Components

### STEP 7 — Interactivity Layer
- Add Framer Motion
- Add client logic

### STEP 8 — Optimization
- Performance (Lighthouse)
- Accessibility
- SEO

### STEP 9 — Production Readiness
- Env validation
- Error handling
- Logging

---

## 7. 🧪 DEVELOPMENT PHASES

---

### 🟢 PHASE 1: Setup

1. Initialize Next.js (TS + Tailwind)
2. Install:
   - Prisma
   - Supabase
   - Framer Motion
   - React Icons
3. Setup `.env`
4. Init Prisma
5. Migration + Generate Client
6. Create seed data

---

### 🟡 PHASE 2: STATIC UI (PRIORITY FIRST)

⚠️ IMPORTANT:
> DO NOT connect database yet.

### 🎯 Goal:
Build FULL UI using dummy data.

### Tasks:
- Setup Tailwind config colors
- Build:
  - Navbar
  - Footer
  - SectionWrapper
- Create Bento Grid Layout
- Create components:
  - ProjectCard
  - ExperienceTimeline
  - SkillBadge
  - ContactForm

### Rules:
- Use hardcoded data
- Focus on spacing & layout
- Must be responsive
- Must look HUMAN-made (not AI)

---

### 🔵 PHASE 3: SERVER INTEGRATION

- Setup `prisma.ts`
- Fetch data in Server Components
- Replace dummy data

---

### 🟣 PHASE 4: INTERACTIVITY

- Contact Form (Server Action)
- Validation
- Loading / Success states
- Framer Motion animation

---

### 🔴 PHASE 5: FINALIZATION

- SEO Metadata
- Performance audit
- Fix TS/ESLint errors

---

## 8. 🎯 PROMPT: START STATIC UI DEVELOPMENT

Use this prompt:

"Build the full static UI of the portfolio using Next.js App Router and Tailwind CSS.

Requirements:
- Use Bento Grid layout
- Use dark theme (#050505 background, #12121A surface)
- Use dummy data (no database)
- Create reusable components (ProjectCard, SkillBadge, etc.)
- Fully responsive (mobile-first)
- Use clean spacing (not too perfect)
- Avoid generic/template look
- Add subtle hover effects

DO NOT:
- Connect database
- Create API routes
- Add backend logic

Focus ONLY on UI structure and visual quality."

---

## 9. 🚫 GIT CONTROL RULE (CRITICAL)

⚠️ AI MUST FOLLOW THIS RULE:

> DO NOT commit or push ANY code to GitHub without explicit instruction.

- No auto commit
- No auto push
- Wait for user confirmation

---

## 10. 🧩 PROJECT STRUCTURE (REFERENCE)

/src
  /app
  /components
  /lib
  /types
  /styles

---

## 11. 🧠 FINAL PRINCIPLE

> Think like a Senior Engineer:
- Build for scalability
- Avoid shortcuts
- Prioritize clarity over cleverness
- Every decision must have a reason

---

<!-- END:nextjs-agent-rules -->