"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { skills } from "@/lib/data";
import {
  ArrowRight,
  Server,
  Smartphone,
  Brain,
} from "lucide-react";
import {
  SiKotlin, SiAndroid, SiGo, SiPostgresql, SiRedis, SiDocker,
  SiKubernetes, SiPython, SiPytorch,
  SiGit, SiFirebase, SiCplusplus
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { Magnetic } from "@/components/ui/Magnetic";

/* ── helpers ─────────────────────────────────────────────── */

const categoryLabels: Record<string, string> = {
  mobile: "Mobile",
  backend: "Backend",
  devops: "DevOps & Cloud",
  ml: "Machine Learning",
  tools: "Tools",
};
const categoryOrder = ["mobile", "backend", "devops", "ml", "tools"];



/* ── animated counter — self-contained, zero deps ────────── */

function AnimatedNumber({ value, suffix = "", prefix = "", decimals = 0 }: {
  value: number; suffix?: string; prefix?: string; decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setDisplay((value * eased).toFixed(decimals));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value, decimals]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

/* ── data ────────────────────────────────────────────────── */

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sub: string;
  decimals?: number;
}

const stats: StatItem[] = [
  { value: 4, suffix: "+", label: "Projects Shipped", sub: "Android apps, Go services, ML pipelines" },
  { value: 3, suffix: "", label: "Internships", sub: "SDE, Research, Team Lead" },
];

const pillars = [
  {
    icon: <Server className="w-5 h-5" />,
    title: "Backend Systems",
    body: "Go microservices, PostgreSQL, Redis. Designed for throughput, built for resilience.",
    accent: "emerald",
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Mobile Engineering",
    body: "Offline-first Kotlin + Jetpack Compose apps. MVI architecture, zero-compromise UX.",
    accent: "blue",
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "ML Research",
    body: "Continual Learning for evolving deepfakes. Unsupervised pipelines, catastrophic forgetting mitigation.",
    accent: "purple",
  },
];

const accentMap: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-400/20 group-hover:border-emerald-400/40", text: "text-emerald-400", glow: "group-hover:shadow-[0_0_24px_rgba(52,211,153,0.08)]" },
  blue:    { bg: "bg-blue-500/10",    border: "border-blue-400/20 group-hover:border-blue-400/40",    text: "text-blue-400",    glow: "group-hover:shadow-[0_0_24px_rgba(96,165,250,0.08)]" },
  purple:  { bg: "bg-purple-500/10",  border: "border-purple-400/20 group-hover:border-purple-400/40",  text: "text-purple-400",  glow: "group-hover:shadow-[0_0_24px_rgba(167,139,250,0.08)]" },
};

