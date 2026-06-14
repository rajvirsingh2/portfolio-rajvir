"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const emotions = ["happy", "curious", "wave", "sleep", "excited", "loading", "point", "smile", "spin", "jump", "shy"] as const;
type Emotion = typeof emotions[number];

const faces: Record<Emotion, { eyes: string; mouth: string }> = {
  happy:   { eyes: "◕ ◕", mouth: "‿" },
  curious: { eyes: "◔ ◔", mouth: "○" },
  wave:    { eyes: "◕ ◕", mouth: "▽" },
  sleep:   { eyes: "– –", mouth: "з" },
  excited: { eyes: "★ ★", mouth: "D" },
  loading: { eyes: "– –", mouth: "..." },
  point:   { eyes: "◕ ◕", mouth: "o" },
  smile:   { eyes: "^ ^", mouth: "u" },
  spin:    { eyes: "x x", mouth: "o" },
  jump:    { eyes: "O O", mouth: "D" },
  shy:     { eyes: "> <", mouth: "///" },
};

const messages: Record<Emotion, string[]> = {
  happy:   ["Hey there!", "Nice to meet you!", "Welcome! 👋"],
  curious: ["Hmm, what's this?", "Interesting...", "Let me see..."],
  wave:    ["Hello!", "Over here!", "Hi hi! ✨"],
  sleep:   ["zzz...", "*yawn*", "..."],
  excited: ["Wow cool project!", "This is awesome!", "Check this out!"],
  loading: ["Loading... network slow huh?", "Still thinking...", "Wait a sec..."],
  point:   ["Look at that!", "Right over there!", "Check this out!"],
  smile:   ["Just happy to be here!", "Have a great day!", "Keep smiling!"],
  spin:    ["Wheee!", "I'm dizzy...", "Spinning around!"],
  jump:    ["Boing!", "Up we go!", "Jumping around!"],
  shy:     ["Oh... please don't stare...", "///", "P-please be gentle..."],
};

