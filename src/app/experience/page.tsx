"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

// Deterministic fake commit hashes, newest first
const hashes = ["a3f9c2d", "7e1b04f", "c52d918"];

const branchOf = (company: string) =>
  company.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

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
        className="text-lg text-white/50 max-w-2xl mb-14"
      >
        Every role, committed. No force-pushes, no rewritten history.
      </motion.p>

      {/* Git log terminal */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="rounded-xl overflow-hidden bg-[#0d1117] border border-white/10 shadow-2xl shadow-emerald-500/[0.04]"
      >
        {/* Terminal header */}
        <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="ml-4 text-xs font-mono text-white/40">guest@rajvir-portfolio:~/career</div>
        </div>

        {/* Terminal body */}
        <div className="p-5 sm:p-7 font-mono text-sm leading-relaxed overflow-x-auto">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="text-blue-400 mb-6"
          >
            $ git log --career --graph --all
          </motion.div>

          <div className="relative">
            {/* Graph spine */}
            <div
              className="absolute left-[3px] top-3 bottom-3 w-px"
              style={{ background: "linear-gradient(180deg, rgba(52,211,153,0.5), rgba(96,165,250,0.25), rgba(255,255,255,0.06))" }}
              aria-hidden
            />

            <div className="space-y-9">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55 + i * 0.18, duration: 0.5 }}
                  className="group relative pl-7"
                  data-hover
                >
                  {/* Graph node */}
                  <span
                    className="absolute left-0 top-[7px] w-[7px] h-[7px] rounded-full transition-shadow duration-300 group-hover:shadow-[0_0_12px_rgba(52,211,153,0.7)]"
                    style={{ background: `rgb(${exp.accent})` }}
                    aria-hidden
                  />

                  {/* Commit line */}
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                    <span className="text-yellow-500/90">{hashes[i % hashes.length]}</span>
                    <span className="text-white/40">
                      (
                      {i === 0 && <span className="text-cyan-400">HEAD -&gt; </span>}
                      <span className="text-emerald-400">{branchOf(exp.company)}</span>
                      )
                    </span>
                    <span className="text-white/90 font-semibold group-hover:text-white transition-colors duration-200">
                      {exp.role}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="text-white/35 text-xs mb-3">
                    Author: Rajvir Singh · Date: {exp.period} · @ {exp.company}
                  </div>

                  {/* Body */}
                  <ul className="space-y-1.5 mb-3">
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="text-[13px] text-white/45 leading-relaxed pl-4 relative before:absolute before:left-0 before:content-['+'] before:text-emerald-500/60 group-hover:text-white/65 transition-colors duration-300"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-white/30 group-hover:text-white/50 transition-colors duration-300">
                        <span className="text-blue-400/60">tag:</span> {t.toLowerCase().replace(/\s+/g, "-")}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Trailing prompt */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 + experiences.length * 0.18 + 0.3 }}
            className="mt-8 flex items-center text-white/40"
          >
            <span className="text-emerald-400/80 mr-2">$</span>
            <span className="italic">next commit loading — your company here?</span>
            <span className="ml-2 inline-block w-[0.55em] h-[1.1em] bg-emerald-400/80 animate-caret" aria-hidden />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
