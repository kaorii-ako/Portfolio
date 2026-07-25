"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { ArrowRight, Mail } from "lucide-react";

const Hero3D = dynamic(() => import("./three/Hero3D"), { ssr: false });

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />

      <div className="pointer-events-none absolute -right-[22%] -top-[2%] h-[300px] w-[300px] opacity-[0.18] sm:right-[-4%] sm:top-1/2 sm:h-[640px] sm:w-[640px] sm:-translate-y-1/2 sm:opacity-90">
        <div className="h-full w-full [&>div]:h-full [&>div]:w-full pointer-events-auto">
          <Hero3D />
        </div>
      </div>

      <div className="container relative py-20">
        <div className="max-w-xl">
          <motion.p
            className="section-tag"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {site.location} · {site.role}
          </motion.p>

          <motion.h1
            className="heading-xl mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            I build things
            <br />
            that <span style={{ color: "var(--accent)" }}>move</span>.
          </motion.h1>

          <motion.p
            className="mt-7 max-w-md text-base sm:text-lg"
            style={{ color: "var(--text-2)" }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            {site.promise}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:shadow-[0_0_30px_var(--accent-glow)]"
              style={{ background: "var(--accent)", color: "var(--bg)" }}
            >
              See the projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded border px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              style={{ borderColor: "var(--border)", color: "var(--text-2)" }}
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
          </motion.div>

          <motion.div
            className="mt-16 flex gap-10 sm:gap-12"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            {site.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-semibold" style={{ fontFamily: "var(--font-display)", color: "var(--text-1)" }}>
                  {stat.value}
                </p>
                <p className="mono-label mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
