import { ArrowDownRight } from "lucide-react";

const evolution = [
  "Explore what is changing",
  "Understand what matters",
  "Test what is possible",
  "Engineer what is useful",
  "Build what deserves to exist",
];

export function AboutEvolution() {
  return (
    <section className="relative overflow-hidden py-24 text-white sm:py-28 lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[#07111D]/[0.84] dark:bg-[#050A11]/[0.82]" />

        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                circle at 90% 8%,
                rgba(59,130,246,0.11),
                transparent 30%
              ),
              radial-gradient(
                circle at 8% 92%,
                rgba(34,211,238,0.075),
                transparent 28%
              ),
              radial-gradient(
                circle at 48% 22%,
                rgba(168,85,247,0.06),
                transparent 24%
              )
            `,
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(96,165,250,.16) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(96,165,250,.16) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "92px 92px",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        <div className="grid gap-16 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#22D3EE]" />

              <span className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-white/38">
                Evolution by design
              </span>
            </div>

            <h2 className="mt-8 max-w-3xl text-[clamp(3.2rem,5vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
              Progress is a
              <br />
              process of{" "}

              <span className="bg-gradient-to-r from-[#60A5FA] via-[#22D3EE] to-[#C084FC] bg-clip-text text-transparent">
                evolution.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/50">
              Evolvaer is built around continuous exploration:
              ideas evolve through evidence, experimentation,
              engineering and use. We are comfortable changing
              direction when what we learn demands it.
            </p>
          </div>

          <div>
            <div className="border-t border-white/[0.09]">
              {evolution.map((item, index) => (
                <div
                  key={item}
                  className="group grid min-h-28 grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-white/[0.08] py-5 sm:gap-7"
                >
                  <span className="text-xs font-semibold tracking-[0.18em] text-[#22D3EE]/70">
                    0{index + 1}
                  </span>

                  <span className="text-xl font-semibold tracking-[-0.025em] text-white/76 transition-colors duration-300 group-hover:text-white sm:text-2xl">
                    {item}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/25 transition-[border-color,color,transform] duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:border-[#22D3EE]/30 group-hover:text-[#22D3EE]">
                    <ArrowDownRight className="h-4 w-4" />
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-white/[0.08] pt-5">
              <span className="text-[0.57rem] font-semibold uppercase tracking-[0.24em] text-white/24">
                Fixed destination
              </span>

              <span className="text-[0.57rem] font-semibold uppercase tracking-[0.24em] text-[#22D3EE]/55">
                None
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}