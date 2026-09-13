import {
  BrainCircuit,
  CircleDot,
  Layers3,
  MoveUpRight,
  Network,
} from "lucide-react";

const growthDimensions = [
  {
    number: "01",
    title: "Depth",
    description:
      "Strengthen your craft and develop a deeper understanding of the systems and decisions within your discipline.",
    shift: "Know more deeply",
    icon: Layers3,
    accent: "#2563EB",
  },
  {
    number: "02",
    title: "Range",
    description:
      "Understand how your work connects with other disciplines, constraints and parts of the wider problem.",
    shift: "See more broadly",
    icon: Network,
    accent: "#22D3EE",
  },
  {
    number: "03",
    title: "Judgement",
    description:
      "Become better at deciding what matters, where uncertainty remains and when another direction may be stronger.",
    shift: "Decide more clearly",
    icon: BrainCircuit,
    accent: "#A855F7",
  },
  {
    number: "04",
    title: "Impact",
    description:
      "Turn knowledge and capability into outcomes that improve the work around you.",
    shift: "Contribute meaningfully",
    icon: MoveUpRight,
    accent: "#10B981",
  },
] as const;

export function GrowthCulture() {
  return (
    <section
      id="growth"
      className="
        relative
        overflow-hidden
        border-t
        border-[#0A1D2F]/[0.07]
        bg-white
        py-12
        dark:border-white/[0.07]
        dark:bg-[#0D1117]
        sm:py-14
        lg:py-16
      "
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 6% 15%, rgba(16,185,129,.03), transparent 26%), radial-gradient(circle at 95% 90%, rgba(37,99,235,.025), transparent 28%)",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* Header */}
        <div
          className="
            grid
            gap-5
            lg:grid-cols-[0.88fr_1.12fr]
            lg:items-end
            lg:gap-12
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[0.46rem] text-[#10B981]">
                04
              </span>

              <span className="h-px w-7 bg-[#10B981]/35" />

              <div className="flex items-center gap-2">
                <CircleDot className="h-3 w-3 text-[#10B981]" />

                <p
                  className="
                    text-[0.54rem]
                    font-semibold
                    uppercase
                    tracking-[0.23em]
                    text-[#10B981]
                  "
                >
                  Growth
                </p>
              </div>
            </div>

            <h2
              className="
                mt-4
                max-w-[560px]
                text-[clamp(1.85rem,2.6vw,2.45rem)]
                font-semibold
                leading-[1.04]
                tracking-[-0.04em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Strong people should{" "}
              <span className="text-[#10B981]">
                keep evolving.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-[610px]
              text-[0.88rem]
              leading-6
              text-[#0A1D2F]/70
              dark:text-white/68
              sm:text-[0.93rem]
            "
          >
            Growth is not only about a new title. It is about
            becoming more capable of understanding, shaping and
            solving increasingly difficult problems.
          </p>
        </div>

        {/* Growth dimensions */}
        <div
          className="
            mt-8
            grid
            overflow-hidden
            rounded-[1.2rem]
            border
            border-[#0A1D2F]/[0.08]
            bg-[#F8FAFC]
            dark:border-white/[0.08]
            dark:bg-[#101820]
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {growthDimensions.map((dimension, index) => {
            const Icon = dimension.icon;

            return (
              <article
                key={dimension.title}
                className={`
                  group
                  relative
                  min-h-[13.5rem]
                  px-5
                  py-5
                  transition-colors
                  duration-300
                  hover:bg-white
                  dark:hover:bg-white/[0.025]

                  ${
                    index < growthDimensions.length - 1
                      ? "border-b border-[#0A1D2F]/[0.07] dark:border-white/[0.07] md:border-b-0"
                      : ""
                  }

                  ${
                    index % 2 === 0
                      ? "md:border-r md:border-[#0A1D2F]/[0.07] md:dark:border-white/[0.07]"
                      : ""
                  }

                  ${
                    index < 3
                      ? "xl:border-r xl:border-[#0A1D2F]/[0.07] xl:dark:border-white/[0.07]"
                      : ""
                  }
                `}
              >
                <div className="flex items-center justify-between">
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
                      borderColor: `${dimension.accent}30`,
                      backgroundColor: `${dimension.accent}0D`,
                    }}
                  >
                    <Icon
                      className="h-3.5 w-3.5"
                      style={{
                        color: dimension.accent,
                      }}
                    />
                  </div>

                  <span
                    className="font-mono text-[0.42rem]"
                    style={{
                      color: dimension.accent,
                    }}
                  >
                    {dimension.number}
                  </span>
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
                  {dimension.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-[0.76rem]
                    leading-5
                    text-[#0A1D2F]/68
                    dark:text-white/64
                  "
                >
                  {dimension.description}
                </p>

                <div
                  className="
                    absolute
                    inset-x-5
                    bottom-4
                    border-t
                    border-[#0A1D2F]/[0.07]
                    pt-3
                    dark:border-white/[0.07]
                  "
                >
                  <span
                    className="
                      text-[0.46rem]
                      font-semibold
                      uppercase
                      tracking-[0.11em]
                    "
                    style={{
                      color: dimension.accent,
                    }}
                  >
                    {dimension.shift}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing principle */}
        <div
          className="
            mt-7
            flex
            flex-col
            gap-3
            border-t
            border-[#0A1D2F]/[0.08]
            pt-6
            dark:border-white/[0.08]
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-8
          "
        >
          <p
            className="
              text-[0.5rem]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#10B981]
            "
          >
            Growth principle
          </p>

          <p
            className="
              max-w-[700px]
              text-[0.92rem]
              leading-6
              text-[#0A1D2F]/72
              dark:text-white/68
              sm:text-right
            "
          >
            The aim is not to know everything. It is to become
            better at learning what the next problem requires.
          </p>
        </div>
      </div>
    </section>
  );
}