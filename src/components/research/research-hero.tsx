import Link from "next/link";
import {
  ArrowDown,
  CircleDot,
  Search,
} from "lucide-react";

const researchLogic = [
  {
    number: "01",
    label: "Observe",
    description: "Notice what is changing.",
    accent: "#2563EB",
  },
  {
    number: "02",
    label: "Question",
    description: "Challenge what we assume.",
    accent: "#A855F7",
  },
  {
    number: "03",
    label: "Understand",
    description: "Follow what the evidence supports.",
    accent: "#22D3EE",
  },
] as const;

export function ResearchHero() {
  return (
    <section
      id="research-hero"
      className="
        relative
        overflow-hidden
        border-b
        border-[#0A1D2F]/[0.07]
        bg-[#F8FAFC]
        pt-24
        dark:border-white/[0.07]
        dark:bg-[#0D1117]
        sm:pt-28
        lg:pt-30
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
              "radial-gradient(circle at 78% 38%, rgba(34,211,238,.07), transparent 27%), radial-gradient(circle at 7% 20%, rgba(37,99,235,.045), transparent 28%), radial-gradient(circle at 55% 100%, rgba(168,85,247,.025), transparent 30%)",
          }}
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.055]
            dark:opacity-[0.04]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.1) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 92%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 92%)",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        <div
          className="
            grid
            gap-10
            py-12
            sm:py-14
            lg:min-h-[32rem]
            lg:grid-cols-[0.95fr_1.05fr]
            lg:items-center
            lg:gap-16
            lg:py-16
          "
        >
          {/* Message */}
          <div className="relative z-10 max-w-[720px]">
            <div className="flex items-center gap-3">
              <span
                className="
                  font-mono
                  text-[0.46rem]
                  text-[#2563EB]
                  dark:text-[#60A5FA]
                "
              >
                01
              </span>

              <span className="h-px w-7 bg-[#2563EB]/35" />

              <div className="flex items-center gap-2">
                <Search
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
                    tracking-[0.23em]
                    text-[#2563EB]
                    dark:text-[#60A5FA]
                  "
                >
                  Evolvaer Research
                </p>
              </div>
            </div>

            <h1
              className="
                mt-6
                max-w-[720px]
                text-[clamp(2.8rem,5.4vw,4.55rem)]
                font-semibold
                leading-[0.96]
                tracking-[-0.052em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Questions worth{" "}
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
                investigating.
              </span>
            </h1>

            <p
              className="
                mt-6
                max-w-[590px]
                text-[0.92rem]
                leading-7
                text-[#0A1D2F]/72
                dark:text-white/70
                sm:text-[0.98rem]
              "
            >
              We investigate emerging technologies, changing
              systems and meaningful problems to understand what
              is possible, what matters and what may be worth
              building.
            </p>

            <Link
              href="#research-areas"
              className="
                group
                mt-7
                inline-flex
                min-h-11
                items-center
                justify-center
                gap-2.5
                rounded-full
                bg-[#2563EB]
                px-5
                text-[0.75rem]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#1D4ED8]
                hover:shadow-[0_10px_28px_rgba(37,99,235,.18)]
              "
            >
              Explore our research

              <ArrowDown
                className="
                  h-3.5
                  w-3.5
                  transition-transform
                  duration-300
                  group-hover:translate-y-0.5
                "
              />
            </Link>
          </div>

          {/* Research field */}
          <div
            aria-hidden="true"
            className="
              relative
              hidden
              min-h-[25rem]
              lg:block
            "
          >
            {/* Outer field */}
            <div
              className="
                absolute
                inset-[6%]
                rounded-[2rem]
                border
                border-[#0A1D2F]/[0.07]
                bg-white/[0.28]
                dark:border-white/[0.08]
                dark:bg-white/[0.018]
              "
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 52% 48%, rgba(34,211,238,.07), transparent 12%), radial-gradient(circle at 52% 48%, transparent 0, transparent 28%, rgba(37,99,235,.025) 29%, transparent 30%)",
                }}
              />

              {/* Crosshair */}
              <span
                className="
                  absolute
                  left-1/2
                  top-[14%]
                  h-[72%]
                  w-px
                  -translate-x-1/2
                  bg-gradient-to-b
                  from-transparent
                  via-[#22D3EE]/15
                  to-transparent
                "
              />

              <span
                className="
                  absolute
                  left-[14%]
                  top-1/2
                  h-px
                  w-[72%]
                  -translate-y-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-[#22D3EE]/15
                  to-transparent
                "
              />

              {/* Centre observation */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                "
              >
                <div
                  className="
                    relative
                    flex
                    h-28
                    w-28
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#22D3EE]/10
                  "
                >
                  <span
                    className="
                      absolute
                      h-20
                      w-20
                      rounded-full
                      border
                      border-[#2563EB]/10
                    "
                  />

                  <span
                    className="
                      absolute
                      h-11
                      w-11
                      rounded-full
                      border
                      border-[#A855F7]/12
                    "
                  />

                  <span
                    className="
                      relative
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-[#22D3EE]
                      shadow-[0_0_18px_rgba(34,211,238,.45)]
                    "
                  />
                </div>
              </div>

              <div className="absolute left-5 top-5">
                <div className="flex items-center gap-2">
                  <CircleDot className="h-3 w-3 text-[#22D3EE]" />

                  <span
                    className="
                      font-mono
                      text-[0.43rem]
                      uppercase
                      tracking-[0.13em]
                      text-[#0A1D2F]/50
                      dark:text-white/46
                    "
                  >
                    Open question
                  </span>
                </div>
              </div>

              <span
                className="
                  absolute
                  right-5
                  top-5
                  font-mono
                  text-[0.4rem]
                  uppercase
                  tracking-[0.12em]
                  text-[#0A1D2F]/35
                  dark:text-white/32
                "
              >
                Evidence / Unresolved
              </span>

              {/* Research logic */}
              <div
                className="
                  absolute
                  inset-x-5
                  bottom-5
                  grid
                  grid-cols-3
                  overflow-hidden
                  rounded-[0.9rem]
                  border
                  border-[#0A1D2F]/[0.07]
                  bg-white/60
                  backdrop-blur-md
                  dark:border-white/[0.08]
                  dark:bg-[#0D1117]/70
                "
              >
                {researchLogic.map((item, index) => (
                  <div
                    key={item.number}
                    className={`
                      px-4
                      py-3.5
                      ${
                        index !== researchLogic.length - 1
                          ? "border-r border-[#0A1D2F]/[0.07] dark:border-white/[0.07]"
                          : ""
                      }
                    `}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="font-mono text-[0.4rem]"
                        style={{
                          color: item.accent,
                        }}
                      >
                        {item.number}
                      </span>

                      <span
                        className="
                          text-[0.58rem]
                          font-semibold
                          text-[#0A1D2F]
                          dark:text-white
                        "
                      >
                        {item.label}
                      </span>
                    </div>

                    <p
                      className="
                        mt-1.5
                        text-[0.5rem]
                        leading-4
                        text-[#0A1D2F]/55
                        dark:text-white/50
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Field coordinates */}
            <span
              className="
                absolute
                right-[2%]
                top-[4%]
                font-mono
                text-[0.4rem]
                tracking-[0.12em]
                text-[#22D3EE]/70
              "
            >
              R / 001
            </span>

            <span
              className="
                absolute
                bottom-[4%]
                left-[3%]
                font-mono
                text-[0.4rem]
                uppercase
                tracking-[0.12em]
                text-[#0A1D2F]/30
                dark:text-white/28
              "
            >
              Observe → Question → Understand
            </span>
          </div>
        </div>
      </div>
      <div
  className="
    mt-5
    flex
    max-w-[580px]
    items-start
    gap-3
    border-t
    border-[#0A1D2F]/[0.08]
    pt-4
    dark:border-white/[0.08]
  "
>
  <span
    className="
      mt-[0.45rem]
      h-1.5
      w-1.5
      shrink-0
      rounded-full
      bg-[#22D3EE]
      shadow-[0_0_7px_rgba(34,211,238,.4)]
    "
  />

  <p
    className="
      text-[0.72rem]
      leading-5
      text-[#0A1D2F]/60
      dark:text-white/57
    "
  >
    Research is not there to prove an idea right. It helps us
    understand what is true enough to act on.
  </p>
</div>
    </section>
  );
}