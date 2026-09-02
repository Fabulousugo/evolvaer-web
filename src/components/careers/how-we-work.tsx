
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  BrainCircuit,
  CircleDot,
  Compass,
  Lightbulb,
  RefreshCw,
  Users,
} from "lucide-react";

const workStages = [
  {
    number: "01",
    title: "Explore",
    short: "Understand the problem",
    description:
      "Start by looking beyond the obvious brief. Understand the problem, the context and what may actually be worth solving.",
    output: "Clarity",
    icon: Compass,
    accent: "#2563EB",
  },
  {
    number: "02",
    title: "Think together",
    short: "Challenge the first answer",
    description:
      "Bring different perspectives into the same conversation. Good ideas become stronger when assumptions can be questioned.",
    output: "Direction",
    icon: Users,
    accent: "#A855F7",
  },
  {
    number: "03",
    title: "Build",
    short: "Make the idea tangible",
    description:
      "Move from discussion into prototypes, systems and products that can be examined, tested and improved.",
    output: "Reality",
    icon: Blocks,
    accent: "#22D3EE",
  },
  {
    number: "04",
    title: "Learn",
    short: "Pay attention to evidence",
    description:
      "Look at what the work reveals. Progress comes from understanding what worked, what failed and what changed.",
    output: "Knowledge",
    icon: BrainCircuit,
    accent: "#10B981",
  },
  {
    number: "05",
    title: "Improve",
    short: "Make the next version better",
    description:
      "Use what we learn to sharpen the problem, strengthen the solution or change direction when the evidence demands it.",
    output: "Progress",
    icon: RefreshCw,
    accent: "#2563EB",
  },
];

