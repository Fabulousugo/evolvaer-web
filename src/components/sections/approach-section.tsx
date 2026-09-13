import {
  Blocks,
  Compass,
  FlaskConical,
  Sparkles,
  TrendingUp,
  Wrench,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Explore",
    description:
      "Identify emerging technologies, unmet needs and opportunities worth pursuing.",
    icon: Compass,
    accent: "blue",
  },
  {
    number: "02",
    title: "Research",
    description:
      "Investigate technical, commercial and societal potential before committing to a direction.",
    icon: FlaskConical,
    accent: "teal",
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "Transform promising ideas into robust systems, prototypes and technology foundations.",
    icon: Wrench,
    accent: "violet",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Turn validated concepts into useful products, platforms and ventures.",
    icon: Blocks,
    accent: "blue",
  },
  {
    number: "05",
    title: "Scale",
    description:
      "Strengthen technology, operations and product foundations for wider adoption.",
    icon: TrendingUp,
    accent: "teal",
  },
  {
    number: "06",
    title: "Impact",
    description:
      "Measure progress through meaningful outcomes, not technology for technology’s sake.",
    icon: Sparkles,
    accent: "violet",
  },
] as const;

const accentClasses = {
  blue: {
    icon: "text-blue",
    number: "text-blue",
    dot: "bg-blue",
    border:
      "group-hover:border-blue/30 dark:group-hover:border-blue/35",
    iconBackground:
      "bg-blue/[0.07] dark:bg-blue/[0.09]",
    glow:
      "bg-[radial-gradient(circle_at_85%_12%,rgba(37,99,235,0.09),transparent_34%)] dark:bg-[radial-gradient(circle_at_85%_12%,rgba(59,130,246,0.11),transparent_35%)]",
  },

  teal: {
    icon: "text-teal",
    number: "text-teal",
    dot: "bg-teal",
    border:
      "group-hover:border-teal/30 dark:group-hover:border-teal/35",
    iconBackground:
      "bg-teal/[0.07] dark:bg-teal/[0.09]",
    glow:
      "bg-[radial-gradient(circle_at_85%_12%,rgba(16,185,129,0.085),transparent_34%)] dark:bg-[radial-gradient(circle_at_85%_12%,rgba(34,211,238,0.10),transparent_35%)]",
  },

  violet: {
    icon: "text-violet",
    number: "text-violet",
    dot: "bg-violet",
    border:
      "group-hover:border-violet/30 dark:group-hover:border-violet/35",
    iconBackground:
      "bg-violet/[0.065] dark:bg-violet/[0.085]",
    glow:
      "bg-[radial-gradient(circle_at_85%_12%,rgba(124,58,237,0.075),transparent_34%)] dark:bg-[radial-gradient(circle_at_85%_12%,rgba(168,85,247,0.10),transparent_35%)]",
  },
} as const;

