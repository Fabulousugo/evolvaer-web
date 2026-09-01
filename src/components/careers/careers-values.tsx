"use client";

import {
  ArrowUpRight,
  CircleDot,
  Compass,
  Gauge,
  Scale,
  Sparkles,
} from "lucide-react";

const values = [
  {
    number: "01",
    title: "Curious",
    description:
      "Stay interested in what you do not yet understand. Ask better questions, look beyond the obvious and remain open to being surprised.",
    question: "What are we missing?",
    icon: Compass,
    accent: "#2563EB",
  },
  {
    number: "02",
    title: "Thoughtful",
    description:
      "Take the time to understand context, consequences and trade-offs before turning activity into decisions.",
    question: "What actually matters here?",
    icon: Sparkles,
    accent: "#A855F7",
  },
  {
    number: "03",
    title: "Ambitious",
    description:
      "Aim for work that meaningfully improves what exists rather than simply reproducing what is already familiar.",
    question: "How much better could this become?",
    icon: Gauge,
    accent: "#22D3EE",
  },
  {
    number: "04",
    title: "Responsible",
    description:
      "Consider the people, systems and consequences affected by what we create. Capability should be matched by judgement.",
    question: "What responsibility comes with this?",
    icon: Scale,
    accent: "#10B981",
  },
];

