"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Calendar } from "lucide-react";
import { 
  SiKotlin, SiAndroid, SiGo, SiPostgresql, SiRedis, SiDocker, 
  SiKubernetes, SiPython, SiPytorch, 
  SiGit, SiFirebase, SiCplusplus 
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

export default function AboutPage() {
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 pb-32">
      <motion.h1
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl font-black tracking-tighter text-gradient mb-6"
      >
        About Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-lg text-white/50 leading-relaxed max-w-3xl mb-16"
      >
        Integrated B.Tech+M.Tech in Information Technology at IIIT Gwalior (May 2027).
        I build scalable distributed systems, lead mobile development teams, and research
        continual learning to combat evolving deepfake threats.
      </motion.p>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="rounded-2xl bg-transparent border border-white/[0.03] p-8 mb-16"
      >
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="w-5 h-5 text-blue-400" />
          <h2 className="text-xl font-semibold text-white">Education</h2>
        </div>
        <h3 className="text-lg text-white/80 font-medium">Indian Institute of Information Technology Gwalior</h3>
        <p className="text-white/40 mt-1">Integrated B.Tech + M.Tech in Information Technology</p>
        <p className="text-white/30 text-sm mt-1">November 2022 — May 2027</p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.03 }}
              className="group flex items-center gap-3 px-4 py-3.5 rounded-xl bg-transparent border border-white/[0.03] hover:border-white/[0.08] hover:bg-white/[0.02] transition-all duration-300 cursor-default"
              data-hover
            >
              <motion.div 
                className="w-8 h-8 rounded-lg bg-white/[0.02] flex items-center justify-center text-white/40 group-hover:text-white transition-all duration-300"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2.5 + Math.random(), repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
                whileHover={{ scale: 1.15, rotate: 5 }}
              >
                <SkillIcon name={skill.name} />
              </motion.div>
              <span className="text-sm font-medium text-white/60 group-hover:text-white/90 transition-colors">{skill.name}</span>
            </motion.div>
          ))}
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
    "AWS": <FaAws className="w-4 h-4 text-[#232F3E]" />,
    "Python": <SiPython className="w-4 h-4 text-[#3776AB]" />,
    "PyTorch": <SiPytorch className="w-4 h-4 text-[#EE4C2C]" />,
    "Git": <SiGit className="w-4 h-4 text-[#F05032]" />,
    "Firebase": <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
    "Java": <FaJava className="w-4 h-4 text-[#007396]" />,
    "C++": <SiCplusplus className="w-4 h-4 text-[#00599C]" />,
    "REST APIs": <TbApi className="w-4 h-4 text-white/60" />,
  };
  return <>{iconMap[name] || <TbApi className="w-4 h-4" />}</>;
}
