"use client";

import {
  createContext,
  type MutableRefObject,
  type ReactNode,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

export type CareersSceneName =
  | "hero"
  | "why"
  | "work"
  | "growth"
  | "values"
  | "roles"
  | "process"
  | "cta";

type SceneProgressMap = Record<CareersSceneName, number>;

type CareersSceneExperienceValue = {
  activeScene: CareersSceneName;
  setActiveScene: (scene: CareersSceneName) => void;
  sceneProgress: MutableRefObject<SceneProgressMap>;
};

const INITIAL_PROGRESS: SceneProgressMap = {
  hero: 0,
  why: 0,
  work: 0,
  growth: 0,
  values: 0,
  roles: 0,
  process: 0,
  cta: 0,
};

const CareersSceneExperienceContext =
  createContext<CareersSceneExperienceValue | null>(null);

export function CareersSceneExperienceProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeScene, setActiveScene] =
    useState<CareersSceneName>("hero");

  const sceneProgress = useRef<SceneProgressMap>({
    ...INITIAL_PROGRESS,
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
    <CareersSceneExperienceContext.Provider value={value}>
      {children}
    </CareersSceneExperienceContext.Provider>
  );
}

export function useCareersSceneExperience() {
  const context = useContext(CareersSceneExperienceContext);

  if (!context) {
    throw new Error(
      "useCareersSceneExperience must be used within CareersSceneExperienceProvider",
    );
  }

  return context;
}