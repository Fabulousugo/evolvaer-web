"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  CircleDot,
  Lightbulb,
  MessagesSquare,
  ScanSearch,
} from "lucide-react";

const ventureThesis = [
  {
    icon: ScanSearch,
    number: "01",
    label: "Problem",
    title: "Communication can break down.",
    description:
      "People do not always communicate in ways that are immediately understood by the people, systems or environments around them.",
    accent: "#2563EB",
  },
  {
    icon: BrainCircuit,
    number: "02",
    label: "Opportunity",
    title: "Technology can help interpret.",
    description:
      "Emerging AI capabilities create new possibilities for recognising communication cues and helping people understand one another more effectively.",
    accent: "#7C3AED",
  },
  {
    icon: MessagesSquare,
    number: "03",
    label: "Direction",
    title: "Make understanding easier.",
    description:
      "Adaptcues explores how intelligent software can support clearer interpretation and more accessible communication in real-world settings.",
    accent: "#22D3EE",
  },
];

export function FeaturedVenture() {
  return (
    <section
      id="featured-venture"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[#F8FAFC]/[0.54] backdrop-blur-[2px] dark:bg-[#0D1117]/[0.56]" />

        <div className="absolute right-[-12rem] top-[10%] h-[40rem] w-[40rem] rounded-full bg-[#22D3EE]/[0.06] blur-[180px] dark:bg-[#22D3EE]/[0.08]" />

        <div className="absolute left-[-16rem] bottom-[-10rem] h-[36rem] w-[36rem] rounded-full bg-[#2563EB]/[0.045] blur-[170px] dark:bg-[#3B82F6]/[0.065]" />

        <div className="absolute left-[48%] top-[30%] h-[25rem] w-[25rem] rounded-full bg-[#A855F7]/[0.035] blur-[150px] dark:bg-[#A855F7]/[0.055]" />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            VENTURE IDENTITY
        ===================================================== */}

        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          {/* LEFT */}

          <div className="max-w-[680px]">
            <div className="flex items-center gap-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#22D3EE]/20 bg-[#22D3EE]/[0.055] text-[#0891B2] dark:text-[#67E8F9]">
                <CircleDot className="h-3.5 w-3.5" />
              </span>

              <div>
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.27em] text-[#22D3EE]">
                  Featured venture
                </p>

                <p className="mt-1 font-mono text-[0.46rem] uppercase tracking-[0.15em] text-[#0A1D2F]/24 dark:text-white/22">
                  EV / 01
                </p>
              </div>
            </div>

            <h2 className="mt-8 text-[clamp(3.6rem,6.6vw,7.4rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-[#0A1D2F] dark:text-white">
              Adaptcues
            </h2>

            <p className="mt-7 max-w-[580px] text-xl font-medium leading-8 tracking-[-0.025em] text-[#0A1D2F]/68 dark:text-white/62 sm:text-2xl sm:leading-9">
              Exploring how intelligent technology can help make
              communication easier to understand.
            </p>

            <p className="mt-6 max-w-[570px] text-sm leading-7 text-[#0A1D2F]/46 dark:text-white/41">
              Adaptcues is being developed as an Evolvaer venture at
              the intersection of communication, accessibility and
              intelligent software.
            </p>

            <div className="mt-9 flex flex-wrap gap-2">
              <VentureTag>Communication</VentureTag>
              <VentureTag>Accessibility</VentureTag>
              <VentureTag>AI</VentureTag>
              <VentureTag>Human-centred technology</VentureTag>
            </div>
          </div>

          {/* =================================================
              RIGHT

              Leave this side relatively open because FeaturedWorld
              places the Adaptcues 3D object here.
          ================================================= */}

          <div
            aria-hidden="true"
            className="relative hidden min-h-[500px] lg:block"
          >
            <div className="absolute right-[3%] top-[6%]">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#22D3EE]/40" />

                <span className="font-mono text-[0.46rem] uppercase tracking-[0.17em] text-[#0A1D2F]/22 dark:text-white/20">
                  Venture 01
                </span>
              </div>
            </div>

            <div className="absolute bottom-[7%] right-[2%] w-[225px] rounded-[1.15rem] border border-[#0A1D2F]/[0.07] bg-white/[0.2] p-5 backdrop-blur-lg dark:border-white/[0.07] dark:bg-white/[0.015]">
              <div className="flex items-center justify-between">
                <span className="text-[0.48rem] font-semibold uppercase tracking-[0.18em] text-[#0A1D2F]/25 dark:text-white/22">
                  Venture state
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] shadow-[0_0_12px_rgba(16,185,129,.55)]" />
              </div>

              <div className="mt-5 space-y-3">
                <StateRow
                  label="Origin"
                  value="Evolvaer"
                />

                <StateRow
                  label="Status"
                  value="Development"
                />

                <StateRow
                  label="Type"
                  value="Software venture"
                />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            THE THESIS
        ===================================================== */}

        <div className="mt-20 border-t border-[#0A1D2F]/[0.08] pt-12 dark:border-white/[0.08] lg:mt-24 lg:pt-16">
          <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr]">
            <div>
              <div className="flex items-center gap-3">
                <Lightbulb className="h-4 w-4 text-[#7C3AED] dark:text-[#C084FC]" />

                <p className="text-[0.57rem] font-semibold uppercase tracking-[0.25em] text-[#0A1D2F]/34 dark:text-white/30">
                  Venture thesis
                </p>
              </div>

              <h3 className="mt-5 max-w-[330px] text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#0A1D2F] dark:text-white">
                Start with the human problem, not the technology.
              </h3>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[1.6rem] border border-[#0A1D2F]/[0.08] bg-[#0A1D2F]/[0.06] dark:border-white/[0.08] dark:bg-white/[0.055] md:grid-cols-3">
              {ventureThesis.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.label}
                    className="group relative min-h-[23rem] overflow-hidden bg-white/[0.58] p-7 backdrop-blur-xl dark:bg-[#0D1117]/[0.68]"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute -right-14 -top-14 h-40 w-40 rounded-full opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        backgroundColor: `${item.accent}18`,
                      }}
                    />

                    <div className="relative flex h-full flex-col">
                      <div className="flex items-start justify-between">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-xl border"
                          style={{
                            color: item.accent,
                            borderColor: `${item.accent}30`,
                            backgroundColor: `${item.accent}0D`,
                          }}
                        >
                          <Icon className="h-[17px] w-[17px]" />
                        </div>

                        <span
                          className="font-mono text-[0.47rem]"
                          style={{
                            color: `${item.accent}AA`,
                          }}
                        >
                          {item.number}
                        </span>
                      </div>

                      <div className="mt-auto pt-14">
                        <p
                          className="text-[0.53rem] font-semibold uppercase tracking-[0.21em]"
                          style={{
                            color: item.accent,
                          }}
                        >
                          {item.label}
                        </p>

                        <h4 className="mt-3 text-lg font-semibold leading-7 tracking-[-0.025em] text-[#0A1D2F] dark:text-white">
                          {item.title}
                        </h4>

                        <p className="mt-4 text-sm leading-7 text-[#0A1D2F]/43 dark:text-white/38">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================
            WHY EVOLVAER IS BUILDING IT
        ===================================================== */}

        <div className="mt-16 grid gap-6 rounded-[1.8rem] border border-[#0A1D2F]/[0.08] bg-white/[0.3] p-7 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.018] sm:p-9 lg:mt-20 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12">
          <div>
            <p className="text-[0.57rem] font-semibold uppercase tracking-[0.25em] text-[#10B981] dark:text-[#34D399]">
              Why this venture
            </p>

            <h3 className="mt-4 max-w-[330px] text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#0A1D2F] dark:text-white">
              A problem where better understanding could matter.
            </h3>
          </div>

          <div>
            <p className="text-base leading-8 text-[#0A1D2F]/54 dark:text-white/48">
              Communication is fundamental to independence,
              participation and human connection. When communication
              is difficult to interpret, technology may be able to
              provide another layer of support — helping people make
              sense of cues that might otherwise be missed or
              misunderstood.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
              That combination of a meaningful human problem and an
              emerging technical capability is exactly the kind of
              intersection Evolvaer is designed to investigate.
            </p>
          </div>
        </div>

        {/* =====================================================
            BOUNDARY / CURRENT STATE
        ===================================================== */}

        <div className="mt-8 grid gap-px overflow-hidden rounded-[1.5rem] border border-[#0A1D2F]/[0.07] bg-[#0A1D2F]/[0.055] dark:border-white/[0.07] dark:bg-white/[0.055] md:grid-cols-3">
          <VentureFact
            label="Current focus"
            value="Research & product development"
          />

          <VentureFact
            label="Approach"
            value="Human-centred software"
          />

          <VentureFact
            label="Venture relationship"
            value="Developed by Evolvaer"
          />
        </div>

        {/* =====================================================
            HANDOFF
        ===================================================== */}

        <div className="mt-12 flex flex-col gap-6 border-t border-[#0A1D2F]/[0.08] pt-8 dark:border-white/[0.08] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.52rem] font-semibold uppercase tracking-[0.21em] text-[#0A1D2F]/26 dark:text-white/24">
              One venture. One example.
            </p>

            <p className="mt-2 text-sm text-[#0A1D2F]/48 dark:text-white/42">
              The larger question is how an Evolvaer venture reaches
              this point.
            </p>
          </div>

          <Link
            href="#how-ventures-emerge"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-[#2563EB] transition-colors hover:text-[#1D4ED8] dark:text-[#60A5FA] dark:hover:text-[#93C5FD]"
          >
            See how ventures emerge

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function VentureTag({
  children,
}: {
  children: string;
}) {
  return (
    <span className="rounded-full border border-[#0A1D2F]/[0.08] bg-white/[0.34] px-3.5 py-2 text-[0.58rem] font-semibold text-[#0A1D2F]/46 backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.025] dark:text-white/40">
      {children}
    </span>
  );
}

function StateRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-5">
      <span className="text-[0.52rem] text-[#0A1D2F]/28 dark:text-white/25">
        {label}
      </span>

      <span className="text-[0.55rem] font-semibold text-[#0A1D2F]/50 dark:text-white/44">
        {value}
      </span>
    </div>
  );
}

function VentureFact({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="bg-white/[0.44] px-6 py-5 backdrop-blur-md dark:bg-[#0D1117]/[0.42]">
      <p className="text-[0.47rem] font-semibold uppercase tracking-[0.18em] text-[#0A1D2F]/25 dark:text-white/22">
        {label}
      </p>

      <p className="mt-2 text-xs font-semibold text-[#0A1D2F]/58 dark:text-white/50">
        {value}
      </p>
    </div>
  );
}