export function CareersValues() {
  return (
    <section
      id="careers-values"
      className="relative overflow-x-clip border-t border-[#0A1D2F]/[0.06] bg-[#F8FAFC]/[0.55] py-24 backdrop-blur-[2px] dark:border-white/[0.06] dark:bg-[#0D1117]/[0.54] sm:py-28 lg:py-32"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.18) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)",
          }}
        />

        <div className="absolute left-[-10rem] top-[10%] h-[30rem] w-[30rem] rounded-full bg-[#A855F7]/[0.025] blur-[160px] dark:bg-[#A855F7]/[0.04]" />

        <div className="absolute right-[-12rem] bottom-[5%] h-[30rem] w-[30rem] rounded-full bg-[#22D3EE]/[0.025] blur-[160px] dark:bg-[#22D3EE]/[0.04]" />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.5rem] text-[#A855F7]">
                05
              </span>

              <span className="h-px w-8 bg-[#A855F7]/35" />

              <div className="flex items-center gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-[#A855F7]" />

                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#A855F7]">
                  What we value
                </p>
              </div>
            </div>

            <h2 className="mt-6 max-w-[680px] text-[2.55rem] font-semibold leading-[1.02] tracking-[-0.045em] text-[#0A1D2F] dark:text-white sm:text-[3.2rem] lg:text-[3.8rem]">
              The way we build
              <br />
              <span className="text-[#A855F7]">
                matters too.
              </span>
            </h2>
          </div>

          <div className="lg:pt-10">
            <p className="max-w-[700px] text-lg leading-8 text-[#0A1D2F]/58 dark:text-white/54">
              Ambition is useful only when it is supported by
              curiosity, judgement and responsibility. These
              values are intended to shape how we approach
              difficult work and how we work with one
              another.
            </p>

            <p className="mt-5 max-w-[650px] text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
              They are not personality requirements. People
              can think differently, communicate differently
              and bring very different experiences while
              still sharing the principles that make strong
              collaboration possible.
            </p>
          </div>
        </div>

        {/* =====================================================
            FOUR VALUES
        ===================================================== */}

        <div className="mt-16 grid gap-px overflow-hidden border-y border-[#0A1D2F]/[0.075] bg-[#0A1D2F]/[0.055] dark:border-white/[0.075] dark:bg-white/[0.05] md:grid-cols-2">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="group relative min-h-[24rem] bg-white/[0.56] p-7 backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.76] dark:bg-[#0D1117]/[0.57] dark:hover:bg-[#111822]/[0.72] sm:p-9"
              >
                <div
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{
                    backgroundColor: value.accent,
                  }}
                />

                <div className="flex items-center justify-between">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-full border"
                    style={{
                      borderColor: `${value.accent}28`,
                      backgroundColor: `${value.accent}08`,
                    }}
                  >
                    <Icon
                      className="h-[1.05rem] w-[1.05rem]"
                      style={{
                        color: value.accent,
                      }}
                    />
                  </div>

                  <span
                    className="font-mono text-[0.45rem]"
                    style={{
                      color: value.accent,
                    }}
                  >
                    {value.number}
                  </span>
                </div>

                <h3 className="mt-8 text-[1.55rem] font-semibold tracking-[-0.03em] text-[#0A1D2F] dark:text-white">
                  {value.title}
                </h3>

                <p className="mt-4 max-w-[540px] text-sm leading-7 text-[#0A1D2F]/43 dark:text-white/38">
                  {value.description}
                </p>

                <div className="absolute inset-x-7 bottom-7 border-t border-[#0A1D2F]/[0.07] pt-5 dark:border-white/[0.07] sm:inset-x-9">
                  <div className="flex items-start justify-between gap-5">
                    <span className="text-[0.43rem] font-semibold uppercase tracking-[0.13em] text-[#0A1D2F]/24 dark:text-white/21">
                      Ask
                    </span>

                    <p
                      className="max-w-[310px] text-right text-xs font-medium leading-5"
                      style={{
                        color: value.accent,
                      }}
                    >
                      {value.question}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            VALUE SYSTEM
        ===================================================== */}

        <div className="mt-16 grid gap-px overflow-hidden border-y border-[#0A1D2F]/[0.075] bg-[#0A1D2F]/[0.05] dark:border-white/[0.075] dark:bg-white/[0.05] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative min-h-[30rem] overflow-hidden bg-white/[0.42] p-7 backdrop-blur-xl dark:bg-[#0D1117]/[0.44] sm:p-9 lg:p-10">
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-3">
                <CircleDot className="h-4 w-4 text-[#22D3EE]" />

                <p className="text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-[#0A1D2F]/36 dark:text-white/31">
                  Cultural structure
                </p>
              </div>

              <span className="font-mono text-[0.42rem] uppercase tracking-[0.13em] text-[#22D3EE]">
                Stable
              </span>
            </div>

            <div className="mt-8">
              <ValuesMap />
            </div>
          </div>

          <div className="flex flex-col justify-between bg-white/[0.6] p-7 backdrop-blur-xl dark:bg-[#0D1117]/[0.6] sm:p-9 lg:p-10">
            <div>
              <p className="text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-[#2563EB] dark:text-[#60A5FA]">
                Balance
              </p>

              <p className="mt-7 max-w-[500px] text-[1.55rem] font-medium leading-[1.4] tracking-[-0.035em] text-[#0A1D2F]/69 dark:text-white/64 sm:text-[1.85rem]">
                None of these values works particularly well{" "}
                <span className="text-[#0A1D2F] dark:text-white">
                  on its own.
                </span>
              </p>

              <p className="mt-5 max-w-[470px] text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
                Curiosity without judgement can create
                distraction. Ambition without responsibility
                can create the wrong outcomes. Thoughtfulness
                without action can become hesitation.
              </p>
            </div>

            <div className="mt-10 space-y-4 border-t border-[#0A1D2F]/[0.07] pt-6 dark:border-white/[0.07]">
              <ValueBalance
                left="Curiosity"
                right="Direction"
                accent="#2563EB"
              />

              <ValueBalance
                left="Ambition"
                right="Responsibility"
                accent="#A855F7"
              />

              <ValueBalance
                left="Thinking"
                right="Action"
                accent="#22D3EE"
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            STANDARD
        ===================================================== */}

        <div className="mt-16 grid gap-10 border-t border-[#0A1D2F]/[0.08] pt-10 dark:border-white/[0.08] lg:grid-cols-[0.56fr_1.44fr]">
          <div>
            <p className="text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-[#10B981]">
              The standard
            </p>
          </div>

          <div>
            <p className="max-w-[920px] text-[1.6rem] font-medium leading-[1.45] tracking-[-0.035em] text-[#0A1D2F]/67 dark:text-white/62 sm:text-[1.95rem]">
              Strong people should be able to disagree,
              explore and challenge one another while still
              protecting{" "}
              <span className="text-[#0A1D2F] dark:text-white">
                trust, clarity and the quality of the work.
              </span>
            </p>
          </div>
        </div>

        {/* =====================================================
            HANDOFF
        ===================================================== */}

        <div className="mt-16 flex items-center justify-between border-t border-[#0A1D2F]/[0.08] pt-6 dark:border-white/[0.08]">
          <span className="font-mono text-[0.43rem] uppercase tracking-[0.15em] text-[#0A1D2F]/22 dark:text-white/19">
            Careers / 05
          </span>

          <a
            href="#open-roles"
            className="group inline-flex items-center gap-3 text-[0.5rem] font-semibold uppercase tracking-[0.17em] text-[#0A1D2F]/35 transition-colors hover:text-[#2563EB] dark:text-white/30 dark:hover:text-[#60A5FA]"
          >
            Opportunities

            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   VALUES MAP
