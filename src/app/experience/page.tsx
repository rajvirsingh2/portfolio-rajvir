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
        Shipping production code, leading teams, and occasionally winning
        staring contests with stack traces.
      </motion.p>

      <div className="relative">
        {/* Gradient timeline spine */}
        <div
          className="absolute left-0 top-1 bottom-0 w-px hidden sm:block"
          style={{ background: "linear-gradient(180deg, rgba(52,211,153,0.4), rgba(96,165,250,0.2), transparent)" }}
          aria-hidden
        />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="group relative sm:pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-8 w-[11px] h-[11px] rounded-full bg-[#09090b] border-2 border-emerald-400/40 group-hover:border-emerald-400 group-hover:shadow-[0_0_14px_rgba(52,211,153,0.5)] transition-all duration-300 hidden sm:block" />

              <div
                className="relative rounded-2xl card-surface p-7 overflow-hidden transition-all duration-300 group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
                data-hover
              >
                {/* Accent hairline */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-30 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, rgba(${exp.accent}, 0.8), transparent)` }}
                  aria-hidden
                />
                {/* Accent corner glow */}
                <div
                  className="absolute top-0 right-0 w-[220px] h-[220px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[100px] pointer-events-none"
                  style={{ background: `rgba(${exp.accent}, 0.09)` }}
                  aria-hidden
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <h3 className="font-display text-xl font-bold text-white/90 group-hover:text-white transition-colors duration-200">{exp.role}</h3>
                      <span className="text-white/30 hidden sm:inline" aria-hidden>·</span>
                      <span className="text-sm font-medium" style={{ color: `rgba(${exp.accent}, 0.9)` }}>{exp.company}</span>
                    </div>
                    <span className="font-mono text-xs font-bold tracking-widest text-white/20 flex-shrink-0">
                      {String(experiences.length - i).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 text-[11px] text-white/35 mb-5 font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border border-white/[0.07] bg-white/[0.02]">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-white/45 leading-[1.8] pl-5 relative before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-emerald-400/20 before:rounded-full group-hover:text-white/65 group-hover:before:bg-emerald-400/50 before:transition-colors before:duration-300 transition-colors duration-300">
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-[10px] uppercase tracking-widest font-semibold rounded-full bg-white/[0.04] border border-white/[0.07] text-white/55 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
