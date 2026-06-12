"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Link2, Code2, ArrowUpRight, Copy, Check } from "lucide-react";
import { SiInstagram, SiLeetcode } from "react-icons/si";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const EMAIL = "rajvirsingh1009f@gmail.com";

const socials = [
  { icon: Link2, label: "LinkedIn", value: "Rajvir Singh", href: "https://www.linkedin.com/in/rajvir-singh-007303257/", cursor: "connect()", accent: "10, 102, 194" },
  { icon: Code2, label: "GitHub", value: "rajvirsingh2", href: "https://github.com/rajvirsingh2", cursor: "git clone rajvir", accent: "255, 255, 255" },
  { icon: SiLeetcode, label: "LeetCode", value: "vir_s_ingh", href: "https://leetcode.com/u/vir_s_ingh", cursor: "while(grind)", accent: "255, 161, 22" },
  { icon: SiInstagram, label: "Instagram", value: "@rajvir_s_ingh", href: "https://www.instagram.com/rajvir_s_ingh/", cursor: "follow++", accent: "228, 64, 95" },
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable — mailto button still works
    }
  };

  return (
    <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 pb-32">
      <motion.span
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="block font-mono text-xs tracking-[0.3em] uppercase text-emerald-400/70 mb-4"
      >
        ~/contact
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="font-display text-5xl md:text-6xl font-bold tracking-tighter text-gradient mb-6"
      >
        Get in Touch
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-lg text-white/50 max-w-2xl mb-14"
      >
        Open to internships, collaborations, and interesting conversations about distributed systems, mobile dev, or ML.
        Spam gets piped to <span className="font-mono text-sm text-white/40">/dev/null</span>.
      </motion.p>

      {/* Featured email card — rotating conic gradient border */}
      <motion.div
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
        className="relative rounded-2xl overflow-hidden p-px mb-6"
      >
        {/* Spinning border beam */}
        <div
          className="absolute inset-[-150%] animate-[border-spin_5s_linear_infinite]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg 250deg, rgba(52,211,153,0.9) 290deg, rgba(96,165,250,0.9) 320deg, transparent 360deg)",
          }}
          aria-hidden
        />
        {/* Static faint ring so border visible while beam is elsewhere */}
        <div className="absolute inset-0 rounded-2xl border border-white/[0.09]" aria-hidden />

        <div className="relative rounded-[15px] bg-[#0b0b0d] p-7 sm:p-9 overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[120px] bg-emerald-500/10 pointer-events-none" aria-hidden />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/25 flex items-center justify-center text-emerald-300">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-white leading-tight">Primary channel</h2>
                <p className="text-xs text-white/40">Replies within 24h — usually much faster.</p>
              </div>
            </div>

            <p className="font-mono text-base sm:text-xl text-white/90 tracking-tight mb-6 break-all select-all">
              {EMAIL}
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={copyEmail}
                data-hover
                data-cursor={copied ? "copied!" : "ctrl+c"}
                aria-label={copied ? "Email copied" : "Copy email to clipboard"}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-sm font-medium hover:bg-emerald-500/20 hover:border-emerald-400/50 hover:shadow-[0_0_24px_rgba(52,211,153,0.2)] transition-all duration-200 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied!" : "Copy email"}
              </button>
              <a
                href={`mailto:${EMAIL}`}
                data-hover
                data-cursor="ping rajvir"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/70 text-sm font-medium hover:bg-white/[0.08] hover:text-white transition-all duration-200"
              >
                Open mail app <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Socials — spotlight cards in brand colors */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {socials.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
          >
            <SpotlightCard accent={s.accent} className="h-full">
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                data-cursor={s.cursor}
                className="flex flex-col gap-3 p-5 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center transition-all duration-300"
                    style={{ color: `rgba(${s.accent}, 0.85)` }}
                  >
                    <s.icon className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/15 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" style={{ color: undefined }} />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white/25 block font-mono">{s.label}</span>
                  <span className="text-sm text-white/65 group-hover:text-white transition-colors duration-200 truncate block">{s.value}</span>
                </div>
              </a>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      {/* Location + availability strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
      >
        <SpotlightCard accent="52, 211, 153" contentClassName="flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-5">
          <div className="flex items-center gap-2 text-white/45 text-sm flex-shrink-0">
            <MapPin className="w-4 h-4 text-white/30" />
            Chandigarh, India
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/10" aria-hidden />
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <p className="text-sm text-white/55">
              <span className="text-emerald-300/90 font-medium">Currently available</span> for internships and freelance work — response time faster than my API. Usually.
            </p>
          </div>
        </SpotlightCard>
      </motion.div>
    </div>
  );
}
