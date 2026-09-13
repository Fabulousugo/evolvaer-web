import Link from "next/link";
import {
  ArrowDown,
  CircleDot,
} from "lucide-react";

const ventureLogic = [
  {
    number: "01",
    label: "Possible",
    description: "Can it be built?",
    accent: "#2563EB",
  },
  {
    number: "02",
    label: "Useful",
    description: "Does it solve something that matters?",
    accent: "#22D3EE",
  },
  {
    number: "03",
    label: "Viable",
    description: "Can it become something sustainable?",
    accent: "#10B981",
  },
] as const;

export function VenturesHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-b
        border-[#0A1D2F]/[0.07]
        bg-white
        pt-24
        dark:border-white/[0.07]
        dark:bg-[#0D1117]
        sm:pt-28
        lg:pt-28
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
              "radial-gradient(circle at 76% 38%, rgba(37,99,235,.065), transparent 28%), radial-gradient(circle at 92% 16%, rgba(34,211,238,.04), transparent 27%), radial-gradient(circle at 44% 105%, rgba(16,185,129,.03), transparent 30%)",
          }}
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.014]
            dark:opacity-[0.025]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,.18) 1px, transparent 1px)
            `,
            backgroundSize: "96px 96px",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        <div
          className="
            grid
            min-h-[calc(82svh-7rem)]
            gap-12
            py-12
            sm:py-14
            lg:grid-cols-[minmax(0,0.95fr)_minmax(400px,1.05fr)]
            lg:items-center
            lg:gap-16
            lg:py-14
          "
        >
          {/* =================================================
              LEFT
          ================================================= */}

          <div className="max-w-[690px]">
            <div className="flex items-center gap-3">
              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#2563EB]/20
                  bg-[#2563EB]/[0.045]
                  text-[#2563EB]
                  dark:border-[#60A5FA]/20
                  dark:bg-[#60A5FA]/[0.055]
                  dark:text-[#60A5FA]
                "
              >
                <CircleDot className="h-3 w-3" />
              </span>

              <span
                className="
                  text-[0.54rem]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#0A1D2F]/55
                  dark:text-white/52
                "
              >
                Evolvaer Ventures
              </span>
            </div>

            <h1
              className="
                mt-6
                max-w-[620px]
                text-[clamp(2.8rem,4.6vw,4.65rem)]
                font-semibold
                leading-[0.94]
                tracking-[-0.052em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Ideas worth{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-[#2563EB]
                  via-[#0891B2]
                  to-[#10B981]
                  bg-clip-text
                  text-transparent
                  dark:from-[#60A5FA]
                  dark:via-[#67E8F9]
                  dark:to-[#34D399]
                "
              >
                building.
              </span>
            </h1>

            <p
              className="
                mt-6
                max-w-[570px]
                text-[0.9rem]
                leading-7
                text-[#0A1D2F]/70
                dark:text-white/67
                sm:text-[0.96rem]
              "
            >
              We turn selected technological opportunities into
              products and ventures — combining research,
              engineering and product thinking to create
              meaningful real-world value.
            </p>

            <div className="mt-7">
              <Link
                href="#portfolio"
                className="
                  group
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  gap-2.5
                  rounded-full
                  bg-[#2563EB]
                  px-5
                  text-[0.78rem]
                  font-semibold
                  text-white
                  shadow-[0_12px_32px_rgba(37,99,235,.17)]
                  transition-[transform,background-color,box-shadow]
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#1D4ED8]
                  hover:shadow-[0_16px_38px_rgba(37,99,235,.22)]
                "
              >
                Explore our ventures

                <ArrowDown
                  className="
                    h-3.5
                    w-3.5
                    transition-transform
                    duration-300
                    group-hover:translate-y-0.5
                  "
                />
              </Link>
            </div>

            {/* Selection principle */}

            <div
              className="
                mt-8
                flex
                max-w-[560px]
                items-start
                gap-3
                border-t
                border-[#0A1D2F]/[0.08]
                pt-5
                dark:border-white/[0.08]
              "
            >
              <span
                className="
                  mt-[0.45rem]
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-[#22D3EE]
                  shadow-[0_0_7px_rgba(34,211,238,.38)]
                "
              />

              <p
                className="
                  text-[0.7rem]
                  leading-5
                  text-[#0A1D2F]/58
                  dark:text-white/55
                "
              >
                We do not build every idea we encounter.
                Ventures emerge when technological possibility,
                meaningful need and credible opportunity
                converge.
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT — VENTURE SELECTION
          ================================================= */}

          <div
            aria-hidden="true"
            className="
              relative
              hidden
              min-h-[440px]
              lg:block
            "
          >
            {/* field */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[350px]
                w-[350px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-[#2563EB]/[0.07]
                dark:border-[#60A5FA]/[0.08]
              "
            />

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[260px]
                w-[260px]
                -translate-x-1/2
                -translate-y-1/2
                rotate-45
                border
                border-[#22D3EE]/[0.08]
              "
            />

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-px
                w-[70%]
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-[#22D3EE]/25
                to-transparent
              "
            />

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[72%]
                w-px
                -translate-x-1/2
                -translate-y-1/2
                bg-gradient-to-b
                from-transparent
                via-[#2563EB]/20
                to-transparent
              "
            />

            {/* Core */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                z-20
                flex
                h-[8.5rem]
                w-[8.5rem]
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-[#22D3EE]/20
                bg-white/[0.88]
                shadow-[0_0_36px_rgba(34,211,238,.07)]
                backdrop-blur-sm
                dark:bg-[#0D1117]/[0.9]
              "
            >
              <span
                className="
                  absolute
                  inset-[8px]
                  rounded-full
                  border
                  border-[#22D3EE]/10
                "
              />

              <div className="text-center">
                <span
                  className="
                    mx-auto
                    block
                    h-2
                    w-2
                    rounded-full
                    bg-[#22D3EE]
                    shadow-[0_0_9px_rgba(34,211,238,.55)]
                  "
                />

                <p
                  className="
                    mt-3
                    text-[0.7rem]
                    font-semibold
                    text-[#0A1D2F]
                    dark:text-white
                  "
                >
                  Venture signal
                </p>

                <p
                  className="
                    mt-1
                    font-mono
                    text-[0.38rem]
                    uppercase
                    tracking-[0.11em]
                    text-[#0A1D2F]/43
                    dark:text-white/40
                  "
                >
                  Worth exploring
                </p>
              </div>
            </div>

            {/* Logic nodes */}

            {ventureLogic.map((item, index) => {
              const positions = [
                "left-1/2 top-[3%] -translate-x-1/2",
                "left-[1%] top-1/2 -translate-y-1/2",
                "right-[1%] top-1/2 -translate-y-1/2",
              ];

              return (
                <div
                  key={item.label}
                  className={`
                    absolute
                    z-10
                    ${positions[index]}
                  `}
                >
                  <div
                    className="
                      min-w-[138px]
                      rounded-[1rem]
                      border
                      bg-white/[0.72]
                      px-4
                      py-3.5
                      backdrop-blur-sm
                      dark:bg-[#0D1117]/[0.76]
                    "
                    style={{
                      borderColor: `${item.accent}28`,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          backgroundColor: item.accent,
                          boxShadow: `0 0 6px ${item.accent}45`,
                        }}
                      />

                      <span
                        className="font-mono text-[0.38rem]"
                        style={{
                          color: item.accent,
                        }}
                      >
                        {item.number}
                      </span>
                    </div>

                    <p
                      className="
                        mt-2
                        text-[0.72rem]
                        font-semibold
                        text-[#0A1D2F]
                        dark:text-white
                      "
                    >
                      {item.label}
                    </p>

                    <p
                      className="
                        mt-1
                        max-w-[125px]
                        text-[0.58rem]
                        leading-4
                        text-[#0A1D2F]/53
                        dark:text-white/50
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Field points */}

            <span className="absolute left-[18%] top-[18%] h-1 w-1 rounded-full bg-[#2563EB]/35" />
            <span className="absolute right-[18%] top-[23%] h-1.5 w-1.5 rounded-full bg-[#22D3EE]/30" />
            <span className="absolute bottom-[14%] left-[30%] h-1 w-1 rounded-full bg-[#10B981]/35" />

            <span
              className="
                absolute
                bottom-[4%]
                left-1/2
                -translate-x-1/2
                font-mono
                text-[0.4rem]
                uppercase
                tracking-[0.14em]
                text-[#0A1D2F]/30
                dark:text-white/28
              "
            >
              Possible · Useful · Viable
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}