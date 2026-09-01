import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CircleDot,
  FlaskConical,
  Lightbulb,
  Sparkles,
  Users,
} from "lucide-react";

const routes = [
  {
    number: "01",
    eyebrow: "Products & companies",
    title: "Ventures",
    description:
      "See the products and ventures Evolvaer is developing from opportunities we believe deserve to become something real.",
    href: "/ventures",
    action: "Explore ventures",
    icon: BriefcaseBusiness,
    accent: "#2563EB",
  },
  {
    number: "02",
    eyebrow: "Questions & investigation",
    title: "Research",
    description:
      "Explore the questions, technologies and areas of investigation shaping how we understand emerging possibilities.",
    href: "/research",
    action: "Explore research",
    icon: FlaskConical,
    accent: "#A855F7",
  },
  {
    number: "03",
    eyebrow: "People & contribution",
    title: "Careers",
    description:
      "Learn how Evolvaer thinks about people, collaboration, growth and opportunities to contribute to what comes next.",
    href: "/careers",
    action: "Explore careers",
    icon: Users,
    accent: "#22D3EE",
  },
  {
    number: "04",
    eyebrow: "Capabilities & process",
    title: "What we do",
    description:
      "Understand how Evolvaer moves from exploration and research through engineering, building, scale and impact.",
    href: "/what-we-do",
    action: "See how we work",
    icon: Lightbulb,
    accent: "#10B981",
  },
];

