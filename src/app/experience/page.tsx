"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Calendar } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 pb-32">
      <motion.span
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="block font-mono text-xs tracking-[0.3em] uppercase text-emerald-400/70 mb-4"
      >
        ~/experience
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="font-display text-5xl md:text-6xl font-bold tracking-tighter text-gradient mb-6"
      >
        Experience
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-lg text-white/50 max-w-2xl mb-16"
      >
        Professional experience in Android development, ML research, and team leadership.
      </motion.p>

      <div className="relative">
        {/* Gradient timeline spine */}
        <div
          className="absolute left-0 top-1 bottom-0 w-px"
          style={{ background: "linear-gradient(180deg, rgba(52,211,153,0.4), rgba(96,165,250,0.2), transparent)" }}
          aria-hidden
        />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            className="group relative pl-10 pb-14 last:pb-0"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[5px] top-1.5 w-[11px] h-[11px] rounded-full bg-[#09090b] border-2 border-emerald-400/40 group-hover:border-emerald-400 group-hover:shadow-[0_0_14px_rgba(52,211,153,0.5)] transition-all duration-300" />

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3">
              <h3 className="font-display text-xl font-bold text-white/90 group-hover:text-white transition-colors duration-200">{exp.role}</h3>
              <span className="text-white/30 hidden sm:inline" aria-hidden>·</span>
              <span className="text-sm text-emerald-300/80 font-medium">{exp.company}</span>
            </div>

            <div className="inline-flex items-center gap-2 text-[11px] text-white/35 mb-5 font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border border-white/[0.07] bg-white/[0.02]">
              <Calendar className="w-3.5 h-3.5" />
              {exp.period}
            </div>

            <ul className="space-y-3">
              {exp.bullets.map((b, j) => (
                <li key={j} className="text-sm text-white/45 leading-[1.8] pl-5 relative before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-emerald-400/20 before:rounded-full group-hover:text-white/65 group-hover:before:bg-emerald-400/50 before:transition-colors before:duration-300 transition-colors duration-300">
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
