"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

export type TerminalLine = { text: string; type: "cmd" | "system" | "output" | "success" | "error" };

const defaultLines: TerminalLine[] = [
  { text: "$ ./rajvir --info", type: "cmd" },
  { text: "> Loading profile...", type: "system" },
  { text: "Education : ABV-Indian Institute of Information Technology", type: "output" },
  { text: "Degree    : Integrated B.Tech + M.Tech in IT", type: "output" },
  { text: "Timeline  : 2022 — 2027", type: "output" },
  { text: "Skills    : [Go, Kotlin, Python, Next.js, PyTorch]", type: "output" },
  { text: "Status    : Ready to build scalable systems.", type: "success" },
  { text: "> Type a page name (e.g. 'projects', 'about', 'experience') and hit Enter to navigate.", type: "system" },
];

const VALID_PAGES = ["about", "projects", "experience", "contact"];

export function TerminalSnippet({ lines = defaultLines }: { lines?: TerminalLine[] }) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((v) => {
        if (v < lines.length) return v + 1;
        clearInterval(timer);
        return v;
      });
    }, 400);
    return () => clearInterval(timer);
  }, [lines]);

  // Auto-scroll logic inside the container
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleLines, history]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = inputValue.trim().toLowerCase();
      if (!cmd) return;

      const newHistory: TerminalLine[] = [...history, { text: `$ ${inputValue}`, type: "cmd" }];
      
      if (VALID_PAGES.includes(cmd)) {
        newHistory.push({ text: `> Navigating to /${cmd}...`, type: "system" });
        setHistory(newHistory);
        setInputValue("");
        setTimeout(() => {
          router.push(`/${cmd}`);
        }, 500);
      } else {
        newHistory.push({ 
          text: `Error: Command '${cmd}' not found. Type something real buddy! See the hints above...`, 
          type: "error" 
        });
        setHistory(newHistory);
        setInputValue("");
      }
    }
  };

  const isInitialDone = visibleLines >= lines.length;
  const displayLines = [...lines.slice(0, visibleLines), ...history];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="w-full max-w-2xl mx-auto mt-16 text-left"
    >
      <div 
        className="rounded-xl overflow-hidden bg-[#0d1117] border border-white/10 shadow-2xl"
        onClick={() => isInitialDone && inputRef.current?.focus()}
      >
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-white/5 cursor-default">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="ml-4 text-xs font-mono text-white/40">guest@rajvir-portfolio:~</div>
        </div>
        
        {/* Terminal Body */}
        <div 
          ref={containerRef}
          className="p-5 font-mono text-sm leading-relaxed overflow-y-auto max-h-[300px]"
        >
          {displayLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              className={`
                ${line.type === "cmd" ? "text-blue-400" : ""}
                ${line.type === "system" ? "text-white/40 italic" : ""}
                ${line.type === "output" ? "text-emerald-400/90" : ""}
                ${line.type === "success" ? "text-emerald-500 font-bold" : ""}
                ${line.type === "error" ? "text-red-400" : ""}
                mb-1
              `}
            >
              {line.text}
            </motion.div>
          ))}

          {/* Active Input Line */}
          {isInitialDone && (
            <div className="flex items-center text-blue-400 mt-1">
              <span className="mr-2">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-white font-mono caret-white/60 placeholder-white/20"
                spellCheck={false}
                autoFocus
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
