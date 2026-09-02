import { CareersCta } from "@/src/components/careers/careers-cta";
import { CareersHero } from "@/src/components/careers/careers-hero";
import { CareersProcess } from "@/src/components/careers/careers-process";
import { CareersValues } from "@/src/components/careers/careers-values";
import { GrowthCulture } from "@/src/components/careers/growth-culture";
import { HowWeWork } from "@/src/components/careers/how-we-work";
import { OpenRoles } from "@/src/components/careers/open-roles";
import { WhyJoin } from "@/src/components/careers/why-join";

import { CareersSceneLoader} from "@/src/components/three/careers-scene-loader";
import { Footer } from "@/src/components/layout/footer";
import { Navbar } from "@/src/components/layout/navbar";

export default function CareersPage() {
  return (
    <>
      <Navbar />

      <main className="relative isolate min-h-screen overflow-x-clip">
        {/* =====================================================
            STATIC 3D CAREERS ENVIRONMENT
        ===================================================== */}

        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
        >
          <CareersSceneLoader />
        </div>

        {/* =====================================================
            PAGE CONTENT
        ===================================================== */}

        <div className="relative z-10">
          <CareersHero />
          <WhyJoin />
          <HowWeWork />
          <GrowthCulture />
          <CareersValues />
          <OpenRoles />
          <CareersProcess />
          <CareersCta />

          <Footer />
        </div>
      </main>
    </>
  );
}