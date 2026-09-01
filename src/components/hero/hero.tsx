"use client";

import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import {
  useEffect,
  useRef,
} from "react";

export function Hero() {
  const heroRef =
    useRef<HTMLElement>(null);

  useEffect(() => {
    const hero =
      heroRef.current;

    if (!hero) return;

    const handlePointerMove = (
      event: PointerEvent,
    ) => {
      const rect =
        hero.getBoundingClientRect();

      const x =
        (event.clientX -
          rect.left) /
        rect.width;

      const y =
        (event.clientY -
          rect.top) /
        rect.height;

      hero.style.setProperty(
        "--hero-x",
        `${x * 100}%`,
      );

      hero.style.setProperty(
        "--hero-y",
        `${y * 100}%`,
      );
    };

    hero.addEventListener(
      "pointermove",
      handlePointerMove,
    );

    return () => {
      hero.removeEventListener(
        "pointermove",
        handlePointerMove,
      );
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="
        relative
        flex
        min-h-[100svh]
        items-center
        overflow-hidden
      "
      style={
        {
          "--hero-x": "68%",
          "--hero-y": "38%",
        } as React.CSSProperties
      }
    >
      {/* =====================================================
          HERO ATMOSPHERE
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
        "
      >
        {/* Cursor reactive glow */}

        <div
          className="
            absolute inset-0
            opacity-70
            transition-opacity
            duration-700

            dark:opacity-80
          "
          style={{
            background:
              "radial-gradient(circle at var(--hero-x) var(--hero-y), rgba(37,99,235,0.10), transparent 30%)",
          }}
        />

        {/* Teal atmosphere */}

        <div
          className="
            absolute
            bottom-[-20rem]
            left-[8%]

            h-[38rem]
            w-[38rem]

            rounded-full
            bg-teal/[0.055]
            blur-[170px]

            dark:bg-teal/[0.08]
          "
        />

        {/* Violet atmosphere */}

        <div
          className="
            absolute
            right-[4%]
            top-[18%]

            h-[28rem]
            w-[28rem]

            rounded-full
            bg-violet/[0.035]
            blur-[150px]

            dark:bg-violet/[0.075]
          "
        />

        {/* Subtle content vignette */}

        <div
          className="
            absolute inset-0

            bg-[linear-gradient(90deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.78)_36%,rgba(255,255,255,0.18)_68%,transparent_100%)]

            dark:bg-[linear-gradient(90deg,rgba(13,17,23,0.94)_0%,rgba(13,17,23,0.78)_38%,rgba(13,17,23,0.18)_70%,transparent_100%)]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div
        className="
          evolvaer-container
          relative z-10
          w-full
          pb-20
          pt-36

          sm:pt-40
          lg:pb-16
          lg:pt-32
      "
      >
        <div
          className="
            max-w-[62rem]
          "
        >
          {/* Eyebrow */}

          <div
            className="
              mb-8
              flex
              items-center
              gap-4
          "
          >
            <span
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

          {/* Main headline */}

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
              <span
                className="
                  brand-gradient-text
                "
              >
                next.
              </span>
            </span>
          </h1>

          {/* Secondary statement */}

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

              {/* CTAs */}

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

                    shadow-[0_14px_42px_rgba(37,99,235,0.20)]

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:bg-[#1d4ed8]
                    hover:shadow-[0_18px_50px_rgba(37,99,235,0.28)]

                    dark:bg-[#3b82f6]
                    dark:hover:bg-[#4b8df8]
                "
                >
                  Explore our work

                  <ArrowUpRight
                    className="
                      h-4
                      w-4

                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                  "
                  />
                </Link>

                <Link
                  href="/about"
                  className="
                    inline-flex
                    min-h-14
                    items-center

                    rounded-2xl
                    border
                    border-navy/10
                    bg-white/55
                    px-7

                    text-sm
                    font-medium
                    text-navy/70

                    shadow-[0_10px_30px_rgba(10,29,47,0.04)]
                    backdrop-blur-xl

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-blue/20
                    hover:bg-white
                    hover:text-blue

                    dark:border-white/12
                    dark:bg-white/[0.035]
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
            FLOATING SPATIAL LABELS
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
              bg-white/30
              px-4
              py-2

              text-[0.62rem]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-blue/70

              backdrop-blur-xl

              dark:border-blue/25
              dark:bg-white/[0.025]
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
              bg-white/30
              px-4
              py-2

              text-[0.62rem]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-teal/80

              backdrop-blur-xl

              dark:border-teal/25
              dark:bg-white/[0.025]
          "
          >
            Engineer
          </div>

          <div
            className="
              absolute
              right-[5%]
              bottom-[22%]

              rounded-full
              border
              border-violet/15
              bg-white/30
              px-4
              py-2

              text-[0.62rem]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-violet/70

              backdrop-blur-xl

              dark:border-violet/25
              dark:bg-white/[0.025]
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