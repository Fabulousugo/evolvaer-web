"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  CircleDot,
  Compass,
  Scale,
  Sparkles,
  Target,
} from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Rigorous",
    statement: "Evidence before enthusiasm.",
    description:
      "We challenge assumptions, examine limitations and look for evidence strong enough to improve the quality of our decisions.",
    question:
      "What does the evidence actually support?",
    accent: "#2563EB",
    icon: CheckCircle2,
  },
  {
    number: "02",
    title: "Curious",
    statement: "Questions before conclusions.",
    description:
      "We stay open to unexpected possibilities, alternative explanations and discoveries that may change the direction of an investigation.",
    question:
      "What have we not considered yet?",
    accent: "#A855F7",
    icon: Compass,
  },
  {
    number: "03",
    title: "Responsible",
    statement: "Capability with judgement.",
    description:
      "What can be built and what should be built are different questions. We consider people, consequences and uncertainty alongside technical possibility.",
    question:
      "What could happen if this works?",
    accent: "#22D3EE",
    icon: Scale,
  },
  {
    number: "04",
    title: "Useful",
    statement: "Understanding that can matter.",
    description:
      "Research should improve what we know, what we decide or what we are capable of doing — even when the result is choosing not to build.",
    question:
      "What becomes clearer because we investigated?",
    accent: "#10B981",
    icon: Target,
  },
];

