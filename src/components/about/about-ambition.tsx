import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function AboutAmbition() {
  return (
    <section className="relative min-h-[85svh] overflow-hidden py-24 sm:py-28 lg:flex lg:items-center lg:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-white/[0.48] dark:bg-[#0D1117]/[0.45]" />

        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                circle at 50% 50%,
                rgba(37,99,235,0.055),
                transparent 34%
              ),
              radial-gradient(
                circle at 88% 10%,
                rgba(34,211,238,0.045),
                transparent 25%
              ),
              radial-gradient(
                circle at 10% 92%,
                rgba(168,85,247,0.045),
                transparent 28%
              )
            `,
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#2563EB] dark:bg-[#3B82F6]" />

            <span className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-[#0A1D2F]/38 dark:text-white/35">
              Long-term ambition
            </span>

            <span className="h-px w-10 bg-[#22D3EE]" />
          </div>

          <h2 className="mt-10 text-center text-[clamp(3.1rem,6.2vw,7.2rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-[#0A1D2F] dark:text-white">
            To build an enduring
            <br />
            technology company
            <br />

            <span className="bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#7C3AED] bg-clip-text text-transparent dark:from-[#3B82F6] dark:via-[#22D3EE] dark:to-[#A855F7]">
              that keeps evolving.
            </span>
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-8 text-[#0A1D2F]/52 dark:text-white/46 sm:text-lg sm:leading-9">
            Our ambition is to build an enduring technology company
            capable of turning important ideas into products and
            ventures that matter.
          </p>

          <div className="mx-auto mt-12 max-w-4xl border-y border-[#0A1D2F]/[0.08] py-7 dark:border-white/[0.08]">
            <div className="grid gap-5 text-center sm:grid-cols-3">
              <div>
                <span className="text-[0.56rem] font-semibold uppercase tracking-[0.24em] text-[#0A1D2F]/25 dark:text-white/24">
                  Not defined by
                </span>

                <p className="mt-2 text-sm font-semibold text-[#0A1D2F]/65 dark:text-white/58">
                  One product
                </p>
              </div>

              <div className="border-[#0A1D2F]/[0.08] dark:border-white/[0.08] sm:border-x">
                <span className="text-[0.56rem] font-semibold uppercase tracking-[0.24em] text-[#0A1D2F]/25 dark:text-white/24">
                  Not limited to
                </span>

                <p className="mt-2 text-sm font-semibold text-[#0A1D2F]/65 dark:text-white/58">
                  One technology
                </p>
              </div>

              <div>
                <span className="text-[0.56rem] font-semibold uppercase tracking-[0.24em] text-[#0A1D2F]/25 dark:text-white/24">
                  Built for
                </span>

                <p className="mt-2 text-sm font-semibold text-[#0A1D2F]/65 dark:text-white/58">
                  Continuous exploration
                </p>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-9 max-w-2xl text-center text-sm leading-7 text-[#0A1D2F]/42 dark:text-white/36">
            Not defined by one product. Not limited to one
            technology. Built to keep exploring where meaningful
            possibilities emerge.
          </p>

          <div className="mt-9 flex justify-center">
            <Link
              href="/ventures"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-[#0A1D2F]/52 transition-colors duration-300 hover:text-[#2563EB] dark:text-white/45 dark:hover:text-[#60A5FA]"
            >
              Explore what we&apos;re building

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}