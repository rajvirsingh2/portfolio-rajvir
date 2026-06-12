"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { TerminalSnippet } from "@/components/ui/TerminalSnippet";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const word = {
  hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } },
};

const roles = ["Backend", "Android", "Machine Learning"];

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center overflow-hidden pt-16 pb-32">
        {/* Depth layers */}
        <div className="absolute inset-0 bg-dots opacity-[0.18] pointer-events-none" aria-hidden />
        <div
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-25"
          style={{ background: "radial-gradient(closest-side, rgba(52,211,153,0.18), rgba(96,165,250,0.1), transparent)" }}
          aria-hidden
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-8 cursor-default shadow-[0_0_24px_rgba(16,185,129,0.07)]"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-mono font-medium text-emerald-400/80 tracking-widest uppercase">System Status: Online</span>
          </motion.div>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl sm:text-7xl md:text-[6rem] lg:text-[7.5rem] font-bold tracking-tighter leading-[0.9] mb-6"
          >
            {"Rajvir Singh".split(" ").map((w, i) => (
              <motion.span key={i} variants={word} className="inline-block mr-[0.25em] text-gradient">
                {w}
              </motion.span>
            ))}
          </motion.h1>

          {/* Role chips */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mb-8 font-mono text-[11px] sm:text-xs tracking-widest uppercase"
          >
            {roles.map((role, i) => (
              <span key={role} className="flex items-center gap-3 text-white/40">
                {i > 0 && <span className="text-emerald-400/50" aria-hidden>·</span>}
                <span className="hover:text-emerald-300/90 transition-colors duration-200 cursor-default">{role}</span>
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl font-light leading-relaxed mb-12"
          >
            Software Engineer & Freelancer crafting{" "}
            <span className="text-white font-medium font-mono text-sm tracking-tight bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">robust scalable backend systems</span>, polished mobile experiences, and <span className="text-gradient-accent font-medium font-mono text-sm">intelligent ML solutions</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-5"
          >
            {/* Primary: gradient-ring CTA */}
            <span className="relative inline-flex group">
              <span
                className="absolute -inset-px rounded-xl bg-gradient-to-r from-emerald-400 to-blue-500 opacity-80 group-hover:opacity-100 transition-opacity duration-200 group-hover:shadow-[0_0_28px_rgba(52,211,153,0.35)]"
                aria-hidden
              />
              <Link
                href="/projects"
                data-hover
                className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#09090b] text-white text-sm font-bold transition-colors duration-200"
              >
                View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </span>

            <Link
              href="/about"
              data-hover
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/70 text-sm font-medium hover:bg-white/[0.08] hover:border-white/[0.14] hover:text-white transition-all duration-200 font-mono"
            >
              About Me <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Terminal Snippet */}
          <TerminalSnippet />
        </div>
      </section>

    </div>
  );
}
