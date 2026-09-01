import { FeaturedVenture } from "@/src/components/ventures/featured-venture";
import { FutureVentures } from "@/src/components/ventures/future-ventures";
import { VentureCapabilities } from "@/src/components/ventures/venture-capabilities";
import { VentureEmergence } from "@/src/components/ventures/venture-emergence";
import { VenturePhilosophy } from "@/src/components/ventures/venture-philosophy";
import { VenturePortfolio } from "@/src/components/ventures/venture-portfolio";
import { VentureStages } from "@/src/components/ventures/venture-stages";
import { VenturesCta } from "@/src/components/ventures/ventures-cta";
import { VenturesHero } from "@/src/components/ventures/ventures-hero";

import { VenturesScene } from "@/src/components/three/ventures-scene";
import { VenturesSceneExperienceProvider } from "@/src/components/three/ventures-scene-experience";
import { VenturesSceneSection } from "@/src/components/three/ventures-scene-section";

import { Footer } from "@/src/components/layout/footer";
import { Navbar } from "@/src/components/layout/navbar";

export default function VenturesPage() {
  return (
    <VenturesSceneExperienceProvider>
      <Navbar />
      <div className="relative isolate min-h-screen overflow-x-clip bg-[#F8FAFC] text-[#0A1D2F] dark:bg-[#0D1117] dark:text-white">
        {/* =====================================================
            PERSISTENT 3D ENVIRONMENT

            One Canvas remains mounted for the entire Ventures page.
            Individual sections only tell it which venture state
            should currently be active.
        ===================================================== */}

        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
        >
          <VenturesScene />
        </div>

        {/* =====================================================
            PAGE CONTENT
        ===================================================== */}

        <main className="relative z-10">
          {/* 01 — POSSIBILITY FIELD */}

          <VenturesSceneSection scene="hero">
            <VenturesHero />
          </VenturesSceneSection>

          {/* 02 — SELECTIVITY / FILTERING */}

          <VenturesSceneSection scene="philosophy">
            <VenturePhilosophy />
          </VenturesSceneSection>

          {/* 03 — PORTFOLIO SYSTEM */}

          <VenturesSceneSection scene="portfolio">
            <VenturePortfolio />
          </VenturesSceneSection>

          {/* 04 — FEATURED VENTURE */}

          <VenturesSceneSection scene="featured">
            <FeaturedVenture />
          </VenturesSceneSection>

          {/* 05 — VENTURE FORMATION */}

          <VenturesSceneSection scene="emergence">
            <VentureEmergence />
          </VenturesSceneSection>

          {/* 06 — EVOLVAER CAPABILITIES */}

          <VenturesSceneSection scene="capabilities">
            <VentureCapabilities />
          </VenturesSceneSection>

          {/* 07 — VENTURE LIFECYCLE */}

          <VenturesSceneSection scene="stages">
            <VentureStages />
          </VenturesSceneSection>

          {/* 08 — FUTURE PORTFOLIO */}

          <VenturesSceneSection scene="future">
            <FutureVentures />
          </VenturesSceneSection>

          {/* 09 — RESOLUTION */}

          <VenturesSceneSection scene="cta">
            <VenturesCta />
          </VenturesSceneSection>
        </main>
        <Footer />
      </div>
    </VenturesSceneExperienceProvider>
  );
}