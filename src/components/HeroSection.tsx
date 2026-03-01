import { ArrowDown, Download, FolderOpen, MapPin, GraduationCap, Handshake, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// ✅ NEW IMPORTS (ADDED)
import { motion, useMotionValue, useTransform } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const roles = [
  "Power BI",
  "SQL",
  "Python",
  "Machine Learning",
  "AI Systems",
  "LLM",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIndex];
    if (typing) {
      if (text.length < target.length) {
        const t = setTimeout(() => setText(target.slice(0, text.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [text, typing, roleIndex]);

  // ✅ NEW: 3D PARALLAX
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: any) => {
    mouseX.set(e.clientX - window.innerWidth / 2);
    mouseY.set(e.clientY - window.innerHeight / 2);
  };

  // ✅ NEW: PARTICLES INIT
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <section
      onMouseMove={handleMouseMove} // ✅ ADDED
      className="relative min-h-[100svh] overflow-hidden bg-[hsl(222,60%,4%)]"
    >

      {/* 🔥 NEW: PARTICLES BACKGROUND */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 60 },
            color: { value: ["#00ffff", "#8b5cf6"] },
            links: {
              enable: true,
              color: "#00ffff",
              distance: 120,
              opacity: 0.3,
            },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
          },
        }}
      />

      {/* 🔥 NEW: Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />

      {/* 🔥 NEW: Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* Desktop effects (UNCHANGED) */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full bg-primary/[0.08] blur-[100px] animate-float-slow" />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-accent/[0.08] blur-[100px] animate-float-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-cyan/[0.05] blur-[80px]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 45%, hsl(var(--background)) 100%)" }} />
      </div>

      {/* ✅ ONLY CHANGE: wrapper converted to motion.div */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative z-10 flex flex-col items-center justify-center min-h-[100svh] px-4 py-16 md:py-24 text-center"
      >
        <div className="w-full max-w-[900px]">

          {/* ALL BELOW CODE = 100% SAME (UNCHANGED) */}

          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 mb-8 text-xs sm:text-sm text-muted-foreground border border-primary/20 badge-glow glass-card">
            <span className="w-2 h-2 rounded-full bg-[hsl(142,69%,58%)] animate-pulse" />
            Open to AI / Data Analyst / Business Intelligence roles
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight text-foreground break-words max-w-full">
            Hi, I'm{" "}
            <span className="text-gradient-animated drop-shadow-[0_0_25px_rgba(0,255,255,0.4)]">
              Paravej Alam
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-foreground/70 mb-4 leading-relaxed max-w-full">
            From Raw Data to Intelligent Decisions — Powered by Analytics & AI
          </p>

          <div className="min-h-[2.5rem] flex items-center justify-center mb-5">
            <p className="text-sm sm:text-lg md:text-xl text-foreground/80 leading-relaxed break-words max-w-full font-mono">
              <span className="text-muted-foreground">{">"}</span>{" "}
              <span className="text-primary font-semibold animate-pulse">{text}</span>
              <span className="border-r-2 border-primary animate-blink ml-0.5">&nbsp;</span>
            </p>
          </div>

          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            I help businesses transform raw data into{" "}
            <span className="text-primary font-medium">actionable insights</span>,{" "}
            <span className="text-accent font-medium">dashboards</span>, and{" "}
            <span className="text-cyan font-medium">AI-driven solutions</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
            <Button size="lg" className="bg-gradient-accent text-primary-foreground btn-premium animate-pulse-glow w-full sm:w-auto text-base px-8" asChild>
              <a href="#projects">
                <FolderOpen className="h-5 w-5" />
                View Projects
              </a>
            </Button>

            <Button size="lg" variant="outline" className="glass-card border-primary/30 hover:border-primary/60 btn-premium w-full sm:w-auto text-base px-8" asChild>
              <a href="/resume.pdf" download>
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </Button>

            <Button size="lg" className="bg-gradient-to-r from-accent to-cyan text-primary-foreground btn-premium w-full sm:w-auto text-base px-8 animate-pulse-glow" style={{ animationDelay: "1s" }} asChild>
              <a href="#contact">
                <Handshake className="h-5 w-5" />
                Let's Work Together
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs text-muted-foreground">
            {["Built real-world projects", "Hands-on analytics experience", "Focused on business impact"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[hsl(142,69%,58%)]" />
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 text-sm text-muted-foreground">
            <span className="flex items-center gap-2 rounded-full px-4 py-2 glass-card gradient-border">
              <MapPin className="h-4 w-4 text-primary" /> Gorakhpur, UP, India
            </span>
            <span className="flex items-center gap-2 rounded-full px-4 py-2 glass-card gradient-border">
              <GraduationCap className="h-4 w-4 text-primary" /> MCA, MMMUT (2024–2026)
            </span>
          </div>

          <a href="#about" className="inline-block animate-float text-muted-foreground hover:text-primary transition-colors duration-300">
            <ArrowDown className="h-6 w-6" />
          </a>

        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;