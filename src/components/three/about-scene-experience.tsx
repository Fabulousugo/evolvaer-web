"use client";

import {
  createContext,
  useContext,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
  type ReactNode,
} from "react";

export type AboutSceneName =
  | "hero"
  | "story"
  | "capabilities"
  | "operating"
  | "evolution"
  | "principles"
  | "ambition"
  | "cta";

type AboutSceneProgressMap =
  Record<AboutSceneName, number>;

type AboutSceneExperienceContextValue = {
  activeScene: AboutSceneName;
  setActiveScene: (
    scene: AboutSceneName,
  ) => void;
  sceneProgress: MutableRefObject<AboutSceneProgressMap>;
};

const initialProgress: AboutSceneProgressMap = {
  hero: 0,
  story: 0,
  capabilities: 0,
  operating: 0,
  evolution: 0,
  principles: 0,
  ambition: 0,
  cta: 0,
};

const AboutSceneExperienceContext =
  createContext<
    AboutSceneExperienceContextValue | undefined
  >(undefined);

export function AboutSceneExperienceProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeScene, setActiveScene] =
    useState<AboutSceneName>("hero");

  /*
   * Progress lives inside a ref rather
   * than React state.
   *
   * Scroll updates can therefore happen
   * continuously without re-rendering the
   * entire About page.
   */
  const sceneProgress =
    useRef<AboutSceneProgressMap>({
      ...initialProgress,
    });

  const value = useMemo(
    () => ({
      activeScene,
      setActiveScene,
      sceneProgress,
    }),
    [activeScene],
  );

  return (
    <AboutSceneExperienceContext.Provider
      value={value}
    >
      {children}
    </AboutSceneExperienceContext.Provider>
  );
}

export function useAboutSceneExperience() {
  const context = useContext(
    AboutSceneExperienceContext,
  );

  if (!context) {
    throw new Error(
      "useAboutSceneExperience must be used within AboutSceneExperienceProvider",
    );
  }

  return context;
}