"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  mounted: boolean;
};

const STORAGE_KEY = "evolvaer-theme";

const ThemeContext =
  createContext<ThemeContextValue | undefined>(
    undefined,
  );

function getCurrentTheme(): Theme {
  if (
    typeof document === "undefined"
  ) {
    return "light";
  }

  return document.documentElement.classList.contains(
    "dark",
  )
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  const root =
    document.documentElement;

  root.classList.toggle(
    "dark",
    theme === "dark",
  );

  root.classList.toggle(
    "light",
    theme === "light",
  );

  root.style.colorScheme = theme;
}

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setThemeState] =
    useState<Theme>("light");

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    /*
     * layout.tsx has already applied the
     * correct theme before hydration.
     *
     * We only need to synchronize React
     * state with the DOM.
     */
    const initialTheme =
      getCurrentTheme();

    setThemeState(initialTheme);
    setMounted(true);

    const mediaQuery =
      window.matchMedia(
        "(prefers-color-scheme: dark)",
      );

    const handleSystemChange = (
      event: MediaQueryListEvent,
    ) => {
      /*
       * Once the user explicitly chooses
       * a theme, system preference should
       * no longer override it.
       */
      const storedTheme =
        window.localStorage.getItem(
          STORAGE_KEY,
        );

      if (
        storedTheme === "light" ||
        storedTheme === "dark"
      ) {
        return;
      }

      const nextTheme: Theme =
        event.matches
          ? "dark"
          : "light";

      setThemeState(nextTheme);
      applyTheme(nextTheme);
    };

    mediaQuery.addEventListener(
      "change",
      handleSystemChange,
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleSystemChange,
      );
    };
  }, []);

  const setTheme = useCallback(
    (nextTheme: Theme) => {
      setThemeState(nextTheme);
      applyTheme(nextTheme);

      window.localStorage.setItem(
        STORAGE_KEY,
        nextTheme,
      );
    },
    [],
  );

  const toggleTheme =
    useCallback(() => {
      setThemeState(
        (currentTheme) => {
          const nextTheme: Theme =
            currentTheme === "dark"
              ? "light"
              : "dark";

          applyTheme(nextTheme);

          window.localStorage.setItem(
            STORAGE_KEY,
            nextTheme,
          );

          return nextTheme;
        },
      );
    }, []);

  const value =
    useMemo<ThemeContextValue>(
      () => ({
        theme,
        setTheme,
        toggleTheme,
        mounted,
      }),
      [
        theme,
        setTheme,
        toggleTheme,
        mounted,
      ],
    );

  return (
    <ThemeContext.Provider
      value={value}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context =
    useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used within ThemeProvider",
    );
  }

  return context;
}