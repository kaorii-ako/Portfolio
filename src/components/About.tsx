"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Zap, Rocket, Target } from "lucide-react";

const timeline = [
  { year: "2022", title: "Started coding", desc: "First lines of Python at age 12.", icon: Code },
  { year: "2023", title: "F1 in Schools", desc: "Joined Macchanu Racing as aero lead. CAD, CFD simulation, front-wing iteration.", icon: Zap },
  { year: "2024", title: "Axon OS", desc: "Shipped a Linux distro with a 7-agent local AI mesh.", icon: Rocket },
  { year: "2026", title: "Now", desc: "Year 10, Bangkok. Nine projects shipped across software, hardware, and aero. Still building.", icon: Target },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="relative pt-28 pb-32">
      <div className="container">
        <motion.div
          className="mb-14 h-px w-full"
          style={{ background: "var(--border)" }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.span
          className="section-tag"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.span>

        <div className="mt-10 grid gap-16 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-xl">Kao.</h2>
            </motion.div>

            <div className="mt-8 space-y-4 text-sm sm:text-base" style={{ color: "var(--text-2)" }}>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}>
                I&apos;m the aero lead for Macchanu Racing, a student F1 in Schools team. I run CFD simulations in ANSYS Fluent to optimize front-wing and body geometry — every CAD revision gets checked against the sim before it&apos;s cut.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
                I built my own Linux distro. Not a reskin — Axon OS runs a 7-agent AI mesh as systemd services, fully local, no cloud calls, improving the OS while it runs.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }}>
                I&apos;m in Year 10, Bangkok. None of this is a side project — it&apos;s the main thing. Nine shipped, more in progress, across software, hardware, and aero.
              </motion.p>
            </div>

            <motion.blockquote
              className="mt-12 border-l-2 pl-6 text-sm italic"
              style={{ borderColor: "var(--accent)", color: "var(--text-1)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p>&ldquo;Keeping real-time class context in the AI without exposing student data.&rdquo;</p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}>
                — On building Shiori
              </p>
            </motion.blockquote>
          </div>

          <div className="flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6">
                <div className="border-t pt-4" style={{ borderColor: "var(--border)" }}>
                  <span className="mono-label">Journey</span>
                  <div className="mt-4 flex flex-col">
                    {timeline.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.year} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div
                              className="h-3 w-3 rounded-full border-2"
                              style={{ borderColor: "var(--accent)", boxShadow: "0 0 8px var(--accent-glow)" }}
                            />
                            {i < timeline.length - 1 && (
                              <div
                                className="w-px flex-1"
                                style={{ background: "linear-gradient(180deg, var(--accent) 0%, var(--border) 100%)" }}
                              />
                            )}
                          </div>
                          <div className="pb-5 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="mono-label">{item.year}</span>
                              <Icon className="h-3 w-3" style={{ color: "var(--accent)" }} />
                            </div>
                            <h4 className="text-sm font-semibold mt-0.5" style={{ color: "var(--text-1)" }}>{item.title}</h4>
                            <p className="text-xs mt-1" style={{ color: "var(--text-2)" }}>{item.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t pt-4" style={{ borderColor: "var(--border)" }}>
                  <span className="mono-label">Focus</span>
                  <p className="mt-2 text-sm" style={{ color: "var(--text-1)" }}>Targeting computer science / engineering at a top university</p>
                </div>

                <div className="border-t pt-4" style={{ borderColor: "var(--border)" }}>
                  <span className="mono-label">Interests</span>
                  <p className="mt-2 text-sm" style={{ color: "var(--text-1)" }}>F1 in Schools, Taekwondo, Linux internals, PCB design</p>
                </div>

                <div className="border-t pt-4" style={{ borderColor: "var(--border)" }}>
                  <span className="mono-label">Available</span>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="status-dot" />
                    <span className="text-sm" style={{ color: "var(--text-1)" }}>For internships & collaborations</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
