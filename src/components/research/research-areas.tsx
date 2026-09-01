"use client";

import {
  ArrowUpRight,
  BrainCircuit,
  CircleDot,
  Network,
  ScanSearch,
  Workflow,
} from "lucide-react";

const researchAreas = [
  {
    number: "01",
    title: "Intelligent systems",
    description:
      "Exploring how artificial intelligence, machine learning and adaptive software can interpret information, support decisions and create more useful digital experiences.",
    question:
      "Where can intelligent systems meaningfully improve how people understand, decide or act?",
    accent: "#2563EB",
    icon: BrainCircuit,
    signals: [
      "Artificial intelligence",
      "Machine learning",
      "Adaptive software",
    ],
  },
  {
    number: "02",
    title: "Human + technology",
    description:
      "Investigating how technology interacts with human behaviour, communication and capability — and how digital systems can work more naturally around people.",
    question:
      "How can technology extend human capability without losing sight of the person using it?",
    accent: "#22D3EE",
    icon: Network,
    signals: [
      "Human-centred systems",
      "Communication",
      "Accessibility",
    ],
  },
  {
    number: "03",
    title: "Emerging possibilities",
    description:
      "Studying technological shifts and new capabilities early enough to understand what they could enable before deciding whether they deserve deeper investment.",
    question:
      "Which emerging capabilities could create genuinely new ways of solving meaningful problems?",
    accent: "#A855F7",
    icon: ScanSearch,
    signals: [
      "Emerging technology",
      "Technical feasibility",
      "Future applications",
    ],
  },
  {
    number: "04",
    title: "Systems + real-world impact",
    description:
      "Examining where technology intersects with complex real-world systems and how new approaches might improve outcomes, efficiency or access.",
    question:
      "Where can better technology create measurable improvement within existing systems?",
    accent: "#10B981",
    icon: Workflow,
    signals: [
      "System intelligence",
      "Applied technology",
      "Real-world outcomes",
    ],
  },
];