export function ResearchPrinciples() {
  return (
    <section
      id="research-principles"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[#F8FAFC]/[0.4] backdrop-blur-[1px] dark:bg-[#0D1117]/[0.43]" />

        <div className="absolute -left-44 top-[4%] h-[34rem] w-[34rem] rounded-full bg-[#2563EB]/[0.035] blur-[170px] dark:bg-[#3B82F6]/[0.05]" />

        <div className="absolute right-[-12rem] top-[28%] h-[32rem] w-[32rem] rounded-full bg-[#A855F7]/[0.03] blur-[170px] dark:bg-[#A855F7]/[0.045]" />

        <div className="absolute bottom-[-12rem] left-[34%] h-[30rem] w-[30rem] rounded-full bg-[#10B981]/[0.025] blur-[170px] dark:bg-[#10B981]/[0.04]" />

        <div
          className="absolute inset-0 opacity-[0.06] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(37,99,235,.18) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
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
                07
              </span>

              <span className="h-px w-8 bg-[#2563EB]/35" />

              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#2563EB] dark:text-[#60A5FA]">
                Research principles
              </p>
            </div>

            <h2 className="mt-6 max-w-[780px] text-[clamp(2.8rem,4.8vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.052em] text-[#0A1D2F] dark:text-white">
              How we investigate
              <br />
              <span className="bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#10B981] bg-clip-text text-transparent dark:from-[#60A5FA] dark:via-[#67E8F9] dark:to-[#34D399]">
                matters.
              </span>
            </h2>
          </div>

          <div className="max-w-[620px] lg:justify-self-end">
            <p className="text-base leading-8 text-[#0A1D2F]/58 dark:text-white/54 sm:text-[1.05rem]">
              Research is not only defined by the questions we ask. It
              is also shaped by the standards we apply while trying to
              answer them.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/41 dark:text-white/37">
              These principles act as persistent constraints across
              exploration, experimentation, interpretation and
              application.
            </p>
          </div>
        </div>

        {/* =====================================================
            FOUR PRINCIPLES
        ===================================================== */}

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-[#0A1D2F]/[0.08] bg-[#0A1D2F]/[0.055] dark:border-white/[0.08] dark:bg-white/[0.05] lg:mt-24 lg:grid-cols-2">
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <article
                key={principle.number}
                className="group relative min-h-[30rem] overflow-hidden bg-white/[0.54] p-7 backdrop-blur-xl dark:bg-[#0D1117]/[0.64] sm:p-9 lg:p-10"
              >
                {/* hover glow */}

                <div
                  aria-hidden="true"
                  className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-0 blur-[110px] transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    backgroundColor: `${principle.accent}16`,
                  }}
                />

                <div className="relative flex h-full flex-col">
                  {/* TOP */}

                  <div className="flex items-start justify-between">
                    <span
                      className="font-mono text-[0.48rem]"
                      style={{
                        color: principle.accent,
                      }}
                    >
                      {principle.number}
                    </span>

                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-full border"
                      style={{
                        borderColor: `${principle.accent}28`,
                        backgroundColor: `${principle.accent}0A`,
                      }}
                    >
                      <Icon
                        className="h-[1.05rem] w-[1.05rem]"
                        style={{
                          color: principle.accent,
                        }}
                      />
                    </div>
                  </div>

                  {/* MAIN */}

                  <div className="mt-14">
                    <p
                      className="text-[0.53rem] font-semibold uppercase tracking-[0.2em]"
                      style={{
                        color: principle.accent,
                      }}
                    >
                      {principle.statement}
                    </p>

                    <h3 className="mt-4 text-[2.2rem] font-semibold leading-none tracking-[-0.045em] text-[#0A1D2F] dark:text-white sm:text-[2.5rem]">
                      {principle.title}
                    </h3>

                    <p className="mt-6 max-w-[510px] text-sm leading-7 text-[#0A1D2F]/43 dark:text-white/38">
                      {principle.description}
                    </p>
                  </div>

                  {/* QUESTION */}

                  <div className="mt-auto pt-10">
                    <div
                      className="border-l pl-5"
                      style={{
                        borderColor: `${principle.accent}45`,
                      }}
                    >
                      <p className="text-[0.46rem] font-semibold uppercase tracking-[0.17em] text-[#0A1D2F]/24 dark:text-white/21">
                        A question we should keep asking
                      </p>

                      <p className="mt-3 text-sm font-medium leading-7 text-[#0A1D2F]/61 dark:text-white/55">
                        {principle.question}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            PRINCIPLE SYSTEM
        ===================================================== */}

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-[#0A1D2F]/[0.08] bg-white/[0.32] backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.018] lg:mt-24">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            {/* EXPLANATION */}

            <div className="border-b border-[#0A1D2F]/[0.07] p-7 dark:border-white/[0.07] sm:p-9 lg:border-b-0 lg:border-r lg:p-11">
              <div className="flex items-center gap-3">
                <CircleDot className="h-4 w-4 text-[#22D3EE]" />

                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.23em] text-[#0A1D2F]/34 dark:text-white/30">
                  Research integrity
                </p>
              </div>

              <h3 className="mt-7 max-w-[500px] text-[2.1rem] font-semibold leading-[1.03] tracking-[-0.045em] text-[#0A1D2F] dark:text-white sm:text-[2.4rem]">
                No single principle is enough on its own.
              </h3>

              <p className="mt-6 max-w-[520px] text-sm leading-7 text-[#0A1D2F]/43 dark:text-white/38">
                Curiosity without rigour can chase noise. Rigour without
                curiosity can narrow the field too early. Capability
                without responsibility can create the wrong outcomes.
                Research without usefulness can become disconnected from
                the problems that motivated it.
              </p>
            </div>

            {/* PRINCIPLE MAP */}

            <div className="relative min-h-[35rem] overflow-hidden p-7 sm:p-9 lg:p-11">
              <PrincipleMap />
            </div>
          </div>
        </div>

        {/* =====================================================
            RESEARCH STANDARD
        ===================================================== */}

        <div className="mt-16 border-y border-[#0A1D2F]/[0.08] py-10 dark:border-white/[0.08] lg:mt-20">
          <div className="grid gap-8 lg:grid-cols-[0.52fr_1.48fr] lg:items-center">
            <div>
              <p className="text-[0.55rem] font-semibold uppercase tracking-[0.24em] text-[#2563EB] dark:text-[#60A5FA]">
                Our standard
              </p>
            </div>

            <p className="max-w-[62rem] text-lg font-medium leading-8 tracking-[-0.02em] text-[#0A1D2F]/60 dark:text-white/55">
              We want to be excited by possibility without becoming
              attached to a conclusion.{" "}
              <span className="text-[#0A1D2F] dark:text-white">
                Good research should be capable of changing our minds.
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
              Understanding has an edge
            </p>

            <p className="mt-2 text-sm text-[#0A1D2F]/42 dark:text-white/37">
              Beyond it are the questions we have not answered yet.
            </p>
          </div>

          <a
            href="#open-questions"
            className="group inline-flex items-center gap-3 text-[0.52rem] font-semibold uppercase tracking-[0.17em] text-[#2563EB] transition-colors hover:text-[#1D4ED8] dark:text-[#60A5FA] dark:hover:text-[#93C5FD]"
          >
            Open questions

            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PRINCIPLE MAP
============================================================ */

function PrincipleMap() {
  return (
    <div className="relative mx-auto h-[31rem] w-full max-w-[38rem]">
      {/* OUTER STRUCTURE */}

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[25rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2563EB]/[0.06]"
      />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#22D3EE]/[0.07]"
      />

      {/* CONNECTIONS */}

      <PrincipleConnection className="left-1/2 top-[18%] h-[33%] w-px" />

      <PrincipleConnection className="bottom-[17%] left-1/2 h-[34%] w-px" />

      <PrincipleConnection className="left-[18%] top-1/2 h-px w-[33%]" />

      <PrincipleConnection className="right-[17%] top-1/2 h-px w-[34%]" />

      {/* CORE */}

      <div className="absolute left-1/2 top-1/2 z-20 flex h-[8rem] w-[8rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#22D3EE]/25 bg-white/[0.78] shadow-[0_0_55px_rgba(34,211,238,.1)] backdrop-blur-xl dark:bg-[#0D1117]/[0.84]">
        <span className="absolute inset-[8px] rounded-full border border-[#22D3EE]/10" />

        <div className="text-center">
          <Sparkles className="mx-auto h-5 w-5 text-[#22D3EE]" />

          <p className="mt-2 text-[0.54rem] font-semibold text-[#0A1D2F] dark:text-white">
            Research
          </p>

          <p className="mt-1 font-mono text-[0.38rem] uppercase tracking-[0.11em] text-[#0A1D2F]/23 dark:text-white/20">
            Understanding
          </p>
        </div>
      </div>

      <PrincipleNode
        className="left-1/2 top-[1%] -translate-x-1/2"
        title="Rigorous"
        accent="#2563EB"
      />

      <PrincipleNode
        className="right-[1%] top-1/2 -translate-y-1/2"
        title="Curious"
        accent="#A855F7"
      />

      <PrincipleNode
        className="bottom-[1%] left-1/2 -translate-x-1/2"
        title="Responsible"
        accent="#22D3EE"
      />

      <PrincipleNode
        className="left-[1%] top-1/2 -translate-y-1/2"
        title="Useful"
        accent="#10B981"
      />

      {/* FIELD POINTS */}

      <span className="absolute left-[18%] top-[21%] h-1.5 w-1.5 rounded-full bg-[#2563EB]/25" />

      <span className="absolute right-[17%] top-[22%] h-2 w-2 rounded-full bg-[#A855F7]/20" />

      <span className="absolute bottom-[18%] right-[19%] h-1.5 w-1.5 rounded-full bg-[#22D3EE]/25" />

      <span className="absolute bottom-[20%] left-[20%] h-2 w-2 rounded-full bg-[#10B981]/20" />
    </div>
  );
}

function PrincipleNode({
  className,
  title,
  accent,
}: {
  className: string;
  title: string;
  accent: string;
}) {
  return (
    <div
      className={`absolute z-10 flex flex-col items-center ${className}`}
    >
      <div
        className="relative flex h-[5.3rem] w-[5.3rem] items-center justify-center rounded-full border bg-white/[0.72] backdrop-blur-xl dark:bg-[#0D1117]/[0.8]"
        style={{
          borderColor: `${accent}32`,
          boxShadow: `0 0 30px ${accent}0C`,
        }}
      >
        <span
          className="absolute inset-[7px] rounded-full border"
          style={{
            borderColor: `${accent}12`,
          }}
        />

        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{
            backgroundColor: accent,
            boxShadow: `0 0 12px ${accent}70`,
          }}
        />
      </div>

      <p className="mt-3 text-[0.5rem] font-semibold uppercase tracking-[0.13em] text-[#0A1D2F]/44 dark:text-white/39">
        {title}
      </p>
    </div>
  );
}

function PrincipleConnection({
  className,
}: {
  className: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`absolute z-0 bg-gradient-to-r from-[#2563EB]/10 via-[#22D3EE]/35 to-[#10B981]/10 ${className}`}
    />
  );
}