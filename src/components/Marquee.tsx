"use client";

const items = [
  "TypeScript", "React", "Next.js", "Python", "Linux", "AI", "Flutter",
  "Open Source", "Node.js", "Docker", "Gemini", "MCP", "Ollama",
  "TypeScript", "React", "Next.js", "Python", "Linux", "AI", "Flutter",
  "Open Source", "Node.js", "Docker", "Gemini", "MCP", "Ollama",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-6 border-y" style={{ borderColor: "var(--border)" }}>
      <div className="flex gap-8 animate-marquee" style={{ width: "max-content" }}>
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-sm tracking-wide whitespace-nowrap"
            style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
          >
            {item}
            <span className="ml-8" style={{ color: "var(--accent)" }}>×</span>
          </span>
        ))}
      </div>
    </div>
  );
}
