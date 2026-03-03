import { Mail, Linkedin, Github, ExternalLink, Download, Handshake } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";

const contactLinks = [
  { icon: Mail, label: "parvejalamsiddiqui1436@gmail.com", href: "mailto:parvejalamsiddiqui1436@gmail.com" },
  { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/paravejaalam", external: true },
  { icon: Github, label: "GitHub Projects", href: "https://github.com/Paravejalam/", external: true },
  { icon: Download, label: "Download Resume (PDF)", href: "/resume.pdf", download: true },
];

const ContactSection = () => (
  <section id="contact" className="py-16 md:py-28">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <SectionHeading title="Let's Connect" subtitle="Ready to collaborate on your next data or AI project" />
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <div className="max-w-md mx-auto text-center">
          <div className="space-y-4 mb-8">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...(link.download ? { download: true } : {})}
                className="flex items-center gap-3 glass-card rounded-xl p-4 gradient-border card-hover"
              >
                <link.icon className="h-5 w-5 text-primary" />
                <span className="text-sm text-foreground">{link.label}</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto" />
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-gradient-accent text-primary-foreground btn-premium" asChild>
              <a href="mailto:parvejalamsiddiqui1436@gmail.com">
                <Mail className="h-5 w-5" />
                Get in Touch
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-cyan text-primary-foreground btn-premium animate-pulse-glow"
              asChild
            >
              <a href="mailto:parvejalamsiddiqui1436@gmail.com?subject=Project%20Inquiry">
                <Handshake className="h-5 w-5" />
                Hire Me
              </a>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <div className="mt-20 pt-8 text-center text-sm text-muted-foreground">
        <div className="gradient-divider mb-8" />
        <p>© 2026 Paravej Alam. Built with passion for data & AI.</p>
      </div>
    </div>
  </section>
);

export default ContactSection;
