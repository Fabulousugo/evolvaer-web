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

export type WorkSceneName =
  | "hero"
  | "explore"
  | "research"
  | "engineer"
  | "build"
  | "scale"
  | "impact"
  | "integrated"
  | "cta";

type WorkSceneProgressMap =
  Record<WorkSceneName, number>;

type WorkSceneExperienceContextValue = {
  activeScene: WorkSceneName;
  setActiveScene: (
    scene: WorkSceneName,
  ) => void;
  sceneProgress: MutableRefObject<WorkSceneProgressMap>;
};

const initialProgress: WorkSceneProgressMap = {
  hero: 0,
  explore: 0,
  research: 0,
  engineer: 0,
  build: 0,
  scale: 0,
  impact: 0,
  integrated: 0,
  cta: 0,
};

const WorkSceneExperienceContext =
  createContext<
    WorkSceneExperienceContextValue | undefined
  >(undefined);

export function WorkSceneExperienceProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeScene, setActiveScene] =
    useState<WorkSceneName>("hero");

  const sceneProgress =
    useRef<WorkSceneProgressMap>({
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
    <WorkSceneExperienceContext.Provider
      value={value}
    >
      {children}
    </WorkSceneExperienceContext.Provider>
  );
}

export function useWorkSceneExperience() {
  const context =
    useContext(
      WorkSceneExperienceContext,
    );

  if (!context) {
    throw new Error(
      "useWorkSceneExperience must be used within WorkSceneExperienceProvider",
    );
  }

  return context;
}