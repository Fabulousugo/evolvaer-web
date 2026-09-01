"use client";

import {
  ArrowUpRight,
  Braces,
  CircleDot,
  MessageSquareText,
  Network,
  ShieldCheck,
} from "lucide-react";

const researchTracks = [
  {
    number: "01",
    eyebrow: "Active inquiry",
    title: "AI-assisted communication",
    description:
      "Exploring how intelligent systems could help people communicate more effectively in situations where speech, language or interpretation creates friction.",
    questions: [
      "How reliably can context improve interpretation?",
      "Where should human judgement remain central?",
      "How can the experience stay natural and unobtrusive?",
    ],
    accent: "#2563EB",
    icon: MessageSquareText,
    status: "Investigating",
  },
  {
    number: "02",
    eyebrow: "Applied research",
    title: "Accessible interaction",
    description:
      "Investigating how software can adapt around different communication needs rather than forcing every person into the same interaction model.",
    questions: [
      "What forms of interaction create the least friction?",
      "How should systems communicate uncertainty?",
      "What should accessibility look like by default?",
    ],
    accent: "#22D3EE",
    icon: Network,
    status: "Exploring",
  },
  {
    number: "03",
    eyebrow: "Technical inquiry",
    title: "Trustworthy intelligent systems",
    description:
      "Examining how AI-enabled products can remain understandable, responsible and useful when predictions or interpretations are imperfect.",
    questions: [
      "How should confidence be represented to users?",
      "When should a system defer instead of decide?",
      "How can technical performance and user trust be evaluated together?",
    ],
    accent: "#A855F7",
    icon: ShieldCheck,
    status: "Researching",
  },
];

