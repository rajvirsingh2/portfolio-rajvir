"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Calendar } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl font-black tracking-tighter text-gradient mb-6"
      >
        Experience
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-lg text-white/40 max-w-2xl mb-16"
      >
        Professional experience in Android development, ML research, and team leadership.
      </motion.p>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            className="group relative pl-8 pb-14 border-l border-white/[0.04] last:pb-0"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[5px] top-1.5 w-[10px] h-[10px] rounded-full bg-[#050505] border-2 border-white/20 group-hover:border-blue-400 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] transition-all duration-300" />

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3">
              <h3 className="text-xl font-bold text-white/90 group-hover:text-white transition-colors">{exp.role}</h3>
              <span className="text-white/30 hidden sm:inline">·</span>
              <span className="text-sm text-blue-400/80 font-medium">{exp.company}</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/25 mb-5 font-medium tracking-wide uppercase">
              <Calendar className="w-3.5 h-3.5" />
              {exp.period}
            </div>

            <ul className="space-y-3">
              {exp.bullets.map((b, j) => (
                <li key={j} className="text-sm text-white/40 leading-[1.8] pl-5 relative before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-white/10 before:rounded-full group-hover:text-white/60 transition-colors duration-300">
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
