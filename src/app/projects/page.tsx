"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { TiltCard } from "@/components/ui/TiltCard";

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 pb-32">
      <motion.span
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="block font-mono text-xs tracking-[0.3em] uppercase text-emerald-400/70 mb-4"
      >
        ~/projects
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="font-display text-5xl md:text-6xl font-bold tracking-tighter text-gradient mb-6"
      >
        Projects
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-lg text-white/50 max-w-2xl mb-14"
      >
        Featured work spanning backend systems, mobile apps, ML research, and developer tools.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="h-full"
          >
            <TiltCard className="group">
            <div
              onClick={() => router.push(`/projects/${project.slug}`)}
              className="relative rounded-2xl card-surface p-8 hover:shadow-[0_24px_48px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer h-full flex flex-col overflow-hidden"
              data-hover
              data-cursor={`./open ${project.slug}`}
            >
              {/* Accent hairline on top, revealed on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-30 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, rgba(${project.accent}, 0.8), transparent)` }}
                aria-hidden
              />
              {/* Accent glow */}
              <div
                className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[120px] pointer-events-none"
                style={{ background: `rgba(${project.accent}, 0.1)` }}
                aria-hidden
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-mono text-xs font-bold tracking-widest" style={{ color: `rgba(${project.accent}, 0.9)` }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white/25 font-mono">{project.period}</span>
                </div>
                <h2 className="font-display text-2xl font-bold text-white/90 group-hover:text-white transition-colors duration-200 mb-2">{project.title}</h2>
                <p className="text-sm font-medium mb-4" style={{ color: `rgba(${project.accent}, 0.8)` }}>{project.tagline}</p>
                <p className="text-sm text-white/50 leading-relaxed mb-6 flex-grow group-hover:text-white/75 transition-colors duration-200 line-clamp-3">
                  {project.longDescription[0]}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="px-2.5 py-1 text-[10px] uppercase tracking-widest font-semibold rounded-full bg-white/[0.04] border border-white/[0.07] text-white/55 font-mono">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 text-[10px] text-white/30 font-mono">+{project.tech.length - 4}</span>
                  )}
                </div>

                <div className="flex items-center justify-between text-white/35 group-hover:text-white/70 transition-colors duration-200 mt-auto pt-4 border-t border-white/[0.06]">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    View Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 -m-2 hover:text-white transition-colors duration-200"
                      aria-label="View Source on GitHub"
                      data-cursor="git clone"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
