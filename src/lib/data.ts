export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string[];
  tech: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  accent: string;
  period: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  tech: string[];
  accent: string;
}

export const projects: Project[] = [
  {
    slug: "ascend",
    title: "Ascend",
    tagline: "Gamified Personal Development RPG",
    description: "An Offline-First Android RPG powered by a custom fine-tuned LLM and a Go microservices backend.",
    longDescription: [
      "Ascend is a production-ready, gamified personal development application that turns real-world habits and goals into a high-stakes RPG. Every task completed grants XP to level up, while skipping habits actively damages your HP.",
      "The Android client is built with Kotlin, Jetpack Compose, and Room. It features a robust Offline-First architecture utilizing MVI patterns and WorkManager for resilient background syncing, ensuring an instantaneous, game-like experience.",
      "The backend relies on a highly concurrent Go API Gateway and a Custom Fine-Tuned AI Engine (Phi-3 Mini + LoRA). This AI dynamically generates highly personalized RPG quests based on a user's long-term goals and quest history.",
      "Features include Push Notifications (FCM) for midnight quest drops, GitHub-style activity heatmaps, and a punishing Death mechanic that permanently reduces stats if HP reaches zero.",
    ],
    tech: ["Kotlin", "Jetpack Compose", "Room", "Go", "MVI", "Phi-3 Mini", "FCM"],
    highlights: [
      "Offline-First sync via Room and WorkManager",
      "Custom Fine-Tuned LLM (Phi-3 Mini + LoRA) for quests",
      "MVI architecture for deterministic state management",
      "Punishing HP & Death mechanics for habit tracking",
      "Go microservices backend",
    ],
    githubUrl: "https://github.com/rajvirsingh2/ascend",
    accent: "59, 130, 246",
    period: "March 2026 — June 2026",
  },
  {
    slug: "twaran-app",
    title: "Twaran App",
    tagline: "College Sports Fest Management Android App",
    description: "Led a 4-member team to ship an Android app for college sports fest management with real-time admin panel.",
    longDescription: [
      "Twaran is the official Android application for ABV-IIITM's inter-college sports fest, managing registrations, live scores, schedules, and announcements for hundreds of participants across multiple sports.",
      "As the Team Lead, I managed a 4-member engineering team — from initial wireframes and design mockups through architecture decisions and final release. I defined and maintained the visual design system to ensure consistency across the entire app.",
      "The app is architected using Kotlin with Android SDK and Dagger for dependency injection. A real-time admin panel enables organizers to push live score updates, schedule changes, and announcements that sync instantly to all connected devices.",
      "I prototyped new interactions based on peer and user feedback throughout the development cycle, ensuring the app felt polished and intuitive for first-time users during a high-traffic event.",
    ],
    tech: ["Kotlin", "Android SDK", "Jetpack Compose", "Dagger", "Firebase", "MVVM"],
    highlights: [
      "Led 4-member engineering team end-to-end",
      "Real-time live score & announcement sync",
      "Custom design system from wireframes to release",
      "Dagger DI with Clean Architecture",
    ],
    githubUrl: "https://github.com/rajvirsingh2/Twaran-25",
    accent: "139, 92, 246",
    period: "Jan – Mar 2025",
  },
  {
    slug: "deepfake-detection",
    title: "Deepfake Detection Research",
    tagline: "Continual Learning Framework for Real-Time Detection",
    description: "Thesis: combating evolving deepfake threats via Continual Learning. 98.9% accuracy with A-GEM.",
    longDescription: [
      "This thesis research addresses the critical challenge of catastrophic forgetting in deepfake detection models. As deepfake generation techniques evolve rapidly, traditional models fail when faced with new manipulation methods they weren't trained on.",
      "The framework uses a Continual Learning (CL) paradigm — allowing the detection model to learn new deepfake types without forgetting previously learned ones. This mimics how threats evolve in the real world.",
      "A novel unsupervised pipeline was engineered using UMAP (dimensionality reduction) and HDBSCAN (density-based clustering) to automatically generate a sequence of learning tasks, simulating real-world threat evolution without any manual labeling.",
      "Six CL strategies were benchmarked extensively. A-GEM (Averaged Gradient Episodic Memory) achieved up to 98.9% accuracy in in-domain scenarios with superior cross-domain generalization — meaning it can detect deepfakes it has never seen before.",
    ],
    tech: ["Python", "PyTorch", "UMAP", "HDBSCAN", "Continual Learning", "A-GEM", "BNNs"],
    highlights: [
      "98.9% in-domain detection accuracy",
      "Unsupervised task generation pipeline",
      "6 CL strategies benchmarked",
      "Superior cross-domain generalization",
      "Addresses catastrophic forgetting",
    ],
    liveUrl: "https://drive.google.com/file/d/1x_L1Ws8w4lWdpKbnirJz06-dB_-NoAlY/view?usp=sharing",
    accent: "16, 185, 129",
    period: "May – Aug 2025",
  },
  {
    slug: "kotlin-cli",
    title: "Kotlin CLI Toolkit",
    tagline: "All-in-One Developer Command-Line Toolkit",
    description: "Modular CLI toolkit centralizing developer workflows. Custom HTTP client, code runner, and KV store.",
    longDescription: [
      "Kotlin CLI is a modular command-line tool that centralizes common developer workflows into a single, elegant interface — file system manipulation, networking utilities, security tools, and more.",
      "Built entirely in Kotlin using the Clikt library for CLI parsing and clean architecture principles, the toolkit is designed to be extensible. Each command is a self-contained module that can be developed and tested independently.",
      "Key features include a custom HTTP client for API testing, a polyglot code snippet runner supporting multiple languages, and a persistent Key-Value store for developer-local configuration and secrets.",
      "The tool is containerized with Docker for consistent deployment across environments and uses the Google Gemini API for AI-powered code analysis features.",
    ],
    tech: ["Kotlin", "Clikt", "Docker", "Gradle", "Google Gemini API", "Unix Shell"],
    highlights: [
      "Modular clean architecture CLI",
      "Custom HTTP client for API testing",
      "Polyglot code snippet runner",
      "Persistent KV store",
      "Dockerized deployment",
    ],
    githubUrl: "https://github.com/rajvirsingh2/Kotlin-CLI",
    accent: "234, 179, 8",
    period: "July 2025",
  },
];

