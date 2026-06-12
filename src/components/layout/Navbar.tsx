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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-10 py-4 bg-[#050505]/70 backdrop-blur-xl border-b border-white/[0.04]"
    >
      <Link href="/" className="text-white font-bold text-lg tracking-tight hover:opacity-80 transition-opacity" data-hover>
        RS<span className="text-blue-400">.</span>
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-1">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              data-hover
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                active ? "text-white" : "text-white/40 hover:text-white/70"
              }`}
            >
              {active && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-white/[0.06] border border-white/[0.08] rounded-lg"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="flex md:hidden items-center gap-2">
        {links.map((link) => {
          const active = pathname === link.href;
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              data-hover
              className={`relative p-2.5 rounded-lg transition-colors ${
                active ? "text-white bg-white/[0.06]" : "text-white/40"
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
