import {
  ArrowRight,
  Beaker,
  BrainCircuit,
  CircleDot,
  Eye,
  FlaskConical,
  Lightbulb,
} from "lucide-react";

const methodStages = [
  {
    number: "01",
    short: "Observe",
    title: "Notice what is changing.",
    description:
      "We begin by examining technologies, behaviours, systems and problems for signals that something meaningful may be changing.",
    output: "Signal",
    accent: "#2563EB",
    icon: Eye,
  },
  {
    number: "02",
    short: "Question",
    title: "Turn the signal into a question.",
    description:
      "Rather than jumping directly to a solution, we define what we need to understand and identify the assumptions surrounding the opportunity.",
    output: "Question",
    accent: "#A855F7",
    icon: Lightbulb,
  },
  {
    number: "03",
    short: "Investigate",
    title: "Build a stronger picture.",
    description:
      "We gather evidence, examine context and explore technical possibilities to understand the problem and the opportunity more clearly.",
    output: "Evidence",
    accent: "#22D3EE",
    icon: FlaskConical,
  },
  {
    number: "04",
    short: "Test",
    title: "Put assumptions under pressure.",
    description:
      "Where appropriate, we use experiments, prototypes and technical exploration to test whether an idea behaves as expected outside theory.",
    output: "Learning",
    accent: "#3B82F6",
    icon: Beaker,
  },
  {
    number: "05",
    short: "Learn",
    title: "Decide what the evidence means.",
    description:
      "Findings are synthesised into clearer understanding that can inform another research cycle, engineering work, product development or a decision to stop.",
    output: "Understanding",
    accent: "#10B981",
    icon: BrainCircuit,
  },
] as const;

const researchLoopStages = [
  {
    label: "Observe",
    accent: "#2563EB",
  },
  {
    label: "Question",
    accent: "#A855F7",
  },
  {
    label: "Investigate",
    accent: "#22D3EE",
  },
  {
    label: "Test",
    accent: "#3B82F6",
  },
  {
    label: "Learn",
    accent: "#10B981",
  },
] as const;

const methodOutcomes = [
  {
    number: "01",
    title: "Investigate further",
    description:
      "The evidence raises important questions that deserve another research cycle.",
    accent: "#2563EB",
  },
  {
    number: "02",
    title: "Move toward application",
    description:
      "Understanding is strong enough to inform engineering, product or venture work.",
    accent: "#10B981",
  },
  {
    number: "03",
    title: "Stop",
    description:
      "The evidence does not justify further investment, allowing resources to move elsewhere.",
    accent: "#64748B",
  },
] as const;

