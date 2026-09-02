import Link from "next/link";

import {
  ArrowUpRight,
  BookOpen,
  FlaskConical,
  Radar,
} from "lucide-react";

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
    border:
      "group-hover:border-blue/30 dark:group-hover:border-blue/35",
    icon:
      "bg-blue/[0.07] text-blue dark:bg-blue/[0.09]",
    atmosphere:
      "bg-[radial-gradient(circle_at_86%_50%,rgba(37,99,235,0.075),transparent_36%)] dark:bg-[radial-gradient(circle_at_86%_50%,rgba(59,130,246,0.105),transparent_37%)]",
  },

  teal: {
    text: "text-teal",
    border:
      "group-hover:border-teal/30 dark:group-hover:border-teal/35",
    icon:
      "bg-teal/[0.07] text-teal dark:bg-teal/[0.09]",
    atmosphere:
      "bg-[radial-gradient(circle_at_86%_50%,rgba(16,185,129,0.07),transparent_36%)] dark:bg-[radial-gradient(circle_at_86%_50%,rgba(34,211,238,0.095),transparent_37%)]",
  },

  violet: {
    text: "text-violet",
    border:
      "group-hover:border-violet/30 dark:group-hover:border-violet/35",
    icon:
      "bg-violet/[0.065] text-violet dark:bg-violet/[0.085]",
    atmosphere:
      "bg-[radial-gradient(circle_at_86%_50%,rgba(124,58,237,0.07),transparent_36%)] dark:bg-[radial-gradient(circle_at_86%_50%,rgba(168,85,247,0.10),transparent_37%)]",
  },
} as const;

export function ResearchSection() {
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
        {/* Persistent 3D remains visible */}

        <div
          className="
            absolute
            inset-0

            bg-white/[0.6]

            dark:bg-[#0d1117]/[0.62]
          "
        />

        {/* Violet field */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_15%_23%,rgba(124,58,237,0.07),transparent_33%)]

            dark:bg-[radial-gradient(circle_at_15%_23%,rgba(168,85,247,0.105),transparent_34%)]
          "
        />

        {/* Blue field */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_91%_86%,rgba(37,99,235,0.075),transparent_35%)]

            dark:bg-[radial-gradient(circle_at_91%_86%,rgba(59,130,246,0.105),transparent_36%)]
          "
        />

        {/* Teal balance */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_62%_48%,rgba(16,185,129,0.03),transparent_27%)]

            dark:bg-[radial-gradient(circle_at_62%_48%,rgba(34,211,238,0.048),transparent_28%)]
          "
        />

        <div
          className="
            brand-grid
            absolute
            inset-0

            opacity-[0.12]

            dark:opacity-[0.085]
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
              problems they could solve,
              the value they might create
              and the consequences of
              putting them into the real
              world.
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
            RESEARCH AREAS
        =================================================== */}

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
                  key={item.number}
                  className={`
                    group
                    relative
                    grid
                    gap-7

                    overflow-hidden

                    border-b
                    border-navy/[0.08]

                    py-10

                    transition-[background-color,border-color]
                    duration-200

                    hover:bg-white/[0.24]

                    dark:border-white/[0.08]
                    dark:hover:bg-white/[0.018]

                    lg:grid-cols-[0.1fr_0.25fr_0.9fr_auto]
                    lg:items-start
                    lg:gap-9
                    lg:py-12

                    ${accent.border}
                  `}
                >
                  {/* Static accent field */}

                  <div
                    aria-hidden="true"
                    className={`
                      pointer-events-none
                      absolute
                      inset-0

                      opacity-40

                      transition-opacity
                      duration-200

                      group-hover:opacity-100

                      ${accent.atmosphere}
                    `}
                  />

                  {/* Number */}

                  <span
                    className={`
                      relative
                      z-10

                      text-sm
                      font-semibold
                      tracking-[0.12em]

                      ${accent.text}
                    `}
                  >
                    {item.number}
                  </span>

                  {/* Category */}

                  <div className="relative z-10">
                    <div
                      className={`
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center

                        rounded-2xl
                        border
                        border-navy/[0.08]

                        transition-transform
                        duration-200

                        group-hover:-translate-y-0.5

                        dark:border-white/[0.08]

                        ${accent.icon}
                      `}
                    >
                      <Icon
                        aria-hidden="true"
                        strokeWidth={1.7}
                        className="h-4 w-4"
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

                  {/* Copy */}

                  <div
                    className="
                      relative
                      z-10
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
                      {
                        item.description
                      }
                    </p>
                  </div>

                  {/* Arrow */}

                  <span
                    className={`
                      relative
                      z-10

                      flex
                      h-10
                      w-10
                      items-center
                      justify-center

                      rounded-full
                      border
                      border-navy/[0.08]

                      transition-[transform,border-color,background-color]
                      duration-200

                      group-hover:translate-x-0.5

                      dark:border-white/[0.08]

                      ${accent.text}
                    `}
                  >
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4"
                    />
                  </span>
                </article>
              );
            },
          )}
        </div>

        {/* ===================================================
            MANIFESTO
        =================================================== */}

        <div
          className="
            mt-16
            grid
            gap-5

            lg:grid-cols-[1.25fr_0.75fr]
          "
        >
          {/* Principle */}

          <article
            className="
              relative
              overflow-hidden

              rounded-[2rem]
              border
              border-navy/[0.08]

              bg-white/[0.72]

              p-7

              shadow-[0_12px_36px_rgba(10,29,47,0.035)]

              dark:border-white/[0.08]
              dark:bg-[#111821]/[0.72]
              dark:shadow-[0_14px_40px_rgba(0,0,0,0.14)]

              sm:p-9
              lg:p-11
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0

                bg-[radial-gradient(circle_at_95%_8%,rgba(124,58,237,0.09),transparent_32%)]

                dark:bg-[radial-gradient(circle_at_95%_8%,rgba(168,85,247,0.125),transparent_33%)]
              "
            />

            <span
              className="
                relative
                z-10

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
                relative
                z-10

                mt-9
                max-w-5xl

                text-[clamp(2.3rem,3.8vw,4.4rem)]
                font-semibold
                leading-[1.02]
                tracking-[-0.045em]
              "
            >
              We are less interested
              in what technology{" "}

              <span className="text-blue">
                can
              </span>{" "}

              do than in what it{" "}

              <span className="text-teal">
                should enable.
              </span>
            </p>
          </article>

          {/* Research loop */}

          <article
            className="
              relative
              flex
              min-h-[22rem]
              flex-col
              justify-between

              overflow-hidden

              rounded-[2rem]

              bg-[#0a1d2f]/[0.96]

              p-7
              text-white

              shadow-[0_16px_48px_rgba(10,29,47,0.1)]

              dark:bg-[#101523]/[0.96]

              sm:p-9
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0

                bg-[radial-gradient(circle_at_95%_95%,rgba(59,130,246,0.16),transparent_38%)]
              "
            />

            <div
              aria-hidden="true"
              className="
                brand-grid
                pointer-events-none
                absolute
                inset-0

                opacity-[0.07]
              "
            />

            <span
              className="
                relative
                z-10

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
                aria-hidden="true"
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