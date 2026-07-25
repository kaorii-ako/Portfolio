"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { howIWork } from "@/data/site";
import { Plus } from "lucide-react";

export default function HowIWork() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="how-i-work" className="relative py-24 sm:py-28">
      <div className="container-narrow">
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
          How I work
        </motion.span>

        <motion.h2
          className="heading-lg mt-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Stack, process, availability.
        </motion.h2>

        <div className="mt-12 flex flex-col">
          {howIWork.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-t" style={{ borderColor: "var(--border)" }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium sm:text-lg" style={{ color: "var(--text-1)", fontFamily: "var(--font-display)" }}>
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                    style={{ color: "var(--accent)" }}
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm leading-relaxed sm:text-base" style={{ color: "var(--text-2)" }}>
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          <div className="border-t" style={{ borderColor: "var(--border)" }} />
        </div>
      </div>
    </section>
  );
}
