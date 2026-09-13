import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  CircleDot,
  Layers3,
  Orbit,
} from "lucide-react";
import Link from "next/link";

const applicationPaths = [
  {
    number: "01",
    label: "Engineering",
    title: "Test technical possibility.",
    description:
      "Research can give engineering a clearer problem, stronger assumptions and evidence about which technical directions deserve experimentation.",
    accent: "#2563EB",
    icon: Blocks,
  },
  {
    number: "02",
    label: "Product",
    title: "Shape something useful.",
    description:
      "Evidence around needs, constraints and behaviour can influence what a product should do — and whether it should exist at all.",
    accent: "#22D3EE",
    icon: Layers3,
  },
  {
    number: "03",
    label: "Ventures",
    title: "Explore a larger opportunity.",
    description:
      "Where evidence, technology and a meaningful problem begin to align, research can strengthen the case for developing an idea further.",
    accent: "#A855F7",
    icon: Orbit,
  },
] as const;

const decisions = [
  {
    number: "A",
    title: "Investigate again",
    description: "Important uncertainty remains.",
    accent: "#A855F7",
  },
  {
    number: "B",
    title: "Prototype",
    description: "A technical assumption needs testing.",
    accent: "#2563EB",
  },
  {
    number: "C",
    title: "Build",
    description: "Evidence supports a usable system.",
    accent: "#22D3EE",
  },
  {
    number: "D",
    title: "Venture",
    description: "Problem, product and opportunity align.",
    accent: "#10B981",
  },
  {
    number: "E",
    title: "Stop",
    description: "Evidence does not justify further investment.",
    accent: "#64748B",
  },
] as const;

