export const site = {
  name: "Tawin Tangsukson",
  nick: "Kao",
  fullNick: "Tawin “Kao” Tangsukson",
  tagline: "I build the things that make ideas move — in code, in silicon, and in airflow.",
  promise:
    "I design and ship real systems across three layers: hardware you can hold, software that thinks, and the aerodynamics that make a race car faster. Year 10, Bangkok — F1 in Schools aero lead, self-taught developer, nine shipped projects.",
  role: "Developer. Maker. F1 in Schools Aero Lead.",
  location: "Bangkok, Thailand",
  email: "79807@student.amnuaysilpa.ac.th",
  url: "https://kaorii-ako.vercel.app",
  roles: [
    "Full-Stack Developer",
    "AI Tool Builder",
    "PCB & CAD Designer",
    "CFD / Aero Engineer",
  ],
  socials: {
    github: "https://github.com/kaorii-ako",
    linkedin: "",
    x: "",
    discord: "",
  },
  stats: [
    { value: "9", label: "Shipped projects" },
    { value: "3", label: "Disciplines" },
    { value: "1", label: "Linux distro" },
  ],
  nav: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
};

export const pillars = [
  {
    tag: "01",
    title: "Hardware / PCB + CAD",
    short: "Physical things, designed and fabricated.",
    body: "Schematic capture, PCB layout and routing, enclosure design in CAD, and getting boards from design file to soldered, working hardware.",
    stack: ["KiCad", "Fusion 360", "Soldering", "Firmware"],
    accent: "var(--accent-2)",
  },
  {
    tag: "02",
    title: "Software / AI tooling",
    short: "Full-stack apps and AI-native systems.",
    body: "Next.js products, local-LLM tooling, and an AI-native Linux distro — built to be used daily, not demoed once.",
    stack: ["TypeScript", "Python", "Next.js", "Local LLMs"],
    accent: "var(--accent)",
  },
  {
    tag: "03",
    title: "CFD / Aero engineering",
    short: "Airflow, simulated and optimized.",
    body: "Aero lead for a student F1 in Schools race car — CFD simulation in ANSYS Fluent to iterate front-wing and body geometry against drag and downforce targets.",
    stack: ["ANSYS Fluent", "CFD", "CAD", "F1 in Schools"],
    accent: "var(--accent-2)",
  },
];

export const howIWork = [
  {
    q: "What's the actual stack?",
    a: "TypeScript/Next.js and Python day to day, KiCad + Fusion 360 for hardware, ANSYS Fluent for CFD. Linux (Ubuntu-based, my own distro) as the daily driver. Git for everything.",
  },
  {
    q: "How do you approach a new problem?",
    a: "Same loop whether it's a PCB or a product: define the constraint, build the smallest thing that tests it, measure, iterate. For the race car that's CAD → CFD → read the numbers → change the geometry. For software it's ship → use it myself → fix what's actually annoying.",
  },
  {
    q: "Are you open to collabs, internships, or research?",
    a: "Yes — especially anything that mixes hardware and software, or applies ML to a physical/engineering problem. I reply to real emails, not cold pitches.",
  },
  {
    q: "What are you not available for?",
    a: "Freelance work-for-hire. I'm a student building things I care about, not running a shop.",
  },
];
