"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { Github, Mail, ArrowDown } from "lucide-react";

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const getDelay = () => {
      if (isDeleting) return 30 + Math.random() * 40;
      if (text === currentWord) return 1500 + Math.random() * 1000;
      return 60 + Math.random() * 80;
    };

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((i) => i + 1);
      } else {
        setText(
          isDeleting
            ? currentWord.slice(0, text.length - 1)
            : currentWord.slice(0, text.length + 1)
        );
      }
    }, getDelay());

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return text;
}

export default function Hero() {
  const typedText = useTyping(site.roles);

  return (
    <section id="top" className="relative flex min-h-[100dvh] flex-col justify-center">
      <div className="container py-32">
        {/* Floating orbs */}
        <div
          className="absolute top-[15%] right-[10%] h-[300px] w-[300px] rounded-full opacity-10 pointer-events-none"
          style={{
            background: "var(--accent)",
            filter: "blur(100px)",
            animation: "float-slow 8s ease-in-out infinite",
          }}
          aria-hidden
        />
        <div
          className="absolute bottom-[25%] left-[5%] h-[200px] w-[200px] rounded-full opacity-8 pointer-events-none"
          style={{
            background: "var(--purple)",
            filter: "blur(80px)",
            animation: "float 6s ease-in-out infinite",
          }}
          aria-hidden
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />

        {/* Tag */}
        <motion.p
          className="section-tag"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {site.location}
        </motion.p>

        {/* Name with glitch */}
        <motion.h1
          className="heading-xl mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="glitch" data-text={site.name.split(" ")[0]}>
            {site.name.split(" ")[0]}
          </span>
          <br />
          <span className="shimmer">
            {site.name.split(" ")[1]}
          </span>
        </motion.h1>

        {/* Role typing */}
        <motion.div
          className="mt-6 flex items-center gap-1.5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span
            className="text-sm"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-2)" }}
          >
            {typedText}
          </span>
          <span
            className="cursor-blink inline-block"
            style={{ height: "1.1em", verticalAlign: "text-bottom" }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="mt-8 max-w-md text-base sm:text-lg"
          style={{ color: "var(--text-2)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {site.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:shadow-[0_0_30px_var(--accent-glow)]"
            style={{
              borderColor: "var(--accent)",
              background: "var(--accent)",
              color: "var(--bg)",
            }}
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded border px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:border-[var(--accent)]"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-2)",
            }}
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 flex gap-12"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          {site.stats.map((stat) => (
            <div key={stat.label}>
              <p
                className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-1)" }}
              >
                {stat.value}
              </p>
              <p
                className="mt-1 text-[10px] uppercase tracking-widest"
                style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4" style={{ color: "var(--text-3)" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
