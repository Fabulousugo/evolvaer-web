import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

export function AboutCta() {
  return (
    <section className="relative overflow-hidden py-28 text-white sm:py-32 lg:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[#07111D]/[0.87] dark:bg-[#050A11]/[0.86]" />

        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                circle at 50% 50%,
                rgba(59,130,246,0.14),
                transparent 28%
              ),
              radial-gradient(
                circle at 8% 8%,
                rgba(59,130,246,0.10),
                transparent 27%
              ),
              radial-gradient(
                circle at 88% 92%,
                rgba(34,211,238,0.075),
                transparent 30%
              ),
              radial-gradient(
                circle at 88% 18%,
                rgba(168,85,247,0.075),
                transparent 24%
              )
            `,
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(96,165,250,.16) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(96,165,250,.16) 1px,
                transparent 1px
              )
            `,
            backgroundSize:
              "96px 96px",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#22D3EE]" />

            <span className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-white/38">
              Keep exploring
            </span>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h2 className="text-[clamp(3.5rem,7vw,8rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
                See what
                <br />
                we&apos;re working
                <br />

                <span className="bg-gradient-to-r from-[#60A5FA] via-[#22D3EE] to-[#C084FC] bg-clip-text text-transparent">
                  towards.
                </span>
              </h2>
            </div>

            <div className="max-w-lg lg:justify-self-end">
              <p className="text-base leading-8 text-white/48">
                Explore how we work, the technologies we are
                investigating and the ventures emerging from that
                process.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/what-we-do"
                  className="group inline-flex min-h-12 items-center gap-4 rounded-full bg-[#3B82F6] px-6 text-sm font-semibold text-white transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#2563EB] hover:shadow-[0_14px_40px_rgba(59,130,246,.25)]"
                >
                  What we do

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/ventures"
                  className="group inline-flex min-h-12 items-center gap-3 rounded-full border border-white/10 bg-white/[0.055] px-6 text-sm font-semibold text-white/75 transition-[transform,border-color,background-color,color] duration-300 hover:-translate-y-0.5 hover:border-[#22D3EE]/25 hover:bg-white/[0.085] hover:text-white"
                >
                  Explore ventures

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-20 border-t border-white/[0.08] pt-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-[0.56rem] font-semibold uppercase tracking-[0.24em] text-white/22">
                Evolvaer Technologies
              </span>

              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE] shadow-[0_0_14px_rgba(34,211,238,.75)]" />

                <span className="text-[0.56rem] font-semibold uppercase tracking-[0.24em] text-white/25">
                  Exploring what comes next
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}