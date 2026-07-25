import type { Metadata } from "next";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description: "Tawin \"Kao\" Tangsukson — developer, maker, F1 in Schools aero lead. Stack, background, and academic track.",
};

export default function AboutPage() {
  return (
    <main className="pt-16">
      <About />
      <Skills />
      <Education />
      <CTA heading="Curious what I'd build next?" label="Get in touch" href="/contact" />
    </main>
  );
}
