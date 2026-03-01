const floatingKeywords = [
  { text: "AI", top: "12%", left: "6%", size: "text-base", delay: "0s" },
  { text: "ML", top: "24%", left: "88%", size: "text-sm", delay: "3s" },
  { text: "Data", top: "48%", left: "4%", size: "text-sm", delay: "1.5s" },
  { text: "Analytics", top: "68%", left: "82%", size: "text-xs", delay: "5s" },
  { text: "Python", top: "16%", left: "58%", size: "text-xs", delay: "4s" },
  { text: "SQL", top: "74%", left: "52%", size: "text-xs", delay: "6s" },
  { text: "Neural", top: "38%", left: "94%", size: "text-xs", delay: "1s" },
  { text: "Insights", top: "82%", left: "18%", size: "text-xs", delay: "2s" },
];

const neuralNodes: [number, number][] = [
  [5, 12], [14, 38], [24, 16], [36, 58], [48, 22], [60, 45], [73, 14],
  [84, 62], [92, 28], [10, 72], [28, 82], [53, 74], [68, 88], [86, 50],
  [18, 52], [43, 38], [63, 68], [78, 24], [40, 90], [94, 78],
  [7, 92], [33, 8], [56, 52], [76, 72], [11, 44],
];

const neuralLines: [[number, number], [number, number]][] = [
  [[5, 12], [14, 38]], [[14, 38], [24, 16]], [[24, 16], [48, 22]], [[48, 22], [73, 14]],
  [[36, 58], [60, 45]], [[60, 45], [84, 62]], [[10, 72], [28, 82]], [[28, 82], [53, 74]],
  [[53, 74], [68, 88]], [[73, 14], [92, 28]], [[18, 52], [36, 58]], [[43, 38], [60, 45]],
  [[63, 68], [84, 62]], [[78, 24], [92, 28]], [[40, 90], [53, 74]], [[94, 78], [84, 62]],
  [[7, 92], [10, 72]], [[33, 8], [24, 16]], [[56, 52], [63, 68]], [[76, 72], [68, 88]],
  [[11, 44], [18, 52]], [[14, 38], [18, 52]], [[48, 22], [43, 38]], [[86, 50], [78, 24]],
];

