import { Sparkles, Database, Search, Code2, BarChart, MessageSquare, Lightbulb, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const useCases = [
  { icon: Database, label: "AI-assisted data cleaning & preprocessing" },
  { icon: Sparkles, label: "Automated insight generation using AI" },
  { icon: Search, label: "AI-powered SQL query optimization" },
  { icon: Code2, label: "AI with Python for faster analysis & debugging" },
  { icon: BarChart, label: "Improving dashboard storytelling with AI" },
  { icon: MessageSquare, label: "Business insights using Generative AI" },
];

const AIUseCasesSection = () => (
  <section id="ai-use-cases" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <SectionHeading title="How I Use AI in Data Analytics" subtitle="Leveraging AI to work smarter, not harder" />
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
        {useCases.map((uc, i) => (
          <AnimatedSection key={i} delay={i * 100}>
            <div className="glass-card rounded-xl p-5 flex items-start gap-4 gradient-border card-hover group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                <uc.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed">{uc.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={600}>
        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-8 gradient-border glow-soft mb-10">
          <div className="flex items-start gap-4">
            <Quote className="h-8 w-8 text-primary shrink-0 mt-1" />
            <div>
              <p className="text-foreground font-medium leading-relaxed mb-2">
                "Used AI to analyze datasets and generate insights faster, reducing manual effort."
              </p>
              <p className="text-muted-foreground text-sm">— Real-world application in data analysis projects</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={700}>
        <div className="flex items-center justify-center gap-3 text-center">
          <Lightbulb className="h-5 w-5 text-accent" />
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Vision:</span> To build intelligent analytics systems where AI enhances decision-making.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AIUseCasesSection;
