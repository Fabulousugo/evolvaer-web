import {
  BrainCircuit,
  FlaskConical,
  Layers3,
  Rocket,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    label: "Research",
    title: "Understand.",
    description:
      "Investigate the problem, users, constraints, technology and opportunity before significant commitment.",
    contribution:
      "Problem understanding · Technical feasibility · Opportunity validation",
    icon: FlaskConical,
    accent: "#7C3AED",
  },
  {
    number: "02",
    label: "Technology",
    title: "Engineer.",
    description:
      "Build the technical foundations required to turn validated ideas into reliable, adaptable systems.",
    contribution:
      "Architecture · Software · AI & data · Integrations",
    icon: BrainCircuit,
    accent: "#2563EB",
  },
  {
    number: "03",
    label: "Product",
    title: "Shape.",
    description:
      "Turn technical capability into a coherent product experience built around real people and situations.",
    contribution:
      "Product thinking · Experience · Prototyping · Iteration",
    icon: Layers3,
    accent: "#22D3EE",
  },
  {
    number: "04",
    label: "Venture",
    title: "Grow.",
    description:
      "Develop the commercial and operating foundations around products and opportunities that continue to prove themselves.",
    contribution:
      "Venture design · Commercial model · Operations · Growth readiness",
    icon: Rocket,
    accent: "#10B981",
  },
] as const;

export function VentureCapabilities() {
  return (
    <section
      id="venture-capabilities"
      className="
        relative
        overflow-hidden
        border-b
        border-[#0A1D2F]/[0.07]
        bg-[#F8FAFC]
        py-14
        dark:border-white/[0.07]
        dark:bg-[#0D1117]
        sm:py-16
        lg:py-20
      "
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 8% 30%, rgba(124,58,237,.035), transparent 27%), radial-gradient(circle at 92% 68%, rgba(34,211,238,.035), transparent 29%)",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div
          className="
            grid
            gap-7
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-end
            lg:gap-12
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <span
                className="
                  font-mono
                  text-[0.45rem]
                  text-[#22D3EE]
                "
              >
                04
              </span>

              <span className="h-px w-7 bg-[#22D3EE]/35" />

              <p
                className="
                  text-[0.52rem]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#0891B2]
                  dark:text-[#67E8F9]
                "
              >
                Evolvaer capability
              </p>
            </div>

            <h2
              className="
                mt-4
                max-w-[590px]
                text-[clamp(1.9rem,3vw,2.6rem)]
                font-semibold
                leading-[1]
                tracking-[-0.045em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Capability around the{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-[#7C3AED]
                  via-[#2563EB]
                  to-[#22D3EE]
                  bg-clip-text
                  text-transparent
                  dark:from-[#C084FC]
                  dark:via-[#60A5FA]
                  dark:to-[#67E8F9]
                "
              >
                opportunity.
              </span>
            </h2>
          </div>

          <div className="max-w-[570px] lg:justify-self-end">
            <p
              className="
                text-[0.84rem]
                leading-7
                text-[#0A1D2F]/67
                dark:text-white/64
                sm:text-[0.9rem]
              "
            >
              Evolvaer brings research, engineering, product and
              venture-building capability around the same
              opportunity — from first investigation to something
              that can operate and grow.
            </p>

            <p
              className="
                mt-3
                text-[0.69rem]
                leading-5
                text-[#0A1D2F]/51
                dark:text-white/48
              "
            >
              The disciplines are connected rather than treated as
              isolated hand-offs.
            </p>
          </div>
        </div>

        {/* =====================================================
            CAPABILITY SYSTEM
        ===================================================== */}

        <div
          className="
            relative
            mt-9
            overflow-hidden
            rounded-[1.1rem]
            border
            border-[#0A1D2F]/[0.08]
            dark:border-white/[0.08]
            lg:mt-11
          "
        >
          {/* desktop connector */}

          <div
            aria-hidden="true"
            className="
              absolute
              left-[12.5%]
              right-[12.5%]
              top-[3.15rem]
              hidden
              h-px
              bg-gradient-to-r
              from-[#7C3AED]/25
              via-[#2563EB]/25
              via-50%
              to-[#10B981]/25
              lg:block
            "
          />

          <div className="grid lg:grid-cols-4">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.label}
                  className={`
                    relative
                    p-5
                    sm:p-6
                    ${
                      index < capabilities.length - 1
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
                  {/* icon + number */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      justify-between
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
                        bg-[#F8FAFC]
                        dark:bg-[#0D1117]
                      "
                      style={{
                        color: capability.accent,
                        borderColor: `${capability.accent}32`,
                      }}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </div>

                    <span
                      className="font-mono text-[0.4rem]"
                      style={{
                        color: capability.accent,
                      }}
                    >
                      {capability.number}
                    </span>
                  </div>

                  {/* content */}

                  <p
                    className="
                      mt-5
                      text-[0.43rem]
                      font-semibold
                      uppercase
                      tracking-[0.17em]
                    "
                    style={{
                      color: capability.accent,
                    }}
                  >
                    {capability.label}
                  </p>

                  <h3
                    className="
                      mt-2
                      text-[0.95rem]
                      font-semibold
                      tracking-[-0.025em]
                      text-[#0A1D2F]
                      dark:text-white
                    "
                  >
                    {capability.title}
                  </h3>

                  <p
                    className="
                      mt-2.5
                      text-[0.66rem]
                      leading-5
                      text-[#0A1D2F]/57
                      dark:text-white/54
                    "
                  >
                    {capability.description}
                  </p>

                  <div
                    className="
                      mt-5
                      border-t
                      border-[#0A1D2F]/[0.07]
                      pt-3.5
                      dark:border-white/[0.07]
                    "
                  >
                    <p
                      className="
                        text-[0.48rem]
                        leading-[1.15rem]
                        text-[#0A1D2F]/43
                        dark:text-white/40
                      "
                    >
                      {capability.contribution}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            CONNECTED LEARNING
        ===================================================== */}

        <div
          className="
            mt-6
            grid
            gap-4
            border-y
            border-[#0A1D2F]/[0.08]
            py-5
            dark:border-white/[0.08]
            md:grid-cols-[0.48fr_1.52fr]
            md:items-center
            md:gap-10
          "
        >
          <div>
            <p
              className="
                text-[0.42rem]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#7C3AED]
                dark:text-[#C084FC]
              "
            >
              Connected learning
            </p>

            <h3
              className="
                mt-1.5
                text-[0.95rem]
                font-semibold
                tracking-[-0.025em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Learning moves both ways.
            </h3>
          </div>

          <p
            className="
              max-w-[760px]
              text-[0.68rem]
              leading-5
              text-[#0A1D2F]/57
              dark:text-white/54
            "
          >
            Research can change the product. Product learning can
            change the engineering. Technical constraints can
            reshape the venture model, while commercial learning
            can create new research questions.
          </p>
        </div>
      </div>
    </section>
  );
}