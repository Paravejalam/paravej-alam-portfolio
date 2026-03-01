import { Rocket, Target, Eye } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const items = [
  {
    icon: Rocket,
    title: "Currently Learning",
    desc: "Machine Learning, AI tools, and Cloud basics to expand my technical capabilities.",
  },
  {
    icon: Target,
    title: "Future Goal",
    desc: "AI-powered Data Analyst / Data Scientist — solving real business problems at scale.",
  },
  {
    icon: Eye,
    title: "AI + Data Vision",
    desc: "Combining traditional analytics with intelligent automation for next-gen decision-making.",
  },
];

const ExtrasSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <SectionHeading title="What's Next" subtitle="My roadmap ahead" />
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <AnimatedSection key={i} delay={i * 150}>
            <div className="glass-card rounded-2xl p-6 text-center gradient-border card-hover group h-full">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ExtrasSection;
