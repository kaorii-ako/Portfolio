"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { BookOpen, Wrench, Rocket, GraduationCap } from "lucide-react";

const subjects = [
  { name: "DT: Electronics", hot: false, detail: "Circuit design, PCB fabrication, microcontroller programming" },
  { name: "Business & Enterprise", hot: false, detail: "Business models, marketing strategy, financial planning" },
  { name: "Mathematics", hot: true, detail: "Advanced algebra, calculus, statistics & reasoning" },
  { name: "English", hot: false, detail: "Academic writing, literary analysis, critical thinking" },
  { name: "Sciences", hot: true, detail: "Physics, Chemistry & Biology — core principles and lab skills" },
  { name: "Thai", hot: false, detail: "Thai language, literature, cultural studies" },
];

const sideItems = [
  { label: "Self-taught Developer", sub: "Since age 12", icon: BookOpen },
  { label: "F1 in Schools", sub: "Macchanu Racing Team", icon: Wrench },
  { label: "9 Projects Shipped", sub: "All open-source", icon: Rocket },
];

export default function Education() {
  const [hoveredSubject, setHoveredSubject] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="education" className="relative pt-20 pb-28" ref={ref}>
      <div className="container">
        <motion.div
          className="mb-14 h-px w-full"
          style={{ background: "linear-gradient(90deg, var(--accent), var(--purple), var(--accent))" }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7 }}
        />

        <motion.span
          className="section-tag"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Education
        </motion.span>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="heading-xl">
            Academic <span className="shimmer">track</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_260px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <div className="border-t pt-6" style={{ borderColor: "var(--border)" }}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5" style={{ color: "var(--text-3)" }} />
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: "var(--text-1)" }}>Amnuay Silpa School</h3>
                    <p className="text-[10px] uppercase tracking-widest mt-0.5" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
                      Bilingual Program · 2020 – present
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              {subjects.map((s) => (
                <div
                  key={s.name}
                  className="border-t py-3 transition-colors"
                  style={{ borderColor: "var(--border)" }}
                  onMouseEnter={() => setHoveredSubject(s.name)}
                  onMouseLeave={() => setHoveredSubject(null)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium transition-colors hover:text-[var(--accent)]" style={{ color: "var(--text-1)" }}>{s.name}</span>
                    {s.hot && (
                      <span
                        className="text-[9px] uppercase tracking-wider px-1.5 py-0.5"
                        style={{ color: "var(--accent)", background: "var(--accent-soft)", borderRadius: "var(--radius)" }}
                      >
                        strength
                      </span>
                    )}
                  </div>
                  <AnimatePresence>
                    {hoveredSubject === s.name && (
                      <motion.p
                        className="mt-1 text-xs"
                        style={{ color: "var(--text-2)" }}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {s.detail}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="border-t" style={{ borderColor: "var(--border)" }} />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-end gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {sideItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="border-t pt-3" style={{ borderColor: "var(--border)" }}>
                  <div className="flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5" style={{ color: "var(--text-3)" }} />
                    <span className="text-sm font-medium" style={{ color: "var(--text-1)" }}>{item.label}</span>
                  </div>
                  <p className="text-[10px] uppercase tracking-widest mt-1 ml-5.5" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
                    {item.sub}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