============================================================ */

function ValuesMap() {
  return (
    <div className="relative mx-auto h-[21rem] max-w-[42rem]">
      {/* core rings */}

      <span className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#22D3EE]/10" />

      <span className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#22D3EE]/[0.045]" />

      {/* connectors */}

      <ValueConnection className="left-1/2 top-[17%] h-[33%] w-px -translate-x-1/2" accent="#2563EB" />

      <ValueConnection className="left-1/2 top-1/2 h-px w-[32%]" accent="#A855F7" />

      <ValueConnection className="bottom-[17%] left-1/2 h-[33%] w-px -translate-x-1/2" accent="#22D3EE" />

      <ValueConnection className="right-1/2 top-1/2 h-px w-[32%]" accent="#10B981" />

      {/* central point */}

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center">
          <span className="h-4 w-4 rounded-full bg-[#22D3EE] shadow-[0_0_24px_rgba(34,211,238,.55)]" />

          <span className="mt-4 whitespace-nowrap text-[0.48rem] font-semibold uppercase tracking-[0.14em] text-[#0A1D2F]/42 dark:text-white/36">
            Shared work
          </span>
        </div>
      </div>

      <ValueNode
        className="left-1/2 top-[8%]"
        label="Curious"
        accent="#2563EB"
      />

      <ValueNode
        className="right-[8%] top-1/2"
        label="Thoughtful"
        accent="#A855F7"
      />

      <ValueNode
        className="bottom-[8%] left-1/2"
        label="Ambitious"
        accent="#22D3EE"
      />

      <ValueNode
        className="left-[8%] top-1/2"
        label="Responsible"
        accent="#10B981"
      />
    </div>
  );
}

function ValueNode({
  className,
  label,
  accent,
}: {
  className: string;
  label: string;
  accent: string;
}) {
  return (
    <div
      className={`absolute -translate-x-1/2 -translate-y-1/2 ${className}`}
    >
      <div className="flex flex-col items-center">
        <span
          className="h-3 w-3 rounded-full"
          style={{
            backgroundColor: accent,
            boxShadow: `0 0 16px ${accent}70`,
          }}
        />

        <span className="mt-3 whitespace-nowrap text-[0.45rem] font-semibold uppercase tracking-[0.13em] text-[#0A1D2F]/34 dark:text-white/29">
          {label}
        </span>
      </div>
    </div>
  );
}

function ValueConnection({
  className,
  accent,
}: {
  className: string;
  accent: string;
}) {
  return (
    <span
      className={`absolute ${className}`}
      style={{
        background: `linear-gradient(90deg, ${accent}15, ${accent}50, ${accent}15)`,
      }}
    />
  );
}

/* ============================================================
   VALUE BALANCE
============================================================ */

function ValueBalance({
  left,
  right,
  accent,
}: {
  left: string;
  right: string;
  accent: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="w-[6.5rem] text-[0.47rem] font-semibold uppercase tracking-[0.12em] text-[#0A1D2F]/31 dark:text-white/27">
        {left}
      </span>

      <div className="relative h-px flex-1 bg-[#0A1D2F]/[0.07] dark:bg-white/[0.07]">
        <span
          className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            backgroundColor: accent,
            boxShadow: `0 0 8px ${accent}55`,
          }}
        />
      </div>

      <span className="w-[7rem] text-right text-[0.47rem] font-semibold uppercase tracking-[0.12em] text-[#0A1D2F]/31 dark:text-white/27">
        {right}
      </span>
    </div>
  );
}