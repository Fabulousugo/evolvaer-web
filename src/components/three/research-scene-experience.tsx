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

export type ResearchSceneName =
  | "hero"
  | "why"
  | "areas"
  | "method"
  | "current"
  | "application"
  | "principles"
  | "questions"
  | "cta";

export type ResearchSceneProgress = Record<
  ResearchSceneName,
  number
>;

type ResearchSceneExperienceValue = {
  activeScene: ResearchSceneName;
  setActiveScene: (scene: ResearchSceneName) => void;
  sceneProgress: RefObject<ResearchSceneProgress>;
};

const initialProgress: ResearchSceneProgress = {
  hero: 0,
  why: 0,
  areas: 0,
  method: 0,
  current: 0,
  application: 0,
  principles: 0,
  questions: 0,
  cta: 0,
};

const ResearchSceneExperienceContext =
  createContext<ResearchSceneExperienceValue | null>(null);

export function ResearchSceneExperienceProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeScene, setActiveScene] =
    useState<ResearchSceneName>("hero");

  const sceneProgress =
    useRef<ResearchSceneProgress>({
      ...initialProgress,
    });

  const value = useMemo<ResearchSceneExperienceValue>(
    () => ({
      activeScene,
      setActiveScene,
      sceneProgress,
    }),
    [activeScene],
  );

  return (
    <ResearchSceneExperienceContext.Provider value={value}>
      {children}
    </ResearchSceneExperienceContext.Provider>
  );
}

export function useResearchSceneExperience() {
  const context = useContext(
    ResearchSceneExperienceContext,
  );

  if (!context) {
    throw new Error(
      "useResearchSceneExperience must be used inside ResearchSceneExperienceProvider",
    );
  }

  return context;
}