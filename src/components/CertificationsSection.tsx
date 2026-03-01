import { Award, ExternalLink, BookOpen, Cloud } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    icon: Award,
    title: "Power BI Certification",
    subtitle: "30 Days Power BI Micro Course",
    date: "February 1, 2025",
    instructor: "Satish Dhawale",
    highlights: [
      "Completed structured 30-day Power BI program",
      "Hands-on dashboard building & DAX mastery",
    ],
    tags: ["Power BI", "DAX", "Data Visualization"],
    link: null as string | null,
  },
  {
    icon: BookOpen,
    title: "Power BI & Generative AI MasterClass",
    subtitle: "Hands-on Training in Power BI + AI Analytics",
    date: "2025",
    instructor: null as string | null,
    highlights: [
      "Completed hands-on training in Power BI and AI-driven analytics",
      "Built real-world dashboards and AI-integrated analytics solutions",
    ],
    tags: ["Power BI", "Generative AI", "Analytics"],
    link: null as string | null,
  },
  {
    icon: Cloud,
    title: "AWS DevSecOps (NIELIT)",
    subtitle: "Cloud Security & Automation",
    date: "In Progress",
    instructor: "NIELIT",
    highlights: [
      "Learning DevSecOps practices on AWS",
      "CI/CD, cloud security, and automation fundamentals",
    ],
    tags: ["AWS", "DevSecOps", "Cloud"],
    link: null as string | null,
  },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <SectionHeading title="Certifications" subtitle="Continuous learning & industry-focused growth" />
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {certifications.map((cert, i) => (
          <AnimatedSection key={i} delay={i * 150}>
            <div className="glass-card rounded-2xl p-6 h-full flex flex-col card-hover group gradient-border">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg group-hover:shadow-primary/30 transition-shadow duration-300">
                <cert.icon className="h-6 w-6 text-primary-foreground" />
              </div>

              <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{cert.subtitle}</p>

              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1">📅 {cert.date}</span>
                {cert.instructor && (
                  <span className="flex items-center gap-1">👨‍🏫 {cert.instructor}</span>
                )}
              </div>

              <ul className="space-y-1.5 mb-4 flex-1">
                {cert.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {cert.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-[10px]">
                    {tag}
                  </Badge>
                ))}
              </div>

              {cert.link && (
                <Button variant="outline" size="sm" className="w-full border-primary/30 hover:bg-primary/10" asChild>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Certificate
                  </a>
                </Button>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
