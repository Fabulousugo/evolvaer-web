

import {
  ArrowUpRight,
  CircleDot,
  Compass,
  Layers3,
  Lightbulb,
  Network,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Meaningful problems",
    description:
      "We want to spend time on problems where better technology can create genuine value, not simply produce more software.",
    detail:
      "The question starts with what matters, then moves toward what technology can make possible.",
    icon: Compass,
    accent: "#2563EB",
  },
  {
    number: "02",
    title: "Room to think",
    description:
      "Strong work needs more than execution. It needs curiosity, judgement and the willingness to question the first answer.",
    detail:
      "Research and exploration are part of how we decide what deserves to be built.",
    icon: Lightbulb,
    accent: "#A855F7",
  },
  {
    number: "03",
    title: "Real contribution",
    description:
      "We are interested in people who want to shape the work, not simply receive a narrow stream of predefined tasks.",
    detail:
      "Different disciplines should influence the problem, the product and the direction.",
    icon: Network,
    accent: "#22D3EE",
  },
];

export function WhyJoin() {
  return (
    <section
      id="why-join"
      className="relative overflow-x-clip border-t border-[#0A1D2F]/[0.06] bg-white/[0.48] py-24 backdrop-blur-[2px] dark:border-white/[0.06] dark:bg-[#0D1117]/[0.48] sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.25) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          }}
        />

        <div className="absolute left-[-12rem] top-[15%] h-[30rem] w-[30rem] rounded-full bg-[#22D3EE]/[0.025] blur-[160px] dark:bg-[#22D3EE]/[0.04]" />

        <div className="absolute right-[-10rem] bottom-[8%] h-[28rem] w-[28rem] rounded-full bg-[#A855F7]/[0.02] blur-[150px] dark:bg-[#A855F7]/[0.035]" />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.5rem] text-[#2563EB] dark:text-[#60A5FA]">
                02
              </span>

              <span className="h-px w-8 bg-[#2563EB]/35" />

              <div className="flex items-center gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-[#22D3EE]" />

                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#2563EB] dark:text-[#60A5FA]">
                  Why Evolvaer
                </p>
              </div>
            </div>

            <h2 className="mt-6 max-w-[650px] text-[2.55rem] font-semibold leading-[1.02] tracking-[-0.045em] text-[#0A1D2F] dark:text-white sm:text-[3.2rem] lg:text-[3.8rem]">
              Work on things that
              <span className="text-[#2563EB] dark:text-[#60A5FA]">
                {" "}
                deserve your attention.
              </span>
            </h2>
          </div>

          <div className="lg:pt-10">
            <p className="max-w-[700px] text-lg leading-8 text-[#0A1D2F]/58 dark:text-white/54">
              A career should be more than a sequence of
              tickets, meetings and releases. We want
              Evolvaer to be a place where people can apply
              their craft to difficult questions and see how
              their work contributes to something larger.
            </p>

            <p className="mt-5 max-w-[650px] text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
              That does not mean every idea becomes a
              product or every experiment succeeds. It means
              the work should create learning, capability or
              real progress.
            </p>
          </div>
        </div>

        {/* =====================================================
            SIGNAL / CONNECTION FIELD
        ===================================================== */}

        <div className="mt-16 grid gap-px overflow-hidden border-y border-[#0A1D2F]/[0.075] bg-[#0A1D2F]/[0.055] dark:border-white/[0.075] dark:bg-white/[0.05] lg:grid-cols-[0.72fr_1.28fr]">
          <div className="relative bg-white/[0.54] p-7 backdrop-blur-xl dark:bg-[#0D1117]/[0.58] sm:p-9">
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <Layers3 className="h-4 w-4 text-[#A855F7]" />

                <p className="text-[0.53rem] font-semibold uppercase tracking-[0.2em] text-[#0A1D2F]/38 dark:text-white/32">
                  Individual capability
                </p>
              </div>

              <span className="font-mono text-[0.42rem] uppercase tracking-[0.14em] text-[#A855F7]">
                Input
              </span>
            </div>

            <p className="mt-8 max-w-[430px] text-[1.45rem] font-medium leading-[1.35] tracking-[-0.03em] text-[#0A1D2F]/72 dark:text-white/68 sm:text-[1.7rem]">
              Bring depth in what you know.
            </p>

            <p className="mt-4 max-w-[430px] text-sm leading-7 text-[#0A1D2F]/39 dark:text-white/35">
              Engineering, research, product thinking,
              design, commercial judgement and domain
              knowledge all become more useful when they can
              interact.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <CapabilityPoint
                label="Depth"
                accent="#2563EB"
              />

              <CapabilityPoint
                label="Curiosity"
                accent="#A855F7"
              />

              <CapabilityPoint
                label="Judgement"
                accent="#22D3EE"
              />
            </div>
          </div>

          <div className="relative min-h-[25rem] overflow-hidden bg-white/[0.4] p-7 backdrop-blur-lg dark:bg-[#0D1117]/[0.43] sm:p-9">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(circle at 66% 48%, rgba(34,211,238,.08), transparent 25%), radial-gradient(circle at 44% 32%, rgba(37,99,235,.065), transparent 22%), radial-gradient(circle at 72% 72%, rgba(168,85,247,.055), transparent 21%)",
              }}
            />

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <Network className="h-4 w-4 text-[#22D3EE]" />

                  <p className="text-[0.53rem] font-semibold uppercase tracking-[0.2em] text-[#0A1D2F]/38 dark:text-white/32">
                    Collective capability
                  </p>
                </div>

                <span className="font-mono text-[0.42rem] uppercase tracking-[0.14em] text-[#22D3EE]">
                  Connection
                </span>
              </div>

              <div className="my-auto py-10">
                <ConnectionField />
              </div>

              <div className="ml-auto max-w-[360px] text-right">
                <p className="text-sm font-medium leading-6 text-[#0A1D2F]/61 dark:text-white/56">
                  Good people do not become less individual
                  when they collaborate.
                </p>

                <p className="mt-2 text-xs leading-6 text-[#0A1D2F]/34 dark:text-white/29">
                  The aim is to make each person&apos;s
                  capability more useful through connection
                  with others.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            THREE REASONS
        ===================================================== */}

        <div className="mt-16">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="font-mono text-[0.45rem] uppercase tracking-[0.15em] text-[#0A1D2F]/25 dark:text-white/22">
                Reasons / 03
              </p>

              <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-[#0A1D2F] dark:text-white">
                What should make the work worthwhile.
              </h3>
            </div>

            <p className="hidden max-w-[390px] text-right text-xs leading-6 text-[#0A1D2F]/31 dark:text-white/27 md:block">
              Not slogans around culture. Conditions that
              should improve the quality of the work.
            </p>
          </div>

          <div className="mt-7 grid gap-px overflow-hidden border-y border-[#0A1D2F]/[0.075] bg-[#0A1D2F]/[0.055] dark:border-white/[0.075] dark:bg-white/[0.05] lg:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="group relative bg-white/[0.58] p-7 backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.76] dark:bg-[#0D1117]/[0.58] dark:hover:bg-[#111822]/[0.72] sm:p-8"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{
                      backgroundColor: reason.accent,
                    }}
                  />

                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full border"
                      style={{
                        borderColor: `${reason.accent}25`,
                        backgroundColor: `${reason.accent}08`,
                      }}
                    >
                      <Icon
                        className="h-4 w-4"
                        style={{
                          color: reason.accent,
                        }}
                      />
                    </div>

                    <span
                      className="font-mono text-[0.45rem]"
                      style={{
                        color: reason.accent,
                      }}
                    >
                      {reason.number}
                    </span>
                  </div>

                  <h4 className="mt-8 text-[1.35rem] font-semibold tracking-[-0.025em] text-[#0A1D2F] dark:text-white">
                    {reason.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-[#0A1D2F]/46 dark:text-white/41">
                    {reason.description}
                  </p>

                  <div className="mt-8 border-t border-[#0A1D2F]/[0.07] pt-5 dark:border-white/[0.07]">
                    <p className="text-xs leading-6 text-[#0A1D2F]/31 dark:text-white/27">
                      {reason.detail}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            CULTURE STATEMENT
        ===================================================== */}

        <div className="mt-16 grid gap-10 border-t border-[#0A1D2F]/[0.08] pt-10 dark:border-white/[0.08] lg:grid-cols-[0.62fr_1.38fr]">
          <div>
            <p className="text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
              A useful culture
            </p>
          </div>

          <div>
            <blockquote className="max-w-[920px] text-[1.65rem] font-medium leading-[1.42] tracking-[-0.035em] text-[#0A1D2F]/68 dark:text-white/64 sm:text-[2rem]">
              “The strongest culture is not one where
              everyone thinks alike. It is one where people
              can{" "}
              <span className="text-[#2563EB] dark:text-[#60A5FA]">
                think clearly
              </span>
              ,{" "}
              <span className="text-[#22D3EE]">
                work together
              </span>{" "}
              and improve the quality of what gets built.”
            </blockquote>
          </div>
        </div>

        {/* =====================================================
            HANDOFF
        ===================================================== */}

        <div className="mt-16 flex items-center justify-between border-t border-[#0A1D2F]/[0.08] pt-6 dark:border-white/[0.08]">
          <span className="font-mono text-[0.43rem] uppercase tracking-[0.15em] text-[#0A1D2F]/22 dark:text-white/19">
            Careers / 02
          </span>

          <a
            href="#how-we-work"
            className="group inline-flex items-center gap-3 text-[0.5rem] font-semibold uppercase tracking-[0.17em] text-[#0A1D2F]/35 transition-colors hover:text-[#2563EB] dark:text-white/30 dark:hover:text-[#60A5FA]"
          >
            How we work

            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CAPABILITY POINT
============================================================ */

function CapabilityPoint({
  label,
  accent,
}: {
  label: string;
  accent: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{
          backgroundColor: accent,
          boxShadow: `0 0 8px ${accent}60`,
        }}
      />

      <span className="text-[0.48rem] font-semibold uppercase tracking-[0.13em] text-[#0A1D2F]/33 dark:text-white/29">
        {label}
      </span>
    </div>
  );
}

