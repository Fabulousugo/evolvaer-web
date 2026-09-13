import {
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
    accent: "#10B981",
    icon: Workflow,
    signals: [
      "System intelligence",
      "Applied technology",
      "Real-world outcomes",
    ],
  },
] as const;

export function ResearchAreas() {
  return (
    <section
      id="research-areas"
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
      {/* Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 94% 12%, rgba(168,85,247,.035), transparent 28%), radial-gradient(circle at 5% 90%, rgba(34,211,238,.03), transparent 28%)",
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
            gap-5
            lg:grid-cols-[0.88fr_1.12fr]
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
                02
              </span>

              <span className="h-px w-7 bg-[#2563EB]/35" />

              <div className="flex items-center gap-2">
                <CircleDot
                  className="
                    h-3
                    w-3
                    text-[#2563EB]
                    dark:text-[#60A5FA]
                  "
                />

                <p
                  className="
                    text-[0.54rem]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#2563EB]
                    dark:text-[#60A5FA]
                  "
                >
                  Research areas
                </p>
              </div>
            </div>

            <h2
              className="
                mt-4
                max-w-[580px]
                text-[clamp(1.9rem,3vw,2.5rem)]
                font-semibold
                leading-[1.03]
                tracking-[-0.043em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Where we choose{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-[#2563EB]
                  via-[#0891B2]
                  to-[#A855F7]
                  bg-clip-text
                  text-transparent
                  dark:from-[#60A5FA]
                  dark:via-[#67E8F9]
                  dark:to-[#C084FC]
                "
              >
                to look.
              </span>
            </h2>
          </div>

          <div className="max-w-[610px] lg:justify-self-end">
            <p
              className="
                text-[0.87rem]
                leading-6
                text-[#0A1D2F]/70
                dark:text-white/67
                sm:text-[0.92rem]
              "
            >
              Our research is organised around areas where
              technological change could unlock new capability,
              solve meaningful problems or reshape how existing
              systems work.
            </p>

            <p
              className="
                mt-2.5
                text-[0.74rem]
                leading-5
                text-[#0A1D2F]/56
                dark:text-white/53
              "
            >
              These are lenses for exploration rather than fixed
              boundaries. The technologies may change; the quality
              of the questions matters more.
            </p>
          </div>
        </div>

        {/* =====================================================
            AREAS
        ===================================================== */}

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
          {researchAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <article
                key={area.number}
                className={`
                  group
                  relative
                  flex
                  min-h-[17rem]
                  flex-col
                  p-5
                  transition-colors
                  duration-300
                  hover:bg-[#F8FAFC]
                  dark:hover:bg-white/[0.025]

                  ${
                    index < researchAreas.length - 1
                      ? `
                        border-b
                        border-[#0A1D2F]/[0.07]
                        dark:border-white/[0.07]
                        md:border-b-0
                        md:border-r
                      `
                      : ""
                  }

                  ${
                    index === 1
                      ? `
                        md:border-r-0
                        xl:border-r
                      `
                      : ""
                  }

                  ${
                    index < 2
                      ? `
                        md:border-b
                        xl:border-b-0
                      `
                      : ""
                  }
                `}
              >
                {/* Top */}
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono text-[0.42rem]"
                    style={{ color: area.accent }}
                  >
                    {area.number}
                  </span>

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                    "
                    style={{
                      borderColor: `${area.accent}28`,
                      backgroundColor: `${area.accent}0B`,
                    }}
                  >
                    <Icon
                      className="h-3.5 w-3.5"
                      style={{ color: area.accent }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-5">
                  <h3
                    className="
                      max-w-[240px]
                      text-[1.08rem]
                      font-semibold
                      leading-[1.16]
                      tracking-[-0.028em]
                      text-[#0A1D2F]
                      dark:text-white
                    "
                  >
                    {area.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[0.74rem]
                      leading-5
                      text-[#0A1D2F]/64
                      dark:text-white/60
                    "
                  >
                    {area.description}
                  </p>
                </div>

                {/* Signals */}
                <div
                  className="
                    mt-auto
                    border-t
                    border-[#0A1D2F]/[0.07]
                    pt-4
                    dark:border-white/[0.07]
                  "
                >
                  <p
                    className="
                      text-[0.4rem]
                      font-semibold
                      uppercase
                      tracking-[0.13em]
                      text-[#0A1D2F]/45
                      dark:text-white/42
                    "
                  >
                    Signals
                  </p>

                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {area.signals.map((signal) => (
                      <span
                        key={signal}
                        className="
                          rounded-full
                          border
                          px-2.5
                          py-1
                          text-[0.43rem]
                          font-semibold
                          uppercase
                          tracking-[0.08em]
                        "
                        style={{
                          borderColor: `${area.accent}22`,
                          backgroundColor: `${area.accent}08`,
                          color: area.accent,
                        }}
                      >
                        {signal}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            BOUNDARY NOTE
        ===================================================== */}

        <div
          className="
            mt-6
            grid
            gap-2
            border-t
            border-[#0A1D2F]/[0.08]
            pt-5
            dark:border-white/[0.08]
            sm:grid-cols-[auto_1fr]
            sm:items-center
            sm:gap-8
          "
        >
          <p
            className="
              text-[0.44rem]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-[#2563EB]
              dark:text-[#60A5FA]
            "
          >
            Not a technology checklist
          </p>

          <p
            className="
              max-w-[760px]
              text-[0.75rem]
              leading-5
              text-[#0A1D2F]/61
              dark:text-white/57
            "
          >
            We care less about adopting fashionable technology
            than understanding what becomes possible when the
            right capability meets the right problem.
          </p>
        </div>
      </div>
    </section>
  );
}