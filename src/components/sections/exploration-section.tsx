"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Earth,
  HeartHandshake,
  Orbit,
} from "lucide-react";
import {
  useEffect,
  useRef,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";

const areas = [
  {
    number: "01",
    title: "AI & Intelligent Systems",
    description:
      "Exploring intelligent systems that can understand, adapt, assist and make complex technology more useful in the real world.",
    label: "Artificial Intelligence",
    icon: BrainCircuit,
    accent: "blue",
    feature: true,
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
    border: "hover:border-blue/30",
    glow: "bg-blue/20 dark:bg-blue/25",
  },
  teal: {
    text: "text-teal",
    border: "hover:border-teal/30",
    glow: "bg-teal/20 dark:bg-teal/25",
  },
  violet: {
    text: "text-violet",
    border: "hover:border-violet/30",
    glow: "bg-violet/20 dark:bg-violet/25",
  },
};

function ExplorationCard({
  area,
}: {
  area: (typeof areas)[number];
}) {
  const ref = useRef<HTMLElement>(null);

  const Icon = area.icon;
  const accent = accents[area.accent];

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLElement>,
  ) => {
    const card = ref.current;
    if (!card) return;

    const rect =
      card.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
      rect.width;

    const y =
      (event.clientY - rect.top) /
      rect.height;

    card.style.setProperty(
      "--rx",
      `${(0.5 - y) * 8}deg`,
    );

    card.style.setProperty(
      "--ry",
      `${(x - 0.5) * 8}deg`,
    );

    card.style.setProperty(
      "--mx",
      `${x * 100}%`,
    );

    card.style.setProperty(
      "--my",
      `${y * 100}%`,
    );
  };

  const reset = () => {
    const card = ref.current;
    if (!card) return;

    card.style.setProperty(
      "--rx",
      "0deg",
    );

    card.style.setProperty(
      "--ry",
      "0deg",
    );

    card.style.setProperty(
      "--mx",
      "50%",
    );

    card.style.setProperty(
      "--my",
      "50%",
    );
  };

  return (
    <article
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      style={
        {
          "--rx": "0deg",
          "--ry": "0deg",
          "--mx": "50%",
          "--my": "50%",
        } as CSSProperties
      }
      className={`
        group
        relative
        overflow-hidden
        rounded-[1.75rem]

        border
        border-navy/[0.08]
        bg-white/[0.42]

        p-6

        backdrop-blur-2xl

        transition-[transform,border-color,background-color,box-shadow]
        duration-300
        ease-out

        [transform-style:preserve-3d]
        [transform:perspective(900px)_rotateX(var(--rx))_rotateY(var(--ry))]

        hover:bg-white/[0.56]
        hover:shadow-[0_25px_70px_rgba(37,99,235,0.09)]

        dark:border-white/[0.08]
        dark:bg-white/[0.025]
        dark:hover:bg-white/[0.045]

        ${accent.border}
      `}
    >
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
            "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,0.22), transparent 30%)",
        }}
      />

      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          -right-16
          -top-16

          h-40
          w-40

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
          [transform:translateZ(26px)]
        "
      >
        <div className="flex items-start justify-between">
          <span
            className={`
              text-sm
              font-semibold
              tracking-[0.12em]
              ${accent.text}
            `}
          >
            {area.number}
          </span>

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
              bg-white/45

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
        </div>

        <div className="mt-10">
          <p
            className="
              text-[0.58rem]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-muted
            "
          >
            {area.label}
          </p>

          <h3
            className="
              mt-3
              text-[1.7rem]
              font-semibold
              leading-[1]
              tracking-[-0.035em]
            "
          >
            {area.title}
          </h3>

          <p
            className="
              mt-4
              text-[0.82rem]
              leading-6
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
  const sectionRef =
    useRef<HTMLElement>(null);

  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) return;

    const move = (
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
        "--explore-x",
        `${x * 100}%`,
      );

      section.style.setProperty(
        "--explore-y",
        `${y * 100}%`,
      );
    };

    section.addEventListener(
      "pointermove",
      move,
      {
        passive: true,
      },
    );

    return () => {
      section.removeEventListener(
        "pointermove",
        move,
      );
    };
  }, []);

  const feature = areas[0];

  return (
    <section
      ref={sectionRef}
      style={
        {
          "--explore-x": "62%",
          "--explore-y": "40%",
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

            bg-white/[0.55]
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
              "radial-gradient(circle at var(--explore-x) var(--explore-y), rgba(34,211,238,0.08), transparent 30%)",
          }}
        />

        <div
          className="
            absolute
            -right-56
            top-[4%]

            h-[40rem]
            w-[40rem]

            rounded-full
            bg-blue/[0.07]
            blur-[180px]

            dark:bg-blue/[0.11]
          "
        />

        <div
          className="
            absolute
            -bottom-64
            left-[-12rem]

            h-[42rem]
            w-[42rem]

            rounded-full
            bg-teal/[0.065]
            blur-[180px]

            dark:bg-teal/[0.10]
          "
        />

        <div
          className="
            absolute
            left-[42%]
            top-[32%]

            h-[28rem]
            w-[28rem]

            rounded-full
            bg-violet/[0.04]
            blur-[160px]

            dark:bg-violet/[0.07]
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
                  from-teal
                  via-blue
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
                Areas of exploration
              </span>
            </div>

            <h2
              className="
                max-w-3xl

                text-[clamp(3.2rem,5vw,5.8rem)]
                font-bold
                leading-[0.92]
                tracking-[-0.055em]
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
              We explore technologies with
              the potential to reshape
              industries, improve how people
              live and work, and create
              entirely new possibilities.
            </p>

            <Link
              href="/what-we-do"
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
              Explore what we do

              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center

                  rounded-full
                  border
                  border-blue/25

                  text-blue

                  transition-all
                  duration-300

                  group-hover:bg-blue
                  group-hover:text-white
                "
              >
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>

        {/* =====================================================
            FEATURED AI
        ===================================================== */}

        <div
          className="
            relative
            mt-16

            lg:mt-24
          "
        >
          <article
            className="
              group
              relative

              min-h-[34rem]
              overflow-hidden
              rounded-[2.2rem]

              border
              border-navy/[0.08]
              bg-white/[0.34]

              p-7

              backdrop-blur-2xl

              dark:border-white/[0.08]
              dark:bg-white/[0.02]

              sm:p-10
              lg:p-12
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                right-[4%]
                top-[10%]

                h-[22rem]
                w-[22rem]

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
                right-[10%]
                top-[18%]

                h-[15rem]
                w-[15rem]

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
                right-[13%]
                top-[24%]

                h-40
                w-40

                rounded-full
                bg-blue/[0.08]
                blur-[70px]

                dark:bg-blue/[0.14]
              "
            />

            <div
              className="
                relative z-10
                flex
                min-h-[30rem]
                flex-col
              "
            >
              <div
                className="
                  flex
                  items-start
                  justify-between
                "
              >
                <span
                  className="
                    text-sm
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
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-2xl
                    border
                    border-blue/20
                    bg-blue/[0.06]

                    text-blue
                  "
                >
                  <BrainCircuit className="h-5 w-5" />
                </div>
              </div>

              <div
                className="
                  mt-auto
                  max-w-3xl
                  pt-16
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
                  Artificial Intelligence
                </p>

                <h3
                  className="
                    mt-4

                    text-[clamp(3rem,5vw,5.6rem)]
                    font-bold
                    leading-[0.9]
                    tracking-[-0.055em]
                  "
                >
                  AI & Intelligent
                  <br />
                  Systems
                </h3>

                <p
                  className="
                    mt-6
                    max-w-xl

                    text-base
                    leading-8
                    text-muted
                  "
                >
                  {feature.description}
                </p>

                <Link
                  href="/what-we-do"
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2

                    text-[0.68rem]
                    font-semibold
                    uppercase
                    tracking-[0.22em]

                    text-blue
                  "
                >
                  Explore
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </article>
        </div>

        {/* =====================================================
            EXPLORATION GRID
        ===================================================== */}

        <div
          className="
            mt-5
            grid
            gap-4

            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {areas
            .slice(1, 4)
            .map((area) => (
              <ExplorationCard
                key={area.number}
                area={area}
              />
            ))}
        </div>

        {/* =====================================================
            FUTURE FRONTIERS
        ===================================================== */}

        <article
          className="
            group
            relative
            mt-5
            overflow-hidden

            rounded-[2rem]
            border
            border-violet/15
            bg-[#0a1d2f]/[0.88]

            p-7
            text-white

            backdrop-blur-2xl

            transition-all
            duration-500

            hover:border-violet/30

            dark:bg-[#101523]/[0.84]

            sm:p-9
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              right-[-8rem]
              top-[-10rem]

              h-[26rem]
              w-[26rem]

              rounded-full
              bg-violet/15
              blur-[110px]
            "
          />

          <div
            className="
              relative z-10
              grid
              gap-8

              lg:grid-cols-[0.18fr_0.42fr_1fr_auto]
              lg:items-center
            "
          >
            <span
              className="
                text-sm
                font-semibold
                tracking-[0.12em]
                text-violet
              "
            >
              05
            </span>

            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center

                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]

                  text-violet
                "
              >
                <Orbit className="h-5 w-5" />
              </div>

              <p
                className="
                  text-[0.6rem]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-white/45
                "
              >
                Emerging Frontiers
              </p>
            </div>

            <div>
              <h3
                className="
                  text-[clamp(2rem,3vw,3.4rem)]
                  font-semibold
                  leading-[1]
                  tracking-[-0.04em]
                "
              >
                Future Frontiers
              </h3>

              <p
                className="
                  mt-3
                  max-w-2xl

                  text-sm
                  leading-7
                  text-white/55
                "
              >
                Keeping space for technologies
                and opportunities that have not
                yet become obvious — but may
                shape what comes next.
              </p>
            </div>

            <div className="flex justify-start lg:justify-end">
              <span
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center

                  rounded-full
                  border
                  border-white/12

                  text-violet

                  transition-all
                  duration-300

                  group-hover:border-violet/40
                  group-hover:bg-violet
                  group-hover:text-white
                "
              >
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </article>

        {/* =====================================================
            CLOSING
        ===================================================== */}

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
                text-teal
              "
            >
              Beyond categories
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
              We are not defined by a single
              technology. We follow meaningful
              problems and explore the
              technologies capable of{" "}
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