import { Hero } from "@/src/components/hero/hero";
import { Footer } from "@/src/components/layout/footer";
import { Navbar } from "@/src/components/layout/navbar";

import { ApproachSection } from "@/src/components/sections/approach-section";
import { ExplorationSection } from "@/src/components/sections/exploration-section";
import { FinalCta } from "@/src/components/sections/final-cta";
import { PhilosophySection } from "@/src/components/sections/philosophy-section";
import { ResearchSection } from "@/src/components/sections/research-section";
import { VenturesSection } from "@/src/components/sections/ventures-section";

import { ContactSceneLoader } from "@/src/components/three/contact-scene-loader";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />

      {/* =====================================================
          STATIC 3D HOMEPAGE ENVIRONMENT
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
      >
        <ContactSceneLoader />
      </div>

      {/* =====================================================
          HOMEPAGE CONTENT
      ===================================================== */}

      <div className="relative z-10">
        <Hero />
        <ApproachSection />
        <ExplorationSection />
        <VenturesSection />
        <ResearchSection />
        <PhilosophySection />
        <FinalCta />
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}