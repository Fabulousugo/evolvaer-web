import {
  Boxes,
  Braces,
  GitBranch,
  TestTubeDiagonal,
} from "lucide-react";

const engineeringAreas = [
  {
    number: "01",
    icon: GitBranch,
    label: "Architecture",
    title: "Design the system",
    description:
      "Define the components, data flows, interfaces, dependencies and technical boundaries.",
    accent: "#22D3EE",
  },
  {
    number: "02",
    icon: Braces,
    label: "Prototype",
    title: "Make it tangible",
    description:
      "Turn the strongest assumptions into working prototypes that can be tested against reality.",
    accent: "#2563EB",
  },
  {
    number: "03",
    icon: TestTubeDiagonal,
    label: "Validate",
    title: "Test what matters",
    description:
      "Test performance, usability, reliability and technical assumptions while change is still inexpensive.",
    accent: "#7C3AED",
  },
  {
    number: "04",
    icon: Boxes,
    label: "Integrate",
    title: "Connect the pieces",
    description:
      "Bring software, AI, data and external services together as one coherent system.",
    accent: "#10B981",
  },
] as const;

const systemFlow = [
  {
    code: "INPUT",
    title: "Signals + Data",
    accent: "#2563EB",
  },
  {
    code: "SYSTEM",
    title: "Logic + Intelligence",
    accent: "#22D3EE",
    active: true,
  },
  {
    code: "OUTPUT",
    title: "Useful Experience",
    accent: "#7C3AED",
  },
] as const;

const systemLayers = [
  "Software",
  "AI & data",
  "Integrations",
  "Infrastructure",
] as const;

export function EngineerStage() {
  return (
    <section
      id="engineer"
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
            bg-white/[0.5]
            dark:bg-[#0D1117]/[0.48]
          "
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 94% 15%, rgba(34,211,238,.055), transparent 28%), radial-gradient(circle at 5% 90%, rgba(37,99,235,.045), transparent 27%)",
          }}
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.012]
            dark:opacity-[0.022]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(34,211,238,.24) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(37,99,235,.22) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "84px 84px",
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
                  text-[#0891B2]
                  dark:text-[#67E8F9]
                "
              >
                03
              </span>

              <span className="h-px w-7 bg-[#22D3EE]/40" />

              <p
                className="
                  text-[0.5rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#0891B2]
                  dark:text-[#67E8F9]
                "
              >
                Engineer
              </p>
            </div>

            <h2
              className="
                mt-4
                max-w-[600px]
                text-[clamp(1.95rem,3.2vw,2.75rem)]
                font-semibold
                leading-[1]
                tracking-[-0.045em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Turn evidence into a{" "}
              <span
                className="
                  text-[#0891B2]
                  dark:text-[#67E8F9]
                "
              >
                working system.
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
              Engineering turns validated possibility into something
              tangible — translating what we have learned into
              architecture, prototypes and technical systems that can
              survive contact with the real world.
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
              The aim is not simply to make something work once. We
              engineer for reliability, adaptability and a foundation
              strong enough to build upon.
            </p>
          </div>
        </div>

        {/* =====================================================
            ENGINEERING ACTIVITIES
        ===================================================== */}

        <div
          className="
            relative
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
          {/* desktop system connector */}

          <div
            aria-hidden="true"
            className="
              absolute
              left-[12.5%]
              right-[12.5%]
              top-[2.65rem]
              hidden
              h-px
              bg-gradient-to-r
              from-[#22D3EE]/20
              via-[#2563EB]/25
              via-[#7C3AED]/25
              to-[#10B981]/20
              lg:block
            "
          />

          {engineeringAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
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
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        border
                        bg-white
                        dark:bg-[#0D1117]
                      "
                      style={{
                        borderColor: `${area.accent}30`,
                        color: area.accent,
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
                      ENG / {area.number}
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
                      color: area.accent,
                    }}
                  >
                    {area.label}
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
                    {area.title}
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
                    {area.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            SYSTEM ARCHITECTURE
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
                text-[#0891B2]
                dark:text-[#67E8F9]
              "
            >
              System thinking
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
              Components are useful.
              <br />

              <span
                className="
                  text-[#0A1D2F]/54
                  dark:text-white/50
                "
              >
                Systems create value.
              </span>
            </h3>
          </div>

          <div
            className="
              overflow-hidden
              rounded-[1rem]
              border
              border-[#0A1D2F]/[0.08]
              bg-white/[0.4]
              dark:border-white/[0.08]
              dark:bg-white/[0.025]
            "
          >
            {/* main flow */}

            <div className="grid md:grid-cols-3">
              {systemFlow.map((module, index) => {
                const active =
                  "active" in module && module.active;

                return (
                  <div
                    key={module.code}
                    className={`
                      relative
                      px-5
                      py-4

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
                        active
                          ? `
                            bg-[#22D3EE]/[0.035]
                            dark:bg-[#22D3EE]/[0.045]
                          `
                          : ""
                      }
                    `}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          backgroundColor: module.accent,
                          boxShadow: active
                            ? `0 0 9px ${module.accent}65`
                            : undefined,
                        }}
                      />

                      <span
                        className="
                          font-mono
                          text-[0.4rem]
                          font-semibold
                          tracking-[0.14em]
                          text-[#0A1D2F]/34
                          dark:text-white/32
                        "
                      >
                        {module.code}
                      </span>
                    </div>

                    <p
                      className="
                        mt-2
                        text-[0.7rem]
                        font-semibold
                        text-[#0A1D2F]/70
                        dark:text-white/65
                      "
                    >
                      {module.title}
                    </p>

                    {index < systemFlow.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="
                          absolute
                          -right-1.5
                          top-1/2
                          z-10
                          hidden
                          -translate-y-1/2
                          text-[0.6rem]
                          text-[#22D3EE]
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

            {/* layers */}

            <div
              className="
                grid
                border-t
                border-[#0A1D2F]/[0.07]
                dark:border-white/[0.07]
                sm:grid-cols-4
              "
            >
              {systemLayers.map((layer, index) => (
                <div
                  key={layer}
                  className={`
                    px-4
                    py-3

                    ${
                      index !== 0
                        ? `
                          border-t
                          border-[#0A1D2F]/[0.06]
                          dark:border-white/[0.06]
                          sm:border-l
                          sm:border-t-0
                        `
                        : ""
                    }
                  `}
                >
                  <p
                    className="
                      font-mono
                      text-[0.38rem]
                      text-[#0A1D2F]/28
                      dark:text-white/26
                    "
                  >
                    0{index + 1}
                  </p>

                  <p
                    className="
                      mt-1
                      text-[0.62rem]
                      font-semibold
                      text-[#0A1D2F]/55
                      dark:text-white/51
                    "
                  >
                    {layer}
                  </p>
                </div>
              ))}
            </div>
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
              text-[#0891B2]
              dark:text-[#67E8F9]
            "
          >
            Engineering principle
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
            We do not engineer technology for its own sake.{" "}
            <span
              className="
                font-semibold
                text-[#0A1D2F]
                dark:text-white
              "
            >
              The sophistication of the system should serve the
              usefulness of the outcome.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}