export function RobotBuddy() {
  const [emotion, setEmotion] = useState<Emotion>("loading");
  const [showBubble, setShowBubble] = useState(false);
  const [message, setMessage] = useState(messages.loading[0]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // Show immediately and start with loading state
  useEffect(() => {
    const initTimer = setTimeout(() => {
      setIsVisible(true);
      setShowBubble(true);
    }, 0);
    
    // Stay in loading for 6 seconds, then switch to waving
    const loadingTimer = setTimeout(() => {
      setEmotion("wave");
      setMessage(messages.wave[0]);
      setShowBubble(true);
      setTimeout(() => setShowBubble(false), 4000);
    }, 6000);

    return () => clearTimeout(loadingTimer);
  }, []);

  // Cycle emotions after initial loading
  useEffect(() => {
    const interval = setInterval(() => {
      setEmotion((current) => {
        if (current === "loading" || current === "excited" || current === "shy") return current;
        const available = emotions.filter(e => e !== "loading" && e !== "excited" && e !== "shy");
        const next = available[Math.floor(Math.random() * available.length)];
        const msgs = messages[next];
        setMessage(msgs[Math.floor(Math.random() * msgs.length)]);
        setShowBubble(true);
        setTimeout(() => setShowBubble(false), 4000);
        return next;
      });
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  // Float around bottom-right area
  useEffect(() => {
    const move = () => {
      setPosition({
        x: Math.random() * 80 - 40,
        y: Math.random() * 60 - 30,
      });
    };
    move();
    const interval = setInterval(move, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = useCallback(() => {
    setEmotion("shy");
    setMessage("Oh... p-please don't touch... ///");
    setShowBubble(true);
    setTimeout(() => setShowBubble(false), 3000);
  }, []);

  // React to page changes
  useEffect(() => {
    if (!pathname || !isVisible) return;
    
    let pageMessage = "";
    let pageEmotion: Emotion = "happy";

    if (pathname === "/") {
      pageMessage = "Welcome home!";
      pageEmotion = "wave";
    } else if (pathname === "/about") {
      pageMessage = "Let me tell you about Rajvir...";
      pageEmotion = "point";
    } else if (pathname === "/projects") {
      pageMessage = "Check out these cool projects!";
      pageEmotion = "excited";
    } else if (pathname.startsWith("/projects/")) {
      pageMessage = "Wow, diving into the details!";
      pageEmotion = "curious";
    } else if (pathname === "/experience") {
      pageMessage = "Lots of great experience here!";
      pageEmotion = "smile";
    } else if (pathname === "/contact") {
      pageMessage = "Don't be shy, say hi!";
      pageEmotion = "wave";
    }

    if (pageMessage) {
      const timer = setTimeout(() => {
        setEmotion(pageEmotion);
        setMessage(pageMessage);
        setShowBubble(true);
      }, 0);
      const hideTimer = setTimeout(() => setShowBubble(false), 4000);
      return () => { clearTimeout(timer); clearTimeout(hideTimer); };
    }
  }, [pathname, isVisible]);

  if (!isVisible) return null;

  const face = faces[emotion];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
        x: position.x,
        translateY: position.y,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="fixed bottom-24 right-10 z-[60] cursor-pointer select-none"
      onClick={handleClick}
      data-hover
      data-cursor="sudo boop"
    >
      {/* Speech bubble */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.8 }}
            className="absolute -top-14 right-0 px-3 py-2 bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-xl text-[11px] text-zinc-800 dark:text-white/80 whitespace-nowrap shadow-xl"
          >
            {emotion === "loading" ? (
              <div className="flex items-center gap-1.5">
                <span className="flex gap-0.5">
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-1 h-1 rounded-full bg-blue-500 dark:bg-blue-400" />
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1 h-1 rounded-full bg-blue-500 dark:bg-blue-400" />
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1 h-1 rounded-full bg-blue-500 dark:bg-blue-400" />
                </span>
                {message}
              </div>
            ) : message}
            <div className="absolute -bottom-1 right-6 w-2 h-2 bg-white dark:bg-[#111] border-r border-b border-black/10 dark:border-white/10 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Robot body */}
      <motion.div
        animate={{
          rotate: emotion === "wave" ? [0, 5, -5, 0] : emotion === "point" ? -10 : emotion === "spin" ? [0, 360] : 0,
          y: emotion === "jump" ? [0, -40, 0] : 0,
        }}
        transition={{ 
          repeat: emotion === "wave" ? Infinity : emotion === "spin" ? Infinity : emotion === "jump" ? Infinity : 0, 
          duration: emotion === "spin" ? 1 : emotion === "jump" ? 0.6 : 1.5 
        }}
        className="relative"
      >
        {/* Antenna */}
        <div className="flex justify-center mb-1">
          <motion.div
            animate={{ scaleY: emotion === "loading" ? [1, 1.5, 1] : [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: emotion === "loading" ? 0.5 : 2, ease: "easeInOut" }}
            className="w-[1px] h-3 bg-black/20 dark:bg-white/20"
          />
          <motion.div
            animate={{ scale: emotion === "loading" ? [1, 1.5, 1] : [1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: emotion === "loading" ? 0.5 : 2, ease: "easeInOut" }}
            className="absolute -top-1 w-1.5 h-1.5 rounded-full bg-black/80 dark:bg-white/80"
          />
        </div>

        {/* Head */}
        <div className="w-16 h-14 rounded-xl bg-white dark:bg-black border border-black/10 dark:border-white/[0.05] flex flex-col items-center justify-center gap-0.5 relative overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.08)] dark:shadow-none">
          {/* Blush for shy emotion */}
          {emotion === "shy" && (
            <div className="absolute inset-0 flex justify-between px-2 items-center mt-3 z-0">
              <div className="w-4 h-2 rounded-full bg-red-400/40 dark:bg-white/10 blur-[2px]" />
              <div className="w-4 h-2 rounded-full bg-red-400/40 dark:bg-white/10 blur-[2px]" />
            </div>
          )}

          {/* Eyes */}
          <div className={`text-[13px] leading-none tracking-[0.15em] relative z-10 font-bold ${
            emotion === "sleep" ? "text-zinc-400 dark:text-zinc-600" :
            emotion === "loading" ? "text-zinc-500 dark:text-zinc-400" :
            emotion === "shy" ? "text-zinc-800 dark:text-zinc-200" :
            "text-black dark:text-white"
          }`}>
            {face.eyes}
          </div>
          {/* Mouth */}
          <div className={`text-[10px] leading-none relative z-10 ${
            emotion === "shy" ? "text-black dark:text-white" : "text-zinc-500 dark:text-zinc-400"
          }`}>
            {face.mouth}
          </div>
        </div>

        {/* Body */}
        <div className="flex justify-center mt-0.5">
          <div className="w-10 h-6 rounded-b-xl bg-white dark:bg-black border border-t-0 border-black/10 dark:border-white/[0.05] flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.08)] dark:shadow-none">
            <motion.div 
              animate={{ opacity: emotion === "loading" ? [0.1, 0.8, 0.1] : [0.2, 0.4, 0.2] }}
              transition={{ repeat: Infinity, duration: emotion === "loading" ? 0.5 : 2 }}
              className="w-1.5 h-1.5 rounded-full bg-black/60 dark:bg-white/60" 
            />
          </div>
        </div>

        {/* Arms */}
        <motion.div
          animate={
            emotion === "wave" ? { rotate: [0, -40, 0] } :
            emotion === "point" ? { rotate: -70, x: -5, y: -2 } :
            emotion === "jump" ? { rotate: [0, -120, 0] } :
            { rotate: 0 }
          }
          transition={{ repeat: emotion === "wave" || emotion === "jump" ? Infinity : 0, duration: emotion === "jump" ? 0.6 : 0.8 }}
          className="absolute top-8 -left-2 w-1.5 h-5 rounded-full bg-white dark:bg-black border border-black/10 dark:border-white/[0.05] shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-none"
          style={{ transformOrigin: "top center" }}
        />
        <motion.div 
          animate={
            emotion === "point" ? { rotate: 20 } : 
            emotion === "jump" ? { rotate: [0, 120, 0] } :
            { rotate: 0 }
          }
          transition={{ repeat: emotion === "jump" ? Infinity : 0, duration: 0.6 }}
          className="absolute top-8 -right-2 w-1.5 h-5 rounded-full bg-white dark:bg-black border border-black/10 dark:border-white/[0.05] shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-none"
          style={{ transformOrigin: "top center" }}
        />
      </motion.div>
    </motion.div>
  );
}
