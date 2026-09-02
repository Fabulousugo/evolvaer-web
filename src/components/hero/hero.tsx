import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

import Link from "next/link";

export function Hero() {
  return (
    <section
      className="
        relative
        flex
        min-h-[100svh]
        items-center
        overflow-hidden
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
        {/* Main blue presence */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_72%_34%,rgba(37,99,235,0.10),transparent_31%)]

            dark:bg-[radial-gradient(circle_at_72%_34%,rgba(59,130,246,0.13),transparent_32%)]
          "
        />

        {/* Teal lower field */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_26%_92%,rgba(16,185,129,0.07),transparent_34%)]

            dark:bg-[radial-gradient(circle_at_26%_92%,rgba(34,211,238,0.085),transparent_35%)]
          "
        />

        {/* Violet counterweight */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_88%_46%,rgba(124,58,237,0.045),transparent_27%)]

            dark:bg-[radial-gradient(circle_at_88%_46%,rgba(168,85,247,0.075),transparent_28%)]
          "
        />

        {/* Protect content from scene artwork */}

        <div
          className="
            absolute
            inset-0

            bg-[linear-gradient(90deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.82)_34%,rgba(255,255,255,0.24)_67%,transparent_100%)]

            dark:bg-[linear-gradient(90deg,rgba(13,17,23,0.96)_0%,rgba(13,17,23,0.82)_36%,rgba(13,17,23,0.22)_70%,transparent_100%)]
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
          w-full
          pb-20
          pt-36

          sm:pt-40

          lg:pb-16
          lg:pt-32
        "
      >
        <div className="max-w-[62rem]">
          {/* =================================================
              EYEBROW
          ================================================= */}

          <div
            className="
              mb-8
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
                from-blue
                via-teal
                to-transparent
              "
            />

            <p
              className="
                text-[0.67rem]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-muted

                sm:text-xs
              "
            >
              Technology

              <span className="mx-3 text-blue">
                ·
              </span>

              Research

              <span className="mx-3 text-teal">
                ·
              </span>

              Venture Building
            </p>
          </div>

          {/* =================================================
              HEADLINE
          ================================================= */}

          <h1
            className="
              max-w-[60rem]

              text-[clamp(4.25rem,8.8vw,9.2rem)]
              font-bold
              leading-[0.84]
              tracking-[-0.068em]
            "
          >
            <span className="block">
              Exploring
            </span>

            <span className="block">
              what&apos;s{" "}
              <span className="brand-gradient-text">
                next.
              </span>
            </span>
          </h1>

          {/* =================================================
              SECONDARY STATEMENT
          ================================================= */}

          <div
            className="
              mt-10
              grid
              max-w-[57rem]
              gap-8

              lg:grid-cols-[0.9fr_1.1fr]
              lg:items-end
            "
          >
            <p
              className="
                text-[clamp(2.3rem,4vw,4.4rem)]
                font-semibold
                leading-[0.95]
                tracking-[-0.05em]
              "
            >
              Building what
              <br />

              <span className="text-teal">
                matters.
              </span>
            </p>

            <div
              className="
                max-w-xl
                lg:pb-1
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
                We research, engineer and
                commercialise emerging
                technologies into products
                and companies that solve
                meaningful real-world
                problems.
              </p>

              {/* =================================================
                  CTAS
              ================================================= */}

              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  items-center
                  gap-4
                "
              >
                <Link
                  href="/what-we-do"
                  prefetch={false}
                  className="
                    group

                    inline-flex
                    min-h-14
                    items-center
                    gap-8

                    rounded-2xl
                    bg-blue
                    px-7

                    text-sm
                    font-semibold
                    text-white

                    shadow-[0_10px_30px_rgba(37,99,235,0.16)]

                    transition-[transform,background-color,box-shadow]
                    duration-200

                    hover:-translate-y-0.5
                    hover:bg-[#1d4ed8]
                    hover:shadow-[0_12px_34px_rgba(37,99,235,0.22)]

                    dark:bg-[#3b82f6]
                    dark:hover:bg-[#4b8df8]
                  "
                >
                  Explore our work

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
                </Link>

                <Link
                  href="/about"
                  prefetch={false}
                  className="
                    inline-flex
                    min-h-14
                    items-center

                    rounded-2xl
                    border
                    border-navy/10
                    bg-white/[0.78]
                    px-7

                    text-sm
                    font-medium
                    text-navy/70

                    shadow-[0_6px_20px_rgba(10,29,47,0.035)]

                    transition-[transform,color,background-color,border-color]
                    duration-200

                    hover:-translate-y-0.5
                    hover:border-blue/20
                    hover:bg-white
                    hover:text-blue

                    dark:border-white/12
                    dark:bg-white/[0.045]
                    dark:text-white/70
                    dark:shadow-none

                    dark:hover:border-blue/30
                    dark:hover:bg-blue/[0.08]
                    dark:hover:text-blue
                  "
                >
                  Learn about us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            SPATIAL LABELS
        ===================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            hidden

            lg:block
          "
        >
          <div
            className="
              absolute
              right-[8%]
              top-[28%]

              rounded-full
              border
              border-blue/15
              bg-white/[0.5]
              px-4
              py-2

              text-[0.62rem]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-blue/70

              dark:border-blue/25
              dark:bg-[#0d1117]/[0.56]
              dark:text-blue/80
            "
          >
            Research
          </div>

          <div
            className="
              absolute
              right-[19%]
              top-[54%]

              rounded-full
              border
              border-teal/15
              bg-white/[0.5]
              px-4
              py-2

              text-[0.62rem]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-teal/80

              dark:border-teal/25
              dark:bg-[#0d1117]/[0.56]
            "
          >
            Engineer
          </div>

          <div
            className="
              absolute
              bottom-[22%]
              right-[5%]

              rounded-full
              border
              border-violet/15
              bg-white/[0.5]
              px-4
              py-2

              text-[0.62rem]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-violet/70

              dark:border-violet/25
              dark:bg-[#0d1117]/[0.56]
              dark:text-violet/80
            "
          >
            Build
          </div>
        </div>

        {/* =====================================================
            SCROLL INDICATOR
        ===================================================== */}

        <div
          className="
            absolute
            bottom-8
            right-0

            hidden
            items-end
            gap-5

            xl:flex
          "
        >
          <span
            className="
              pb-1

              text-[0.67rem]
              font-medium
              uppercase
              tracking-[0.34em]
              text-muted
            "
          >
            Scroll to explore
          </span>

          <div
            className="
              flex
              flex-col
              items-center
            "
          >
            <span
              aria-hidden="true"
              className="
                h-11
                w-px

                bg-gradient-to-b
                from-blue
                via-teal
                to-transparent
              "
            />

            <ArrowDown
              aria-hidden="true"
              className="
                mt-[-2px]
                h-5
                w-5
                text-blue
              "
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM TRANSITION
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          bottom-0
          left-1/2

          h-px
          w-[82%]

          -translate-x-1/2

          bg-gradient-to-r
          from-transparent
          via-blue/15
          to-transparent

          dark:via-blue/25
        "
      />
    </section>
  );
}