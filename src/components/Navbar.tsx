"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container">
        <nav
          className="mt-4 flex items-center justify-between rounded-lg border px-4 py-3 transition-all duration-500"
          style={{
            borderColor: scrolled ? "var(--border)" : "transparent",
            backgroundColor: scrolled ? "rgba(6, 8, 13, 0.85)" : "transparent",
            backdropFilter: scrolled ? "blur(20px) saturate(1.5)" : "blur(0px)",
            WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.5)" : "blur(0px)",
          }}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <div
              className="grid h-8 w-8 place-items-center font-bold text-xs"
              style={{
                background: "var(--accent)",
                color: "var(--bg)",
                borderRadius: "var(--radius)",
              }}
            >
              {site.nick[0]}
            </div>
            <span className="text-sm font-medium" style={{ color: "var(--text-2)" }}>
              {site.nick}
            </span>
          </a>

          <div className="hidden items-center gap-1 sm:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-xs font-medium transition-colors duration-200 hover:text-[var(--accent)]"
                style={{ color: "var(--text-2)" }}
              >
                {l.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden p-1"
            style={{ color: "var(--text-2)" }}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              className="sm:hidden mt-2 rounded-lg border bg-[var(--bg)] p-4"
              style={{ borderColor: "var(--border)" }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium transition-colors hover:text-[var(--accent)]"
                  style={{ color: "var(--text-2)" }}
                >
                  {l.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
