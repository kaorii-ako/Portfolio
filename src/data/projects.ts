export type ProjectCategory =
  | "AI"
  | "Web"
  | "Mobile"
  | "Desktop"
  | "Systems"
  | "Health"
  | "Learning"
  | "Hardware"
  | "Aero";

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
  /** Surfaced in the home page "proof" strip, in this priority order. */
  proof?: boolean;
  /** One concrete, checkable stat/fact shown in the proof strip. */
  proofStat?: string;
  /** Set false when copy/stats are placeholders pending real numbers — flags it for a content pass. */
  verified?: boolean;
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
    proof: true,
    proofStat: "Google Classroom sync · Gemini study plans · MCP server for Claude Code",
    verified: true,
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
    proof: true,
    proofStat: "7-agent AI mesh running as systemd services, fully local — no cloud calls",
    verified: true,
  },
  {
    title: "F1 in Schools — Aero Package",
    tagline: "CFD-driven race car aerodynamics",
    description:
      "Aero lead for Macchanu Racing's F1 in Schools car. Ran 23 CFD iterations in ANSYS Fluent on front-wing and body geometry, cutting drag 36% and lifting downforce 17% across the revision cycle.",
    stack: ["ANSYS Fluent", "CFD", "CAD", "F1 in Schools"],
    github: "https://github.com/kaorii-ako/macchanu",
    accentLabel: "Aero",
    category: "Aero",
    featured: true,
    proof: true,
    proofStat: "23 CFD iterations in ANSYS Fluent — 36% drag reduction, 17% downforce gain",
    verified: true,
  },
  {
    title: "QBoard",
    tagline: "Hand-wired 6-key macropad",
    description:
      "A custom 6-key macropad built from scratch for Hack Club's Stardance/Hackpad program. Schematic and PCB laid out in KiCad (autorouted with FreeRouting, GND copper zone on B.Cu), running QMK on a Seeed XIAO RP2040. Hot-swap MX switches in a 2×3 matrix, wired across rows D0/D1 and columns D2/D3/D6 to fit the XIAO's 11-pin GPIO budget. 0.91\" I2C OLED, Alps EC11E rotary encoder. Case modeled separately in Fusion 360, bridged from the KiCad board outline via STEP/DXF export.",
    stack: ["KiCad", "QMK", "XIAO RP2040", "Fusion 360"],
    github: "https://github.com/kaorii-ako/QBoard",
    accentLabel: "Hardware",
    category: "Hardware",
    featured: true,
    proof: true,
    proofStat: "6-key hot-swap matrix, QMK on XIAO RP2040, OLED + rotary encoder — KiCad to Fusion 360",
    verified: true,
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
  },
  {
    title: "Mondo",
    tagline: "AI practice generator",
    description:
      "Turns any subject into structured practice. Upload notes or a PDF and the AI generates questions across five difficulty levels, grades answers, and gives hints that nudge without giving it away.",
    stack: ["AI", "Next.js", "PDF"],
    github: "https://github.com/kaorii-ako/Mondo",
    accentLabel: "Learning",
    category: "Learning",
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
  "Hardware",
  "Aero",
  "Health",
  "Learning",
];

export const proofProjects = projects.filter((p) => p.proof);
