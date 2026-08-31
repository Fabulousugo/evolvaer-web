"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Ventures", href: "/ventures" },
  { label: "Research", href: "/research" },
  { label: "Careers", href: "/careers" },
];

type Theme = "light" | "dark";

export function Navbar() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const storedTheme =
      window.localStorage.getItem("evolvaer-theme");

    const initialTheme: Theme =
      storedTheme === "dark" ? "dark" : "light";

    setTheme(initialTheme);

    document.documentElement.classList.remove(
      "light",
      "dark",
    );

    document.documentElement.classList.add(initialTheme);

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme: Theme =
        currentTheme === "dark" ? "light" : "dark";

      window.localStorage.setItem(
        "evolvaer-theme",
        nextTheme,
      );

      document.documentElement.classList.remove(
        "light",
        "dark",
      );

      document.documentElement.classList.add(nextTheme);

      return nextTheme;
    });
  };

  const isDark = theme === "dark";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative flex items-center justify-between rounded-full border border-midnight/10 bg-white/45 px-3 py-2.5 shadow-[0_12px_40px_rgba(13,27,42,0.06)] backdrop-blur-2xl transition-all duration-500 dark:border-white/10 dark:bg-[#071522]/60 dark:shadow-[0_20px_70px_rgba(0,0,0,0.32)] sm:px-4">
            {/* LOGO */}
            <Link
              href="/"
              className="group flex items-center gap-3"
              aria-label="Evolvaer Technologies home"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-midnight/10 bg-white/50 backdrop-blur-xl transition-all duration-300 group-hover:border-gold/40 dark:border-white/10 dark:bg-white/[0.04]">
                <span className="font-display text-lg font-semibold tracking-tight text-midnight dark:text-white">
                  ET
                </span>
              </div>

              <div className="hidden sm:block">
                <p className="text-[0.78rem] font-semibold tracking-[0.24em] text-midnight dark:text-white">
                  EVOLVAER
                </p>

                <p className="mt-0.5 text-[0.53rem] font-medium tracking-[0.34em] text-gold">
                  TECHNOLOGIES
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative py-2 text-[0.82rem] font-medium text-midnight/60 transition-colors duration-300 hover:text-midnight dark:text-white/60 dark:hover:text-white"
                >
                  {item.label}

                  <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* RIGHT CONTROLS */}
            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="group hidden items-center gap-2 rounded-full border border-gold/50 bg-gold/[0.08] px-5 py-2.5 text-sm font-semibold text-[#9a650f] transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold/[0.14] dark:text-[#ffd890] sm:inline-flex"
              >
                Start a conversation

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <button
                type="button"
                aria-label={`Switch to ${
                  isDark ? "light" : "dark"
                } mode`}
                onClick={toggleTheme}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-midnight/10 bg-white/45 text-midnight backdrop-blur-xl transition-all duration-300 hover:border-gold/40 hover:text-gold dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:border-gold/40 dark:hover:text-gold"
              >
                {mounted ? (
                  isDark ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )
                ) : (
                  <span className="h-4 w-4" />
                )}
              </button>

              <button
                type="button"
                aria-label={
                  mobileOpen
                    ? "Close menu"
                    : "Open menu"
                }
                aria-expanded={mobileOpen}
                onClick={() =>
                  setMobileOpen((open) => !open)
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-midnight/10 bg-white/45 text-midnight backdrop-blur-xl transition-all duration-300 hover:border-gold/40 dark:border-white/10 dark:bg-white/[0.04] dark:text-white lg:hidden"
              >
                {mobileOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* MOBILE PANEL */}
          <div
            className={`overflow-hidden transition-all duration-500 lg:hidden ${
              mobileOpen
                ? "mt-3 max-h-[32rem] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="rounded-[1.75rem] border border-midnight/10 bg-white/70 p-4 shadow-[0_20px_60px_rgba(13,27,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#071522]/85 dark:shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between border-b border-midnight/10 px-2 py-4 text-base font-medium text-midnight/75 transition-colors last:border-b-0 hover:text-gold dark:border-white/10 dark:text-white/75"
                  >
                    {item.label}

                    <ArrowUpRight className="h-4 w-4 text-gold" />
                  </Link>
                ))}
              </nav>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-xl border border-gold/45 bg-gold/[0.10] px-5 text-sm font-semibold text-[#9a650f] transition-all duration-300 hover:bg-gold/[0.15] dark:text-[#ffd890]"
              >
                Start a conversation

                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}