export function CurrentResearch() {
  return (
    <section
      id="current-research"
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

        <div className="absolute -left-44 top-[8%] h-[34rem] w-[34rem] rounded-full bg-[#2563EB]/[0.035] blur-[170px] dark:bg-[#3B82F6]/[0.05]" />

        <div className="absolute right-[-10rem] bottom-[10%] h-[30rem] w-[30rem] rounded-full bg-[#A855F7]/[0.03] blur-[160px] dark:bg-[#A855F7]/[0.045]" />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.5rem] text-[#2563EB] dark:text-[#60A5FA]">
                05
              </span>

              <span className="h-px w-8 bg-[#2563EB]/35" />

              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#2563EB] dark:text-[#60A5FA]">
                Current research
              </p>
            </div>

            <h2 className="mt-6 max-w-[780px] text-[clamp(2.8rem,4.8vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.052em] text-[#0A1D2F] dark:text-white">
              What we are
              <br />
              trying to{" "}
              <span className="bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#A855F7] bg-clip-text text-transparent dark:from-[#60A5FA] dark:via-[#67E8F9] dark:to-[#C084FC]">
                understand.
              </span>
            </h2>
          </div>

          <div className="max-w-[620px] lg:justify-self-end">
            <p className="text-base leading-8 text-[#0A1D2F]/58 dark:text-white/54 sm:text-[1.05rem]">
              Our research portfolio is intentionally selective. We focus
              on questions that can deepen our understanding and potentially
              inform useful technologies, products or ventures.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/41 dark:text-white/37">
              Some investigations may become prototypes. Some may shape
              product decisions. Others may simply tell us that an idea
              should not move forward.
            </p>
          </div>
        </div>

        {/* =====================================================
            ACTIVE RESEARCH
        ===================================================== */}

        <div className="mt-16 space-y-4 lg:mt-24">
          {researchTracks.map((track) => {
            const Icon = track.icon;

            return (
              <article
                key={track.number}
                className="group relative overflow-hidden rounded-[1.8rem] border border-[#0A1D2F]/[0.08] bg-white/[0.42] backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.56] dark:border-white/[0.08] dark:bg-white/[0.018] dark:hover:bg-white/[0.028]"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-0 blur-[110px] transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    backgroundColor: `${track.accent}14`,
                  }}
                />

                <div className="relative grid lg:grid-cols-[0.18fr_0.92fr_1.1fr]">
                  {/* INDEX */}

                  <div className="border-b border-[#0A1D2F]/[0.07] p-7 dark:border-white/[0.07] lg:border-b-0 lg:border-r lg:p-8">
                    <div className="flex items-center justify-between lg:block">
                      <span
                        className="font-mono text-[0.48rem]"
                        style={{
                          color: track.accent,
                        }}
                      >
                        {track.number}
                      </span>

                      <div
                        className="mt-0 flex h-10 w-10 items-center justify-center rounded-full border lg:mt-8"
                        style={{
                          borderColor: `${track.accent}25`,
                          backgroundColor: `${track.accent}0A`,
                        }}
                      >
                        <Icon
                          className="h-4 w-4"
                          style={{
                            color: track.accent,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* DESCRIPTION */}

                  <div className="border-b border-[#0A1D2F]/[0.07] p-7 dark:border-white/[0.07] sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className="text-[0.5rem] font-semibold uppercase tracking-[0.18em]"
                        style={{
                          color: track.accent,
                        }}
                      >
                        {track.eyebrow}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-[#0A1D2F]/18 dark:bg-white/18" />

                      <span className="font-mono text-[0.43rem] uppercase tracking-[0.13em] text-[#0A1D2F]/23 dark:text-white/20">
                        {track.status}
                      </span>
                    </div>

                    <h3 className="mt-6 max-w-[500px] text-[2rem] font-semibold leading-[1.04] tracking-[-0.045em] text-[#0A1D2F] dark:text-white sm:text-[2.2rem]">
                      {track.title}
                    </h3>

                    <p className="mt-5 max-w-[520px] text-sm leading-7 text-[#0A1D2F]/43 dark:text-white/38">
                      {track.description}
                    </p>
                  </div>

                  {/* QUESTIONS */}

                  <div className="p-7 sm:p-8 lg:p-10">
                    <div className="flex items-center gap-3">
                      <Braces
                        className="h-4 w-4"
                        style={{
                          color: track.accent,
                        }}
                      />

                      <p className="text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-[#0A1D2F]/31 dark:text-white/28">
                        Questions under investigation
                      </p>
                    </div>

                    <div className="mt-8 divide-y divide-[#0A1D2F]/[0.065] border-y border-[#0A1D2F]/[0.065] dark:divide-white/[0.065] dark:border-white/[0.065]">
                      {track.questions.map(
                        (question, index) => (
                          <div
                            key={question}
                            className="grid grid-cols-[2rem_1fr] gap-3 py-5"
                          >
                            <span
                              className="pt-1 font-mono text-[0.43rem]"
                              style={{
                                color: track.accent,
                              }}
                            >
                              0{index + 1}
                            </span>

                            <p className="text-sm leading-7 text-[#0A1D2F]/52 dark:text-white/46">
                              {question}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            ADAPTCUES CONNECTION
        ===================================================== */}

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-[#22D3EE]/[0.13] bg-white/[0.4] backdrop-blur-xl dark:border-[#22D3EE]/[0.11] dark:bg-white/[0.02] lg:mt-24">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-7 sm:p-9 lg:p-11">
              <div className="flex items-center gap-3">
                <CircleDot className="h-4 w-4 text-[#22D3EE]" />

                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.23em] text-[#0891B2] dark:text-[#67E8F9]">
                  Research into application
                </p>
              </div>

              <h3 className="mt-7 max-w-[650px] text-[2.2rem] font-semibold leading-[1.02] tracking-[-0.045em] text-[#0A1D2F] dark:text-white sm:text-[2.55rem]">
                Adaptcues sits at the intersection of several questions.
              </h3>

              <p className="mt-6 max-w-[650px] text-sm leading-7 text-[#0A1D2F]/43 dark:text-white/38">
                Work around intelligent communication, accessibility,
                interpretation and human-centred software can inform how
                products such as Adaptcues are explored and developed.
              </p>

              <p className="mt-4 max-w-[650px] text-sm leading-7 text-[#0A1D2F]/43 dark:text-white/38">
                The purpose is not to force research toward a predetermined
                product. It is to let evidence improve the decisions made
                around that product.
              </p>
            </div>

            <div className="relative min-h-[22rem] border-t border-[#0A1D2F]/[0.07] p-7 dark:border-white/[0.07] sm:p-9 lg:border-l lg:border-t-0">
              <ResearchToProductMap />
            </div>
          </div>
        </div>

        {/* =====================================================
            STATUS NOTE
        ===================================================== */}

        <div className="mt-14 flex items-start gap-4 border-l border-[#2563EB]/25 pl-5">
          <CircleDot className="mt-1 h-3.5 w-3.5 shrink-0 text-[#2563EB]" />

          <p className="max-w-[780px] text-sm leading-7 text-[#0A1D2F]/38 dark:text-white/34">
            Research themes will evolve as questions are answered, abandoned
            or replaced. This page is designed to grow with the work rather
            than imply that every inquiry becomes a permanent programme.
          </p>
        </div>

        {/* =====================================================
            HANDOFF
        ===================================================== */}

        <div className="mt-12 flex flex-col gap-6 border-t border-[#0A1D2F]/[0.07] pt-8 dark:border-white/[0.07] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-[#0A1D2F]/24 dark:text-white/21">
              Evidence becomes useful
            </p>

            <p className="mt-2 text-sm text-[#0A1D2F]/42 dark:text-white/37">
              Research matters when understanding can inform action.
            </p>
          </div>

          <a
            href="#research-application"
            className="group inline-flex items-center gap-3 text-[0.52rem] font-semibold uppercase tracking-[0.17em] text-[#2563EB] transition-colors hover:text-[#1D4ED8] dark:text-[#60A5FA] dark:hover:text-[#93C5FD]"
          >
            From research to application

            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ResearchToProductMap() {
  return (
    <div className="flex h-full min-h-[18rem] items-center justify-center">
      <div className="relative h-[17rem] w-full max-w-[25rem]">
        <MapNode
          className="left-0 top-[12%]"
          label="Research"
          accent="#2563EB"
        />

        <MapNode
          className="left-[38%] top-[38%]"
          label="Evidence"
          accent="#22D3EE"
          active
        />

        <MapNode
          className="right-0 top-[12%]"
          label="Product"
          accent="#10B981"
        />

        <MapNode
          className="bottom-0 left-[38%]"
          label="Learning"
          accent="#A855F7"
        />

        <div className="absolute left-[16%] top-[28%] h-px w-[29%] rotate-[18deg] bg-gradient-to-r from-[#2563EB]/15 to-[#22D3EE]/45" />

        <div className="absolute right-[17%] top-[28%] h-px w-[29%] -rotate-[18deg] bg-gradient-to-l from-[#10B981]/15 to-[#22D3EE]/45" />

        <div className="absolute bottom-[28%] left-[46%] h-[26%] w-px bg-gradient-to-b from-[#22D3EE]/40 to-[#A855F7]/15" />
      </div>
    </div>
  );
}

function MapNode({
  className,
  label,
  accent,
  active = false,
}: {
  className: string;
  label: string;
  accent: string;
  active?: boolean;
}) {
  return (
    <div
      className={`absolute flex flex-col items-center gap-3 ${className}`}
    >
      <div
        className="relative flex h-[4.8rem] w-[4.8rem] items-center justify-center rounded-full border bg-white/[0.72] backdrop-blur-xl dark:bg-[#0D1117]/[0.78]"
        style={{
          borderColor: `${accent}32`,
          boxShadow: active
            ? `0 0 35px ${accent}22`
            : undefined,
        }}
      >
        <span
          className="h-2 w-2 rounded-full"
          style={{
            backgroundColor: accent,
            boxShadow: `0 0 10px ${accent}66`,
          }}
        />

        <span
          className="absolute inset-[7px] rounded-full border"
          style={{
            borderColor: `${accent}12`,
          }}
        />
      </div>

      <span className="text-[0.5rem] font-semibold uppercase tracking-[0.14em] text-[#0A1D2F]/42 dark:text-white/37">
        {label}
      </span>
    </div>
  );
}