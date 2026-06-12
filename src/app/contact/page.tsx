"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Link2, Code2, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl font-black tracking-tighter text-gradient mb-6"
      >
        Get in Touch
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-lg text-white/40 max-w-2xl mb-16"
      >
        Open to internships, collaborations, and interesting conversations about distributed systems, mobile dev, or ML.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <ContactCard
          icon={<Mail className="w-5 h-5" />}
          label="Email"
          value="rajvirsingh1009f@gmail.com"
          href="mailto:rajvirsingh1009f@gmail.com"
          delay={0.2}
        />
        <ContactCard
          icon={<Link2 className="w-5 h-5" />}
          label="LinkedIn"
          value="Rajvir Singh"
          href="https://www.linkedin.com/in/rajvir-singh-007303257/"
          external
          delay={0.25}
        />
        <ContactCard
          icon={<Code2 className="w-5 h-5" />}
          label="GitHub"
          value="rajvirsingh2"
          href="https://github.com/rajvirsingh2"
          external
          delay={0.3}
        />
        <ContactCard
          icon={<MapPin className="w-5 h-5" />}
          label="Location"
          value="Chandigarh, India"
          delay={0.35}
        />
      </div>
    </div>
  );
}

function ContactCard({ icon, label, value, href, external, delay = 0 }: {
  icon: React.ReactNode; label: string; value: string; href?: string; external?: boolean; delay?: number;
}) {
  const Wrapper = href ? "a" : "div";
  const props = href
    ? { href, ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}) }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <Wrapper
        {...props}
        className="group flex items-start gap-4 p-6 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 cursor-pointer"
        data-hover
      >
        <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/40 group-hover:text-blue-400 group-hover:border-blue-400/20 transition-all duration-300 flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-[10px] uppercase tracking-widest font-bold text-white/20 block mb-1">{label}</span>
          <span className="text-sm text-white/60 group-hover:text-white transition-colors truncate block">{value}</span>
        </div>
        {href && (
          <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors flex-shrink-0 mt-1" />
        )}
      </Wrapper>
    </motion.div>
  );
}
