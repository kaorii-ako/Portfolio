"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";

const Hero3D = dynamic(() => import("./three/Hero3D"), { ssr: false });

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="top" className="relative flex min-h-[100dvh] flex-col items-center justify-center px-5 pb-20 pt-28 text-center">
      {!reduce && (
        <div className="pointer-events-none mb-8 h-24 w-24 sm:h-32 sm:w-32" aria-hidden>
          <Hero3D />
        </div>
      )}

      <motion.p className="section-tag" {...fade(0.1)}>
        {site.location} · {site.role}
      </motion.p>

      <motion.h1
        className="mt-5 max-w-4xl font-semibold"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3rem, 9vw, 6.5rem)",
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
        {...fade(0.2)}
      >
        I build things
        <br />
        that move.
      </motion.h1>

      <motion.p
        className="mt-8 max-w-xl text-base sm:text-xl"
        style={{ color: "var(--text-2)" }}
        {...fade(0.35)}
      >
        {site.promise}
      </motion.p>

      <motion.div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2" {...fade(0.5)}>
        <a href="/projects" className="link-arrow">See the projects &rsaquo;</a>
        <a href="/contact" className="link-arrow">Get in touch &rsaquo;</a>
      </motion.div>
    </section>
  );
}
