"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, Copy, Check } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiInstagram, SiLeetcode } from "react-icons/si";

const EMAIL = "rajvirsingh1009f@gmail.com";

const socials = [
  { icon: FaLinkedin, name: "LinkedIn", handle: "rajvir-singh", href: "https://www.linkedin.com/in/rajvir-singh-007303257/", cursor: "connect()", color: "#0A66C2" },
  { icon: FaGithub, name: "GitHub", handle: "rajvirsingh2", href: "https://github.com/rajvirsingh2", cursor: "git clone rajvir", color: "#e6edf3" },
  { icon: SiLeetcode, name: "LeetCode", handle: "vir_s_ingh", href: "https://leetcode.com/u/vir_s_ingh", cursor: "while(grind)", color: "#FFA116" },
  { icon: SiInstagram, name: "Instagram", handle: "@rajvir_s_ingh", href: "https://www.instagram.com/rajvir_s_ingh/", cursor: "follow++", color: "#E4405F" },
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable — mailto link still works
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
        className="text-lg text-white/50 max-w-2xl mb-20"
      >
        Open to internships, collaborations, and interesting conversations about distributed systems, mobile dev, or ML.
        Spam gets piped to <span className="font-mono text-sm text-white/40">/dev/null</span>.
      </motion.p>

      {/* Email hero — giant type, animated gradient underline, no box */}
      <motion.div
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-24"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35 block mb-4">Primary channel</span>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
          target="_blank"
          rel="noopener noreferrer"
          data-hover
          data-cursor="ping rajvir"
          className="group inline-block cursor-pointer relative z-10"
        >
          <span className="font-display font-bold tracking-tight text-2xl sm:text-4xl md:text-[2.6rem] text-white group-hover:text-emerald-400 transition-colors duration-300 break-all leading-tight">
            {EMAIL}
          </span>
          <span className="block h-[3px] mt-3 rounded-full underline-beam w-full origin-left scale-x-100 group-hover:h-[5px] transition-all duration-300" aria-hidden />
        </a>

        <div className="flex flex-wrap gap-3 mt-7">
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
          <span className="inline-flex items-center text-xs text-white/30">Replies within 24h — usually much faster.</span>
        </div>
      </motion.div>

      {/* Social index — editorial rows, brand color floods on hover */}
      <div className="mb-20">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35 block mb-2">Elsewhere</span>
        <div>
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              data-cursor={s.cursor}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              onMouseEnter={(e) => e.currentTarget.style.setProperty("--row-c", s.color)}
              onMouseLeave={(e) => e.currentTarget.style.removeProperty("--row-c")}
              className="group flex items-center gap-5 sm:gap-8 py-6 border-b border-white/[0.07] first:border-t hover:border-white/[0.15] transition-colors duration-300 cursor-pointer"
            >
              <span className="font-mono text-xs text-white/25 w-6 flex-shrink-0">0{i + 1}</span>
              <s.icon
                className="w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0 group-hover:scale-110 transition-all duration-300"
                style={{ color: "var(--row-c, rgba(255,255,255,0.3))" }}
              />
              <span
                className="font-display text-3xl sm:text-5xl font-bold tracking-tighter group-hover:translate-x-3 transition-all duration-300 flex-1 min-w-0 truncate"
                style={{ color: "var(--row-c, rgba(255,255,255,0.35))" }}
              >
                {s.name}
              </span>
              <span className="hidden sm:block font-mono text-sm text-white/30 group-hover:text-white/60 transition-colors duration-300 flex-shrink-0">
                {s.handle}
              </span>
              <ArrowUpRight
                className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0"
                style={{ color: "var(--row-c, rgba(255,255,255,0.2))" }}
              />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer strip — plain inline, no box */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row sm:items-center gap-4 pt-6 border-t border-white/[0.07]"
      >
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
      </motion.div>
    </div>
  );
}
