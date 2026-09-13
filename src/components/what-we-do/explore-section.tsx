import {
  Crosshair,
  Radar,
  ScanSearch,
} from "lucide-react";

const signals = [
  {
    icon: Radar,
    number: "01",
    title: "Technology shifts",
    description:
      "Emerging technologies and capabilities that could unlock new ways of solving problems.",
    accent: "#2563EB",
  },
  {
    icon: Crosshair,
    number: "02",
    title: "Meaningful problems",
    description:
      "Persistent real-world problems where better technology could create practical value.",
    accent: "#22D3EE",
  },
  {
    icon: ScanSearch,
    number: "03",
    title: "Opportunity signals",
    description:
      "Places where technical possibility, genuine need and viable opportunity begin to intersect.",
    accent: "#7C3AED",
  },
] as const;

const convergence = [
  {
    number: "A",
    label: "New capability",
    accent: "#2563EB",
  },
  {
    number: "B",
    label: "Real need",
    accent: "#22D3EE",
  },
  {
    number: "C",
    label: "Viable opportunity",
    accent: "#7C3AED",
  },
] as const;

export function ExploreSection() {
  return (
    <section
      id="explore"
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
              "radial-gradient(circle at 4% 18%, rgba(37,99,235,.055), transparent 27%), radial-gradient(circle at 94% 82%, rgba(34,211,238,.045), transparent 27%)",
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
                01
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
                Explore
              </p>
            </div>

            <h2
              className="
                mt-4
                max-w-[560px]
                text-[clamp(1.95rem,3.2vw,2.75rem)]
                font-semibold
                leading-[1]
                tracking-[-0.045em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              We start with{" "}
              <span
                className="
                  text-[#2563EB]
                  dark:text-[#60A5FA]
                "
              >
                the signal.
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
              Before deciding what to build, we look at what is
              changing across technology, industries and real-world
              needs — searching for signals worth investigating.
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
              The aim is not to chase every new technology. It is to
              find where new capability could become genuinely useful.
            </p>
          </div>
        </div>

        {/* =====================================================
            SIGNALS
        ===================================================== */}

        <div
          className="
            mt-10
            grid
            overflow-hidden
            border-y
            border-[#0A1D2F]/[0.08]
            dark:border-white/[0.08]
            lg:grid-cols-3
          "
        >
          {signals.map((signal, index) => {
            const Icon = signal.icon;

            return (
              <article
                key={signal.title}
                className={`
                  group
                  relative
                  px-1
                  py-6
                  sm:py-7
                  lg:px-6
                  lg:py-7

                  ${
                    index !== 0
                      ? `
                        border-t
                        border-[#0A1D2F]/[0.07]
                        dark:border-white/[0.07]
                        lg:border-l
                        lg:border-t-0
                      `
                      : ""
                  }
                `}
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-0
                    h-px
                    origin-left
                    scale-x-0
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                  style={{
                    background: `linear-gradient(to right, ${signal.accent}, transparent)`,
                  }}
                />

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
                      borderColor: `${signal.accent}25`,
                      color: signal.accent,
                      backgroundColor: `${signal.accent}0A`,
                    }}
                  >
                    <Icon className="h-4 w-4" />
                  </div>

                  <span
                    className="
                      font-mono
                      text-[0.42rem]
                      text-[#0A1D2F]/30
                      dark:text-white/28
                    "
                  >
                    {signal.number}
                  </span>
                </div>

                <h3
                  className="
                    mt-5
                    text-[0.94rem]
                    font-semibold
                    tracking-[-0.025em]
                    text-[#0A1D2F]
                    dark:text-white
                  "
                >
                  {signal.title}
                </h3>

                <p
                  className="
                    mt-2.5
                    max-w-[22rem]
                    text-[0.7rem]
                    leading-5
                    text-[#0A1D2F]/56
                    dark:text-white/52
                  "
                >
                  {signal.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            CONVERGENCE
        ===================================================== */}

        <div
          className="
            mt-8
            grid
            gap-5
            lg:grid-cols-[0.55fr_1.45fr]
            lg:items-center
            lg:gap-12
          "
        >
          <div>
            <p
              className="
                text-[0.45rem]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#0A1D2F]/40
                dark:text-white/38
              "
            >
              The intersection
            </p>

            <p
              className="
                mt-2
                max-w-[300px]
                text-[0.7rem]
                leading-5
                text-[#0A1D2F]/53
                dark:text-white/49
              "
            >
              An opportunity becomes interesting when several
              signals begin pointing in the same direction.
            </p>
          </div>

          <div
            className="
              overflow-hidden
              rounded-[1rem]
              border
              border-[#0A1D2F]/[0.08]
              bg-white/[0.38]
              dark:border-white/[0.08]
              dark:bg-white/[0.025]
            "
          >
            <div
              className="
                grid
                sm:grid-cols-3
              "
            >
              {convergence.map((item, index) => (
                <div
                  key={item.label}
                  className={`
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
                      text-[0.43rem]
                    "
                    style={{
                      borderColor: `${item.accent}35`,
                      backgroundColor: `${item.accent}0A`,
                      color: item.accent,
                    }}
                  >
                    {item.number}
                  </span>

                  <span
                    className="
                      text-[0.68rem]
                      font-semibold
                      text-[#0A1D2F]/68
                      dark:text-white/63
                    "
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="
                flex
                items-center
                gap-3
                border-t
                border-[#0A1D2F]/[0.07]
                px-5
                py-4
                dark:border-white/[0.07]
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-[#10B981]
                  shadow-[0_0_10px_rgba(16,185,129,.35)]
                "
              />

              <p
                className="
                  text-[0.68rem]
                  font-medium
                  text-[#0A1D2F]/63
                  dark:text-white/58
                "
              >
                When these signals converge, exploration becomes a
                research question.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}