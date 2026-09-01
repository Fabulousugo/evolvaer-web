"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CircleDot,
  Clock3,
  MapPin,
  Orbit,
  Send,
  Sparkles,
} from "lucide-react";

type OpenRole = {
  id: string;
  title: string;
  discipline: string;
  location: string;
  type: string;
  description: string;
  href: string;
  accent: string;
};

/*
 * Add real vacancies here when they are ready to publish.
 *
 * Example structure:
 *
 * {
 *   id: "software-engineer",
 *   title: "Software Engineer",
 *   discipline: "Engineering",
 *   location: "Manchester, UK",
 *   type: "Full-time",
 *   description: "...",
 *   href: "/careers/software-engineer",
 *   accent: "#2563EB",
 * }
 *
 * Do not add a role until its details are confirmed.
 */
const openRoles: OpenRole[] = [];

export function OpenRoles() {
  const hasOpenRoles = openRoles.length > 0;

  return (
    <section
      id="open-roles"
      className="relative overflow-x-clip border-t border-[#0A1D2F]/[0.06] bg-white/[0.46] py-24 backdrop-blur-[2px] dark:border-white/[0.06] dark:bg-[#0D1117]/[0.48] sm:py-28 lg:py-32"
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.024]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.18) 1px, transparent 1px)",
            backgroundSize: "68px 68px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          }}
        />

        <div className="absolute right-[-12rem] top-[8%] h-[32rem] w-[32rem] rounded-full bg-[#22D3EE]/[0.025] blur-[160px] dark:bg-[#22D3EE]/[0.04]" />

        <div className="absolute bottom-[5%] left-[-12rem] h-[30rem] w-[30rem] rounded-full bg-[#2563EB]/[0.025] blur-[160px] dark:bg-[#3B82F6]/[0.04]" />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.5rem] text-[#22D3EE]">
                06
              </span>

              <span className="h-px w-8 bg-[#22D3EE]/35" />

              <div className="flex items-center gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-[#22D3EE]" />

                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#22D3EE]">
                  Opportunities
                </p>
              </div>
            </div>

            <h2 className="mt-6 max-w-[680px] text-[2.55rem] font-semibold leading-[1.02] tracking-[-0.045em] text-[#0A1D2F] dark:text-white sm:text-[3.2rem] lg:text-[3.8rem]">
              Find where your
              <br />
              <span className="text-[#22D3EE]">
                capability fits.
              </span>
            </h2>
          </div>

          <div className="lg:pt-10">
            <p className="max-w-[700px] text-lg leading-8 text-[#0A1D2F]/58 dark:text-white/54">
              As Evolvaer grows, different problems will
              require different combinations of technical,
              research, product, design and commercial
              capability.
            </p>

            <p className="mt-5 max-w-[650px] text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
              Published opportunities will appear here with
              the information needed to understand the work
              before deciding whether to apply.
            </p>
          </div>
        </div>

        {/* =====================================================
            ROLE STATUS
        ===================================================== */}

        <div className="mt-16 flex flex-wrap items-center justify-between gap-5 border-y border-[#0A1D2F]/[0.08] py-5 dark:border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span
              className={`h-2 w-2 rounded-full ${
                hasOpenRoles
                  ? "bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,.5)]"
                  : "bg-[#64748B]/50"
              }`}
            />

            <p className="text-[0.5rem] font-semibold uppercase tracking-[0.16em] text-[#0A1D2F]/38 dark:text-white/33">
              {hasOpenRoles
                ? `${openRoles.length} ${
                    openRoles.length === 1
                      ? "opportunity"
                      : "opportunities"
                  } published`
                : "No opportunities currently published"}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Orbit className="h-3.5 w-3.5 text-[#2563EB] dark:text-[#60A5FA]" />

            <span className="font-mono text-[0.43rem] uppercase tracking-[0.13em] text-[#0A1D2F]/25 dark:text-white/22">
              Careers / Live status
            </span>
          </div>
        </div>

        {/* =====================================================
            ROLES / EMPTY STATE
        ===================================================== */}

        {hasOpenRoles ? (
          <div className="border-b border-[#0A1D2F]/[0.08] dark:border-white/[0.08]">
            {openRoles.map((role, index) => (
              <RoleRow
                key={role.id}
                role={role}
                index={index}
              />
            ))}
          </div>
        ) : (
          <EmptyRolesState />
        )}

        {/* =====================================================
            WHAT A ROLE WILL SHOW
        ===================================================== */}

        <div className="mt-16">
          <div className="grid gap-10 lg:grid-cols-[0.58fr_1.42fr]">
            <div>
              <p className="text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-[#2563EB] dark:text-[#60A5FA]">
                Clear by design
              </p>

              <p className="mt-3 max-w-[300px] text-xs leading-6 text-[#0A1D2F]/31 dark:text-white/27">
                An opportunity should tell you enough to
                make an informed decision.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border-y border-[#0A1D2F]/[0.075] bg-[#0A1D2F]/[0.05] dark:border-white/[0.075] dark:bg-white/[0.05] sm:grid-cols-3">
              <RolePrinciple
                number="01"
                title="The problem"
                description="What the role exists to help solve."
                accent="#2563EB"
              />

              <RolePrinciple
                number="02"
                title="The contribution"
                description="What capability and responsibility the work needs."
                accent="#22D3EE"
              />

              <RolePrinciple
                number="03"
                title="The context"
                description="The practical details needed before applying."
                accent="#A855F7"
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            OPPORTUNITY FIELD
        ===================================================== */}

        <div className="mt-16 grid gap-px overflow-hidden border-y border-[#0A1D2F]/[0.075] bg-[#0A1D2F]/[0.05] dark:border-white/[0.075] dark:bg-white/[0.05] lg:grid-cols-[1.12fr_0.88fr]">
          <div className="relative min-h-[28rem] overflow-hidden bg-white/[0.42] p-7 backdrop-blur-xl dark:bg-[#0D1117]/[0.45] sm:p-9">
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-3">
                <Sparkles className="h-4 w-4 text-[#22D3EE]" />

                <p className="text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-[#0A1D2F]/36 dark:text-white/31">
                  Opportunity field
                </p>
              </div>

              <span className="font-mono text-[0.42rem] uppercase tracking-[0.13em] text-[#22D3EE]">
                Open paths
              </span>
            </div>

            <div className="mt-8">
              <OpportunityMap />
            </div>
          </div>

          <div className="flex flex-col justify-between bg-white/[0.6] p-7 backdrop-blur-xl dark:bg-[#0D1117]/[0.6] sm:p-9">
            <div>
              <div className="flex items-center gap-3">
                <BriefcaseBusiness className="h-4 w-4 text-[#A855F7]" />

                <p className="text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-[#0A1D2F]/36 dark:text-white/31">
                  Beyond job titles
                </p>
              </div>

              <p className="mt-8 max-w-[500px] text-[1.5rem] font-medium leading-[1.4] tracking-[-0.035em] text-[#0A1D2F]/69 dark:text-white/64 sm:text-[1.8rem]">
                The title matters less than{" "}
                <span className="text-[#A855F7]">
                  the problem you can help move forward.
                </span>
              </p>

              <p className="mt-5 max-w-[470px] text-sm leading-7 text-[#0A1D2F]/40 dark:text-white/36">
                As opportunities emerge, we can define them
                around the capability the work actually
                requires rather than forcing every problem
                into a familiar label.
              </p>
            </div>

            <div className="mt-10 border-t border-[#0A1D2F]/[0.07] pt-6 dark:border-white/[0.07]">
              <div className="flex flex-wrap gap-2">
                <CapabilityTag
                  label="Engineering"
                  accent="#2563EB"
                />

                <CapabilityTag
                  label="Research"
                  accent="#22D3EE"
                />

                <CapabilityTag
                  label="Product"
                  accent="#A855F7"
                />

                <CapabilityTag
                  label="Venture"
                  accent="#10B981"
                />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            HANDOFF
        ===================================================== */}

        <div className="mt-16 flex items-center justify-between border-t border-[#0A1D2F]/[0.08] pt-6 dark:border-white/[0.08]">
          <span className="font-mono text-[0.43rem] uppercase tracking-[0.15em] text-[#0A1D2F]/22 dark:text-white/19">
            Careers / 06
          </span>

          <a
            href="#hiring-process"
            className="group inline-flex items-center gap-3 text-[0.5rem] font-semibold uppercase tracking-[0.17em] text-[#0A1D2F]/35 transition-colors hover:text-[#2563EB] dark:text-white/30 dark:hover:text-[#60A5FA]"
          >
            How hiring works

            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   EMPTY STATE