export function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="relative overflow-x-clip border-t border-[#0A1D2F]/[0.06] bg-[#F8FAFC]/[0.58] py-24 backdrop-blur-[2px] dark:border-white/[0.06] dark:bg-[#0D1117]/[0.54] sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-[0.045] dark:opacity-[0.028]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.18) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          }}
        />

        <div className="absolute right-[-14rem] top-[15%] h-[34rem] w-[34rem] rounded-full bg-[#2563EB]/[0.03] blur-[170px] dark:bg-[#3B82F6]/[0.045]" />

        <div className="absolute bottom-[8%] left-[-12rem] h-[30rem] w-[30rem] rounded-full bg-[#22D3EE]/[0.025] blur-[160px] dark:bg-[#22D3EE]/[0.035]" />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.5rem] text-[#2563EB] dark:text-[#60A5FA]">
                03
              </span>

              <span className="h-px w-8 bg-[#2563EB]/35" />

              <div className="flex items-center gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-[#22D3EE]" />

                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#2563EB] dark:text-[#60A5FA]">
                  How we work
                </p>
              </div>
            </div>

            <h2 className="mt-6 max-w-[650px] text-[2.55rem] font-semibold leading-[1.02] tracking-[-0.045em] text-[#0A1D2F] dark:text-white sm:text-[3.2rem] lg:text-[3.8rem]">
              Good work is
              <br />
              <span className="text-[#22D3EE]">
                collaborative by design.
              </span>
            </h2>
          </div>

          <div className="lg:pt-10">
            <p className="max-w-[700px] text-lg leading-8 text-[#0A1D2F]/58 dark:text-white/54">
              Different disciplines see different parts of
              the same problem. We want those perspectives
              to interact early — before assumptions harden
              into decisions and decisions harden into
              products.
            </p>

            <p className="mt-5 max-w-[650px] text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
              That means thinking and making are connected.
              People should be able to explore, contribute,
              test ideas and learn from what the work
              reveals.
            </p>
          </div>
        </div>

        {/* =====================================================
            WORKING MODEL
        ===================================================== */}

        <div className="mt-16 border-y border-[#0A1D2F]/[0.08] dark:border-white/[0.08]">
          {/* desktop */}

          <div className="hidden lg:block">
            <div className="relative grid grid-cols-5">
              <div
                aria-hidden="true"
                className="absolute left-[10%] right-[10%] top-[4.25rem] h-px bg-gradient-to-r from-[#2563EB]/20 via-[#22D3EE]/28 to-[#10B981]/20"
              />

              {workStages.map((stage, index) => {
                const Icon = stage.icon;

                return (
                  <article
                    key={stage.title}
                    className="group relative min-h-[29rem] border-r border-[#0A1D2F]/[0.07] bg-white/[0.42] px-6 py-8 backdrop-blur-xl transition-colors duration-300 last:border-r-0 hover:bg-white/[0.64] dark:border-white/[0.07] dark:bg-[#0D1117]/[0.42] dark:hover:bg-white/[0.035]"
                  >
                    <div className="relative z-10">
                      <div className="flex items-center justify-between">
                        <span
                          className="font-mono text-[0.45rem]"
                          style={{
                            color: stage.accent,
                          }}
                        >
                          {stage.number}
                        </span>

                        <span className="text-[0.43rem] font-semibold uppercase tracking-[0.14em] text-[#0A1D2F]/24 dark:text-white/21">
                          Stage
                        </span>
                      </div>

                      <div className="mt-7 flex items-center">
                        <div
                          className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border bg-white dark:bg-[#0D1117]"
                          style={{
                            borderColor: `${stage.accent}35`,
                            boxShadow: `0 0 30px ${stage.accent}12`,
                          }}
                        >
                          <Icon
                            className="h-[1.1rem] w-[1.1rem]"
                            style={{
                              color: stage.accent,
                            }}
                          />
                        </div>
                      </div>

                      <p className="mt-9 text-[0.48rem] font-semibold uppercase tracking-[0.15em] text-[#0A1D2F]/28 dark:text-white/24">
                        {stage.short}
                      </p>

                      <h3 className="mt-3 text-[1.35rem] font-semibold tracking-[-0.03em] text-[#0A1D2F] dark:text-white">
                        {stage.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[#0A1D2F]/42 dark:text-white/37">
                        {stage.description}
                      </p>
                    </div>

                    <div className="absolute inset-x-6 bottom-7 border-t border-[#0A1D2F]/[0.07] pt-4 dark:border-white/[0.07]">
                      <div className="flex items-center justify-between">
                        <span className="text-[0.43rem] font-semibold uppercase tracking-[0.13em] text-[#0A1D2F]/24 dark:text-white/21">
                          Creates
                        </span>

                        <span
                          className="text-[0.5rem] font-semibold uppercase tracking-[0.12em]"
                          style={{
                            color: stage.accent,
                          }}
                        >
                          {stage.output}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* mobile / tablet */}

          <div className="lg:hidden">
            {workStages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <article
                  key={stage.title}
                  className="relative grid gap-6 border-b border-[#0A1D2F]/[0.07] bg-white/[0.42] px-5 py-7 backdrop-blur-lg last:border-b-0 dark:border-white/[0.07] dark:bg-[#0D1117]/[0.42] sm:grid-cols-[auto_1fr_auto] sm:items-start sm:px-7"
                >
                  <div className="relative">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-full border"
                      style={{
                        borderColor: `${stage.accent}35`,
                        backgroundColor: `${stage.accent}08`,
                      }}
                    >
                      <Icon
                        className="h-4 w-4"
                        style={{
                          color: stage.accent,
                        }}
                      />
                    </div>

                    {index !== workStages.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute left-1/2 top-11 hidden h-[calc(100%+1.75rem)] w-px -translate-x-1/2 sm:block"
                        style={{
                          backgroundColor: `${stage.accent}20`,
                        }}
                      />
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        className="font-mono text-[0.43rem]"
                        style={{
                          color: stage.accent,
                        }}
                      >
                        {stage.number}
                      </span>

                      <span className="text-[0.45rem] font-semibold uppercase tracking-[0.14em] text-[#0A1D2F]/25 dark:text-white/22">
                        {stage.short}
                      </span>
                    </div>

                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-[#0A1D2F] dark:text-white">
                      {stage.title}
                    </h3>

                    <p className="mt-3 max-w-[580px] text-sm leading-7 text-[#0A1D2F]/42 dark:text-white/37">
                      {stage.description}
                    </p>
                  </div>

                  <div className="sm:text-right">
                    <p className="text-[0.42rem] font-semibold uppercase tracking-[0.13em] text-[#0A1D2F]/23 dark:text-white/20">
                      Creates
                    </p>

                    <p
                      className="mt-1 text-[0.5rem] font-semibold uppercase tracking-[0.12em]"
                      style={{
                        color: stage.accent,
                      }}
                    >
                      {stage.output}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            COLLABORATION FIELD
        ===================================================== */}

        <div className="mt-16 grid gap-px overflow-hidden border-y border-[#0A1D2F]/[0.075] bg-[#0A1D2F]/[0.05] dark:border-white/[0.075] dark:bg-white/[0.05] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[28rem] overflow-hidden bg-white/[0.42] p-7 backdrop-blur-xl dark:bg-[#0D1117]/[0.46] sm:p-9">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Users className="h-4 w-4 text-[#22D3EE]" />

                <p className="text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-[#0A1D2F]/36 dark:text-white/31">
                  Collaboration field
                </p>
              </div>

              <span className="font-mono text-[0.42rem] text-[#22D3EE]">
                05 / CONNECTED
              </span>
            </div>

            <div className="mt-12">
              <CollaborationMap />
            </div>
          </div>

          <div className="flex flex-col justify-between bg-white/[0.58] p-7 backdrop-blur-xl dark:bg-[#0D1117]/[0.58] sm:p-9">
            <div>
              <div className="flex items-center gap-3">
                <Lightbulb className="h-4 w-4 text-[#A855F7]" />

                <p className="text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-[#0A1D2F]/36 dark:text-white/31">
                  The working principle
                </p>
              </div>

              <p className="mt-8 text-[1.55rem] font-medium leading-[1.38] tracking-[-0.035em] text-[#0A1D2F]/69 dark:text-white/64 sm:text-[1.85rem]">
                Expertise matters.
                <br />
                <span className="text-[#2563EB] dark:text-[#60A5FA]">
                  Interaction makes it stronger.
                </span>
              </p>

              <p className="mt-5 max-w-[470px] text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
                A technical decision can affect product
                experience. A user insight can change the
                engineering problem. Research can change
                whether something should be built at all.
              </p>
            </div>

            <div className="mt-10 border-t border-[#0A1D2F]/[0.07] pt-6 dark:border-white/[0.07]">
              <div className="flex flex-wrap gap-2">
                <WorkSignal
                  label="Research"
                  accent="#2563EB"
                />

                <WorkSignal
                  label="Engineering"
                  accent="#22D3EE"
                />

                <WorkSignal
                  label="Product"
                  accent="#A855F7"
                />

                <WorkSignal
                  label="Venture"
                  accent="#10B981"
                />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            OWNERSHIP
        ===================================================== */}

        <div className="mt-16 grid gap-10 border-t border-[#0A1D2F]/[0.08] pt-10 dark:border-white/[0.08] lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <p className="text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-[#2563EB] dark:text-[#60A5FA]">
              Ownership
            </p>
          </div>

          <div>
            <p className="max-w-[900px] text-[1.6rem] font-medium leading-[1.45] tracking-[-0.035em] text-[#0A1D2F]/67 dark:text-white/62 sm:text-[1.95rem]">
              Ownership is not doing everything yourself.
              It is{" "}
              <span className="text-[#0A1D2F] dark:text-white">
                caring about the outcome
              </span>{" "}
              enough to ask questions, involve the right
              people and keep improving the work.
            </p>
          </div>
        </div>

        {/* =====================================================
            HANDOFF
        ===================================================== */}

        <div className="mt-16 flex items-center justify-between border-t border-[#0A1D2F]/[0.08] pt-6 dark:border-white/[0.08]">
          <span className="font-mono text-[0.43rem] uppercase tracking-[0.15em] text-[#0A1D2F]/22 dark:text-white/19">
            Careers / 03
          </span>

          <a
            href="#growth"
            className="group inline-flex items-center gap-3 text-[0.5rem] font-semibold uppercase tracking-[0.17em] text-[#0A1D2F]/35 transition-colors hover:text-[#2563EB] dark:text-white/30 dark:hover:text-[#60A5FA]"
          >
            Growth

            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   COLLABORATION MAP
============================================================ */

function CollaborationMap() {
  return (
    <div className="relative mx-auto h-[18rem] max-w-[42rem]">
      {/* horizontal connections */}

      <span className="absolute left-[18%] top-[50%] h-px w-[27%] bg-gradient-to-r from-[#2563EB]/25 to-[#22D3EE]/40" />

      <span className="absolute left-[55%] top-[50%] h-px w-[27%] bg-gradient-to-r from-[#22D3EE]/40 to-[#A855F7]/25" />

      {/* diagonal connections */}

      <span className="absolute left-[28%] top-[31%] h-px w-[24%] origin-left rotate-[28deg] bg-gradient-to-r from-[#2563EB]/18 to-[#22D3EE]/32" />

      <span className="absolute left-[49%] top-[51%] h-px w-[25%] origin-left rotate-[30deg] bg-gradient-to-r from-[#22D3EE]/32 to-[#10B981]/18" />

      <span className="absolute left-[31%] top-[70%] h-px w-[23%] origin-left -rotate-[32deg] bg-gradient-to-r from-[#10B981]/18 to-[#22D3EE]/32" />

      <span className="absolute left-[50%] top-[48%] h-px w-[23%] origin-left -rotate-[31deg] bg-gradient-to-r from-[#22D3EE]/32 to-[#A855F7]/18" />

      <CollaborationNode
        className="left-[10%] top-[43%]"
        label="Research"
        accent="#2563EB"
      />

      <CollaborationNode
        className="left-[43%] top-[40%]"
        label="Shared problem"
        accent="#22D3EE"
        central
      />

      <CollaborationNode
        className="right-[8%] top-[43%]"
        label="Engineering"
        accent="#A855F7"
      />

      <CollaborationNode
        className="left-[20%] top-[8%]"
        label="Product"
        accent="#2563EB"
      />

      <CollaborationNode
        className="bottom-[5%] left-[20%]"
        label="Insight"
        accent="#10B981"
      />

      <CollaborationNode
        className="right-[19%] top-[8%]"
        label="Design"
        accent="#A855F7"
      />

      <CollaborationNode
        className="bottom-[5%] right-[18%]"
        label="Venture"
        accent="#10B981"
      />
    </div>
  );
}

function CollaborationNode({
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
      className={`absolute flex flex-col items-center ${className}`}
    >
      <span
        className={
          central
            ? "h-4 w-4 rounded-full"
            : "h-2.5 w-2.5 rounded-full"
        }
        style={{
          backgroundColor: accent,
          boxShadow: `0 0 ${
            central ? "24px" : "14px"
          } ${accent}80`,
        }}
      />

      {central && (
        <>
          <span className="absolute top-[-0.75rem] h-10 w-10 rounded-full border border-[#22D3EE]/12" />
          <span className="absolute top-[-1.5rem] h-16 w-16 rounded-full border border-[#22D3EE]/[0.05]" />
        </>
      )}

      <span className="mt-3 whitespace-nowrap text-[0.43rem] font-semibold uppercase tracking-[0.12em] text-[#0A1D2F]/31 dark:text-white/27">
        {label}
      </span>
    </div>
  );
}

/* ============================================================
   WORK SIGNAL
============================================================ */

function WorkSignal({
  label,
  accent,
}: {
  label: string;
  accent: string;
}) {
  return (
    <div
      className="flex items-center gap-2 rounded-full border px-3 py-2"
      style={{
        borderColor: `${accent}20`,
        backgroundColor: `${accent}06`,
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{
          backgroundColor: accent,
          boxShadow: `0 0 7px ${accent}60`,
        }}
      />

      <span className="text-[0.44rem] font-semibold uppercase tracking-[0.12em] text-[#0A1D2F]/36 dark:text-white/31">
        {label}
      </span>
    </div>
  );
}