export function ContactRoutes() {
  return (
    <section
      id="contact-routes"
      className="relative overflow-x-clip border-t border-[#0A1D2F]/[0.06] bg-white/[0.5] py-24 backdrop-blur-[2px] dark:border-white/[0.06] dark:bg-[#0D1117]/[0.5] sm:py-28 lg:py-32"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.15) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          }}
        />

        <div className="absolute -left-44 top-[18%] h-[30rem] w-[30rem] rounded-full bg-[#22D3EE]/[0.025] blur-[170px] dark:bg-[#22D3EE]/[0.035]" />

        <div className="absolute right-[-12rem] bottom-[12%] h-[32rem] w-[32rem] rounded-full bg-[#A855F7]/[0.025] blur-[175px] dark:bg-[#A855F7]/[0.035]" />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.5rem] text-[#A855F7]">
                04
              </span>

              <span className="h-px w-8 bg-[#A855F7]/40" />

              <div className="flex items-center gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-[#22D3EE]" />

                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#2563EB] dark:text-[#60A5FA]">
                  Follow the signal
                </p>
              </div>
            </div>

            <h2 className="mt-6 max-w-[650px] text-[2.55rem] font-semibold leading-[1.02] tracking-[-0.045em] text-[#0A1D2F] dark:text-white sm:text-[3.2rem] lg:text-[3.8rem]">
              Already know what
              <br />
              you&apos;re looking for?
            </h2>
          </div>

          <div className="lg:pt-9">
            <p className="max-w-[680px] text-lg leading-8 text-[#0A1D2F]/56 dark:text-white/52">
              Contact is one way into Evolvaer. If you
              already know which part of our work you want
              to understand, you can go directly there.
            </p>

            <p className="mt-5 max-w-[620px] text-sm leading-7 text-[#0A1D2F]/39 dark:text-white/35">
              Research, ventures, careers and our operating
              model each provide a different route into
              what we are building.
            </p>
          </div>
        </div>

        {/* =====================================================
            ROUTING FIELD
        ===================================================== */}

        <div className="mt-16 grid gap-px overflow-hidden border-y border-[#0A1D2F]/[0.075] bg-[#0A1D2F]/[0.05] dark:border-white/[0.075] dark:bg-white/[0.05] lg:grid-cols-[0.64fr_1.36fr]">
          {/* VISUAL ROUTER */}

          <div className="relative min-h-[32rem] overflow-hidden bg-[#0A1D2F]/[0.96] p-7 text-white sm:p-9 lg:min-h-[40rem]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
                  backgroundSize: "58px 58px",
                }}
              />

              <div className="absolute -left-32 top-[-6rem] h-[24rem] w-[24rem] rounded-full bg-[#2563EB]/14 blur-[130px]" />

              <div className="absolute bottom-[-8rem] right-[-7rem] h-[25rem] w-[25rem] rounded-full bg-[#A855F7]/10 blur-[140px]" />
            </div>

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-4 w-4 text-[#22D3EE]" />

                  <span className="text-[0.48rem] font-semibold uppercase tracking-[0.18em] text-white/37">
                    Routing field
                  </span>
                </div>

                <span className="font-mono text-[0.4rem] uppercase tracking-[0.13em] text-[#22D3EE]/65">
                  04 destinations
                </span>
              </div>

              <div className="my-auto py-12">
                <RouteDiagram />
              </div>

              <div className="flex items-center justify-between border-t border-white/[0.08] pt-5">
                <span className="font-mono text-[0.4rem] uppercase tracking-[0.13em] text-white/23">
                  Source / Contact
                </span>

                <span className="font-mono text-[0.4rem] uppercase tracking-[0.13em] text-[#10B981]/70">
                  Routes active
                </span>
              </div>
            </div>
          </div>

          {/* ROUTE LIST */}

          <div className="bg-white/[0.6] backdrop-blur-xl dark:bg-[#0D1117]/[0.64]">
            {routes.map((route) => {
              const Icon = route.icon;

              return (
                <Link
                  key={route.title}
                  href={route.href}
                  className="group relative grid gap-6 border-b border-[#0A1D2F]/[0.07] px-6 py-8 transition-colors duration-300 last:border-b-0 hover:bg-white/[0.68] dark:border-white/[0.07] dark:hover:bg-white/[0.03] sm:px-8 lg:grid-cols-[0.12fr_0.17fr_1fr] lg:items-center lg:px-9 lg:py-9"
                >
                  <span
                    className="font-mono text-[0.44rem]"
                    style={{
                      color: route.accent,
                    }}
                  >
                    {route.number}
                  </span>

                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 group-hover:scale-105"
                    style={{
                      borderColor: `${route.accent}25`,
                      backgroundColor: `${route.accent}08`,
                    }}
                  >
                    <Icon
                      className="h-4 w-4"
                      style={{
                        color: route.accent,
                      }}
                    />
                  </div>

                  <div>
                    <p className="text-[0.46rem] font-semibold uppercase tracking-[0.16em] text-[#0A1D2F]/30 dark:text-white/26">
                      {route.eyebrow}
                    </p>

                    <div className="mt-2 flex items-center justify-between gap-6">
                      <h3 className="text-[1.55rem] font-semibold tracking-[-0.035em] text-[#0A1D2F] dark:text-white sm:text-[1.75rem]">
                        {route.title}
                      </h3>

                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        style={{
                          color: route.accent,
                        }}
                      />
                    </div>

                    <p className="mt-3 max-w-[650px] text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
                      {route.description}
                    </p>

                    <div className="mt-5 flex items-center gap-3">
                      <span
                        className="h-px w-6 transition-all duration-300 group-hover:w-10"
                        style={{
                          backgroundColor: `${route.accent}55`,
                        }}
                      />

                      <span
                        className="text-[0.47rem] font-semibold uppercase tracking-[0.14em]"
                        style={{
                          color: route.accent,
                        }}
                      >
                        {route.action}
                      </span>
                    </div>
                  </div>

                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-px origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100"
                    style={{
                      backgroundColor: route.accent,
                    }}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            GENERAL ROUTE
        ===================================================== */}

        <div className="mt-12 grid gap-8 border-y border-[#0A1D2F]/[0.075] py-10 dark:border-white/[0.075] lg:grid-cols-[0.36fr_1.64fr] lg:items-center">
          <div>
            <p className="text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-[#10B981]">
              None of the above?
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[720px] text-[1.35rem] font-medium leading-[1.45] tracking-[-0.03em] text-[#0A1D2F]/64 dark:text-white/59 sm:text-[1.55rem]">
              That&apos;s fine. Some of the most useful
              conversations do not fit neatly into a
              category.
            </p>

            <Link
              href="#contact-form"
              className="group inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-[#2563EB] dark:text-[#60A5FA]"
            >
              Send a general enquiry

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>

        {/* =====================================================
            HANDOFF
        ===================================================== */}

        <div className="mt-10 flex items-center justify-between">
          <span className="font-mono text-[0.43rem] uppercase tracking-[0.15em] text-[#0A1D2F]/22 dark:text-white/19">
            Contact / 04
          </span>

          <a
            href="#contact-close"
            className="group inline-flex items-center gap-3 text-[0.5rem] font-semibold uppercase tracking-[0.17em] text-[#0A1D2F]/35 transition-colors hover:text-[#2563EB] dark:text-white/30 dark:hover:text-[#60A5FA]"
          >
            Resolve the signal

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0A1D2F]/[0.08] transition-colors group-hover:border-[#2563EB]/25 dark:border-white/[0.08]">
              <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ROUTE DIAGRAM
============================================================ */

function RouteDiagram() {
  const destinations = [
    {
      label: "Ventures",
      className: "right-0 top-[4%]",
      accent: "#3B82F6",
    },
    {
      label: "Research",
      className: "right-0 top-[32%]",
      accent: "#A855F7",
    },
    {
      label: "Careers",
      className: "right-0 bottom-[32%]",
      accent: "#22D3EE",
    },
    {
      label: "What we do",
      className: "right-0 bottom-[4%]",
      accent: "#10B981",
    },
  ];

  return (
    <div className="relative mx-auto h-[20rem] max-w-[25rem]">
      {/* Source */}

      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <div className="flex items-center gap-3">
          <span className="relative flex h-5 w-5 items-center justify-center">
            <span className="absolute h-5 w-5 rounded-full border border-[#22D3EE]/25" />
            <span className="h-2 w-2 rounded-full bg-[#22D3EE] shadow-[0_0_14px_rgba(34,211,238,.6)]" />
          </span>

          <span className="text-[0.42rem] font-semibold uppercase tracking-[0.12em] text-white/35">
            Contact
          </span>
        </div>
      </div>

      {/* Trunk */}

      <span className="absolute left-[22%] top-1/2 h-px w-[25%] -translate-y-1/2 bg-gradient-to-r from-[#22D3EE]/65 to-[#22D3EE]/25" />

      {/* Router */}

      <div className="absolute left-[49%] top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <span className="absolute h-16 w-16 rounded-full border border-[#22D3EE]/10" />
          <span className="absolute h-10 w-10 rounded-full border border-[#22D3EE]/20" />
          <span className="h-3 w-3 rounded-full bg-[#22D3EE]/80 shadow-[0_0_18px_rgba(34,211,238,.45)]" />
        </div>
      </div>

      {/* Branches */}

      <span className="absolute left-[51%] top-[28%] h-[22%] w-px bg-gradient-to-t from-[#22D3EE]/25 to-[#3B82F6]/35" />

      <span className="absolute left-[51%] bottom-[28%] h-[22%] w-px bg-gradient-to-b from-[#22D3EE]/25 to-[#10B981]/35" />

      <span className="absolute left-[51%] top-[27%] h-px w-[34%] origin-left -rotate-[17deg] bg-gradient-to-r from-[#3B82F6]/35 to-[#3B82F6]/10" />

      <span className="absolute left-[51%] top-[43%] h-px w-[34%] origin-left -rotate-[6deg] bg-gradient-to-r from-[#A855F7]/35 to-[#A855F7]/10" />

      <span className="absolute bottom-[43%] left-[51%] h-px w-[34%] origin-left rotate-[6deg] bg-gradient-to-r from-[#22D3EE]/35 to-[#22D3EE]/10" />

      <span className="absolute bottom-[27%] left-[51%] h-px w-[34%] origin-left rotate-[17deg] bg-gradient-to-r from-[#10B981]/35 to-[#10B981]/10" />

      {destinations.map((destination) => (
        <div
          key={destination.label}
          className={`absolute ${destination.className}`}
        >
          <div className="flex items-center gap-2.5">
            <span
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: destination.accent,
                boxShadow: `0 0 10px ${destination.accent}65`,
              }}
            />

            <span className="text-[0.4rem] font-semibold uppercase tracking-[0.11em] text-white/34">
              {destination.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}