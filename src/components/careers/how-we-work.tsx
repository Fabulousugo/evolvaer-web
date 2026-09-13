import {
  Blocks,
  BrainCircuit,
  CircleDot,
  Compass,
  RefreshCw,
  Users,
} from "lucide-react";

const workStages = [
  {
    number: "01",
    title: "Explore",
    short: "Understand the problem",
    description:
      "Look beyond the obvious brief and understand what may actually be worth solving.",
    output: "Clarity",
    icon: Compass,
    accent: "#2563EB",
  },
  {
    number: "02",
    title: "Think together",
    short: "Challenge the first answer",
    description:
      "Bring different perspectives together early enough to question assumptions.",
    output: "Direction",
    icon: Users,
    accent: "#A855F7",
  },
  {
    number: "03",
    title: "Build",
    short: "Make it tangible",
    description:
      "Turn ideas into prototypes, systems and products that can be tested.",
    output: "Reality",
    icon: Blocks,
    accent: "#22D3EE",
  },
  {
    number: "04",
    title: "Learn",
    short: "Follow the evidence",
    description:
      "Understand what worked, what failed and what the work revealed.",
    output: "Knowledge",
    icon: BrainCircuit,
    accent: "#10B981",
  },
  {
    number: "05",
    title: "Improve",
    short: "Make it better",
    description:
      "Use what we learn to strengthen the solution or change direction.",
    output: "Progress",
    icon: RefreshCw,
    accent: "#2563EB",
  },
] as const;

