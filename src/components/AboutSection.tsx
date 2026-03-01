import { BookOpen, Database, Brain } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    icon: BookOpen,
    title: "Mathematics Foundation",
    desc: "B.Sc in Mathematics — built analytical thinking and problem-solving skills that drive my data approach.",
    color: "text-primary",
  },
  {
    icon: Database,
    title: "Data Analytics Mastery",
    desc: "MCA at MMMUT Gorakhpur — transitioned into Data Analytics with Power BI, SQL, and Python on real-world datasets.",
    color: "text-accent",
  },
  {
    icon: Brain,
    title: "AI & ML Integration",
    desc: "Integrating AI/ML to automate analysis, generate faster insights, and improve decision-making efficiency.",
    color: "text-primary",
  },
];

const AboutSection = () => (
  <section id="about" className="py-16 md:py-28">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <SectionHeading title="My Journey" subtitle="From mathematics to AI-powered analytics" />
      </AnimatedSection>

      <div className="max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <AnimatedSection key={i} delay={i * 150}>
            <div className="flex gap-4 md:gap-6 mb-10 last:mb-0 group">
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-xl glass-card gradient-border flex items-center justify-center ${step.color} shrink-0 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300`}>
                  <step.icon className="h-6 w-6" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-primary/30 to-transparent mt-2" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{step.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={500}>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-8 text-lg">
          Today, I focus on building projects where <span className="text-primary font-medium">Data Analytics meets AI</span> — creating solutions that are not just insightful, but also smart and scalable.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