const BackgroundEffects = () => (
  <div className="relative h-full w-full pointer-events-none z-0 overflow-hidden" aria-hidden="true">
    {/* Subtle grid pattern */}
    <div className="absolute inset-0 grid-pattern opacity-30" />

    {/* Vignette overlay */}
    <div className="absolute inset-0" style={{
      background: "radial-gradient(ellipse at center, transparent 45%, hsl(var(--background)) 100%)"
    }} />

    {/* LAYER 1: Neural Network — hidden on mobile for performance */}
    <svg className="absolute inset-0 w-full h-full animate-drift opacity-[0.06] hidden md:block" xmlns="http://www.w3.org/2000/svg">
      {neuralNodes.map(([cx, cy], i) => (
        <circle key={`n${i}`} cx={`${cx}%`} cy={`${cy}%`} r={i % 5 === 0 ? "3" : "1.5"}
          fill="hsl(var(--primary))" opacity={i % 5 === 0 ? "1" : "0.6"}>
          {i % 5 === 0 && <animate attributeName="opacity" values="0.4;1;0.4" dur={`${3 + i % 4}s`} repeatCount="indefinite" />}
        </circle>
      ))}
      {neuralLines.map(([[x1, y1], [x2, y2]], i) => (
        <line key={`nl${i}`} x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`}
          stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.4" />
      ))}
    </svg>

    {/* LAYER 2: Data Flow Lines — hidden on mobile */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.04] hidden md:block" xmlns="http://www.w3.org/2000/svg">
      {[20, 40, 60, 80].map((y, i) => (
        <line key={`dh${i}`} x1="0%" y1={`${y}%`} x2="100%" y2={`${y}%`}
          stroke="hsl(var(--cyan))" strokeWidth="0.5" strokeDasharray="8 16" opacity="0.5">
          <animate attributeName="stroke-dashoffset" from="0" to="-48" dur={`${6 + i * 2}s`} repeatCount="indefinite" />
        </line>
      ))}
      {[25, 50, 75].map((x, i) => (
        <line key={`dv${i}`} x1={`${x}%`} y1="0%" x2={`${x}%`} y2="100%"
          stroke="hsl(var(--accent))" strokeWidth="0.5" strokeDasharray="6 20" opacity="0.3">
          <animate attributeName="stroke-dashoffset" from="0" to="-52" dur={`${8 + i * 2}s`} repeatCount="indefinite" />
        </line>
      ))}
    </svg>

    {/* LAYER 3: Floating AI keywords — hidden on mobile */}
    <div className="hidden md:block">
      {floatingKeywords.map(({ text, top, left, size, delay }) => (
        <span key={text}
          className={`absolute ${size} font-mono text-primary/[0.05] blur-[0.5px] animate-float-slower select-none`}
          style={{ top, left, animationDelay: delay }}>
          {text}
        </span>
      ))}
    </div>

    {/* LAYER 4: Blurred mini UI elements — hidden on mobile */}
    <div className="hidden lg:block">
      <div className="absolute top-[8%] right-[6%] w-20 h-14 glass rounded-lg opacity-[0.04] blur-[1px] animate-float-slow" style={{ animationDelay: "2s" }}>
        <div className="p-1.5 h-full flex flex-col justify-end gap-0.5">
          <div className="flex items-end gap-px h-full">
            {[40, 60, 35, 80, 55, 70].map((h, i) => (
              <div key={i} className="flex-1 bg-primary/60 rounded-t-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-[12%] left-[4%] w-24 h-10 glass rounded-lg opacity-[0.04] blur-[1px] animate-float-slower" style={{ animationDelay: "4s" }}>
        <div className="p-1.5 flex flex-col justify-center">
          <div className="w-8 h-1 bg-primary/40 rounded mb-1" />
          <div className="w-14 h-1.5 bg-accent/30 rounded" />
        </div>
      </div>
      <div className="absolute bottom-[20%] right-[10%] w-16 h-16 glass rounded-lg opacity-[0.03] blur-[1px] animate-float-slow" style={{ animationDelay: "6s" }}>
        <div className="p-1.5 h-full flex flex-col gap-1">
          <div className="w-full h-1 bg-cyan/30 rounded" />
          <div className="flex-1 rounded border border-primary/10 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary/20" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 1 0 18" fill="currentColor" opacity="0.3" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    {/* Blurred tech hint SVGs — hidden on small screens */}
    <div className="hidden md:block">
      <svg className="absolute top-[55%] left-[2%] w-12 h-12 opacity-[0.03] blur-[1px] animate-float-slow" style={{ animationDelay: "3s" }} viewBox="0 0 48 48" fill="none">
        <path d="M24 4L44 14V34L24 44L4 34V14L24 4Z" stroke="hsl(var(--accent))" strokeWidth="1" />
      </svg>
      <svg className="absolute top-[30%] right-[2%] w-10 h-10 opacity-[0.025] blur-[1px] animate-float-slower" style={{ animationDelay: "7s" }} viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" stroke="hsl(var(--cyan))" strokeWidth="0.8" />
        <circle cx="20" cy="20" r="8" stroke="hsl(var(--cyan))" strokeWidth="0.6" />
      </svg>
    </div>

    {/* Gradient orbs — lightweight on mobile */}
    <div className="absolute top-[10%] left-[15%] w-[180px] md:w-[500px] h-[180px] md:h-[500px] rounded-full bg-primary/[0.07] blur-[36px] md:blur-[80px] animate-float-slow" />
    <div className="absolute top-[50%] right-[10%] w-[160px] md:w-[400px] h-[160px] md:h-[400px] rounded-full bg-accent/[0.06] blur-[32px] md:blur-[72px] animate-float-slower" />
    <div className="absolute bottom-[10%] left-[30%] w-[140px] md:w-[350px] h-[140px] md:h-[350px] rounded-full bg-cyan/[0.04] blur-[28px] md:blur-[68px] animate-float-slow" style={{ animationDelay: "2s" }} />
    <div className="absolute top-[30%] right-[40%] w-[120px] md:w-[250px] h-[120px] md:h-[250px] rounded-full bg-primary/[0.04] blur-[24px] md:blur-[60px] animate-float-slower" style={{ animationDelay: "4s" }} />
  </div>
);

export default BackgroundEffects;
