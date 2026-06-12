"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import {
  SiKotlin, SiAndroid, SiGo, SiPostgresql, SiRedis, SiDocker,
  SiKubernetes, SiPython, SiPytorch,
  SiGit, SiFirebase, SiCplusplus
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const categoryLabels: Record<string, string> = {
  mobile: "mobile",
  backend: "backend",
  devops: "devops & cloud",
  ml: "machine learning",
  tools: "tools",
};

const categoryOrder = ["mobile", "backend", "devops", "ml", "tools"];

const asciiLogo = `██████╗ ███████╗
██╔══██╗██╔════╝
██████╔╝███████╗
██╔══██╗╚════██║
██║  ██║███████║
╚═╝  ╚═╝╚══════╝`;

const fetchRows: [string, string][] = [
  ["OS", "RajvirOS 21 LTS (Human Edition)"],
  ["Host", "IIIT Gwalior — Integrated B.Tech+M.Tech IT"],
  ["Kernel", "6.2.0-backend-android-ml"],
  ["Uptime", "since Nov 2022 — zero reboots, some crashes"],
  ["Shell", "kotlin 2.x · go 1.22 · python 3.12"],
  ["Packages", "16 core skills · 26 public repos (apt: github)"],
  ["DE", "Jetpack Compose (dark, always)"],
  ["Theme", "OLED black + emerald accent"],
  ["CPU", "Caffeine-OC @ 5.0 GHz (thermal limit: exams)"],
  ["GPU", "PyTorch/CUDA — deepfakes fear it (98.9% acc)"],
  ["Memory", "leaks only into side projects"],
];

const palette = ["#ef4444", "#f59e0b", "#22c55e", "#34d399", "#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899"];

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
        className="font-display text-5xl md:text-6xl font-bold tracking-tighter text-gradient mb-6"
      >
        About Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-lg text-white/55 leading-relaxed max-w-3xl mb-14"
      >
        Integrated B.Tech+M.Tech in Information Technology at IIIT Gwalior (May 2027).
        I build scalable distributed systems, lead mobile development teams, and research
        continual learning to combat evolving deepfake threats.
      </motion.p>

      {/* Neofetch card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
        className="rounded-xl overflow-hidden bg-[#0d1117] border border-white/10 shadow-2xl shadow-emerald-500/[0.04] mb-16"
      >
        <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="ml-4 text-xs font-mono text-white/40">guest@rajvir-portfolio:~/about</div>
        </div>

        <div className="p-5 sm:p-7 font-mono text-[13px] leading-relaxed overflow-x-auto">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="text-blue-400 mb-5"
          >
            $ neofetch rajvir
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* ASCII logo */}
            <motion.pre
              initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
              className="text-emerald-400/90 text-[11px] sm:text-xs leading-tight select-none flex-shrink-0"
              aria-hidden
            >
              {asciiLogo}
            </motion.pre>

            {/* Info rows */}
            <div className="flex-1 min-w-0">
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
                className="mb-2"
              >
                <span className="text-emerald-400 font-bold">rajvir</span>
                <span className="text-white/40">@</span>
                <span className="text-blue-400 font-bold">portfolio</span>
                <div className="text-white/20">{"─".repeat(18)}</div>
              </motion.div>

              <div className="space-y-1">
                {fetchRows.map(([k, v], i) => (
                  <motion.div
                    key={k}
                    initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.06 }}
                    className="flex gap-2 group cursor-default"
                    data-hover
                  >
                    <span className="text-emerald-400/90 font-bold w-[4.5rem] sm:w-20 flex-shrink-0">{k}</span>
                    <span className="text-white/55 group-hover:text-white/85 transition-colors duration-200">{v}</span>
                  </motion.div>
                ))}
              </div>

              {/* Palette swatches */}
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.35 }}
                className="flex gap-1.5 mt-5"
                aria-hidden
              >
                {palette.map((c) => (
                  <span key={c} className="w-5 h-3 rounded-[2px]" style={{ background: c }} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Skills grouped by category */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
      >
        <h2 className="font-display text-2xl font-bold text-white mb-2 tracking-tight">Tech Stack</h2>
        <p className="font-mono text-xs text-white/30 mb-8">$ pkg list --installed --by-category</p>
        <div className="space-y-10">
          {categoryOrder.map((cat, ci) => {
            const items = skills.filter((s) => s.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/35">{categoryLabels[cat]}</span>
                  <div className="flex-1 h-px hairline opacity-50" aria-hidden />
                  <span className="font-mono text-[10px] text-white/20">{items.length} pkg{items.length > 1 ? "s" : ""}</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {items.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 + ci * 0.08 + i * 0.03 }}
                      className="group flex items-center gap-3 px-4 py-3.5 rounded-xl card-surface transition-all duration-300 cursor-default"
                      data-hover
                    >
                      <motion.div
                        className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center transition-colors duration-300"
                        whileHover={{ scale: 1.12, rotate: 4 }}
                      >
                        <SkillIcon name={skill.name} />
                      </motion.div>
                      <span className="text-sm font-medium text-white/60 group-hover:text-white/90 transition-colors duration-200">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
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
