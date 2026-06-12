"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";
import { ArrowLeft, Code2, ArrowUpRight, CheckCircle } from "lucide-react";

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
      {/* Back link */}
      <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors mb-10" data-hover>
          <ArrowLeft className="w-4 h-4" /> All Projects
        </Link>
      </motion.div>

      {/* Header & Mockup Area */}
      <div className="relative mb-14 flex flex-col md:flex-row md:items-center justify-between gap-10">
        {/* Header Text */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="md:w-3/5 relative z-10">
          <span className="text-[10px] uppercase tracking-widest font-bold text-white/20 mb-3 block font-mono">{project.period}</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-gradient mb-3">{project.title}</h1>
          <p className="text-lg font-medium mb-8" style={{ color: `rgba(${project.accent}, 0.7)` }}>{project.tagline}</p>
        
          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" data-hover
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0d1117] border border-white/10 text-white/70 text-sm font-medium hover:bg-white/5 hover:text-white transition-all shadow-xl"
              >
                <Code2 className="w-4 h-4" /> View Source <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" data-hover
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors shadow-xl"
              >
                {project.slug === 'deepfake-detection' ? 'Read Full Report' : 'Live Demo'} <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
          </motion.div>
        </motion.div>

        {/* Visual Mockups */}
        <div className="md:w-2/5 flex justify-end relative z-0">
          {project.slug === 'twaran-app' && (
            /* Sleek 3D Mobile Mockup */
            <motion.div 
              className="relative w-[200px] hidden md:block"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <div className="rounded-[30px] bg-black border-[3px] border-white/10 p-2 shadow-2xl shadow-emerald-500/10 rotate-[-5deg] relative">
                <div className="rounded-[22px] h-[400px] flex flex-col items-center justify-start gap-4 overflow-hidden relative bg-[#09090b]">
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-10" />
                  {/* App Content */}
                  <div className="w-full h-full p-4 pt-10 flex flex-col">
                    <div className="w-full h-32 rounded-xl mb-4 relative overflow-hidden" style={{ background: `linear-gradient(135deg, rgba(${project.accent},0.2), rgba(${project.accent},0.05))` }}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-black text-2xl text-white/80 tracking-tighter">{project.title}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 mb-4">
                      <div className="w-10 h-10 rounded-full bg-white/5" />
                      <div className="flex-1 space-y-2 py-1">
                        <div className="w-full h-2 rounded bg-white/10" />
                        <div className="w-2/3 h-2 rounded bg-white/5" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-auto">
                      <div className="h-16 rounded-lg bg-white/5" />
                      <div className="h-16 rounded-lg bg-white/5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {project.slug === 'ascend' && (
            /* Backend Terminal/Isometric Mockup */
            <motion.div 
              className="relative w-full max-w-[300px] hidden md:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <div className="rounded-xl bg-[#0d1117] border border-white/10 shadow-2xl shadow-blue-500/10 rotate-[2deg] overflow-hidden">
                <div className="flex items-center px-3 py-2 bg-[#161b22] border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                </div>
                <div className="p-4 font-mono text-[10px] text-white/50 leading-relaxed">
                  <span className="text-emerald-400">~/ascend-backend</span> $ go run main.go<br />
                  [GIN-debug] GET    /api/v1/quests  --&gt; handler<br />
                  [GIN-debug] POST   /api/v1/sync    --&gt; handler<br />
                  <br />
                  <span className="text-blue-400">INFO</span> Connected to PostgreSQL<br />
                  <span className="text-blue-400">INFO</span> Phi-3 Mini Engine initialized<br />
                  <span className="text-emerald-500 font-bold">SUCCESS</span> API Gateway listening on :8080<br />
                  <span className="inline-block w-1.5 h-3 bg-white/60 align-middle ml-1 mt-1 animate-pulse" />
                </div>
              </div>
              
              {/* Floating isometric node */}
              <motion.div 
                className="absolute -bottom-6 -left-6 w-16 h-16 rounded-lg bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-md flex items-center justify-center shadow-lg"
                animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              >
                <div className="w-8 h-8 rounded border border-emerald-400/50" />
              </motion.div>
            </motion.div>
          )}

          {project.slug === 'kotlin-cli' && (
            /* CLI Terminal Mockup */
            <motion.div 
              className="relative w-full max-w-[300px] hidden md:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <div className="rounded-xl bg-[#0d1117] border border-white/10 shadow-2xl shadow-yellow-500/10 rotate-[-2deg] overflow-hidden">
                <div className="flex items-center px-3 py-2 bg-[#161b22] border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                </div>
                <div className="p-4 font-mono text-[10px] text-white/50 leading-relaxed">
                  <span className="text-yellow-400">~/dev</span> $ kcli http get api.dev.com<br />
                  <span className="text-blue-400">CONNECTING</span> Establishing secure link...<br />
                  <span className="text-emerald-500">200 OK</span> 45ms<br />
                  <br />
                  <span className="text-white/40">{"{"}</span><br />
                  <span className="text-white/40">  &quot;status&quot;: &quot;active&quot;,</span><br />
                  <span className="text-white/40">  &quot;version&quot;: &quot;1.0.4&quot;</span><br />
                  <span className="text-white/40">{"}"}</span><br />
                  <span className="inline-block w-1.5 h-3 bg-white/60 align-middle ml-1 mt-1 animate-pulse" />
                </div>
              </div>
            </motion.div>
          )}

          {project.slug === 'deepfake-detection' && (
            /* Research Paper / Document Mockup */
            <motion.div 
              className="relative w-full max-w-[280px] hidden md:block"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            >
              <div className="rounded-sm bg-[#e2e8f0] border border-white/20 p-6 shadow-2xl shadow-emerald-500/10 rotate-[3deg] relative before:absolute before:inset-y-0 before:left-4 before:w-[1px] before:bg-red-500/20">
                {/* Paper Header */}
                <div className="mb-6 pl-2 border-b border-black/10 pb-4">
                  <div className="w-3/4 h-3 bg-black/80 rounded mb-2" />
                  <div className="w-1/2 h-2 bg-black/40 rounded" />
                </div>
                {/* Abstract Text Lines */}
                <div className="space-y-2 pl-2 mb-6">
                  <div className="w-full h-1.5 bg-black/20 rounded" />
                  <div className="w-full h-1.5 bg-black/20 rounded" />
                  <div className="w-5/6 h-1.5 bg-black/20 rounded" />
                  <div className="w-full h-1.5 bg-black/20 rounded" />
                  <div className="w-4/6 h-1.5 bg-black/20 rounded" />
                </div>
                {/* Embedded Graph Mockup */}
                <div className="w-full h-24 bg-black/5 rounded border border-black/10 pl-2 p-2 flex items-end justify-between">
                  <div className="w-[10%] h-[30%] bg-blue-500/60 rounded-t" />
                  <div className="w-[10%] h-[50%] bg-blue-500/60 rounded-t" />
                  <div className="w-[10%] h-[40%] bg-blue-500/60 rounded-t" />
                  <div className="w-[10%] h-[70%] bg-blue-500/60 rounded-t" />
                  <div className="w-[10%] h-[60%] bg-emerald-500/80 rounded-t" />
                  <div className="w-[10%] h-[90%] bg-emerald-500/80 rounded-t" />
                </div>
                
                {/* Floating Bookmark/Tag */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  98.9% Acc
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="space-y-5 mb-16"
      >
        {project.longDescription.map((para, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.08 }}
            className="text-white/50 leading-[1.8] text-[15px]"
          >
            {para}
          </motion.p>
        ))}
      </motion.div>

      {/* Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        className="rounded-2xl bg-[#0a0a0a] border border-white/[0.06] p-8 mb-16"
      >
        <h2 className="text-xl font-bold text-white mb-6">Key Highlights</h2>
        <div className="space-y-4">
          {project.highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55 + i * 0.06 }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: `rgba(${project.accent}, 0.7)` }} />
              <span className="text-sm text-white/60 leading-relaxed">{h}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tech Stack */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <h2 className="text-xl font-bold text-white mb-6">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.65 + i * 0.04 }}
              className="px-4 py-2 text-xs uppercase tracking-widest font-bold rounded-xl bg-[#0a0a0a] border border-white/[0.06] text-white/50 hover:text-white/80 hover:border-white/[0.15] transition-all duration-300 cursor-default"
              data-hover
            >
              {t}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
