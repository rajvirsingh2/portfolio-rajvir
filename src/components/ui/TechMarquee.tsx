"use client";

import { motion } from "framer-motion";
import {
  SiKotlin, SiGo, SiPython, SiPytorch, SiPostgresql, SiRedis,
  SiDocker, SiKubernetes, SiFirebase, SiNextdotjs, SiAndroid, SiGit,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";

const items = [
  { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
  { name: "Go", icon: SiGo, color: "#00ADD8" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "Android", icon: SiAndroid, color: "#3DDC84" },
  { name: "Next.js", icon: SiNextdotjs, color: "var(--foreground)" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Java", icon: FaJava, color: "#5382A1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

/**
 * TechMarquee — infinite horizontal scroll of stack icons with edge
 * fade. CSS-driven, so the global reduced-motion rule freezes it.
 * Pauses on hover.
 */
export function TechMarquee() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.1 }}
      className="w-full max-w-3xl mx-auto mt-14 marquee-paused mask-fade-x overflow-hidden"
      aria-label="Technology stack"
    >
      <div className="flex w-max animate-marquee gap-10 py-2 pr-10">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center gap-10" aria-hidden={dup === 1}>
            {items.map(({ name, icon: Icon, color }) => (
              <span
                key={`${dup}-${name}`}
                className="group flex items-center gap-2.5 text-foreground/30 hover:text-foreground/70 transition-colors duration-200 cursor-default"
              >
                <Icon className="w-5 h-5 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" style={{ color }} />
                <span className="font-mono text-xs tracking-wider whitespace-nowrap">{name}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
