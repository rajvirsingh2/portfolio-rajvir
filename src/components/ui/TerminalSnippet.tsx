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
  { text: "Roles     : [Software Engineer, Android Engineer, ML Researcher]", type: "output" },
  { text: "Skills    : [Go, Kotlin, Python, Next.js, PyTorch]", type: "output" },
  { text: "Coffee    : [████████░░] 80% — refill scheduled", type: "output" },
  { text: "Status    : Ready to build scalable systems.", type: "success" },
  { text: "> Type 'rajvir' for the full story, 'help' for commands, or a page name to navigate.", type: "system" },
];

const VALID_PAGES = ["about", "projects", "experience", "contact", "home"];

function easterEgg(cmd: string): TerminalLine[] | null {
  if (cmd === "help") {
    return [
      { text: "Available: rajvir | about | projects | experience | contact | home", type: "output" },
      { text: "Also try: whoami, ls, sudo, coffee, rm -rf /", type: "system" },
    ];
  }
  if (cmd === "rajvir" || cmd === "./rajvir") {
    return [
      { text: "> Compiling human... done in 0.42s", type: "system" },
      { text: "Name       : Rajvir Singh", type: "output" },
      { text: "Class      : Software Engineer [lvl 21] — Backend / Android / ML", type: "output" },
      { text: "Education  : IIIT Gwalior — Integrated B.Tech+M.Tech IT (2022—2027)", type: "output" },
      { text: "Stack      : Kotlin · Go · Python · Jetpack Compose · PyTorch", type: "output" },
      { text: "Achievement: Amazon ML Summer School '25 — top 3,000 of 80,000+ applicants", type: "success" },
      { text: "Research   : Deepfake detection via Continual Learning — 98.9% acc (A-GEM)", type: "output" },
      { text: "Flagship   : Ascend — Go + Redis Streams, <15ms quest completions,", type: "output" },
      { text: "             self-hosted Phi-3 LoRA quest engine. Zero third-party AI APIs.", type: "output" },
      { text: "GitHub     : 26 public repos, Kotlin-heavy. OSS: Wikipedia Android, Mifos.", type: "output" },
      { text: "Leadership : Led 4-dev Android team; ran 10-person promo team (+20% turnout)", type: "output" },
      { text: "Weakness   : Cannot leave a slow query unoptimized. It's a problem.", type: "output" },
      { text: "Status     : Open to internships & freelance — type 'contact'", type: "success" },
    ];
  }
  if (cmd === "ls") {
    return [{ text: "about/  projects/  experience/  contact/  secrets/ [ACCESS DENIED]", type: "output" }];
  }
  if (cmd === "whoami") {
    return [{ text: "guest — but Rajvir would love an upgrade. Try 'contact'.", type: "output" }];
  }
  if (cmd.startsWith("sudo")) {
    return [{ text: "Permission denied: this incident will be reported to Rajvir.", type: "error" }];
  }
  if (cmd.includes("rm -rf")) {
    return [
      { text: "Blocked by self-preservation protocol.", type: "error" },
      { text: "> Portfolio chooses to live.", type: "system" },
    ];
  }
  if (cmd === "coffee" || cmd === "brew") {
    return [{ text: "Error 418: I'm a teapot. Coffee module ships in v2.", type: "error" }];
  }
  if (cmd === "hi" || cmd === "hello" || cmd === "hey") {
    return [{ text: "Hello human. Beep boop. Try 'contact' to reach my creator.", type: "success" }];
  }
  if (cmd === "anupam") {
    return [{ text: "he is purav ka chaatne wala", type: "output" }];
  }
  if (cmd === "vim" || cmd === "vi") {
    return [{ text: "Entering vim... good luck exiting. (:q! works here, promise)", type: "output" }];
  }
  if (cmd === ":q!" || cmd === ":wq") {
    return [{ text: "You escaped vim. Achievement unlocked.", type: "success" }];
  }
  return null;
}

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
        const path = cmd === "home" ? "/" : `/${cmd}`;
        newHistory.push({ text: `> Navigating to ${path}...`, type: "system" });
        setHistory(newHistory);
        setInputValue("");
        setTimeout(() => {
          router.push(path);
        }, 500);
      } else {
        const egg = easterEgg(cmd);
        if (egg) {
          newHistory.push(...egg);
        } else {
          newHistory.push({
            text: `Error: Command '${cmd}' not found. Type something real buddy! Try 'help'.`,
            type: "error",
          });
        }
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
        className="rounded-xl overflow-hidden bg-[#0d1117] border border-white/10 shadow-2xl shadow-emerald-500/[0.04] hover:border-white/15 transition-colors duration-300"
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
