import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { RobotBuddy } from "@/components/ui/RobotBuddy";
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
      <body className="bg-[#09090b] text-white min-h-screen">
        <Navbar />
        <ReactiveBackground />
        <MouseGlow />
        <main className="pt-20">{children}</main>
        <RobotBuddy />
      </body>
    </html>
  );
}
