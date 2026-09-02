import {
  ArrowRight,
  CircleDot,
  HelpCircle,
  Orbit,
  Radar,
  Sparkles,
} from "lucide-react";

const questions = [
  {
    number: "01",
    question:
      "How should intelligent systems communicate when they are uncertain?",
    context:
      "As software becomes more capable of interpretation and recommendation, uncertainty itself becomes part of the interface.",
    area: "Intelligent systems",
    accent: "#2563EB",
  },
  {
    number: "02",
    question:
      "What does genuinely human-centred AI interaction look like?",
    context:
      "Useful intelligence is not only a question of model capability. It also depends on how naturally technology fits around human behaviour and judgement.",
    area: "Human + technology",
    accent: "#22D3EE",
  },
  {
    number: "03",
    question:
      "Which emerging capabilities will become useful rather than merely impressive?",
    context:
      "Technical possibility moves quickly. The harder question is which capabilities can survive contact with real problems, constraints and users.",
    area: "Emerging possibilities",
    accent: "#A855F7",
  },
  {
    number: "04",
    question:
      "How can new technology improve complex systems without adding new complexity?",
    context:
      "Introducing another layer of technology is not automatically progress. Better systems should create meaningful improvement rather than additional friction.",
    area: "Systems + impact",
    accent: "#10B981",
  },
] as const;

const questionNodes = [
  {
    className: "left-[4%] top-[9%]",
    accent: "#A855F7",
  },
  {
    className: "right-[3%] top-[18%]",
    accent: "#2563EB",
  },
  {
    className: "bottom-[5%] right-[13%]",
    accent: "#22D3EE",
  },
  {
    className: "bottom-[9%] left-[7%]",
    accent: "#A855F7",
  },
  {
    className: "right-[1%] top-[58%]",
    accent: "#10B981",
  },
] as const;

const fieldPoints = [
  {
    className: "left-[17%] top-[42%]",
    accent: "#A855F7",
  },
  {
    className: "right-[19%] top-[43%]",
    accent: "#2563EB",
  },
  {
    className: "bottom-[24%] left-[34%]",
    accent: "#22D3EE",
  },
  {
    className: "right-[32%] top-[11%]",
    accent: "#A855F7",
  },
  {
    className: "bottom-[17%] right-[39%]",
    accent: "#10B981",
  },
] as const;

const researchCycleStages = [
  {
    label: "Question",
    accent: "#A855F7",
  },
  {
    label: "Research",
    accent: "#2563EB",
  },
  {
    label: "Knowledge",
    accent: "#22D3EE",
  },
  {
    label: "Application",
    accent: "#10B981",
  },
  {
    label: "Observation",
    accent: "#3B82F6",
  },
] as const;

