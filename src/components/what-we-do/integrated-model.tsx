"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  CircleDot,
  Orbit,
  RefreshCw,
} from "lucide-react";

const stages = [
  {
    number: "01",
    label: "Explore",
    description: "Find meaningful signals.",
    accent: "#2563EB",
  },
  {
    number: "02",
    label: "Research",
    description: "Turn signals into evidence.",
    accent: "#7C3AED",
  },
  {
    number: "03",
    label: "Engineer",
    description: "Turn evidence into systems.",
    accent: "#22D3EE",
  },
  {
    number: "04",
    label: "Build",
    description: "Turn systems into products.",
    accent: "#A855F7",
  },
  {
    number: "05",
    label: "Scale",
    description: "Strengthen what works.",
    accent: "#F97316",
  },
  {
    number: "06",
    label: "Impact",
    description: "Create meaningful change.",
    accent: "#10B981",
  },
];

export function IntegratedModel() {
  return (
    <section
      id="integrated-model"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[#F8FAFC]/[0.5] backdrop-blur-[2px] dark:bg-[#0D1117]/[0.5]" />

        <div className="absolute left-1/2 top-[40%] h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/[0.035] blur-[185px] dark:bg-[#3B82F6]/[0.05]" />

        <div className="absolute left-[58%] top-[46%] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22D3EE]/[0.03] blur-[165px] dark:bg-[#22D3EE]/[0.045]" />

        <div className="absolute left-[45%] top-[42%] h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A855F7]/[0.025] blur-[155px] dark:bg-[#A855F7]/[0.04]" />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2563EB]/20 bg-[#2563EB]/[0.05] text-[#2563EB] dark:border-[#3B82F6]/25 dark:bg-[#3B82F6]/[0.07] dark:text-[#60A5FA]">
                <Orbit className="h-4 w-4" />
              </span>

              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[#0A1D2F]/40 dark:text-white/38">
                Integrated model
              </span>
            </div>

            <h2 className="mt-7 max-w-[700px] text-[clamp(3rem,5vw,5.7rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-[#0A1D2F] dark:text-white">
              One system.
              <br />
              <span className="bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#A855F7] bg-clip-text text-transparent dark:from-[#3B82F6] dark:via-[#22D3EE] dark:to-[#A855F7]">
                Not six silos.
              </span>
            </h2>
          </div>

          <div className="max-w-[620px] lg:justify-self-end">
            <p className="text-base leading-8 text-[#0A1D2F]/58 dark:text-white/54 sm:text-[1.05rem]">
              Explore, Research, Engineer, Build, Scale and Impact are
              not separate departments handing work from one to
              another. They operate as one connected system.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
              What we learn at one stage can reshape every other stage.
              Research can change the product. Engineering can expose a
              new research question. Real-world impact can reveal the
              next opportunity.
            </p>
          </div>
        </div>

        {/* =====================================================
            SYSTEM MAP
        ===================================================== */}

        <div className="mt-16 lg:mt-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#0A1D2F]/[0.08] bg-white/[0.26] p-5 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.018] sm:p-8 lg:p-10">
            {/* central glow */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22D3EE]/[0.065] blur-[110px]"
            />

            <div className="relative hidden min-h-[650px] lg:block">
              {/* =================================================
                  CENTRAL CORE
              ================================================= */}

              <div className="absolute left-1/2 top-1/2 z-20 flex h-52 w-52 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#2563EB]/15 bg-white/[0.34] shadow-[0_0_80px_rgba(37,99,235,.08)] backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#0D1117]/[0.44]">
                <div className="absolute inset-5 rounded-full border border-[#22D3EE]/10" />
                <div className="absolute inset-10 rounded-full border border-[#A855F7]/10" />

                <div className="relative text-center">
                  <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-[#22D3EE]/20 bg-[#22D3EE]/[0.06] text-[#0891B2] dark:text-[#67E8F9]">
                    <CircleDot className="h-4 w-4" />
                  </span>

                  <p className="mt-4 text-[0.5rem] font-semibold uppercase tracking-[0.23em] text-[#0A1D2F]/28 dark:text-white/26">
                    Evolvaer
                  </p>

                  <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-[#0A1D2F] dark:text-white">
                    Operating system
                  </p>
                </div>
              </div>

              {/* =================================================
                  CONNECTION RINGS
              ================================================= */}

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0A1D2F]/[0.055] dark:border-white/[0.055]"
              />

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[570px] w-[570px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#0A1D2F]/[0.05] dark:border-white/[0.05]"
              />

              {/* =================================================
                  STAGE NODES
              ================================================= */}

              <StageNode
                className="left-[8%] top-[11%]"
                {...stages[0]}
              />

              <StageNode
                className="left-1/2 top-[2%] -translate-x-1/2"
                {...stages[1]}
              />

              <StageNode
                className="right-[8%] top-[11%]"
                {...stages[2]}
              />

              <StageNode
                className="right-[8%] bottom-[11%]"
                {...stages[3]}
              />

              <StageNode
                className="left-1/2 bottom-[2%] -translate-x-1/2"
                {...stages[4]}
              />

              <StageNode
                className="left-[8%] bottom-[11%]"
                {...stages[5]}
              />

              {/* =================================================
                  RADIAL LINES
              ================================================= */}

              <RadialLine
                className="left-[23%] top-[25%] w-[19%] rotate-[34deg]"
                accent="#2563EB"
              />

              <RadialLine
                className="left-[43%] top-[24%] w-[14%] rotate-90"
                accent="#7C3AED"
              />

              <RadialLine
                className="right-[23%] top-[25%] w-[19%] -rotate-[34deg]"
                accent="#22D3EE"
              />

              <RadialLine
                className="right-[23%] bottom-[25%] w-[19%] rotate-[34deg]"
                accent="#A855F7"
              />

              <RadialLine
                className="left-[43%] bottom-[24%] w-[14%] rotate-90"
                accent="#F97316"
              />

              <RadialLine
                className="left-[23%] bottom-[25%] w-[19%] -rotate-[34deg]"
                accent="#10B981"
              />
            </div>

            {/* =================================================
                MOBILE/TABLET SYSTEM
            ================================================= */}

            <div className="relative lg:hidden">
              <div className="rounded-[1.4rem] border border-[#2563EB]/12 bg-white/[0.3] p-5 text-center dark:border-white/[0.07] dark:bg-white/[0.018]">
                <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-[#22D3EE]/20 bg-[#22D3EE]/[0.06] text-[#0891B2] dark:text-[#67E8F9]">
                  <CircleDot className="h-4 w-4" />
                </span>

                <p className="mt-4 text-[0.5rem] font-semibold uppercase tracking-[0.22em] text-[#0A1D2F]/28 dark:text-white/26">
                  Evolvaer
                </p>

                <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-[#0A1D2F] dark:text-white">
                  One operating system
                </p>
              </div>

              <div className="mx-auto h-8 w-px bg-gradient-to-b from-[#22D3EE]/40 to-[#2563EB]/10" />

              <div className="grid gap-3 sm:grid-cols-2">
                {stages.map((stage) => (
                  <MobileStageNode
                    key={stage.label}
                    {...stage}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            FEEDBACK LOOPS
        ===================================================== */}

        <div className="mt-14 grid gap-9 lg:mt-20 lg:grid-cols-[0.62fr_1.38fr] lg:items-center">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#2563EB]/20 bg-[#2563EB]/[0.05] text-[#2563EB] dark:border-[#3B82F6]/20 dark:text-[#60A5FA]">
              <RefreshCw className="h-[18px] w-[18px]" />
            </div>

            <p className="mt-5 text-[0.58rem] font-semibold uppercase tracking-[0.27em] text-[#0A1D2F]/30 dark:text-white/28">
              Feedback loops
            </p>

            <h3 className="mt-3 max-w-[24rem] text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#0A1D2F] dark:text-white">
              Learning can move in every direction.
            </h3>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[1.6rem] border border-[#0A1D2F]/[0.08] bg-[#0A1D2F]/[0.06] dark:border-white/[0.08] dark:bg-white/[0.06] sm:grid-cols-3">
            <FeedbackItem
              from="Research"
              to="Explore"
              description="Evidence can reveal that the original opportunity was framed incorrectly."
              accent="#7C3AED"
            />

            <FeedbackItem
              from="Engineering"
              to="Research"
              description="Technical constraints can create new questions that need deeper investigation."
              accent="#22D3EE"
            />

            <FeedbackItem
              from="Impact"
              to="Explore"
              description="Real-world outcomes generate new signals, needs and opportunities."
              accent="#10B981"
            />
          </div>
        </div>

        {/* =====================================================
            THE DIFFERENCE
        ===================================================== */}

        <div className="mt-14 border-y border-[#0A1D2F]/[0.08] py-10 dark:border-white/[0.08] lg:mt-20">
          <div className="grid gap-7 md:grid-cols-[0.52fr_1.48fr] md:items-center">
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-[#2563EB] dark:text-[#60A5FA]">
              The difference
            </p>

            <p className="max-w-[58rem] text-[clamp(1.2rem,2vw,1.65rem)] font-medium leading-[1.45] tracking-[-0.025em] text-[#0A1D2F]/62 dark:text-white/56">
              We are not separating{" "}
              <span className="text-[#0A1D2F] dark:text-white">
                research from engineering, engineering from product,
                or product from real-world outcomes.
              </span>{" "}
              The connections between them are where much of the value
              is created.
            </p>
          </div>
        </div>

        {/* =====================================================
            CONTINUOUS MODEL
        ===================================================== */}

        <div className="mt-14 lg:mt-20">
          <div className="grid overflow-hidden rounded-[1.6rem] border border-[#0A1D2F]/[0.08] dark:border-white/[0.08] sm:grid-cols-6">
            {stages.map((stage, index) => (
              <div
                key={stage.label}
                className={[
                  "group relative min-h-[10rem] bg-white/[0.32] px-5 py-6 backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.48] dark:bg-white/[0.015] dark:hover:bg-white/[0.03]",
                  index > 0
                    ? "border-t border-[#0A1D2F]/[0.07] dark:border-white/[0.07] sm:border-l sm:border-t-0"
                    : "",
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      backgroundColor: stage.accent,
                    }}
                  />

                  <span className="font-mono text-[0.48rem] text-[#0A1D2F]/20 dark:text-white/18">
                    {stage.number}
                  </span>
                </div>

                <p className="mt-7 text-sm font-semibold text-[#0A1D2F]/62 dark:text-white/52">
                  {stage.label}
                </p>

                <p className="mt-2 text-[0.68rem] leading-5 text-[#0A1D2F]/35 dark:text-white/30">
                  {stage.description}
                </p>

                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                  style={{
                    backgroundColor: stage.accent,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            HAND-OFF TO CTA
        ===================================================== */}

        <div className="mt-14 flex flex-col gap-6 border-t border-[#0A1D2F]/[0.08] pt-7 dark:border-white/[0.08] sm:flex-row sm:items-center sm:justify-between lg:mt-20">
          <div>
            <p className="text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-[#0A1D2F]/25 dark:text-white/22">
              From possibility
            </p>

            <p className="mt-2 text-sm font-semibold text-[#0A1D2F]/58 dark:text-white/48">
              To technology that creates real value.
            </p>
          </div>

          <Link
            href="#what-we-do-cta"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-[#0A1D2F]/55 transition-colors hover:text-[#2563EB] dark:text-white/45 dark:hover:text-[#60A5FA]"
          >
            Continue

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2563EB]/20 transition-all duration-300 group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white dark:border-[#3B82F6]/25 dark:group-hover:bg-[#3B82F6]">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function StageNode({
  number,
  label,
  description,
  accent,
  className,
}: {
  number: string;
  label: string;
  description: string;
  accent: string;
  className: string;
}) {
  return (
    <div
      className={`absolute z-10 w-[220px] rounded-[1.25rem] border bg-white/[0.4] p-5 backdrop-blur-xl dark:bg-[#0D1117]/[0.46] ${className}`}
      style={{
        borderColor: `${accent}30`,
      }}
    >
      <div className="flex items-center justify-between">
        <span
          className="h-2 w-2 rounded-full"
          style={{
            backgroundColor: accent,
            boxShadow: `0 0 12px ${accent}70`,
          }}
        />

        <span className="font-mono text-[0.48rem] text-[#0A1D2F]/22 dark:text-white/20">
          {number}
        </span>
      </div>

      <p className="mt-5 text-sm font-semibold text-[#0A1D2F] dark:text-white">
        {label}
      </p>

      <p className="mt-2 text-[0.67rem] leading-5 text-[#0A1D2F]/38 dark:text-white/32">
        {description}
      </p>
    </div>
  );
}

function MobileStageNode({
  number,
  label,
  description,
  accent,
}: {
  number: string;
  label: string;
  description: string;
  accent: string;
}) {
  return (
    <div
      className="rounded-[1.1rem] border bg-white/[0.28] p-5 dark:bg-white/[0.015]"
      style={{
        borderColor: `${accent}25`,
      }}
    >
      <div className="flex items-center justify-between">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: accent,
          }}
        />

        <span className="font-mono text-[0.48rem] text-[#0A1D2F]/20 dark:text-white/18">
          {number}
        </span>
      </div>

      <p className="mt-5 text-sm font-semibold text-[#0A1D2F] dark:text-white">
        {label}
      </p>

      <p className="mt-2 text-xs leading-5 text-[#0A1D2F]/36 dark:text-white/31">
        {description}
      </p>
    </div>
  );
}

function RadialLine({
  className,
  accent,
}: {
  className: string;
  accent: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`absolute left-1/2 top-1/2 h-px origin-left ${className}`}
      style={{
        background: `linear-gradient(90deg, ${accent}10, ${accent}60, ${accent}10)`,
      }}
    />
  );
}

function FeedbackItem({
  from,
  to,
  description,
  accent,
}: {
  from: string;
  to: string;
  description: string;
  accent: string;
}) {
  return (
    <div className="bg-white/[0.56] p-6 dark:bg-[#0D1117]/[0.66] sm:p-7">
      <div className="flex items-center gap-3">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: accent,
          }}
        />

        <p className="text-[0.52rem] font-semibold uppercase tracking-[0.18em] text-[#0A1D2F]/28 dark:text-white/25">
          Feedback
        </p>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <span className="text-sm font-semibold text-[#0A1D2F]/62 dark:text-white/52">
          {from}
        </span>

        <span style={{ color: accent }}>→</span>

        <span className="text-sm font-semibold text-[#0A1D2F] dark:text-white">
          {to}
        </span>
      </div>

      <p className="mt-4 text-xs leading-6 text-[#0A1D2F]/40 dark:text-white/34">
        {description}
      </p>
    </div>
  );
}