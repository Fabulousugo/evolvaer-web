"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  CircleCheck,
  Globe2,
  RefreshCw,
  Target,
} from "lucide-react";

const impactDimensions = [
  {
    number: "01",
    icon: Target,
    label: "Outcomes",
    title: "Measure what changed",
    description:
      "We look beyond activity and output to understand whether the product is creating the outcome it was designed to achieve.",
    accent: "#10B981",
  },
  {
    number: "02",
    icon: BarChart3,
    label: "Evidence",
    title: "Learn from reality",
    description:
      "Usage, performance and outcome data help us understand where the product is succeeding, where it is falling short and what deserves attention next.",
    accent: "#22D3EE",
  },
  {
    number: "03",
    icon: Globe2,
    label: "Reach",
    title: "Extend useful value",
    description:
      "Impact becomes stronger when a useful solution can reach more of the people, organisations or systems that genuinely benefit from it.",
    accent: "#2563EB",
  },
  {
    number: "04",
    icon: RefreshCw,
    label: "Evolution",
    title: "Feed learning back in",
    description:
      "What we learn from real-world impact becomes a new signal — informing the next iteration, research question or technological opportunity.",
    accent: "#7C3AED",
  },
];

export function ImpactStage() {
  return (
    <section
      id="impact"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[#F8FAFC]/[0.58] backdrop-blur-[2px] dark:bg-[#0D1117]/[0.58]" />

        <div className="absolute -right-48 top-[5%] h-[38rem] w-[38rem] rounded-full bg-[#10B981]/[0.045] blur-[175px] dark:bg-[#22D3EE]/[0.055]" />

        <div className="absolute -left-52 bottom-[-13rem] h-[36rem] w-[36rem] rounded-full bg-[#2563EB]/[0.04] blur-[170px] dark:bg-[#3B82F6]/[0.055]" />

        <div
          className="absolute inset-0 opacity-[0.017] dark:opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(16,185,129,.28) 1px, transparent 1px)
            `,
            backgroundSize: "38px 38px",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#10B981]/25 bg-[#10B981]/[0.06] text-[0.58rem] font-bold tracking-[0.12em] text-[#059669] dark:border-[#22D3EE]/25 dark:bg-[#22D3EE]/[0.07] dark:text-[#67E8F9]">
                06
              </span>

              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[#0A1D2F]/40 dark:text-white/38">
                Impact
              </span>
            </div>

            <h2 className="mt-7 max-w-[680px] text-[clamp(2.8rem,4.7vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#0A1D2F] dark:text-white">
              Make sure it
              <br />
              actually{" "}
              <span className="bg-gradient-to-r from-[#10B981] via-[#22D3EE] to-[#2563EB] bg-clip-text text-transparent dark:from-[#34D399] dark:via-[#22D3EE] dark:to-[#3B82F6]">
                matters.
              </span>
            </h2>
          </div>

          <div className="max-w-[610px] lg:justify-self-end">
            <p className="text-base leading-8 text-[#0A1D2F]/58 dark:text-white/54 sm:text-[1.05rem]">
              Technology has little value simply because it exists.
              The final test is whether it improves something that
              matters — a decision, an experience, an organisation,
              an industry or a wider system.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
              Impact closes the loop between what we imagined and what
              actually happened.
            </p>
          </div>
        </div>

        {/* =====================================================
            IMPACT DIMENSIONS
        ===================================================== */}

        <div className="mt-16 lg:mt-20">
          <div className="grid gap-px overflow-hidden rounded-[1.8rem] border border-[#0A1D2F]/[0.08] bg-[#0A1D2F]/[0.07] dark:border-white/[0.08] dark:bg-white/[0.07] md:grid-cols-2">
            {impactDimensions.map((dimension) => {
              const Icon = dimension.icon;

              return (
                <article
                  key={dimension.title}
                  className="group relative min-h-[22rem] overflow-hidden bg-white/[0.67] p-7 backdrop-blur-xl dark:bg-[#0D1117]/[0.69] sm:p-9"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      backgroundColor: `${dimension.accent}18`,
                    }}
                  />

                  <div
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                    style={{
                      background: `linear-gradient(90deg, ${dimension.accent}, transparent)`,
                    }}
                  />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl border"
                        style={{
                          color: dimension.accent,
                          borderColor: `${dimension.accent}30`,
                          backgroundColor: `${dimension.accent}0D`,
                        }}
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </div>

                      <span className="font-mono text-[0.55rem] tracking-[0.18em] text-[#0A1D2F]/20 dark:text-white/18">
                        IMPACT / {dimension.number}
                      </span>
                    </div>

                    <div className="mt-auto pt-16">
                      <p
                        className="text-[0.55rem] font-semibold uppercase tracking-[0.23em]"
                        style={{
                          color: dimension.accent,
                        }}
                      >
                        {dimension.label}
                      </p>

                      <h3 className="mt-3 text-[1.4rem] font-semibold tracking-[-0.035em] text-[#0A1D2F] dark:text-white">
                        {dimension.title}
                      </h3>

                      <p className="mt-4 max-w-[29rem] text-sm leading-7 text-[#0A1D2F]/46 dark:text-white/40">
                        {dimension.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            VALUE CHAIN
        ===================================================== */}

        <div className="mt-14 grid gap-9 lg:mt-20 lg:grid-cols-[0.62fr_1.38fr] lg:items-center">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#10B981]/20 bg-[#10B981]/[0.05] text-[#059669] dark:border-[#22D3EE]/20 dark:text-[#67E8F9]">
              <CircleCheck className="h-[18px] w-[18px]" />
            </div>

            <p className="mt-5 text-[0.58rem] font-semibold uppercase tracking-[0.27em] text-[#0A1D2F]/30 dark:text-white/28">
              Value chain
            </p>

            <h3 className="mt-3 max-w-[25rem] text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#0A1D2F] dark:text-white">
              Output is not the same thing as impact.
            </h3>

            <p className="mt-4 max-w-[25rem] text-sm leading-7 text-[#0A1D2F]/42 dark:text-white/36">
              Shipping the technology is a milestone. What happens
              because people use it is what ultimately matters.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[1.7rem] border border-[#0A1D2F]/[0.08] bg-white/[0.28] p-6 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.02] sm:p-8">
            <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
              <ImpactNode
                number="01"
                eyebrow="Output"
                title="We built it"
                description="A product or technological system exists."
                accent="#2563EB"
              />

              <ImpactConnector />

              <ImpactNode
                number="02"
                eyebrow="Outcome"
                title="It changed something"
                description="People or organisations experience meaningful value."
                accent="#22D3EE"
              />

              <ImpactConnector />

              <ImpactNode
                number="03"
                eyebrow="Impact"
                title="The value endures"
                description="The improvement becomes significant, repeatable or wider-reaching."
                accent="#10B981"
                active
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            IMPACT SIGNAL
        ===================================================== */}

        <div className="mt-14 lg:mt-20">
          <div className="relative overflow-hidden rounded-[1.8rem] border border-[#10B981]/15 bg-[#10B981]/[0.025] p-7 backdrop-blur-xl dark:border-[#22D3EE]/15 dark:bg-[#22D3EE]/[0.018] sm:p-9 lg:p-11">
            <div
              aria-hidden="true"
              className="absolute left-[55%] top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22D3EE]/[0.07] blur-[100px]"
            />

            <div className="relative grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div>
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.27em] text-[#059669] dark:text-[#67E8F9]">
                  The loop continues
                </p>

                <h3 className="mt-4 max-w-[26rem] text-[clamp(2rem,3vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-[#0A1D2F] dark:text-white">
                  Impact creates new signals.
                </h3>
              </div>

              <div>
                <p className="max-w-[38rem] text-base leading-8 text-[#0A1D2F]/52 dark:text-white/46">
                  Every product changes the environment around it.
                  New behaviours emerge. New constraints appear. New
                  possibilities become visible.
                </p>

                <p className="mt-4 max-w-[38rem] text-sm leading-7 text-[#0A1D2F]/38 dark:text-white/34">
                  Those observations return to exploration and
                  research, allowing the system to evolve rather than
                  treating innovation as a one-way pipeline.
                </p>
              </div>
            </div>

            {/* LOOP DIAGRAM */}

            <div className="relative mt-10 overflow-hidden rounded-[1.3rem] border border-[#0A1D2F]/[0.07] bg-white/[0.3] px-5 py-6 dark:border-white/[0.07] dark:bg-white/[0.018]">
              <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] sm:items-center">
                <LoopNode
                  number="01"
                  label="Impact"
                  accent="#10B981"
                />

                <LoopArrow />

                <LoopNode
                  number="02"
                  label="Learning"
                  accent="#22D3EE"
                />

                <LoopArrow />

                <LoopNode
                  number="03"
                  label="New signal"
                  accent="#7C3AED"
                />

                <LoopArrow />

                <LoopNode
                  number="04"
                  label="Explore again"
                  accent="#2563EB"
                />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            PRINCIPLE
        ===================================================== */}

        <div className="mt-14 border-y border-[#0A1D2F]/[0.08] py-9 dark:border-white/[0.08] lg:mt-20">
          <div className="grid gap-6 md:grid-cols-[0.55fr_1.45fr] md:items-center">
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-[#059669] dark:text-[#34D399]">
              Impact principle
            </p>

            <p className="max-w-[55rem] text-lg font-medium leading-8 tracking-[-0.02em] text-[#0A1D2F]/62 dark:text-white/56">
              Innovation is not complete when something launches.{" "}
              <span className="text-[#0A1D2F] dark:text-white">
                It becomes meaningful when the technology creates
                useful, observable and lasting change.
              </span>
            </p>
          </div>
        </div>

        {/* =====================================================
            SIX-STAGE COMPLETION
        ===================================================== */}

        <div className="mt-14 lg:mt-20">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.27em] text-[#0A1D2F]/30 dark:text-white/28">
                Process complete
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-[#0A1D2F] dark:text-white">
                From uncertainty to impact.
              </h3>
            </div>

            <p className="max-w-[30rem] text-sm leading-7 text-[#0A1D2F]/42 dark:text-white/36">
              Six stages, connected by learning rather than separated
              into isolated departments.
            </p>
          </div>

          <div className="mt-8 grid overflow-hidden rounded-[1.4rem] border border-[#0A1D2F]/[0.08] dark:border-white/[0.08] sm:grid-cols-3 lg:grid-cols-6">
            {[
              {
                number: "01",
                label: "Explore",
                accent: "#2563EB",
              },
              {
                number: "02",
                label: "Research",
                accent: "#7C3AED",
              },
              {
                number: "03",
                label: "Engineer",
                accent: "#22D3EE",
              },
              {
                number: "04",
                label: "Build",
                accent: "#A855F7",
              },
              {
                number: "05",
                label: "Scale",
                accent: "#F97316",
              },
              {
                number: "06",
                label: "Impact",
                accent: "#10B981",
              },
            ].map((item, index) => (
              <div
                key={item.label}
                className={[
                  "relative bg-white/[0.38] px-5 py-6 backdrop-blur-xl dark:bg-white/[0.018]",
                  index > 0
                    ? "border-t border-[#0A1D2F]/[0.07] dark:border-white/[0.07] sm:border-l sm:border-t-0"
                    : "",
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      backgroundColor: item.accent,
                      boxShadow:
                        index === 5
                          ? `0 0 14px ${item.accent}`
                          : undefined,
                    }}
                  />

                  <span className="font-mono text-[0.48rem] text-[#0A1D2F]/20 dark:text-white/18">
                    {item.number}
                  </span>
                </div>

                <p className="mt-7 text-sm font-semibold text-[#0A1D2F]/60 dark:text-white/50">
                  {item.label}
                </p>

                <div
                  className="absolute bottom-0 left-0 h-[2px]"
                  style={{
                    width: "100%",
                    backgroundColor: item.accent,
                    opacity: index === 5 ? 0.9 : 0.28,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            HAND-OFF
        ===================================================== */}

        <div className="mt-14 flex flex-col gap-6 border-t border-[#0A1D2F]/[0.08] pt-7 dark:border-white/[0.08] sm:flex-row sm:items-center sm:justify-between lg:mt-20">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-[#0A1D2F]/25 dark:text-white/22">
              Six stages
            </span>

            <span className="h-px w-12 bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#10B981]" />

            <span className="text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-[#059669] dark:text-[#34D399]">
              One operating model
            </span>
          </div>

          <Link
            href="#integrated-model"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-[#0A1D2F]/55 transition-colors hover:text-[#10B981] dark:text-white/45 dark:hover:text-[#34D399]"
          >
            See how it connects

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#10B981]/20 transition-all duration-300 group-hover:border-[#10B981] group-hover:bg-[#10B981] group-hover:text-white">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ImpactNode({
  number,
  eyebrow,
  title,
  description,
  accent,
  active = false,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  accent: string;
  active?: boolean;
}) {
  return (
    <div
      className="relative rounded-xl border p-5"
      style={{
        borderColor: `${accent}${active ? "50" : "25"}`,
        backgroundColor: `${accent}${active ? "0D" : "06"}`,
      }}
    >
      {active && (
        <span
          className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: accent,
            boxShadow: `0 0 14px ${accent}`,
          }}
        />
      )}

      <div className="flex items-center gap-3">
        <span
          className="font-mono text-[0.5rem] font-semibold"
          style={{
            color: accent,
          }}
        >
          {number}
        </span>

        <span className="text-[0.48rem] font-semibold uppercase tracking-[0.2em] text-[#0A1D2F]/25 dark:text-white/22">
          {eyebrow}
        </span>
      </div>

      <p className="mt-5 text-base font-semibold tracking-[-0.025em] text-[#0A1D2F] dark:text-white">
        {title}
      </p>

      <p className="mt-2 text-xs leading-6 text-[#0A1D2F]/38 dark:text-white/34">
        {description}
      </p>
    </div>
  );
}

function ImpactConnector() {
  return (
    <div className="hidden items-center md:flex">
      <span className="h-px w-5 bg-[#0A1D2F]/10 dark:bg-white/10" />

      <span className="mx-1 text-[0.55rem] text-[#10B981]/70">
        →
      </span>

      <span className="h-px w-5 bg-[#0A1D2F]/10 dark:bg-white/10" />
    </div>
  );
}

function LoopNode({
  number,
  label,
  accent,
}: {
  number: string;
  label: string;
  accent: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[0.5rem] font-bold"
        style={{
          borderColor: `${accent}35`,
          backgroundColor: `${accent}0B`,
          color: accent,
        }}
      >
        {number}
      </span>

      <span className="text-xs font-semibold text-[#0A1D2F]/55 dark:text-white/46">
        {label}
      </span>
    </div>
  );
}

function LoopArrow() {
  return (
    <div className="hidden items-center sm:flex">
      <span className="h-px w-5 bg-gradient-to-r from-[#22D3EE]/20 to-[#2563EB]/40" />

      <span className="ml-1 text-[0.55rem] text-[#2563EB]/60 dark:text-[#60A5FA]/60">
        →
      </span>
    </div>
  );
}