"use client";

import {
  CircleCheck,
  CircleX,
  Filter,
  Sparkles,
} from "lucide-react";

const filters = [
  {
    icon: Sparkles,
    label: "Possible",
    title: "Can the technology support it?",
    description:
      "We look at whether the underlying technical capability is real enough to build on — not merely interesting in theory.",
    accent: "#2563EB",
  },
  {
    icon: CircleCheck,
    label: "Useful",
    title: "Does it solve something that matters?",
    description:
      "A venture needs a meaningful problem, user need or market tension that makes the product worth adopting.",
    accent: "#22D3EE",
  },
  {
    icon: Filter,
    label: "Viable",
    title: "Can it become a sustainable venture?",
    description:
      "We examine whether the opportunity can support a credible product, operating model and path to growth.",
    accent: "#10B981",
  },
];

export function VenturePhilosophy() {
  return (
    <section
      id="venture-philosophy"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKDROP
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[#F8FAFC]/[0.6] backdrop-blur-[2px] dark:bg-[#0D1117]/[0.58]" />

        <div className="absolute -left-52 top-[10%] h-[34rem] w-[34rem] rounded-full bg-[#2563EB]/[0.04] blur-[170px] dark:bg-[#3B82F6]/[0.06]" />

        <div className="absolute right-[-12rem] bottom-[-8rem] h-[32rem] w-[32rem] rounded-full bg-[#A855F7]/[0.035] blur-[160px] dark:bg-[#A855F7]/[0.05]" />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#2563EB] dark:text-[#60A5FA]">
              Venture philosophy
            </p>

            <h2 className="mt-6 max-w-[700px] text-[clamp(2.9rem,4.9vw,5.5rem)] font-semibold leading-[0.96] tracking-[-0.052em] text-[#0A1D2F] dark:text-white">
              Not every idea
              <br />
              should become a{" "}
              <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] bg-clip-text text-transparent dark:from-[#60A5FA] dark:via-[#A855F7] dark:to-[#22D3EE]">
                company.
              </span>
            </h2>
          </div>

          <div className="max-w-[610px] lg:justify-self-end">
            <p className="text-base leading-8 text-[#0A1D2F]/58 dark:text-white/54 sm:text-[1.05rem]">
              We explore more ideas than we build. The purpose of that
              exploration is not to create as many ventures as possible,
              but to identify the few opportunities that are strong
              enough to deserve deeper investment.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
              A venture begins only when technological possibility,
              meaningful usefulness and credible viability begin to
              converge.
            </p>
          </div>
        </div>

        {/* =====================================================
            FILTER
        ===================================================== */}

        <div className="mt-16 grid gap-px overflow-hidden rounded-[1.8rem] border border-[#0A1D2F]/[0.08] bg-[#0A1D2F]/[0.065] dark:border-white/[0.08] dark:bg-white/[0.06] lg:mt-20 lg:grid-cols-3">
          {filters.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.label}
                className="group relative min-h-[22rem] overflow-hidden bg-white/[0.68] p-7 backdrop-blur-xl dark:bg-[#0D1117]/[0.7] sm:p-9"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    backgroundColor: `${item.accent}18`,
                  }}
                />

                <div className="relative flex h-full flex-col">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl border"
                    style={{
                      color: item.accent,
                      borderColor: `${item.accent}30`,
                      backgroundColor: `${item.accent}0D`,
                    }}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </div>

                  <div className="mt-auto pt-16">
                    <p
                      className="text-[0.55rem] font-semibold uppercase tracking-[0.23em]"
                      style={{
                        color: item.accent,
                      }}
                    >
                      {item.label}
                    </p>

                    <h3 className="mt-3 text-[1.35rem] font-semibold tracking-[-0.03em] text-[#0A1D2F] dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#0A1D2F]/45 dark:text-white/39">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            SELECTIVITY STATEMENT
        ===================================================== */}

        <div className="mt-14 grid gap-9 lg:mt-20 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#A855F7]/20 bg-[#A855F7]/[0.05] text-[#7C3AED] dark:text-[#C084FC]">
              <CircleX className="h-[18px] w-[18px]" />
            </div>

            <p className="mt-5 text-[0.58rem] font-semibold uppercase tracking-[0.27em] text-[#0A1D2F]/30 dark:text-white/28">
              Selectivity matters
            </p>

            <h3 className="mt-3 max-w-[25rem] text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#0A1D2F] dark:text-white">
              Saying no is part of venture building.
            </h3>
          </div>

          <div className="rounded-[1.7rem] border border-[#0A1D2F]/[0.08] bg-white/[0.3] p-6 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.02] sm:p-8">
            <div className="grid gap-6 sm:grid-cols-3">
              <DecisionState
                number="01"
                label="Interesting"
                state="Observe"
                accent="#64748B"
              />

              <DecisionState
                number="02"
                label="Promising"
                state="Investigate"
                accent="#7C3AED"
              />

              <DecisionState
                number="03"
                label="Compelling"
                state="Build"
                accent="#10B981"
                active
              />
            </div>

            <div className="mt-7 border-t border-[#0A1D2F]/[0.07] pt-6 dark:border-white/[0.07]">
              <p className="max-w-[46rem] text-sm leading-7 text-[#0A1D2F]/45 dark:text-white/39">
                The aim is not to force every exploration toward a
                launch. Sometimes the best outcome is learning quickly
                that an idea should not move forward.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            PRINCIPLE
        ===================================================== */}

        <div className="mt-14 border-y border-[#0A1D2F]/[0.08] py-9 dark:border-white/[0.08] lg:mt-20">
          <div className="grid gap-6 md:grid-cols-[0.55fr_1.45fr] md:items-center">
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-[#2563EB] dark:text-[#60A5FA]">
              Venture principle
            </p>

            <p className="max-w-[56rem] text-lg font-medium leading-8 tracking-[-0.02em] text-[#0A1D2F]/62 dark:text-white/56">
              We are interested in{" "}
              <span className="text-[#0A1D2F] dark:text-white">
                technology with a reason to exist
              </span>{" "}
              — not products created simply because a new capability
              has become available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DecisionState({
  number,
  label,
  state,
  accent,
  active = false,
}: {
  number: string;
  label: string;
  state: string;
  accent: string;
  active?: boolean;
}) {
  return (
    <div
      className="relative rounded-xl border p-5"
      style={{
        borderColor: `${accent}${active ? "48" : "22"}`,
        backgroundColor: `${accent}${active ? "0B" : "05"}`,
      }}
    >
      {active && (
        <span
          className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: accent,
            boxShadow: `0 0 12px ${accent}`,
          }}
        />
      )}

      <span
        className="font-mono text-[0.48rem]"
        style={{
          color: accent,
        }}
      >
        {number}
      </span>

      <p className="mt-7 text-sm font-semibold text-[#0A1D2F] dark:text-white">
        {label}
      </p>

      <p
        className="mt-2 text-[0.55rem] font-semibold uppercase tracking-[0.17em]"
        style={{
          color: accent,
        }}
      >
        {state}
      </p>
    </div>
  );
}