import Image from "next/image";
import {
  CircleDot,
  Compass,
  Lightbulb,
  Network,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Meaningful problems",
    description:
      "Work on problems where better technology can create genuine value, not simply produce more software.",
    icon: Compass,
    accent: "#2563EB",
  },
  {
    number: "02",
    title: "Room to think",
    description:
      "Bring curiosity and judgement to the work. Research and exploration are part of deciding what deserves to be built.",
    icon: Lightbulb,
    accent: "#A855F7",
  },
  {
    number: "03",
    title: "Real contribution",
    description:
      "Shape the problem, product and direction rather than simply receiving a narrow stream of predefined tasks.",
    icon: Network,
    accent: "#22D3EE",
  },
] as const;

export function WhyJoin() {
  return (
    <section
      id="why-join"
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 4% 20%, rgba(37,99,235,.035), transparent 27%), radial-gradient(circle at 96% 85%, rgba(34,211,238,.03), transparent 28%)",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        <div
          className="
            grid
            gap-8
            lg:grid-cols-[0.78fr_1.22fr]
            lg:items-stretch
            lg:gap-12
          "
        >
          {/* IMAGE */}
          <div
            className="
              relative
              min-h-[18rem]
              overflow-hidden
              rounded-[1.25rem]
              sm:min-h-[22rem]
              lg:min-h-0
            "
          >
            <Image
              src="/images/why-evolvaer.jpg"
              alt="People collaborating on technical and creative work"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D2F]/45 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5">
              <p className="text-[0.48rem] font-semibold uppercase tracking-[0.18em] text-white/80">
                Different disciplines.
              </p>

              <p className="mt-1 text-sm font-medium text-white">
                Better questions. Better work.
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[0.46rem] text-[#2563EB] dark:text-[#60A5FA]">
                02
              </span>

              <span className="h-px w-7 bg-[#2563EB]/35" />

              <div className="flex items-center gap-2">
                <CircleDot className="h-3 w-3 text-[#22D3EE]" />

                <p
                  className="
                    text-[0.54rem]
                    font-semibold
                    uppercase
                    tracking-[0.23em]
                    text-[#2563EB]
                    dark:text-[#60A5FA]
                  "
                >
                  Why Evolvaer
                </p>
              </div>
            </div>

            <h2
              className="
                mt-4
                max-w-[620px]
                text-[clamp(2rem,3vw,2.8rem)]
                font-semibold
                leading-[1.04]
                tracking-[-0.04em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Work on things that{" "}
              <span className="text-[#2563EB] dark:text-[#60A5FA]">
                deserve your attention.
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-[610px]
                text-[0.88rem]
                leading-6
                text-[#0A1D2F]/70
                dark:text-white/68
                sm:text-[0.93rem]
              "
            >
              We want Evolvaer to be a place where people can
              apply their craft to difficult questions, think
              clearly with others and see how their work
              contributes to something larger.
            </p>

            {/* REASONS */}
            <div
              className="
                mt-7
                divide-y
                divide-[#0A1D2F]/[0.08]
                border-y
                border-[#0A1D2F]/[0.08]
                dark:divide-white/[0.08]
                dark:border-white/[0.08]
              "
            >
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <article
                    key={reason.title}
                    className="
                      group
                      grid
                      gap-3
                      py-5
                      sm:grid-cols-[2.5rem_1fr]
                      sm:gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                      "
                      style={{
                        borderColor: `${reason.accent}30`,
                        backgroundColor: `${reason.accent}0D`,
                      }}
                    >
                      <Icon
                        className="h-3.5 w-3.5"
                        style={{
                          color: reason.accent,
                        }}
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <span
                          className="font-mono text-[0.42rem]"
                          style={{
                            color: reason.accent,
                          }}
                        >
                          {reason.number}
                        </span>

                        <h3
                          className="
                            text-[1.05rem]
                            font-semibold
                            tracking-[-0.025em]
                            text-[#0A1D2F]
                            dark:text-white
                          "
                        >
                          {reason.title}
                        </h3>
                      </div>

                      <p
                        className="
                          mt-1.5
                          max-w-[580px]
                          text-[0.78rem]
                          leading-5
                          text-[#0A1D2F]/68
                          dark:text-white/64
                        "
                      >
                        {reason.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}