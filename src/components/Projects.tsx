"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, ProjectCategory, categories } from "@/data/projects";
import { ExternalLink, Github, Eye, ArrowUpRight, Search, X } from "lucide-react";

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const [hovered, setHovered] = useState(false);

  const catColors: Record<string, string> = {
    AI: "#00e5ff",
    Web: "#b388ff",
    Mobile: "#00e676",
    Desktop: "#ff80ab",
    Systems: "#00e5ff",
    Health: "#b388ff",
    Learning: "#00e676",
  };

  return (
    <motion.div
      className="group relative cursor-pointer border rounded-lg p-6 sm:p-8 glow-border"
      style={{
        borderColor: "var(--border)",
        background: "var(--surface)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent line */}
      <div
        className="absolute left-0 top-0 h-px w-full transition-opacity duration-300"
        style={{ background: catColors[project.category] || "var(--accent)", opacity: hovered ? 0.8 : 0.2 }}
      />

      {/* Action buttons */}
      <AnimatePresence>
        {hovered && (
          <div className="absolute right-4 top-4 flex gap-2">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-8 w-8 place-items-center rounded border transition-colors hover:border-[var(--accent)]"
                style={{ borderColor: "var(--border)", background: "var(--elevated)" }}
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
              >
                <Github className="h-3.5 w-3.5" style={{ color: "var(--text-2)" }} />
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-8 w-8 place-items-center rounded border transition-colors hover:border-[var(--accent)]"
                style={{ borderColor: "var(--border)", background: "var(--elevated)" }}
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ delay: 0.05 }}
              >
                <Eye className="h-3.5 w-3.5" style={{ color: "var(--text-2)" }} />
              </motion.a>
            )}
          </div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: catColors[project.category] || "var(--accent)" }}
            />
            <span className="text-[10px] uppercase tracking-widest font-semibold" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
              {project.accentLabel}
            </span>
          </div>

          <h3
            className="text-2xl sm:text-3xl font-bold transition-colors"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-1)" }}
          >
            {project.title}
          </h3>
          <p className="mt-1 text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
            {project.tagline}
          </p>
          <p className="mt-3 max-w-xl text-sm" style={{ color: "var(--text-2)" }}>
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 sm:justify-end">
          {project.stack.map((s) => (
            <span
              key={s}
              className="border px-2.5 py-1 text-[10px] uppercase tracking-wider"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-3)",
                fontFamily: "var(--font-mono)",
                borderRadius: "var(--radius)",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 right-4 transition-opacity" style={{ opacity: hovered ? 0.6 : 0 }}>
        <ArrowUpRight className="h-4 w-4" style={{ color: "var(--accent)" }} />
      </div>
    </motion.div>
  );
}

function FilterPill({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-full px-4 py-1.5 text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer"
      style={{
        fontFamily: "var(--font-mono)",
        background: isActive ? "var(--accent)" : "transparent",
        color: isActive ? "var(--bg)" : "var(--text-2)",
        border: isActive ? "1px solid var(--accent)" : "1px solid var(--border)",
      }}
    >
      {label}
    </button>
  );
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | null>(null);
  const [search, setSearch] = useState("");

  const filtered = projects.filter((p) => {
    const matchesCategory = !selectedCategory || p.category === selectedCategory;
    const q = search.toLowerCase();
    const matchesSearch = !q || p.title.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const featured = filtered.filter((p) => p.featured);
  const secondary = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28">
      <div className="container">
        <motion.span
          className="section-tag"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.span>

        <motion.div
          className="mt-8 flex flex-wrap items-end justify-between gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <h2 className="heading-xl">
            Things I&apos;ve <span className="underline decoration-[var(--accent)] decoration-2 underline-offset-4">built</span>
          </h2>
          <a
            href="https://github.com/kaorii-ako?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--text-3)" }}
          >
            All repos
            <ExternalLink className="h-3 w-3 opacity-50" />
          </a>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-wrap gap-2">
            <FilterPill label="All" isActive={selectedCategory === null} onClick={() => setSelectedCategory(null)} />
            {categories.map((cat) => (
              <FilterPill key={cat} label={cat} isActive={selectedCategory === cat} onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)} />
            ))}
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: "var(--text-3)" }} />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg glass py-2.5 pl-10 pr-10 text-sm outline-none sm:w-56 focus:border-[var(--accent)] transition-colors"
              style={{ color: "var(--text-1)", border: "1px solid var(--border)" }}
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" style={{ color: "var(--text-3)" }}>
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Featured */}
        {featured.length > 0 && (
          <div className="mt-14">
            <p className="mb-6 text-[10px] uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>Featured work</p>
            <div className="grid gap-4 md:grid-cols-2">
              {featured.map((p, idx) => (
                <ProjectCard key={p.title} project={p} index={idx} />
              ))}
            </div>
          </div>
        )}

        {/* Secondary */}
        {secondary.length > 0 && (
          <div className="mt-8">
            <div className="mb-6 h-px w-full" style={{ background: "var(--border)" }} />
            <div className="grid gap-4 md:grid-cols-2">
              {secondary.map((p, idx) => (
                <ProjectCard key={p.title} project={p} index={idx + 10} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
