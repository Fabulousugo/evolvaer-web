import { FeaturedVenture } from "@/src/components/ventures/featured-venture";
import { FutureVentures } from "@/src/components/ventures/future-ventures";
import { VentureCapabilities } from "@/src/components/ventures/venture-capabilities";
import { VentureEmergence } from "@/src/components/ventures/venture-emergence";
import { VenturePhilosophy } from "@/src/components/ventures/venture-philosophy";
import { VenturePortfolio } from "@/src/components/ventures/venture-portfolio";
import { VentureStages } from "@/src/components/ventures/venture-stages";
import { VenturesCta } from "@/src/components/ventures/ventures-cta";
import { VenturesHero } from "@/src/components/ventures/ventures-hero";

import { Footer } from "@/src/components/layout/footer";
import { Navbar } from "@/src/components/layout/navbar";

import { VenturesSceneLoader } from "@/src/components/three/ventures-scene-loader";

export default function VenturesPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#F8FAFC] text-[#0A1D2F] dark:bg-[#0D1117] dark:text-white">
      <Navbar />

      {/* =====================================================
          STATIC 3D ENVIRONMENT
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
      >
        <VenturesSceneLoader />
      </div>

      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}

      <div className="relative z-10">
        <VenturesHero />
        <VenturePhilosophy />
        <VenturePortfolio />
        <FeaturedVenture />
        <VentureEmergence />
        <VentureCapabilities />
        <VentureStages />
        <FutureVentures />
        <VenturesCta />
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}