"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  CircleDot,
  FlaskConical,
  Layers3,
  Lightbulb,
  Network,
  Orbit,
} from "lucide-react";

const applicationPaths = [
  {
    number: "01",
    label: "Engineering",
    title: "Turn understanding into technical possibility.",
    description:
      "Research can give engineering a clearer problem, stronger assumptions and evidence about which technical directions deserve experimentation.",
    accent: "#2563EB",
    icon: Blocks,
  },
  {
    number: "02",
    label: "Product",
    title: "Turn capability into something people can use.",
    description:
      "Research can influence product decisions by revealing user needs, constraints, behaviours and the conditions under which a solution may actually be useful.",
    accent: "#22D3EE",
    icon: Layers3,
  },
  {
    number: "03",
    label: "Ventures",
    title: "Turn validated opportunity into something larger.",
    description:
      "Where evidence, technology and a meaningful problem begin to align, research can contribute to the case for developing a product into a venture.",
    accent: "#A855F7",
    icon: Orbit,
  },
];

export function ResearchApplication() {
  return (
    <section
      id="research-application"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-white/[0.4] backdrop-blur-[1px] dark:bg-[#0D1117]/[0.43]" />

        <div className="absolute left-[34%] top-[4%] h-[34rem] w-[34rem] rounded-full bg-[#22D3EE]/[0.035] blur-[170px] dark:bg-[#22D3EE]/[0.05]" />

        <div className="absolute -right-40 bottom-[3%] h-[32rem] w-[32rem] rounded-full bg-[#A855F7]/[0.03] blur-[170px] dark:bg-[#A855F7]/[0.045]" />

        <div
          className="absolute inset-0 opacity-[0.065] dark:opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,.1) 1px, transparent 1px)
            `,
            backgroundSize: "110px 110px",
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
                06
              </span>

              <span className="h-px w-8 bg-[#2563EB]/35" />

              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#2563EB] dark:text-[#60A5FA]">
                From research to application
              </p>
            </div>

            <h2 className="mt-6 max-w-[800px] text-[clamp(2.8rem,4.8vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.052em] text-[#0A1D2F] dark:text-white">
              Understanding should
              <br />
              inform{" "}
              <span className="bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#10B981] bg-clip-text text-transparent dark:from-[#60A5FA] dark:via-[#67E8F9] dark:to-[#34D399]">
                what happens next.
              </span>
            </h2>
          </div>

          <div className="max-w-[620px] lg:justify-self-end">
            <p className="text-base leading-8 text-[#0A1D2F]/58 dark:text-white/54 sm:text-[1.05rem]">
              Research at Evolvaer is connected to making. When an
              investigation produces useful understanding, that knowledge
              can influence engineering, product development and venture
              decisions.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/41 dark:text-white/37">
              The handoff is not automatic. Evidence helps determine
              whether the next step should be building, investigating
              further or stopping altogether.
            </p>
          </div>
        </div>

        {/* =====================================================
            KNOWLEDGE CORE
        ===================================================== */}

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-[#0A1D2F]/[0.08] bg-white/[0.34] backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.018] lg:mt-24">
          <div className="grid lg:grid-cols-[0.74fr_1.26fr]">
            {/* LEFT */}

            <div className="border-b border-[#0A1D2F]/[0.07] p-7 dark:border-white/[0.07] sm:p-9 lg:border-b-0 lg:border-r lg:p-11">
              <div className="flex items-center gap-3">
                <CircleDot className="h-4 w-4 text-[#22D3EE]" />

                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.23em] text-[#0891B2] dark:text-[#67E8F9]">
                  Knowledge core
                </p>
              </div>

              <h3 className="mt-7 max-w-[470px] text-[2.2rem] font-semibold leading-[1.02] tracking-[-0.045em] text-[#0A1D2F] dark:text-white sm:text-[2.55rem]">
                Research creates options, not obligations.
              </h3>

              <p className="mt-6 max-w-[510px] text-sm leading-7 text-[#0A1D2F]/43 dark:text-white/38">
                Stronger understanding gives us more informed choices
                about where to commit technical, product and venture
                resources.
              </p>

              <div className="mt-9 border-l border-[#A855F7]/30 pl-5">
                <p className="text-sm leading-7 text-[#0A1D2F]/42 dark:text-white/37">
                  Sometimes the right application is a prototype.
                  Sometimes it is a product decision. Sometimes it is
                  another question.
                </p>
              </div>
            </div>

            {/* RIGHT — APPLICATION MAP */}

            <div className="relative min-h-[34rem] overflow-hidden p-7 sm:p-9 lg:p-11">
              <ApplicationMap />
            </div>
          </div>
        </div>

        {/* =====================================================
            THREE PATHS
        ===================================================== */}

        <div className="mt-16 grid gap-px overflow-hidden rounded-[1.8rem] border border-[#0A1D2F]/[0.08] bg-[#0A1D2F]/[0.055] dark:border-white/[0.08] dark:bg-white/[0.05] lg:mt-24 lg:grid-cols-3">
          {applicationPaths.map((path) => {
            const Icon = path.icon;

            return (
              <article
                key={path.number}
                className="group relative min-h-[26rem] overflow-hidden bg-white/[0.54] p-7 backdrop-blur-xl dark:bg-[#0D1117]/[0.64] sm:p-9"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    backgroundColor: `${path.accent}16`,
                  }}
                />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono text-[0.47rem]"
                      style={{
                        color: path.accent,
                      }}
                    >
                      {path.number}
                    </span>

                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full border"
                      style={{
                        borderColor: `${path.accent}25`,
                        backgroundColor: `${path.accent}0A`,
                      }}
                    >
                      <Icon
                        className="h-4 w-4"
                        style={{
                          color: path.accent,
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-auto pt-14">
                    <p
                      className="text-[0.51rem] font-semibold uppercase tracking-[0.18em]"
                      style={{
                        color: path.accent,
                      }}
                    >
                      {path.label}
                    </p>

                    <h3 className="mt-4 max-w-[390px] text-[1.75rem] font-semibold leading-[1.05] tracking-[-0.04em] text-[#0A1D2F] dark:text-white">
                      {path.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-[#0A1D2F]/42 dark:text-white/37">
                      {path.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            DECISION GATE
        ===================================================== */}

        <div className="mt-16 grid gap-5 lg:mt-24 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative overflow-hidden rounded-[1.8rem] border border-[#2563EB]/[0.12] bg-white/[0.38] p-7 backdrop-blur-xl dark:border-[#60A5FA]/[0.1] dark:bg-white/[0.018] sm:p-9">
            <div className="flex items-center gap-3">
              <Lightbulb className="h-4 w-4 text-[#2563EB] dark:text-[#60A5FA]" />

              <p className="text-[0.55rem] font-semibold uppercase tracking-[0.23em] text-[#2563EB] dark:text-[#60A5FA]">
                Decision gate
              </p>
            </div>

            <h3 className="mt-7 max-w-[470px] text-[2rem] font-semibold leading-[1.04] tracking-[-0.045em] text-[#0A1D2F] dark:text-white">
              Evidence changes what we are willing to build.
            </h3>

            <p className="mt-6 max-w-[520px] text-sm leading-7 text-[#0A1D2F]/43 dark:text-white/38">
              An attractive idea is not enough. Moving toward application
              should become easier to justify as technical understanding,
              problem understanding and evidence improve.
            </p>
          </div>

          <div className="rounded-[1.8rem] border border-[#0A1D2F]/[0.08] bg-white/[0.34] p-7 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.018] sm:p-9">
            <p className="text-[0.55rem] font-semibold uppercase tracking-[0.23em] text-[#0A1D2F]/32 dark:text-white/28">
              Possible directions
            </p>

            <div className="mt-7 divide-y divide-[#0A1D2F]/[0.07] border-y border-[#0A1D2F]/[0.07] dark:divide-white/[0.07] dark:border-white/[0.07]">
              <DecisionRow
                number="A"
                title="Investigate again"
                description="Important uncertainty remains."
                accent="#A855F7"
              />

              <DecisionRow
                number="B"
                title="Prototype"
                description="A technical assumption needs to be tested."
                accent="#2563EB"
              />

              <DecisionRow
                number="C"
                title="Build"
                description="Evidence supports moving toward a usable system."
                accent="#22D3EE"
              />

              <DecisionRow
                number="D"
                title="Venture"
                description="Problem, product and opportunity begin to align."
                accent="#10B981"
              />

              <DecisionRow
                number="E"
                title="Stop"
                description="The evidence does not justify further investment."
                accent="#64748B"
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            CONNECTION TO EVOLVAER MODEL
        ===================================================== */}

        <div className="mt-16 border-y border-[#0A1D2F]/[0.08] py-10 dark:border-white/[0.08] lg:mt-20">
          <div className="grid gap-8 lg:grid-cols-[0.52fr_1.48fr] lg:items-center">
            <div>
              <p className="text-[0.55rem] font-semibold uppercase tracking-[0.24em] text-[#2563EB] dark:text-[#60A5FA]">
                Connected by design
              </p>
            </div>

            <p className="max-w-[62rem] text-lg font-medium leading-8 tracking-[-0.02em] text-[#0A1D2F]/60 dark:text-white/55">
              Research, engineering and venture building are not isolated
              functions. They create a feedback system in which{" "}
              <span className="text-[#0A1D2F] dark:text-white">
                what we learn changes what we build — and what we build
                creates new things to learn.
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
              Knowledge needs judgement
            </p>

            <p className="mt-2 text-sm text-[#0A1D2F]/42 dark:text-white/37">
              How we research matters as much as what we investigate.
            </p>
          </div>

          <a
            href="#research-principles"
            className="group inline-flex items-center gap-3 text-[0.52rem] font-semibold uppercase tracking-[0.17em] text-[#2563EB] transition-colors hover:text-[#1D4ED8] dark:text-[#60A5FA] dark:hover:text-[#93C5FD]"
          >
            Research principles

            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   APPLICATION MAP
============================================================ */

function ApplicationMap() {
  return (
    <div className="relative mx-auto h-[30rem] w-full max-w-[38rem]">
      {/* ORBITS */}

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[23rem] w-[23rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2563EB]/[0.07]"
      />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[16rem] w-[16rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#22D3EE]/[0.09]"
      />

      {/* CONNECTIONS */}

      <Connection
        className="left-[49%] top-[28%] h-[23%] w-px"
        from="#22D3EE"
        to="#2563EB"
      />

      <Connection
        className="left-[50%] top-[50%] h-px w-[28%]"
        from="#22D3EE"
        to="#10B981"
      />

      <Connection
        className="left-[24%] top-[50%] h-px w-[27%]"
        from="#A855F7"
        to="#22D3EE"
      />

      {/* CENTRAL KNOWLEDGE */}

      <div className="absolute left-1/2 top-1/2 z-20 flex h-[7.5rem] w-[7.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#22D3EE]/25 bg-white/[0.78] shadow-[0_0_55px_rgba(34,211,238,.1)] backdrop-blur-xl dark:bg-[#0D1117]/[0.84]">
        <div className="absolute inset-[8px] rounded-full border border-[#22D3EE]/10" />

        <div className="text-center">
          <Network className="mx-auto h-5 w-5 text-[#22D3EE]" />

          <p className="mt-2 text-[0.52rem] font-semibold text-[#0A1D2F] dark:text-white">
            Knowledge
          </p>

          <p className="mt-1 font-mono text-[0.39rem] uppercase tracking-[0.1em] text-[#0A1D2F]/24 dark:text-white/21">
            Evidence informed
          </p>
        </div>
      </div>

      <ApplicationNode
        className="left-1/2 top-[1%] -translate-x-1/2"
        label="Engineering"
        accent="#2563EB"
        icon={Blocks}
      />

      <ApplicationNode
        className="right-[1%] top-1/2 -translate-y-1/2"
        label="Product"
        accent="#10B981"
        icon={Layers3}
      />

      <ApplicationNode
        className="left-[1%] top-1/2 -translate-y-1/2"
        label="Venture"
        accent="#A855F7"
        icon={Orbit}
      />

      {/* feedback */}

      <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 text-center">
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#22D3EE]/15 bg-[#22D3EE]/[0.04]">
          <FlaskConical className="h-4 w-4 text-[#22D3EE]" />
        </div>

        <p className="mt-2 font-mono text-[0.4rem] uppercase tracking-[0.13em] text-[#0A1D2F]/24 dark:text-white/21">
          New questions
        </p>

        <span className="mt-1 block text-[#22D3EE]/55">
          ↺
        </span>
      </div>
    </div>
  );
}

function ApplicationNode({
  className,
  label,
  accent,
  icon: Icon,
}: {
  className: string;
  label: string;
  accent: string;
  icon: typeof Blocks;
}) {
  return (
    <div
      className={`absolute z-10 flex flex-col items-center ${className}`}
    >
      <div
        className="relative flex h-[5.3rem] w-[5.3rem] items-center justify-center rounded-full border bg-white/[0.7] backdrop-blur-xl dark:bg-[#0D1117]/[0.78]"
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

        <Icon
          className="h-4 w-4"
          style={{
            color: accent,
          }}
        />
      </div>

      <p className="mt-3 text-[0.5rem] font-semibold uppercase tracking-[0.13em] text-[#0A1D2F]/42 dark:text-white/37">
        {label}
      </p>
    </div>
  );
}

function Connection({
  className,
  from,
  to,
}: {
  className: string;
  from: string;
  to: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`absolute z-0 ${className}`}
      style={{
        background: `linear-gradient(90deg, ${from}20, ${to}50)`,
      }}
    />
  );
}

/* ============================================================
   DECISION ROW
============================================================ */

function DecisionRow({
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
    <div className="grid grid-cols-[2.4rem_1fr_auto] items-center gap-3 py-5">
      <span
        className="font-mono text-[0.44rem]"
        style={{
          color: accent,
        }}
      >
        {number}
      </span>

      <div>
        <p className="text-sm font-semibold text-[#0A1D2F] dark:text-white">
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-[#0A1D2F]/35 dark:text-white/31">
          {description}
        </p>
      </div>

      <ArrowRight
        className="h-3.5 w-3.5 opacity-45"
        style={{
          color: accent,
        }}
      />
    </div>
  );
}