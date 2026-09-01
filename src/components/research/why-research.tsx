"use client";

import {
  CircleDot,
  Filter,
  Radar,
  Search,
} from "lucide-react";

const researchReasons = [
  {
    number: "01",
    title: "See beyond novelty",
    description:
      "New technology can attract attention before its usefulness is understood. Research helps us look past novelty and examine what a capability can actually enable.",
    accent: "#2563EB",
    icon: Radar,
  },
  {
    number: "02",
    title: "Reduce assumption",
    description:
      "Ideas often begin with incomplete information. Investigation helps expose assumptions, test them and replace intuition with stronger evidence.",
    accent: "#A855F7",
    icon: Search,
  },
  {
    number: "03",
    title: "Find the signal",
    description:
      "Not every trend, problem or technical possibility deserves the same attention. Research helps identify what may be genuinely significant.",
    accent: "#22D3EE",
    icon: Filter,
  },
];

export function WhyResearch() {
  return (
    <section
      id="why-research"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-white/[0.42] backdrop-blur-[1px] dark:bg-[#0D1117]/[0.44]" />

        <div className="absolute -left-48 top-[18%] h-[32rem] w-[32rem] rounded-full bg-[#2563EB]/[0.035] blur-[170px] dark:bg-[#3B82F6]/[0.05]" />

        <div className="absolute right-[-10rem] top-[25%] h-[30rem] w-[30rem] rounded-full bg-[#22D3EE]/[0.035] blur-[160px] dark:bg-[#22D3EE]/[0.05]" />

        <div
          className="absolute inset-0 opacity-[0.07] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(37,99,235,.22) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.5rem] text-[#2563EB] dark:text-[#60A5FA]">
                02
              </span>

              <span className="h-px w-8 bg-[#2563EB]/35" />

              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#2563EB] dark:text-[#60A5FA]">
                Why research
              </p>
            </div>

            <h2 className="mt-6 max-w-[760px] text-[clamp(2.8rem,4.8vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.052em] text-[#0A1D2F] dark:text-white">
              Innovation without
              <br />
              understanding is{" "}
              <span className="bg-gradient-to-r from-[#2563EB] via-[#A855F7] to-[#22D3EE] bg-clip-text text-transparent dark:from-[#60A5FA] dark:via-[#C084FC] dark:to-[#67E8F9]">
                guesswork.
              </span>
            </h2>
          </div>

          <div className="max-w-[620px] lg:justify-self-end">
            <p className="text-base leading-8 text-[#0A1D2F]/58 dark:text-white/54 sm:text-[1.05rem]">
              Emerging technologies create possibilities quickly.
              Understanding which possibilities matter takes more
              discipline.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/41 dark:text-white/37">
              Research gives us room to observe, question and investigate
              before committing engineering effort, product decisions or
              venture resources.
            </p>
          </div>
        </div>

        {/* =====================================================
            SIGNAL VS NOISE
        ===================================================== */}

        <div className="mt-16 grid gap-5 lg:mt-24 lg:grid-cols-[0.94fr_1.06fr]">
          {/* NOISE */}

          <div className="relative overflow-hidden rounded-[1.8rem] border border-[#0A1D2F]/[0.08] bg-white/[0.38] p-7 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.018] sm:p-9">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.22] dark:opacity-[0.14]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(100,116,139,.3) 1px, transparent 1px)",
                backgroundSize: "25px 25px",
              }}
            />

            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#64748B]/[0.07] blur-[100px]"
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CircleDot className="h-4 w-4 text-[#64748B]" />

                  <p className="text-[0.55rem] font-semibold uppercase tracking-[0.23em] text-[#0A1D2F]/34 dark:text-white/30">
                    Without investigation
                  </p>
                </div>

                <span className="font-mono text-[0.45rem] uppercase tracking-[0.14em] text-[#0A1D2F]/20 dark:text-white/18">
                  Noise
                </span>
              </div>

              <div className="mt-14 sm:mt-20">
                <h3 className="max-w-[430px] text-[2rem] font-semibold leading-[1.04] tracking-[-0.045em] text-[#0A1D2F] dark:text-white">
                  Everything can look important at first.
                </h3>

                <p className="mt-5 max-w-[470px] text-sm leading-7 text-[#0A1D2F]/42 dark:text-white/37">
                  Trends, technologies, claims and market excitement can
                  create a field of possibilities without telling us
                  which ones are durable, useful or technically credible.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-2">
                <NoiseSignal label="Trend" />
                <NoiseSignal label="Claim" />
                <NoiseSignal label="Novelty" />
              </div>
            </div>
          </div>

          {/* SIGNAL */}

          <div className="relative overflow-hidden rounded-[1.8rem] border border-[#22D3EE]/[0.15] bg-white/[0.46] p-7 backdrop-blur-xl dark:border-[#22D3EE]/[0.12] dark:bg-white/[0.022] sm:p-9">
            <div className="absolute right-[-6rem] top-[-6rem] h-72 w-72 rounded-full bg-[#22D3EE]/[0.075] blur-[110px]" />

            <div
              aria-hidden="true"
              className="absolute bottom-[15%] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#22D3EE]/35 to-transparent"
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22D3EE] opacity-30 motion-reduce:animate-none" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22D3EE]" />
                  </span>

                  <p className="text-[0.55rem] font-semibold uppercase tracking-[0.23em] text-[#0891B2] dark:text-[#67E8F9]">
                    Through research
                  </p>
                </div>

                <span className="font-mono text-[0.45rem] uppercase tracking-[0.14em] text-[#0891B2]/55 dark:text-[#67E8F9]/45">
                  Signal
                </span>
              </div>

              <div className="mt-14 sm:mt-20">
                <h3 className="max-w-[430px] text-[2rem] font-semibold leading-[1.04] tracking-[-0.045em] text-[#0A1D2F] dark:text-white">
                  Patterns become easier to see.
                </h3>

                <p className="mt-5 max-w-[470px] text-sm leading-7 text-[#0A1D2F]/42 dark:text-white/37">
                  Investigation does not remove uncertainty completely.
                  It helps organise it — revealing relationships,
                  constraints and evidence that can support better
                  decisions.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-3">
                <SignalPoint label="Observe" />
                <SignalLine />
                <SignalPoint label="Investigate" active />
                <SignalLine />
                <SignalPoint label="Understand" />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            THREE REASONS
        ===================================================== */}

        <div className="mt-16 lg:mt-24">
          <div className="grid gap-px overflow-hidden rounded-[1.8rem] border border-[#0A1D2F]/[0.08] bg-[#0A1D2F]/[0.06] dark:border-white/[0.08] dark:bg-white/[0.055] md:grid-cols-3">
            {researchReasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.number}
                  className="group relative min-h-[21rem] overflow-hidden bg-white/[0.58] p-7 backdrop-blur-xl dark:bg-[#0D1117]/[0.65] sm:p-8"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      backgroundColor: `${reason.accent}18`,
                    }}
                  />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <span
                        className="font-mono text-[0.47rem]"
                        style={{
                          color: reason.accent,
                        }}
                      >
                        {reason.number}
                      </span>

                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full border"
                        style={{
                          borderColor: `${reason.accent}24`,
                          backgroundColor: `${reason.accent}0A`,
                        }}
                      >
                        <Icon
                          className="h-4 w-4"
                          style={{
                            color: reason.accent,
                          }}
                        />
                      </span>
                    </div>

                    <div className="mt-auto pt-16">
                      <h3 className="text-xl font-semibold tracking-[-0.035em] text-[#0A1D2F] dark:text-white">
                        {reason.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[#0A1D2F]/42 dark:text-white/37">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            DECISION PRINCIPLE
        ===================================================== */}

        <div className="mt-16 border-y border-[#0A1D2F]/[0.08] py-10 dark:border-white/[0.08] lg:mt-20">
          <div className="grid gap-8 lg:grid-cols-[0.52fr_1.48fr] lg:items-center">
            <div>
              <p className="text-[0.55rem] font-semibold uppercase tracking-[0.24em] text-[#2563EB] dark:text-[#60A5FA]">
                Research principle
              </p>
            </div>

            <p className="max-w-[62rem] text-lg font-medium leading-8 tracking-[-0.02em] text-[#0A1D2F]/60 dark:text-white/55">
              Research does not exist to prove that an idea is right.
              It exists to help us{" "}
              <span className="text-[#0A1D2F] dark:text-white">
                understand what is actually true enough to act on.
              </span>
            </p>
          </div>
        </div>

        {/* =====================================================
            HANDOFF
        ===================================================== */}

        <div className="mt-12 flex items-center justify-between">
          <div>
            <p className="text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-[#0A1D2F]/24 dark:text-white/21">
              From signal
            </p>

            <p className="mt-2 text-sm text-[#0A1D2F]/42 dark:text-white/37">
              The next question is where we choose to look.
            </p>
          </div>

          <a
            href="#research-areas"
            className="group flex items-center gap-3 text-[0.52rem] font-semibold uppercase tracking-[0.17em] text-[#2563EB] transition-colors hover:text-[#1D4ED8] dark:text-[#60A5FA] dark:hover:text-[#93C5FD]"
          >
            Research areas

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function NoiseSignal({
  label,
}: {
  label: string;
}) {
  return (
    <div className="rounded-xl border border-[#0A1D2F]/[0.06] bg-white/[0.25] px-3 py-3 text-center backdrop-blur-lg dark:border-white/[0.06] dark:bg-white/[0.015]">
      <span className="font-mono text-[0.46rem] uppercase tracking-[0.13em] text-[#0A1D2F]/27 dark:text-white/24">
        {label}
      </span>
    </div>
  );
}

function SignalPoint({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-2">
      <span
        className={`h-2 w-2 rounded-full ${
          active
            ? "bg-[#22D3EE] shadow-[0_0_12px_rgba(34,211,238,.7)]"
            : "bg-[#2563EB]/45 dark:bg-[#60A5FA]/45"
        }`}
      />

      <span className="font-mono text-[0.42rem] uppercase tracking-[0.1em] text-[#0A1D2F]/30 dark:text-white/27">
        {label}
      </span>
    </div>
  );
}

function SignalLine() {
  return (
    <span className="mb-5 h-px flex-1 bg-gradient-to-r from-[#2563EB]/20 via-[#22D3EE]/45 to-[#2563EB]/20" />
  );
}