"use client";

import { useRef, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import { ArrowUpRight, CircleDot, ScanSearch, Sparkles } from "lucide-react";
import Link from "next/link";

export function AboutStory() {
  const sectionRef = useRef<HTMLElement>(null);

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLElement>,
  ) => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width) *
      100;

    const y =
      ((event.clientY - rect.top) / rect.height) *
      100;

    section.style.setProperty(
      "--story-x",
      `${x}%`,
    );

    section.style.setProperty(
      "--story-y",
      `${y}%`,
    );
  };

  return (
    <section
      id="our-story"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
      style={
        {
          "--story-x": "65%",
          "--story-y": "45%",
        } as CSSProperties
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-white/[0.62] backdrop-blur-[1px] dark:bg-[#0D1117]/[0.56]" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at var(--story-x) var(--story-y), rgba(34,211,238,0.10), transparent 28%)",
          }}
        />

        <div className="absolute left-[-12rem] top-[12%] h-[28rem] w-[28rem] rounded-full bg-[#2563EB]/[0.06] blur-[150px] dark:bg-[#3B82F6]/[0.08]" />

        <div className="absolute bottom-[-12rem] right-[8%] h-[30rem] w-[30rem] rounded-full bg-[#A855F7]/[0.045] blur-[160px] dark:bg-[#A855F7]/[0.065]" />

        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,.34) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,.34) 1px, transparent 1px)
            `,
            backgroundSize: "96px 96px",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#10B981] dark:bg-[#22D3EE]" />

              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#0A1D2F]/40 dark:text-white/36">
                Why we exist
              </span>
            </div>

            <div className="mt-10 max-w-sm">
              <p className="text-sm leading-7 text-[#0A1D2F]/48 dark:text-white/40">
                Innovation is rarely limited by access to technology.
                The greater challenge is knowing where it can create
                meaningful value.
              </p>
            </div>
          </div>

          <div>
            <p className="max-w-5xl text-[clamp(2.8rem,4.8vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#0A1D2F] dark:text-white">
              Technology moves quickly.
              <br />
              Useful innovation requires{" "}
              <span className="bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#7C3AED] bg-clip-text text-transparent dark:from-[#3B82F6] dark:via-[#22D3EE] dark:to-[#A855F7]">
                something more.
              </span>
            </p>

            <div className="mt-12 grid gap-8 border-t border-[#0A1D2F]/[0.08] pt-9 dark:border-white/[0.08] md:grid-cols-2 md:gap-10">
              <p className="text-sm leading-7 text-[#0A1D2F]/55 dark:text-white/48 sm:text-base sm:leading-8">
                New capabilities appear constantly, but not every
                technological breakthrough becomes a meaningful
                product. The difficult work lies in understanding
                where technology intersects with a genuine problem,
                a useful experience and a viable opportunity.
              </p>

              <p className="text-sm leading-7 text-[#0A1D2F]/55 dark:text-white/48 sm:text-base sm:leading-8">
                Evolvaer exists to work in that space. We explore
                emerging technologies, investigate their potential,
                engineer practical systems and build the ideas that
                prove worthy of going further.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3 lg:mt-20">
          <article className="group relative overflow-hidden rounded-[1.6rem] border border-[#0A1D2F]/[0.08] bg-white/35 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/25 hover:bg-white/55 dark:border-white/[0.07] dark:bg-white/[0.025] dark:hover:border-[#3B82F6]/30 dark:hover:bg-white/[0.045]">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#2563EB]/15 bg-[#2563EB]/[0.05] text-[#2563EB] dark:border-[#3B82F6]/20 dark:bg-[#3B82F6]/[0.08] dark:text-[#60A5FA]">
              <ScanSearch className="h-4.5 w-4.5" />
            </div>

            <p className="mt-8 text-[0.58rem] font-semibold uppercase tracking-[0.25em] text-[#0A1D2F]/30 dark:text-white/28">
              Signal 01
            </p>

            <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-[#0A1D2F] dark:text-white">
              Technological possibility
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#0A1D2F]/48 dark:text-white/42">
              What new capabilities are becoming technically possible?
            </p>
          </article>

          <article className="group relative overflow-hidden rounded-[1.6rem] border border-[#0A1D2F]/[0.08] bg-white/35 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#10B981]/25 hover:bg-white/55 dark:border-white/[0.07] dark:bg-white/[0.025] dark:hover:border-[#22D3EE]/30 dark:hover:bg-white/[0.045]">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#10B981]/15 bg-[#10B981]/[0.05] text-[#10B981] dark:border-[#22D3EE]/20 dark:bg-[#22D3EE]/[0.08] dark:text-[#22D3EE]">
              <CircleDot className="h-4.5 w-4.5" />
            </div>

            <p className="mt-8 text-[0.58rem] font-semibold uppercase tracking-[0.25em] text-[#0A1D2F]/30 dark:text-white/28">
              Signal 02
            </p>

            <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-[#0A1D2F] dark:text-white">
              Meaningful problems
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#0A1D2F]/48 dark:text-white/42">
              Where are people, organisations and systems experiencing real friction?
            </p>
          </article>

          <article className="group relative overflow-hidden rounded-[1.6rem] border border-[#0A1D2F]/[0.08] bg-white/35 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#7C3AED]/25 hover:bg-white/55 dark:border-white/[0.07] dark:bg-white/[0.025] dark:hover:border-[#A855F7]/30 dark:hover:bg-white/[0.045]">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#7C3AED]/15 bg-[#7C3AED]/[0.05] text-[#7C3AED] dark:border-[#A855F7]/20 dark:bg-[#A855F7]/[0.08] dark:text-[#C084FC]">
              <Sparkles className="h-4.5 w-4.5" />
            </div>

            <p className="mt-8 text-[0.58rem] font-semibold uppercase tracking-[0.25em] text-[#0A1D2F]/30 dark:text-white/28">
              Signal 03
            </p>

            <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-[#0A1D2F] dark:text-white">
              Viable opportunity
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#0A1D2F]/48 dark:text-white/42">
              Can the intersection become something useful, sustainable and worth scaling?
            </p>
          </article>
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="/what-we-do"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-[#0A1D2F]/52 transition-colors hover:text-[#2563EB] dark:text-white/45 dark:hover:text-[#60A5FA]"
          >
            See how we work

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}