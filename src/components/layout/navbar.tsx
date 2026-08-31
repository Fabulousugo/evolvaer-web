"use client";

import Link from "next/link";
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
import { usePathname } from "next/navigation";

type Theme = "light" | "dark";

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

  const [theme, setTheme] =
    useState<Theme>("light");

  const [mounted, setMounted] =
    useState(false);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  useEffect(() => {
    const root = document.documentElement;

    const storedTheme =
      localStorage.getItem(
        "evolvaer-theme",
      ) as Theme | null;

    const initialTheme: Theme =
      storedTheme ??
      (window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches
        ? "dark"
        : "light");

    root.classList.remove(
      "light",
      "dark",
    );

    root.classList.add(initialTheme);

    setTheme(initialTheme);
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

  const applyTheme = (
    nextTheme: Theme,
  ) => {
    const root =
      document.documentElement;

    root.classList.remove(
      "light",
      "dark",
    );

    root.classList.add(nextTheme);

    localStorage.setItem(
      "evolvaer-theme",
      nextTheme,
    );

    setTheme(nextTheme);
  };

  const toggleTheme = () => {
    applyTheme(
      theme === "dark"
        ? "light"
        : "dark",
    );
  };

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
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
        <div className="evolvaer-container">
          <div className="relative flex min-h-[4.4rem] items-center justify-between rounded-[1.3rem] border border-midnight/[0.08] bg-[#f7f4ee]/72 px-4 shadow-[0_12px_45px_rgba(13,27,42,0.055)] backdrop-blur-2xl transition-colors duration-500 dark:border-white/[0.09] dark:bg-[#07131f]/72 dark:shadow-[0_14px_50px_rgba(0,0,0,0.18)] sm:px-5">
            {/* Logo */}
            <Link
              href="/"
              aria-label="Evolvaer Technologies home"
              className="group relative z-20 flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-midnight/[0.09] bg-midnight text-white transition-all duration-300 group-hover:border-gold/35 dark:border-white/[0.1] dark:bg-white/[0.035]">
                <span className="font-display text-[1.05rem] font-semibold tracking-[-0.05em] text-white">
                  ET
                </span>
              </div>

              <div className="leading-none">
                <p className="text-[0.72rem] font-semibold tracking-[0.235em] text-midnight dark:text-white">
                  EVOLVAER
                </p>

                <p className="mt-1.5 text-[0.48rem] font-semibold tracking-[0.31em] text-gold">
                  TECHNOLOGIES
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav
              aria-label="Primary navigation"
              className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center lg:flex"
            >
              <div className="flex items-center rounded-full border border-midnight/[0.065] bg-white/25 p-1 dark:border-white/[0.07] dark:bg-white/[0.02]">
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
                        className={`relative rounded-full px-4 py-2.5 text-[0.73rem] font-medium transition-all duration-300 ${
                          active
                            ? "bg-midnight text-white shadow-[0_5px_16px_rgba(13,27,42,0.12)] dark:bg-white/[0.09] dark:text-white dark:shadow-none"
                            : "text-midnight/55 hover:text-midnight dark:text-white/48 dark:hover:text-white"
                        }`}
                      >
                        {
                          item.label
                        }

                        {active && (
                          <span className="absolute bottom-[0.33rem] left-1/2 h-[2px] w-3 -translate-x-1/2 rounded-full bg-gold" />
                        )}
                      </Link>
                    );
                  },
                )}
              </div>
            </nav>

            {/* Right actions */}
            <div className="relative z-20 flex items-center gap-2">
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-midnight/[0.08] bg-white/25 text-midnight/55 transition-all duration-300 hover:border-gold/30 hover:text-gold dark:border-white/[0.08] dark:bg-white/[0.025] dark:text-white/48 dark:hover:text-gold"
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

              <Link
                href="/contact"
                aria-current={
                  isActive(
                    "/contact",
                  )
                    ? "page"
                    : undefined
                }
                className={`hidden min-h-10 items-center rounded-full px-5 text-[0.73rem] font-semibold transition-all duration-300 sm:inline-flex ${
                  isActive(
                    "/contact",
                  )
                    ? "bg-gold text-midnight shadow-[0_8px_26px_rgba(244,166,42,0.2)]"
                    : "bg-midnight text-white hover:-translate-y-0.5 hover:bg-[#152b40] dark:bg-gold dark:text-midnight dark:hover:bg-[#ffc15d]"
                }`}
              >
                Start a
                conversation
              </Link>

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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-midnight/[0.08] bg-white/25 text-midnight transition-all duration-300 hover:border-gold/30 hover:text-gold dark:border-white/[0.08] dark:bg-white/[0.025] dark:text-white lg:hidden"
              >
                {mobileOpen ? (
                  <X className="h-[1.1rem] w-[1.1rem]" />
                ) : (
                  <Menu className="h-[1.1rem] w-[1.1rem]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        {/* Background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#f7f4ee]/96 backdrop-blur-3xl dark:bg-[#050e17]/97"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute right-[-10rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-gold/[0.07] blur-[140px]" />

          <div className="absolute bottom-[-11rem] left-[-9rem] h-[28rem] w-[28rem] rounded-full bg-teal/[0.04] blur-[140px] dark:bg-teal/[0.05]" />

          <div
            className="absolute inset-0 opacity-[0.018] dark:opacity-[0.025]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(13,27,42,.13) 1px, transparent 1px),
                linear-gradient(90deg, rgba(13,27,42,.13) 1px, transparent 1px)
              `,
              backgroundSize:
                "80px 80px",
            }}
          />
        </div>

        <nav
          aria-label="Mobile navigation"
          className="evolvaer-container relative z-10 flex min-h-screen flex-col pb-8 pt-32 sm:pt-36"
        >
          <p className="mb-7 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-gold">
            Explore Evolvaer
          </p>

          <div className="border-t border-midnight/[0.09] dark:border-white/[0.08]">
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
                    className="group flex items-center gap-5 border-b border-midnight/[0.08] py-5 dark:border-white/[0.075]"
                  >
                    <span
                      className={`w-8 font-display text-sm italic ${
                        active
                          ? "text-gold"
                          : "text-midnight/24 dark:text-white/22"
                      }`}
                    >
                      0
                      {index +
                        1}
                    </span>

                    <span
                      className={`flex-1 font-display text-[clamp(2rem,8vw,3.2rem)] leading-none tracking-[-0.04em] transition-colors ${
                        active
                          ? "text-gold"
                          : "text-midnight group-hover:text-gold dark:text-white dark:group-hover:text-gold"
                      }`}
                    >
                      {
                        item.label
                      }
                    </span>

                    <span
                      className={`h-2 w-2 rounded-full transition-all duration-300 ${
                        active
                          ? "bg-gold shadow-[0_0_16px_rgba(244,166,42,0.5)]"
                          : "bg-midnight/12 group-hover:bg-gold dark:bg-white/12"
                      }`}
                    />
                  </Link>
                );
              },
            )}
          </div>

          <div className="mt-auto pt-10">
            <Link
              href="/contact"
              className="flex min-h-14 w-full items-center justify-center rounded-full bg-midnight px-6 text-sm font-semibold text-white transition-all hover:bg-[#152b40] dark:bg-gold dark:text-midnight dark:hover:bg-[#ffc15d]"
            >
              Start a
              conversation
            </Link>

            <div className="mt-6 flex items-center justify-between border-t border-midnight/[0.08] pt-5 text-[0.59rem] font-semibold uppercase tracking-[0.22em] text-midnight/30 dark:border-white/[0.08] dark:text-white/26">
              <span>
                Research
              </span>

              <span>
                Engineering
              </span>

              <span>
                Ventures
              </span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}