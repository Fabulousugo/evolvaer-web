"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  FlaskConical,
  Radar,
} from "lucide-react";
import {
  useEffect,
  useRef,
  type CSSProperties,
} from "react";

const researchAreas = [
  {
    number: "01",
    category: "Applied Research",
    title:
      "Turning emerging technologies into practical systems.",
    description:
      "We explore technical possibilities through prototypes, experiments and applied investigation before deciding what deserves to be built.",
    icon: FlaskConical,
    accent: "blue",
  },
  {
    number: "02",
    category: "Technology Intelligence",
    title:
      "Understanding change before opportunity becomes obvious.",
    description:
      "We study evolving capabilities, behaviours and markets to identify where technology may create meaningful new value.",
    icon: Radar,
    accent: "teal",
  },
  {
    number: "03",
    category: "Ideas & Perspectives",
    title:
      "Sharing the thinking behind the technologies we pursue.",
    description:
      "Our perspectives document what we are learning, questioning and discovering across emerging technology and innovation.",
    icon: BookOpen,
    accent: "violet",
  },
] as const;

const accents = {
  blue: {
    text: "text-blue",
    border: "group-hover:border-blue/30",
    glow: "bg-blue/20 dark:bg-blue/25",
  },
  teal: {
    text: "text-teal",
    border: "group-hover:border-teal/30",
    glow: "bg-teal/20 dark:bg-teal/25",
  },
  violet: {
    text: "text-violet",
    border: "group-hover:border-violet/30",
    glow: "bg-violet/20 dark:bg-violet/25",
  },
};

