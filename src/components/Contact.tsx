"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Mail, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { label: "GitHub", href: site.socials.github, icon: Github, desc: "Check out my code" },
  { label: "Email", href: `mailto:${site.email}`, icon: Mail, desc: "Send me a message" },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="relative pt-20 pb-28">
      <div className="container">
        <motion.div
          className="mb-14 h-px w-full"
          style={{ background: "linear-gradient(90deg, var(--accent), var(--purple), var(--accent))" }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
        />

        <motion.span
          className="section-tag"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.span>

        <motion.h2
          className="heading-lg mt-8"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          Not looking for freelance.
          <br />
          <span style={{ color: "var(--text-1)" }}>Looking for interesting problems.</span>
        </motion.h2>

        <motion.p
          className="mt-6 max-w-md text-sm sm:text-base"
          style={{ color: "var(--text-2)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          If you have one, email me.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {links.map((l) => {
            const Icon = l.icon;
            return (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-t py-4 transition-colors hover:border-[var(--border-hi)]"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4" style={{ color: "var(--text-2)" }} />
                  <div>
                    <span className="text-sm font-medium transition-colors group-hover:text-[var(--accent)]" style={{ color: "var(--text-1)" }}>
                      {l.label}
                    </span>
                    <span className="ml-2 text-xs" style={{ color: "var(--text-3)" }}>{l.desc}</span>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 transition-all opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                  style={{ color: "var(--accent)" }}
                />
              </a>
            );
          })}
          <div className="border-t" style={{ borderColor: "var(--border)" }} />
        </motion.div>

        <motion.div
          className="mt-8 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="relative inline-block h-2 w-2 rounded-full" style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent-glow)" }}>
            <span className="absolute inset-[-4px] rounded-full animate-ping" style={{ background: "var(--accent)", opacity: 0.4 }} />
          </span>
          <span className="text-[10px] uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
            Usually responds within 24h
          </span>
        </motion.div>
      </div>
    </section>
  );
}
