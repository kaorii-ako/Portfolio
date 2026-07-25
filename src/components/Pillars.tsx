"use client";

import { motion } from "framer-motion";
import { pillars } from "@/data/site";

export default function Pillars() {
  return (
    <section id="pillars" className="relative py-24 sm:py-28">
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
          What I build
        </motion.span>

        <motion.h2
          className="heading-lg mt-6 max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Three disciplines, one habit of shipping.
        </motion.h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border sm:grid-cols-3" style={{ borderColor: "var(--border)", background: "var(--border)" }}>
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="group relative flex flex-col gap-5 p-7 sm:p-8"
              style={{ background: "var(--surface)" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div
                className="absolute inset-x-0 top-0 h-[2px] scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                style={{ background: p.accent, transformOrigin: "left" }}
                aria-hidden
              />
              <span className="mono-label" style={{ color: p.accent }}>
                {p.tag}
              </span>
              <h3 className="heading-md">{p.title}</h3>
              <p className="text-sm" style={{ color: "var(--text-2)" }}>{p.body}</p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="border px-2.5 py-1 text-[10px] uppercase tracking-wider"
                    style={{ borderColor: "var(--border)", color: "var(--text-3)", fontFamily: "var(--font-mono)", borderRadius: "var(--radius)" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
