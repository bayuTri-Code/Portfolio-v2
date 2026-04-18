import SectionWrapper from "@/src/components/ui/SectionWrapper";
import SkillBadge from "@/src/components/cards/SkillBadge";
import { skills } from "@/src/data/dummy";
import type { SkillCategory } from "@/src/types";

const categoryLabels: Record<SkillCategory, string> = {
  FRONTEND: "Frontend",
  BACKEND: "Backend",
  TOOLS: "Tools & DevOps",
};

const categoryOrder: SkillCategory[] = ["FRONTEND", "BACKEND", "TOOLS"];

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" title="Skills" subtitle="Tech Stack">
      <div className="space-y-10">
        {categoryOrder.map((category) => {
          const categorySkills = skills
            .filter((s) => s.category === category)
            .sort((a, b) => a.order - b.order);

          return (
            <div key={category}>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-text-muted">
                {categoryLabels[category]}
              </h3>
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill, i) => (
                  <SkillBadge key={skill.id} skill={skill} index={i} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