export function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="
        relative
        overflow-hidden

        border-t
        border-[#0A1D2F]/[0.07]

        bg-[#F8FAFC]

        py-12

        dark:border-white/[0.07]
        dark:bg-[#0D1117]

        sm:py-14
        lg:py-16
      "
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 95% 12%, rgba(37,99,235,.035), transparent 28%), radial-gradient(circle at 5% 90%, rgba(34,211,238,.025), transparent 25%)",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* Header */}
        <div
          className="
            grid
            gap-5

            lg:grid-cols-[0.85fr_1.15fr]
            lg:items-end
            lg:gap-12
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[0.46rem] text-[#2563EB] dark:text-[#60A5FA]">
                03
              </span>

              <span className="h-px w-7 bg-[#2563EB]/35" />

              <div className="flex items-center gap-2">
                <CircleDot className="h-3 w-3 text-[#22D3EE]" />

                <p
                  className="
                    text-[0.54rem]
                    font-semibold
                    uppercase
                    tracking-[0.23em]

                    text-[#2563EB]

                    dark:text-[#60A5FA]
                  "
                >
                  How we work
                </p>
              </div>
            </div>

            <h2
              className="
                mt-4
                max-w-[560px]

                text-[clamp(1.9rem,2.8vw,2.6rem)]
                font-semibold
                leading-[1.04]
                tracking-[-0.04em]

                text-[#0A1D2F]

                dark:text-white
              "
            >
              Good work is{" "}
              <span className="text-[#22D3EE]">
                collaborative by design.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-[620px]

              text-[0.88rem]
              leading-6

              text-[#0A1D2F]/70

              dark:text-white/68

              sm:text-[0.93rem]
            "
          >
            Different disciplines see different parts of the same
            problem. We explore together, build early and use evidence
            to improve the work — with ownership of the outcome, not
            just the task.
          </p>
        </div>

        {/* =====================================================
            DESKTOP PROCESS
        ===================================================== */}

        <div
          className="
            relative
            mt-8
            hidden

            overflow-hidden
            rounded-[1.25rem]

            border
            border-[#0A1D2F]/[0.08]

            bg-white

            dark:border-white/[0.08]
            dark:bg-[#101820]

            lg:grid
            lg:grid-cols-5
          "
        >
          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[10%]
              right-[10%]
              top-[3.35rem]
              h-px

              bg-gradient-to-r
              from-[#2563EB]/25
              via-[#22D3EE]/35
              to-[#10B981]/25
            "
          />

          {workStages.map((stage) => {
            const Icon = stage.icon;

            return (
              <article
                key={stage.title}
                className="
                  group
                  relative

                  min-h-[17rem]

                  border-r
                  border-[#0A1D2F]/[0.07]

                  px-5
                  py-5

                  transition-colors
                  duration-300

                  last:border-r-0

                  hover:bg-[#F8FAFC]

                  dark:border-white/[0.07]
                  dark:hover:bg-white/[0.025]
                "
              >
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono text-[0.43rem]"
                    style={{
                      color: stage.accent,
                    }}
                  >
                    {stage.number}
                  </span>

                  <span
                    className="
                      text-[0.42rem]
                      font-semibold
                      uppercase
                      tracking-[0.12em]

                      text-[#0A1D2F]/55

                      dark:text-white/50
                    "
                  >
                    {stage.output}
                  </span>
                </div>

                <div
                  className="
                    relative
                    z-10

                    mt-4

                    flex
                    h-9
                    w-9
                    items-center
                    justify-center

                    rounded-full
                    border

                    bg-white

                    dark:bg-[#101820]
                  "
                  style={{
                    borderColor: `${stage.accent}40`,
                    boxShadow: `0 0 20px ${stage.accent}0F`,
                  }}
                >
                  <Icon
                    className="h-3.5 w-3.5"
                    style={{
                      color: stage.accent,
                    }}
                  />
                </div>

                <h3
                  className="
                    mt-5

                    text-[1rem]
                    font-semibold
                    tracking-[-0.025em]

                    text-[#0A1D2F]

                    dark:text-white
                  "
                >
                  {stage.title}
                </h3>

                <p
                  className="
                    mt-1

                    text-[0.48rem]
                    font-semibold
                    uppercase
                    tracking-[0.12em]

                    text-[#0A1D2F]/58

                    dark:text-white/54
                  "
                >
                  {stage.short}
                </p>

                <p
                  className="
                    mt-3

                    text-[0.76rem]
                    leading-5

                    text-[#0A1D2F]/68

                    dark:text-white/64
                  "
                >
                  {stage.description}
                </p>

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    inset-x-5
                    bottom-0
                    h-px
                  "
                  style={{
                    background: `linear-gradient(90deg, ${stage.accent}55, transparent)`,
                  }}
                />
              </article>
            );
          })}
        </div>

        {/* =====================================================
            MOBILE / TABLET
        ===================================================== */}

        <div
          className="
            mt-7
            overflow-hidden

            rounded-[1rem]

            border
            border-[#0A1D2F]/[0.08]

            bg-white

            dark:border-white/[0.08]
            dark:bg-[#101820]

            lg:hidden
          "
        >
          {workStages.map((stage) => {
            const Icon = stage.icon;

            return (
              <article
                key={stage.title}
                className="
                  grid
                  grid-cols-[2.25rem_1fr]
                  gap-4

                  border-b
                  border-[#0A1D2F]/[0.07]

                  px-5
                  py-5

                  last:border-b-0

                  dark:border-white/[0.07]
                "
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center

                    rounded-full
                    border
                  "
                  style={{
                    borderColor: `${stage.accent}35`,
                    backgroundColor: `${stage.accent}09`,
                  }}
                >
                  <Icon
                    className="h-3.5 w-3.5"
                    style={{
                      color: stage.accent,
                    }}
                  />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="font-mono text-[0.42rem]"
                      style={{
                        color: stage.accent,
                      }}
                    >
                      {stage.number}
                    </span>

                    <h3
                      className="
                        text-[1rem]
                        font-semibold
                        tracking-[-0.025em]

                        text-[#0A1D2F]

                        dark:text-white
                      "
                    >
                      {stage.title}
                    </h3>

                    <span
                      className="
                        ml-auto

                        text-[0.42rem]
                        font-semibold
                        uppercase
                        tracking-[0.11em]

                        text-[#0A1D2F]/55

                        dark:text-white/50
                      "
                    >
                      {stage.output}
                    </span>
                  </div>

                  <p
                    className="
                      mt-1

                      text-[0.47rem]
                      font-semibold
                      uppercase
                      tracking-[0.11em]

                      text-[#0A1D2F]/58

                      dark:text-white/54
                    "
                  >
                    {stage.short}
                  </p>

                  <p
                    className="
                      mt-2

                      max-w-[560px]

                      text-[0.76rem]
                      leading-5

                      text-[#0A1D2F]/68

                      dark:text-white/64
                    "
                  >
                    {stage.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}