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

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center overflow-hidden pt-20 pb-32">
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-8 cursor-default"
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
            className="text-5xl sm:text-7xl md:text-[6rem] lg:text-[8rem] font-black tracking-tighter leading-[0.9] mb-8"
          >
            {"Rajvir Singh".split(" ").map((w, i) => (
              <motion.span key={i} variants={word} className="inline-block mr-[0.3em] text-white">
                {w}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl font-light leading-relaxed mb-12"
          >
            Software Engineer & Freelancer crafting{" "}
            <span className="text-white font-medium font-mono text-sm tracking-tight bg-white/5 px-2 py-0.5 rounded">robust scalable backend systems</span>, polished mobile experiences, and <span className="text-gradient-accent font-medium font-mono text-sm">intelligent ML solutions</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <Link href="/projects" data-hover
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-sm font-bold hover:bg-white/90 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/about" data-hover
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/70 text-sm font-medium hover:bg-white/[0.08] hover:text-white transition-all font-mono"
            >
              About Me <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Terminal Snippet */}
          <TerminalSnippet />
        </div>
      </section>

    </div>
  );
}
