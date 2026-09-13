import { RefreshCw } from "lucide-react";

const stages = [
  {
    number: "01",
    label: "Explore",
    description: "Find meaningful signals.",
    accent: "#2563EB",
  },
  {
    number: "02",
    label: "Research",
    description: "Turn signals into evidence.",
    accent: "#7C3AED",
  },
  {
    number: "03",
    label: "Engineer",
    description: "Turn evidence into systems.",
    accent: "#22D3EE",
  },
  {
    number: "04",
    label: "Build",
    description: "Turn systems into products.",
    accent: "#A855F7",
  },
  {
    number: "05",
    label: "Scale",
    description: "Strengthen what works.",
    accent: "#F97316",
  },
  {
    number: "06",
    label: "Impact",
    description: "Create meaningful change.",
    accent: "#10B981",
  },
] as const;

const feedbackItems = [
  {
    from: "Research",
    to: "Explore",
    description:
      "Evidence can reveal that the original opportunity was framed incorrectly.",
    accent: "#7C3AED",
  },
  {
    from: "Engineering",
    to: "Research",
    description:
      "Technical constraints can expose questions that need deeper investigation.",
    accent: "#22D3EE",
  },
  {
    from: "Impact",
    to: "Explore",
    description:
      "Real-world outcomes generate new signals, needs and opportunities.",
    accent: "#10B981",
  },
] as const;

export function IntegratedModel() {
  return (
    <section
      id="integrated-model"
      className="
        relative
        overflow-hidden
        border-t
        border-[#0A1D2F]/[0.07]
        py-14
        dark:border-white/[0.07]
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
          className="
            absolute
            inset-0
            bg-white/[0.48]
            dark:bg-[#0D1117]/[0.46]
          "
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, rgba(37,99,235,.05), transparent 30%), radial-gradient(circle at 62% 48%, rgba(34,211,238,.035), transparent 26%), radial-gradient(circle at 40% 44%, rgba(168,85,247,.035), transparent 25%)",
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
                  text-[#2563EB]
                  dark:text-[#60A5FA]
                "
              >
                SYSTEM
              </span>

              <span className="h-px w-7 bg-[#2563EB]/35" />

              <p
                className="
                  text-[0.5rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#2563EB]
                  dark:text-[#60A5FA]
                "
              >
                Integrated model
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
              One system.{" "}
              <span
                className="
                  text-[#2563EB]
                  dark:text-[#60A5FA]
                "
              >
                Not six silos.
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
              Explore, Research, Engineer, Build, Scale and Impact
              are not separate departments handing work from one to
              another. They operate as one connected system.
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
              Learning in one stage can reshape decisions made in
              another. The model moves forward, but it can also loop
              backwards when new evidence appears.
            </p>
          </div>
        </div>

        {/* =====================================================
            COMPLETE MODEL
        ===================================================== */}

        <div
          className="
            mt-10
            overflow-hidden
            rounded-[1rem]
            border
            border-[#0A1D2F]/[0.08]
            bg-white/[0.44]
            dark:border-white/[0.08]
            dark:bg-white/[0.02]
          "
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-6">
            {stages.map((stage, index) => (
              <div
                key={stage.label}
                className={`
                  group
                  relative
                  px-5
                  py-5

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

                  ${
                    index === 2 || index === 4
                      ? `
                        sm:border-l-0
                        lg:border-l
                      `
                      : ""
                  }

                  ${
                    index >= 2
                      ? `
                        sm:border-t
                        lg:border-t-0
                      `
                      : ""
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      backgroundColor: stage.accent,
                      boxShadow:
                        index === stages.length - 1
                          ? `0 0 9px ${stage.accent}65`
                          : undefined,
                    }}
                  />

                  <span
                    className="
                      font-mono
                      text-[0.4rem]
                      text-[#0A1D2F]/28
                      dark:text-white/26
                    "
                  >
                    {stage.number}
                  </span>
                </div>

                <p
                  className="
                    mt-4
                    text-[0.72rem]
                    font-semibold
                    text-[#0A1D2F]/72
                    dark:text-white/67
                  "
                >
                  {stage.label}
                </p>

                <p
                  className="
                    mt-1.5
                    text-[0.6rem]
                    leading-5
                    text-[#0A1D2F]/47
                    dark:text-white/44
                  "
                >
                  {stage.description}
                </p>

                {index < stages.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      -right-1.5
                      top-[2.35rem]
                      z-10
                      hidden
                      text-[0.55rem]
                      text-[#2563EB]/45
                      lg:block
                    "
                  >
                    →
                  </span>
                )}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-full
                    origin-left
                    scale-x-0
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                  style={{
                    backgroundColor: stage.accent,
                  }}
                />
              </div>
            ))}
          </div>

          <div
            className="
              flex
              flex-col
              gap-2
              border-t
              border-[#0A1D2F]/[0.07]
              px-5
              py-4
              dark:border-white/[0.07]
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p
              className="
                text-[0.63rem]
                font-medium
                text-[#0A1D2F]/52
                dark:text-white/49
              "
            >
              From uncertain opportunity to observable real-world
              value.
            </p>

            <p
              className="
                text-[0.43rem]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-[#2563EB]
                dark:text-[#60A5FA]
              "
            >
              Connected by learning
            </p>
          </div>
        </div>

        {/* =====================================================
            FEEDBACK LOOPS
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
            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                border
                border-[#2563EB]/20
                bg-[#2563EB]/[0.05]
                text-[#2563EB]
                dark:border-[#3B82F6]/20
                dark:text-[#60A5FA]
              "
            >
              <RefreshCw className="h-3.5 w-3.5" />
            </div>

            <p
              className="
                mt-3
                text-[0.44rem]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#2563EB]
                dark:text-[#60A5FA]
              "
            >
              Feedback loops
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
              Learning can move in every direction.
            </h3>
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
              dark:bg-white/[0.02]
              sm:grid-cols-3
            "
          >
            {feedbackItems.map((item, index) => (
              <div
                key={`${item.from}-${item.to}`}
                className={`
                  px-5
                  py-5

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
                <div className="flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      backgroundColor: item.accent,
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
                    Feedback
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span
                    className="
                      text-[0.68rem]
                      font-semibold
                      text-[#0A1D2F]/58
                      dark:text-white/54
                    "
                  >
                    {item.from}
                  </span>

                  <span
                    className="text-[0.55rem]"
                    style={{
                      color: item.accent,
                    }}
                  >
                    →
                  </span>

                  <span
                    className="
                      text-[0.68rem]
                      font-semibold
                      text-[#0A1D2F]
                      dark:text-white
                    "
                  >
                    {item.to}
                  </span>
                </div>

                <p
                  className="
                    mt-2
                    text-[0.6rem]
                    leading-5
                    text-[#0A1D2F]/47
                    dark:text-white/44
                  "
                >
                  {item.description}
                </p>
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
              text-[#2563EB]
              dark:text-[#60A5FA]
            "
          >
            The difference
          </p>

          <p
            className="
              max-w-[780px]
              text-[0.72rem]
              leading-5
              text-[#0A1D2F]/58
              dark:text-white/54
            "
          >
            We do not separate research from engineering,
            engineering from product, or product from real-world
            outcomes.{" "}
            <span
              className="
                font-semibold
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Much of the value is created in the connections
              between them.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}