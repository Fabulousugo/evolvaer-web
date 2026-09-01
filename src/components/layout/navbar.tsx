"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import {
  useEffect,
  useState,
} from "react";



import { useTheme } from "@/src/components/theme-provider";

const navItems = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "What We Do",
    href: "/what-we-do",
  },
  {
    label: "Ventures",
    href: "/ventures",
  },
  {
    label: "Research",
    href: "/research",
  },
  {
    label: "Careers",
    href: "/careers",
  },
];

export function Navbar() {
  const pathname = usePathname();

  const {
    theme,
    toggleTheme,
  } = useTheme();

  const [mounted, setMounted] =
    useState(false);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (
    href: string,
  ) => {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(
        `${href}/`,
      )
    );
  };

  return (
    <>
      {/* =====================================================
          DESKTOP / TABLET HEADER
          ===================================================== */}

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
        <div className="evolvaer-container">
          <div
            className="
              relative flex min-h-[4.5rem]
              items-center justify-between
              rounded-[1.25rem]
              border border-navy/[0.08]
              bg-white/80
              px-4
              shadow-[0_14px_50px_rgba(10,29,47,0.06)]
              backdrop-blur-2xl
              transition-all duration-500

              dark:border-white/[0.08]
              dark:bg-[#0d1117]/78
              dark:shadow-[0_18px_60px_rgba(0,0,0,0.25)]

              sm:px-5
            "
          >
            {/* =================================================
    LOGO
    ================================================= */}

<Link
  href="/"
  aria-label="Evolvaer Technologies home"
  className="group relative z-20 flex items-center"
>
  <div
    className="
      relative
      h-[38px] w-[150px]
      sm:h-[42px] sm:w-[166px]
      lg:h-[44px] lg:w-[176px]
    "
  >
    <Image
      key={mounted ? theme : "light"}
      src={
        mounted && theme === "dark"
          ? "/brand/evolvaer-logo-dark.png"
          : "/brand/evolvaer-logo-light.png"
      }
      alt="Evolvaer Technologies"
      fill
      priority
      sizes="(max-width: 640px) 150px, (max-width: 1024px) 166px, 176px"
      className={`
        object-contain
        object-left
        transition-transform
        duration-300

        ${
          mounted && theme === "dark"
            ? "scale-100"
            : "scale-[1.35] origin-left"
        }

        group-hover:scale-[1.02]
      `}
    />
  </div>
</Link>
            {/* =================================================
                DESKTOP NAVIGATION
                ================================================= */}

            <nav
              aria-label="Primary navigation"
              className="
                absolute left-1/2 top-1/2
                hidden
                -translate-x-1/2 -translate-y-1/2
                items-center
                lg:flex
              "
            >
              <div
                className="
                  flex items-center
                  rounded-full
                  border border-navy/[0.065]
                  bg-navy/[0.025]
                  p-1

                  dark:border-white/[0.07]
                  dark:bg-white/[0.025]
                "
              >
                {navItems.map(
                  (item) => {
                    const active =
                      isActive(
                        item.href,
                      );

                    return (
                      <Link
                        key={
                          item.href
                        }
                        href={
                          item.href
                        }
                        aria-current={
                          active
                            ? "page"
                            : undefined
                        }
                        className={`
                          relative
                          rounded-full
                          px-4 py-2.5
                          text-[0.73rem]
                          font-medium
                          transition-all
                          duration-300

                          ${
                            active
                              ? `
                                bg-white
                                text-navy
                                shadow-[0_4px_18px_rgba(10,29,47,0.08)]

                                dark:bg-white/[0.08]
                                dark:text-white
                                dark:shadow-none
                              `
                              : `
                                text-navy/55
                                hover:text-blue

                                dark:text-white/48
                                dark:hover:text-blue
                              `
                          }
                        `}
                      >
                        {
                          item.label
                        }

                        {active && (
                          <span
                            className="
                              absolute
                              bottom-[0.28rem]
                              left-1/2
                              h-[2px]
                              w-3
                              -translate-x-1/2
                              rounded-full
                              bg-blue
                            "
                          />
                        )}
                      </Link>
                    );
                  },
                )}
              </div>
            </nav>

            {/* =================================================
                RIGHT ACTIONS
                ================================================= */}

            <div className="relative z-20 flex items-center gap-2">
              {/* Theme */}

              <button
                type="button"
                onClick={toggleTheme}
                aria-label={
                  mounted &&
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
                title={
                  mounted &&
                  theme === "dark"
                    ? "Light mode"
                    : "Dark mode"
                }
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full

                  border border-navy/[0.08]
                  bg-navy/[0.025]
                  text-navy/55

                  transition-all duration-300

                  hover:border-blue/25
                  hover:bg-blue/[0.055]
                  hover:text-blue

                  dark:border-white/[0.08]
                  dark:bg-white/[0.025]
                  dark:text-white/50

                  dark:hover:border-blue/30
                  dark:hover:bg-blue/[0.08]
                  dark:hover:text-blue
                "
              >
                {!mounted ? (
                  <span className="h-4 w-4" />
                ) : theme ===
                  "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>

              {/* CTA */}

              <Link
                href="/contact"
                aria-current={
                  isActive(
                    "/contact",
                  )
                    ? "page"
                    : undefined
                }
                className={`
                  hidden min-h-10
                  items-center
                  rounded-full
                  px-5
                  text-[0.73rem]
                  font-semibold
                  transition-all
                  duration-300
                  sm:inline-flex

                  ${
                    isActive(
                      "/contact",
                    )
                      ? `
                        bg-blue
                        !text-white
                        shadow-[0_8px_28px_rgba(37,99,235,0.22)]
                      `
                      : `
                        bg-navy
                        !text-white

                        hover:-translate-y-0.5
                        hover:bg-blue
                        hover:shadow-[0_10px_30px_rgba(37,99,235,0.2)]

                        dark:bg-blue
                        dark:!text-white

                        dark:hover:bg-[#4b8df8]
                        dark:hover:shadow-[0_10px_35px_rgba(59,130,246,0.25)]
                      `
                  }
                `}
              >
                Start a conversation
              </Link>

              {/* Mobile trigger */}

              <button
                type="button"
                onClick={() =>
                  setMobileOpen(
                    (current) =>
                      !current,
                  )
                }
                aria-label={
                  mobileOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={
                  mobileOpen
                }
                aria-controls="mobile-navigation"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full

                  border border-navy/[0.08]
                  bg-navy/[0.025]
                  text-navy

                  transition-all
                  duration-300

                  hover:border-blue/25
                  hover:text-blue

                  dark:border-white/[0.08]
                  dark:bg-white/[0.025]
                  dark:text-white

                  dark:hover:border-blue/30
                  dark:hover:text-blue

                  lg:hidden
                "
              >
                {mobileOpen ? (
                  <X className="h-[1.1rem] w-[1.1rem]" />
                ) : (
                  <Menu className="h-[1.1rem] w-[1.1rem]" />
                )}
              </button>
            </div>

            {/* =================================================
                SUBTLE BRAND LINE
                ================================================= */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute bottom-0
                left-[8%] right-[8%]
                h-px

                bg-gradient-to-r
                from-transparent
                via-blue/20
                to-transparent

                dark:via-blue/25
              "
            />
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
          ===================================================== */}

      <div
        id="mobile-navigation"
        className={`
          fixed inset-0 z-40
          transition-all duration-500
          lg:hidden

          ${
            mobileOpen
              ? "pointer-events-auto visible opacity-100"
              : "pointer-events-none invisible opacity-0"
          }
        `}
      >
        {/* Background */}

        <div
          aria-hidden="true"
          className="
            absolute inset-0
            bg-white/[0.97]
            backdrop-blur-3xl

            dark:bg-[#0d1117]/[0.98]
          "
        />

        {/* Ambient environment */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0
            overflow-hidden
          "
        >
          <div
            className="
              absolute
              right-[-10rem]
              top-[-8rem]

              h-[30rem]
              w-[30rem]

              rounded-full
              bg-blue/[0.09]
              blur-[140px]

              dark:bg-blue/[0.13]
            "
          />

          <div
            className="
              absolute
              bottom-[-11rem]
              left-[-9rem]

              h-[28rem]
              w-[28rem]

              rounded-full
              bg-teal/[0.07]
              blur-[140px]

              dark:bg-teal/[0.08]
            "
          />

          <div
            className="
              absolute
              bottom-[12%]
              right-[-8rem]

              h-[22rem]
              w-[22rem]

              rounded-full
              bg-violet/[0.05]
              blur-[130px]

              dark:bg-violet/[0.08]
            "
          />

          {/* Grid */}

          <div
            className="
              brand-grid
              absolute inset-0
              opacity-40

              dark:opacity-30
            "
          />
        </div>

        {/* ===================================================
            MOBILE NAVIGATION CONTENT
            =================================================== */}

        <nav
          aria-label="Mobile navigation"
          className="
            evolvaer-container
            relative z-10
            flex min-h-screen
            flex-col
            pb-8 pt-32
            sm:pt-36
          "
        >
          <p
            className="
              mb-7
              text-[0.6rem]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-blue
            "
          >
            Explore Evolvaer
          </p>

          <div
            className="
              border-t
              border-navy/[0.09]

              dark:border-white/[0.08]
            "
          >
            {navItems.map(
              (item, index) => {
                const active =
                  isActive(
                    item.href,
                  );

                return (
                  <Link
                    key={
                      item.href
                    }
                    href={
                      item.href
                    }
                    aria-current={
                      active
                        ? "page"
                        : undefined
                    }
                    className="
                      group
                      flex items-center
                      gap-5

                      border-b
                      border-navy/[0.08]
                      py-5

                      dark:border-white/[0.075]
                    "
                  >
                    {/* Number */}

                    <span
                      className={`
                        w-8
                        text-sm
                        font-semibold

                        ${
                          active
                            ? "text-blue"
                            : `
                              text-navy/24
                              dark:text-white/22
                            `
                        }
                      `}
                    >
                      0
                      {index + 1}
                    </span>

                    {/* Label */}

                    <span
                      className={`
                        flex-1

                        text-[clamp(2rem,8vw,3.2rem)]
                        font-bold
                        leading-none
                        tracking-[-0.045em]

                        transition-colors

                        ${
                          active
                            ? "text-blue"
                            : `
                              text-navy
                              group-hover:text-blue

                              dark:text-white
                              dark:group-hover:text-blue
                            `
                        }
                      `}
                    >
                      {
                        item.label
                      }
                    </span>

                    {/* Status dot */}

                    <span
                      className={`
                        h-2 w-2
                        rounded-full
                        transition-all
                        duration-300

                        ${
                          active
                            ? `
                              bg-teal
                              shadow-[0_0_18px_rgba(16,185,129,0.45)]

                              dark:shadow-[0_0_18px_rgba(34,211,238,0.45)]
                            `
                            : `
                              bg-navy/12
                              group-hover:bg-blue

                              dark:bg-white/12
                            `
                        }
                      `}
                    />
                  </Link>
                );
              },
            )}
          </div>

          {/* ===================================================
              MOBILE BOTTOM CTA
              =================================================== */}

          <div className="mt-auto pt-10">
            <Link
              href="/contact"
              className="
                flex min-h-14
                w-full
                items-center
                justify-center

                rounded-full
                bg-navy
                px-6

                text-sm
                font-semibold
                text-white

                shadow-[0_10px_35px_rgba(10,29,47,0.12)]

                transition-all
                duration-300

                hover:bg-blue

                dark:bg-blue
                dark:text-white
                dark:shadow-[0_12px_40px_rgba(59,130,246,0.2)]

                dark:hover:bg-[#4b8df8]
              "
            >
              Start a conversation
            </Link>

            {/* Brand disciplines */}

            <div
              className="
                mt-6
                flex items-center
                justify-between

                border-t
                border-navy/[0.08]
                pt-5

                text-[0.59rem]
                font-semibold
                uppercase
                tracking-[0.22em]

                text-navy/30

                dark:border-white/[0.08]
                dark:text-white/26
              "
            >
              <span>
                Research
              </span>

              <span>
                Engineer
              </span>

              <span>
                Build
              </span>

              <span>
                Scale
              </span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}