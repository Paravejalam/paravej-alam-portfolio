import { BarChart3, Code2, Brain, Layers } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Skill {
  name: string;
  level: number;
  tip: string;
}

const categories = [
  {
    icon: BarChart3,
    title: "Analytics & Visualization",
    color: "from-primary to-primary/60",
    skills: [
      { name: "Power BI", level: 90, tip: "Interactive dashboards & reports" },
      { name: "Excel", level: 85, tip: "Advanced formulas & pivot tables" },
      { name: "MS Excel 365", level: 85, tip: "Cloud-connected spreadsheets" },
      { name: "Data Storytelling", level: 80, tip: "Turning data into narratives" },
      { name: "KPI Design", level: 80, tip: "Defining business metrics" },
      { name: "DAX", level: 75, tip: "Data Analysis Expressions for Power BI" },
      { name: "Power Query", level: 80, tip: "ETL & data transformation" },
    ] as Skill[],
  },
  {
    icon: Code2,
    title: "Programming & Data",
    color: "from-accent to-accent/60",
    skills: [
      { name: "Python", level: 80, tip: "Data analysis & automation" },
      { name: "Pandas", level: 78, tip: "DataFrame manipulation" },
      { name: "NumPy", level: 75, tip: "Numerical computing" },
      { name: "SQL", level: 82, tip: "Database querying & management" },
      { name: "Data Modeling", level: 75, tip: "Schema design & relationships" },
    ] as Skill[],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    color: "from-primary to-accent",
    skills: [
      { name: "Applied AI", level: 72, tip: "Real-world AI applications" },
      { name: "Generative AI", level: 70, tip: "LLM-powered solutions" },
      { name: "Machine Learning", level: 68, tip: "Supervised & unsupervised models" },
      { name: "TensorFlow", level: 55, tip: "Deep learning framework" },
      { name: "AI Tools", level: 75, tip: "ChatGPT, Copilot & more" },
      { name: "LLMs", level: 65, tip: "Large Language Models" },
    ] as Skill[],
  },
  {
    icon: Layers,
    title: "Currently Learning",
    color: "from-accent to-primary",
    skills: [
      { name: "Machine Learning", level: 50, tip: "Advanced ML algorithms" },
      { name: "Cloud Basics", level: 40, tip: "AWS, Azure fundamentals" },
      { name: "Advanced AI", level: 45, tip: "Deep learning & NLP" },
      { name: "AWS DevSecOps", level: 35, tip: "Cloud security & CI/CD" },
    ] as Skill[],
  },
];

const SkillBadge = ({ skill }: { skill: Skill }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <div className="group/skill cursor-default">
        <div className="flex items-center justify-between mb-1.5">
          <Badge
            variant="secondary"
            className="text-xs transition-all duration-300 group-hover/skill:scale-105 group-hover/skill:shadow-md group-hover/skill:shadow-primary/20 group-hover/skill:bg-primary/20 group-hover/skill:text-primary"
          >
            {skill.name}
          </Badge>
          <span className="text-[10px] text-muted-foreground ml-2 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
            {skill.level}%
          </span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-secondary/50 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700 ease-out"
            style={{ width: `${skill.level}%` }}
          />
        </div>
      </div>
    </TooltipTrigger>
    <TooltipContent side="top" className="text-xs glass-strong border-primary/20">
      {skill.tip}
    </TooltipContent>
  </Tooltip>
);

const SkillsSection = () => (
  <TooltipProvider delayDuration={200}>
    <section id="skills" className="py-16 md:py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading title="Skills & Tools" subtitle="My technical toolkit — hover to explore" />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {categories.map((cat, i) => (
            <AnimatedSection key={i} delay={i * 150}>
              <div className="glass-card rounded-2xl p-6 gradient-border card-hover group h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow duration-300`}>
                    <cat.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold">{cat.title}</h3>
                </div>
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </TooltipProvider>
);

export default SkillsSection;