export function ResearchSection() {
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
        "--research-x",
        `${x * 100}%`,
      );

      section.style.setProperty(
        "--research-y",
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
          "--research-x": "65%",
          "--research-y": "38%",
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
      {/* =====================================================
          SPATIAL BACKGROUND
      ===================================================== */}

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

            bg-white/[0.58]
            backdrop-blur-[2px]

            dark:bg-[#0d1117]/[0.60]
          "
        />

        <div
          className="
            absolute inset-0
          "
          style={{
            background:
              "radial-gradient(circle at var(--research-x) var(--research-y), rgba(168,85,247,0.075), transparent 28%)",
          }}
        />

        <div
          className="
            absolute
            -left-48
            top-[8%]

            h-[38rem]
            w-[38rem]

            rounded-full
            bg-violet/[0.05]
            blur-[170px]

            dark:bg-violet/[0.09]
          "
        />

        <div
          className="
            absolute
            -bottom-56
            right-[-12rem]

            h-[40rem]
            w-[40rem]

            rounded-full
            bg-blue/[0.055]
            blur-[180px]

            dark:bg-blue/[0.09]
          "
        />

        <div
          className="
            brand-grid
            absolute inset-0

            opacity-[0.13]

            dark:opacity-[0.1]
          "
        />
      </div>

      <div
        className="
          evolvaer-container
          relative z-10
        "
      >
        {/* =====================================================
            HEADING
        ===================================================== */}

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
                Research & Innovation
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
              Questions first.
              <br />
              Technology{" "}
              <span className="brand-gradient-text">
                second.
              </span>
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
              We investigate emerging
              technologies through the
              problems they could solve, the
              value they might create and the
              consequences of putting them
              into the real world.
            </p>

            <Link
              href="/research"
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
              Explore our research

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

        {/* =====================================================
            RESEARCH AREAS
        ===================================================== */}

        <div
          className="
            mt-16

            border-t
            border-navy/[0.08]

            dark:border-white/[0.08]

            lg:mt-20
          "
        >
          {researchAreas.map(
            (item) => {
              const Icon =
                item.icon;

              const accent =
                accents[
                  item.accent
                ];

              return (
                <article
                  key={
                    item.number
                  }
                  className={`
                    group
                    relative
                    grid
                    gap-7

                    overflow-hidden

                    border-b
                    border-navy/[0.08]

                    py-10

                    transition-all
                    duration-500

                    dark:border-white/[0.08]

                    lg:grid-cols-[0.1fr_0.25fr_0.9fr_auto]
                    lg:items-start
                    lg:gap-9
                    lg:py-12

                    ${accent.border}
                  `}
                >
                  <div
                    aria-hidden="true"
                    className={`
                      pointer-events-none

                      absolute
                      right-[10%]
                      top-1/2

                      h-32
                      w-32

                      -translate-y-1/2

                      rounded-full
                      blur-[65px]

                      opacity-0

                      transition-opacity
                      duration-500

                      group-hover:opacity-100

                      ${accent.glow}
                    `}
                  />

                  <span
                    className={`
                      relative z-10

                      text-sm
                      font-semibold
                      tracking-[0.12em]

                      ${accent.text}
                    `}
                  >
                    {item.number}
                  </span>

                  <div className="relative z-10">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center

                        rounded-2xl
                        border
                        border-navy/[0.08]
                        bg-white/[0.4]

                        backdrop-blur-xl

                        transition-transform
                        duration-300

                        group-hover:-translate-y-1

                        dark:border-white/[0.08]
                        dark:bg-white/[0.035]
                      "
                    >
                      <Icon
                        className={`
                          h-4
                          w-4
                          ${accent.text}
                        `}
                      />
                    </div>

                    <p
                      className="
                        mt-4

                        text-[0.58rem]
                        font-semibold
                        uppercase
                        tracking-[0.24em]
                        text-muted
                      "
                    >
                      {item.category}
                    </p>
                  </div>

                  <div
                    className="
                      relative z-10
                      max-w-3xl
                    "
                  >
                    <h3
                      className="
                        text-[clamp(2rem,3vw,3.25rem)]
                        font-semibold
                        leading-[1.02]
                        tracking-[-0.04em]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-2xl

                        text-sm
                        leading-7
                        text-muted
                      "
                    >
                      {item.description}
                    </p>
                  </div>

                  <span
                    className={`
                      relative z-10

                      flex
                      h-10
                      w-10
                      items-center
                      justify-center

                      rounded-full
                      border
                      border-navy/[0.08]

                      text-muted

                      transition-all
                      duration-300

                      dark:border-white/[0.08]

                      ${accent.text}
                    `}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </article>
              );
            },
          )}
        </div>

        {/* =====================================================
            MANIFESTO
        ===================================================== */}

        <div
          className="
            mt-16
            grid
            gap-5

            lg:grid-cols-[1.25fr_0.75fr]
          "
        >
          <article
            className="
              relative
              overflow-hidden

              rounded-[2rem]
              border
              border-navy/[0.08]
              bg-white/[0.34]

              p-7

              backdrop-blur-2xl

              dark:border-white/[0.08]
              dark:bg-white/[0.02]

              sm:p-9
              lg:p-11
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                -right-20
                -top-20

                h-64
                w-64

                rounded-full
                bg-violet/[0.08]
                blur-[90px]

                dark:bg-violet/[0.12]
              "
            />

            <span
              className="
                relative z-10

                text-[0.62rem]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-violet
              "
            >
              Research principle
            </span>

            <p
              className="
                relative z-10

                mt-9
                max-w-5xl

                text-[clamp(2.3rem,3.8vw,4.4rem)]
                font-semibold
                leading-[1.02]
                tracking-[-0.045em]
              "
            >
              We are less interested in what
              technology{" "}
              <span className="text-blue">
                can
              </span>{" "}
              do than in what it{" "}
              <span className="text-teal">
                should enable.
              </span>
            </p>
          </article>

          <article
            className="
              relative
              flex
              min-h-[22rem]
              flex-col
              justify-between

              overflow-hidden

              rounded-[2rem]
              bg-[#0a1d2f]/[0.88]

              p-7
              text-white

              backdrop-blur-2xl

              dark:bg-[#101523]/[0.84]

              sm:p-9
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                -bottom-28
                -right-24

                h-72
                w-72

                rounded-full
                bg-blue/10
                blur-[100px]
              "
            />

            <span
              className="
                relative z-10

                text-[0.6rem]
                font-semibold
                uppercase
                tracking-[0.27em]
                text-white/35
              "
            >
              Research loop
            </span>

            <div className="relative z-10">
              <p
                className="
                  text-[2.4rem]
                  font-semibold
                  leading-[1.05]
                  tracking-[-0.035em]
                "
              >
                Question.
                <br />
                Investigate.
                <br />
                Test.
                <br />
                Apply.
              </p>

              <div
                className="
                  mt-8
                  h-px
                  w-16

                  bg-gradient-to-r
                  from-violet
                  via-blue
                  to-teal
                "
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}