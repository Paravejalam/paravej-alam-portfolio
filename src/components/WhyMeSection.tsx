import { Sparkles, Target, Zap, TrendingUp, Brain } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const points = [
  { icon: Target, text: "Business-focused analytics, not just tool expertise" },
  { icon: Brain, text: "AI + Data combined for intelligent decision-making" },
  { icon: TrendingUp, text: "End-to-end delivery: Data → ML → Dashboard → Deployment" },
  { icon: Zap, text: "Fast learner with real-world project experience" },
];

const WhyMeSection = () => (
  <section className="py-16 md:py-20">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-8 md:p-10 gradient-border bg-gradient-subtle card-hover relative overflow-hidden">
          <Sparkles className="h-8 w-8 text-primary mx-auto mb-4 relative" />
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center relative text-gradient-animated">Why Me?</h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-6 relative">
            {points.map((p, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <p.icon className="h-4 w-4 text-primary" />
                </div>
                <span>{p.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground relative">
            <span className="glass-card rounded-full px-4 py-2 gradient-border hover:scale-105 transition-transform duration-300">🎯 Business-focused</span>
            <span className="glass-card rounded-full px-4 py-2 gradient-border hover:scale-105 transition-transform duration-300">⚡ AI-powered</span>
            <span className="glass-card rounded-full px-4 py-2 gradient-border hover:scale-105 transition-transform duration-300">📊 Data-driven</span>
            <span className="glass-card rounded-full px-4 py-2 gradient-border hover:scale-105 transition-transform duration-300">🚀 End-to-end delivery</span>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default WhyMeSection;
