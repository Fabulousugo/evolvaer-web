import Link from "next/link";
import {
  ArrowRight,
  CircleDot,
  Clock3,
  MapPin,
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
 * Add confirmed vacancies here.
 *
 * Example:
 *
 * {
 *   id: "software-engineer",
 *   title: "Software Engineer",
 *   discipline: "Engineering",
 *   location: "Manchester, UK",
 *   type: "Full-time",
 *   description:
 *     "Help design and build technology across Evolvaer products and ventures.",
 *   href: "/careers/software-engineer",
 *   accent: "#2563EB",
 * }
 */

const openRoles: OpenRole[] = [];

export function OpenRoles() {
  const hasOpenRoles = openRoles.length > 0;

  return (
    <section
      id="open-roles"
      className="
        relative
        overflow-hidden
        border-t
        border-[#0A1D2F]/[0.07]
        bg-[#F8FAFC]
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
              "radial-gradient(circle at 94% 12%, rgba(34,211,238,.035), transparent 27%), radial-gradient(circle at 5% 90%, rgba(37,99,235,.025), transparent 25%)",
          }}
        />
      </div>

      <div className="evolvaer-container relative z-10">
        {/* Header */}
        <div
          className="
            grid
            gap-5
            lg:grid-cols-[0.88fr_1.12fr]
            lg:items-end
            lg:gap-12
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[0.46rem] text-[#22D3EE]">
                06
              </span>

              <span className="h-px w-7 bg-[#22D3EE]/35" />

              <div className="flex items-center gap-2">
                <CircleDot className="h-3 w-3 text-[#22D3EE]" />

                <p
                  className="
                    text-[0.54rem]
                    font-semibold
                    uppercase
                    tracking-[0.23em]
                    text-[#22D3EE]
                  "
                >
                  Opportunities
                </p>
              </div>
            </div>

            <h2
              className="
                mt-4
                max-w-[560px]
                text-[clamp(1.9rem,2.8vw,2.55rem)]
                font-semibold
                leading-[1.04]
                tracking-[-0.04em]
                text-[#0A1D2F]
                dark:text-white
              "
            >
              Find where your{" "}
              <span className="text-[#22D3EE]">
                capability fits.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-[610px]
              text-[0.88rem]
              leading-6
              text-[#0A1D2F]/70
              dark:text-white/68
              sm:text-[0.92rem]
            "
          >
            As Evolvaer grows, opportunities will emerge across
            engineering, research, product, design and commercial
            work. Confirmed roles will be published here.
          </p>
        </div>

        {/* Status */}
        <div
          className="
            mt-7
            flex
            flex-wrap
            items-center
            justify-between
            gap-4
            border-y
            border-[#0A1D2F]/[0.08]
            py-3.5
            dark:border-white/[0.08]
          "
        >
          <div className="flex items-center gap-2.5">
            <span
              className={`
                h-1.5
                w-1.5
                rounded-full
                ${
                  hasOpenRoles
                    ? "bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,.45)]"
                    : "bg-[#64748B]/60"
                }
              `}
            />

            <p
              className="
                text-[0.48rem]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#0A1D2F]/60
                dark:text-white/56
              "
            >
              {hasOpenRoles
                ? `${openRoles.length} ${
                    openRoles.length === 1
                      ? "opportunity"
                      : "opportunities"
                  } currently open`
                : "No opportunities currently open"}
            </p>
          </div>

          <span
            className="
              font-mono
              text-[0.42rem]
              uppercase
              tracking-[0.12em]
              text-[#0A1D2F]/45
              dark:text-white/40
            "
          >
            Updated as roles become available
          </span>
        </div>

        {/* Roles */}
        {hasOpenRoles ? (
          <div
            className="
              overflow-hidden
              border-b
              border-[#0A1D2F]/[0.08]
              dark:border-white/[0.08]
            "
          >
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
      </div>
    </section>
  );
}

/* ============================================================
   EMPTY STATE
============================================================ */

function EmptyRolesState() {
  return (
    <div
      className="
        grid
        gap-5
        border-b
        border-[#0A1D2F]/[0.08]
        py-8
        dark:border-white/[0.08]
        sm:grid-cols-[1fr_auto]
        sm:items-center
        sm:gap-10
        sm:py-9
      "
    >
      <div>
        <div className="flex items-center gap-2.5">
          <Clock3 className="h-3.5 w-3.5 text-[#64748B]" />

          <span
            className="
              text-[0.48rem]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-[#64748B]
            "
          >
            Nothing published right now
          </span>
        </div>

        <h3
          className="
            mt-3
            max-w-[620px]
            text-[clamp(1.25rem,2vw,1.6rem)]
            font-semibold
            leading-[1.15]
            tracking-[-0.035em]
            text-[#0A1D2F]
            dark:text-white
          "
        >
          The next opportunity is still taking shape.
        </h3>

        <p
          className="
            mt-3
            max-w-[620px]
            text-[0.8rem]
            leading-5
            text-[#0A1D2F]/68
            dark:text-white/64
          "
        >
          There are no roles currently open. When that changes,
          you&apos;ll find the scope, expectations and application
          details here.
        </p>
      </div>

      <a
        href="mailto:info@evolvaer.com?subject=Careers%20at%20Evolvaer"
        className="
          group
          inline-flex
          w-fit
          items-center
          gap-2
          rounded-full
          border
          border-[#0A1D2F]/[0.12]
          px-4
          py-2.5
          text-[0.5rem]
          font-semibold
          uppercase
          tracking-[0.13em]
          text-[#0A1D2F]
          transition-colors
          hover:border-[#2563EB]/30
          hover:text-[#2563EB]
          dark:border-white/[0.12]
          dark:text-white
          dark:hover:border-[#60A5FA]/30
          dark:hover:text-[#60A5FA]
        "
      >
        Introduce yourself

        <ArrowRight
          className="
            h-3
            w-3
            transition-transform
            duration-300
            group-hover:translate-x-0.5
          "
        />
      </a>
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
      className="
        group
        grid
        gap-4
        border-t
        border-[#0A1D2F]/[0.07]
        py-5
        transition-colors
        first:border-t-0
        hover:bg-white/60
        dark:border-white/[0.07]
        dark:hover:bg-white/[0.025]
        sm:px-4
        lg:grid-cols-[2rem_1fr_auto_auto]
        lg:items-center
        lg:gap-6
      "
    >
      <span
        className="font-mono text-[0.44rem]"
        style={{
          color: role.accent,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div>
        <p
          className="
            text-[0.46rem]
            font-semibold
            uppercase
            tracking-[0.13em]
            text-[#0A1D2F]/55
            dark:text-white/50
          "
        >
          {role.discipline}
        </p>

        <h3
          className="
            mt-1
            text-[1.05rem]
            font-semibold
            tracking-[-0.025em]
            text-[#0A1D2F]
            dark:text-white
          "
        >
          {role.title}
        </h3>

        <p
          className="
            mt-1.5
            max-w-[570px]
            text-[0.75rem]
            leading-5
            text-[#0A1D2F]/65
            dark:text-white/60
          "
        >
          {role.description}
        </p>
      </div>

      <div
        className="
          flex
          flex-wrap
          gap-x-4
          gap-y-2
          lg:justify-end
        "
      >
        <span
          className="
            flex
            items-center
            gap-1.5
            text-[0.68rem]
            text-[#0A1D2F]/60
            dark:text-white/56
          "
        >
          <MapPin className="h-3 w-3" />
          {role.location}
        </span>

        <span
          className="
            flex
            items-center
            gap-1.5
            text-[0.68rem]
            text-[#0A1D2F]/60
            dark:text-white/56
          "
        >
          <Clock3 className="h-3 w-3" />
          {role.type}
        </span>
      </div>

      <div
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          border
          transition-transform
          duration-300
          group-hover:translate-x-0.5
        "
        style={{
          borderColor: `${role.accent}30`,
          color: role.accent,
        }}
      >
        <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </Link>
  );
}