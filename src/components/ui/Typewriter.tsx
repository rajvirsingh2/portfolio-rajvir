"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Typewriter — cycles through phrases with type/erase rhythm and a
 * blinking block caret. Falls back to a static first phrase when the
 * user prefers reduced motion.
 */
export function Typewriter({
  phrases,
  typingMs = 70,
  erasingMs = 35,
  holdMs = 1800,
  className = "",
}: {
  phrases: string[];
  typingMs?: number;
  erasingMs?: number;
  holdMs?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const current = phrases[phraseIndex];

    if (!erasing && charCount < current.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), typingMs);
      return () => clearTimeout(t);
    }
    if (!erasing && charCount === current.length) {
      const t = setTimeout(() => setErasing(true), holdMs);
      return () => clearTimeout(t);
    }
    if (erasing && charCount > 0) {
      const t = setTimeout(() => setCharCount((c) => c - 1), erasingMs);
      return () => clearTimeout(t);
    }
    if (erasing && charCount === 0) {
      setErasing(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }
  }, [charCount, erasing, phraseIndex, phrases, typingMs, erasingMs, holdMs, reduceMotion]);

  const text = reduceMotion ? phrases[0] : phrases[phraseIndex].slice(0, charCount);

  return (
    <span className={`inline-flex items-center font-mono ${className}`} aria-label={phrases.join(", ")}>
      <span className="text-emerald-400/70 mr-2" aria-hidden>&gt;</span>
      <span className="text-foreground/70">{text}</span>
      <span className="ml-0.5 inline-block w-[0.55em] h-[1.1em] bg-emerald-400/80 animate-caret" aria-hidden />
    </span>
  );
}
