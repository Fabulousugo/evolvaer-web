import type { Metadata } from "next";

import { AboutHero } from "@/src/components/about/about-hero";
import { AboutStory } from "@/src/components/about/about-story";
import { AboutCapabilities } from "@/src/components/about/about-capabilities";
import { AboutOperatingModel } from "@/src/components/about/about-operating-model";
import { AboutEvolution } from "@/src/components/about/about-evolution";
import { AboutPrinciples } from "@/src/components/about/about-principles";
import { AboutAmbition } from "@/src/components/about/about-ambition";
import { AboutCta } from "@/src/components/about/about-cta";

import { Navbar } from "@/src/components/layout/navbar";
import { Footer } from "@/src/components/layout/footer";

import { AboutScene } from "@/src/components/three/about-scene";
import { AboutSceneSection } from "@/src/components/three/about-scene-section";
import { AboutSceneExperienceProvider } from "@/src/components/three/about-scene-experience";

export const metadata: Metadata = {
  title: "About | Evolvaer Technologies",
  description:
    "Learn how Evolvaer Technologies researches emerging technologies, engineers practical systems and builds ventures around meaningful opportunities.",
};

export default function AboutPage() {
  return (
    <AboutSceneExperienceProvider>
      <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
        <Navbar />

        {/* =====================================================
            PERSISTENT 3D ENVIRONMENT

            One Canvas for the entire About page.
            The DOM scrolls above it while individual
            sections update the scene state.
        ===================================================== */}

        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
        >
          <AboutScene />
        </div>

        {/* =====================================================
            PAGE CONTENT
        ===================================================== */}

        <div className="relative z-10">
          <AboutSceneSection scene="hero">
            <AboutHero />
          </AboutSceneSection>

          <AboutSceneSection scene="story">
            <AboutStory />
          </AboutSceneSection>

          <AboutSceneSection scene="capabilities">
            <AboutCapabilities />
          </AboutSceneSection>

          <AboutSceneSection scene="operating">
            <AboutOperatingModel />
          </AboutSceneSection>

          <AboutSceneSection scene="evolution">
            <AboutEvolution />
          </AboutSceneSection>

          <AboutSceneSection scene="principles">
            <AboutPrinciples />
          </AboutSceneSection>

          <AboutSceneSection scene="ambition">
            <AboutAmbition />
          </AboutSceneSection>

          <AboutSceneSection scene="cta">
            <AboutCta />
          </AboutSceneSection>

          <Footer />
        </div>
      </main>
    </AboutSceneExperienceProvider>
  );
}