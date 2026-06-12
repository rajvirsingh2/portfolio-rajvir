"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { skills } from "@/lib/data";
import { 
  GraduationCap, 
  Terminal, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import {
  SiKotlin, SiAndroid, SiGo, SiPostgresql, SiRedis, SiDocker,
  SiKubernetes, SiPython, SiPytorch,
  SiGit, SiFirebase, SiCplusplus
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { Magnetic } from "@/components/ui/Magnetic";

const categoryLabels: Record<string, string> = {
  mobile: "Mobile",
  backend: "Backend",
  devops: "DevOps & Cloud",
  ml: "Machine Learning",
  tools: "Tools",
};

const categoryOrder = ["mobile", "backend", "devops", "ml", "tools"];

const stats = [
  { value: "3+", label: "Projects Shipped", color: "text-blue-400" },
  { value: "3", label: "Internships", color: "text-emerald-400" },
  { value: "98.9%", label: "ML Accuracy", color: "text-purple-400" },
  { value: "4-Member", label: "Team Led", color: "text-yellow-400" },
];

const philosophies = [
  {
    title: "Systems Thinker",
    icon: <Layers className="w-5 h-5 text-blue-400" />,
    description: "I build distributed systems that scale. Designing Go microservices, implementing Redis caching layers, and structuring PostgreSQL databases for optimal throughput.",
    color: "from-blue-500/10 to-transparent",
    borderColor: "group-hover:border-blue-500/30",
  },
  {
    title: "Mobile Craftsman",
    icon: <Cpu className="w-5 h-5 text-emerald-400" />,
    description: "Creating offline-first, pixel-perfect Android apps. Combining Jetpack Compose with clean architectures (MVI/MVVM) to ensure robust, fluid user experiences.",
    color: "from-emerald-500/10 to-transparent",
    borderColor: "group-hover:border-emerald-500/30",
  },
  {
    title: "Research-Driven",
    icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
    description: "Combating deepfake threats using Continual Learning. Developing tasks using unsupervised pipelines to mitigate catastrophic forgetting in neural networks.",
    color: "from-purple-500/10 to-transparent",
    borderColor: "group-hover:border-purple-500/30",
  },
];

export default function AboutPage() {
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 pb-32">
      {/* Decorative Blur Backgrounds */}
      <div
        className="absolute top-10 left-1/4 w-[500px] h-[300px] rounded-full blur-[130px] pointer-events-none opacity-10"
        style={{ background: "radial-gradient(closest-side, rgba(52,211,153,0.35), transparent)" }}
        aria-hidden
      />

      <motion.span
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        className="block font-mono text-xs tracking-[0.3em] uppercase text-emerald-400/70 mb-4"
      >
        ~/about
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-5xl md:text-6xl font-bold tracking-tighter text-gradient mb-12"
      >
        About Me
      </motion.h1>

      {/* Terminal-Style Bio Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-xl overflow-hidden bg-[#0d1117]/80 backdrop-blur-md border border-white/10 shadow-2xl shadow-emerald-500/[0.02] mb-16"
      >
        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="text-xs font-mono text-white/40">rajvir@portfolio:~/about</div>
          <div className="w-12" />
        </div>
        <div className="p-6 sm:p-8 font-mono text-sm leading-relaxed text-white/80">
          <div className="flex items-center text-blue-400 mb-4">
            <span className="mr-2">$</span>
            <span>cat ~/README.md</span>
          </div>
          <p className="text-white/95 mb-4 font-sans text-base">
            Hey, I'm <span className="text-emerald-400 font-semibold">Rajvir Singh</span>. I'm currently pursuing an Integrated B.Tech + M.Tech in Information Technology at the Indian Institute of Information Technology, Gwalior (graduating May 2027).
          </p>
          <p className="text-white/70 mb-4 font-sans text-base leading-relaxed">
            I specialize in engineering high-throughput backend services, designing modular offline-first mobile systems, and investigating machine learning architectures. I bridge the gap between rigorous systems design and cutting-edge research.
          </p>
          <p className="text-white/70 font-sans text-base leading-relaxed">
            Outside of IDEs, I enjoy leading collaborative teams, prototyping interfaces based on feedback loop systems, and pushing the boundaries of what is possible with software.
          </p>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.05 }}
            className="group relative rounded-xl card-surface p-6 overflow-hidden flex flex-col justify-center items-center text-center cursor-default hover:border-emerald-500/20 transition-all duration-300"
          >
            <div className={`text-3xl sm:text-4xl font-bold font-display tracking-tight mb-2 ${stat.color}`}>
              {stat.value}
            </div>
            <div className="text-xs font-mono tracking-wider text-white/45 uppercase">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Philosophy Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="font-display text-2xl font-bold text-white tracking-tight">Core Approach</h2>
          <div className="flex-1 h-px hairline opacity-50" aria-hidden />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {philosophies.map((phil, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className={`group relative rounded-xl card-surface p-6 flex flex-col gap-4 border border-white/5 bg-gradient-to-b ${phil.color} transition-all duration-300 ${phil.borderColor} hover:shadow-[0_0_24px_rgba(52,211,153,0.03)] cursor-default`}
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500/5 group-hover:border-emerald-500/25 transition-all duration-300">
                {phil.icon}
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-200">
                  {phil.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/60 transition-colors duration-200">
                  {phil.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.4 }}
        className="relative rounded-xl card-surface p-8 mb-16 overflow-hidden hover:border-blue-500/25 transition-all duration-300 group cursor-default"
      >
        <div className="absolute top-0 left-0 right-0 h-px hairline" aria-hidden />
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-400/40 transition-colors duration-300">
            <GraduationCap className="w-5 h-5 text-blue-400 animate-pulse" />
          </div>
          <h2 className="font-display text-xl font-semibold text-white">Education</h2>
        </div>
        <h3 className="text-lg text-white/90 font-medium group-hover:text-blue-400 transition-colors duration-300">
          Indian Institute of Information Technology Gwalior
        </h3>
        <p className="text-white/55 mt-1">Integrated B.Tech + M.Tech in Information Technology</p>
        <p className="text-white/30 text-sm mt-3 font-mono tracking-wide">November 2022 — May 2027</p>
      </motion.div>

      {/* Skills grouped by category */}
      <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.45 }}
        className="mb-20"
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
                      transition={{ delay: 0.5 + ci * 0.05 + i * 0.02 }}
                      className="group flex items-center gap-3 px-4 py-3.5 rounded-xl card-surface transition-all duration-300 cursor-default hover:border-emerald-500/20"
                    >
                      <motion.div
                        className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center transition-colors duration-300 group-hover:bg-emerald-500/5 group-hover:border-emerald-500/20"
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

      {/* CTA Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col items-center justify-center text-center py-10 border-t border-white/5"
      >
        <h3 className="font-display text-2xl font-bold text-white mb-4">Have an interesting project in mind?</h3>
        <p className="text-white/50 text-sm max-w-md mb-8">
          Let's discuss how we can build robust backend pipelines, feature-rich mobile applications, or custom machine learning tools together.
        </p>
        <Magnetic>
          <span className="relative inline-flex group">
            <span
              className="absolute -inset-px rounded-xl bg-gradient-to-r from-emerald-400 to-blue-500 opacity-80 group-hover:opacity-100 transition-opacity duration-200 group-hover:shadow-[0_0_32px_rgba(52,211,153,0.4)]"
              aria-hidden
            />
            <Link
              href="/contact"
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
