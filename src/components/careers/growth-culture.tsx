"use client";

import {
  ArrowUpRight,
  BrainCircuit,
  CircleDot,
  GitBranch,
  Layers3,
  MoveUpRight,
  Network,
  Orbit,
} from "lucide-react";

const growthDimensions = [
  {
    number: "01",
    title: "Depth",
    description:
      "Strengthen your craft and develop a deeper understanding of the tools, systems and decisions within your discipline.",
    shift: "Know more deeply",
    icon: Layers3,
    accent: "#2563EB",
  },
  {
    number: "02",
    title: "Range",
    description:
      "Understand how your work connects with other disciplines, constraints and parts of the wider problem.",
    shift: "See more broadly",
    icon: Network,
    accent: "#22D3EE",
  },
  {
    number: "03",
    title: "Judgement",
    description:
      "Become better at deciding what matters, where uncertainty remains and when a different direction may be stronger.",
    shift: "Decide more clearly",
    icon: BrainCircuit,
    accent: "#A855F7",
  },
  {
    number: "04",
    title: "Impact",
    description:
      "Increase your ability to turn knowledge and capability into outcomes that improve the work around you.",
    shift: "Contribute more meaningfully",
    icon: MoveUpRight,
    accent: "#10B981",
  },
];

export function GrowthCulture() {
  return (
    <section
      id="growth"
      className="relative overflow-x-clip border-t border-[#0A1D2F]/[0.06] bg-white/[0.46] py-24 backdrop-blur-[2px] dark:border-white/[0.06] dark:bg-[#0D1117]/[0.48] sm:py-28 lg:py-32"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(37,99,235,.24) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 16%, black 84%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 16%, black 84%, transparent)",
          }}
        />

        <div className="absolute -left-40 top-[10%] h-[32rem] w-[32rem] rounded-full bg-[#10B981]/[0.025] blur-[160px] dark:bg-[#10B981]/[0.04]" />

        <div className="absolute right-[-12rem] bottom-[5%] h-[32rem] w-[32rem] rounded-full bg-[#2563EB]/[0.025] blur-[160px] dark:bg-[#3B82F6]/[0.04]" />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.5rem] text-[#10B981]">
                04
              </span>

              <span className="h-px w-8 bg-[#10B981]/35" />

              <div className="flex items-center gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-[#10B981]" />

                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#10B981]">
                  Growth
                </p>
              </div>
            </div>

            <h2 className="mt-6 max-w-[670px] text-[2.55rem] font-semibold leading-[1.02] tracking-[-0.045em] text-[#0A1D2F] dark:text-white sm:text-[3.2rem] lg:text-[3.8rem]">
              Strong people should
              <br />
              <span className="text-[#10B981]">
                keep evolving.
              </span>
            </h2>
          </div>

          <div className="lg:pt-10">
            <p className="max-w-[700px] text-lg leading-8 text-[#0A1D2F]/58 dark:text-white/54">
              Growth is not only about a new title. It is
              about becoming capable of understanding,
              shaping and solving increasingly difficult
              problems.
            </p>

            <p className="mt-5 max-w-[650px] text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
              As Evolvaer develops, the problems will change.
              The technologies will change. The company will
              change. The people building it should have
              room to evolve with the work.
            </p>
          </div>
        </div>

        {/* =====================================================
            GROWTH FIELD
        ===================================================== */}

        <div className="mt-16 grid gap-px overflow-hidden border-y border-[#0A1D2F]/[0.075] bg-[#0A1D2F]/[0.05] dark:border-white/[0.075] dark:bg-white/[0.05] lg:grid-cols-[1.12fr_0.88fr]">
          <div className="relative min-h-[31rem] overflow-hidden bg-white/[0.43] p-7 backdrop-blur-xl dark:bg-[#0D1117]/[0.45] sm:p-9 lg:p-10">
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-3">
                <GitBranch className="h-4 w-4 text-[#10B981]" />

                <p className="text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-[#0A1D2F]/36 dark:text-white/31">
                  Capability growth
                </p>
              </div>

              <span className="font-mono text-[0.42rem] uppercase tracking-[0.13em] text-[#10B981]">
                Expanding
              </span>
            </div>

            <div className="mt-10">
              <GrowthMap />
            </div>
          </div>

          <div className="flex flex-col justify-between bg-white/[0.6] p-7 backdrop-blur-xl dark:bg-[#0D1117]/[0.6] sm:p-9 lg:p-10">
            <div>
              <div className="flex items-center gap-3">
                <Orbit className="h-4 w-4 text-[#2563EB]" />

                <p className="text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-[#0A1D2F]/36 dark:text-white/31">
                  The direction
                </p>
              </div>

              <p className="mt-8 max-w-[500px] text-[1.55rem] font-medium leading-[1.4] tracking-[-0.035em] text-[#0A1D2F]/69 dark:text-white/64 sm:text-[1.85rem]">
                From being good at a task
                <br />
                to being able to{" "}
                <span className="text-[#10B981]">
                  shape the problem.
                </span>
              </p>

              <p className="mt-5 max-w-[480px] text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
                Technical depth remains important. But as
                capability grows, so should context,
                judgement, collaboration and responsibility
                for the outcome.
              </p>
            </div>

            <div className="mt-10 border-t border-[#0A1D2F]/[0.07] pt-6 dark:border-white/[0.07]">
              <GrowthShift
                from="Execute"
                to="Understand"
              />

              <GrowthShift
                from="Understand"
                to="Influence"
              />

              <GrowthShift
                from="Influence"
                to="Shape"
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            FOUR DIMENSIONS
        ===================================================== */}

        <div className="mt-16">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="font-mono text-[0.45rem] uppercase tracking-[0.15em] text-[#0A1D2F]/25 dark:text-white/22">
                Growth dimensions / 04
              </p>

              <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-[#0A1D2F] dark:text-white">
                More capable, not simply more senior.
              </h3>
            </div>

            <p className="hidden max-w-[400px] text-right text-xs leading-6 text-[#0A1D2F]/31 dark:text-white/27 md:block">
              Growth can happen in several directions at
              once.
            </p>
          </div>

          <div className="mt-7 grid gap-px overflow-hidden border-y border-[#0A1D2F]/[0.075] bg-[#0A1D2F]/[0.055] dark:border-white/[0.075] dark:bg-white/[0.05] md:grid-cols-2 xl:grid-cols-4">
            {growthDimensions.map((dimension) => {
              const Icon = dimension.icon;

              return (
                <article
                  key={dimension.title}
                  className="group relative min-h-[25rem] bg-white/[0.56] p-7 backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.76] dark:bg-[#0D1117]/[0.57] dark:hover:bg-[#111822]/[0.72]"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{
                      backgroundColor:
                        dimension.accent,
                    }}
                  />

                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full border"
                      style={{
                        borderColor: `${dimension.accent}28`,
                        backgroundColor: `${dimension.accent}08`,
                      }}
                    >
                      <Icon
                        className="h-4 w-4"
                        style={{
                          color: dimension.accent,
                        }}
                      />
                    </div>

                    <span
                      className="font-mono text-[0.44rem]"
                      style={{
                        color: dimension.accent,
                      }}
                    >
                      {dimension.number}
                    </span>
                  </div>

                  <h4 className="mt-8 text-[1.35rem] font-semibold tracking-[-0.025em] text-[#0A1D2F] dark:text-white">
                    {dimension.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-[#0A1D2F]/43 dark:text-white/38">
                    {dimension.description}
                  </p>

                  <div className="absolute inset-x-7 bottom-7 border-t border-[#0A1D2F]/[0.07] pt-5 dark:border-white/[0.07]">
                    <p className="text-[0.43rem] font-semibold uppercase tracking-[0.13em] text-[#0A1D2F]/24 dark:text-white/21">
                      Direction
                    </p>

                    <p
                      className="mt-2 text-xs font-semibold"
                      style={{
                        color: dimension.accent,
                      }}
                    >
                      {dimension.shift}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            GROWTH LOOP
        ===================================================== */}

        <div className="mt-16 grid gap-10 border-t border-[#0A1D2F]/[0.08] pt-10 dark:border-white/[0.08] lg:grid-cols-[0.62fr_1.38fr]">
          <div>
            <p className="text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-[#A855F7]">
              Growth loop
            </p>

            <p className="mt-3 max-w-[300px] text-xs leading-6 text-[#0A1D2F]/31 dark:text-white/27">
              Capability develops through repeated contact
              with harder questions.
            </p>
          </div>

          <div>
            <GrowthLoop />
          </div>
        </div>

        {/* =====================================================
            STATEMENT
        ===================================================== */}

        <div className="mt-16 border-y border-[#0A1D2F]/[0.08] py-10 dark:border-white/[0.08]">
          <div className="grid gap-8 lg:grid-cols-[0.45fr_1.55fr]">
            <div className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_12px_rgba(16,185,129,.45)]" />

              <p className="text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-[#10B981]">
                Growth principle
              </p>
            </div>

            <p className="max-w-[900px] text-[1.55rem] font-medium leading-[1.45] tracking-[-0.035em] text-[#0A1D2F]/67 dark:text-white/62 sm:text-[1.9rem]">
              The aim is not to know everything. It is to
              become{" "}
              <span className="text-[#0A1D2F] dark:text-white">
                better at learning what the next problem
                requires.
              </span>
            </p>
          </div>
        </div>

        {/* =====================================================
            HANDOFF
        ===================================================== */}

        <div className="mt-16 flex items-center justify-between border-t border-[#0A1D2F]/[0.08] pt-6 dark:border-white/[0.08]">
          <span className="font-mono text-[0.43rem] uppercase tracking-[0.15em] text-[#0A1D2F]/22 dark:text-white/19">
            Careers / 04
          </span>

          <a
            href="#careers-values"
            className="group inline-flex items-center gap-3 text-[0.5rem] font-semibold uppercase tracking-[0.17em] text-[#0A1D2F]/35 transition-colors hover:text-[#2563EB] dark:text-white/30 dark:hover:text-[#60A5FA]"
          >
            What we value

            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   GROWTH MAP
============================================================ */

function GrowthMap() {
  return (
    <div className="relative mx-auto h-[21rem] max-w-[44rem]">
      {/* primary branches */}

      <Branch
        className="left-[49%] top-[47%] w-[27%] -rotate-[31deg]"
        from="#10B981"
        to="#2563EB"
      />

      <Branch
        className="left-[49%] top-[49%] w-[29%] rotate-[29deg]"
        from="#10B981"
        to="#22D3EE"
      />

      <Branch
        className="right-[49%] top-[47%] w-[27%] origin-right rotate-[31deg]"
        from="#10B981"
        to="#A855F7"
      />

      <Branch
        className="right-[49%] top-[49%] w-[29%] origin-right -rotate-[29deg]"
        from="#10B981"
        to="#2563EB"
      />

      {/* secondary branches */}

      <Branch
        className="left-[68%] top-[27%] w-[15%] -rotate-[35deg]"
        from="#2563EB"
        to="#22D3EE"
        faint
      />

      <Branch
        className="left-[69%] top-[69%] w-[15%] rotate-[32deg]"
        from="#22D3EE"
        to="#10B981"
        faint
      />

      <Branch
        className="right-[68%] top-[27%] w-[15%] origin-right rotate-[35deg]"
        from="#A855F7"
        to="#2563EB"
        faint
      />

      <Branch
        className="right-[69%] top-[69%] w-[15%] origin-right -rotate-[32deg]"
        from="#2563EB"
        to="#10B981"
        faint
      />

      {/* central capability */}

      <GrowthNode
        className="left-1/2 top-1/2"
        label="Capability"
        accent="#10B981"
        central
      />

      {/* first generation */}

      <GrowthNode
        className="right-[17%] top-[14%]"
        label="Depth"
        accent="#2563EB"
      />

      <GrowthNode
        className="right-[14%] bottom-[12%]"
        label="Range"
        accent="#22D3EE"
      />

      <GrowthNode
        className="left-[17%] top-[14%]"
        label="Judgement"
        accent="#A855F7"
      />

      <GrowthNode
        className="left-[14%] bottom-[12%]"
        label="Impact"
        accent="#2563EB"
      />

      {/* outer capability */}

      <span className="absolute right-[4%] top-[2%] h-1.5 w-1.5 rounded-full bg-[#22D3EE]/70 shadow-[0_0_9px_rgba(34,211,238,.45)]" />

      <span className="absolute right-[2%] bottom-[1%] h-1.5 w-1.5 rounded-full bg-[#10B981]/65 shadow-[0_0_9px_rgba(16,185,129,.4)]" />

      <span className="absolute left-[4%] top-[2%] h-1.5 w-1.5 rounded-full bg-[#2563EB]/65 shadow-[0_0_9px_rgba(37,99,235,.4)]" />

      <span className="absolute bottom-[1%] left-[2%] h-1.5 w-1.5 rounded-full bg-[#10B981]/65 shadow-[0_0_9px_rgba(16,185,129,.4)]" />
    </div>
  );
}

function GrowthNode({
  className,
  label,
  accent,
  central = false,
}: {
  className: string;
  label: string;
  accent: string;
  central?: boolean;
}) {
  return (
    <div
      className={`absolute -translate-x-1/2 -translate-y-1/2 ${className}`}
    >
      <div className="flex flex-col items-center">
        <div className="relative flex items-center justify-center">
          {central && (
            <>
              <span className="absolute h-20 w-20 rounded-full border border-[#10B981]/[0.055]" />
              <span className="absolute h-12 w-12 rounded-full border border-[#10B981]/10" />
            </>
          )}

          <span
            className={
              central
                ? "relative h-4 w-4 rounded-full"
                : "relative h-2.5 w-2.5 rounded-full"
            }
            style={{
              backgroundColor: accent,
              boxShadow: `0 0 ${
                central ? "22px" : "13px"
              } ${accent}75`,
            }}
          />
        </div>

        <span className="mt-4 whitespace-nowrap text-[0.45rem] font-semibold uppercase tracking-[0.13em] text-[#0A1D2F]/33 dark:text-white/29">
          {label}
        </span>
      </div>
    </div>
  );
}

function Branch({
  className,
  from,
  to,
  faint = false,
}: {
  className: string;
  from: string;
  to: string;
  faint?: boolean;
}) {
  return (
    <span
      className={`absolute h-px ${className}`}
      style={{
        opacity: faint ? 0.5 : 1,
        background: `linear-gradient(90deg, ${from}30, ${to}55)`,
      }}
    />
  );
}

/* ============================================================
   GROWTH SHIFT
============================================================ */

function GrowthShift({
  from,
  to,
}: {
  from: string;
  to: string;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-[#0A1D2F]/[0.055] py-3 first:pt-0 last:border-b-0 last:pb-0 dark:border-white/[0.055]">
      <span className="w-[5.2rem] text-[0.48rem] font-semibold uppercase tracking-[0.12em] text-[#0A1D2F]/28 dark:text-white/24">
        {from}
      </span>

      <span className="h-px flex-1 bg-gradient-to-r from-[#2563EB]/15 via-[#22D3EE]/35 to-[#10B981]/25" />

      <span className="w-[5.2rem] text-right text-[0.48rem] font-semibold uppercase tracking-[0.12em] text-[#10B981]">
        {to}
      </span>
    </div>
  );
}

/* ============================================================
   GROWTH LOOP
============================================================ */

function GrowthLoop() {
  const stages = [
    {
      label: "Challenge",
      accent: "#2563EB",
    },
    {
      label: "Experience",
      accent: "#22D3EE",
    },
    {
      label: "Reflection",
      accent: "#A855F7",
    },
    {
      label: "Learning",
      accent: "#10B981",
    },
    {
      label: "Capability",
      accent: "#2563EB",
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-y-5">
      {stages.map((stage, index) => (
        <div
          key={stage.label}
          className="flex items-center"
        >
          <div className="flex items-center gap-2.5">
            <span
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: stage.accent,
                boxShadow: `0 0 8px ${stage.accent}60`,
              }}
            />

            <span className="text-[0.52rem] font-semibold uppercase tracking-[0.14em] text-[#0A1D2F]/40 dark:text-white/35">
              {stage.label}
            </span>
          </div>

          {index < stages.length - 1 && (
            <div className="mx-4 flex items-center gap-1 sm:mx-5">
              <span className="h-px w-5 bg-[#0A1D2F]/10 dark:bg-white/10 sm:w-8" />

              <span className="h-1 w-1 rotate-45 border-r border-t border-[#0A1D2F]/20 dark:border-white/20" />
            </div>
          )}
        </div>
      ))}

      <div className="ml-4 hidden items-center gap-2 xl:flex">
        <span className="h-px w-7 bg-gradient-to-r from-[#2563EB]/20 to-transparent" />

        <span className="font-mono text-[0.5rem] text-[#2563EB]/45 dark:text-[#60A5FA]/45">
          ↺
        </span>
      </div>
    </div>
  );
}