export function ResearchApplication() {
  return (
    <section
      id="research-application"
      className="
        relative
        overflow-hidden
        border-t
        border-[#0A1D2F]/[0.07]
        bg-white
        py-12
        dark:border-white/[0.07]
        dark:bg-[#0D1117]
        sm:py-14
        lg:py-16
      "
    >
      {/* Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 92% 8%, rgba(34,211,238,.035), transparent 27%), radial-gradient(circle at 6% 94%, rgba(168,85,247,.025), transparent 27%)",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            HEADER + IMAGE
        ===================================================== */}

        <div
          className="
            grid
            gap-8
            lg:grid-cols-[0.95fr_1.05fr]
            lg:items-center
            lg:gap-14
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <span
                className="
                  font-mono
                  text-[0.46rem]
                  text-[#2563EB]
                  dark:text-[#60A5FA]
                "
              >
                04
              </span>

              <span className="h-px w-7 bg-[#2563EB]/35" />

              <div className="flex items-center gap-2">
                <CircleDot
                  className="
                    h-3
                    w-3
                    text-[#2563EB]
                    dark:text-[#60A5FA]
                  "
                />

                <p
                  className="
                    text-[0.54rem]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#2563EB]
                    dark:text-[#60A5FA]
                  "
                >
                  Research to application
                </p>
              </div>
            </div>

            <h2
              className="
                mt-4
                max-w-[610px]
                text-[clamp(1.95rem,3.1vw,2.6rem)]
                font-semibold
                leading-[1.03]
                tracking-[-0.043em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Understanding should inform{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-[#2563EB]
                  via-[#0891B2]
                  to-[#10B981]
                  bg-clip-text
                  text-transparent
                  dark:from-[#60A5FA]
                  dark:via-[#67E8F9]
                  dark:to-[#34D399]
                "
              >
                what happens next.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-[580px]
                text-[0.88rem]
                leading-6
                text-[#0A1D2F]/70
                dark:text-white/67
                sm:text-[0.92rem]
              "
            >
              Research at Evolvaer is connected to making.
              Useful understanding can influence engineering,
              product development and venture decisions.
            </p>

            <p
              className="
                mt-3
                max-w-[560px]
                text-[0.76rem]
                leading-5
                text-[#0A1D2F]/58
                dark:text-white/55
              "
            >
              The handoff is never automatic. Research creates
              better-informed options — not an obligation to
              build.
            </p>
          </div>

          {/* Image */}
          <div
            className="
              relative
              aspect-[16/9]
              overflow-hidden
              rounded-[1.25rem]
              border
              border-[#0A1D2F]/[0.08]
              bg-[#F1F5F9]
              dark:border-white/[0.08]
              dark:bg-[#101820]
            "
          >
            <Image
              src="/images/research-application.png"
              alt="Engineering and technical development informed by research"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#07111D]/65
                via-[#07111D]/5
                to-transparent
              "
            />

            <div className="absolute inset-x-4 bottom-4">
              <p
                className="
                  text-[0.43rem]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#67E8F9]
                "
              >
                Applied research
              </p>

              <p
                className="
                  mt-1.5
                  max-w-[500px]
                  text-[0.8rem]
                  font-medium
                  leading-5
                  text-white
                "
              >
                Evidence can change what we build, test or decide
                next.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            APPLICATION PATHS
        ===================================================== */}

        <div
          className="
            mt-9
            grid
            overflow-hidden
            rounded-[1.2rem]
            border
            border-[#0A1D2F]/[0.08]
            bg-[#F8FAFC]
            dark:border-white/[0.08]
            dark:bg-[#101820]
            lg:grid-cols-3
          "
        >
          {applicationPaths.map((path, index) => {
            const Icon = path.icon;

            return (
              <article
                key={path.number}
                className={`
                  group
                  relative
                  px-5
                  py-5
                  transition-colors
                  duration-300
                  hover:bg-white
                  dark:hover:bg-white/[0.025]

                  ${
                    index !== applicationPaths.length - 1
                      ? `
                        border-b
                        border-[#0A1D2F]/[0.07]
                        dark:border-white/[0.07]
                        lg:border-b-0
                        lg:border-r
                      `
                      : ""
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono text-[0.42rem]"
                    style={{ color: path.accent }}
                  >
                    {path.number}
                  </span>

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                    "
                    style={{
                      borderColor: `${path.accent}28`,
                      backgroundColor: `${path.accent}0B`,
                    }}
                  >
                    <Icon
                      className="h-3.5 w-3.5"
                      style={{ color: path.accent }}
                    />
                  </div>
                </div>

                <p
                  className="
                    mt-5
                    text-[0.46rem]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                  "
                  style={{ color: path.accent }}
                >
                  {path.label}
                </p>

                <h3
                  className="
                    mt-2
                    text-[1.08rem]
                    font-semibold
                    leading-[1.15]
                    tracking-[-0.028em]
                    text-[#0A1D2F]
                    dark:text-white
                  "
                >
                  {path.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-[0.76rem]
                    leading-5
                    text-[#0A1D2F]/65
                    dark:text-white/61
                  "
                >
                  {path.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            DECISION GATE
        ===================================================== */}

        <div
          className="
            mt-8
            grid
            gap-5
            border-t
            border-[#0A1D2F]/[0.08]
            pt-7
            dark:border-white/[0.08]
            lg:grid-cols-[0.72fr_1.28fr]
            lg:items-start
            lg:gap-12
          "
        >
          <div>
            <p
              className="
                text-[0.47rem]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#2563EB]
                dark:text-[#60A5FA]
              "
            >
              Evidence changes the decision
            </p>

            <h3
              className="
                mt-3
                max-w-[410px]
                text-[1.35rem]
                font-semibold
                leading-[1.15]
                tracking-[-0.035em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Not every investigation should end in a product.
            </h3>

            <p
              className="
                mt-3
                max-w-[450px]
                text-[0.75rem]
                leading-5
                text-[#0A1D2F]/62
                dark:text-white/58
              "
            >
              Stronger evidence should make the next commitment
              easier to justify — including the decision not to
              continue.
            </p>
          </div>

          <div
            className="
              divide-y
              divide-[#0A1D2F]/[0.07]
              border-y
              border-[#0A1D2F]/[0.07]
              dark:divide-white/[0.07]
              dark:border-white/[0.07]
            "
          >
            {decisions.map((decision) => (
              <DecisionRow
                key={decision.number}
                {...decision}
              />
            ))}
          </div>
        </div>
      </div>
      {/* =====================================================
    NEXT PATH
===================================================== */}

<div
  className="
    mt-8
    overflow-hidden
    rounded-[1.2rem]
    border
    border-[#0A1D2F]/[0.08]
    bg-[#0A1D2F]
    dark:border-white/[0.08]
    dark:bg-[#080C12]
  "
>
  <div
    className="
      grid
      gap-6
      px-5
      py-6
      sm:px-6
      lg:grid-cols-[1fr_auto]
      lg:items-center
      lg:gap-10
      lg:px-7
      lg:py-7
    "
  >
    <div>
      <p
        className="
          text-[0.43rem]
          font-semibold
          uppercase
          tracking-[0.16em]
          text-[#67E8F9]
        "
      >
        From understanding to action
      </p>

      <h3
        className="
          mt-2
          max-w-[540px]
          text-[1.2rem]
          font-semibold
          leading-[1.18]
          tracking-[-0.03em]
          text-white
          sm:text-[1.3rem]
        "
      >
        Research is only one part of how we turn possibility
        into meaningful work.
      </h3>

      <p
        className="
          mt-2
          max-w-[590px]
          text-[0.7rem]
          leading-5
          text-white/55
        "
      >
        Explore how evidence can move into engineering,
        product development and new ventures.
      </p>
    </div>

    <div
      className="
        flex
        flex-col
        gap-2.5
        sm:flex-row
        lg:justify-end
      "
    >
      <Link
        href="/what-we-do"
        className="
          group
          inline-flex
          min-h-10
          items-center
          justify-center
          gap-2.5
          rounded-full
          bg-[#2563EB]
          px-4
          text-[0.72rem]
          font-semibold
          !text-white
          transition-[transform,background-color]
          duration-300
          hover:-translate-y-0.5
          hover:bg-[#3B82F6]
        "
      >
        See how we build

        <ArrowRight
          className="
            h-3.5
            w-3.5
            transition-transform
            duration-300
            group-hover:translate-x-0.5
          "
        />
      </Link>

      <Link
        href="/ventures"
        className="
          group
          inline-flex
          min-h-10
          items-center
          justify-center
          gap-2.5
          rounded-full
          border
          border-white/10
          bg-white/[0.045]
          px-4
          text-[0.72rem]
          font-semibold
          !text-white
          transition-[transform,border-color,background-color,color]
          duration-300
          hover:-translate-y-0.5
          hover:border-[#22D3EE]/25
          hover:bg-white/[0.07]
          hover:text-white
        "
      >
        Explore ventures

        <ArrowUpRight
          className="
            h-3.5
            w-3.5
            transition-transform
            duration-300
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
          "
        />
      </Link>
    </div>
  </div>
</div>
    </section>
  );
}

function DecisionRow({
  number,
  title,
  description,
  accent,
}: {
  number: string;
  title: string;
  description: string;
  accent: string;
}) {
  return (
    <div
      className="
        grid
        grid-cols-[1.5rem_1fr_auto]
        items-center
        gap-3
        py-3
      "
    >
      <span
        className="font-mono text-[0.4rem]"
        style={{ color: accent }}
      >
        {number}
      </span>

      <div
        className="
          grid
          gap-0.5
          sm:grid-cols-[0.7fr_1.3fr]
          sm:items-center
          sm:gap-5
        "
      >
        <p
          className="
            text-[0.76rem]
            font-semibold
            text-[#0A1D2F]
            dark:text-white
          "
        >
          {title}
        </p>

        <p
          className="
            text-[0.68rem]
            leading-4
            text-[#0A1D2F]/58
            dark:text-white/54
          "
        >
          {description}
        </p>
      </div>

      <ArrowRight
        className="h-3 w-3"
        style={{ color: accent }}
      />
    </div>
  );
}