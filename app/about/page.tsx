import type { Metadata } from "next";

import { AboutHero } from "@/src/components/about/about-hero";
import { AboutStory } from "@/src/components/about/about-story";
import { AboutCapabilities } from "@/src/components/about/about-capabilities";
import { AboutOperatingModel } from "@/src/components/about/about-operating-model";
import { AboutEvolution } from "@/src/components/about/about-evolution";
import { AboutPrinciples } from "@/src/components/about/about-principles";
import { AboutAmbition } from "@/src/components/about/about-ambition";
import { AboutCta } from "@/src/components/about/about-cta";

import { AboutScene } from "@/src/components/three/about-scene";

import { Navbar } from "@/src/components/layout/navbar";
import { Footer } from "@/src/components/layout/footer";

export const metadata: Metadata = {
  title: "About | Evolvaer Technologies",
  description:
    "Learn how Evolvaer Technologies researches emerging technologies, engineers practical systems and builds ventures around meaningful opportunities.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
      >
        <AboutScene />
      </div>

      <div className="relative z-10">
        <AboutHero />
        <AboutStory />
        <AboutCapabilities />
        <AboutOperatingModel />
        <AboutEvolution />
        <AboutPrinciples />
        <AboutAmbition />
        <AboutCta />
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}