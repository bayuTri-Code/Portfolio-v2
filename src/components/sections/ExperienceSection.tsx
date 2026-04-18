import SectionWrapper from "@/src/components/ui/SectionWrapper";
import ExperienceCard from "@/src/components/cards/ExperienceCard";
import { experiences } from "@/src/data/dummy";

export default function ExperienceSection() {
  // Sort by order descending (newest first)
  const sorted = [...experiences].sort((a, b) => b.order - a.order);

  return (
    <SectionWrapper id="experience" title="Experience" subtitle="My Journey">
      <div className="max-w-2xl">
        {sorted.map((exp, i) => (
          <ExperienceCard
            key={exp.id}
            experience={exp}
            index={i}
            isLast={i === sorted.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
