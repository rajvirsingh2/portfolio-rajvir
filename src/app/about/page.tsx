"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { GraduationCap, Smartphone, Server, Container, BrainCircuit, Wrench } from "lucide-react";
import { SpotlightCard, CountUp } from "@/components/ui/SpotlightCard";
import {
  SiKotlin, SiAndroid, SiGo, SiPostgresql, SiRedis, SiDocker,
  SiKubernetes, SiPython, SiPytorch,
  SiGit, SiFirebase, SiCplusplus
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

// Degree progress: Nov 2022 -> May 2027
const DEGREE_START = new Date(2022, 10);
const DEGREE_END = new Date(2027, 4);
const degreePct = Math.min(
  99,
  Math.round(((Date.now() - DEGREE_START.getTime()) / (DEGREE_END.getTime() - DEGREE_START.getTime())) * 100)
);

const stackGroups: { key: string; label: string; icon: React.ElementType; accent: string; span?: string }[] = [
  { key: "mobile", label: "Mobile", icon: Smartphone, accent: "61, 220, 132" },
  { key: "backend", label: "Backend", icon: Server, accent: "96, 165, 250", span: "md:col-span-2" },
  { key: "devops", label: "DevOps & Cloud", icon: Container, accent: "56, 189, 248" },
  { key: "ml", label: "Machine Learning", icon: BrainCircuit, accent: "244, 114, 182" },
  { key: "tools", label: "Tools", icon: Wrench, accent: "251, 191, 36" },
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
      <motion.h1
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="font-display text-5xl md:text-6xl font-bold tracking-tighter text-gradient mb-14"
      >
        About Me
      </motion.h1>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
        {/* Identity — wide */}
        <motion.div variants={card} initial="hidden" animate="visible" custom={0} className="md:col-span-2">
          <SpotlightCard accent="52, 211, 153" className="h-full" contentClassName="p-8">
            <div className="absolute top-0 right-0 w-[260px] h-[260px] rounded-full blur-[110px] bg-emerald-500/[0.07] pointer-events-none" aria-hidden />
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 leading-snug">
              Builds systems that scale,
              <br />
              <span className="text-gradient-accent">teams that ship.</span>
            </h2>
            <p className="text-white/55 leading-relaxed max-w-xl">
              Integrated B.Tech+M.Tech in Information Technology at IIIT Gwalior.
              I design distributed backends, lead mobile development teams, and research
              continual learning to combat evolving deepfake threats.
            </p>
          </SpotlightCard>
        </motion.div>

        {/* Accuracy stat — counts up */}
        <motion.div variants={card} initial="hidden" animate="visible" custom={1}>
          <SpotlightCard accent="52, 211, 153" className="h-full" contentClassName="p-8 flex flex-col justify-between h-full">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/35">Thesis result</span>
            <div>
              <div className="font-display text-5xl font-bold text-gradient-accent tracking-tight">
                <CountUp value={98.9} decimals={1} suffix="%" />
              </div>
              <p className="text-sm text-white/45 mt-2 leading-snug">deepfake detection accuracy with A-GEM continual learning</p>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Education + progress */}
        <motion.div variants={card} initial="hidden" animate="visible" custom={2}>
          <SpotlightCard accent="96, 165, 250" className="h-full" contentClassName="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/35">Education</span>
            </div>
            <h3 className="text-white/85 font-medium leading-snug mb-1">IIIT Gwalior</h3>
            <p className="text-sm text-white/45 mb-5">Integrated B.Tech + M.Tech, IT</p>
            <div className="flex items-center justify-between text-xs text-white/35 mb-2">
              <span>2022</span>
              <span className="text-emerald-300/90 font-semibold">{degreePct}% complete</span>
              <span>2027</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${degreePct}%` }}
                transition={{ delay: 0.6, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-blue-500"
              />
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Amazon MLSS — counts up */}
        <motion.div variants={card} initial="hidden" animate="visible" custom={3}>
          <SpotlightCard accent="255, 153, 0" className="h-full" contentClassName="p-8 flex flex-col justify-between h-full">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/35">Selection</span>
            <div>
              <div className="font-display text-5xl font-bold text-white tracking-tight">
                Top <CountUp value={3.7} decimals={1} /><span className="text-2xl align-top">%</span>
              </div>
              <p className="text-sm text-white/45 mt-2 leading-snug">Amazon ML Summer School &apos;25 — 3,000 picked from 80,000+ applicants</p>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* By the numbers — counts up */}
        <motion.div variants={card} initial="hidden" animate="visible" custom={4}>
          <SpotlightCard accent="167, 139, 250" className="h-full" contentClassName="p-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/35 block mb-5">By the numbers</span>
            <dl className="space-y-4">
              {([
                [26, "public repos on GitHub"],
                [4, "engineers led to a shipped app"],
                [6, "CL strategies benchmarked"],
              ] as [number, string][]).map(([n, label]) => (
                <div key={label} className="flex items-baseline gap-3">
                  <dt className="font-display text-2xl font-bold text-white w-10 flex-shrink-0">
                    <CountUp value={n} />
                  </dt>
                  <dd className="text-sm text-white/45">{label}</dd>
                </div>
              ))}
            </dl>
          </SpotlightCard>
        </motion.div>
      </div>

      {/* Tech stack — spotlight category cards */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        className="font-display text-2xl font-bold text-white mb-8 tracking-tight"
      >
        Tech Stack
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stackGroups.map((group, gi) => {
          const items = skills.filter((s) => s.category === group.key);
          if (items.length === 0) return null;
          const GroupIcon = group.icon;
          return (
            <motion.div
              key={group.key}
              variants={card} initial="hidden" animate="visible" custom={5 + gi}
              className={group.span ?? ""}
            >
              <SpotlightCard accent={group.accent} className="h-full" contentClassName="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center border"
                    style={{
                      background: `rgba(${group.accent}, 0.08)`,
                      borderColor: `rgba(${group.accent}, 0.25)`,
                      color: `rgb(${group.accent})`,
                    }}
                  >
                    <GroupIcon className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-semibold text-white/85">{group.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <motion.span
                      key={skill.name}
                      whileHover={{ y: -3, scale: 1.04 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="inline-flex items-center gap-2 pl-2.5 pr-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-white/60 hover:text-white transition-colors duration-200 cursor-default"
                      style={{ "--chip-accent": `rgba(${group.accent}, 0.45)` } as React.CSSProperties}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = `rgba(${group.accent}, 0.45)`; e.currentTarget.style.boxShadow = `0 4px 16px rgba(${group.accent}, 0.15)`; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = ""; e.currentTarget.style.boxShadow = ""; }}
                      data-hover
                    >
                      <SkillIcon name={skill.name} />
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
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
