import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  Check,
  ChevronRight,
  CircleDot,
  Gauge,
  Menu,
  MousePointer2,
  Network,
  Play,
  Sparkles,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOVA — Intelligence in Motion" },
      {
        name: "description",
        content: "A premium technology platform placeholder for teams building their next breakthrough.",
      },
      { property: "og:title", content: "NOVA — Intelligence in Motion" },
      {
        property: "og:description",
        content: "A premium technology platform placeholder for teams building their next breakthrough.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = ["Product", "Solutions", "Resources", "Company"];

const features = [
  {
    icon: Network,
    label: "01 / CONNECT",
    title: "One intelligent layer",
    description: "Unify every moving part into a system that stays clear, fast, and ready to scale.",
    visual: "nodes",
  },
  {
    icon: Zap,
    label: "02 / ACCELERATE",
    title: "Move at signal speed",
    description: "Turn complex workflows into focused actions with automation that feels effortless.",
    visual: "bars",
  },
  {
    icon: CircleDot,
    label: "03 / OBSERVE",
    title: "See what matters",
    description: "Surface the context, patterns, and decisions your team needs in the moment.",
    visual: "rings",
  },
  {
    icon: Workflow,
    label: "04 / EVOLVE",
    title: "Built to adapt",
    description: "A modular foundation that changes with your product, your people, and your ambition.",
    visual: "blocks",
  },
];

const showcase = {
  Automate: {
    number: "01",
    title: "Build once. Move endlessly.",
    copy: "Create intelligent workflows that connect your tools and keep momentum moving without manual overhead.",
    points: ["Visual workflow builder", "Adaptive triggers", "Live observability"],
  },
  Analyze: {
    number: "02",
    title: "Clarity at every layer.",
    copy: "Bring signals into focus with real-time intelligence designed for decisive, high-velocity teams.",
    points: ["Unified data view", "Predictive signals", "Custom reporting"],
  },
  Collaborate: {
    number: "03",
    title: "Everyone in the flow.",
    copy: "Give every team a shared source of truth and a faster path from conversation to execution.",
    points: ["Shared workspaces", "Contextual comments", "Role-based access"],
  },
} as const;

type ShowcaseKey = keyof typeof showcase;

function BrandMark() {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="NOVA home">
      <span className="relative grid size-8 place-items-center">
        <span className="absolute inset-0 rotate-45 rounded-[3px] border border-primary/80 transition-transform duration-500 group-hover:rotate-[135deg]" />
        <span className="size-2 rounded-full bg-foreground shadow-[0_0_18px_var(--primary)]" />
      </span>
      <span className="text-sm font-semibold tracking-[0.22em] text-foreground">NOVA</span>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="glass-panel mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Main navigation">
        <BrandMark />
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link text-sm text-muted-foreground transition-colors hover:text-foreground">
              {link}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <Button asChild variant="outline" className="glow-border h-10 border-border/80 bg-secondary/30 px-5 text-foreground hover:bg-secondary">
            <a href="#contact">Start building <ArrowRight /></a>
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </Button>
      </nav>
      {open && (
        <div className="glass-panel mx-auto mt-2 max-w-7xl p-3 md:hidden">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="block rounded-md px-4 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground">
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function DashboardPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const handlePointer = (event: MouseEvent<HTMLDivElement>) => {
    const box = ref.current?.getBoundingClientRect();
    if (!box || !ref.current) return;
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    ref.current.style.setProperty("--rx", `${-y * 4}deg`);
    ref.current.style.setProperty("--ry", `${x * 5}deg`);
  };

  return (
    <div className="relative mx-auto mt-20 max-w-6xl px-4 sm:px-6">
      <div className="dashboard-bloom" />
      <div ref={ref} onMouseMove={handlePointer} onMouseLeave={() => { ref.current?.style.setProperty("--rx", "0deg"); ref.current?.style.setProperty("--ry", "0deg"); }} className="dashboard-shell relative overflow-hidden">
        <div className="flex h-12 items-center justify-between border-b border-border/70 px-4 sm:px-5">
          <div className="flex items-center gap-2"><span className="size-2 rounded-full bg-accent" /><span className="size-2 rounded-full bg-muted" /><span className="size-2 rounded-full bg-muted" /></div>
          <span className="text-[10px] font-medium tracking-[0.18em] text-muted-foreground">LIVE SYSTEM / 12:48:09</span>
          <div className="flex items-center gap-2 text-[10px] text-success"><span className="size-1.5 rounded-full bg-success shadow-[0_0_10px_var(--success)]" /> OPERATIONAL</div>
        </div>
        <div className="grid min-h-[420px] grid-cols-1 md:grid-cols-[180px_1fr_240px]">
          <aside className="hidden border-r border-border/60 p-4 md:block">
            <p className="micro-label">Workspace</p>
            <div className="mt-5 space-y-1">
              {[[Gauge,"Overview"],[Workflow,"Flows"],[Boxes,"Modules"],[CircleDot,"Signals"]].map(([Icon,label], index) => {
                const ItemIcon = Icon as typeof Gauge;
                return <div key={String(label)} className={cn("flex items-center gap-3 rounded-md px-3 py-2.5 text-xs", index === 0 ? "bg-secondary text-foreground" : "text-muted-foreground")}><ItemIcon className="size-3.5" />{String(label)}</div>
              })}
            </div>
          </aside>
          <div className="relative overflow-hidden p-5 sm:p-8">
            <div className="flex items-start justify-between"><div><p className="micro-label">Intelligence overview</p><p className="mt-2 text-xl font-medium">System velocity</p></div><div className="rounded-md border border-border bg-secondary/60 px-3 py-2 text-xs text-muted-foreground">Last 30 days</div></div>
            <div className="mt-10 flex items-end gap-3"><span className="text-5xl font-semibold">84.6</span><span className="mb-1.5 text-xs text-success">↗ 18.4%</span></div>
            <div className="relative mt-8 h-48 overflow-hidden border-b border-l border-border/60">
              <div className="chart-grid absolute inset-0" />
              <svg viewBox="0 0 600 190" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-label="Rising system velocity chart">
                <defs><linearGradient id="line" x1="0" x2="1"><stop stopColor="var(--blue)"/><stop offset=".52" stopColor="var(--violet)"/><stop offset="1" stopColor="var(--pink)"/></linearGradient><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop stopColor="var(--violet)" stopOpacity=".25"/><stop offset="1" stopColor="var(--violet)" stopOpacity="0"/></linearGradient></defs>
                <path d="M0 160 C50 155 65 118 112 132 S175 120 210 125 S255 91 292 105 S360 86 395 91 S445 65 480 70 S530 34 600 25 L600 190 L0 190Z" fill="url(#fill)" />
                <path d="M0 160 C50 155 65 118 112 132 S175 120 210 125 S255 91 292 105 S360 86 395 91 S445 65 480 70 S530 34 600 25" fill="none" stroke="url(#line)" strokeWidth="3" vectorEffect="non-scaling-stroke" />
              </svg>
              <MousePointer2 className="absolute right-[16%] top-[12%] size-5 fill-foreground text-foreground drop-shadow-[0_0_10px_var(--pink)]" />
            </div>
          </div>
          <aside className="hidden border-l border-border/60 p-5 md:block">
            <p className="micro-label">Live activity</p>
            <div className="mt-5 space-y-5">
              {["Data synchronized", "Flow completed", "Signal detected", "Module deployed"].map((item, index) => <div key={item} className="flex gap-3"><span className={cn("mt-1 size-2 shrink-0 rounded-full", index === 2 ? "bg-pink" : "bg-primary")} /><div><p className="text-xs text-foreground">{item}</p><p className="mt-1 text-[10px] text-muted-foreground">{index + 2} min ago</p></div></div>)}
            </div>
            <div className="mt-10 border-t border-border/60 pt-5"><div className="flex justify-between text-[10px] text-muted-foreground"><span>CAPACITY</span><span>68%</span></div><div className="mt-3 h-1 overflow-hidden rounded-full bg-muted"><div className="h-full w-2/3 bg-linear-to-r from-primary via-violet to-pink" /></div></div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function FeatureVisual({ type }: { type: string }) {
  if (type === "nodes") return <div className="feature-visual"><span className="node left-[16%] top-1/2" /><span className="node node-hot left-1/2 top-[28%]" /><span className="node left-[78%] top-[58%]" /><span className="connector left-[20%] top-[48%] w-[34%] -rotate-12" /><span className="connector left-[51%] top-[40%] w-[30%] rotate-[25deg]" /></div>;
  if (type === "bars") return <div className="feature-visual flex items-end justify-center gap-2 px-10 pb-10">{[36,58,46,76,64,92].map((height, i) => <span key={height} className={cn("w-full max-w-7 rounded-sm bg-muted", i > 3 && "bar-accent")} style={{ height: `${height}%`, animationDelay: `${i * 100}ms` }} />)}</div>;
  if (type === "rings") return <div className="feature-visual grid place-items-center"><div className="orbit size-32"><span className="absolute inset-5 rounded-full border border-border" /><span className="absolute inset-11 rounded-full bg-primary shadow-[0_0_28px_var(--blue)]" /><span className="orbit-dot" /></div></div>;
  return <div className="feature-visual grid place-items-center"><div className="grid grid-cols-3 gap-2 rotate-[-8deg]">{Array.from({ length: 9 }).map((_, i) => <span key={i} className={cn("size-8 rounded-sm border border-border bg-secondary transition-colors duration-500", [1,4,8].includes(i) && "bg-primary/30 border-primary/60")} />)}</div></div>;
}

function Features() {
  return (
    <section id="product" className="section-wrap scroll-mt-24 py-28 sm:py-36">
      <div className="mb-14 max-w-2xl"><p className="eyebrow">Built different</p><h2 className="section-title mt-5">Everything you need.<br/><span className="text-muted-foreground">Nothing you don’t.</span></h2></div>
      <div className="grid gap-4 md:grid-cols-2">
        {features.map((feature) => <article key={feature.title} className="feature-card group"><FeatureVisual type={feature.visual} /><div className="relative border-t border-border/70 p-6 sm:p-8"><div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.18em] text-primary"><feature.icon className="size-3.5" />{feature.label}</div><h3 className="mt-4 text-xl font-medium">{feature.title}</h3><p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">{feature.description}</p></div></article>)}
      </div>
    </section>
  );
}

function Metrics() {
  return <section id="solutions" className="border-y border-border/60 bg-secondary/20"><div className="section-wrap grid grid-cols-2 py-12 md:grid-cols-4">{[["99.99%","Uptime"],["4.8×","Faster execution"],["120+","Integrations"],["24/7","Global support"]].map(([value,label], i) => <div key={label} className={cn("relative px-4 py-6 text-center", i % 2 !== 0 && "metric-divider", i > 1 && "max-md:border-t max-md:border-border/60", i === 2 && "md:metric-divider")}><p className="gradient-text text-3xl font-semibold sm:text-4xl">{value}</p><p className="mt-2 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">{label}</p></div>)}</div></section>;
}

function Showcase() {
  const [active, setActive] = useState<ShowcaseKey>("Automate");
  const item = showcase[active];
  return <section id="resources" className="section-wrap scroll-mt-24 py-28 sm:py-36"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow justify-center">One continuous flow</p><h2 className="section-title mt-5">From idea to impact.</h2><p className="mt-5 text-base leading-7 text-muted-foreground">A single environment for the work that moves your business forward.</p></div><div className="mt-14 grid overflow-hidden rounded-lg border border-border bg-card lg:grid-cols-[.8fr_1.2fr]"><div className="flex flex-col border-b border-border p-6 sm:p-10 lg:border-r lg:border-b-0"><div className="flex gap-2 border-b border-border pb-6">{(Object.keys(showcase) as ShowcaseKey[]).map((key) => <Button key={key} variant="ghost" size="sm" onClick={() => setActive(key)} className={cn("rounded-sm px-3 text-muted-foreground", active === key && "bg-secondary text-foreground")}>{key}</Button>)}</div><div key={active} className="showcase-copy flex flex-1 flex-col justify-center py-10"><p className="font-mono text-xs text-primary">{item.number} / 03</p><h3 className="mt-5 text-3xl font-medium sm:text-4xl">{item.title}</h3><p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">{item.copy}</p><ul className="mt-8 space-y-3">{item.points.map((point) => <li key={point} className="flex items-center gap-3 text-sm"><span className="grid size-5 place-items-center rounded-full border border-primary/40 bg-primary/10"><Check className="size-3 text-primary" /></span>{point}</li>)}</ul></div></div><div className="showcase-stage relative min-h-[480px] overflow-hidden p-6 sm:p-10"><div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 shadow-[0_0_90px_var(--bloom)]" /><div className="absolute left-1/2 top-1/2 size-52 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-lg border border-violet/30 bg-secondary/50 backdrop-blur-xl" /><div className="absolute left-1/2 top-1/2 flex size-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md border border-pink/30 bg-card shadow-[0_0_50px_var(--bloom)]"><Sparkles className="size-9 text-foreground" /></div>{["INPUT","PROCESS","SIGNAL","OUTPUT"].map((label,i) => <div key={label} className={cn("absolute rounded-sm border border-border bg-card/90 px-3 py-2 font-mono text-[9px] tracking-[0.14em] text-muted-foreground", i===0&&"left-[8%] top-[22%]", i===1&&"right-[8%] top-[24%]", i===2&&"bottom-[18%] left-[12%]", i===3&&"bottom-[16%] right-[10%]")}><span className="mr-2 inline-block size-1.5 rounded-full bg-primary" />{label}</div>)}</div></div></section>;
}

function CTA() {
  return <section id="contact" className="section-wrap pb-20 sm:pb-28"><div className="cta-panel relative overflow-hidden px-6 py-20 text-center sm:px-12 sm:py-28"><div className="cta-bloom" /><div className="relative mx-auto max-w-3xl"><p className="eyebrow justify-center">The next move is yours</p><h2 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-6xl">Build what comes next.</h2><p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">Your product. Your vision. A foundation designed to make both move faster.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild size="lg" className="h-12 bg-foreground px-7 text-background hover:bg-foreground/90"><a href="mailto:hello@example.com">Start building <ArrowRight /></a></Button><Button asChild size="lg" variant="outline" className="h-12 border-border bg-secondary/40 px-7"><a href="#top"><Play className="fill-current" /> View overview</a></Button></div></div></div></section>;
}

function Index() {
  useEffect(() => { document.documentElement.classList.add("dark"); return () => document.documentElement.classList.remove("dark"); }, []);
  return <div id="top" className="site-shell min-h-screen overflow-hidden bg-background text-foreground"><Nav /><main><section className="relative flex min-h-[920px] flex-col justify-center overflow-hidden pb-24 pt-36 sm:min-h-[1000px] sm:pt-44"><div className="hero-grid" /><div className="hero-glow" /><div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6"><div className="hero-enter inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-[10px] font-medium tracking-[0.14em] text-muted-foreground backdrop-blur-xl"><Sparkles className="size-3 text-primary" /> THE NEXT CHAPTER IS HERE <ChevronRight className="size-3" /></div><h1 className="hero-enter mt-8 text-[clamp(3.25rem,8vw,7.6rem)] font-semibold leading-[.9] tracking-normal">Intelligence<br/><span className="gradient-text">in motion.</span></h1><p className="hero-enter mx-auto mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">A new kind of platform for teams building what’s next. Powerful enough for the impossible. Simple enough for today.</p><div className="hero-enter mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild size="lg" className="h-12 bg-foreground px-7 text-background hover:bg-foreground/90"><a href="#product">Explore the platform <ArrowRight /></a></Button><Button asChild size="lg" variant="outline" className="h-12 border-border bg-secondary/30 px-7 text-foreground hover:bg-secondary"><a href="#resources"><Play className="fill-current" /> See it in action</a></Button></div></div><DashboardPreview /></section><Features /><Metrics /><Showcase /><CTA /></main><footer id="company" className="border-t border-border/60"><div className="section-wrap flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between"><BrandMark /><p className="text-xs text-muted-foreground">© 2026 NOVA SYSTEMS. ALL SIGNALS RESERVED.</p><div className="flex gap-6 text-xs text-muted-foreground"><a href="#top" className="hover:text-foreground">Privacy</a><a href="#top" className="hover:text-foreground">Terms</a><a href="#top" className="hover:text-foreground">Status</a></div></div></footer></div>;
}