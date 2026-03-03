import { Brain, BarChart3, ExternalLink, TrendingUp, Clock, Layers, Zap, Rocket, Award, Target, Sparkles, Cloud, Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectCard = ({
  icon: Icon,
  iconColor,
  badge,
  title,
  problem,
  approach,
  aiAngle,
  impact,
  businessValue,
  tools,
  links,
  delay = 0,
}: {
  icon: React.ElementType;
  iconColor: string;
  badge: string;
  title: string;
  problem: string;
  approach: string[];
  aiAngle: string[];
  impact: { icon: React.ElementType; text: string }[];
  businessValue: string[];
  tools: string[];
  links: { label: string; url: string }[];
  delay?: number;
}) => (
  <AnimatedSection delay={delay}>
    <div className="glass-card rounded-2xl overflow-hidden gradient-border card-hover">
      {/* Header */}
      <div className={`h-40 bg-gradient-to-br ${iconColor} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <Icon className="h-14 w-14 text-foreground/20" />
        <div className="absolute bottom-3 right-3">
          <Badge variant="secondary" className="glass-card text-xs gradient-border">{badge}</Badge>
        </div>
      </div>

      <div className="p-4 sm:p-6 md:p-8 space-y-5">
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>

        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">🔍 Problem</p>
          <p className="text-sm text-muted-foreground">{problem}</p>
        </div>

        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">⚙️ Approach</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            {approach.map((a, j) => (
              <li key={j} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card rounded-lg p-4 gradient-border">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">🤖 AI / ML Angle</p>
          <ul className="text-sm text-foreground/80 space-y-1">
            {aiAngle.map((a, j) => (
              <li key={j} className="flex items-start gap-2">
                <Sparkles className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">📈 Impact</p>
          <div className="space-y-2">
            {impact.map((imp, j) => (
              <div key={j} className="flex items-center gap-2 text-sm">
                <imp.icon className="h-4 w-4 text-primary shrink-0" />
                <span className="text-foreground/90 font-medium">{imp.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-lg p-4 gradient-border">
          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">💼 Business Value</p>
          <ul className="text-sm text-foreground/80 space-y-1">
            {businessValue.map((a, j) => (
              <li key={j} className="flex items-start gap-2">
                <Briefcase className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <Badge key={tool} variant="outline" className="text-xs border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-200">{tool}</Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {links.map((link, j) => (
            <Button
              key={j}
              asChild
              size="sm"
              className={j === 0 ? "bg-gradient-accent text-primary-foreground btn-premium" : "glass-card border-primary/30 hover:bg-primary/10 btn-premium"}
              variant={j === 0 ? "default" : "outline"}
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" /> {link.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  </AnimatedSection>
);

const ProjectsSection = () => (
  <section id="projects" className="py-16 md:py-28">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <SectionHeading title="Featured Projects" subtitle="Data Analytics + AI in Action" />
      </AnimatedSection>

      <div className="max-w-4xl mx-auto space-y-10">
        <ProjectCard
          icon={Brain}
          iconColor="from-accent/[0.15] to-primary/[0.05]"
          badge="AI + ML Project"
          title="College Placement Predictor & Resume Insights Dashboard"
          problem="Students lack clarity on placement trends, resume strength, and job readiness."
          approach={[
            "Built end-to-end ML pipeline using Python (Pandas, NumPy, Scikit-learn)",
            "Implemented Logistic Regression model for placement prediction",
            "Created ATS Resume Match Score system",
            "Used SHAP for model explainability",
            "Built What-If Simulator for skill improvement",
            "Developed dashboards using Excel & Power BI",
            "Deployed using Streamlit",
          ]}
          aiAngle={[
            "Machine Learning prediction system",
            "SHAP explainability for transparent decision-making",
            "AI-assisted resume scoring",
          ]}
          impact={[
            { icon: Layers, text: "Built full pipeline (Data → ML → Dashboard → Deployment)" },
            { icon: Target, text: "Helps students understand placement probability" },
            { icon: TrendingUp, text: "Converts raw data into actionable career insights" },
          ]}
          businessValue={[
            "Bridges the gap between raw data and career decision-making using AI",
            "Enables data-driven decision-making for students",
          ]}
          tools={["Python", "Pandas", "NumPy", "Scikit-learn", "SQL", "Power BI", "Excel", "Streamlit", "SHAP"]}
          links={[
            { label: "Live App", url: "https://college-placement-predictor.streamlit.app/" },
            { label: "GitHub", url: "https://github.com/Paravejalam/College-Placement-Predictor" },
          ]}
        />

        <ProjectCard
          icon={BarChart3}
          iconColor="from-primary/[0.15] to-primary/[0.03]"
          badge="Power BI + Deployment"
          title="Sales Performance Analytics Dashboard"
          problem="Businesses struggle to analyze sales performance due to static and fragmented reports."
          approach={[
            "Data cleaning using Power Query",
            "Data modeling (Fact & Dimension Tables)",
            "KPI creation using DAX (Revenue, Orders, AOV, Growth)",
            "Interactive Power BI dashboard",
            "Integrated with web interface",
            "Deployed using Vercel",
          ]}
          aiAngle={[
            "Used AI tools for KPI identification and insight generation",
            "Enhanced dashboard storytelling",
          ]}
          impact={[
            { icon: Layers, text: "Analyzed 10,000+ rows of sales data" },
            { icon: TrendingUp, text: "Identified top-performing products and regions" },
            { icon: Clock, text: "Improved reporting efficiency" },
          ]}
          businessValue={[
            "Helps stakeholders make faster data-driven decisions",
            "Designed for non-technical users to explore insights without SQL knowledge",
          ]}
          tools={["Power BI", "DAX", "Power Query", "Data Modeling", "Vercel", "AI Tools"]}
          links={[
            { label: "Live Dashboard", url: "https://v0-sales-performance-dashboard-ochre.vercel.app/" },
            { label: "GitHub", url: "https://github.com/Paravejalam/v0-sales-performance-dashboard" },
          ]}
          delay={200}
        />

        {/* Learning & Certifications */}
        <AnimatedSection delay={400}>
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-center text-gradient-animated">Learning & Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="glass-card rounded-2xl p-6 gradient-border card-hover group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Rocket className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold">AI, Data Analytics & Power BI</h4>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {[
                    "Completed Power BI & Generative AI MasterClass",
                    "Worked on real-world datasets for business analytics",
                    "Applied AI tools in analytics workflows",
                    "Built multiple dashboard-based and AI-integrated projects",
                  ].map((a, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card rounded-2xl p-6 gradient-border card-hover group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <Cloud className="h-5 w-5 text-accent" />
                  </div>
                  <h4 className="font-semibold">AWS DevSecOps (NIELIT)</h4>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {[
                    "Currently learning DevSecOps practices on AWS",
                    "Understanding CI/CD, cloud security, and automation",
                    "Integrating cloud concepts with analytics workflows",
                  ].map((a, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 md:p-8 gradient-border bg-gradient-subtle text-center">
              <Award className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="text-lg font-bold mb-4">🎯 What Makes Me Different</h4>
              <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
                {[
                  "I don't just build dashboards — I build intelligent analytics systems",
                  "I combine Data Analytics + AI + Deployment",
                  "Focused on real-world problem solving, not just tools",
                  "Capable of building end-to-end data solutions",
                ].map((d, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm text-foreground/90 font-medium">
                    <Zap className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
