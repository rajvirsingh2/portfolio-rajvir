"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { TerminalSnippet } from "@/components/ui/TerminalSnippet";
import { Typewriter } from "@/components/ui/Typewriter";
import { Magnetic } from "@/components/ui/Magnetic";
import { TechMarquee } from "@/components/ui/TechMarquee";

const nameContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.045, delayChildren: 0.15 } },
};
const letter = {
  hidden: { opacity: 0, y: "0.4em", rotateZ: 3, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    rotateZ: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 120, damping: 16 },
  },
};

const roles = [
  "Backend Engineer",
  "Android Developer",
  "ML Researcher",
  "Freelancer",
];

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center overflow-hidden pt-16 pb-32">
        {/* Depth layers */}
        <div className="absolute inset-0 bg-dots opacity-[0.18] pointer-events-none" aria-hidden />
        <div
          className="absolute top-[-22%] left-1/2 w-[850px] h-[480px] rounded-full blur-[150px] pointer-events-none opacity-30 animate-aurora-a"
          style={{ background: "radial-gradient(closest-side, rgba(52,211,153,0.2), rgba(96,165,250,0.08), transparent)" }}
          aria-hidden
        />
        <div
          className="absolute bottom-[-30%] right-[-10%] w-[600px] h-[420px] rounded-full blur-[140px] pointer-events-none opacity-20 animate-aurora-b"
          style={{ background: "radial-gradient(closest-side, rgba(96,165,250,0.18), rgba(167,139,250,0.07), transparent)" }}
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
            variants={nameContainer}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl sm:text-7xl md:text-[6rem] lg:text-[7.5rem] font-bold tracking-tighter leading-[0.95] mb-7"
            aria-label="Rajvir Singh"
          >
            {"Rajvir Singh".split("").map((ch, i) => (
              <motion.span
                key={i}
                variants={letter}
                className="inline-block text-shine"
                style={{
                  whiteSpace: ch === " " ? "pre" : undefined,
                  animationDelay: `${-i * 0.18}s`,
                }}
                aria-hidden
              >
                {ch}
              </motion.span>
            ))}
          </motion.h1>

          {/* Typewriter role line */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-8 text-sm sm:text-base tracking-wide h-6"
          >
            <Typewriter phrases={roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl font-light leading-relaxed mb-12"
          >
            Software Engineer & Freelancer crafting{" "}
            <span className="text-white font-medium font-mono text-sm tracking-tight bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">robust scalable backend systems</span>, polished mobile experiences, and <span className="text-gradient-accent font-medium font-mono text-sm">intelligent ML solutions</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-5"
          >
            {/* Primary: magnetic gradient-ring CTA */}
            <Magnetic>
              <span className="relative inline-flex group">
                <span
                  className="absolute -inset-px rounded-xl bg-gradient-to-r from-emerald-400 to-blue-500 opacity-80 group-hover:opacity-100 transition-opacity duration-200 group-hover:shadow-[0_0_32px_rgba(52,211,153,0.4)]"
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
            </Magnetic>

            <Magnetic strength={0.25}>
              <Link
                href="/about"
                data-hover
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/70 text-sm font-medium hover:bg-white/[0.08] hover:border-white/[0.14] hover:text-white transition-all duration-200 font-mono"
              >
                About Me <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </Magnetic>
          </motion.div>

          {/* Tech stack marquee */}
          <TechMarquee />

          {/* Terminal Snippet */}
          <TerminalSnippet />
        </div>
      </section>

    </div>
  );
}
