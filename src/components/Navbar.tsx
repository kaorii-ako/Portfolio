"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 sm:hidden"
            style={{ background: "rgba(10, 10, 12, 0.6)", backdropFilter: "blur(2px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            aria-hidden
          />
        )}
      </AnimatePresence>
      <div className="container relative z-10">
        <nav
          className="mt-4 flex items-center justify-between rounded-lg border px-4 py-3 transition-all duration-500"
          style={{
            borderColor: scrolled ? "var(--border)" : "transparent",
            backgroundColor: scrolled ? "rgba(10, 10, 12, 0.82)" : "transparent",
            backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "blur(0px)",
            WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "blur(0px)",
          }}
        >
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className="grid h-8 w-8 place-items-center text-xs font-bold"
              style={{
                background: "var(--accent)",
                color: "var(--bg)",
                borderRadius: "var(--radius)",
                fontFamily: "var(--font-display)",
              }}
            >
              {site.nick[0]}
            </div>
            <span className="text-sm font-medium" style={{ color: "var(--text-1)", fontFamily: "var(--font-display)" }}>
              {site.nick}
            </span>
          </Link>

          <div className="hidden items-center gap-1 sm:flex">
            {site.nav.map((l) => {
              const active = l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="relative px-3 py-2 text-xs font-medium transition-colors duration-200"
                  style={{ color: active ? "var(--text-1)" : "var(--text-2)" }}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-[1px] h-px"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                </Link>
              );
            })}
            <a
              href="/contact"
              className="ml-2 inline-flex items-center gap-1.5 rounded border px-3.5 py-1.5 text-xs font-medium transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              style={{ borderColor: "var(--border)", color: "var(--text-1)" }}
            >
              Get in touch
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="sm:hidden p-1"
            style={{ color: "var(--text-2)" }}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              className="sm:hidden mt-2 rounded-lg border p-4"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {site.nav.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block py-3 text-sm font-medium transition-colors"
                  style={{ color: pathname === l.href ? "var(--accent)" : "var(--text-2)" }}
                >
                  {l.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