export function ResearchAreas() {
  return (
    <section
      id="research-areas"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[#F8FAFC]/[0.4] backdrop-blur-[1px] dark:bg-[#0D1117]/[0.42]" />

        <div className="absolute -right-40 top-[5%] h-[34rem] w-[34rem] rounded-full bg-[#A855F7]/[0.035] blur-[170px] dark:bg-[#A855F7]/[0.05]" />

        <div className="absolute -left-44 bottom-[8%] h-[32rem] w-[32rem] rounded-full bg-[#22D3EE]/[0.035] blur-[170px] dark:bg-[#22D3EE]/[0.05]" />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.5rem] text-[#2563EB] dark:text-[#60A5FA]">
                03
              </span>

              <span className="h-px w-8 bg-[#2563EB]/35" />

              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#2563EB] dark:text-[#60A5FA]">
                Research areas
              </p>
            </div>

            <h2 className="mt-6 max-w-[760px] text-[clamp(2.8rem,4.8vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.052em] text-[#0A1D2F] dark:text-white">
              Where we choose
              <br />
              to{" "}
              <span className="bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#A855F7] bg-clip-text text-transparent dark:from-[#60A5FA] dark:via-[#67E8F9] dark:to-[#C084FC]">
                look.
              </span>
            </h2>
          </div>

          <div className="max-w-[620px] lg:justify-self-end">
            <p className="text-base leading-8 text-[#0A1D2F]/58 dark:text-white/54 sm:text-[1.05rem]">
              Our research is organised around areas where technological
              change could unlock new capability, solve meaningful
              problems or reshape how existing systems work.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/41 dark:text-white/37">
              These are lenses for exploration rather than fixed
              boundaries. The technologies may change; the quality of
              the questions matters more.
            </p>
          </div>
        </div>

        {/* =====================================================
            RESEARCH FIELD
        ===================================================== */}

        <div className="mt-16 lg:mt-24">
          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-[#0A1D2F]/[0.08] bg-[#0A1D2F]/[0.055] dark:border-white/[0.08] dark:bg-white/[0.05] lg:grid-cols-2">
            {researchAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.number}
                  className="group relative min-h-[31rem] overflow-hidden bg-white/[0.54] p-7 backdrop-blur-xl dark:bg-[#0D1117]/[0.64] sm:p-9 lg:p-10"
                >
                  {/* hover atmosphere */}

                  <div
                    aria-hidden="true"
                    className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-0 blur-[110px] transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      backgroundColor: `${area.accent}16`,
                    }}
                  />

                  <div className="relative flex h-full flex-col">
                    {/* top */}

                    <div className="flex items-start justify-between">
                      <span
                        className="font-mono text-[0.48rem]"
                        style={{
                          color: area.accent,
                        }}
                      >
                        {area.number}
                      </span>

                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-full border"
                        style={{
                          borderColor: `${area.accent}25`,
                          backgroundColor: `${area.accent}0A`,
                        }}
                      >
                        <Icon
                          className="h-[1.05rem] w-[1.05rem]"
                          style={{
                            color: area.accent,
                          }}
                        />
                      </div>
                    </div>

                    {/* title */}

                    <div className="mt-14">
                      <h3 className="max-w-[430px] text-[2rem] font-semibold leading-[1.03] tracking-[-0.045em] text-[#0A1D2F] dark:text-white sm:text-[2.2rem]">
                        {area.title}
                      </h3>

                      <p className="mt-5 max-w-[500px] text-sm leading-7 text-[#0A1D2F]/43 dark:text-white/38">
                        {area.description}
                      </p>
                    </div>

                    {/* question */}

                    <div className="mt-8 border-l pl-5" style={{ borderColor: `${area.accent}45` }}>
                      <p className="text-[0.48rem] font-semibold uppercase tracking-[0.18em] text-[#0A1D2F]/25 dark:text-white/22">
                        Research question
                      </p>

                      <p className="mt-3 max-w-[470px] text-sm font-medium leading-7 text-[#0A1D2F]/65 dark:text-white/59">
                        {area.question}
                      </p>
                    </div>

                    {/* signals */}

                    <div className="mt-auto pt-10">
                      <div className="flex flex-wrap gap-2">
                        {area.signals.map((signal) => (
                          <span
                            key={signal}
                            className="rounded-full border px-3 py-1.5 text-[0.48rem] font-semibold uppercase tracking-[0.11em]"
                            style={{
                              borderColor: `${area.accent}20`,
                              backgroundColor: `${area.accent}08`,
                              color: area.accent,
                            }}
                          >
                            {signal}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            CLUSTER MAP
        ===================================================== */}

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-[#0A1D2F]/[0.08] bg-white/[0.3] backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.018] lg:mt-24">
          <div className="grid lg:grid-cols-[0.65fr_1.35fr]">
            {/* explanation */}

            <div className="border-b border-[#0A1D2F]/[0.07] p-7 dark:border-white/[0.07] sm:p-9 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-3">
                <CircleDot className="h-4 w-4 text-[#22D3EE]" />

                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.23em] text-[#0A1D2F]/34 dark:text-white/30">
                  Research field
                </p>
              </div>

              <h3 className="mt-6 max-w-[390px] text-[2rem] font-semibold leading-[1.05] tracking-[-0.045em] text-[#0A1D2F] dark:text-white">
                The interesting work often happens between categories.
              </h3>

              <p className="mt-6 max-w-[430px] text-sm leading-7 text-[#0A1D2F]/43 dark:text-white/38">
                A research question may begin in one area and quickly
                intersect with another. Intelligent systems can become
                questions about people. Human problems can expose
                engineering challenges. New technologies can reveal
                opportunities inside established systems.
              </p>
            </div>

            {/* map */}

            <div className="relative min-h-[34rem] overflow-hidden p-7 sm:p-9">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[27rem] w-[27rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2563EB]/[0.06]"
              />

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#22D3EE]/[0.07]"
              />

              <ResearchAreaMap />
            </div>
          </div>
        </div>

        {/* =====================================================
            BOUNDARY
        ===================================================== */}

        <div className="mt-16 border-y border-[#0A1D2F]/[0.08] py-10 dark:border-white/[0.08] lg:mt-20">
          <div className="grid gap-8 lg:grid-cols-[0.52fr_1.48fr] lg:items-center">
            <div>
              <p className="text-[0.55rem] font-semibold uppercase tracking-[0.24em] text-[#2563EB] dark:text-[#60A5FA]">
                Not a technology checklist
              </p>
            </div>

            <p className="max-w-[62rem] text-lg font-medium leading-8 tracking-[-0.02em] text-[#0A1D2F]/60 dark:text-white/55">
              We are less interested in adopting a technology because
              it is fashionable than in understanding{" "}
              <span className="text-[#0A1D2F] dark:text-white">
                what becomes possible when the right capability meets
                the right problem.
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
              Areas create questions
            </p>

            <p className="mt-2 text-sm text-[#0A1D2F]/42 dark:text-white/37">
              Method determines what we can learn from them.
            </p>
          </div>

          <a
            href="#research-method"
            className="group inline-flex items-center gap-3 text-[0.52rem] font-semibold uppercase tracking-[0.17em] text-[#2563EB] transition-colors hover:text-[#1D4ED8] dark:text-[#60A5FA] dark:hover:text-[#93C5FD]"
          >
            Our research method

            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   RESEARCH AREA MAP
============================================================ */

function ResearchAreaMap() {
  return (
    <div className="relative mx-auto h-[30rem] w-full max-w-[36rem]">
      {/* connections */}

      <MapConnection
        className="left-[27%] top-[31%] w-[47%] rotate-[3deg]"
        accent="#2563EB"
      />

      <MapConnection
        className="left-[28%] top-[31%] w-[42%] rotate-[58deg]"
        accent="#A855F7"
      />

      <MapConnection
        className="left-[30%] bottom-[28%] w-[44%] -rotate-[3deg]"
        accent="#10B981"
      />

      <MapConnection
        className="right-[27%] top-[32%] w-[42%] rotate-[121deg]"
        accent="#22D3EE"
      />

      {/* central question */}

      <div className="absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#22D3EE]/25 bg-white/[0.76] shadow-[0_0_45px_rgba(34,211,238,.1)] backdrop-blur-xl dark:bg-[#0D1117]/[0.82]">
        <div className="absolute inset-[7px] rounded-full border border-[#22D3EE]/10" />

        <div className="text-center">
          <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full border border-[#22D3EE]/20 bg-[#22D3EE]/[0.06] text-sm font-semibold text-[#0891B2] dark:text-[#67E8F9]">
            ?
          </span>

          <p className="mt-2 text-[0.52rem] font-semibold text-[#0A1D2F] dark:text-white">
            Question
          </p>
        </div>
      </div>

      <AreaNode
        className="left-[4%] top-[12%]"
        title="Intelligent"
        subtitle="Systems"
        accent="#2563EB"
      />

      <AreaNode
        className="right-[2%] top-[14%]"
        title="Human +"
        subtitle="Technology"
        accent="#22D3EE"
      />

      <AreaNode
        className="bottom-[6%] left-[5%]"
        title="Emerging"
        subtitle="Possibilities"
        accent="#A855F7"
      />

      <AreaNode
        className="bottom-[7%] right-[2%]"
        title="Systems +"
        subtitle="Impact"
        accent="#10B981"
      />

      <span className="absolute left-[15%] top-[51%] h-2 w-2 rounded-full bg-[#2563EB]/25" />

      <span className="absolute right-[14%] top-[52%] h-1.5 w-1.5 rounded-full bg-[#22D3EE]/30" />

      <span className="absolute bottom-[15%] left-[48%] h-2 w-2 rounded-full bg-[#A855F7]/20" />
    </div>
  );
}

function AreaNode({
  className,
  title,
  subtitle,
  accent,
}: {
  className: string;
  title: string;
  subtitle: string;
  accent: string;
}) {
  return (
    <div
      className={`absolute z-10 flex flex-col items-center text-center ${className}`}
    >
      <div
        className="relative flex h-[5.6rem] w-[5.6rem] items-center justify-center rounded-full border bg-white/[0.68] backdrop-blur-xl dark:bg-[#0D1117]/[0.74]"
        style={{
          borderColor: `${accent}32`,
          boxShadow: `0 0 30px ${accent}0C`,
        }}
      >
        <span
          className="h-2 w-2 rounded-full"
          style={{
            backgroundColor: accent,
            boxShadow: `0 0 10px ${accent}77`,
          }}
        />

        <span
          className="absolute inset-[7px] rounded-full border"
          style={{
            borderColor: `${accent}12`,
          }}
        />
      </div>

      <p className="mt-3 text-[0.53rem] font-semibold text-[#0A1D2F]/55 dark:text-white/49">
        {title}
      </p>

      <p className="mt-0.5 text-[0.45rem] text-[#0A1D2F]/27 dark:text-white/24">
        {subtitle}
      </p>
    </div>
  );
}

function MapConnection({
  className,
  accent,
}: {
  className: string;
  accent: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`absolute z-0 h-px origin-left ${className}`}
      style={{
        background: `linear-gradient(90deg, ${accent}10, ${accent}35, ${accent}10)`,
      }}
    />
  );
}