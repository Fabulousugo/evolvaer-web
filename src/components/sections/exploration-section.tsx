import Link from "next/link";

import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Earth,
  HeartHandshake,
  Orbit,
} from "lucide-react";

const areas = [
  {
    number: "01",
    title: "AI & Intelligent Systems",
    description:
      "Exploring intelligent systems that can understand, adapt, assist and make complex technology more useful in the real world.",
    label: "Artificial Intelligence",
    icon: BrainCircuit,
    accent: "blue",
  },
  {
    number: "02",
    title: "Emerging Software",
    description:
      "Engineering new software experiences, platforms and digital infrastructure around changing technologies and behaviours.",
    label: "Software & Platforms",
    icon: Code2,
    accent: "teal",
  },
  {
    number: "03",
    title: "Human-Centred Technology",
    description:
      "Creating technology around real human needs, accessibility and better interactions between people and intelligent systems.",
    label: "People & Technology",
    icon: HeartHandshake,
    accent: "violet",
  },
  {
    number: "04",
    title: "Energy & Climate Technology",
    description:
      "Investigating digital technologies that can support smarter energy systems, efficiency and a more sustainable future.",
    label: "Energy & Sustainability",
    icon: Earth,
    accent: "teal",
  },
  {
    number: "05",
    title: "Future Frontiers",
    description:
      "Keeping space for technologies and opportunities that have not yet become obvious — but may shape what comes next.",
    label: "Emerging Frontiers",
    icon: Orbit,
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
    dot: "bg-blue",
    atmosphere:
      "bg-[radial-gradient(circle_at_86%_10%,rgba(37,99,235,0.09),transparent_36%)] dark:bg-[radial-gradient(circle_at_86%_10%,rgba(59,130,246,0.12),transparent_37%)]",
  },

  teal: {
    text: "text-teal",
    border:
      "group-hover:border-teal/30 dark:group-hover:border-teal/35",
    icon:
      "bg-teal/[0.07] text-teal dark:bg-teal/[0.09]",
    dot: "bg-teal",
    atmosphere:
      "bg-[radial-gradient(circle_at_86%_10%,rgba(16,185,129,0.085),transparent_36%)] dark:bg-[radial-gradient(circle_at_86%_10%,rgba(34,211,238,0.11),transparent_37%)]",
  },

  violet: {
    text: "text-violet",
    border:
      "group-hover:border-violet/30 dark:group-hover:border-violet/35",
    icon:
      "bg-violet/[0.065] text-violet dark:bg-violet/[0.085]",
    dot: "bg-violet",
    atmosphere:
      "bg-[radial-gradient(circle_at_86%_10%,rgba(124,58,237,0.075),transparent_36%)] dark:bg-[radial-gradient(circle_at_86%_10%,rgba(168,85,247,0.105),transparent_37%)]",
  },
} as const;