export function OpenQuestions() {
  return (
    <section
      id="open-questions"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-white/[0.38] dark:bg-[#0D1117]/[0.41]" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 36% 8%, rgba(37,99,235,.04), transparent 31%), radial-gradient(circle at 96% 33%, rgba(168,85,247,.045), transparent 31%), radial-gradient(circle at 4% 94%, rgba(34,211,238,.03), transparent 28%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.06] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(124,58,237,.22) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
            maskImage:
              "radial-gradient(circle at 70% 50%, black, transparent 68%)",
            WebkitMaskImage:
              "radial-gradient(circle at 70% 50%, black, transparent 68%)",
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
              <span className="font-mono text-[0.5rem] text-[#A855F7] dark:text-[#C084FC]">
                08
              </span>

              <span className="h-px w-8 bg-[#A855F7]/35" />

              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#A855F7] dark:text-[#C084FC]">
                Open questions
              </p>
            </div>

            <h2 className="mt-6 max-w-[800px] text-[clamp(2.8rem,4.8vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.052em] text-[#0A1D2F] dark:text-white">
              What we don&apos;t know
              <br />

              <span className="bg-gradient-to-r from-[#A855F7] via-[#2563EB] to-[#22D3EE] bg-clip-text text-transparent dark:from-[#C084FC] dark:via-[#60A5FA] dark:to-[#67E8F9]">
                matters too.
              </span>
            </h2>
          </div>

          <div className="max-w-[620px] lg:justify-self-end">
            <p className="text-base leading-8 text-[#0A1D2F]/58 dark:text-white/54 sm:text-[1.05rem]">
              Understanding does not eliminate uncertainty. It changes
              its shape — replacing vague assumptions with more
              precise questions.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/41 dark:text-white/37">
              We want to remain interested in the edges of what we
              understand, because those edges are often where the next
              useful investigation begins.
            </p>
          </div>
        </div>

        {/* =====================================================
            KNOWLEDGE / UNKNOWN FIELD
        ===================================================== */}

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-[#A855F7]/[0.11] bg-white/[0.4] dark:border-[#A855F7]/[0.1] dark:bg-white/[0.022] lg:mt-24">
          <div className="grid lg:grid-cols-[0.68fr_1.32fr]">
            {/* EXPLANATION */}

            <div className="border-b border-[#0A1D2F]/[0.07] p-7 dark:border-white/[0.07] sm:p-9 lg:border-b-0 lg:border-r lg:p-11">
              <div className="flex items-center gap-3">
                <Radar className="h-4 w-4 text-[#A855F7] dark:text-[#C084FC]" />

                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.23em] text-[#A855F7] dark:text-[#C084FC]">
                  Edge of understanding
                </p>
              </div>

              <h3 className="mt-7 max-w-[490px] text-[2.1rem] font-semibold leading-[1.03] tracking-[-0.045em] text-[#0A1D2F] dark:text-white sm:text-[2.45rem]">
                Every answer changes the questions around it.
              </h3>

              <p className="mt-6 max-w-[520px] text-sm leading-7 text-[#0A1D2F]/43 dark:text-white/38">
                Research creates a boundary between what we understand
                better and what remains unresolved. As that boundary
                moves, new relationships, risks and opportunities can
                become visible.
              </p>

              <div className="mt-9 border-l border-[#A855F7]/30 pl-5">
                <p className="text-sm leading-7 text-[#0A1D2F]/42 dark:text-white/37">
                  The objective is not to remove every unknown. It is
                  to know which unknowns matter enough to investigate.
                </p>
              </div>
            </div>

            {/* VISUAL FIELD */}

            <div className="relative min-h-[37rem] overflow-hidden p-7 sm:p-9 lg:p-11">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(168,85,247,.025), transparent 47%)",
                }}
              />

              <UnknownField />
            </div>
          </div>
        </div>

        {/* =====================================================
            QUESTIONS
        ===================================================== */}

        <div className="mt-16 lg:mt-24">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-[0.53rem] font-semibold uppercase tracking-[0.22em] text-[#0A1D2F]/31 dark:text-white/27">
                Questions on the horizon
              </p>

              <p className="mt-3 max-w-[560px] text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/35">
                Examples of the kinds of questions our research lenses
                can lead us toward.
              </p>
            </div>

            <span className="hidden font-mono text-[0.43rem] uppercase tracking-[0.14em] text-[#0A1D2F]/18 dark:text-white/16 sm:block">
              Unresolved / evolving
            </span>
          </div>

          <div className="divide-y divide-[#0A1D2F]/[0.075] border-y border-[#0A1D2F]/[0.075] dark:divide-white/[0.075] dark:border-white/[0.075]">
            {questions.map((item) => (
              <article
                key={item.number}
                className="group relative grid gap-6 py-9 sm:grid-cols-[4rem_1fr] lg:grid-cols-[5rem_1.25fr_0.75fr] lg:items-start lg:gap-10 lg:py-11"
              >
                {/* INDEX */}

                <div>
                  <span
                    className="font-mono text-[0.48rem]"
                    style={{
                      color: item.accent,
                    }}
                  >
                    {item.number}
                  </span>
                </div>

                {/* QUESTION */}

                <div>
                  <div className="flex items-start gap-4">
                    <HelpCircle
                      className="mt-1 hidden h-4 w-4 shrink-0 sm:block"
                      style={{
                        color: item.accent,
                      }}
                    />

                    <h3 className="max-w-[700px] text-xl font-semibold leading-[1.3] tracking-[-0.035em] text-[#0A1D2F] transition-transform duration-300 group-hover:translate-x-1 dark:text-white sm:text-[1.4rem]">
                      {item.question}
                    </h3>
                  </div>
                </div>

                {/* CONTEXT */}

                <div className="sm:col-start-2 lg:col-start-auto">
                  <p className="text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/35">
                    {item.context}
                  </p>

                  <div className="mt-5 flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        backgroundColor: item.accent,
                        boxShadow: `0 0 6px ${item.accent}55`,
                      }}
                    />

                    <span
                      className="text-[0.46rem] font-semibold uppercase tracking-[0.15em]"
                      style={{
                        color: item.accent,
                      }}
                    >
                      {item.area}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* =====================================================
            RESEARCH CYCLE
        ===================================================== */}

        <div className="mt-16 grid gap-5 lg:mt-24 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative overflow-hidden rounded-[1.8rem] border border-[#0A1D2F]/[0.08] bg-white/[0.46] p-7 dark:border-white/[0.08] dark:bg-white/[0.025] sm:p-9 lg:p-10">
            <div className="flex items-center gap-3">
              <Orbit className="h-4 w-4 text-[#22D3EE]" />

              <p className="text-[0.55rem] font-semibold uppercase tracking-[0.23em] text-[#0A1D2F]/34 dark:text-white/30">
                The research cycle
              </p>
            </div>

            <h3 className="mt-7 max-w-[590px] text-[2rem] font-semibold leading-[1.04] tracking-[-0.045em] text-[#0A1D2F] dark:text-white sm:text-[2.3rem]">
              Knowledge is not the end of the system.
            </h3>

            <p className="mt-6 max-w-[620px] text-sm leading-7 text-[#0A1D2F]/43 dark:text-white/38">
              What we learn can inform application. Application
              produces new observations. Those observations expose new
              questions, beginning another cycle of investigation.
            </p>

            <div className="mt-10">
              <ResearchCycle />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.8rem] border border-[#A855F7]/[0.12] bg-white/[0.46] p-7 dark:border-[#A855F7]/[0.1] dark:bg-white/[0.025] sm:p-9 lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 100% 0%, rgba(168,85,247,.055), transparent 46%)",
              }}
            />

            <div className="relative">
              <Sparkles className="h-5 w-5 text-[#A855F7] dark:text-[#C084FC]" />

              <p className="mt-7 text-[0.53rem] font-semibold uppercase tracking-[0.2em] text-[#A855F7] dark:text-[#C084FC]">
                A useful unknown
              </p>

              <blockquote className="mt-5 max-w-[500px] text-[1.7rem] font-medium leading-[1.18] tracking-[-0.04em] text-[#0A1D2F] dark:text-white sm:text-[2rem]">
                A better question can be as valuable as an answer.
              </blockquote>

              <p className="mt-7 max-w-[490px] text-sm leading-7 text-[#0A1D2F]/42 dark:text-white/37">
                Knowing precisely what we do not understand gives
                future investigation somewhere meaningful to begin.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            FINAL PRINCIPLE
        ===================================================== */}

        <div className="mt-16 border-y border-[#0A1D2F]/[0.08] py-10 dark:border-white/[0.08] lg:mt-20">
          <div className="grid gap-8 lg:grid-cols-[0.52fr_1.48fr] lg:items-center">
            <div>
              <p className="text-[0.55rem] font-semibold uppercase tracking-[0.24em] text-[#A855F7] dark:text-[#C084FC]">
                Keep questioning
              </p>
            </div>

            <p className="max-w-[62rem] text-lg font-medium leading-8 tracking-[-0.02em] text-[#0A1D2F]/60 dark:text-white/55">
              Progress does not require pretending uncertainty has
              disappeared. It requires becoming{" "}
              <span className="text-[#0A1D2F] dark:text-white">
                increasingly precise about what we know, what we do not
                know and what deserves to be understood next.
              </span>
            </p>
          </div>
        </div>

        {/* =====================================================
            HANDOFF TO CTA
        ===================================================== */}

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-[#0A1D2F]/24 dark:text-white/21">
              The next question
            </p>

            <p className="mt-2 text-sm text-[#0A1D2F]/42 dark:text-white/37">
              There is always more worth understanding.
            </p>
          </div>

          <a
            href="#research-cta"
            className="group inline-flex items-center gap-3 text-[0.52rem] font-semibold uppercase tracking-[0.17em] text-[#A855F7] transition-colors duration-300 hover:text-[#7C3AED] dark:text-[#C084FC] dark:hover:text-[#D8B4FE]"
          >
            Keep questioning

            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   UNKNOWN FIELD
============================================================ */

function UnknownField() {
  return (
    <div className="relative mx-auto h-[32rem] w-full max-w-[40rem]">
      {/* KNOWLEDGE BOUNDARIES */}

      <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2563EB]/[0.07]" />

      <div className="absolute left-1/2 top-1/2 h-[15rem] w-[15rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#22D3EE]/[0.1]" />

      <div className="absolute left-1/2 top-1/2 h-[9rem] w-[9rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#10B981]/[0.12]" />

      {/* CORE */}

      <div className="absolute left-1/2 top-1/2 z-20 flex h-[7rem] w-[7rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#22D3EE]/25 bg-white/[0.86] shadow-[0_0_26px_rgba(34,211,238,.07)] dark:bg-[#0D1117]/[0.9]">
        <span className="absolute inset-[7px] rounded-full border border-[#22D3EE]/10" />

        <div className="text-center">
          <CircleDot className="mx-auto h-5 w-5 text-[#22D3EE]" />

          <p className="mt-2 text-[0.52rem] font-semibold text-[#0A1D2F] dark:text-white">
            Known
          </p>

          <p className="mt-1 font-mono text-[0.38rem] uppercase tracking-[0.1em] text-[#0A1D2F]/23 dark:text-white/20">
            Current evidence
          </p>
        </div>
      </div>

      {/* QUESTIONS ON THE EDGE */}

      {questionNodes.map((node, index) => (
        <QuestionNode
          key={`${node.accent}-${index}`}
          {...node}
        />
      ))}

      {/* SMALLER UNKNOWNS */}

      {fieldPoints.map((point, index) => (
        <FieldPoint
          key={`${point.accent}-${index}`}
          {...point}
        />
      ))}

      {/* LABELS */}

      <span className="absolute left-1/2 top-[8%] -translate-x-1/2 font-mono text-[0.4rem] uppercase tracking-[0.15em] text-[#A855F7]/45 dark:text-[#C084FC]/40">
        Unknown
      </span>

      <span className="absolute left-1/2 top-[31%] -translate-x-1/2 font-mono text-[0.38rem] uppercase tracking-[0.13em] text-[#22D3EE]/45">
        Boundary
      </span>
    </div>
  );
}

