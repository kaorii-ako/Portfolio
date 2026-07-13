"use client";

import { site } from "@/data/site";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t py-10 relative" style={{ borderColor: "var(--border)" }}>
      <div
        className="absolute left-0 top-0 h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, var(--accent), var(--purple), var(--accent), transparent)" }}
        aria-hidden
      />
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div
              className="grid h-7 w-7 place-items-center text-[10px] font-bold"
              style={{ background: "var(--accent)", color: "var(--bg)", borderRadius: "var(--radius)" }}
            >
              {site.nick[0]}
            </div>
            <p className="text-xs font-medium" style={{ color: "var(--text-2)" }}>{site.name}</p>
          </div>

          <div className="flex items-center gap-5">
            <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest transition-colors hover:text-[var(--accent)]" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
              GitHub
            </a>
            <a href={`mailto:${site.email}`} className="text-[10px] uppercase tracking-widest transition-colors hover:text-[var(--accent)]" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
              Email
            </a>
            <button onClick={scrollToTop} className="text-[10px] uppercase tracking-widest transition-colors hover:text-[var(--accent)] cursor-pointer flex items-center gap-1" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
              Top
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>

        <div className="mt-6 h-px w-full" style={{ background: "var(--border)" }} />

        <div className="mt-4 text-center">
          <p className="text-[9px] uppercase tracking-[0.3em]" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)", opacity: 0.5 }}>
            {site.name} · 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
