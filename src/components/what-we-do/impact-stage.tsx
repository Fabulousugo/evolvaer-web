import {
  BarChart3,
  Globe2,
  RefreshCw,
  Target,
} from "lucide-react";

const impactDimensions = [
  {
    number: "01",
    icon: Target,
    label: "Outcomes",
    title: "Measure what changed",
    description:
      "Look beyond activity to understand whether the product is creating the outcome it was designed to achieve.",
    accent: "#10B981",
  },
  {
    number: "02",
    icon: BarChart3,
    label: "Evidence",
    title: "Learn from reality",
    description:
      "Use performance, behaviour and outcome data to understand what is working and what needs attention.",
    accent: "#22D3EE",
  },
  {
    number: "03",
    icon: Globe2,
    label: "Reach",
    title: "Extend useful value",
    description:
      "Strengthen impact by helping a useful solution reach more of the people and systems that genuinely benefit.",
    accent: "#2563EB",
  },
  {
    number: "04",
    icon: RefreshCw,
    label: "Evolution",
    title: "Feed learning back in",
    description:
      "Turn real-world learning into new product decisions, research questions and technological opportunities.",
    accent: "#7C3AED",
  },
] as const;

const valueChain = [
  {
    number: "01",
    label: "Output",
    title: "We built it",
    description: "A product or technological system exists.",
    accent: "#2563EB",
  },
  {
    number: "02",
    label: "Outcome",
    title: "It changed something",
    description:
      "People or organisations experience meaningful value.",
    accent: "#22D3EE",
  },
  {
    number: "03",
    label: "Impact",
    title: "The value endures",
    description:
      "The improvement becomes significant, repeatable or wider-reaching.",
    accent: "#10B981",
    active: true,
  },
] as const;

const feedbackLoop = [
  {
    number: "01",
    label: "Impact",
    accent: "#10B981",
  },
  {
    number: "02",
    label: "Learning",
    accent: "#22D3EE",
  },
  {
    number: "03",
    label: "New signal",
    accent: "#7C3AED",
  },
  {
    number: "04",
    label: "Explore again",
    accent: "#2563EB",
  },
] as const;

