"use client";

import { motion } from "framer-motion";

/**
 * Floating code editor windows & terminal that represent
 * Android/Backend development — replaces the 3D globe.
 */
export default function Scene() {
  return (
    <div className="absolute top-0 right-0 w-full lg:w-[55%] h-screen z-[2] pointer-events-none overflow-hidden">
      {/* Floating Android code snippet */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: 3 }}
        animate={{ opacity: 1, y: 0, rotate: 3 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="absolute top-[15%] right-[8%] w-[340px] animate-float hidden lg:block"
      >
        <div className="rounded-xl bg-[#0d1117] border border-white/[0.08] shadow-2xl shadow-black/40 overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-white/[0.03] border-b border-white/[0.06]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[10px] text-white/30 font-mono">MainActivity.kt</span>
          </div>
          <div className="p-4 font-mono text-[11px] leading-[1.7] overflow-hidden">
            <span className="text-purple-400">class</span> <span className="text-green-400">MainActivity</span> <span className="text-white/50">:</span> <span className="text-blue-400">ComponentActivity</span><span className="text-white/40">() {"{"}</span>{"\n"}
            <span className="text-white/20 ml-4">override fun</span> <span className="text-yellow-300">onCreate</span><span className="text-white/40">(</span><span className="text-white/30">...</span><span className="text-white/40">) {"{"}</span>{"\n"}
            <span className="ml-8 text-blue-300">setContent</span> <span className="text-white/40">{"{"}</span>{"\n"}
            <span className="ml-12 text-green-300">AscendTheme</span> <span className="text-white/40">{"{"}</span>{"\n"}
            <span className="ml-16 text-purple-300">NavHost</span><span className="text-white/40">(</span><span className="text-orange-300">startDest</span><span className="text-white/40">)</span>{"\n"}
            <span className="ml-12 text-white/40">{"}"}</span>{"\n"}
            <span className="ml-8 text-white/40">{"}"}</span>{"\n"}
            <span className="ml-4 text-white/40">{"}"}</span>{"\n"}
            <span className="text-white/40">{"}"}</span>
          </div>
        </div>
      </motion.div>

      {/* Terminal window */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        className="absolute top-[50%] right-[15%] w-[300px] animate-float-delayed hidden lg:block"
      >
        <div className="rounded-xl bg-[#0d1117] border border-white/[0.08] shadow-2xl shadow-black/40 overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-white/[0.03] border-b border-white/[0.06]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[10px] text-white/30 font-mono">terminal</span>
          </div>
          <div className="p-4 font-mono text-[11px] leading-[1.8]">
            <div><span className="text-green-400">$</span> <span className="text-white/50">go run main.go</span></div>
            <div className="text-blue-300">{"[GIN] "}Server running on :8080</div>
            <div><span className="text-green-400">$</span> <span className="text-white/50">docker build -t ascend .</span></div>
            <div className="text-white/30">Successfully built a3f8c2e1</div>
            <div><span className="text-green-400">$</span> <span className="text-white/40 animate-pulse">▌</span></div>
          </div>
        </div>
      </motion.div>

      {/* Floating phone mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
        className="absolute top-[25%] right-[45%] w-[140px] animate-float hidden xl:block"
      >
        <div className="rounded-[20px] bg-[#0d1117] border-2 border-white/[0.1] p-2 shadow-2xl shadow-black/60">
          <div className="rounded-[14px] bg-gradient-to-b from-blue-600/30 to-purple-600/20 h-[240px] flex flex-col items-center justify-center gap-3 overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-400" fill="currentColor">
                <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V7H6v11zM3.5 7C2.67 7 2 7.67 2 8.5v7c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-7C5 7.67 4.33 7 3.5 7zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
              </svg>
            </div>
            <span className="text-[9px] text-white/50 font-medium tracking-wider uppercase">Ascend Client</span>
            <div className="flex gap-1 mt-2">
              <div className="w-6 h-1 rounded-full bg-white/20" />
              <div className="w-6 h-1 rounded-full bg-blue-400/40" />
              <div className="w-6 h-1 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
