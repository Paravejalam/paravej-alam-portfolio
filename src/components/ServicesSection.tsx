import { BarChart3, Code2, Bot, Workflow, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: BarChart3,
    title: "Data Dashboards",
    description: "Interactive Power BI dashboards that turn complex data into clear, actionable business insights.",
    tools: ["Power BI", "DAX", "Power Query"],
  },
  {
    icon: Code2,
    title: "Data Analysis",
    description: "Deep data exploration, cleaning, and statistical analysis to uncover hidden patterns and opportunities.",
    tools: ["Python", "Pandas", "SQL"],
  },
  {
    icon: Workflow,
    title: "Automation",
    description: "Streamline repetitive data workflows with automated pipelines that save hours of manual work.",
    tools: ["Python", "Excel 365", "ETL"],
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description: "Machine learning models and AI-powered tools that predict outcomes and enhance decision-making.",
    tools: ["ML", "TensorFlow", "LLMs"],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-16 md:py-28">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <SectionHeading
          title="How I Can Help Your Business"
          subtitle="End-to-end data & AI services tailored to your needs"
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-10">
        {services.map((s, i) => (
          <AnimatedSection key={i} delay={i * 120}>
            <div className="glass-card rounded-2xl p-6 md:p-8 gradient-border card-hover group h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5 shadow-lg group-hover:shadow-primary/30 transition-shadow duration-300">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{s.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[10px] px-2 py-0.5 rounded-full border border-primary/20 text-primary/80 bg-primary/5"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={500}>
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-accent to-cyan text-primary-foreground btn-premium animate-pulse-glow"
            asChild
          >
            <a href="#contact">
              <ArrowRight className="h-5 w-5" />
              Start a Project
            </a>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ServicesSection;
