import { Hero } from "@/src/components/hero/hero";

import { Navbar } from "@/src/components/layout/navbar";
import { Footer } from "@/src/components/layout/footer";

import { ApproachSection } from "@/src/components/sections/approach-section";
import { ExplorationSection } from "@/src/components/sections/exploration-section";
import { VenturesSection } from "@/src/components/sections/ventures-section";
import { ResearchSection } from "@/src/components/sections/research-section";
import { PhilosophySection } from "@/src/components/sections/philosophy-section";
import { FinalCta } from "@/src/components/sections/final-cta";

import { SiteScene } from "@/src/components/three/site-scene";
import { SceneSection } from "@/src/components/three/scene-section";
import { SceneExperienceProvider } from "@/src/components/three/scene-experience";

export default function Home() {
  return (
    <SceneExperienceProvider>
      <main
        className="
          relative
          min-h-screen
          overflow-x-clip
          bg-background
          text-foreground
        "
      >
        <Navbar />

        {/* ======================================
            GLOBAL THREE.JS WORLD
        ====================================== */}

        <div
          className="
            pointer-events-none
            fixed
            inset-0
            z-0
          "
        >
          <SiteScene />
        </div>

        {/* ======================================
            HTML CONTENT
        ====================================== */}

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

          <Footer />
        </div>
      </main>
    </SceneExperienceProvider>
  );
}