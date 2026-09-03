"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarLogo } from "@/src/components/layout/navbar-logo";
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
] as const;

export function Navbar() {
  const pathname = usePathname();

  const {
    theme,
    toggleTheme,
    mounted,
  } = useTheme();

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const isDark =
    mounted && theme === "dark";

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  /*
   * Close navigation when the route changes.
   */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /*
   * Lock the document safely while the
   * mobile menu is open.
   *
   * Restore the exact previous values so
   * the page can never remain frozen after
   * the menu closes.
   */
  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const body = document.body;
    const html = document.documentElement;

    const previousBodyOverflow =
      body.style.overflow;

    const previousHtmlOverflow =
      html.style.overflow;

    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    return () => {
      body.style.overflow =
        previousBodyOverflow;

      html.style.overflow =
        previousHtmlOverflow;
    };
  }, [mobileOpen]);

  /*
   * Escape closes mobile navigation.
   */
  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [mobileOpen]);

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className="
          fixed
          inset-x-0
          top-0
          z-50
          px-3
          pt-3

          sm:px-4
          sm:pt-4
        "
      >
        <div className="evolvaer-container">
          <div
            className="
              relative
              flex
              min-h-[4.5rem]
              items-center
              justify-between

              rounded-[1.25rem]

              border
              border-navy/[0.08]

              bg-white/[0.94]

              px-4

              shadow-[0_12px_38px_rgba(10,29,47,0.055)]

              backdrop-blur-md

              dark:border-white/[0.08]
              dark:bg-[#0d1117]/[0.94]
              dark:shadow-[0_14px_42px_rgba(0,0,0,0.22)]

              sm:px-5
            "
          >
            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              href="/"
              aria-label="Evolvaer Technologies home"
              className="
                relative
                z-20
                flex
                items-center
              "
            >
              <div
                className="
                  relative

                  h-[38px]
                  w-[150px]

                  sm:h-[42px]
                  sm:w-[166px]

                  lg:h-[44px]
                  lg:w-[176px]
                "
              >
                <Image
                  src={
                    isDark
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

                    ${
                      isDark
                        ? "scale-100"
                        : "origin-left scale-[1.35]"
                    }
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
                absolute
                left-1/2
                top-1/2

                hidden

                -translate-x-1/2
                -translate-y-1/2

                lg:flex
              "
            >
              <div
                className="
                  flex
                  items-center

                  rounded-full

                  border
                  border-navy/[0.065]

                  bg-navy/[0.025]

                  p-1

                  dark:border-white/[0.07]
                  dark:bg-white/[0.025]
                "
              >
                {navItems.map((item) => {
                  const active =
                    isActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      prefetch={false}
                      aria-current={
                        active
                          ? "page"
                          : undefined
                      }
                      className={`
                        relative

                        rounded-full

                        px-4
                        py-2.5

                        text-[0.73rem]
                        font-medium

                        transition-[background-color,color,box-shadow]
                        duration-200

                        ${
                          active
                            ? `
                                bg-white
                                text-navy

                                shadow-[0_3px_14px_rgba(10,29,47,0.07)]

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
                      {item.label}

                      {active && (
                        <span
                          aria-hidden="true"
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
                })}
              </div>
            </nav>

            {/* =================================================
                ACTIONS
            ================================================= */}

            <div
              className="
                relative
                z-20

                flex
                items-center
                gap-2
              "
            >
              {/* Theme */}

              <button
                type="button"
                onClick={toggleTheme}
                disabled={!mounted}
                aria-label={
                  isDark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
                title={
                  isDark
                    ? "Light mode"
                    : "Dark mode"
                }
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-navy/[0.08]

                  bg-navy/[0.025]

                  text-navy/55

                  transition-[background-color,border-color,color]
                  duration-200

                  hover:border-blue/25
                  hover:bg-blue/[0.055]
                  hover:text-blue

                  disabled:cursor-default

                  dark:border-white/[0.08]
                  dark:bg-white/[0.025]
                  dark:text-white/50

                  dark:hover:border-blue/30
                  dark:hover:bg-blue/[0.08]
                  dark:hover:text-blue
                "
              >
                {!mounted ? (
                  <span
                    aria-hidden="true"
                    className="h-4 w-4"
                  />
                ) : isDark ? (
                  <Sun
                    aria-hidden="true"
                    className="h-4 w-4"
                  />
                ) : (
                  <Moon
                    aria-hidden="true"
                    className="h-4 w-4"
                  />
                )}
              </button>

              {/* Contact */}

              <Link
                href="/contact"
                prefetch={false}
                aria-current={
                  isActive("/contact")
                    ? "page"
                    : undefined
                }
                className={`
                  hidden
                  min-h-10
                  items-center

                  rounded-full

                  px-5

                  text-[0.73rem]
                  font-semibold
                  !text-white

                  transition-[transform,background-color,box-shadow]
                  duration-200

                  sm:inline-flex

                  ${
                    isActive("/contact")
                      ? `
                          bg-blue

                          shadow-[0_7px_24px_rgba(37,99,235,0.2)]
                        `
                      : `
                          bg-navy

                          hover:-translate-y-0.5
                          hover:bg-blue

                          dark:bg-blue
                          dark:hover:bg-[#4b8df8]
                        `
                  }
                `}
              >
                Start a conversation
              </Link>

              {/* Mobile menu trigger */}

              <button
                type="button"
                onClick={() =>
                  setMobileOpen(
                    (current) => !current,
                  )
                }
                aria-label={
                  mobileOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-navy/[0.08]

                  bg-navy/[0.025]

                  text-navy

                  transition-[background-color,border-color,color]
                  duration-200

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
                  <X
                    aria-hidden="true"
                    className="h-[1.1rem] w-[1.1rem]"
                  />
                ) : (
                  <Menu
                    aria-hidden="true"
                    className="h-[1.1rem] w-[1.1rem]"
                  />
                )}
              </button>
            </div>

            {/* Bottom brand line */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                bottom-0
                left-[8%]
                right-[8%]

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
          MOBILE NAVIGATION
          Only mounted when OPEN.
      ===================================================== */}

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="
            fixed
            inset-0
            z-40

            overflow-y-auto
            overscroll-contain

            bg-white

            dark:bg-[#0d1117]

            lg:hidden
          "
        >
          {/* =================================================
              LIGHTWEIGHT BACKGROUND
          ================================================= */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              overflow-hidden
            "
          >
            <div
              className="
                absolute
                inset-0

                bg-[radial-gradient(circle_at_88%_12%,rgba(37,99,235,0.10),transparent_32%)]

                dark:bg-[radial-gradient(circle_at_88%_12%,rgba(59,130,246,0.13),transparent_33%)]
              "
            />

            <div
              className="
                absolute
                inset-0

                bg-[radial-gradient(circle_at_8%_88%,rgba(16,185,129,0.07),transparent_32%)]

                dark:bg-[radial-gradient(circle_at_8%_88%,rgba(34,211,238,0.07),transparent_33%)]
              "
            />

            <div
              className="
                brand-grid

                absolute
                inset-0

                opacity-25

                dark:opacity-20
              "
            />
          </div>

          {/* =================================================
              MOBILE CONTENT
          ================================================= */}

          <nav
            aria-label="Mobile navigation"
            className="
              evolvaer-container

              relative
              z-10

              flex
              min-h-[100svh]
              flex-col

              pb-8
              pt-32

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
                    isActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      prefetch={false}
                      aria-current={
                        active
                          ? "page"
                          : undefined
                      }
                      onClick={() =>
                        setMobileOpen(false)
                      }
                      className="
                        group

                        flex
                        items-center
                        gap-5

                        border-b
                        border-navy/[0.08]

                        py-5

                        dark:border-white/[0.075]
                      "
                    >
                      <span
                        className={`
                          w-8

                          text-[14px]
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
                        {String(
                          index + 1,
                        ).padStart(2, "0")}
                      </span>

                      <span
                        className={`
                          flex-1

                          text-[16px]
                          font-bold
                          leading-none
                          tracking-[-0.045em]

                          transition-colors
                          duration-200

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
                        {item.label}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`
                          h-2
                          w-2

                          rounded-full

                          ${
                            active
                              ? `
                                  bg-teal

                                  shadow-[0_0_14px_rgba(16,185,129,0.35)]
                                `
                              : `
                                  bg-navy/12

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

            {/* =================================================
                MOBILE CTA
            ================================================= */}

            <div className="mt-auto pt-10">
              <Link
                href="/contact"
                prefetch={false}
                onClick={() =>
                  setMobileOpen(false)
                }
                className="
                  flex
                  min-h-14
                  w-full
                  items-center
                  justify-center

                  rounded-full

                  bg-navy

                  px-6

                  text-sm
                  font-semibold
                  !text-white

                  shadow-[0_8px_28px_rgba(10,29,47,0.10)]

                  transition-colors
                  duration-200

                  hover:bg-blue

                  dark:bg-blue
                  dark:text-white

                  dark:hover:bg-[#4b8df8]
                "
              >
                Start a conversation
              </Link>

              <div
                className="
                  mt-6

                  flex
                  items-center
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
                <span>Research</span>
                <span>Engineer</span>
                <span>Build</span>
                <span>Scale</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}