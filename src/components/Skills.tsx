"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Brain, Layers, Wrench } from "lucide-react";

const groups = [
  { title: "Languages", items: ["TypeScript", "Python", "JavaScript", "Dart", "C / C++", "Bash"], icon: Code },
  { title: "AI / ML", items: ["Gemini", "Claude", "Ollama", "Local LLMs", "MCP", "RAG"], icon: Brain },
  { title: "Frameworks", items: ["Next.js", "React", "Flutter", "Electron", "Node.js", "Tailwind"], icon: Layers },
  { title: "Tooling", items: ["Git", "Linux", "Vercel", "Docker", "SQLite", "Figma"], icon: Wrench },
];

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState(0);

  return (
    <section id="skills" className="relative pt-20 pb-28">
      <div className="container">
        <motion.div
          className="mb-14 h-px w-full"
          style={{ background: "linear-gradient(90deg, var(--accent), var(--purple), var(--accent))" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        <motion.span
          className="section-tag"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.span>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <h2 className="heading-xl">
            What I <span className="shimmer">use</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="mt-10 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {groups.map((g, i) => {
            const Icon = g.icon;
            return (
              <button
                key={g.title}
                onClick={() => setActiveGroup(i)}
                className="inline-flex items-center gap-2 rounded border px-4 py-2 text-xs font-medium transition-all duration-300 cursor-pointer"
                style={{
                  fontFamily: "var(--font-mono)",
                  borderColor: activeGroup === i ? "var(--accent)" : "var(--border)",
                  color: activeGroup === i ? "var(--accent)" : "var(--text-2)",
                  background: activeGroup === i ? "var(--accent-soft)" : "transparent",
                  boxShadow: activeGroup === i ? "0 0 12px var(--accent-glow)" : "none",
                }}
              >
                <Icon className="h-3.5 w-3.5" />
                {g.title}
              </button>
            );
          })}
        </motion.div>

        {/* Pills */}
        <div className="mt-8 min-h-[120px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup}
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {groups[activeGroup].items.map((item, i) => (
                <motion.span
                  key={item}
                  className="border px-3.5 py-2 text-xs tracking-wide transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text-2)",
                    fontFamily: "var(--font-mono)",
                    borderRadius: "var(--radius)",
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