function ApproachCard({
  step,
}: {
  step: (typeof steps)[number];
}) {
  const Icon = step.icon;
  const accent = accentClasses[step.accent];

  return (
    <article
      className={`
        group
        relative
        min-h-[15.5rem]
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
        dark:shadow-[0_12px_32px_rgba(0,0,0,0.16)]

        dark:hover:bg-[#141d28]/[0.9]

        ${accent.border}
      `}
    >
      {/* Accent atmosphere */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          inset-0
          opacity-70
          transition-opacity
          duration-200

          group-hover:opacity-100

          ${accent.glow}
        `}
      />

      {/* Top accent */}
      <div
        aria-hidden="true"
        className="
          absolute
          left-5
          right-5
          top-0
          h-px

          bg-gradient-to-r
          from-transparent
          via-navy/10
          to-transparent

          dark:via-white/10
        "
      />

      <div className="relative z-10 flex h-full min-h-[13rem] flex-col">
        {/* Number / icon */}
        <div className="flex items-start justify-between gap-4">
          <span
            className={`
              text-[0.58rem]
              font-semibold
              tracking-[0.22em]

              ${accent.number}
            `}
          >
            {step.number}
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
              border-navy/[0.06]

              transition-transform
              duration-200

              group-hover:-translate-y-0.5

              dark:border-white/[0.07]

              ${accent.iconBackground}
            `}
          >
            <Icon
              aria-hidden="true"
              strokeWidth={1.7}
              className={`h-4 w-4 ${accent.icon}`}
            />
          </div>
        </div>

        {/* Content */}
        <div className="mt-auto pt-9">
          <div className="mb-4 flex items-center gap-3">
            <span
              aria-hidden="true"
              className={`h-1.5 w-1.5 rounded-full ${accent.dot}`}
            />

            <span
              aria-hidden="true"
              className="
                h-px
                w-7
                bg-navy/10

                dark:bg-white/10
              "
            />
          </div>

          <h3
            className="
              text-[1.2rem]
              font-semibold
              leading-tight
              tracking-[-0.025em]

              sm:text-[1.3rem]
            "
          >
            {step.title}
          </h3>

          <p
            className="
              mt-2.5
              text-[0.82rem]
              leading-5
              text-muted
            "
          >
            {step.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export function ApproachSection() {
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
            bg-white/[0.72]

            dark:bg-[#0d1117]/[0.72]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_8%_36%,rgba(37,99,235,0.075),transparent_32%)]

            dark:bg-[radial-gradient(circle_at_8%_36%,rgba(59,130,246,0.105),transparent_33%)]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_92%_88%,rgba(16,185,129,0.065),transparent_34%)]

            dark:bg-[radial-gradient(circle_at_92%_88%,rgba(34,211,238,0.085),transparent_35%)]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_72%_16%,rgba(124,58,237,0.035),transparent_26%)]

            dark:bg-[radial-gradient(circle_at_72%_16%,rgba(168,85,247,0.055),transparent_27%)]
          "
        />

        <div
          className="
            brand-grid
            absolute
            inset-0
            opacity-[0.14]

            dark:opacity-[0.10]
          "
        />

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-24
            bg-gradient-to-b
            from-background
            to-transparent
          "
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-24
            bg-gradient-to-t
            from-background
            to-transparent
          "
        />
      </div>

      {/* Content */}
      <div className="evolvaer-container relative z-10">
        {/* Intro */}
        <div
          className="
            grid
            gap-8

            lg:grid-cols-[0.95fr_1.05fr]
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
                  from-blue
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
                Our approach
              </span>
            </div>

            <h2
              className="
                max-w-[42rem]
                text-[clamp(2.4rem,4vw,4.3rem)]
                font-bold
                leading-[0.97]
                tracking-[-0.045em]
              "
            >
              From possibility
              <br />
              to{" "}
              <span className="brand-gradient-text">
                impact.
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
              We combine research, engineering and venture building to
              move promising technologies from exploration into
              practical, scalable solutions.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="relative mt-12 lg:mt-16">
          <div
            aria-hidden="true"
            className="
              absolute
              left-[3%]
              right-[3%]
              top-7
              hidden
              h-px

              bg-gradient-to-r
              from-transparent
              via-blue/20
              to-transparent

              xl:block
            "
          />

          <div
            className="
              grid
              gap-4

              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-6
            "
          >
            {steps.map((step) => (
              <ApproachCard
                key={step.number}
                step={step}
              />
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div
          className="
            mt-12
            border-t
            border-navy/[0.08]
            pt-8

            dark:border-white/[0.08]

            lg:mt-14
          "
        >
          <div
            className="
              grid
              gap-5

              lg:grid-cols-[0.35fr_1.65fr]
              lg:items-start
            "
          >
            <p
              className="
                text-[0.58rem]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-blue
              "
            >
              Our philosophy
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
              Technology becomes valuable when it moves beyond novelty
              and creates something people can{" "}
              <span className="text-teal">
                meaningfully use.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}