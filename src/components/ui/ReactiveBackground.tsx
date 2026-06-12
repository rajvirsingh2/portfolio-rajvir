"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
 * MouseGlow - A reactive glow that follows the cursor and expands
 * on interactive elements. Uses mix-blend-difference for contrast.
 */
export function MouseGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setIsHovering(
        !!(el.closest("a") || el.closest("button") || el.closest("[data-hover]"))
      );
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[100] mix-blend-difference hidden lg:block"
      animate={{
        x: pos.x - (isHovering ? 32 : 10),
        y: pos.y - (isHovering ? 32 : 10),
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.1 }}
    >
      <motion.div
        animate={{
          width: isHovering ? 64 : 20,
          height: isHovering ? 64 : 20,
          opacity: isHovering ? 0.3 : 0.8,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="rounded-full bg-white"
      />
    </motion.div>
  );
}