/* ============================================================
   CONNECTION FIELD
============================================================ */

function ConnectionField() {
  return (
    <div className="relative mx-auto h-[13rem] max-w-[34rem]">
      {/* connecting paths */}

      <span className="absolute left-[22%] top-[29%] h-px w-[31%] origin-left rotate-[13deg] bg-gradient-to-r from-[#2563EB]/18 to-[#22D3EE]/42" />

      <span className="absolute left-[46%] top-[43%] h-px w-[30%] origin-left -rotate-[20deg] bg-gradient-to-r from-[#22D3EE]/42 to-[#A855F7]/22" />

      <span className="absolute left-[28%] top-[67%] h-px w-[25%] origin-left -rotate-[24deg] bg-gradient-to-r from-[#10B981]/18 to-[#22D3EE]/38" />

      <span className="absolute left-[52%] top-[48%] h-px w-[19%] origin-left rotate-[48deg] bg-gradient-to-r from-[#22D3EE]/38 to-[#10B981]/22" />

      {/* nodes */}

      <FieldNode
        className="left-[12%] top-[19%]"
        accent="#2563EB"
        size="md"
      />

      <FieldNode
        className="left-[46%] top-[35%]"
        accent="#22D3EE"
        size="lg"
      />

      <FieldNode
        className="right-[13%] top-[19%]"
        accent="#A855F7"
        size="sm"
      />

      <FieldNode
        className="bottom-[10%] left-[21%]"
        accent="#10B981"
        size="sm"
      />

      <FieldNode
        className="bottom-[5%] right-[18%]"
        accent="#2563EB"
        size="md"
      />

      <span className="absolute left-[51%] top-[40%] h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#22D3EE]/10" />

      <span className="absolute left-[51%] top-[40%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#22D3EE]/[0.045]" />
    </div>
  );
}

function FieldNode({
  className,
  accent,
  size,
}: {
  className: string;
  accent: string;
  size: "sm" | "md" | "lg";
}) {
  const dimensions = {
    sm: "h-2 w-2",
    md: "h-2.5 w-2.5",
    lg: "h-3.5 w-3.5",
  };

  return (
    <span
      className={`absolute rounded-full ${dimensions[size]} ${className}`}
      style={{
        backgroundColor: accent,
        boxShadow: `0 0 16px ${accent}80`,
      }}
    />
  );
}