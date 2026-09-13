import { Check, CircleDot } from "lucide-react";

const stages = [
  {
    number: "01",
    label: "Explore",
    description: "Understand the opportunity.",
    accent: "#7C3AED",
    complete: true,
  },
  {
    number: "02",
    label: "Validate",
    description: "Test whether the evidence holds.",
    accent: "#22D3EE",
    complete: true,
  },
  {
    number: "03",
    label: "Build",
    description: "Turn evidence into a usable product.",
    accent: "#2563EB",
    active: true,
  },
  {
    number: "04",
    label: "Venture",
    description: "Build around what continues to work.",
    accent: "#10B981",
  },
] as const;

export function VentureStages() {
  return (
    <section
      id="venture-stages"
      className="
        relative
        overflow-hidden
        border-y
        border-[#0A1D2F]/[0.07]
        bg-white/[0.42]
        py-10
        dark:border-white/[0.07]
        dark:bg-white/[0.018]
        sm:py-12
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
              "radial-gradient(circle at 15% 40%, rgba(124,58,237,.025), transparent 30%), radial-gradient(circle at 85% 60%, rgba(37,99,235,.03), transparent 30%)",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div
          className="
            grid
            gap-6
            lg:grid-cols-[0.72fr_1.28fr]
            lg:items-end
            lg:gap-12
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <span
                className="
                  font-mono
                  text-[0.43rem]
                  text-[#2563EB]
                  dark:text-[#60A5FA]
                "
              >
                STATUS
              </span>

              <span className="h-px w-7 bg-[#2563EB]/30" />

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
                Adaptcues today
              </p>
            </div>

            <h2
              className="
                mt-3
                max-w-[520px]
                text-[clamp(1.5rem,2.4vw,2rem)]
                font-semibold
                leading-[1.05]
                tracking-[-0.04em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Currently in the{" "}
              <span className="text-[#2563EB] dark:text-[#60A5FA]">
                build
              </span>{" "}
              stage.
            </h2>
          </div>

          <p
            className="
              max-w-[650px]
              text-[0.76rem]
              leading-6
              text-[#0A1D2F]/61
              dark:text-white/58
              lg:justify-self-end
            "
          >
            Adaptcues has moved beyond early exploration into
            active product and technology development. Research,
            engineering and user learning are now being used to
            strengthen what gets built next.
          </p>
        </div>

        {/* =====================================================
            STAGE TRACK
        ===================================================== */}

        <div
          className="
            relative
            mt-8
            overflow-hidden
            rounded-[1rem]
            border
            border-[#0A1D2F]/[0.08]
            dark:border-white/[0.08]
          "
        >
          {/* desktop connector */}

          <div
            aria-hidden="true"
            className="
              absolute
              left-[12.5%]
              right-[12.5%]
              top-[2.3rem]
              hidden
              h-px
              bg-gradient-to-r
              from-[#7C3AED]/25
              via-[#22D3EE]/30
              via-[#2563EB]/35
              to-[#10B981]/20
              lg:block
            "
          />

          <div className="grid lg:grid-cols-4">
            {stages.map((stage, index) => {
              const active = "active" in stage && stage.active;
              const complete =
                "complete" in stage && stage.complete;

              return (
                <article
                  key={stage.label}
                  className={`
                    relative
                    p-5
                    sm:p-6
                    ${
                      index < stages.length - 1
                        ? `
                          border-b
                          border-[#0A1D2F]/[0.07]
                          dark:border-white/[0.07]
                          lg:border-b-0
                          lg:border-r
                        `
                        : ""
                    }
                    ${
                      active
                        ? `
                          bg-[#2563EB]/[0.035]
                          dark:bg-[#3B82F6]/[0.05]
                        `
                        : `
                          bg-white/[0.4]
                          dark:bg-white/[0.01]
                        `
                    }
                  `}
                >
                  <div className="relative z-10">
                    {/* node */}

                    <div className="flex items-center justify-between">
                      <div
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          border
                          bg-white
                          dark:bg-[#0D1117]
                        "
                        style={{
                          borderColor: `${stage.accent}${
                            active ? "70" : "35"
                          }`,
                        }}
                      >
                        {complete ? (
                          <Check
                            className="h-3.5 w-3.5"
                            style={{
                              color: stage.accent,
                            }}
                          />
                        ) : active ? (
                          <CircleDot
                            className="h-3.5 w-3.5"
                            style={{
                              color: stage.accent,
                            }}
                          />
                        ) : (
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{
                              backgroundColor: stage.accent,
                              opacity: 0.45,
                            }}
                          />
                        )}
                      </div>

                      <span
                        className="font-mono text-[0.4rem]"
                        style={{
                          color: stage.accent,
                        }}
                      >
                        {stage.number}
                      </span>
                    </div>

                    {/* content */}

                    <p
                      className="
                        mt-4
                        text-[0.44rem]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                      "
                      style={{
                        color: stage.accent,
                      }}
                    >
                      {stage.label}
                    </p>

                    <p
                      className="
                        mt-1.5
                        text-[0.68rem]
                        leading-5
                        text-[#0A1D2F]/56
                        dark:text-white/53
                      "
                    >
                      {stage.description}
                    </p>

                    {active && (
                      <div
                        className="
                          mt-4
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-[#2563EB]/15
                          bg-[#2563EB]/[0.045]
                          px-2.5
                          py-1.5
                          dark:bg-[#3B82F6]/[0.055]
                        "
                      >
                        <span className="relative flex h-1.5 w-1.5">
                          <span
                            className="
                              absolute
                              inline-flex
                              h-full
                              w-full
                              animate-ping
                              rounded-full
                              bg-[#2563EB]
                              opacity-25
                              motion-reduce:animate-none
                            "
                          />

                          <span
                            className="
                              relative
                              inline-flex
                              h-1.5
                              w-1.5
                              rounded-full
                              bg-[#2563EB]
                            "
                          />
                        </span>

                        <span
                          className="
                            text-[0.42rem]
                            font-semibold
                            uppercase
                            tracking-[0.14em]
                            text-[#2563EB]
                            dark:text-[#60A5FA]
                          "
                        >
                          Current stage
                        </span>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            PRINCIPLE
        ===================================================== */}

        <div
          className="
            mt-6
            flex
            flex-col
            gap-2
            border-t
            border-[#0A1D2F]/[0.07]
            pt-5
            dark:border-white/[0.07]
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-[0.43rem]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#0A1D2F]/40
              dark:text-white/38
            "
          >
            Progress follows evidence
          </p>

          <p
            className="
              max-w-[650px]
              text-[0.65rem]
              leading-5
              text-[#0A1D2F]/51
              dark:text-white/48
              sm:text-right
            "
          >
            A stage changes when the evidence justifies deeper
            commitment — not simply because time has passed.
          </p>
        </div>
      </div>
    </section>
  );
}