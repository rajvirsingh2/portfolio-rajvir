"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BrainCircuit, Network, Zap } from "lucide-react";
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

      {/* Research / ML Section */}
      <section className="relative py-32 border-t border-white/5 bg-[#0a0f1a]/50">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium mb-6">
                <BrainCircuit className="w-3.5 h-3.5" /> Academic Research
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">Deepfake Detection via Continual Learning</h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                Developed an adaptive Machine Learning pipeline designed to detect highly sophisticated, evolving deepfake variants. 
                By leveraging continual learning techniques, the model actively mitigates catastrophic forgetting, ensuring robust accuracy on both legacy and emerging spoofing methods.
              </p>
              
              <ul className="space-y-4 font-mono text-sm text-white/70 mb-10">
                <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-emerald-400" /> PyTorch & TensorFlow backend</li>
                <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-emerald-400" /> Real-time facial artifact analysis</li>
                <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-emerald-400" /> Efficient Net & Vision Transformers</li>
              </ul>

              <Link href="/projects/deepfake-detection" data-hover className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
                Read the Case Study <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Abstract Geometric Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full max-w-md mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-emerald-500/5 rounded-full blur-3xl" />
              <div className="absolute inset-0 rounded-3xl border border-white/10 bg-[#0d1117]/80 backdrop-blur-xl flex items-center justify-center overflow-hidden shadow-2xl">
                {/* Abstract Node Network */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Network className="w-32 h-32 text-blue-500/20 absolute" />
                  
                  {/* Floating geometric nodes */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        y: [0, (i * 17) % 40 - 20, 0],
                        x: [0, (i * 23) % 40 - 20, 0],
                      }}
                      transition={{ 
                        duration: 4 + ((i * 13) % 4), 
                        repeat: Infinity,
                        ease: "easeInOut" 
                      }}
                      className="absolute w-3 h-3 rounded-full bg-blue-400/80 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                      style={{
                        left: `${20 + ((i * 31) % 60)}%`,
                        top: `${20 + ((i * 37) % 60)}%`,
                      }}
                    />
                  ))}
                  
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0d1117_100%)] opacity-60 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
