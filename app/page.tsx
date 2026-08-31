import { Hero } from "@/src/components/hero/hero";
import { Navbar } from "@/src/components/layout/navbar";
import { ApproachSection } from "@/src/components/sections/approach-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />
      <Hero />
      <ApproachSection/>
    </main>
  );
}