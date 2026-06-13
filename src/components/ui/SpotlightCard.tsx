"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

/**
 * SpotlightCard — a card whose border and interior glow follow the
 * cursor with a radial spotlight in the card's accent color. CSS-var
 * driven: no React re-render per mousemove.
 */
export function SpotlightCard({
  children,
  className = "",
  accent = "52, 211, 153",
  contentClassName = "",
}: {
  children: React.ReactNode;
  className?: string;
  accent?: string;
  contentClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`group relative rounded-2xl ${className}`}
      style={{ "--spot-x": "50%", "--spot-y": "50%" } as React.CSSProperties}
    >
      {/* Border spotlight (visible as a 1px ring around the inner panel) */}
      <div
        className="absolute inset-0 rounded-2xl bg-white/[0.07] transition-opacity duration-300"
        aria-hidden
      />
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `radial-gradient(300px circle at var(--spot-x) var(--spot-y), rgba(${accent}, 0.55), transparent 70%)` }}
        aria-hidden
      />
      {/* Inner panel */}
      <div className="absolute inset-px rounded-[15px] bg-[#0b0b0d]" aria-hidden />
      {/* Interior glow */}
      <div
        className="absolute inset-px rounded-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(260px circle at var(--spot-x) var(--spot-y), rgba(${accent}, 0.09), transparent 75%)` }}
        aria-hidden
      />
      <div className={`relative z-10 ${contentClassName}`}>{children}</div>
    </div>
  );
}

/**
 * CountUp — animates a number from 0 to `value` when scrolled into view.
 */
export function CountUp({
  value,
  decimals = 0,
  suffix = "",
  duration = 1.4,
  className = "",
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, value, mv]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(v.toFixed(decimals)));
    return unsub;
  }, [spring, decimals]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
