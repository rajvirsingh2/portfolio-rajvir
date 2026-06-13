"use client";

import { useEffect } from "react";

/**
 * Prints a fun Easter egg in the browser console when DevTools is opened.
 * Renders nothing — just a side-effect component.
 */
export function ConsoleEasterEgg() {
  useEffect(() => {
    const styles = {
      big:   "font-size:20px; font-weight:bold; color:#34d399; text-shadow: 0 0 10px rgba(52,211,153,0.5);",
      sub:   "font-size:13px; color:#60a5fa; font-style:italic;",
      mono:  "font-size:12px; color:#a78bfa; font-family:monospace;",
      small: "font-size:11px; color:rgba(255,255,255,0.4);",
    };

    console.log(
      "%c🤖 Oh? Trying to be a dev, aren't we?",
      styles.big
    );
    console.log(
      "%cThe robot buddy sees everything... even your console.",
      styles.sub
    );
    console.log(
      "%c$ whoami\n> rajvir-singh — backend × mobile × ml\n$ cat /etc/stack\n> kotlin • go • python • pytorch • docker • k8s",
      styles.mono
    );
    console.log(
      "%cIf you're poking around the code, I respect that.\nHit me up → rajvirsingh1009f@gmail.com",
      styles.small
    );
  }, []);

  return null;
}
