"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/ui/SpotlightCard";
import {
  SiKotlin, SiAndroid, SiGo, SiPostgresql, SiRedis, SiDocker,
  SiKubernetes, SiPython, SiPytorch,
  SiGit, SiFirebase, SiCplusplus
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

// Degree progress: Nov 2022 -> May 2027
const DEGREE_START = new Date(2022, 10);
const DEGREE_END = new Date(2027, 4);
const degreePct = Math.min(
  99,
  Math.round(((Date.now() - DEGREE_START.getTime()) / (DEGREE_END.getTime() - DEGREE_START.getTime())) * 100)
);

// Orbit rings: radius, duration, direction, members
const rings: { radius: number; duration: number; reverse?: boolean; items: string[] }[] = [
  { radius: 80, duration: 24, items: ["Kotlin", "Jetpack Compose", "Android SDK", "Firebase"] },
  { radius: 140, duration: 36, reverse: true, items: ["Go", "PostgreSQL", "Redis", "Java", "C++", "REST APIs"] },
  { radius: 200, duration: 48, items: ["Python", "PyTorch", "Docker", "Kubernetes", "AWS", "Git"] },
];

const stats: { value: number; decimals?: number; prefix?: string; suffix?: string; label: string }[] = [
  { value: 98.9, decimals: 1, suffix: "%", label: "deepfake detection accuracy — A-GEM continual learning thesis" },
  { value: 3.7, decimals: 1, prefix: "top ", suffix: "%", label: "Amazon ML Summer School '25 — 3,000 of 80,000+ applicants" },
  { value: 26, label: "public repos — Kotlin-heavy, OSS contributions to Wikipedia Android & Mifos" },
  { value: 4, label: "engineers led from wireframes to a shipped fest app" },
];

export default function AboutPage() {
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 pb-32">
      <motion.span
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="block font-mono text-xs tracking-[0.3em] uppercase text-emerald-400/70 mb-4"
      >
        ~/about
      </motion.span>

      {/* Editorial statement */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[1.08] mb-10 max-w-4xl"
      >
        <span className="text-white">I build </span>
        <span className="text-gradient-accent">distributed backends</span>
        <span className="text-white/40">, lead </span>
        <span className="text-white">mobile teams</span>
        <span className="text-white/40">, and teach models </span>
        <span className="text-gradient-accent">not to forget</span>
        <span className="text-white">.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
        className="text-lg text-white/50 leading-relaxed max-w-2xl mb-6"
      >
        Integrated B.Tech+M.Tech in Information Technology at IIIT Gwalior — researching
        continual learning against evolving deepfakes when not shipping Go services or Android apps.
      </motion.p>

      {/* Education progress — borderless strip */}
      <motion.div
        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
        className="flex items-center gap-4 max-w-2xl mb-20"
      >
        <span className="text-sm text-white/40 whitespace-nowrap">IIIT Gwalior</span>
        <div className="flex-1 h-1 rounded-full bg-white/[0.06] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${degreePct}%` }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-blue-500"
          />
        </div>
        <span className="text-sm font-semibold text-emerald-300/90 whitespace-nowrap">{degreePct}% of degree compiled</span>
      </motion.div>

      {/* Stats — oversized editorial numbers, staggered baselines, no boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-14 mb-24">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className={`group ${i % 2 === 1 ? "sm:translate-y-8" : ""}`}
          >
            <div className="font-display text-6xl sm:text-7xl font-bold tracking-tighter text-gradient group-hover:text-glow-accent transition-all duration-300 mb-3">
              {s.prefix}
              <CountUp value={s.value} decimals={s.decimals ?? 0} suffix={s.suffix ?? ""} />
            </div>
            <div className="h-px w-16 bg-gradient-to-r from-emerald-400/60 to-transparent mb-3 group-hover:w-28 transition-all duration-500" aria-hidden />
            <p className="text-sm text-white/45 leading-relaxed max-w-xs">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Tech stack — orbital system */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="font-display text-2xl font-bold text-white mb-2 tracking-tight"
      >
        Tech Stack
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        className="text-sm text-white/40 mb-10"
      >
        Everything in orbit around the work. Hover a moon.
      </motion.p>

      {/* Orbit (md+) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative hidden md:flex items-center justify-center h-[460px] select-none"
        aria-label="Tech stack orbit"
      >
        {/* Center core */}
        <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400/20 to-blue-500/20 border border-emerald-400/30 flex items-center justify-center shadow-[0_0_60px_rgba(52,211,153,0.25)]">
          <span className="font-display font-bold text-xl text-white">RS<span className="text-emerald-400">.</span></span>
        </div>

        {rings.map((ring, ri) => (
          <div key={ri}>
            {/* Ring line */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
              style={{ width: ring.radius * 2, height: ring.radius * 2 }}
              aria-hidden
            />
            {/* Moons */}
            {ring.items.map((name, ii) => {
              const angle = (360 / ring.items.length) * ii;
              return (
                <div
                  key={name}
                  className="absolute top-1/2 left-1/2 w-0 h-0"
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  <div
                    className="animate-orbit"
                    style={{ animationDuration: `${ring.duration}s`, animationDirection: ring.reverse ? "reverse" : "normal" }}
                  >
                    <div style={{ transform: `translateY(-${ring.radius}px)` }}>
                      <div
                        className="animate-orbit"
                        style={{ animationDuration: `${ring.duration}s`, animationDirection: ring.reverse ? "normal" : "reverse" }}
                      >
                        <div style={{ transform: `rotate(${-angle}deg)` }} className="-translate-x-1/2 -translate-y-1/2">
                          <div
                            className="group w-11 h-11 rounded-full bg-[#101013] border border-white/10 flex items-center justify-center hover:border-emerald-400/50 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:scale-125 transition-all duration-200 cursor-default"
                            data-hover
                            data-cursor={name.toLowerCase()}
                            title={name}
                          >
                            <SkillIcon name={name} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </motion.div>

      {/* Mobile fallback — borderless chip flow */}
      <div className="md:hidden space-y-6">
        {rings.map((ring, ri) => (
          <div key={ri} className="flex flex-wrap gap-2">
            {ring.items.map((name) => (
              <span
                key={name}
                className="inline-flex items-center gap-2 pl-2.5 pr-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-white/60"
              >
                <SkillIcon name={name} />
                {name}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillIcon({ name }: { name: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    "Kotlin": <SiKotlin className="w-4 h-4 text-[#7F52FF]" />,
    "Jetpack Compose": <SiAndroid className="w-4 h-4 text-[#3DDC84]" />,
    "Android SDK": <SiAndroid className="w-4 h-4 text-[#3DDC84]" />,
    "Go": <SiGo className="w-4 h-4 text-[#00ADD8]" />,
    "PostgreSQL": <SiPostgresql className="w-4 h-4 text-[#4169E1]" />,
    "Redis": <SiRedis className="w-4 h-4 text-[#DC382D]" />,
    "Docker": <SiDocker className="w-4 h-4 text-[#2496ED]" />,
    "Kubernetes": <SiKubernetes className="w-4 h-4 text-[#326CE5]" />,
    "AWS": <FaAws className="w-4 h-4 text-[#FF9900]" />,
    "Python": <SiPython className="w-4 h-4 text-[#3776AB]" />,
    "PyTorch": <SiPytorch className="w-4 h-4 text-[#EE4C2C]" />,
    "Git": <SiGit className="w-4 h-4 text-[#F05032]" />,
    "Firebase": <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
    "Java": <FaJava className="w-4 h-4 text-[#5382A1]" />,
    "C++": <SiCplusplus className="w-4 h-4 text-[#00599C]" />,
    "REST APIs": <TbApi className="w-4 h-4 text-white/60" />,
  };
  return <>{iconMap[name] || <TbApi className="w-4 h-4" />}</>;
}