/* ── page ────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 pb-32">

      {/* ── breadcrumb ── */}
      <motion.span
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="block font-mono text-xs tracking-[0.3em] uppercase text-emerald-400/70 mb-4"
      >
        ~/about
      </motion.span>

      {/* ── editorial headline ── */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[1.08] mb-6 max-w-4xl"
      >
        <span className="text-white">I build </span>
        <span className="text-gradient-accent">distributed backends</span>
        <span className="text-white/40">, lead </span>
        <span className="text-white">mobile teams</span>
        <span className="text-white/40">, and teach models{" "}</span>
        <span className="text-gradient-accent">not to forget</span>
        <span className="text-white">.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-lg text-white/50 leading-relaxed max-w-2xl mb-6"
      >
        Integrated B.Tech+M.Tech in Information Technology at IIIT Gwalior — researching
        continual learning against evolving deepfakes when not shipping Go services or Android apps.
      </motion.p>

      {/* ── stats — animated count-up numbers ── */}
      <div className="grid grid-cols-2 gap-8 max-w-lg mb-24">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="group cursor-default"
          >
            <div className="font-display text-5xl sm:text-6xl font-bold tracking-tighter text-gradient mb-3 group-hover:text-glow-accent transition-all duration-300">
              <AnimatedNumber value={s.value} decimals={s.decimals ?? 0} suffix={s.suffix ?? ""} />
            </div>
            <div className="h-px w-12 bg-gradient-to-r from-emerald-400/50 to-transparent mb-2 group-hover:w-20 transition-all duration-500" aria-hidden />
            <p className="text-sm font-medium text-white/70 mb-0.5">{s.label}</p>
            <p className="text-xs text-white/35">{s.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* ── what I do — pillar cards ── */}
      <div className="mb-24">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="font-display text-2xl font-bold text-white tracking-tight">What I Do</h2>
          <div className="flex-1 h-px hairline opacity-50" aria-hidden />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((p, i) => {
            const a = accentMap[p.accent];
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className={`group relative rounded-xl card-surface p-6 flex flex-col gap-4 transition-all duration-300 cursor-default ${a.glow}`}
              >
                <div className={`w-10 h-10 rounded-xl ${a.bg} border ${a.border} flex items-center justify-center transition-all duration-300`}>
                  <span className={a.text}>{p.icon}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white mb-1.5 group-hover:text-emerald-400 transition-colors duration-200">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/45 leading-relaxed group-hover:text-white/55 transition-colors duration-200">
                    {p.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── tech stack — brand-color glow grid ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <div className="flex items-center gap-3 mb-10">
          <h2 className="font-display text-2xl font-bold text-white tracking-tight">Tech Stack</h2>
          <div className="flex-1 h-px hairline opacity-50" aria-hidden />
        </div>
        <div className="space-y-12">
          {categoryOrder.map((cat, ci) => {
            const items = skills.filter((s) => s.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/35">{categoryLabels[cat]}</span>
                  <div className="flex-1 h-px hairline opacity-40" aria-hidden />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {items.map((skill, i) => {
                    const brand = skillBrands[skill.name] ?? { color: "#888", rgb: "136,136,136" };
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: ci * 0.05 + i * 0.03 }}
                        className="group relative flex flex-col items-center gap-3 p-5 rounded-xl card-surface transition-all duration-300 cursor-default"
                        style={{ "--brand-rgb": brand.rgb } as React.CSSProperties}
                        data-hover
                        data-cursor={skill.name.toLowerCase().replace(/\s+/g, "-")}
                      >
                        {/* Brand glow on hover */}
                        <div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          style={{ boxShadow: `0 0 28px rgba(${brand.rgb}, 0.12), inset 0 0 20px rgba(${brand.rgb}, 0.04)` }}
                          aria-hidden
                        />
                        <div
                          className="absolute inset-0 rounded-xl border border-transparent group-hover:border-current transition-colors duration-300 pointer-events-none"
                          style={{ color: `rgba(${brand.rgb}, 0.25)` }}
                          aria-hidden
                        />
                        <motion.div
                          className="relative w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center transition-all duration-300"
                          style={{ borderColor: undefined }}
                          whileHover={{ scale: 1.15, rotate: 6 }}
                        >
                          <SkillIcon name={skill.name} size="w-5 h-5" />
                        </motion.div>
                        <span className="relative text-sm font-medium text-white/55 group-hover:text-white/90 transition-colors duration-200 text-center leading-tight">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        ))}
      </motion.div>

      {/* ── CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center text-center py-12 border-t border-white/5"
      >
        <h3 className="font-display text-2xl font-bold text-white mb-3">Let&apos;s build something together.</h3>
        <p className="text-sm text-white/45 max-w-md mb-8">
          Open to internships, collaborations, and interesting conversations about systems, mobile, or ML.
        </p>
        <Magnetic>
          <span className="relative inline-flex group">
            <span
              className="absolute -inset-px rounded-xl bg-gradient-to-r from-emerald-400 to-blue-500 opacity-80 group-hover:opacity-100 transition-opacity duration-200 group-hover:shadow-[0_0_32px_rgba(52,211,153,0.4)]"
              aria-hidden
            />
            <Link
              href="/contact"
              data-hover
              data-cursor="ping rajvir"
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#09090b] text-white text-sm font-bold transition-colors duration-200"
            >
              Get In Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </span>
        </Magnetic>
      </motion.div>
    </div>
  );
}

/* ── brand colors per skill ──────────────────────────────── */

const skillBrands: Record<string, { color: string; rgb: string }> = {
  "Kotlin":          { color: "#7F52FF", rgb: "127,82,255" },
  "Jetpack Compose": { color: "#3DDC84", rgb: "61,220,132" },
  "Android SDK":     { color: "#3DDC84", rgb: "61,220,132" },
  "Go":              { color: "#00ADD8", rgb: "0,173,216" },
  "PostgreSQL":      { color: "#4169E1", rgb: "65,105,225" },
  "Redis":           { color: "#DC382D", rgb: "220,56,45" },
  "Docker":          { color: "#2496ED", rgb: "36,150,237" },
  "Kubernetes":      { color: "#326CE5", rgb: "50,108,229" },
  "AWS":             { color: "#FF9900", rgb: "255,153,0" },
  "Python":          { color: "#3776AB", rgb: "55,118,171" },
  "PyTorch":         { color: "#EE4C2C", rgb: "238,76,44" },
  "Git":             { color: "#F05032", rgb: "240,80,50" },
  "Firebase":        { color: "#FFCA28", rgb: "255,202,40" },
  "Java":            { color: "#5382A1", rgb: "83,130,161" },
  "C++":             { color: "#00599C", rgb: "0,89,156" },
  "REST APIs":       { color: "#34d399", rgb: "52,211,153" },
};

/* ── skill icon — accepts size prop ──────────────────────── */

function SkillIcon({ name, size = "w-4 h-4" }: { name: string; size?: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    "Kotlin": <SiKotlin className={`${size} text-[#7F52FF]`} />,
    "Jetpack Compose": <SiAndroid className={`${size} text-[#3DDC84]`} />,
    "Android SDK": <SiAndroid className={`${size} text-[#3DDC84]`} />,
    "Go": <SiGo className={`${size} text-[#00ADD8]`} />,
    "PostgreSQL": <SiPostgresql className={`${size} text-[#4169E1]`} />,
    "Redis": <SiRedis className={`${size} text-[#DC382D]`} />,
    "Docker": <SiDocker className={`${size} text-[#2496ED]`} />,
    "Kubernetes": <SiKubernetes className={`${size} text-[#326CE5]`} />,
    "AWS": <FaAws className={`${size} text-[#FF9900]`} />,
    "Python": <SiPython className={`${size} text-[#3776AB]`} />,
    "PyTorch": <SiPytorch className={`${size} text-[#EE4C2C]`} />,
    "Git": <SiGit className={`${size} text-[#F05032]`} />,
    "Firebase": <SiFirebase className={`${size} text-[#FFCA28]`} />,
    "Java": <FaJava className={`${size} text-[#5382A1]`} />,
    "C++": <SiCplusplus className={`${size} text-[#00599C]`} />,
    "REST APIs": <TbApi className={`${size} text-white/60`} />,
  };
  return <>{iconMap[name] || <TbApi className={size} />}</>;
}
