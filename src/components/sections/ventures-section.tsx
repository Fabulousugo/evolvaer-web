import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Layers3,
  Rocket,
} from "lucide-react";

const ventureProcess = [
  "Discover",
  "Validate",
  "Engineer",
  "Launch",
] as const;

export function VenturesSection() {
  return (
    <section
      className="
        relative
        overflow-hidden

        py-24

        sm:py-28
        lg:py-36
      "
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        {/* Preserve visibility of persistent Three.js scene */}

        <div
          className="
            absolute
            inset-0

            bg-white/[0.59]

            dark:bg-[#0d1117]/[0.61]
          "
        />

        {/* Violet field */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_88%_23%,rgba(124,58,237,0.085),transparent_34%)]

            dark:bg-[radial-gradient(circle_at_88%_23%,rgba(168,85,247,0.12),transparent_35%)]
          "
        />

        {/* Blue counterweight */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_7%_88%,rgba(37,99,235,0.07),transparent_34%)]

            dark:bg-[radial-gradient(circle_at_7%_88%,rgba(59,130,246,0.095),transparent_35%)]
          "
        />

        {/* Teal balance */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_52%_56%,rgba(16,185,129,0.032),transparent_27%)]

            dark:bg-[radial-gradient(circle_at_52%_56%,rgba(34,211,238,0.05),transparent_28%)]
          "
        />

        <div
          className="
            brand-grid
            absolute
            inset-0

            opacity-[0.1]

            dark:opacity-[0.075]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          evolvaer-container
          relative
          z-10
        "
      >
        {/* ===================================================
            HEADING
        =================================================== */}

        <div
          className="
            grid
            gap-10

            lg:grid-cols-[1.05fr_0.95fr]
            lg:items-end
          "
        >
          <div>
            <div
              className="
                mb-5
                flex
                items-center
                gap-4
              "
            >
              <span
                aria-hidden="true"
                className="
                  h-px
                  w-10

                  bg-gradient-to-r
                  from-violet
                  via-blue
                  to-teal
                "
              />

              <span
                className="
                  text-[0.67rem]
                  font-semibold
                  uppercase
                  tracking-[0.32em]
                  text-muted
                "
              >
                Ventures
              </span>
            </div>

            <h2
              className="
                max-w-4xl

                text-[clamp(3.2rem,5vw,5.8rem)]
                font-bold
                leading-[0.92]
                tracking-[-0.055em]
              "
            >
              We don&apos;t just
              <br />
              research the future.
              <br />
              We{" "}

              <span className="brand-gradient-text">
                build companies
              </span>{" "}

              for it.
            </h2>
          </div>

          <div
            className="
              max-w-xl

              lg:justify-self-end
            "
          >
            <p
              className="
                text-base
                leading-8
                text-muted

                sm:text-[1.05rem]
              "
            >
              Some opportunities deserve
              more than a report or
              prototype. When the problem,
              technology and market align,
              we turn them into products
              and ventures.
            </p>

            <Link
              href="/ventures"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-3

                text-sm
                font-semibold
              "
            >
              Explore our ventures

              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center

                  rounded-full
                  border
                  border-violet/25

                  text-violet

                  transition-[transform,background-color,color,border-color]
                  duration-200

                  group-hover:translate-x-0.5
                  group-hover:border-violet
                  group-hover:bg-violet
                  group-hover:text-white
                "
              >
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </span>
            </Link>
          </div>
        </div>

        {/* ===================================================
            FEATURED VENTURE
        =================================================== */}

        <article
          className="
            relative
            mt-16
            overflow-hidden

            rounded-[2.25rem]
            border
            border-white/[0.08]

            bg-[#0a1d2f]/[0.96]
            text-white

            shadow-[0_22px_70px_rgba(10,29,47,0.11)]

            dark:bg-[#091522]/[0.96]

            lg:mt-20
          "
        >
          {/* Static branded atmosphere */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0

              bg-[radial-gradient(circle_at_84%_24%,rgba(168,85,247,0.19),transparent_35%)]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0

              bg-[radial-gradient(circle_at_48%_100%,rgba(59,130,246,0.13),transparent_35%)]
            "
          />

          <div
            aria-hidden="true"
            className="
              brand-grid
              pointer-events-none
              absolute
              inset-0

              opacity-[0.08]
            "
          />

          {/* Decorative venture-world rings */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              right-[8%]
              top-[14%]

              hidden
              h-[22rem]
              w-[22rem]

              rounded-full
              border
              border-violet/15

              lg:block
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              right-[13%]
              top-[23%]

              hidden
              h-[15rem]
              w-[15rem]

              rounded-full
              border
              border-blue/15

              lg:block
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              right-[18.5%]
              top-[33%]

              hidden
              h-20
              w-20

              rounded-full
              border
              border-teal/20

              lg:block
            "
          />

          <div
            className="
              relative
              z-10
              grid
              min-h-[36rem]

              lg:grid-cols-[1.05fr_0.95fr]
            "
          >
            {/* Copy */}

            <div
              className="
                flex
                flex-col

                p-7

                sm:p-10
                lg:p-12
              "
            >
              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    rounded-full
                    border
                    border-teal/25
                    bg-teal/[0.08]

                    px-4
                    py-2

                    text-[0.6rem]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-teal
                  "
                >
                  In development
                </span>

                <span
                  className="
                    text-[0.6rem]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-white/35
                  "
                >
                  Evolvaer Venture 01
                </span>
              </div>

              <div
                className="
                  mt-auto
                  max-w-3xl
                  pt-20
                "
              >
                <p
                  className="
                    text-[0.62rem]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-blue
                  "
                >
                  AI · Communication
                </p>

                <h3
                  className="
                    mt-4

                    text-[clamp(4rem,7vw,7.4rem)]
                    font-bold
                    leading-[0.84]
                    tracking-[-0.055em]
                  "
                >
                  Adaptcues
                </h3>

                <p
                  className="
                    mt-7
                    max-w-2xl

                    text-base
                    leading-8
                    text-white/58

                    sm:text-lg
                  "
                >
                  An intelligent communication
                  platform designed to help
                  people prepare for important
                  conversations, practise how
                  they respond and communicate
                  with greater confidence.
                </p>

                <Link
                  href="/ventures"
                  className="
                    group
                    mt-8
                    inline-flex
                    items-center
                    gap-3

                    text-sm
                    font-semibold
                  "
                >
                  Discover Adaptcues

                  <ArrowUpRight
                    aria-hidden="true"
                    className="
                      h-4
                      w-4
                      text-blue

                      transition-transform
                      duration-200

                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </Link>
              </div>
            </div>

            {/* Persistent Three.js visual space */}

            <div
              className="
                relative
                hidden

                border-l
                border-white/[0.07]

                lg:block
              "
            >
              {/* Very light spatial markers */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  left-1/2
                  top-1/2

                  h-2
                  w-2

                  -translate-x-1/2
                  -translate-y-1/2

                  rounded-full
                  bg-blue
                  shadow-[0_0_20px_rgba(59,130,246,0.35)]
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  left-[39%]
                  top-[39%]

                  h-px
                  w-[22%]

                  rotate-[28deg]

                  bg-gradient-to-r
                  from-transparent
                  via-blue/40
                  to-transparent
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  left-[44%]
                  top-[52%]

                  h-px
                  w-[24%]

                  -rotate-[24deg]

                  bg-gradient-to-r
                  from-transparent
                  via-violet/40
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  inset-x-9
                  bottom-9

                  flex
                  items-center
                  justify-between

                  border-t
                  border-white/[0.08]
                  pt-5
                "
              >
                <span
                  className="
                    text-[0.58rem]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-white/32
                  "
                >
                  Human-centred intelligence
                </span>

                <span
                  className="
                    text-sm
                    font-semibold
                    text-blue
                  "
                >
                  01
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* ===================================================
            VENTURE MODEL
        =================================================== */}

        <div
          className="
            mt-5
            grid
            gap-4

            lg:grid-cols-[0.72fr_1.28fr]
          "
        >
          {/* Venture building */}

          <article
            className="
              relative
              overflow-hidden

              rounded-[2rem]
              border
              border-navy/[0.08]

              bg-white/[0.74]

              p-7

              shadow-[0_10px_32px_rgba(10,29,47,0.035)]

              dark:border-white/[0.08]
              dark:bg-[#111821]/[0.74]
              dark:shadow-[0_12px_36px_rgba(0,0,0,0.14)]

              sm:p-9
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0

                bg-[radial-gradient(circle_at_90%_10%,rgba(124,58,237,0.075),transparent_34%)]

                dark:bg-[radial-gradient(circle_at_90%_10%,rgba(168,85,247,0.10),transparent_35%)]
              "
            />

            <div className="relative z-10">
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <p
                  className="
                    text-[0.62rem]
                    font-semibold
                    uppercase
                    tracking-[0.27em]
                    text-violet
                  "
                >
                  Venture building
                </p>

                <Layers3
                  aria-hidden="true"
                  strokeWidth={1.7}
                  className="h-5 w-5 text-muted"
                />
              </div>

              <p
                className="
                  mt-14

                  text-[clamp(2.2rem,3.4vw,3.7rem)]
                  font-semibold
                  leading-[1.02]
                  tracking-[-0.04em]
                "
              >
                From insight
                <br />
                to{" "}

                <span className="text-violet">
                  company.
                </span>
              </p>

              <p
                className="
                  mt-5
                  max-w-xl

                  text-sm
                  leading-7
                  text-muted
                "
              >
                We combine product thinking,
                research, engineering and
                commercial exploration to
                build technology ventures
                from the ground up.
              </p>
            </div>
          </article>

          {/* Venture process */}

          <article
            className="
              relative
              overflow-hidden

              rounded-[2rem]
              border
              border-navy/[0.08]

              bg-white/[0.7]

              p-7

              shadow-[0_10px_32px_rgba(10,29,47,0.03)]

              dark:border-white/[0.08]
              dark:bg-[#111821]/[0.7]
              dark:shadow-[0_12px_36px_rgba(0,0,0,0.13)]

              sm:p-9
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0

                bg-[radial-gradient(circle_at_94%_16%,rgba(37,99,235,0.06),transparent_33%)]

                dark:bg-[radial-gradient(circle_at_94%_16%,rgba(59,130,246,0.085),transparent_34%)]
              "
            />

            <div className="relative z-10">
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <p
                  className="
                    text-[0.62rem]
                    font-semibold
                    uppercase
                    tracking-[0.27em]
                    text-muted
                  "
                >
                  How ventures move
                </p>

                <Rocket
                  aria-hidden="true"
                  strokeWidth={1.7}
                  className="h-5 w-5 text-blue"
                />
              </div>

              <div className="mt-12">
                {ventureProcess.map(
                  (
                    step,
                    index,
                  ) => (
                    <div
                      key={step}
                      className="
                        group
                        flex
                        items-center
                        gap-5

                        border-t
                        border-navy/[0.08]

                        py-5

                        first:border-t-0

                        dark:border-white/[0.075]
                      "
                    >
                      <span
                        className="
                          w-8

                          text-sm
                          font-semibold
                          text-blue
                        "
                      >
                        {String(
                          index + 1,
                        ).padStart(
                          2,
                          "0",
                        )}
                      </span>

                      <p
                        className="
                          flex-1

                          text-[1.55rem]
                          font-semibold
                          tracking-[-0.03em]
                        "
                      >
                        {step}
                      </p>

                      <ArrowRight
                        aria-hidden="true"
                        className="
                          h-4
                          w-4
                          text-muted/40

                          transition-[transform,color]
                          duration-200

                          group-hover:translate-x-1
                          group-hover:text-blue
                        "
                      />
                    </div>
                  ),
                )}
              </div>
            </div>
          </article>
        </div>

        {/* ===================================================
            CLOSING
        =================================================== */}

        <div
          className="
            mt-14

            border-t
            border-navy/[0.08]

            pt-10

            dark:border-white/[0.08]
          "
        >
          <div
            className="
              grid
              gap-6

              lg:grid-cols-[0.42fr_1.58fr]
            "
          >
            <p
              className="
                text-[0.62rem]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-violet
              "
            >
              What comes next
            </p>

            <p
              className="
                max-w-5xl

                text-[clamp(1.9rem,3vw,3.2rem)]
                font-semibold
                leading-[1.08]
                tracking-[-0.04em]
              "
            >
              Not every experiment becomes
              a venture. The ones that do
              must earn the right to{" "}

              <span className="text-teal">
                exist and scale.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}