function QuestionNode({
  className,
  accent,
}: {
  className: string;
  accent: string;
}) {
  return (
    <div
      className={`absolute flex h-14 w-14 items-center justify-center rounded-full border bg-white/[0.75] dark:bg-[#0D1117]/[0.78] ${className}`}
      style={{
        borderColor: `${accent}28`,
      }}
    >
      <span
        className="text-sm font-medium"
        style={{
          color: accent,
        }}
      >
        ?
      </span>
    </div>
  );
}

function FieldPoint({
  className,
  accent,
}: {
  className: string;
  accent: string;
}) {
  return (
    <span
      className={`absolute h-2 w-2 rounded-full ${className}`}
      style={{
        backgroundColor: `${accent}55`,
        boxShadow: `0 0 6px ${accent}2E`,
      }}
    />
  );
}

/* ============================================================
   RESEARCH CYCLE
============================================================ */

function ResearchCycle() {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex min-w-[36rem] items-center">
        {researchCycleStages.map(
          (stage, index) => (
            <div
              key={stage.label}
              className="contents"
            >
              <div className="flex shrink-0 flex-col items-center">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{
                    backgroundColor: stage.accent,
                    boxShadow: `0 0 7px ${stage.accent}44`,
                  }}
                />

                <span className="mt-3 text-[0.45rem] font-semibold uppercase tracking-[0.12em] text-[#0A1D2F]/34 dark:text-white/30">
                  {stage.label}
                </span>
              </div>

              {index <
                researchCycleStages.length - 1 && (
                <span className="mx-3 mb-5 h-px flex-1 bg-gradient-to-r from-[#2563EB]/15 via-[#22D3EE]/30 to-[#A855F7]/15" />
              )}
            </div>
          ),
        )}

        <div className="mb-5 ml-4 text-lg text-[#A855F7]/55">
          ↺
        </div>
      </div>
    </div>
  );
}