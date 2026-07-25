import type { Metadata } from "next";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Projects",
  description: "Everything I've shipped — AI tools, systems, hardware, and CFD/aero engineering.",
};

export default function ProjectsPage() {
  return (
    <main className="pt-16">
      <Projects />
      <CTA heading="Got a problem that mixes disciplines?" label="Get in touch" href="/contact" />
    </main>
  );
}
