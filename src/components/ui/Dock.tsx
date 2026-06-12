"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Home, User, FolderGit2, Briefcase, Mail } from "lucide-react";
import { useRef } from "react";

const items = [
  { icon: Home, label: "Home", href: "#" },
  { icon: User, label: "About", href: "#about" },
  { icon: FolderGit2, label: "Projects", href: "#projects" },
  { icon: Briefcase, label: "Experience", href: "#experience" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export function Dock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-end gap-3 px-4 py-3 rounded-2xl bg-[#0a0a0a]/80 border border-white/[0.06] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
    >
      {items.map((item) => (
        <DockIcon key={item.label} mouseX={mouseX} {...item} />
      ))}
    </motion.nav>
  );
}

function DockIcon({ mouseX, icon: Icon, label, href }: {
  mouseX: any; icon: any; label: string; href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeSync = useTransform(distance, [-120, 0, 120], [44, 68, 44]);
  const size = useSpring(sizeSync, { mass: 0.1, stiffness: 180, damping: 14 });

  const iconScale = useTransform(size, [44, 68], [1, 1.3]);
  const springScale = useSpring(iconScale, { mass: 0.1, stiffness: 180, damping: 14 });

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ width: size, height: size }}
      className="group relative flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] text-white/50 hover:text-white hover:bg-white/[0.08] transition-colors duration-200 cursor-pointer"
      data-hover
    >
      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-[#111] border border-white/[0.08] text-[11px] font-medium text-white/90 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
        {label}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-[#111] border-r border-b border-white/[0.08] rotate-45 -mt-1" />
      </div>
      <motion.div style={{ scale: springScale }}>
        <Icon className="w-5 h-5" />
      </motion.div>
    </motion.a>
  );
}
