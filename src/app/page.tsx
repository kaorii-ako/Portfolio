import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Pillars from "@/components/Pillars";
import Proof from "@/components/Proof";
import HowIWork from "@/components/HowIWork";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Pillars />
      <Proof />
      <HowIWork />
      <CTA />
    </main>
  );
}