============================================================ */

function EmptyRolesState() {
  return (
    <div className="relative overflow-hidden border-b border-[#0A1D2F]/[0.08] py-16 dark:border-white/[0.08] sm:py-20">
      <div
        aria-hidden="true"
        className="absolute right-[5%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-[#22D3EE]/[0.05]"
      />

      <div
        aria-hidden="true"
        className="absolute right-[11%] top-1/2 h-48 w-48 -translate-y-1/2 rounded-full border border-[#2563EB]/[0.06]"
      />

      <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-center">
        <div>
          <div className="flex items-center gap-3">
            <Clock3 className="h-4 w-4 text-[#64748B]" />

            <span className="text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Nothing published right now
            </span>
          </div>

          <h3 className="mt-5 max-w-[620px] text-[2rem] font-semibold leading-[1.12] tracking-[-0.04em] text-[#0A1D2F] dark:text-white sm:text-[2.5rem]">
            The next opportunity
            <br />
            <span className="text-[#0A1D2F]/30 dark:text-white/28">
              is still taking shape.
            </span>
          </h3>

          <p className="mt-5 max-w-[590px] text-sm leading-7 text-[#0A1D2F]/42 dark:text-white/37">
            There are no roles published here at the
            moment. When that changes, opportunities can be
            listed on this page with their scope,
            expectations and application details.
          </p>
        </div>

        <div className="relative flex min-h-[13rem] items-center justify-center">
          <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-[#22D3EE]/10">
            <div className="absolute h-24 w-24 rounded-full border border-[#2563EB]/10" />

            <div className="absolute h-12 w-12 rounded-full border border-[#A855F7]/12" />

            <span className="h-3 w-3 rounded-full bg-[#64748B]/40" />

            <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#22D3EE]/55 shadow-[0_0_10px_rgba(34,211,238,.35)]" />

            <span className="absolute left-[12%] top-[10%] h-1.5 w-1.5 rounded-full bg-[#2563EB]/50" />

            <span className="absolute bottom-[9%] right-[22%] h-1.5 w-1.5 rounded-full bg-[#A855F7]/50" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   ROLE ROW
============================================================ */

function RoleRow({
  role,
  index,
}: {
  role: OpenRole;
  index: number;
}) {
  return (
    <Link
      href={role.href}
      className="group grid gap-6 border-t border-[#0A1D2F]/[0.07] bg-white/[0.38] px-5 py-7 transition-colors first:border-t-0 hover:bg-white/[0.68] dark:border-white/[0.07] dark:bg-[#0D1117]/[0.4] dark:hover:bg-white/[0.035] sm:px-7 lg:grid-cols-[0.18fr_0.82fr_0.75fr_auto] lg:items-center lg:px-8"
    >
      <span
        className="font-mono text-[0.46rem]"
        style={{
          color: role.accent,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div>
        <p className="text-[0.47rem] font-semibold uppercase tracking-[0.14em] text-[#0A1D2F]/27 dark:text-white/23">
          {role.discipline}
        </p>

        <h3 className="mt-2 text-lg font-semibold tracking-[-0.025em] text-[#0A1D2F] dark:text-white">
          {role.title}
        </h3>

        <p className="mt-2 max-w-[540px] text-xs leading-6 text-[#0A1D2F]/35 dark:text-white/30">
          {role.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-x-5 gap-y-2">
        <span className="flex items-center gap-2 text-xs text-[#0A1D2F]/38 dark:text-white/33">
          <MapPin className="h-3.5 w-3.5" />
          {role.location}
        </span>

        <span className="flex items-center gap-2 text-xs text-[#0A1D2F]/38 dark:text-white/33">
          <Clock3 className="h-3.5 w-3.5" />
          {role.type}
        </span>
      </div>

      <div
        className="flex h-10 w-10 items-center justify-center rounded-full border transition-transform duration-300 group-hover:translate-x-1"
        style={{
          borderColor: `${role.accent}25`,
          color: role.accent,
        }}
      >
        <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
}

/* ============================================================
   ROLE PRINCIPLE
============================================================ */

function RolePrinciple({
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
    <div className="bg-white/[0.52] p-6 backdrop-blur-xl dark:bg-[#0D1117]/[0.54] sm:p-7">
      <div className="flex items-center gap-3">
        <span
          className="font-mono text-[0.43rem]"
          style={{ color: accent }}
        >
          {number}
        </span>

        <span
          className="h-px w-5"
          style={{
            backgroundColor: `${accent}40`,
          }}
        />
      </div>

      <h3 className="mt-5 text-sm font-semibold text-[#0A1D2F] dark:text-white">
        {title}
      </h3>

      <p className="mt-3 text-xs leading-6 text-[#0A1D2F]/35 dark:text-white/30">
        {description}
      </p>
    </div>
  );
}

/* ============================================================
   OPPORTUNITY MAP
============================================================ */

function OpportunityMap() {
  return (
    <div className="relative mx-auto h-[18rem] max-w-[42rem]">
      {/* paths */}

      <OpportunityPath
        className="left-[48%] top-[48%] w-[34%] -rotate-[28deg]"
        accent="#2563EB"
      />

      <OpportunityPath
        className="left-[48%] top-[50%] w-[36%] rotate-[8deg]"
        accent="#22D3EE"
      />

      <OpportunityPath
        className="left-[48%] top-[51%] w-[33%] rotate-[35deg]"
        accent="#A855F7"
      />

      <OpportunityPath
        className="right-[52%] top-[50%] w-[28%] origin-right -rotate-[12deg]"
        accent="#10B981"
      />

      {/* origin */}

      <div className="absolute left-[48%] top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex items-center justify-center">
          <span className="absolute h-20 w-20 rounded-full border border-[#22D3EE]/[0.05]" />

          <span className="absolute h-12 w-12 rounded-full border border-[#22D3EE]/10" />

          <span className="relative h-3.5 w-3.5 rounded-full bg-[#22D3EE] shadow-[0_0_20px_rgba(34,211,238,.5)]" />
        </div>

        <p className="mt-7 -translate-x-[35%] whitespace-nowrap text-[0.44rem] font-semibold uppercase tracking-[0.13em] text-[#0A1D2F]/32 dark:text-white/28">
          Evolvaer
        </p>
      </div>

      <OpportunityNode
        className="right-[5%] top-[12%]"
        label="Engineering"
        accent="#2563EB"
      />

      <OpportunityNode
        className="right-[1%] top-[48%]"
        label="Research"
        accent="#22D3EE"
      />

      <OpportunityNode
        className="bottom-[3%] right-[7%]"
        label="Product"
        accent="#A855F7"
      />

      <OpportunityNode
        className="left-[7%] top-[33%]"
        label="Venture"
        accent="#10B981"
      />
    </div>
  );
}

function OpportunityPath({
  className,
  accent,
}: {
  className: string;
  accent: string;
}) {
  return (
    <span
      className={`absolute h-px origin-left ${className}`}
      style={{
        background: `linear-gradient(90deg, ${accent}55, ${accent}12)`,
      }}
    />
  );
}

function OpportunityNode({
  className,
  label,
  accent,
}: {
  className: string;
  label: string;
  accent: string;
}) {
  return (
    <div className={`absolute ${className}`}>
      <div className="flex items-center gap-3">
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{
            backgroundColor: accent,
            boxShadow: `0 0 13px ${accent}65`,
          }}
        />

        <span className="text-[0.43rem] font-semibold uppercase tracking-[0.12em] text-[#0A1D2F]/32 dark:text-white/28">
          {label}
        </span>
      </div>
    </div>
  );
}

/* ============================================================
   CAPABILITY TAG
============================================================ */

function CapabilityTag({
  label,
  accent,
}: {
  label: string;
  accent: string;
}) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border px-3 py-2"
      style={{
        borderColor: `${accent}20`,
        backgroundColor: `${accent}06`,
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{
          backgroundColor: accent,
        }}
      />

      <span className="text-[0.43rem] font-semibold uppercase tracking-[0.12em] text-[#0A1D2F]/35 dark:text-white/30">
        {label}
      </span>
    </span>
  );
}