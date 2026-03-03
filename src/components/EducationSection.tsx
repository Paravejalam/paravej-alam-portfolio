import { GraduationCap, Calendar, BookOpen, Lightbulb } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur",
    period: "2024 – 2026",
    highlights: [
      "Focus: Data Analytics, AI & Machine Learning",
      "Building real-world analytics projects using Power BI, SQL, and Python",
      "Developing AI-integrated data solutions",
    ],
  },
  {
    degree: "Bachelor of Science (Mathematics)",
    institution: "Shri Krishna University",
    period: "2021 – 2024",
    highlights: [
      "Built strong foundation in analytical thinking and problem-solving",
      "Developed mathematical approach to data and logic",
    ],
  },
];

const coursework = ["Statistics", "Data Analysis", "Machine Learning Basics"];

const EducationSection = () => (
  <section id="education" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <SectionHeading title="Education" subtitle="Academic foundation powering my data & AI journey" />
      </AnimatedSection>

      <div className="max-w-3xl mx-auto space-y-8">
        {education.map((edu, i) => (
          <AnimatedSection key={i} delay={i * 200}>
            <div className="glass-card rounded-2xl p-6 md:p-8 card-hover relative overflow-hidden gradient-border group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-l-2xl" />

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-1.5 text-xs text-primary font-medium mb-4">
                    <Calendar className="h-3.5 w-3.5" />
                    {edu.period}
                  </div>
                  <ul className="space-y-2">
                    {edu.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}

        <AnimatedSection delay={400}>
          <div className="glass-card rounded-2xl p-6 text-center gradient-border bg-gradient-subtle">
            <Lightbulb className="h-6 w-6 text-primary mx-auto mb-3" />
            <p className="text-sm md:text-base text-foreground/90 font-medium mb-4">
              Applying mathematical thinking + modern tools to solve real-world data problems.
            </p>

            <div className="flex items-center justify-center gap-2 mb-2">
              <BookOpen className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Relevant Coursework</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {coursework.map((c) => (
                <Badge key={c} variant="outline" className="text-xs border-primary/30 text-primary">
                  {c}
                </Badge>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default EducationSection;
