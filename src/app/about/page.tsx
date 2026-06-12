"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { GraduationCap } from "lucide-react";
import {
  SiKotlin, SiAndroid, SiGo, SiPostgresql, SiRedis, SiDocker,
  SiKubernetes, SiPython, SiPytorch,
  SiGit, SiFirebase, SiCplusplus
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const categoryLabels: Record<string, string> = {
  mobile: "Mobile",
  backend: "Backend",
  devops: "DevOps & Cloud",
  ml: "Machine Learning",
  tools: "Tools",
};

const categoryOrder = ["mobile", "backend", "devops", "ml", "tools"];

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
        className="text-lg text-white/55 leading-relaxed max-w-3xl mb-16"
      >
        Integrated B.Tech+M.Tech in Information Technology at IIIT Gwalior (May 2027).
        I build scalable distributed systems, lead mobile development teams, and research
        continual learning to combat evolving deepfake threats.
      </motion.p>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="relative rounded-2xl card-surface p-8 mb-16 overflow-hidden transition-colors duration-300"
      >
        <div
          className="absolute top-0 left-0 right-0 h-px hairline"
          aria-hidden
        />
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-blue-400" />
          </div>
          <h2 className="font-display text-xl font-semibold text-white">Education</h2>
        </div>
        <h3 className="text-lg text-white/85 font-medium">Indian Institute of Information Technology Gwalior</h3>
        <p className="text-white/45 mt-1">Integrated B.Tech + M.Tech in Information Technology</p>
        <p className="text-white/30 text-sm mt-2 font-mono tracking-wide">November 2022 — May 2027</p>
      </motion.div>

      {/* Skills grouped by category */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
      >
        <h2 className="font-display text-2xl font-bold text-white mb-8 tracking-tight">Tech Stack</h2>
        <div className="space-y-10">
          {categoryOrder.map((cat, ci) => {
            const items = skills.filter((s) => s.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/35">{categoryLabels[cat]}</span>
                  <div className="flex-1 h-px hairline opacity-50" aria-hidden />
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
