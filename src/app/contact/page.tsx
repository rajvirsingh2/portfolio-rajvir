"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Link2, Code2, ArrowUpRight } from "lucide-react";
import { SiInstagram, SiLeetcode } from "react-icons/si";

export default function ContactPage() {
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
        className="text-lg text-white/50 max-w-2xl mb-16"
      >
        Open to internships, collaborations, and interesting conversations about distributed systems, mobile dev, or ML.
        Spam gets piped to <span className="font-mono text-sm text-white/40">/dev/null</span>.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <ContactCard
          icon={<Mail className="w-5 h-5" />}
          label="Email"
          value="rajvirsingh1009f@gmail.com"
          href="mailto:rajvirsingh1009f@gmail.com"
          cursorLabel="ping rajvir"
          delay={0.2}
        />
        <ContactCard
          icon={<Link2 className="w-5 h-5" />}
          label="LinkedIn"
          value="Rajvir Singh"
          href="https://www.linkedin.com/in/rajvir-singh-007303257/"
          external
          cursorLabel="connect()"
          delay={0.25}
        />
        <ContactCard
          icon={<Code2 className="w-5 h-5" />}
          label="GitHub"
          value="rajvirsingh2"
          href="https://github.com/rajvirsingh2"
          external
          cursorLabel="git clone rajvir"
          delay={0.3}
        />
        <ContactCard
          icon={<SiLeetcode className="w-5 h-5" />}
          label="LeetCode"
          value="vir_s_ingh"
          href="https://leetcode.com/u/vir_s_ingh"
          external
          cursorLabel="while(grind)"
          delay={0.35}
        />
        <ContactCard
          icon={<SiInstagram className="w-5 h-5" />}
          label="Instagram"
          value="@rajvir_s_ingh"
          href="https://www.instagram.com/rajvir_s_ingh/"
          external
          cursorLabel="follow++"
          delay={0.4}
        />
        <ContactCard
          icon={<MapPin className="w-5 h-5" />}
          label="Location"
          value="Chandigarh, India"
          delay={0.45}
        />
      </div>

      {/* Availability strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
        className="mt-10 flex items-center gap-3 rounded-2xl card-surface px-6 py-5"
      >
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <p className="text-sm text-white/55">
          <span className="text-emerald-300/90 font-medium">Currently available</span> for internships and freelance work — response time faster than my API. Usually.
        </p>
      </motion.div>
    </div>
  );
}

function ContactCard({ icon, label, value, href, external, cursorLabel, delay = 0 }: {
  icon: React.ReactNode; label: string; value: string; href?: string; external?: boolean; cursorLabel?: string; delay?: number;
}) {
  const Wrapper = href ? "a" : "div";
  const props = href
    ? { href, ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}), ...(cursorLabel ? { "data-cursor": cursorLabel } : {}) }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <Wrapper
        {...props}
        className={`group flex items-start gap-4 p-6 rounded-2xl card-surface transition-all duration-300 ${href ? "cursor-pointer hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)] hover:-translate-y-0.5" : "cursor-default"}`}
        data-hover={href ? true : undefined}
      >
        <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-white/40 group-hover:text-emerald-300 group-hover:border-emerald-400/25 group-hover:bg-emerald-500/[0.06] transition-all duration-300 flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-[10px] uppercase tracking-widest font-bold text-white/25 block mb-1 font-mono">{label}</span>
          <span className="text-sm text-white/65 group-hover:text-white transition-colors duration-200 truncate block">{value}</span>
        </div>
        {href && (
          <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-emerald-300/70 transition-colors duration-200 flex-shrink-0 mt-1" />
        )}
      </Wrapper>
    </motion.div>
  );
}
