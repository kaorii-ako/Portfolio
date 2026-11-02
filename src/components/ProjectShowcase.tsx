"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";

export default function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  if (!project.image) return null;

  return (
    <section
      className="px-5 py-24 text-center sm:py-32"
      style={{ background: index % 2 === 0 ? "var(--bg)" : "var(--surface)" }}
    >
      <div className="mx-auto max-w-5xl">
        <p className="section-tag">{project.category}</p>
        <h2
          className="mt-3 font-semibold"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          {project.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-xl sm:text-2xl" style={{ color: "var(--text-2)" }}>
          {project.tagline}
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-8">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-arrow">
              Visit site &rsaquo;
            </a>
          )}
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-arrow">
            View code &rsaquo;
          </a>
        </div>

        <motion.div
          className="mt-14 overflow-hidden rounded-2xl border"
          style={{ borderColor: "var(--border-hi)", boxShadow: "0 24px 60px -20px rgba(0,0,0,0.6)" }}
          initial={{ opacity: 0, scale: reduce ? 1 : 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            width={1600}
            height={1000}
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="block h-auto w-full"
            priority={index === 0}
          />
        </motion.div>
      </div>
    </section>
  );
}
