import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function FinalCta() {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-[#07111d]/[0.97]
        py-20
        text-white

        sm:py-24
        lg:py-28
      "
    >
      {/* Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_78%_38%,rgba(59,130,246,0.16),transparent_34%)]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_8%_92%,rgba(34,211,238,0.09),transparent_34%)]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_45%_24%,rgba(168,85,247,0.07),transparent_30%)]
          "
        />

        <div
          className="
            brand-grid
            absolute
            inset-0
            opacity-[0.05]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_18%,rgba(7,17,29,0.42)_100%)]
          "
        />

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-24

            bg-gradient-to-b
            from-[#07111d]/60
            to-transparent
          "
        />
      </div>

      {/* Content */}
      <div
        className="
          evolvaer-container
          relative
          z-10
          w-full
        "
      >
        <div
          className="
            border-y
            border-white/[0.09]

            py-12

            sm:py-14
            lg:py-16
          "
        >
          <div
            className="
              grid
              gap-10

              lg:grid-cols-[1.15fr_0.85fr]
              lg:items-end
            "
          >
            {/* Left */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="
                    h-px
                    w-9

                    bg-gradient-to-r
                    from-teal
                    via-blue
                    to-violet
                  "
                />

                <span
                  className="
                    text-[0.58rem]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-white/42
                  "
                >
                  Start a conversation
                </span>
              </div>

              <h2
                className="
                  max-w-[48rem]

                  text-[clamp(3rem,5vw,5.4rem)]
                  font-bold
                  leading-[0.9]
                  tracking-[-0.05em]
                "
              >
                Let&apos;s build
                <br />
                what{" "}

                <span className="brand-gradient-text">
                  matters.
                </span>
              </h2>
            </div>

            {/* Right */}
            <div className="max-w-lg lg:justify-self-end">
              <p
                className="
                  text-[0.95rem]
                  leading-7
                  text-white/55

                  sm:text-base
                "
              >
                Have an ambitious problem, emerging technology
                opportunity or idea worth exploring? We&apos;re
                interested in conversations that could lead somewhere
                meaningful.
              </p>

              <Link
                href="/contact"
                className="
                  group
                  mt-6
                  inline-flex
                  min-h-12
                  items-center
                  gap-5

                  rounded-full
                  border
                  border-blue/35

                  bg-blue/[0.1]

                  px-6

                  text-[0.82rem]
                  font-semibold
                  text-white

                  shadow-[0_8px_26px_rgba(59,130,246,0.08)]

                  transition-[transform,border-color,background-color,box-shadow]
                  duration-200

                  hover:-translate-y-0.5
                  hover:border-blue/55
                  hover:bg-blue/[0.17]
                  hover:shadow-[0_12px_32px_rgba(59,130,246,0.14)]
                "
              >
                Start a conversation

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center

                    rounded-full
                    bg-white/[0.07]

                    transition-[transform,background-color]
                    duration-200

                    group-hover:translate-x-0.5
                    group-hover:bg-blue
                  "
                >
                  <ArrowUpRight
                    aria-hidden="true"
                    className="
                      h-3.5
                      w-3.5

                      transition-transform
                      duration-200

                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom metadata */}
        <div
          className="
            mt-6

            flex
            flex-col
            gap-3

            text-[0.54rem]
            font-semibold
            uppercase
            tracking-[0.22em]
            text-white/25

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span>Evolvaer Technologies</span>

          <span>Explore · Research · Build</span>
        </div>
      </div>
    </section>
  );
}