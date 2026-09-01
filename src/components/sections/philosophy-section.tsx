"use client";

import {
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import {
  useEffect,
  useRef,
  type CSSProperties,
} from "react";

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
    border: "group-hover:border-blue/30",
    glow: "bg-blue/20 dark:bg-blue/20",
  },
  teal: {
    text: "text-teal",
    border: "group-hover:border-teal/30",
    glow: "bg-teal/20 dark:bg-teal/20",
  },
  violet: {
    text: "text-violet",
    border: "group-hover:border-violet/30",
    glow: "bg-violet/20 dark:bg-violet/20",
  },
};

export function PhilosophySection() {
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
        "--philosophy-x",
        `${x * 100}%`,
      );

      section.style.setProperty(
        "--philosophy-y",
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
          "--philosophy-x": "60%",
          "--philosophy-y": "42%",
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
            bg-white/[0.62]
            backdrop-blur-[2px]
            dark:bg-[#0d1117]/[0.62]
          "
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at var(--philosophy-x) var(--philosophy-y), rgba(59,130,246,0.06), transparent 30%)",
          }}
        />

        <div
          className="
            absolute
            right-[-16rem]
            top-[2%]
            h-[38rem]
            w-[38rem]
            rounded-full
            bg-blue/[0.045]
            blur-[180px]
            dark:bg-blue/[0.07]
          "
        />

        <div
          className="
            absolute
            bottom-[-16rem]
            left-[20%]
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-teal/[0.035]
            blur-[160px]
            dark:bg-teal/[0.055]
          "
        />
      </div>

      <div className="evolvaer-container relative z-10">
        <div
          className="
            grid
            gap-14
            lg:grid-cols-[0.78fr_1.22fr]
            lg:gap-20
          "
        >
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span
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
              What we build will change. The
              technologies will change. The
              problems will change. The
              principles shaping how Evolvaer
              approaches them should not.
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
                        dark:border-white/[0.075]
                        sm:grid-cols-[auto_1fr]
                        sm:gap-7
                        ${accent.border}
                      `}
                    >
                      <div
                        aria-hidden="true"
                        className={`
                          pointer-events-none
                          absolute
                          right-[8%]
                          top-1/2
                          h-28
                          w-28
                          -translate-y-1/2
                          rounded-full
                          blur-[60px]
                          opacity-0
                          transition-opacity
                          duration-500
                          group-hover:opacity-100
                          ${accent.glow}
                        `}
                      />

                      <div
                        className="
                          relative z-10
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
                          className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-navy/[0.08]
                            bg-white/[0.35]
                            backdrop-blur-xl
                            transition-transform
                            duration-300
                            group-hover:-translate-y-1
                            dark:border-white/[0.08]
                            dark:bg-white/[0.025]
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
                      </div>

                      <div className="relative z-10">
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

        <div
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[2.25rem]
            border
            border-navy/[0.08]
            bg-[#0a1d2f]/[0.86]
            p-7
            text-white
            backdrop-blur-2xl
            dark:border-white/[0.08]
            dark:bg-[#0f1622]/[0.82]
            sm:p-10
            lg:p-12
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-[-10rem]
              top-[-10rem]
              h-[30rem]
              w-[30rem]
              rounded-full
              bg-blue/10
              blur-[120px]
            "
          />

          <div
            className="
              relative z-10
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
              The future is not something we
              simply predict.
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