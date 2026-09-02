import { Hero } from "@/src/components/hero/hero";
import { Footer } from "@/src/components/layout/footer";
import { Navbar } from "@/src/components/layout/navbar";

import { ApproachSection } from "@/src/components/sections/approach-section";
import { ExplorationSection } from "@/src/components/sections/exploration-section";
import { FinalCta } from "@/src/components/sections/final-cta";
import { PhilosophySection } from "@/src/components/sections/philosophy-section";
import { ResearchSection } from "@/src/components/sections/research-section";
import { VenturesSection } from "@/src/components/sections/ventures-section";

import { SceneExperienceProvider } from "@/src/components/three/scene-experience";
import { SceneSection } from "@/src/components/three/scene-section";
import { SiteScene } from "@/src/components/three/site-scene";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />

      <SceneExperienceProvider>
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
        >
          <SiteScene />
        </div>

        <div className="relative z-10">
          <SceneSection scene="hero">
            <Hero />
          </SceneSection>

          <SceneSection scene="approach">
            <ApproachSection />
          </SceneSection>

          <SceneSection scene="exploration">
            <ExplorationSection />
          </SceneSection>

          <SceneSection scene="ventures">
            <VenturesSection />
          </SceneSection>

          <SceneSection scene="research">
            <ResearchSection />
          </SceneSection>

          <SceneSection scene="philosophy">
            <PhilosophySection />
          </SceneSection>

          <SceneSection scene="final">
            <FinalCta />
          </SceneSection>
        </div>
      </SceneExperienceProvider>

      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}