export const experiences: Experience[] = [
  {
    role: "Software Development Intern",
    company: "ACASS (Remote)",
    period: "Oct 2025 — Dec 2025",
    bullets: [
      "Engineered a comprehensive Android application using Kotlin, Jetpack Compose, and MVVM/Clean Architecture for global aviation services.",
      "Collaborated with product designers to translate complex requirements into polished UI with consistent visual guidelines.",
      "Implemented real-time data sync with Coroutines + Retrofit, maintaining code quality with TDD (JUnit/Mockito).",
    ],
    tech: ["Kotlin", "Jetpack Compose", "MVVM", "Coroutines", "Retrofit", "JUnit"],
    accent: "59, 130, 246",
  },
  {
    role: "Research Intern",
    company: "ABV-IIITM",
    period: "May 2025 — Aug 2025",
    bullets: [
      "Developed a state-of-the-art framework to combat evolving deepfake threats using Continual Learning.",
      "Engineered a novel unsupervised pipeline with UMAP and HDBSCAN for automatic task generation.",
      "Benchmarked six CL strategies — A-GEM achieved 98.9% accuracy in in-domain scenarios.",
    ],
    tech: ["Python", "PyTorch", "UMAP", "HDBSCAN", "A-GEM"],
    accent: "16, 185, 129",
  },
  {
    role: "Team Lead Intern (Android)",
    company: "ABV-IIITM",
    period: "Jan 2025 — Mar 2025",
    bullets: [
      "Led a 4-member team to design and deliver Twaran, a sports fest management Android app.",
      "Defined visual guidelines and design system; prototyped interactions based on user feedback.",
      "Architected the app with Kotlin, Android SDK, and Dagger for DI with real-time admin panel.",
    ],
    tech: ["Kotlin", "Android SDK", "Dagger", "Firebase", "Figma"],
    accent: "139, 92, 246",
  },
];

export const skills = [
  { name: "Kotlin", category: "mobile" },
  { name: "Jetpack Compose", category: "mobile" },
  { name: "Android SDK", category: "mobile" },
  { name: "Go", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Redis", category: "backend" },
  { name: "Docker", category: "devops" },
  { name: "Kubernetes", category: "devops" },
  { name: "AWS", category: "devops" },
  { name: "Python", category: "ml" },
  { name: "PyTorch", category: "ml" },
  { name: "Git", category: "tools" },
  { name: "Firebase", category: "mobile" },
  { name: "Java", category: "backend" },
  { name: "C++", category: "backend" },
  { name: "REST APIs", category: "backend" },
] as const;
