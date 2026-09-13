import {
  CircleDot,
  Compass,
  Gauge,
  Scale,
  Sparkles,
} from "lucide-react";

const values = [
  {
    number: "01",
    title: "Curious",
    description:
      "Stay interested in what you do not yet understand. Ask better questions and remain open to being surprised.",
    question: "What are we missing?",
    icon: Compass,
    accent: "#2563EB",
  },
  {
    number: "02",
    title: "Thoughtful",
    description:
      "Understand context, consequences and trade-offs before turning activity into decisions.",
    question: "What actually matters here?",
    icon: Sparkles,
    accent: "#A855F7",
  },
  {
    number: "03",
    title: "Ambitious",
    description:
      "Aim for work that meaningfully improves what exists rather than simply reproducing what is familiar.",
    question: "How much better could this become?",
    icon: Gauge,
    accent: "#22D3EE",
  },
  {
    number: "04",
    title: "Responsible",
    description:
      "Consider the people, systems and consequences affected by what we create.",
    question: "What responsibility comes with this?",
    icon: Scale,
    accent: "#10B981",
  },
] as const;

export function CareersValues() {
  return (
    <section
      id="careers-values"
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 8% 20%, rgba(168,85,247,.03), transparent 25%), radial-gradient(circle at 94% 85%, rgba(34,211,238,.025), transparent 28%)",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* Header */}
        <div
          className="
            grid
            gap-5
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-end
            lg:gap-12
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[0.46rem] text-[#A855F7]">
                05
              </span>

              <span className="h-px w-7 bg-[#A855F7]/35" />

              <div className="flex items-center gap-2">
                <CircleDot className="h-3 w-3 text-[#A855F7]" />

                <p
                  className="
                    text-[0.54rem]
                    font-semibold
                    uppercase
                    tracking-[0.23em]
                    text-[#A855F7]
                  "
                >
                  What we value
                </p>
              </div>
            </div>

            <h2
              className="
                mt-4
                max-w-[540px]
                text-[clamp(1.8rem,2.5vw,2.35rem)]
                font-semibold
                leading-[1.04]
                tracking-[-0.04em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              The way we build{" "}
              <span className="text-[#A855F7]">
                matters too.
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
              sm:text-[0.92rem]
            "
          >
            Ambition works best when it is supported by curiosity,
            judgement and responsibility. These principles shape how
            we approach difficult work and how we work with one another.
          </p>
        </div>

        {/* Values */}
        <div
          className="
            mt-8
            grid
            overflow-hidden
            rounded-[1.2rem]
            border
            border-[#0A1D2F]/[0.08]
            bg-white
            dark:border-white/[0.08]
            dark:bg-[#101820]
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className={`
                  group
                  relative
                  min-h-[12.75rem]
                  px-5
                  py-5
                  transition-colors
                  duration-300
                  hover:bg-[#F8FAFC]
                  dark:hover:bg-white/[0.025]

                  ${
                    index < values.length - 1
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
                      borderColor: `${value.accent}30`,
                      backgroundColor: `${value.accent}0D`,
                    }}
                  >
                    <Icon
                      className="h-3.5 w-3.5"
                      style={{
                        color: value.accent,
                      }}
                    />
                  </div>

                  <span
                    className="font-mono text-[0.42rem]"
                    style={{
                      color: value.accent,
                    }}
                  >
                    {value.number}
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
                  {value.title}
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
                  {value.description}
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
                  <p
                    className="
                      text-[0.68rem]
                      font-medium
                      leading-4
                    "
                    style={{
                      color: value.accent,
                    }}
                  >
                    {value.question}
                  </p>
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
            The standard
          </p>

          <p
            className="
              max-w-[720px]
              text-[0.9rem]
              leading-6
              text-[#0A1D2F]/72
              dark:text-white/68
              sm:text-right
            "
          >
            Strong teams can disagree, explore and challenge one another
            while protecting trust, clarity and the quality of the work.
          </p>
        </div>
      </div>
    </section>
  );
}