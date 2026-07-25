import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Tawin \"Kao\" Tangsukson for collaborations, internships, or interesting problems.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-[90dvh] flex-col justify-center pt-16">
      <Contact />
    </main>
  );
}
