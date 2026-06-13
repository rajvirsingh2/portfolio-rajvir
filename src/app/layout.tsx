import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { RobotBuddy } from "@/components/ui/RobotBuddy";
import { ConsoleEasterEgg } from "@/components/ui/ConsoleEasterEgg";
import { ReactiveBackground, MouseGlow } from "@/components/ui/ReactiveBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rajvir Singh | Software Engineer",
    template: "%s | Rajvir Singh",
  },
  description: "Portfolio of Rajvir Singh — Software Engineer specializing in Backend, Mobile & Machine Learning.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} dark antialiased`} suppressHydrationWarning>
      <body className="min-h-screen">
        {/* Apply the stored theme before paint to avoid a flash. SSR defaults
            to dark (the .dark class above); this only flips to light when the
            visitor previously chose it. */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('theme');var c=document.documentElement.classList;if(t==='light')c.remove('dark');else if(t==='dark')c.add('dark');}catch(e){}})();`}
        </Script>
        <Navbar />
        <ReactiveBackground />
        <MouseGlow />
        <main className="pt-20">{children}</main>
        <RobotBuddy />
        <ConsoleEasterEgg />
      </body>
    </html>
  );
}
