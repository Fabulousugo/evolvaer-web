"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Layers3,
  Rocket,
  Sparkles,
} from "lucide-react";
import {
  useEffect,
  useRef,
  type CSSProperties,
} from "react";

const ventureProcess = [
  "Discover",
  "Validate",
  "Engineer",
  "Launch",
];

export function VenturesSection() {
  const sectionRef =
    useRef<HTMLElement>(null);

  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) return;

    const handlePointerMove = (
      event: PointerEvent,
    ) => {
      const rect =
        section.getBoundingClientRect();

      const x =
        (event.clientX -
          rect.left) /
        rect.width;

      const y =
        (event.clientY -
          rect.top) /
        rect.height;

      section.style.setProperty(
        "--ventures-x",
        `${x * 100}%`,
      );

      section.style.setProperty(
        "--ventures-y",
        `${y * 100}%`,
      );
    };

    section.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      },
    );

    return () => {
      section.removeEventListener(
        "pointermove",
        handlePointerMove,
      );
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={
        {
          "--ventures-x": "68%",
          "--ventures-y": "44%",
        } as CSSProperties
      }
      className="
        relative
        overflow-hidden
        py-24
        sm:py-28
        lg:py-36
      "
    >
      {/* Background */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
        "
      >
        <div
          className="
            absolute inset-0
            bg-white/[0.56]
            backdrop-blur-[2px]
            dark:bg-[#0d1117]/[0.58]
          "
        />

        <div
          className="
            absolute inset-0
          "
          style={{
            background:
              "radial-gradient(circle at var(--ventures-x) var(--ventures-y), rgba(124,58,237,0.08), transparent 30%)",
          }}
        />

        <div
          className="
            absolute
            -right-56
            top-[5%]
            h-[40rem]
            w-[40rem]
            rounded-full
            bg-violet/[0.06]
            blur-[180px]
            dark:bg-violet/[0.1]
          "
        />

        <div
          className="
            absolute
            -bottom-56
            left-[-14rem]
            h-[38rem]
            w-[38rem]
            rounded-full
            bg-blue/[0.06]
            blur-[170px]
            dark:bg-blue/[0.09]
          "
        />
      </div>

      <div
        className="
          evolvaer-container
          relative z-10
        "
      >
        {/* Heading */}

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
                  transition-all
                  duration-300
                  group-hover:bg-violet
                  group-hover:text-white
                "
              >
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>

        {/* Featured venture */}

        <article
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[2.25rem]
            border
            border-navy/[0.08]
            bg-[#0a1d2f]/[0.82]
            text-white
            backdrop-blur-2xl
            shadow-[0_30px_100px_rgba(10,29,47,0.12)]
            dark:border-white/[0.08]
            dark:bg-[#091522]/[0.78]
            lg:mt-20
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-0
            "
          >
            <div
              className="
                absolute
                right-[-10rem]
                top-[-12rem]
                h-[34rem]
                w-[34rem]
                rounded-full
                bg-violet/10
                blur-[120px]
              "
            />

            <div
              className="
                absolute
                bottom-[-10rem]
                left-[30%]
                h-[28rem]
                w-[28rem]
                rounded-full
                bg-blue/[0.08]
                blur-[120px]
              "
            />
          </div>

          <div
            className="
              relative z-10
              grid
              min-h-[36rem]
              lg:grid-cols-[1.05fr_0.95fr]
            "
          >
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
                    className="
                      h-4
                      w-4
                      text-blue
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </Link>
              </div>
            </div>

            {/* Space reserved for actual Three.js world */}

            <div
              className="
                relative
                hidden
                border-l
                border-white/[0.07]
                lg:block
              "
            >
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

        {/* Venture model */}

        <div
          className="
            mt-5
            grid
            gap-4
            lg:grid-cols-[0.72fr_1.28fr]
          "
        >
          <article
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-navy/[0.08]
              bg-white/[0.38]
              p-7
              backdrop-blur-2xl
              dark:border-white/[0.08]
              dark:bg-white/[0.022]
              sm:p-9
            "
          >
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

              <Layers3 className="h-5 w-5 text-muted" />
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
              commercial exploration to build
              technology ventures from the
              ground up.
            </p>
          </article>

          <article
            className="
              rounded-[2rem]
              border
              border-navy/[0.08]
              bg-white/[0.3]
              p-7
              backdrop-blur-2xl
              dark:border-white/[0.08]
              dark:bg-white/[0.018]
              sm:p-9
            "
          >
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

              <Rocket className="h-5 w-5 text-blue" />
            </div>

            <div className="mt-12">
              {ventureProcess.map(
                (step, index) => (
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
                      0{index + 1}
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
                      className="
                        h-4
                        w-4
                        text-muted/40
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-blue
                      "
                    />
                  </div>
                ),
              )}
            </div>
          </article>
        </div>

        {/* Closing */}

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
              Not every experiment becomes a
              venture. The ones that do must
              earn the right to{" "}
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