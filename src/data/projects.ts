export type ProjectCategory = "AI" | "Web" | "Mobile" | "Desktop" | "Systems" | "Health" | "Learning";

export type Project = {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  github: string;
  live?: string;
  accentLabel: string;
  category: ProjectCategory;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Shiori",
    tagline: "AI study companion",
    description:
      "Open-source study companion with Google Classroom sync, Gemini-powered study plans, SRS flashcards, a GPA predictor, AI quizzes, and an MCP server for Claude Code.",
    stack: ["Next.js", "Gemini AI", "MCP", "Vercel"],
    github: "https://github.com/kaorii-ako/Shiori-v1",
    live: "https://shiori-v1.vercel.app",
    accentLabel: "Flagship",
    category: "AI",
    featured: true,
  },
  {
    title: "Axon OS",
    tagline: "Local-AI-native Linux distro",
    description:
      "A privacy-first Linux distribution built on Ubuntu. Spaces-based desktop, an Intent Bar, and an always-on local Ollama engine — no cloud, no tracking, just your machine thinking with you.",
    stack: ["Python", "Ubuntu", "Ollama", "Linux"],
    github: "https://github.com/kaorii-ako/Axon-OS",
    accentLabel: "Systems",
    category: "Systems",
    featured: true,
  },
  {
    title: "Chronicly",
    tagline: "Health tracker for chronic illness",
    description:
      "Open-source health tracker for people managing chronic illness. Log symptoms, medications, appointments, and surface trends — across web and mobile.",
    stack: ["TypeScript", "Next.js", "Mobile"],
    github: "https://github.com/kaorii-ako/chronicly",
    accentLabel: "Health",
    category: "Health",
    featured: true,
  },
  {
    title: "Mondo",
    tagline: "AI practice generator",
    description:
      "Turns any subject into structured practice. Upload notes or a PDF and the AI generates questions across five difficulty levels, grades answers, and gives hints that nudge without giving it away. Wabi-sabi simplicity.",
    stack: ["AI", "Next.js", "PDF"],
    github: "https://github.com/kaorii-ako/Mondo",
    accentLabel: "Learning",
    category: "Learning",
    featured: true,
  },
  {
    title: "OpenNexus",
    tagline: "AI that knows you",
    description:
      "A private, local, free personal AI assistant that learns your context and runs entirely on your own machine.",
    stack: ["Python", "Local LLM", "Privacy"],
    github: "https://github.com/kaorii-ako/OpenNexus",
    accentLabel: "AI",
    category: "AI",
  },
  {
    title: "ClearFrame Fence",
    tagline: "Liquid-glass desktop fence",
    description:
      "A liquid-glass desktop fence overlay for Windows and macOS. Organize apps into frosted, draggable panels that sit transparently over your wallpaper. Built with Electron.",
    stack: ["Electron", "JavaScript", "Desktop"],
    github: "https://github.com/kaorii-ako/ClearFrame-Fence",
    accentLabel: "Desktop",
    category: "Desktop",
  },
  {
    title: "Macchanu Racing",
    tagline: "STEM racing team site",
    description:
      "Team website for Macchanu, a STEM / F1 in Schools racing team — built to showcase the squad, the car, and the engineering behind it.",
    stack: ["JavaScript", "Web", "Design"],
    github: "https://github.com/kaorii-ako/macchanu",
    accentLabel: "Web",
    category: "Web",
  },
  {
    title: "AI with Trading",
    tagline: "ML & genetic neuroevolution trading research",
    description:
      "A stock trading research platform that combines LightGBM/XGBoost signal prediction, REINFORCE policy networks, and genetic neuroevolution to analyze and simulate strategies on Thai stock market data.",
    stack: ["Python", "LightGBM", "Genetic Algorithm", "REINFORCE"],
    github: "https://github.com/kaorii-ako/AI.with.trading",
    accentLabel: "AI",
    category: "AI",
  },
  {
    title: "School Life Widget",
    tagline: "Organizer for students",
    description:
      "A clean home-screen widget for students who like being organized — built with Flutter and Dart.",
    stack: ["Dart", "Flutter", "Mobile"],
    github: "https://github.com/kaorii-ako/School-Life-Widget",
    accentLabel: "Mobile",
    category: "Mobile",
  },
];

export const categories: ProjectCategory[] = [
  "AI",
  "Web",
  "Mobile",
  "Desktop",
  "Systems",
  "Health",
  "Learning",
];
