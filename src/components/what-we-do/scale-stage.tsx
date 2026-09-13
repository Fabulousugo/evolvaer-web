import {
  Gauge,
  Network,
  TrendingUp,
  Users,
} from "lucide-react";

const scaleDimensions = [
  {
    number: "01",
    icon: Gauge,
    label: "Performance",
    title: "Strengthen the technology",
    description:
      "Improve reliability, performance, observability and infrastructure as demand increases.",
    accent: "#F97316",
  },
  {
    number: "02",
    icon: Users,
    label: "Adoption",
    title: "Design for wider use",
    description:
      "Learn where friction appears as the product moves beyond its earliest users.",
    accent: "#2563EB",
  },
  {
    number: "03",
    icon: Network,
    label: "Operations",
    title: "Build repeatable systems",
    description:
      "Create the processes, tooling and feedback loops needed to support the product consistently.",
    accent: "#22D3EE",
  },
  {
    number: "04",
    icon: TrendingUp,
    label: "Readiness",
    title: "Strengthen the venture",
    description:
      "Test positioning, economics and growth assumptions alongside the technology.",
    accent: "#10B981",
  },
] as const;

const scaleStates = [
  {
    number: "01",
    label: "Prove",
    title: "It works",
    description: "A useful product exists.",
    accent: "#A855F7",
  },
  {
    number: "02",
    label: "Strengthen",
    title: "It holds",
    description: "The system remains dependable under pressure.",
    accent: "#2563EB",
  },
  {
    number: "03",
    label: "Expand",
    title: "It grows",
    description:
      "Technology, operations and the venture support wider adoption.",
    accent: "#F97316",
    active: true,
  },
] as const;

const coordinatedSystems = [
  {
    number: "01",
    title: "Technology",
    text: "Performance, reliability and infrastructure.",
    accent: "#2563EB",
  },
  {
    number: "02",
    title: "Product",
    text: "Experience, capability and adoption.",
    accent: "#A855F7",
  },
  {
    number: "03",
    title: "Operations",
    text: "Processes, tooling and repeatability.",
    accent: "#22D3EE",
  },
  {
    number: "04",
    title: "Venture",
    text: "Positioning, economics and commercial readiness.",
    accent: "#F97316",
  },
] as const;

const readinessChecks = [
  {
    label: "Useful",
    text: "People receive meaningful value.",
  },
  {
    label: "Reliable",
    text: "The system performs consistently.",
  },
  {
    label: "Repeatable",
    text: "Growth does not depend on improvisation.",
  },
] as const;

export function ScaleStage() {
  return (
    <section
      id="scale"
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
              "radial-gradient(circle at 94% 14%, rgba(249,115,22,.05), transparent 28%), radial-gradient(circle at 5% 90%, rgba(34,211,238,.04), transparent 27%)",
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
                  text-[#EA580C]
                  dark:text-[#FB923C]
                "
              >
                05
              </span>

              <span className="h-px w-7 bg-[#F97316]/35" />

              <p
                className="
                  text-[0.5rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#EA580C]
                  dark:text-[#FB923C]
                "
              >
                Scale
              </p>
            </div>

            <h2
              className="
                mt-4
                max-w-[610px]
                text-[clamp(1.95rem,3.2vw,2.75rem)]
                font-semibold
                leading-[1]
                tracking-[-0.045em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Make what works work at{" "}
              <span
                className="
                  text-[#EA580C]
                  dark:text-[#FB923C]
                "
              >
                greater scale.
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
              A product that works for its first users is not
              necessarily ready for its next thousand. Scaling means
              strengthening the technology, operations and venture
              around the product as demand changes.
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
              We treat scale as a systems problem — not simply a
              question of adding more users.
            </p>
          </div>
        </div>

        {/* =====================================================
            SCALE DIMENSIONS
        ===================================================== */}

        <div
          className="
            mt-10
            grid
            overflow-hidden
            rounded-[1rem]
            border
            border-[#0A1D2F]/[0.08]
            bg-white/[0.44]
            dark:border-white/[0.08]
            dark:bg-white/[0.02]
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {scaleDimensions.map((dimension, index) => {
            const Icon = dimension.icon;

            return (
              <article
                key={dimension.title}
                className={`
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
                    SCALE / {dimension.number}
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
            SCALE MODEL
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
                text-[#EA580C]
                dark:text-[#FB923C]
              "
            >
              Scaling model
            </p>

            <h3
              className="
                mt-2
                max-w-[320px]
                text-[1.05rem]
                font-semibold
                leading-snug
                tracking-[-0.025em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Growth exposes weaknesses that smaller systems can hide.
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
              dark:bg-white/[0.025]
              md:grid-cols-3
            "
          >
            {scaleStates.map((item, index) => {
              const active =
                "active" in item && item.active;

              return (
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
                    backgroundColor: active
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
                          boxShadow: active
                            ? `0 0 9px ${item.accent}65`
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

                  {index < scaleStates.length - 1 && (
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
                        text-[#F97316]/55
                        md:block
                      "
                    >
                      →
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            COORDINATED SYSTEMS
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
              Coordinated growth
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
              Scale the whole system.
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
              Sustainable growth breaks down when one part advances
              much faster than everything around it.
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
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {coordinatedSystems.map((item, index) => (
              <div
                key={item.title}
                className={`
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

                  ${
                    index === 2
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
                <div className="flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      backgroundColor: item.accent,
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
                    {item.number}
                  </span>
                </div>

                <p
                  className="
                    mt-3
                    text-[0.68rem]
                    font-semibold
                    text-[#0A1D2F]/68
                    dark:text-white/63
                  "
                >
                  {item.title}
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
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            READINESS + PRINCIPLE
        ===================================================== */}

        <div
          className="
            mt-8
            grid
            gap-5
            border-y
            border-[#0A1D2F]/[0.08]
            py-5
            dark:border-white/[0.08]
            lg:grid-cols-[0.5fr_1.5fr]
            lg:items-center
            lg:gap-12
          "
        >
          <div>
            <p
              className="
                text-[0.43rem]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#EA580C]
                dark:text-[#FB923C]
              "
            >
              Scale readiness
            </p>

            <h3
              className="
                mt-2
                text-[0.95rem]
                font-semibold
                tracking-[-0.025em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Growth should be earned.
            </h3>
          </div>

          <div
            className="
              grid
              gap-3
              sm:grid-cols-3
            "
          >
            {readinessChecks.map((item) => (
              <div
                key={item.label}
                className="
                  rounded-xl
                  border
                  border-[#0A1D2F]/[0.07]
                  bg-white/[0.42]
                  px-4
                  py-3.5
                  dark:border-white/[0.07]
                  dark:bg-white/[0.02]
                "
              >
                <span
                  className="
                    block
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#10B981]
                  "
                />

                <p
                  className="
                    mt-2.5
                    text-[0.67rem]
                    font-semibold
                    text-[#0A1D2F]/68
                    dark:text-white/63
                  "
                >
                  {item.label}
                </p>

                <p
                  className="
                    mt-1
                    text-[0.58rem]
                    leading-5
                    text-[#0A1D2F]/46
                    dark:text-white/43
                  "
                >
                  {item.text}
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
            mt-5
            grid
            gap-3
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
              text-[#EA580C]
              dark:text-[#FB923C]
            "
          >
            Scale principle
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
            Scaling is not making everything bigger. It is making
            sure that{" "}
            <span
              className="
                font-semibold
                text-[#0A1D2F]
                dark:text-white
              "
            >
              what creates value can keep working as the environment
              around it becomes more demanding.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}