"use client";

import { motion } from "framer-motion";
import { proofProjects } from "@/data/projects";
import { ArrowUpRight, Github } from "lucide-react";

export default function Proof() {
  return (
    <section id="proof" className="relative py-24 sm:py-28">
      <div className="container">
        <motion.div
          className="mb-14 h-px w-full"
          style={{ background: "var(--border)" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        />

        <motion.span
          className="section-tag"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Proof, not testimonials
        </motion.span>

        <motion.div
          className="mt-6 flex flex-wrap items-end justify-between gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <h2 className="heading-lg max-w-xl">Four things I&apos;ve actually shipped.</h2>
          <a
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--text-3)" }}
          >
            All projects
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
          </a>
        </motion.div>

        <div className="mt-12 flex flex-col">
          {proofProjects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.live || p.github || "/projects"}
              target={p.live || p.github ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group grid grid-cols-1 gap-3 border-t py-6 transition-colors hover:border-[var(--border-hi)] sm:grid-cols-[1fr_1.6fr_auto] sm:items-center sm:gap-8"
              style={{ borderColor: "var(--border)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 sm:justify-start">
                  <span className="mono-label" style={{ color: "var(--text-3)" }}>{p.accentLabel}</span>
                  {p.github && <Github className="h-3.5 w-3.5 sm:hidden" style={{ color: "var(--text-3)" }} />}
                </div>
                <h3
                  className="mt-1 text-xl font-semibold transition-colors group-hover:text-[var(--accent)]"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-1)" }}
                >
                  {p.title}
                </h3>
              </div>

              <p className="text-sm" style={{ color: "var(--text-2)" }}>
                {p.proofStat}
              </p>

              <div className="hidden items-center gap-3 sm:flex sm:justify-end">
                {p.github && <Github className="h-4 w-4" style={{ color: "var(--text-3)" }} />}
                <ArrowUpRight
                  className="h-4 w-4 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                  style={{ color: "var(--accent)" }}
                />
              </div>
            </motion.a>
          ))}
          <div className="border-t" style={{ borderColor: "var(--border)" }} />
        </div>
      </div>
    </section>
  );
}