export function ImpactStage() {
  return (
    <section
      id="impact"
      className="
        relative
        overflow-hidden
        border-t
        border-[#0A1D2F]/[0.07]
        bg-[#F8FAFC]/[0.38]
        py-14
        dark:border-white/[0.07]
        dark:bg-[#0D1117]/[0.36]
        sm:py-16
        lg:py-20
      "
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 94% 14%, rgba(16,185,129,.05), transparent 28%), radial-gradient(circle at 5% 90%, rgba(34,211,238,.04), transparent 27%)",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className="
            grid
            gap-7
            lg:grid-cols-[0.82fr_1.18fr]
            lg:items-end
            lg:gap-14
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <span
                className="
                  font-mono
                  text-[0.46rem]
                  text-[#059669]
                  dark:text-[#34D399]
                "
              >
                06
              </span>

              <span className="h-px w-7 bg-[#10B981]/35" />

              <p
                className="
                  text-[0.5rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#059669]
                  dark:text-[#34D399]
                "
              >
                Impact
              </p>
            </div>

            <h2
              className="
                mt-4
                max-w-[590px]
                text-[clamp(1.95rem,3.2vw,2.75rem)]
                font-semibold
                leading-[1]
                tracking-[-0.045em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Make sure it{" "}
              <span
                className="
                  text-[#059669]
                  dark:text-[#34D399]
                "
              >
                actually matters.
              </span>
            </h2>
          </div>

          <div
            className="
              max-w-[650px]
              lg:justify-self-end
            "
          >
            <p
              className="
                text-[0.84rem]
                leading-7
                text-[#0A1D2F]/68
                dark:text-white/64
                sm:text-[0.9rem]
              "
            >
              Technology has little value simply because it exists.
              The final test is whether it improves something that
              matters — a decision, an experience, an organisation,
              an industry or a wider system.
            </p>

            <p
              className="
                mt-3
                text-[0.72rem]
                leading-6
                text-[#0A1D2F]/52
                dark:text-white/49
              "
            >
              Impact closes the gap between what we intended to
              create and what actually happened in the real world.
            </p>
          </div>
        </div>

        {/* =====================================================
            IMPACT DIMENSIONS
        ===================================================== */}

        <div
          className="
            mt-10
            grid
            overflow-hidden
            rounded-[1rem]
            border
            border-[#0A1D2F]/[0.08]
            bg-white/[0.46]
            dark:border-white/[0.08]
            dark:bg-white/[0.02]
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {impactDimensions.map((dimension, index) => {
            const Icon = dimension.icon;

            return (
              <article
                key={dimension.title}
                className={`
                  group
                  relative
                  p-5
                  sm:p-6

                  ${
                    index !== 0
                      ? `
                        border-t
                        border-[#0A1D2F]/[0.07]
                        dark:border-white/[0.07]
                        md:border-l
                        md:border-t-0
                      `
                      : ""
                  }

                  ${
                    index === 2
                      ? `
                        md:border-l-0
                        lg:border-l
                      `
                      : ""
                  }

                  ${
                    index >= 2
                      ? `
                        md:border-t
                        lg:border-t-0
                      `
                      : ""
                  }
                `}
              >
                <div className="flex items-start justify-between">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-lg
                      border
                    "
                    style={{
                      color: dimension.accent,
                      borderColor: `${dimension.accent}28`,
                      backgroundColor: `${dimension.accent}0A`,
                    }}
                  >
                    <Icon className="h-4 w-4" />
                  </div>

                  <span
                    className="
                      font-mono
                      text-[0.4rem]
                      text-[#0A1D2F]/28
                      dark:text-white/26
                    "
                  >
                    IMPACT / {dimension.number}
                  </span>
                </div>

                <p
                  className="
                    mt-5
                    text-[0.43rem]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                  "
                  style={{
                    color: dimension.accent,
                  }}
                >
                  {dimension.label}
                </p>

                <h3
                  className="
                    mt-1.5
                    text-[0.9rem]
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
                    mt-2.5
                    text-[0.67rem]
                    leading-5
                    text-[#0A1D2F]/55
                    dark:text-white/51
                  "
                >
                  {dimension.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            VALUE CHAIN
        ===================================================== */}

        <div
          className="
            mt-8
            grid
            gap-5
            lg:grid-cols-[0.5fr_1.5fr]
            lg:items-center
            lg:gap-12
          "
        >
          <div>
            <p
              className="
                text-[0.44rem]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#059669]
                dark:text-[#34D399]
              "
            >
              Value chain
            </p>

            <h3
              className="
                mt-2
                max-w-[310px]
                text-[1.05rem]
                font-semibold
                leading-snug
                tracking-[-0.025em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Output is not the same thing as impact.
            </h3>

            <p
              className="
                mt-2
                max-w-[310px]
                text-[0.67rem]
                leading-5
                text-[#0A1D2F]/50
                dark:text-white/47
              "
            >
              Shipping is a milestone. What changes because people
              use the product is what ultimately matters.
            </p>
          </div>

          <div
            className="
              grid
              overflow-hidden
              rounded-[1rem]
              border
              border-[#0A1D2F]/[0.08]
              bg-white/[0.42]
              dark:border-white/[0.08]
              dark:bg-white/[0.025]
              md:grid-cols-3
            "
          >
            {valueChain.map((item, index) => (
              <div
                key={item.label}
                className={`
                  relative
                  px-5
                  py-5

                  ${
                    index !== 0
                      ? `
                        border-t
                        border-[#0A1D2F]/[0.07]
                        dark:border-white/[0.07]
                        md:border-l
                        md:border-t-0
                      `
                      : ""
                  }
                `}
                style={{
                  backgroundColor:
                    "active" in item && item.active
                      ? `${item.accent}08`
                      : undefined,
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        backgroundColor: item.accent,
                        boxShadow:
                          "active" in item && item.active
                            ? `0 0 9px ${item.accent}70`
                            : undefined,
                      }}
                    />

                    <span
                      className="
                        text-[0.41rem]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-[#0A1D2F]/36
                        dark:text-white/34
                      "
                    >
                      {item.label}
                    </span>
                  </div>

                  <span
                    className="
                      font-mono
                      text-[0.4rem]
                      text-[#0A1D2F]/27
                      dark:text-white/25
                    "
                  >
                    {item.number}
                  </span>
                </div>

                <p
                  className="
                    mt-4
                    text-[0.76rem]
                    font-semibold
                    tracking-[-0.02em]
                    text-[#0A1D2F]/72
                    dark:text-white/67
                  "
                >
                  {item.title}
                </p>

                <p
                  className="
                    mt-1.5
                    max-w-[250px]
                    text-[0.61rem]
                    leading-5
                    text-[#0A1D2F]/48
                    dark:text-white/45
                  "
                >
                  {item.description}
                </p>

                {index < valueChain.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      -right-1.5
                      top-1/2
                      z-10
                      hidden
                      -translate-y-1/2
                      text-[0.58rem]
                      text-[#10B981]/60
                      md:block
                    "
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            FEEDBACK LOOP
        ===================================================== */}

        <div
          className="
            mt-8
            grid
            gap-5
            lg:grid-cols-[0.5fr_1.5fr]
            lg:items-center
            lg:gap-12
          "
        >
          <div>
            <p
              className="
                text-[0.44rem]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#0A1D2F]/40
                dark:text-white/38
              "
            >
              The loop continues
            </p>

            <h3
              className="
                mt-2
                max-w-[300px]
                text-[1.05rem]
                font-semibold
                tracking-[-0.025em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Impact creates new signals.
            </h3>

            <p
              className="
                mt-2
                max-w-[310px]
                text-[0.67rem]
                leading-5
                text-[#0A1D2F]/50
                dark:text-white/47
              "
            >
              Real-world use reveals new behaviours, constraints and
              opportunities that feed back into exploration.
            </p>
          </div>

          <div
            className="
              grid
              overflow-hidden
              rounded-[1rem]
              border
              border-[#0A1D2F]/[0.08]
              bg-white/[0.4]
              dark:border-white/[0.08]
              dark:bg-white/[0.02]
              sm:grid-cols-4
            "
          >
            {feedbackLoop.map((item, index) => (
              <div
                key={item.label}
                className={`
                  relative
                  flex
                  items-center
                  gap-3
                  px-5
                  py-4

                  ${
                    index !== 0
                      ? `
                        border-t
                        border-[#0A1D2F]/[0.07]
                        dark:border-white/[0.07]
                        sm:border-l
                        sm:border-t-0
                      `
                      : ""
                  }
                `}
              >
                <span
                  className="
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    font-mono
                    text-[0.4rem]
                  "
                  style={{
                    color: item.accent,
                    borderColor: `${item.accent}30`,
                    backgroundColor: `${item.accent}08`,
                  }}
                >
                  {item.number}
                </span>

                <span
                  className="
                    text-[0.64rem]
                    font-semibold
                    text-[#0A1D2F]/62
                    dark:text-white/58
                  "
                >
                  {item.label}
                </span>

                {index < feedbackLoop.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      -right-1.5
                      top-1/2
                      z-10
                      hidden
                      -translate-y-1/2
                      text-[0.55rem]
                      text-[#2563EB]/50
                      sm:block
                    "
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            PRINCIPLE
        ===================================================== */}

        <div
          className="
            mt-8
            grid
            gap-3
            border-y
            border-[#0A1D2F]/[0.08]
            py-5
            dark:border-white/[0.08]
            md:grid-cols-[0.42fr_1.58fr]
            md:items-center
          "
        >
          <p
            className="
              text-[0.43rem]
              font-semibold
              uppercase
              tracking-[0.17em]
              text-[#059669]
              dark:text-[#34D399]
            "
          >
            Impact principle
          </p>

          <p
            className="
              max-w-[760px]
              text-[0.72rem]
              leading-5
              text-[#0A1D2F]/58
              dark:text-white/54
            "
          >
            Innovation is not complete when something launches.{" "}
            <span
              className="
                font-semibold
                text-[#0A1D2F]
                dark:text-white
              "
            >
              It becomes meaningful when technology creates useful,
              observable and lasting change.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}