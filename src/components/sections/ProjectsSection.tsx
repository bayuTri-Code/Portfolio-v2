import SectionWrapper from "@/src/components/ui/SectionWrapper";
import ProjectCard from "@/src/components/cards/ProjectCard";
import { projects } from "@/src/data/dummy";

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.isFeatured);
  const others = projects.filter((p) => !p.isFeatured);

  return (
    <SectionWrapper id="projects" title="Projects" subtitle="My Work">
      {/* Featured projects — bento grid */}
      <div className="grid gap-5 md:grid-cols-2">
        {featured.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            featured={i === 0}
          />
        ))}
      </div>

      {/* Other projects */}
      {others.length > 0 && (
        <>
          <div className="mt-12 mb-6 flex items-center gap-3">
            <h3 className="text-sm font-medium uppercase tracking-wider text-text-muted">
              Other Projects
            </h3>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
              />
            ))}
          </div>
        </>
      )}
    </SectionWrapper>
  );
}
