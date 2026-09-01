"use client";

import {
  createContext,
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
};

const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme =
      window.localStorage.getItem("evolvaer-theme");

    const systemPrefersDark =
      window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

    const initialTheme: Theme =
      storedTheme === "dark" ||
      (!storedTheme && systemPrefersDark)
        ? "dark"
        : "light";

    setThemeState(initialTheme);

    const root = document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(initialTheme);

    root.style.colorScheme = initialTheme;

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(theme);

    root.style.colorScheme = theme;

    window.localStorage.setItem(
      "evolvaer-theme",
      theme,
    );
  }, [theme, mounted]);

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);
  };

  const toggleTheme = () => {
    setThemeState((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark",
    );
  };

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used within ThemeProvider",
    );
  }

  return context;
}