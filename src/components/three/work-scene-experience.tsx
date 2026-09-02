"use client";

import {
  createContext,
  useContext,
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

export type WorkSceneProgressMap =
  Record<WorkSceneName, number>;

type WorkActiveSceneContextValue = {
  activeScene: WorkSceneName;
  setActiveScene: (
    scene: WorkSceneName,
  ) => void;
};

type WorkSceneRuntimeContextValue = {
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

const WorkActiveSceneContext =
  createContext<
    WorkActiveSceneContextValue | undefined
  >(undefined);

const WorkSceneRuntimeContext =
  createContext<
    WorkSceneRuntimeContextValue | undefined
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

  const runtimeValue =
    useRef<WorkSceneRuntimeContextValue>({
      sceneProgress,
    }).current;

  return (
    <WorkSceneRuntimeContext.Provider
      value={runtimeValue}
    >
      <WorkActiveSceneContext.Provider
        value={{
          activeScene,
          setActiveScene,
        }}
      >
        {children}
      </WorkActiveSceneContext.Provider>
    </WorkSceneRuntimeContext.Provider>
  );
}

export function useWorkActiveScene() {
  const context =
    useContext(
      WorkActiveSceneContext,
    );

  if (!context) {
    throw new Error(
      "useWorkActiveScene must be used within WorkSceneExperienceProvider",
    );
  }

  return context;
}

export function useWorkSceneRuntime() {
  const context =
    useContext(
      WorkSceneRuntimeContext,
    );

  if (!context) {
    throw new Error(
      "useWorkSceneRuntime must be used within WorkSceneExperienceProvider",
    );
  }

  return context;
}