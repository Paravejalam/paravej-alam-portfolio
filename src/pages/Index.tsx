import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import PhilosophySection from "@/components/PhilosophySection";
import AIUseCasesSection from "@/components/AIUseCasesSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import WhyMeSection from "@/components/WhyMeSection";
import ExtrasSection from "@/components/ExtrasSection";
import ContactSection from "@/components/ContactSection";
import BackgroundEffects from "@/components/BackgroundEffects";
import ScrollProgress from "@/components/ScrollProgress";
import SectionDivider from "@/components/SectionDivider";
import ServicesSection from "@/components/ServicesSection";
import CursorGlow from "@/components/CursorGlow";

const Index = () => {
  const isDesktop = typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches;

  return (
    <div className="relative isolate min-h-screen w-full bg-background text-foreground noise-overlay">
      <ScrollProgress />
      {isDesktop && <CursorGlow />}

      {/* Background effects — desktop only */}
      {isDesktop && (
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <BackgroundEffects />
        </div>
      )}

      <div className="relative z-10 w-full">
        <Navbar />
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <div className="section-alt">
          <EducationSection />
        </div>
        <SectionDivider />
        <PhilosophySection />
        <SectionDivider />
        <div className="section-alt">
          <AIUseCasesSection />
        </div>
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <div className="section-alt">
          <SkillsSection />
        </div>
        <SectionDivider />
        <ServicesSection />
        <SectionDivider />
        <div className="section-alt">
          <CertificationsSection />
        </div>
        <SectionDivider />
        <WhyMeSection />
        <SectionDivider />
        <ExtrasSection />
        <SectionDivider />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
