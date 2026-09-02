import {
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Purposeful",
    description:
      "Technology should address meaningful needs rather than exist purely because it is technically possible.",
    icon: Target,
    accent: "blue",
  },
  {
    number: "02",
    title: "Inventive",
    description:
      "We challenge familiar assumptions and explore possibilities that can create genuinely better outcomes.",
    icon: Lightbulb,
    accent: "violet",
  },
  {
    number: "03",
    title: "Trustworthy",
    description:
      "Responsible thinking, clear decisions and dependable engineering are part of the product — not additions to it.",
    icon: ShieldCheck,
    accent: "teal",
  },
  {
    number: "04",
    title: "Collaborative",
    description:
      "The strongest ideas emerge when technical, commercial and human perspectives are allowed to challenge one another.",
    icon: Users,
    accent: "blue",
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
      "bg-[radial-gradient(circle_at_88%_50%,rgba(37,99,235,0.07),transparent_37%)] dark:bg-[radial-gradient(circle_at_88%_50%,rgba(59,130,246,0.10),transparent_38%)]",
  },

  teal: {
    text: "text-teal",
    border:
      "group-hover:border-teal/30 dark:group-hover:border-teal/35",
    icon:
      "bg-teal/[0.07] text-teal dark:bg-teal/[0.09]",
    atmosphere:
      "bg-[radial-gradient(circle_at_88%_50%,rgba(16,185,129,0.065),transparent_37%)] dark:bg-[radial-gradient(circle_at_88%_50%,rgba(34,211,238,0.09),transparent_38%)]",
  },

  violet: {
    text: "text-violet",
    border:
      "group-hover:border-violet/30 dark:group-hover:border-violet/35",
    icon:
      "bg-violet/[0.065] text-violet dark:bg-violet/[0.085]",
    atmosphere:
      "bg-[radial-gradient(circle_at_88%_50%,rgba(124,58,237,0.065),transparent_37%)] dark:bg-[radial-gradient(circle_at_88%_50%,rgba(168,85,247,0.095),transparent_38%)]",
  },
} as const;

export function PhilosophySection() {
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
        <div
          className="
            absolute
            inset-0

            bg-white/[0.63]

            dark:bg-[#0d1117]/[0.64]
          "
        />

        {/* Blue upper field */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_90%_16%,rgba(37,99,235,0.065),transparent_34%)]

            dark:bg-[radial-gradient(circle_at_90%_16%,rgba(59,130,246,0.09),transparent_35%)]
          "
        />

        {/* Teal lower field */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_35%_92%,rgba(16,185,129,0.05),transparent_33%)]

            dark:bg-[radial-gradient(circle_at_35%_92%,rgba(34,211,238,0.07),transparent_34%)]
          "
        />

        {/* Very subtle violet balance */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_60%_40%,rgba(124,58,237,0.025),transparent_26%)]

            dark:bg-[radial-gradient(circle_at_60%_40%,rgba(168,85,247,0.04),transparent_27%)]
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
        <div
          className="
            grid
            gap-14

            lg:grid-cols-[0.78fr_1.22fr]
            lg:gap-20
          "
        >
          {/* =================================================
              HEADING
          ================================================= */}

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
                  from-blue
                  via-teal
                  to-violet
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
                How we think
              </span>
            </div>

            <h2
              className="
                max-w-3xl

                text-[clamp(3.2rem,5vw,5.7rem)]
                font-bold
                leading-[0.92]
                tracking-[-0.055em]
              "
            >
              Built around
              <br />
              principles that
              <br />

              <span className="brand-gradient-text">
                endure.
              </span>
            </h2>
          </div>

          {/* =================================================
              PRINCIPLES
          ================================================= */}

          <div>
            <p
              className="
                max-w-2xl

                text-base
                leading-8
                text-muted

                sm:text-[1.05rem]
              "
            >
              What we build will change.
              The technologies will change.
              The problems will change. The
              principles shaping how
              Evolvaer approaches them
              should not.
            </p>

            <div
              className="
                mt-10

                border-t
                border-navy/[0.08]

                dark:border-white/[0.08]
              "
            >
              {principles.map(
                (principle) => {
                  const Icon =
                    principle.icon;

                  const accent =
                    accents[
                      principle.accent
                    ];

                  return (
                    <article
                      key={
                        principle.number
                      }
                      className={`
                        group
                        relative
                        grid
                        gap-5

                        overflow-hidden

                        border-b
                        border-navy/[0.08]

                        py-8

                        transition-[background-color,border-color]
                        duration-200

                        hover:bg-white/[0.22]

                        dark:border-white/[0.075]
                        dark:hover:bg-white/[0.016]

                        sm:grid-cols-[auto_1fr]
                        sm:gap-7

                        ${accent.border}
                      `}
                    >
                      {/* Static accent */}

                      <div
                        aria-hidden="true"
                        className={`
                          pointer-events-none
                          absolute
                          inset-0

                          opacity-35

                          transition-opacity
                          duration-200

                          group-hover:opacity-100

                          ${accent.atmosphere}
                        `}
                      />

                      {/* Number + icon */}

                      <div
                        className="
                          relative
                          z-10

                          flex
                          items-start
                          gap-4
                        "
                      >
                        <span
                          className={`
                            w-8
                            pt-2

                            text-sm
                            font-semibold
                            tracking-[0.1em]

                            ${accent.text}
                          `}
                        >
                          {
                            principle.number
                          }
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
                            strokeWidth={
                              1.7
                            }
                            className="h-4 w-4"
                          />
                        </div>
                      </div>

                      {/* Copy */}

                      <div
                        className="
                          relative
                          z-10
                        "
                      >
                        <h3
                          className="
                            text-[2rem]
                            font-semibold
                            tracking-[-0.035em]
                          "
                        >
                          {
                            principle.title
                          }
                        </h3>

                        <p
                          className="
                            mt-3
                            max-w-2xl

                            text-sm
                            leading-7
                            text-muted
                          "
                        >
                          {
                            principle.description
                          }
                        </p>
                      </div>
                    </article>
                  );
                },
              )}
            </div>
          </div>
        </div>

        {/* ===================================================
            CLOSING BELIEF
        =================================================== */}

        <div
          className="
            relative
            mt-16
            overflow-hidden

            rounded-[2.25rem]
            border
            border-white/[0.08]

            bg-[#0a1d2f]/[0.96]

            p-7
            text-white

            shadow-[0_18px_56px_rgba(10,29,47,0.1)]

            dark:bg-[#0f1622]/[0.96]

            sm:p-10
            lg:p-12
          "
        >
          {/* Blue light field */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0

              bg-[radial-gradient(circle_at_93%_8%,rgba(59,130,246,0.17),transparent_35%)]
            "
          />

          {/* Teal balance */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0

              bg-[radial-gradient(circle_at_35%_100%,rgba(34,211,238,0.07),transparent_34%)]
            "
          />

          <div
            aria-hidden="true"
            className="
              brand-grid
              pointer-events-none
              absolute
              inset-0

              opacity-[0.06]
            "
          />

          <div
            className="
              relative
              z-10
              grid
              gap-10

              lg:grid-cols-[0.35fr_1.65fr]
            "
          >
            <p
              className="
                text-[0.62rem]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-teal
              "
            >
              Our belief
            </p>

            <p
              className="
                max-w-5xl

                text-[clamp(2.5rem,4.4vw,5rem)]
                font-semibold
                leading-[1]
                tracking-[-0.05em]
              "
            >
              The future is not
              something we simply
              predict.
              <br />
              It is something we{" "}

              <span className="text-blue">
                help shape.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}