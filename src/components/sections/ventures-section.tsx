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

        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="
            absolute
            inset-0

            bg-white/[0.59]

            dark:bg-[#0d1117]/[0.61]
          "
        />

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_88%_23%,rgba(124,58,237,0.085),transparent_34%)]

            dark:bg-[radial-gradient(circle_at_88%_23%,rgba(168,85,247,0.12),transparent_35%)]
          "
        />

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_7%_88%,rgba(37,99,235,0.07),transparent_34%)]

            dark:bg-[radial-gradient(circle_at_7%_88%,rgba(59,130,246,0.095),transparent_35%)]
          "
        />

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

            opacity-[0.09]

            dark:opacity-[0.065]
          "
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* Heading */}
        <div
          className="
            grid
            gap-8

            lg:grid-cols-[1.05fr_0.95fr]
            lg:items-end
          "
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="
                  h-px
                  w-9

                  bg-gradient-to-r
                  from-violet
                  via-blue
                  to-teal
                "
              />

              <span
                className="
                  text-[0.58rem]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-muted
                "
              >
                Ventures
              </span>
            </div>

            <h2
              className="
                max-w-[44rem]

                text-[clamp(2.4rem,4vw,4.3rem)]
                font-bold
                leading-[0.96]
                tracking-[-0.045em]
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

          <div className="max-w-xl lg:justify-self-end">
            <p
              className="
                text-[0.95rem]
                leading-7
                text-muted

                sm:text-base
              "
            >
              Some opportunities deserve more than a report or
              prototype. When the problem, technology and market align,
              we turn them into products and ventures.
            </p>

            <Link
              href="/ventures"
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-3

                text-[0.82rem]
                font-semibold
              "
            >
              Explore our ventures

              <span
                className="
                  flex
                  h-8
                  w-8
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
                  className="h-3.5 w-3.5"
                />
              </span>
            </Link>
          </div>
        </div>

        {/* Featured venture */}
        <article
          className="
            relative
            mt-12
            overflow-hidden

            rounded-[1.8rem]
            border
            border-white/[0.08]

            bg-[#0a1d2f]/[0.96]
            text-white

            shadow-[0_18px_54px_rgba(10,29,47,0.11)]

            dark:bg-[#091522]/[0.96]

            lg:mt-16
          "
        >
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

              opacity-[0.065]
            "
          />

          {/* Decorative rings */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-[8%]
              top-[14%]

              hidden
              h-[17rem]
              w-[17rem]

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
              h-[11rem]
              w-[11rem]

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
              h-14
              w-14

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
              min-h-[24rem]

              lg:grid-cols-[1.05fr_0.95fr]
            "
          >
            {/* Copy */}
            <div
              className="
                flex
                flex-col

                p-6

                sm:p-8
                lg:p-10
              "
            >
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="
                    rounded-full
                    border
                    border-teal/25
                    bg-teal/[0.08]

                    px-3.5
                    py-1.5

                    text-[0.54rem]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-teal
                  "
                >
                  In development
                </span>

                <span
                  className="
                    text-[0.54rem]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-white/35
                  "
                >
                  Evolvaer Venture 01
                </span>
              </div>

              <div className="mt-auto max-w-[42rem] pt-14">
                <p
                  className="
                    text-[0.56rem]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-blue
                  "
                >
                  AI · Communication
                </p>

                <h3
                  className="
                    mt-3

                    text-[clamp(3rem,5vw,5rem)]
                    font-bold
                    leading-[0.9]
                    tracking-[-0.05em]
                  "
                >
                  Adaptcues
                </h3>

                <p
                  className="
                    mt-5
                    max-w-xl

                    text-[0.95rem]
                    leading-7
                    text-white/58

                    sm:text-base
                  "
                >
                  An intelligent communication platform designed to
                  help people prepare for important conversations,
                  practise how they respond and communicate with
                  greater confidence.
                </p>

                <Link
                  href="/ventures"
                  className="
                    group
                    mt-6
                    inline-flex
                    items-center
                    gap-2.5

                    text-[0.82rem]
                    font-semibold
                  "
                >
                  Discover Adaptcues

                  <ArrowUpRight
                    aria-hidden="true"
                    className="
                      h-3.5
                      w-3.5
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

            {/* Visual space */}
            <div
              className="
                relative
                hidden
                overflow-hidden

                border-l
                border-white/[0.07]

                lg:block
              "
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-cover bg-center opacity-45 mix-blend-luminosity"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0a1d2f]/20 to-[#0a1d2f]/85" />
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
                  inset-x-8
                  bottom-8

                  flex
                  items-center
                  justify-between

                  border-t
                  border-white/[0.08]

                  pt-4
                "
              >
                <span
                  className="
                    text-[0.52rem]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-white/32
                  "
                >
                  Human-centred intelligence
                </span>

                <span className="text-[0.75rem] font-semibold text-blue">
                  01
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* Venture model */}
        <div
          className="
            mt-4
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

              rounded-[1.6rem]
              border
              border-navy/[0.08]

              bg-white/[0.74]

              p-6

              shadow-[0_10px_30px_rgba(10,29,47,0.035)]

              dark:border-white/[0.08]
              dark:bg-[#111821]/[0.74]

              sm:p-8
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
              <div className="flex items-center justify-between">
                <p
                  className="
                    text-[0.56rem]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-violet
                  "
                >
                  Venture building
                </p>

                <Layers3
                  aria-hidden="true"
                  strokeWidth={1.7}
                  className="h-4 w-4 text-muted"
                />
              </div>

              <p
                className="
                  mt-10

                  text-[clamp(1.7rem,2.8vw,2.8rem)]
                  font-semibold
                  leading-[1.04]
                  tracking-[-0.035em]
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
                  mt-4
                  max-w-xl

                  text-[0.82rem]
                  leading-6
                  text-muted
                "
              >
                We combine product thinking, research, engineering and
                commercial exploration to build technology ventures
                from the ground up.
              </p>
            </div>
          </article>

          {/* Venture process */}
          <article
            className="
              relative
              overflow-hidden

              rounded-[1.6rem]
              border
              border-navy/[0.08]

              bg-white/[0.7]

              p-6

              shadow-[0_10px_30px_rgba(10,29,47,0.03)]

              dark:border-white/[0.08]
              dark:bg-[#111821]/[0.7]

              sm:p-8
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
              <div className="flex items-center justify-between">
                <p
                  className="
                    text-[0.56rem]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-muted
                  "
                >
                  How ventures move
                </p>

                <Rocket
                  aria-hidden="true"
                  strokeWidth={1.7}
                  className="h-4 w-4 text-blue"
                />
              </div>

              <div className="mt-9">
                {ventureProcess.map((step, index) => (
                  <div
                    key={step}
                    className="
                      group
                      flex
                      items-center
                      gap-4

                      border-t
                      border-navy/[0.08]

                      py-4

                      first:border-t-0

                      dark:border-white/[0.075]
                    "
                  >
                    <span
                      className="
                        w-7

                        text-[0.62rem]
                        font-semibold
                        text-blue
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p
                      className="
                        flex-1

                        text-[1.25rem]
                        font-semibold
                        tracking-[-0.025em]
                      "
                    >
                      {step}
                    </p>

                    <ArrowRight
                      aria-hidden="true"
                      className="
                        h-3.5
                        w-3.5
                        text-muted/40

                        transition-[transform,color]
                        duration-200

                        group-hover:translate-x-1
                        group-hover:text-blue
                      "
                    />
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>

        {/* Closing */}
        <div
          className="
            mt-12

            border-t
            border-navy/[0.08]

            pt-8

            dark:border-white/[0.08]
          "
        >
          <div
            className="
              grid
              gap-5

              lg:grid-cols-[0.35fr_1.65fr]
            "
          >
            <p
              className="
                text-[0.56rem]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-violet
              "
            >
              What comes next
            </p>

            <p
              className="
                max-w-[54rem]

                text-[clamp(1.5rem,2.4vw,2.5rem)]
                font-semibold
                leading-[1.1]
                tracking-[-0.03em]
              "
            >
              Not every experiment becomes a venture. The ones that do
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