export function ResearchMethod() {
  return (
    <section
      id="research-method"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-white/[0.42] dark:bg-[#0D1117]/[0.45]" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 43% 8%, rgba(37,99,235,.045), transparent 31%), radial-gradient(circle at 96% 88%, rgba(34,211,238,.045), transparent 30%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.07] dark:opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(37,99,235,.1) 1px, transparent 1px)",
            backgroundSize: "120px 100%",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.5rem] text-[#2563EB] dark:text-[#60A5FA]">
                04
              </span>

              <span className="h-px w-8 bg-[#2563EB]/35" />

              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#2563EB] dark:text-[#60A5FA]">
                Research method
              </p>
            </div>

            <h2 className="mt-6 max-w-[780px] text-[clamp(2.8rem,4.8vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.052em] text-[#0A1D2F] dark:text-white">
              Curiosity needs
              <br />
              a{" "}
              <span className="bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#10B981] bg-clip-text text-transparent dark:from-[#60A5FA] dark:via-[#67E8F9] dark:to-[#34D399]">
                method.
              </span>
            </h2>
          </div>

          <div className="max-w-[620px] lg:justify-self-end">
            <p className="text-base leading-8 text-[#0A1D2F]/58 dark:text-white/54 sm:text-[1.05rem]">
              Research becomes valuable when curiosity is paired with a
              disciplined way of learning.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/41 dark:text-white/37">
              Our method moves from observation to evidence without
              assuming every investigation must end in a product or
              venture.
            </p>
          </div>
        </div>

        {/* =====================================================
            METHOD PIPELINE
        ===================================================== */}

        <div className="mt-16 lg:mt-24">
          <div className="hidden lg:block">
            <DesktopMethod />
          </div>

          <div className="lg:hidden">
            <MobileMethod />
          </div>
        </div>

        {/* =====================================================
            RESEARCH IS ITERATIVE
        ===================================================== */}

        <div className="mt-16 grid gap-5 lg:mt-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-[1.8rem] border border-[#0A1D2F]/[0.08] bg-white/[0.5] p-7 dark:border-white/[0.08] dark:bg-white/[0.025] sm:p-9 lg:p-10">
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 100% 0%, rgba(34,211,238,.055), transparent 42%)",
              }}
            />

            <div className="relative">
              <div className="flex items-center gap-3">
                <CircleDot className="h-4 w-4 text-[#22D3EE]" />

                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.23em] text-[#0A1D2F]/34 dark:text-white/30">
                  Iterative by design
                </p>
              </div>

              <h3 className="mt-7 max-w-[560px] text-[2rem] font-semibold leading-[1.04] tracking-[-0.045em] text-[#0A1D2F] dark:text-white sm:text-[2.25rem]">
                Research rarely moves in a perfectly straight line.
              </h3>

              <p className="mt-6 max-w-[620px] text-sm leading-7 text-[#0A1D2F]/43 dark:text-white/38">
                A test can expose a new assumption. Evidence can change
                the original question. A technical limitation can send
                an investigation back toward exploration.
              </p>

              <p className="mt-4 max-w-[620px] text-sm leading-7 text-[#0A1D2F]/43 dark:text-white/38">
                Moving backwards is not necessarily failure. Sometimes
                it is exactly what better understanding requires.
              </p>

              <ResearchLoop />
            </div>
          </div>

          {/* OUTCOMES */}

          <div className="rounded-[1.8rem] border border-[#0A1D2F]/[0.08] bg-white/[0.46] p-7 dark:border-white/[0.08] dark:bg-white/[0.025] sm:p-9 lg:p-10">
            <p className="text-[0.55rem] font-semibold uppercase tracking-[0.23em] text-[#7C3AED] dark:text-[#C084FC]">
              Possible outcomes
            </p>

            <h3 className="mt-6 max-w-[440px] text-[2rem] font-semibold leading-[1.04] tracking-[-0.045em] text-[#0A1D2F] dark:text-white">
              Learning is useful even when we do not build.
            </h3>

            <div className="mt-9 divide-y divide-[#0A1D2F]/[0.07] border-y border-[#0A1D2F]/[0.07] dark:divide-white/[0.07] dark:border-white/[0.07]">
              {methodOutcomes.map(
                (outcome) => (
                  <MethodOutcome
                    key={
                      outcome.number
                    }
                    {...outcome}
                  />
                ),
              )}
            </div>
          </div>
        </div>

        {/* =====================================================
            METHOD PRINCIPLE
        ===================================================== */}

        <div className="mt-16 border-y border-[#0A1D2F]/[0.08] py-10 dark:border-white/[0.08] lg:mt-20">
          <div className="grid gap-8 lg:grid-cols-[0.52fr_1.48fr] lg:items-center">
            <div>
              <p className="text-[0.55rem] font-semibold uppercase tracking-[0.24em] text-[#2563EB] dark:text-[#60A5FA]">
                The objective
              </p>
            </div>

            <p className="max-w-[62rem] text-lg font-medium leading-8 tracking-[-0.02em] text-[#0A1D2F]/60 dark:text-white/55">
              The purpose of the process is not to make every idea
              survive. It is to make the{" "}
              <span className="text-[#0A1D2F] dark:text-white">
                quality of what we know stronger than when we started.
              </span>
            </p>
          </div>
        </div>

        {/* =====================================================
            HANDOFF
        ===================================================== */}

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-[#0A1D2F]/24 dark:text-white/21">
              Method creates evidence
            </p>

            <p className="mt-2 text-sm text-[#0A1D2F]/42 dark:text-white/37">
              Next, we look at the investigations themselves.
            </p>
          </div>

          <a
            href="#current-research"
            className="group inline-flex items-center gap-3 text-[0.52rem] font-semibold uppercase tracking-[0.17em] text-[#2563EB] transition-colors duration-300 hover:text-[#1D4ED8] dark:text-[#60A5FA] dark:hover:text-[#93C5FD]"
          >
            Current research

            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   DESKTOP METHOD
============================================================ */

function DesktopMethod() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute left-[8%] right-[8%] top-[4.4rem] h-px bg-gradient-to-r from-[#2563EB]/10 via-[#22D3EE]/35 to-[#10B981]/15"
      />

      <div className="grid grid-cols-5 gap-3">
        {methodStages.map(
          (stage) => {
            const Icon =
              stage.icon;

            return (
              <article
                key={
                  stage.number
                }
                className="group relative"
              >
                {/* NODE */}

                <div className="relative z-10 flex h-[8.8rem] items-start justify-center">
                  <div
                    className="relative flex h-[4.8rem] w-[4.8rem] items-center justify-center rounded-full border bg-white/[0.82] transition-transform duration-300 group-hover:-translate-y-1 dark:bg-[#0D1117]/[0.86]"
                    style={{
                      borderColor: `${stage.accent}35`,
                    }}
                  >
                    <span
                      className="absolute inset-[6px] rounded-full border"
                      style={{
                        borderColor: `${stage.accent}12`,
                      }}
                    />

                    <Icon
                      className="h-[1.05rem] w-[1.05rem]"
                      style={{
                        color:
                          stage.accent,
                      }}
                    />
                  </div>
                </div>

                {/* CARD */}

                <div className="min-h-[23rem] rounded-[1.5rem] border border-[#0A1D2F]/[0.075] bg-white/[0.54] p-6 transition-colors duration-300 group-hover:bg-white/[0.68] dark:border-white/[0.075] dark:bg-white/[0.025] dark:group-hover:bg-white/[0.04]">
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono text-[0.46rem]"
                      style={{
                        color:
                          stage.accent,
                      }}
                    >
                      {
                        stage.number
                      }
                    </span>

                    <span className="font-mono text-[0.42rem] uppercase tracking-[0.13em] text-[#0A1D2F]/20 dark:text-white/18">
                      {
                        stage.output
                      }
                    </span>
                  </div>

                  <p
                    className="mt-8 text-[0.52rem] font-semibold uppercase tracking-[0.18em]"
                    style={{
                      color:
                        stage.accent,
                    }}
                  >
                    {stage.short}
                  </p>

                  <h3 className="mt-4 text-lg font-semibold leading-snug tracking-[-0.03em] text-[#0A1D2F] dark:text-white">
                    {stage.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/41 dark:text-white/36">
                    {
                      stage.description
                    }
                  </p>
                </div>
              </article>
            );
          },
        )}
      </div>
    </div>
  );
}

/* ============================================================
   MOBILE METHOD
============================================================ */

function MobileMethod() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute bottom-12 left-[1.45rem] top-12 w-px bg-gradient-to-b from-[#2563EB]/25 via-[#22D3EE]/35 to-[#10B981]/20"
      />

      <div className="space-y-4">
        {methodStages.map(
          (stage) => {
            const Icon =
              stage.icon;

            return (
              <article
                key={
                  stage.number
                }
                className="relative grid grid-cols-[3rem_1fr] gap-4"
              >
                <div className="relative z-10 pt-5">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full border bg-[#F8FAFC] dark:bg-[#0D1117]"
                    style={{
                      borderColor: `${stage.accent}38`,
                    }}
                  >
                    <Icon
                      className="h-4 w-4"
                      style={{
                        color:
                          stage.accent,
                      }}
                    />
                  </div>
                </div>

                <div className="rounded-[1.4rem] border border-[#0A1D2F]/[0.075] bg-white/[0.54] p-6 dark:border-white/[0.075] dark:bg-white/[0.025]">
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono text-[0.45rem]"
                      style={{
                        color:
                          stage.accent,
                      }}
                    >
                      {
                        stage.number
                      }
                    </span>

                    <span className="font-mono text-[0.41rem] uppercase tracking-[0.12em] text-[#0A1D2F]/20 dark:text-white/18">
                      {
                        stage.output
                      }
                    </span>
                  </div>

                  <p
                    className="mt-6 text-[0.51rem] font-semibold uppercase tracking-[0.17em]"
                    style={{
                      color:
                        stage.accent,
                    }}
                  >
                    {stage.short}
                  </p>

                  <h3 className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[#0A1D2F] dark:text-white">
                    {stage.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#0A1D2F]/41 dark:text-white/36">
                    {
                      stage.description
                    }
                  </p>
                </div>
              </article>
            );
          },
        )}
      </div>
    </div>
  );
}

/* ============================================================
   RESEARCH LOOP
============================================================ */

function ResearchLoop() {
  return (
    <div className="mt-10 overflow-x-auto pb-2">
      <div className="flex min-w-[34rem] items-center">
        {researchLoopStages.map(
          (
            stage,
            index,
          ) => (
            <div
              key={stage.label}
              className="contents"
            >
              <div className="flex flex-col items-center">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{
                    backgroundColor:
                      stage.accent,
                    boxShadow: `0 0 7px ${stage.accent}44`,
                  }}
                />

                <span className="mt-3 text-[0.47rem] font-semibold uppercase tracking-[0.12em] text-[#0A1D2F]/34 dark:text-white/30">
                  {stage.label}
                </span>
              </div>

              {index <
                researchLoopStages.length -
                  1 && (
                <div className="mx-3 mb-5 h-px flex-1 bg-[#0A1D2F]/10 dark:bg-white/10" />
              )}
            </div>
          ),
        )}

        <div className="mb-5 ml-4 flex items-center text-[#22D3EE]/60">
          ↺
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   OUTCOME
============================================================ */

function MethodOutcome({
  number,
  title,
  description,
  accent,
}: {
  number: string;
  title: string;
  description: string;
  accent: string;
}) {
  return (
    <div className="grid grid-cols-[2.5rem_1fr] gap-3 py-6">
      <span
        className="pt-1 font-mono text-[0.45rem]"
        style={{
          color: accent,
        }}
      >
        {number}
      </span>

      <div>
        <h4 className="text-sm font-semibold text-[#0A1D2F] dark:text-white">
          {title}
        </h4>

        <p className="mt-2 text-sm leading-6 text-[#0A1D2F]/39 dark:text-white/34">
          {description}
        </p>
      </div>
    </div>
  );
}