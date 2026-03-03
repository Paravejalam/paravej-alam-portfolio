import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  gradient?: boolean;
}

const SectionHeading = ({ title, subtitle, className, gradient = true }: SectionHeadingProps) => (
  <div className={cn("text-center mb-12 md:mb-16 relative", className)}>
    {/* Subtle glow behind heading */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-16 bg-primary/[0.06] blur-[60px] rounded-full" />
    <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative", gradient && "text-gradient-animated")}>
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto relative">{subtitle}</p>
    )}
  </div>
);

export default SectionHeading;
