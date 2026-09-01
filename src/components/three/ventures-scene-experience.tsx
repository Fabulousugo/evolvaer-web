"use client";

import {
  createContext,
  type ReactNode,
  type RefObject,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

export type VenturesSceneName =
  | "hero"
  | "philosophy"
  | "portfolio"
  | "featured"
  | "emergence"
  | "capabilities"
  | "stages"
  | "future"
  | "cta";

type VenturesSceneProgress = Record<VenturesSceneName, number>;

type VenturesSceneExperienceValue = {
  activeScene: VenturesSceneName;
  setActiveScene: (scene: VenturesSceneName) => void;
  sceneProgress: RefObject<VenturesSceneProgress>;
};

const initialProgress: VenturesSceneProgress = {
  hero: 0,
  philosophy: 0,
  portfolio: 0,
  featured: 0,
  emergence: 0,
  capabilities: 0,
  stages: 0,
  future: 0,
  cta: 0,
};

const VenturesSceneExperienceContext =
  createContext<VenturesSceneExperienceValue | null>(null);

export function VenturesSceneExperienceProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeScene, setActiveScene] =
    useState<VenturesSceneName>("hero");

  const sceneProgress =
    useRef<VenturesSceneProgress>({
      ...initialProgress,
    });

  const value = useMemo<VenturesSceneExperienceValue>(
    () => ({
      activeScene,
      setActiveScene,
      sceneProgress,
    }),
    [activeScene],
  );

  return (
    <VenturesSceneExperienceContext.Provider value={value}>
      {children}
    </VenturesSceneExperienceContext.Provider>
  );
}

export function useVenturesSceneExperience() {
  const context = useContext(
    VenturesSceneExperienceContext,
  );

  if (!context) {
    throw new Error(
      "useVenturesSceneExperience must be used inside VenturesSceneExperienceProvider.",
    );
  }

  return context;
}