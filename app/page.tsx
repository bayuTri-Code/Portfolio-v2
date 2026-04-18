import Navbar from "@/src/components/ui/Navbar";
import Footer from "@/src/components/ui/Footer";
import HeroSection from "@/src/components/sections/HeroSection";
import AboutSection from "@/src/components/sections/AboutSection";
import ProjectsSection from "@/src/components/sections/ProjectsSection";
import ExperienceSection from "@/src/components/sections/ExperienceSection";
import SkillsSection from "@/src/components/sections/SkillsSection";
import ContactSection from "@/src/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
