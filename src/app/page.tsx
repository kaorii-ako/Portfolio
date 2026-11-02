import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import Pillars from "@/components/Pillars";
import Proof from "@/components/Proof";
import HowIWork from "@/components/HowIWork";
import CTA from "@/components/CTA";
import { projects } from "@/data/projects";

export default function Home() {
  const showcased = projects.filter((p) => p.featured && p.image);
  return (
    <main>
      <Hero />
      {showcased.map((p, i) => (
        <ProjectShowcase key={p.title} project={p} index={i} />
      ))}
      <Pillars />
      <Proof />
      <HowIWork />
      <CTA />
    </main>
  );
}