function ExplorationCard({
  area,
}: {
  area: (typeof areas)[number];
}) {
  const Icon = area.icon;
  const accent = accents[area.accent];

  return (
    <article
      className={`
        group
        relative
        min-h-[16rem]
        overflow-hidden
        rounded-[1.4rem]

        border
        border-navy/[0.08]
        bg-white/[0.72]

        p-5

        shadow-[0_10px_30px_rgba(10,29,47,0.04)]

        transition-[transform,border-color,background-color,box-shadow]
        duration-200
        ease-out

        hover:-translate-y-1
        hover:bg-white/[0.88]
        hover:shadow-[0_16px_40px_rgba(10,29,47,0.07)]

        dark:border-white/[0.08]
        dark:bg-[#111821]/[0.76]
        dark:shadow-[0_12px_32px_rgba(0,0,0,0.15)]

        dark:hover:bg-[#141d28]/[0.9]

        ${accent.border}
      `}
    >
      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          inset-0
          opacity-65
          transition-opacity
          duration-200

          group-hover:opacity-100

          ${accent.atmosphere}
        `}
      />

      <div className="relative z-10 flex min-h-[13rem] flex-col">
        <div className="flex items-start justify-between gap-4">
          <span
            className={`
              text-[0.62rem]
              font-semibold
              tracking-[0.12em]

              ${accent.text}
            `}
          >
            {area.number}
          </span>

          <div
            className={`
              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-xl
              border
              border-navy/[0.07]

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
        </div>

        <div className="mt-auto pt-9">
          <div className="mb-3.5 flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className={`h-1.5 w-1.5 rounded-full ${accent.dot}`}
            />

            <p
              className="
                text-[0.54rem]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-muted
              "
            >
              {area.label}
            </p>
          </div>

          <h3
            className="
              text-[1.3rem]
              font-semibold
              leading-[1.05]
              tracking-[-0.025em]
            "
          >
            {area.title}
          </h3>

          <p
            className="
              mt-3
              text-[0.8rem]
              leading-5
              text-muted
            "
          >
            {area.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export function ExplorationSection() {
  const feature = areas[0];
  const FeatureIcon = feature.icon;

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
            bg-white/[0.58]

            dark:bg-[#0d1117]/[0.62]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_91%_20%,rgba(37,99,235,0.085),transparent_34%)]

            dark:bg-[radial-gradient(circle_at_91%_20%,rgba(59,130,246,0.12),transparent_35%)]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_7%_88%,rgba(16,185,129,0.075),transparent_35%)]

            dark:bg-[radial-gradient(circle_at_7%_88%,rgba(34,211,238,0.105),transparent_36%)]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_58%_43%,rgba(124,58,237,0.04),transparent_28%)]

            dark:bg-[radial-gradient(circle_at_58%_43%,rgba(168,85,247,0.065),transparent_29%)]
          "
        />

        <div
          className="
            brand-grid
            absolute
            inset-0
            opacity-[0.1]

            dark:opacity-[0.07]
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
                  text-muted
                "
              >
                Areas of exploration
              </span>
            </div>

            <h2
              className="
                max-w-[42rem]

                text-[clamp(2.4rem,4vw,4.3rem)]
                font-bold
                leading-[0.96]
                tracking-[-0.045em]
              "
            >
              Where technology
              <br />
              meets{" "}

              <span className="brand-gradient-text">
                possibility.
              </span>
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
              We explore technologies with the potential to reshape
              industries, improve how people live and work, and create
              entirely new possibilities.
            </p>

            <Link
              href="/what-we-do"
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
              Explore what we do

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center

                  rounded-full
                  border
                  border-blue/25
                  text-blue

                  transition-[transform,background-color,color,border-color]
                  duration-200

                  group-hover:translate-x-0.5
                  group-hover:border-blue
                  group-hover:bg-blue
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

        {/* Featured AI */}
        <div className="relative mt-12 lg:mt-16">
          <article
            className="
              group
              relative
              min-h-[17rem]
              overflow-hidden
              rounded-[1.8rem]

              border
              border-navy/[0.08]
              bg-white/[0.7]

              p-6

              shadow-[0_14px_40px_rgba(10,29,47,0.045)]

              dark:border-white/[0.08]
              dark:bg-[#101720]/[0.72]
              dark:shadow-[0_16px_46px_rgba(0,0,0,0.15)]

              sm:p-8
              lg:p-10
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0

                bg-[radial-gradient(circle_at_83%_35%,rgba(37,99,235,0.11),transparent_30%)]

                dark:bg-[radial-gradient(circle_at_83%_35%,rgba(59,130,246,0.15),transparent_31%)]
              "
            />

            {/* Decorative rings */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                right-[5%]
                top-[10%]

                h-[17rem]
                w-[17rem]

                rounded-full
                border
                border-blue/[0.12]

                dark:border-blue/[0.18]
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                right-[11%]
                top-[19%]

                h-[11rem]
                w-[11rem]

                rounded-full
                border
                border-teal/[0.12]

                dark:border-teal/[0.16]
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                right-[18%]
                top-[30%]

                h-14
                w-14

                rounded-full
                border
                border-violet/[0.14]

                dark:border-violet/[0.2]
              "
            />

            <div className="relative z-10 flex min-h-[17rem] flex-col">
              <div className="flex items-start justify-between">
                <span
                  className="
                    text-[0.62rem]
                    font-semibold
                    tracking-[0.12em]
                    text-blue
                  "
                >
                  {feature.number}
                </span>

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center

                    rounded-xl
                    border
                    border-blue/20
                    bg-blue/[0.07]
                    text-blue

                    dark:bg-blue/[0.09]
                  "
                >
                  <FeatureIcon
                    aria-hidden="true"
                    strokeWidth={1.7}
                    className="h-4 w-4"
                  />
                </div>
              </div>

              <div className="mt-auto max-w-[42rem] pt-12">
                <p
                  className="
                    text-[0.56rem]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-blue
                  "
                >
                  {feature.label}
                </p>

                <h3
                  className="
                    mt-3

                    text-[clamp(2.3rem,4vw,4.2rem)]
                    font-bold
                    leading-[0.94]
                    tracking-[-0.045em]
                  "
                >
                  AI & Intelligent
                  <br />
                  Systems
                </h3>

                <p
                  className="
                    mt-4
                    max-w-xl

                    text-[0.95rem]
                    leading-7
                    text-muted
                  "
                >
                  {feature.description}
                </p>

                <Link
                  href="/what-we-do"
                  className="
                    group
                    mt-6
                    inline-flex
                    items-center
                    gap-2

                    text-[0.6rem]
                    font-semibold
                    uppercase
                    tracking-[0.2em]

                    text-blue
                  "
                >
                  Explore

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
                </Link>
              </div>
            </div>
          </article>
        </div>

        {/* Exploration grid */}
        <div
          className="
            mt-4
            grid
            gap-4

            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {areas.slice(1, 4).map((area) => (
            <ExplorationCard
              key={area.number}
              area={area}
            />
          ))}
        </div>

        {/* Future Frontiers */}
        <article
          className="
            group
            relative
            mt-4
            overflow-hidden

            rounded-[1.6rem]
            border
            border-violet/15

            bg-[#0a1d2f]/[0.94]

            p-6
            text-white

            shadow-[0_14px_38px_rgba(10,29,47,0.12)]

            transition-[transform,border-color,box-shadow]
            duration-200

            hover:-translate-y-0.5
            hover:border-violet/30
            hover:shadow-[0_18px_44px_rgba(10,29,47,0.16)]

            dark:bg-[#101523]/[0.94]

            sm:p-8
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0

              bg-[radial-gradient(circle_at_96%_15%,rgba(168,85,247,0.20),transparent_32%)]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-[7%]
              top-1/2

              h-28
              w-28

              -translate-y-1/2
              rounded-full

              border
              border-violet/15
            "
          />

          <div
            className="
              relative
              z-10
              grid
              gap-6

              lg:grid-cols-[0.14fr_0.36fr_1fr_auto]
              lg:items-center
            "
          >
            <span
              className="
                text-[0.62rem]
                font-semibold
                tracking-[0.12em]
                text-violet
              "
            >
              05
            </span>

            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center

                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.04]

                  text-violet
                "
              >
                <Orbit
                  aria-hidden="true"
                  strokeWidth={1.7}
                  className="h-4 w-4"
                />
              </div>

              <p
                className="
                  text-[0.54rem]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-white/45
                "
              >
                Emerging Frontiers
              </p>
            </div>

            <div>
              <h3
                className="
                  text-[clamp(1.6rem,2.4vw,2.6rem)]
                  font-semibold
                  leading-[1]
                  tracking-[-0.03em]
                "
              >
                Future Frontiers
              </h3>

              <p
                className="
                  mt-2.5
                  max-w-2xl

                  text-[0.82rem]
                  leading-6
                  text-white/55
                "
              >
                Keeping space for technologies and opportunities that
                have not yet become obvious — but may shape what comes
                next.
              </p>
            </div>

            <div className="flex justify-start lg:justify-end">
              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center

                  rounded-full
                  border
                  border-white/12

                  text-violet

                  transition-[transform,border-color,background-color,color]
                  duration-200

                  group-hover:translate-x-0.5
                  group-hover:border-violet/40
                  group-hover:bg-violet
                  group-hover:text-white
                "
              >
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </span>
            </div>
          </div>
        </article>

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
                text-teal
              "
            >
              Beyond categories
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
              We are not defined by a single technology. We follow
              meaningful problems and explore the technologies capable
              of{" "}

              <span className="text-teal">
                solving them.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}