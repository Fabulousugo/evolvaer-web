"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  CircleDot,
  FileText,
  MessageCircle,
  Route,
  Sparkles,
  Wrench,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Share the information that helps us understand your experience, capability and interest in the work.",
    signal: "Context",
    icon: FileText,
    accent: "#2563EB",
  },
  {
    number: "02",
    title: "Conversation",
    description:
      "Talk about the role, your experience and the kinds of problems you enjoy working through.",
    signal: "Alignment",
    icon: MessageCircle,
    accent: "#22D3EE",
  },
  {
    number: "03",
    title: "Practical discussion",
    description:
      "Explore how you approach relevant problems, decisions or technical situations connected to the work.",
    signal: "Capability",
    icon: Wrench,
    accent: "#A855F7",
  },
  {
    number: "04",
    title: "Decision",
    description:
      "Bring the evidence together and decide whether the role, the work and the collaboration make sense for both sides.",
    signal: "Clarity",
    icon: CheckCircle2,
    accent: "#10B981",
  },
];

export function CareersProcess() {
  return (
    <section
      id="hiring-process"
      className="relative overflow-x-clip border-t border-[#0A1D2F]/[0.06] bg-[#F8FAFC]/[0.56] py-24 backdrop-blur-[2px] dark:border-white/[0.06] dark:bg-[#0D1117]/[0.54] sm:py-28 lg:py-32"
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
              "linear-gradient(rgba(37,99,235,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.18) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          }}
        />

        <div className="absolute -left-40 top-[12%] h-[30rem] w-[30rem] rounded-full bg-[#2563EB]/[0.025] blur-[160px] dark:bg-[#3B82F6]/[0.04]" />

        <div className="absolute right-[-12rem] bottom-[8%] h-[30rem] w-[30rem] rounded-full bg-[#A855F7]/[0.025] blur-[160px] dark:bg-[#A855F7]/[0.04]" />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.5rem] text-[#2563EB] dark:text-[#60A5FA]">
                07
              </span>

              <span className="h-px w-8 bg-[#2563EB]/35" />

              <div className="flex items-center gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-[#22D3EE]" />

                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#2563EB] dark:text-[#60A5FA]">
                  Hiring process
                </p>
              </div>
            </div>

            <h2 className="mt-6 max-w-[680px] text-[2.55rem] font-semibold leading-[1.02] tracking-[-0.045em] text-[#0A1D2F] dark:text-white sm:text-[3.2rem] lg:text-[3.8rem]">
              A clear path,
              <br />
              <span className="text-[#2563EB] dark:text-[#60A5FA]">
                both ways.
              </span>
            </h2>
          </div>

          <div className="lg:pt-10">
            <p className="max-w-[700px] text-lg leading-8 text-[#0A1D2F]/58 dark:text-white/54">
              Hiring should help both sides understand
              whether the work, expectations and way of
              working make sense together.
            </p>

            <p className="mt-5 max-w-[650px] text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
              The process can vary with the role, but the
              principle stays simple: understand the person,
              understand the work and make a thoughtful
              decision.
            </p>
          </div>
        </div>

        {/* =====================================================
            PROCESS PATH
        ===================================================== */}

        <div className="mt-16 border-y border-[#0A1D2F]/[0.08] dark:border-white/[0.08]">
          <div className="hidden lg:grid lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="group relative min-h-[28rem] border-r border-[#0A1D2F]/[0.07] bg-white/[0.48] p-7 backdrop-blur-xl transition-colors duration-300 last:border-r-0 hover:bg-white/[0.68] dark:border-white/[0.07] dark:bg-[#0D1117]/[0.5] dark:hover:bg-white/[0.035]"
                >
                  {index < processSteps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute right-[-1.4rem] top-[4.5rem] z-20 flex items-center"
                    >
                      <span className="h-px w-8 bg-[#0A1D2F]/10 dark:bg-white/10" />

                      <span className="h-1.5 w-1.5 rotate-45 border-r border-t border-[#0A1D2F]/20 dark:border-white/20" />
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono text-[0.45rem]"
                      style={{
                        color: step.accent,
                      }}
                    >
                      {step.number}
                    </span>

                    <span className="text-[0.43rem] font-semibold uppercase tracking-[0.14em] text-[#0A1D2F]/24 dark:text-white/21">
                      Step
                    </span>
                  </div>

                  <div
                    className="mt-8 flex h-12 w-12 items-center justify-center rounded-full border"
                    style={{
                      borderColor: `${step.accent}30`,
                      backgroundColor: `${step.accent}08`,
                      boxShadow: `0 0 28px ${step.accent}10`,
                    }}
                  >
                    <Icon
                      className="h-[1.05rem] w-[1.05rem]"
                      style={{
                        color: step.accent,
                      }}
                    />
                  </div>

                  <h3 className="mt-8 text-[1.45rem] font-semibold tracking-[-0.03em] text-[#0A1D2F] dark:text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#0A1D2F]/43 dark:text-white/38">
                    {step.description}
                  </p>

                  <div className="absolute inset-x-7 bottom-7 border-t border-[#0A1D2F]/[0.07] pt-5 dark:border-white/[0.07]">
                    <div className="flex items-center justify-between">
                      <span className="text-[0.43rem] font-semibold uppercase tracking-[0.13em] text-[#0A1D2F]/24 dark:text-white/21">
                        Signal
                      </span>

                      <span
                        className="text-[0.5rem] font-semibold uppercase tracking-[0.12em]"
                        style={{
                          color: step.accent,
                        }}
                      >
                        {step.signal}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* mobile / tablet */}

          <div className="lg:hidden">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="relative grid gap-6 border-b border-[#0A1D2F]/[0.07] bg-white/[0.48] px-5 py-7 backdrop-blur-xl last:border-b-0 dark:border-white/[0.07] dark:bg-[#0D1117]/[0.5] sm:grid-cols-[auto_1fr_auto] sm:px-7"
                >
                  <div className="relative">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-full border"
                      style={{
                        borderColor: `${step.accent}30`,
                        backgroundColor: `${step.accent}08`,
                      }}
                    >
                      <Icon
                        className="h-4 w-4"
                        style={{
                          color: step.accent,
                        }}
                      />
                    </div>

                    {index < processSteps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute left-1/2 top-11 hidden h-[calc(100%+1.75rem)] w-px -translate-x-1/2 bg-[#0A1D2F]/10 dark:bg-white/10 sm:block"
                      />
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        className="font-mono text-[0.43rem]"
                        style={{
                          color: step.accent,
                        }}
                      >
                        {step.number}
                      </span>

                      <span className="text-[0.44rem] font-semibold uppercase tracking-[0.13em] text-[#0A1D2F]/25 dark:text-white/22">
                        Process
                      </span>
                    </div>

                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-[#0A1D2F] dark:text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-[580px] text-sm leading-7 text-[#0A1D2F]/42 dark:text-white/37">
                      {step.description}
                    </p>
                  </div>

                  <div className="sm:text-right">
                    <p className="text-[0.42rem] font-semibold uppercase tracking-[0.13em] text-[#0A1D2F]/23 dark:text-white/20">
                      Signal
                    </p>

                    <p
                      className="mt-1 text-[0.5rem] font-semibold uppercase tracking-[0.12em]"
                      style={{
                        color: step.accent,
                      }}
                    >
                      {step.signal}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            CANDIDATE JOURNEY
        ===================================================== */}

        <div className="mt-16 grid gap-px overflow-hidden border-y border-[#0A1D2F]/[0.075] bg-[#0A1D2F]/[0.05] dark:border-white/[0.075] dark:bg-white/[0.05] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[29rem] overflow-hidden bg-white/[0.42] p-7 backdrop-blur-xl dark:bg-[#0D1117]/[0.45] sm:p-9">
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-3">
                <Route className="h-4 w-4 text-[#22D3EE]" />

                <p className="text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-[#0A1D2F]/36 dark:text-white/31">
                  Candidate journey
                </p>
              </div>

              <span className="font-mono text-[0.42rem] uppercase tracking-[0.13em] text-[#22D3EE]">
                One path
              </span>
            </div>

            <div className="mt-12">
              <ProcessMap />
            </div>
          </div>

          <div className="flex flex-col justify-between bg-white/[0.6] p-7 backdrop-blur-xl dark:bg-[#0D1117]/[0.6] sm:p-9">
            <div>
              <div className="flex items-center gap-3">
                <Sparkles className="h-4 w-4 text-[#A855F7]" />

                <p className="text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-[#0A1D2F]/36 dark:text-white/31">
                  What the process is for
                </p>
              </div>

              <p className="mt-8 max-w-[500px] text-[1.55rem] font-medium leading-[1.4] tracking-[-0.035em] text-[#0A1D2F]/69 dark:text-white/64 sm:text-[1.85rem]">
                Not to make hiring complicated.
                <br />
                <span className="text-[#A855F7]">
                  To make the decision better.
                </span>
              </p>

              <p className="mt-5 max-w-[470px] text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
                A useful process should create enough
                information for Evolvaer and the candidate
                to understand whether the opportunity is a
                strong fit.
              </p>
            </div>

            <div className="mt-10 space-y-4 border-t border-[#0A1D2F]/[0.07] pt-6 dark:border-white/[0.07]">
              <ProcessPrinciple
                label="Understand the person"
                accent="#2563EB"
              />

              <ProcessPrinciple
                label="Understand the work"
                accent="#22D3EE"
              />

              <ProcessPrinciple
                label="Understand the fit"
                accent="#A855F7"
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            MUTUAL DECISION
        ===================================================== */}

        <div className="mt-16 grid gap-10 border-t border-[#0A1D2F]/[0.08] pt-10 dark:border-white/[0.08] lg:grid-cols-[0.58fr_1.42fr]">
          <div>
            <p className="text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-[#10B981]">
              Mutual decision
            </p>
          </div>

          <div>
            <p className="max-w-[920px] text-[1.6rem] font-medium leading-[1.45] tracking-[-0.035em] text-[#0A1D2F]/67 dark:text-white/62 sm:text-[1.95rem]">
              The candidate is evaluating Evolvaer too.
              A good hiring process should leave{" "}
              <span className="text-[#0A1D2F] dark:text-white">
                both sides with more clarity than they
                started with.
              </span>
            </p>
          </div>
        </div>

        {/* =====================================================
            HANDOFF
        ===================================================== */}

        <div className="mt-16 flex items-center justify-between border-t border-[#0A1D2F]/[0.08] pt-6 dark:border-white/[0.08]">
          <span className="font-mono text-[0.43rem] uppercase tracking-[0.15em] text-[#0A1D2F]/22 dark:text-white/19">
            Careers / 07
          </span>

          <a
            href="#careers-cta"
            className="group inline-flex items-center gap-3 text-[0.5rem] font-semibold uppercase tracking-[0.17em] text-[#0A1D2F]/35 transition-colors hover:text-[#2563EB] dark:text-white/30 dark:hover:text-[#60A5FA]"
          >
            Find your place

            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROCESS MAP
============================================================ */

function ProcessMap() {
  const stages = [
    {
      label: "Apply",
      accent: "#2563EB",
      position: "left-[4%]",
    },
    {
      label: "Conversation",
      accent: "#22D3EE",
      position: "left-[34%]",
    },
    {
      label: "Discussion",
      accent: "#A855F7",
      position: "left-[64%]",
    },
    {
      label: "Decision",
      accent: "#10B981",
      position: "right-[1%]",
    },
  ];

  return (
    <div className="relative mx-auto h-[17rem] max-w-[44rem]">
      {/* base trajectory */}

      <div className="absolute left-[7%] right-[5%] top-1/2 -translate-y-1/2">
        <span className="block h-px w-full bg-gradient-to-r from-[#2563EB]/30 via-[#22D3EE]/35 via-50% to-[#10B981]/30" />
      </div>

      {/* secondary trajectory */}

      <span className="absolute left-[7%] right-[5%] top-[53%] h-px bg-[#A855F7]/[0.055]" />

      {stages.map((stage, index) => (
        <div
          key={stage.label}
          className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 ${stage.position}`}
        >
          <div className="relative flex flex-col items-center">
            <span
              className="relative z-10 h-3 w-3 rounded-full"
              style={{
                backgroundColor: stage.accent,
                boxShadow: `0 0 14px ${stage.accent}65`,
              }}
            />

            {index === 3 && (
              <>
                <span className="absolute top-[-0.55rem] h-8 w-8 rounded-full border border-[#10B981]/12" />

                <span className="absolute top-[-1rem] h-12 w-12 rounded-full border border-[#10B981]/[0.05]" />
              </>
            )}

            <span className="mt-4 whitespace-nowrap text-[0.43rem] font-semibold uppercase tracking-[0.12em] text-[#0A1D2F]/35 dark:text-white/30">
              {stage.label}
            </span>

            <span
              className="mt-2 font-mono text-[0.4rem]"
              style={{
                color: stage.accent,
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      ))}

      {/* supporting signals */}

      <span className="absolute left-[20%] top-[22%] h-1.5 w-1.5 rounded-full bg-[#2563EB]/45" />

      <span className="absolute left-[48%] top-[72%] h-1.5 w-1.5 rounded-full bg-[#22D3EE]/45" />

      <span className="absolute right-[20%] top-[24%] h-1.5 w-1.5 rounded-full bg-[#A855F7]/45" />
    </div>
  );
}

/* ============================================================
   PROCESS PRINCIPLE
============================================================ */

function ProcessPrinciple({
  label,
  accent,
}: {
  label: string;
  accent: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span
        className="h-2 w-2 rounded-full"
        style={{
          backgroundColor: accent,
          boxShadow: `0 0 8px ${accent}55`,
        }}
      />

      <span className="text-[0.5rem] font-semibold uppercase tracking-[0.13em] text-[#0A1D2F]/35 dark:text-white/30">
        {label}
      </span>

      <span
        className="h-px flex-1"
        style={{
          background: `linear-gradient(90deg, ${accent}28, transparent)`,
        }}
      />
    </div>
  );
}