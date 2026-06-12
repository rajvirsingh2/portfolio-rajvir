"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, User, FolderGit2, Briefcase, Mail } from "lucide-react";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: FolderGit2 },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 sm:gap-4 px-3 sm:px-4 py-2 rounded-2xl glass shadow-[0_8px_32px_rgba(0,0,0,0.45)] max-w-[calc(100vw-2rem)]"
    >
      <Link
        href="/"
        className="px-2 font-display text-white font-bold text-lg tracking-tight hover:opacity-80 transition-opacity duration-200"
        data-hover
        aria-label="Home"
      >
        RS<span className="text-emerald-400">.</span>
      </Link>

      <div className="w-px h-5 bg-white/10 hidden sm:block" />

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-1">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              data-hover
              className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-200 ${
                active ? "text-white" : "text-white/40 hover:text-white/80"
              }`}
            >
              {active && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-white/[0.07] border border-white/[0.1] rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="flex md:hidden items-center gap-1">
        {links.map((link) => {
          const active = pathname === link.href;
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              data-hover
              aria-label={link.label}
              className={`relative p-2.5 rounded-xl transition-colors duration-200 ${
                active ? "text-emerald-300 bg-white/[0.07]" : "text-white/40 hover:text-white/70"
              }`}
            >
              <Icon className="w-4 h-4" />
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
