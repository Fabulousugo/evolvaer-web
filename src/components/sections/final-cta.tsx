import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function FinalCta() {
  return (
    <section
      className="
        relative
        min-h-[90vh]
        overflow-hidden

        bg-[#07111d]/[0.97]

        py-24
        text-white

        sm:py-28

        lg:flex
        lg:min-h-screen
        lg:items-center
        lg:py-36
      "
    >
      {/* ==========================================
          ATMOSPHERE
      ========================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        {/* Main blue field */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_78%_38%,rgba(59,130,246,0.16),transparent_34%)]
          "
        />

        {/* Teal lower field */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_8%_92%,rgba(34,211,238,0.09),transparent_34%)]
          "
        />

        {/* Violet balance */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_45%_24%,rgba(168,85,247,0.07),transparent_30%)]
          "
        />

        {/* Fine grid */}

        <div
          className="
            brand-grid
            absolute
            inset-0

            opacity-[0.055]
          "
        />

        {/* Edge vignette */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_center,transparent_18%,rgba(7,17,29,0.42)_100%)]
          "
        />

        {/* Top transition */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-36

            bg-gradient-to-b
            from-[#07111d]/60
            to-transparent
          "
        />
      </div>

      {/* ==========================================
          CONTENT
      ========================================== */}

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

            py-16

            sm:py-20
            lg:py-24
          "
        >
          <div
            className="
              grid
              gap-16

              lg:grid-cols-[1.15fr_0.85fr]
              lg:items-end
            "
          >
            {/* Left */}

            <div>
              <div
                className="
                  mb-7
                  flex
                  items-center
                  gap-4
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    h-px
                    w-12

                    bg-gradient-to-r
                    from-teal
                    via-blue
                    to-violet
                  "
                />

                <span
                  className="
                    text-[0.66rem]
                    font-semibold
                    uppercase
                    tracking-[0.32em]
                    text-white/42
                  "
                >
                  Start a conversation
                </span>
              </div>

              <h2
                className="
                  max-w-5xl

                  text-[clamp(4.2rem,7.5vw,8.5rem)]
                  font-bold
                  leading-[0.84]
                  tracking-[-0.065em]
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

            <div
              className="
                max-w-lg

                lg:justify-self-end
              "
            >
              <p
                className="
                  text-base
                  leading-8
                  text-white/55

                  sm:text-lg
                "
              >
                Have an ambitious problem,
                emerging technology
                opportunity or idea worth
                exploring? We&apos;re
                interested in conversations
                that could lead somewhere
                meaningful.
              </p>

              <Link
                href="/contact"
                className="
                  group

                  mt-9
                  inline-flex
                  min-h-14
                  items-center
                  gap-8

                  rounded-full
                  border
                  border-blue/35

                  bg-blue/[0.1]

                  px-7

                  text-sm
                  font-semibold
                  text-white

                  shadow-[0_10px_32px_rgba(59,130,246,0.08)]

                  transition-[transform,border-color,background-color,box-shadow]
                  duration-200

                  hover:-translate-y-0.5
                  hover:border-blue/55
                  hover:bg-blue/[0.17]
                  hover:shadow-[0_14px_38px_rgba(59,130,246,0.14)]
                "
              >
                Start a conversation

                <span
                  className="
                    flex
                    h-8
                    w-8
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
                      h-4
                      w-4

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

        {/* ==========================================
            BOTTOM METADATA
        ========================================== */}

        <div
          className="
            mt-8

            flex
            flex-col
            gap-4

            text-[0.58rem]
            font-semibold
            uppercase
            tracking-[0.24em]
            text-white/25

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span>
            Evolvaer Technologies
          </span>

          <span>
            Explore · Research · Build
          </span>
        </div>
      </div>
    </section>
  );
}