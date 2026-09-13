import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

const PROCESS_STEPS = [
  {
    index: "01",
    label: "Explore",
    color: "#2563EB",
  },
  {
    index: "02",
    label: "Research",
    color: "#7C3AED",
  },
  {
    index: "03",
    label: "Engineer",
    color: "#22D3EE",
  },
  {
    index: "04",
    label: "Build",
    color: "#A855F7",
  },
  {
    index: "05",
    label: "Scale",
    color: "#F97316",
  },
  {
    index: "06",
    label: "Impact",
    color: "#10B981",
  },
] as const;

export function WhatWeDoHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        pt-24
        sm:pt-28
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
            bg-white/[0.56]
            dark:bg-[#0D1117]/[0.54]
          "
        />

        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                circle at 78% 28%,
                rgba(37,99,235,.09),
                transparent 30%
              ),
              radial-gradient(
                circle at 91% 68%,
                rgba(34,211,238,.055),
                transparent 28%
              ),
              radial-gradient(
                circle at 10% 92%,
                rgba(124,58,237,.045),
                transparent 30%
              )
            `,
          }}
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            dark:opacity-[0.03]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(37,99,235,.24) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(37,99,235,.24) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "96px 96px",
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="evolvaer-container relative z-10">
        <div
          className="
            grid
            gap-10
            py-14
            sm:py-16
            lg:grid-cols-[1.05fr_0.95fr]
            lg:items-center
            lg:gap-16
            lg:py-20
          "
        >
          {/* =================================================
              MESSAGE
          ================================================= */}

          <div className="max-w-[720px]">
            <div className="flex items-center gap-4">
              <span
                className="
                  h-px
                  w-8
                  bg-[#2563EB]
                  dark:bg-[#60A5FA]
                "
              />

              <span
                className="
                  text-[0.54rem]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#0A1D2F]/52
                  dark:text-white/48
                "
              >
                What we do
              </span>
            </div>

            <h1
              className="
                mt-6
                max-w-[680px]
                text-[clamp(2.8rem,4.5vw,4.7rem)]
                font-semibold
                leading-[0.95]
                tracking-[-0.052em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              From possibility
              <br />

              to{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-[#2563EB]
                  via-[#22D3EE]
                  to-[#7C3AED]
                  bg-clip-text
                  text-transparent
                  dark:from-[#60A5FA]
                  dark:via-[#67E8F9]
                  dark:to-[#C084FC]
                "
              >
                real-world value.
              </span>
            </h1>

            <p
              className="
                mt-6
                max-w-[600px]
                text-[0.9rem]
                leading-7
                text-[#0A1D2F]/68
                dark:text-white/64
                sm:text-[0.96rem]
              "
            >
              We identify meaningful technological opportunities,
              understand them deeply, engineer practical systems around
              them and turn the strongest ideas into products and
              ventures.
            </p>

            <div
              className="
                mt-8
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
              "
            >
              <Link
                href="#explore"
                className="
                  group
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#2563EB]
                  px-5
                  text-[0.76rem]
                  font-semibold
                  text-white
                  shadow-[0_10px_28px_rgba(37,99,235,.18)]
                  transition-[transform,background-color,box-shadow]
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#1D4ED8]
                  hover:shadow-[0_12px_30px_rgba(37,99,235,.22)]
                "
              >
                Explore our process

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

              <Link
                href="/ventures"
                className="
                  group
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  gap-2
                  px-3
                  text-[0.76rem]
                  font-semibold
                  text-[#0A1D2F]/62
                  transition-colors
                  duration-300
                  hover:text-[#2563EB]
                  dark:text-white/56
                  dark:hover:text-[#60A5FA]
                "
              >
                Explore ventures

                <ArrowUpRight
                  className="
                    h-3.5
                    w-3.5
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>
            </div>
          </div>

          {/* =================================================
              PROCESS SUMMARY
          ================================================= */}

          <div
            className="
              relative
              lg:justify-self-end
              lg:w-full
              lg:max-w-[520px]
            "
          >
            <div
              className="
                overflow-hidden
                rounded-[1.4rem]
                border
                border-[#0A1D2F]/[0.08]
                bg-white/[0.52]
                dark:border-white/[0.08]
                dark:bg-white/[0.025]
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[#0A1D2F]/[0.07]
                  px-5
                  py-4
                  dark:border-white/[0.07]
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
                      dark:text-white/36
                    "
                  >
                    Integrated model
                  </p>

                  <p
                    className="
                      mt-1
                      text-[0.7rem]
                      font-medium
                      text-[#0A1D2F]/62
                      dark:text-white/56
                    "
                  >
                    One connected path from opportunity to impact.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2">
                {PROCESS_STEPS.map((step, index) => (
                  <div
                    key={step.label}
                    className={`
                      relative
                      px-5
                      py-4
                      ${
                        index < PROCESS_STEPS.length - 2
                          ? `
                            border-b
                            border-[#0A1D2F]/[0.06]
                            dark:border-white/[0.06]
                          `
                          : ""
                      }
                      ${
                        index % 2 === 0
                          ? `
                            sm:border-r
                            sm:border-[#0A1D2F]/[0.06]
                            sm:dark:border-white/[0.06]
                          `
                          : ""
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          backgroundColor: step.color,
                        }}
                      />

                      <span
                        className="
                          font-mono
                          text-[0.42rem]
                          text-[#0A1D2F]/32
                          dark:text-white/30
                        "
                      >
                        {step.index}
                      </span>
                    </div>

                    <p
                      className="
                        mt-2
                        text-[0.78rem]
                        font-semibold
                        tracking-[-0.015em]
                        text-[#0A1D2F]/76
                        dark:text-white/72
                      "
                    >
                      {step.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p
              className="
                mt-4
                max-w-[440px]
                text-[0.64rem]
                leading-5
                text-[#0A1D2F]/48
                dark:text-white/44
                lg:ml-auto
              "
            >
              The stages are connected rather than isolated. Learning
              in one part of the system can reshape what happens in
              another.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}