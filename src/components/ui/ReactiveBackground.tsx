"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ReactiveBackground - A mouse-reactive gradient spotlight that follows
 * the cursor across the entire page, combined with a subtle dot grid
 * and animated gradient mesh. Creates a premium "Vercel/Stripe" feel.
 */
export function ReactiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Hidden Typography revealed by flashlight */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden opacity-50"
        style={{
          // The magic: the text is masked and ONLY visible in a 350px radius around the mouse
          maskImage: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent 100%)`,
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center select-none w-full">
          <div 
            className="text-[12vw] leading-[0.85] font-black tracking-tighter text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.08)" }}
          >
            ENGINEER
            <br />
            DEVELOPER
            <br />
            CREATOR
          </div>
        </div>
      </div>

      {/* Mouse-reactive ultra-minimalist spotlight */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none transition-opacity duration-300"
        style={{
          background: `
            radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.03), transparent 60%),
            radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.015), transparent 50%)
          `,
        }}
      />
    </>
  );
}

/**
 * MouseGlow - A tiny blob "pet" that chases the cursor: tilts in the
 * direction of travel, eyes track movement, blinks occasionally, and
 * opens its mouth over interactive elements. Elements can set a
 * `data-cursor` attribute to show a terminal-style label pill.
 */
export function MouseGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [dir, setDir] = useState({ x: 0, y: 0, tilt: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [blink, setBlink] = useState(false);
  const [tripping, setTripping] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    let last = { x: -100, y: -100 };
    let speedEma = 0;
    let tripActive = false;
    const clamp = (v: number, m: number) => Math.max(-m, Math.min(m, v));
    const move = (e: MouseEvent) => {
      const dx = e.clientX - last.x;
      const dy = e.clientY - last.y;
      last = { x: e.clientX, y: e.clientY };
      setPos(last);
      setDir({ x: clamp(dx * 0.2, 3), y: clamp(dy * 0.2, 3), tilt: clamp(dx * 0.3, 12) });

      // Shake detection: sustained high speed sends the blob on a trip
      speedEma = speedEma * 0.8 + Math.hypot(dx, dy) * 0.2;
      if (speedEma > 120 && !tripActive) {
        tripActive = true;
        setTripping(true);
        setTimeout(() => {
          tripActive = false;
          speedEma = 0;
          setTripping(false);
        }, 3000);
      }
    };
    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setIsHovering(
        !!(el.closest("a") || el.closest("button") || el.closest("[data-hover]"))
      );
      const labelled = el.closest("[data-cursor]") as HTMLElement | null;
      setLabel(labelled?.dataset.cursor ?? null);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);

    // Occasional blink
    const blinkLoop = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 140);
    }, 3200);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      clearInterval(blinkLoop);
    };
  }, []);

  const shownLabel = tripping ? "reality.exe not responding" : label;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden lg:block"
        animate={{
          x: pos.x + 14,
          y: pos.y + 14,
          rotate: tripping ? [0, -24, 24, -16, 16, -8, 8, 0] : dir.tilt,
          scale: tripping ? [1, 1.25, 0.9, 1.2, 1] : isHovering ? 1.35 : 1,
        }}
        transition={
          tripping
            ? { duration: 0.9, repeat: Infinity, ease: "easeInOut" }
            : { type: "spring", stiffness: 120, damping: 18, mass: 0.4 }
        }
      >
        {/* Blob body */}
        <div className={`relative w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 shadow-[0_2px_12px_rgba(52,211,153,0.45)] flex flex-col items-center justify-center ${tripping ? "animate-trip" : ""}`}>
          {/* Eyes */}
          <div className="flex gap-[5px]" style={{ transform: `translate(${dir.x}px, ${dir.y}px)` }}>
            {[0, 1].map((eye) => (
              <span key={eye} className="relative w-[7px] h-[7px] rounded-full bg-white flex items-center justify-center overflow-hidden">
                {tripping ? (
                  /* Spiral pupil while hallucinating */
                  <span
                    className="w-[6px] h-[6px] rounded-full animate-pupil-spin"
                    style={{ background: "conic-gradient(#18181b 0 25%, transparent 25% 50%, #18181b 50% 75%, transparent 75%)" }}
                  />
                ) : (
                  <motion.span
                    animate={{ scaleY: blink ? 0.1 : 1 }}
                    transition={{ duration: 0.08 }}
                    className="w-[3.5px] h-[3.5px] rounded-full bg-zinc-900"
                    style={{ transform: `translate(${dir.x * 0.4}px, ${dir.y * 0.4}px)` }}
                  />
                )}
              </span>
            ))}
          </div>
          {/* Mouth: dot idle, grin on hover, wavy gape mid-trip */}
          <motion.div
            animate={
              tripping
                ? { width: 7, height: 7, borderRadius: "40% 60% 55% 45%", marginTop: 1, rotate: [0, 180, 360] }
                : isHovering
                ? { width: 8, height: 6, borderRadius: "0 0 8px 8px", marginTop: 2, rotate: 0 }
                : { width: 3, height: 2, borderRadius: 4, marginTop: 2, rotate: 0 }
            }
            transition={
              tripping
                ? { duration: 1.2, repeat: Infinity, ease: "linear" }
                : { type: "spring", stiffness: 400, damping: 22 }
            }
            className="bg-zinc-900/80"
          />
        </div>
      </motion.div>

      {/* Terminal-style cursor label */}
      <AnimatePresence>
        {shownLabel && (
          <motion.div
            key={shownLabel}
            initial={{ opacity: 0, scale: 0.7, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: pos.x + 50, top: pos.y + 22 }}
            exit={{ opacity: 0, scale: 0.7, y: 6 }}
            transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.3 }}
            className={`pointer-events-none fixed left-0 top-0 z-[101] hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0d1117]/95 border shadow-[0_4px_20px_rgba(0,0,0,0.5)] font-mono text-[11px] whitespace-nowrap ${
              tripping ? "border-red-400/40 text-red-300" : "border-emerald-400/30 text-emerald-300"
            }`}
          >
            <span className={tripping ? "text-red-500/70" : "text-emerald-500/70"}>$</span>
            {shownLabel}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
