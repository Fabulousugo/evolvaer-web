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

export type SceneName =
  | "hero"
  | "approach"
  | "exploration"
  | "ventures"
  | "research"
  | "philosophy"
  | "final";

type SceneProgressMap = Record<
  SceneName,
  number
>;

type SceneExperienceContextValue = {
  activeScene: SceneName;

  setActiveScene: (
    scene: SceneName,
  ) => void;

  sceneProgress: MutableRefObject<SceneProgressMap>;
};

const initialProgress: SceneProgressMap = {
  hero: 0,
  approach: 0,
  exploration: 0,
  ventures: 0,
  research: 0,
  philosophy: 0,
  final: 0,
};

const SceneExperienceContext =
  createContext<
    SceneExperienceContextValue | undefined
  >(undefined);

export function SceneExperienceProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [
    activeScene,
    setActiveScene,
  ] =
    useState<SceneName>("hero");

  /*
   * Progress is deliberately kept in a ref.
   *
   * Scroll updates can happen many times
   * per second. We do NOT want the whole
   * React tree re-rendering for every
   * scroll event.
   */
  const sceneProgress =
    useRef<SceneProgressMap>({
      ...initialProgress,
    });

  const value =
    useMemo(
      () => ({
        activeScene,
        setActiveScene,
        sceneProgress,
      }),
      [activeScene],
    );

  return (
    <SceneExperienceContext.Provider
      value={value}
    >
      {children}
    </SceneExperienceContext.Provider>
  );
}

export function useSceneExperience() {
  const context =
    useContext(
      SceneExperienceContext,
    );

  if (!context) {
    throw new Error(
      "useSceneExperience must be used within SceneExperienceProvider",
    );
  }

  return context;
}