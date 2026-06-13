"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

type Theme = "dark" | "light";

/**
 * ThemeToggle — flips the `.dark` class on <html> and persists the choice to
 * localStorage. Initial state matches the SSR default (dark) to avoid a
 * hydration mismatch, then syncs to the real applied theme after mount (the
 * no-flash script in the root layout may already have set it to light).
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage unavailable (private mode) — toggle still works this session
    }
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      data-hover
      data-cursor={isDark ? "theme --light" : "theme --dark"}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="relative grid place-items-center w-9 h-9 rounded-xl text-foreground/50 hover:text-foreground/90 hover:bg-foreground/[0.07] transition-colors duration-200 cursor-pointer"
    >
      {/* Before mount, render nothing visible to avoid a wrong-icon flash */}
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.span
            key={isDark ? "sun" : "moon"}
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-0 grid place-items-center"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
