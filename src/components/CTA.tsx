"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type CTAProps = {
  heading?: string;
  label?: string;
  href?: string;
};

export default function CTA({
  heading = "See it, don't take my word for it.",
  label = "See the projects",
  href = "/projects",
}: CTAProps) {
  return (
    <section className="relative py-28 sm:py-32">
      <div className="container-narrow text-center">
        <motion.h2
          className="heading-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {heading}
        </motion.h2>
        <motion.div
          className="mt-10 flex items-center justify-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <a
            href={href}
            className="inline-flex items-center gap-2 rounded px-7 py-3.5 text-sm font-medium transition-all duration-300"
            style={{ background: "var(--accent)", color: "var(--bg)" }}
          >
            {label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
