"use client";

import {
  Blocks,
  Compass,
  FlaskConical,
  Sparkles,
  TrendingUp,
  Wrench,
} from "lucide-react";
import {
  useEffect,
  useRef,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";

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
    border: "group-hover:border-blue/35",
    glow: "bg-blue/20 dark:bg-blue/25",
    line: "via-blue",
    number: "text-blue",
  },
  teal: {
    icon: "text-teal",
    border: "group-hover:border-teal/35",
    glow: "bg-teal/20 dark:bg-teal/25",
    line: "via-teal",
    number: "text-teal",
  },
  violet: {
    icon: "text-violet",
    border: "group-hover:border-violet/35",
    glow: "bg-violet/20 dark:bg-violet/25",
    line: "via-violet",
    number: "text-violet",
  },
};

function ApproachCard({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLElement>(null);

  const Icon = step.icon;
  const accent = accentClasses[step.accent];

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLElement>,
  ) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
      rect.width;

    const y =
      (event.clientY - rect.top) /
      rect.height;

    const rotateY =
      (x - 0.5) * 12;

    const rotateX =
      (0.5 - y) * 12;

    card.style.setProperty(
      "--rotate-x",
      `${rotateX}deg`,
    );

    card.style.setProperty(
      "--rotate-y",
      `${rotateY}deg`,
    );

    card.style.setProperty(
      "--pointer-x",
      `${x * 100}%`,
    );

    card.style.setProperty(
      "--pointer-y",
      `${y * 100}%`,
    );
  };

  const handlePointerLeave = () => {
    const card = cardRef.current;

    if (!card) return;

    card.style.setProperty(
      "--rotate-x",
      "0deg",
    );

    card.style.setProperty(
      "--rotate-y",
      "0deg",
    );

    card.style.setProperty(
      "--pointer-x",
      "50%",
    );

    card.style.setProperty(
      "--pointer-y",
      "50%",
    );
  };

  return (
    <article
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={
        {
          "--rotate-x": "0deg",
          "--rotate-y": "0deg",
          "--pointer-x": "50%",
          "--pointer-y": "50%",
          "--card-index": index,
        } as CSSProperties
      }
      className={`
        group
        relative
        min-h-[18rem]
        overflow-hidden
        rounded-[1.8rem]

        border
        border-navy/[0.08]
        bg-white/[0.46]

        p-5

        shadow-[0_18px_60px_rgba(10,29,47,0.05)]
        backdrop-blur-2xl

        transition-[transform,border-color,background-color,box-shadow]
        duration-300
        ease-out

        [transform-style:preserve-3d]
        [transform:perspective(900px)_rotateX(var(--rotate-x))_rotateY(var(--rotate-y))]

        hover:bg-white/[0.62]
        hover:shadow-[0_28px_80px_rgba(37,99,235,0.10)]

        dark:border-white/[0.08]
        dark:bg-white/[0.025]
        dark:shadow-[0_20px_70px_rgba(0,0,0,0.2)]
        dark:hover:bg-white/[0.045]

        ${accent.border}
      `}
    >
      {/* Cursor glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          background:
            "radial-gradient(circle at var(--pointer-x) var(--pointer-y), rgba(255,255,255,0.24), transparent 32%)",
        }}
      />

      {/* Accent glow */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          -right-14
          -top-16

          h-40
          w-40

          rounded-full
          blur-[65px]

          opacity-0
          transition-opacity
          duration-500

          group-hover:opacity-100

          ${accent.glow}
        `}
      />

      {/* Top accent */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          inset-x-8
          top-0

          h-px

          bg-gradient-to-r
          from-transparent
          ${accent.line}
          to-transparent

          opacity-0
          transition-opacity
          duration-500

          group-hover:opacity-80
        `}
      />

      <div
        className="
          relative
          flex
          h-full
          flex-col
          [transform-style:preserve-3d]
        "
      >
        <div
          className="
            flex
            items-start
            justify-between
            [transform:translateZ(24px)]
        "
        >
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-2xl
              border
              border-navy/[0.08]
              bg-white/60

              shadow-[0_8px_24px_rgba(10,29,47,0.04)]

              transition-transform
              duration-300

              group-hover:-translate-y-1
              group-hover:scale-105

              dark:border-white/[0.08]
              dark:bg-white/[0.04]
          "
          >
            <Icon
              className={`
                h-[1.1rem]
                w-[1.1rem]
                ${accent.icon}
              `}
            />
          </div>

          <span
            className={`
              text-sm
              font-semibold
              tracking-[0.08em]
              ${accent.number}
            `}
          >
            {step.number}
          </span>
        </div>

        <div
          className="
            mt-auto
            pt-10
            [transform:translateZ(38px)]
        "
        >
          <h3
            className="
              text-[1.7rem]
              font-semibold
              tracking-[-0.04em]
          "
          >
            {step.title}
          </h3>

          <p
            className="
              mt-3
              text-[0.84rem]
              leading-6
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
        "--approach-x",
        `${x * 100}%`,
      );

      section.style.setProperty(
        "--approach-y",
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
          "--approach-x": "50%",
          "--approach-y": "50%",
        } as CSSProperties
      }
      className="
        relative
        overflow-hidden

        py-24

        sm:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          TRANSPARENT ATMOSPHERE
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
        "
      >
        {/* Important:
            this is translucent so the persistent Three.js
            environment stays visible.
        */}

        <div
          className="
            absolute inset-0

            bg-white/[0.70]
            backdrop-blur-[2px]

            dark:bg-[#0d1117]/[0.70]
          "
        />

        {/* Mouse-reactive depth light */}

        <div
          className="
            absolute inset-0
            opacity-80

            dark:opacity-100
          "
          style={{
            background:
              "radial-gradient(circle at var(--approach-x) var(--approach-y), rgba(37,99,235,0.07), transparent 28%)",
          }}
        />

        {/* Ambient blue */}

        <div
          className="
            absolute
            -left-48
            top-[18%]

            h-[34rem]
            w-[34rem]

            rounded-full
            bg-blue/[0.06]
            blur-[160px]

            dark:bg-blue/[0.09]
        "
        />

        {/* Ambient teal */}

        <div
          className="
            absolute
            -bottom-56
            right-[-10rem]

            h-[38rem]
            w-[38rem]

            rounded-full
            bg-teal/[0.055]
            blur-[170px]

            dark:bg-teal/[0.08]
        "
        />

        {/* Grid */}

        <div
          className="
            brand-grid
            absolute inset-0

            opacity-[0.18]

            dark:opacity-[0.15]
        "
        />

        {/* Fade edges */}

        <div
          className="
            absolute inset-x-0 top-0
            h-32

            bg-gradient-to-b
            from-background
            to-transparent
        "
        />

        <div
          className="
            absolute inset-x-0 bottom-0
            h-32

            bg-gradient-to-t
            from-background
            to-transparent
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
        "
      >
        <div
          className="
            grid
            gap-10

            lg:grid-cols-[0.9fr_1.1fr]
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
                  from-blue
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
                Our approach
              </span>
            </div>

            <h2
              className="
                max-w-3xl

                text-[clamp(3.2rem,5vw,5.6rem)]
                font-bold
                leading-[0.94]
                tracking-[-0.055em]
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

          <div
            className="
              max-w-2xl

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
              We combine research, engineering
              and venture building to move
              promising technologies from
              exploration into practical,
              scalable solutions.
            </p>
          </div>
        </div>

        {/* =====================================================
            3D CARDS
            ===================================================== */}

        <div
          className="
            relative
            mt-14

            lg:mt-20
        "
        >
          {/* Spatial guide line */}

          <div
            aria-hidden="true"
            className="
              absolute
              left-[3%]
              right-[3%]
              top-8

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

              [perspective:1400px]
          "
          >
            {steps.map(
              (step, index) => (
                <ApproachCard
                  key={step.number}
                  step={step}
                  index={index}
                />
              ),
            )}
          </div>
        </div>

        {/* =====================================================
            PHILOSOPHY
            ===================================================== */}

        <div
          className="
            mt-14

            border-t
            border-navy/[0.08]

            pt-10

            dark:border-white/[0.08]

            lg:mt-16
        "
        >
          <div
            className="
              grid
              gap-6

              lg:grid-cols-[0.45fr_1.55fr]
              lg:items-start
          "
          >
            <p
              className="
                text-[0.64rem]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-blue
            "
            >
              Our philosophy
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
              Technology becomes valuable
              when it moves beyond novelty
              and creates something people
              can{" "}
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