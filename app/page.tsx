import { Hero } from "@/src/components/hero/hero";
import { Navbar } from "@/src/components/layout/navbar";
import { ApproachSection } from "@/src/components/sections/approach-section";
import { ExplorationSection } from "@/src/components/sections/exploration-section";
import { VenturesSection } from "@/src/components/sections/ventures-section";
import { ResearchSection } from "@/src/components/sections/research-section";
import { PhilosophySection } from "@/src/components/sections/philosophy-section";
import { FinalCta } from "@/src/components/sections/final-cta";
import { Footer } from "@/src/components/layout/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />

      <Hero />
      <ApproachSection />
      <ExplorationSection />
      <VenturesSection />
      <ResearchSection />
      <PhilosophySection />
      <FinalCta />

      <Footer />
    </main>
  );
}



// <main className="relative min-h-screen overflow-x-clip bg-background text-foreground"></main>