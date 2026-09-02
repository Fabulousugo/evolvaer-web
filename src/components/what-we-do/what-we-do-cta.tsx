import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

export function WhatWeDoCta() {
  return (
    <section
      id="what-we-do-cta"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      {/* =====================================================
          CINEMATIC BACKDROP
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[#0A1D2F]/[0.94] dark:bg-[#0D1117]/[0.95]" />

        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                circle at 18% 24%,
                rgba(37,99,235,0.15),
                transparent 30%
              ),
              radial-gradient(
                circle at 90% 16%,
                rgba(34,211,238,0.1),
                transparent 27%
              ),
              radial-gradient(
                circle at 50% 108%,
                rgba(168,85,247,0.1),
                transparent 31%
              )
            `,
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,.16) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,.16) 1px,
                transparent 1px
              )
            `,
            backgroundSize:
              "110px 110px",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/60 to-transparent" />
      </div>

      <div className="evolvaer-container relative z-10">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          {/* =================================================
              COPY
          ================================================= */}

          <div className="max-w-[760px]">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#60A5FA]">
              What we do
            </p>

            <h2 className="mt-7 text-[clamp(3.1rem,5.8vw,6.5rem)] font-semibold leading-[0.93] tracking-[-0.055em] text-white">
              From possibility
              <br />
              to something{" "}
              <span className="bg-gradient-to-r from-[#3B82F6] via-[#22D3EE] to-[#A855F7] bg-clip-text text-transparent">
                that matters.
              </span>
            </h2>

            <p className="mt-7 max-w-[620px] text-base leading-8 text-white/55 sm:text-[1.05rem]">
              We explore emerging possibilities, research what is
              worth pursuing, engineer practical systems and build
              the strongest ideas into products and ventures capable
              of creating real-world value.
            </p>
          </div>

          {/* =================================================
              CTA PANEL
          ================================================= */}

          <div className="lg:justify-self-end">
            <div className="relative w-full max-w-[480px] overflow-hidden rounded-[1.8rem] border border-white/[0.09] bg-white/[0.05] p-6 sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `
                    radial-gradient(
                      circle at 100% 0%,
                      rgba(59,130,246,0.08),
                      transparent 34%
                    ),
                    radial-gradient(
                      circle at 0% 100%,
                      rgba(34,211,238,0.045),
                      transparent 30%
                    )
                  `,
                }}
              />

              <div className="relative">
                <p className="text-[0.54rem] font-semibold uppercase tracking-[0.25em] text-white/30">
                  Continue exploring
                </p>

                <div className="mt-7 space-y-3">
                  <Link
                    href="/ventures"
                    className="group flex items-center justify-between rounded-[1.15rem] border border-[#3B82F6]/20 bg-[#3B82F6]/[0.08] px-5 py-5 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-[#3B82F6]/40 hover:bg-[#3B82F6]/[0.13]"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Explore our ventures
                      </p>

                      <p className="mt-1 text-xs leading-5 text-white/35">
                        See the products and ventures emerging from
                        the system.
                      </p>
                    </div>

                    <span className="ml-5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#3B82F6]/25 text-[#60A5FA] transition-[transform,background-color,color,border-color] duration-300 group-hover:-translate-y-0.5 group-hover:bg-[#3B82F6] group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>

                  <Link
                    href="/research"
                    className="group flex items-center justify-between rounded-[1.15rem] border border-white/[0.07] bg-white/[0.025] px-5 py-5 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-[#22D3EE]/25 hover:bg-[#22D3EE]/[0.05]"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Explore our research
                      </p>

                      <p className="mt-1 text-xs leading-5 text-white/35">
                        See how we investigate emerging technologies
                        and opportunities.
                      </p>
                    </div>

                    <span className="ml-5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.08] text-white/45 transition-[transform,border-color,color] duration-300 group-hover:-translate-y-0.5 group-hover:border-[#22D3EE]/30 group-hover:text-[#67E8F9]">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>

                <div className="mt-7 flex items-center gap-3 border-t border-white/[0.07] pt-6">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#22D3EE] shadow-[0_0_10px_rgba(34,211,238,.65)]" />

                  <p className="text-[0.58rem] font-medium uppercase tracking-[0.18em] text-white/28">
                    Explore · Research · Engineer · Build · Scale ·
                    Impact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            RESOLUTION
        ===================================================== */}

        <div className="mt-20 border-t border-white/[0.08] pt-7 lg:mt-28">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[500px] text-sm leading-7 text-white/34">
              Technology keeps changing. Our role is to understand
              where that change can become useful — and build the
              systems that take it there.
            </p>

            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-white/48 transition-colors duration-300 hover:text-white"
            >
              Learn more about Evolvaer

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}