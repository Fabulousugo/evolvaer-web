"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  type Dispatch,
  type MutableRefObject,
  type ReactNode,
  type SetStateAction,
} from "react";

export type SceneName =
  | "hero"
  | "approach"
  | "exploration"
  | "ventures"
  | "research"
  | "philosophy"
  | "final";

export type SceneProgressMap = Record<
  SceneName,
  number
>;

type ActiveSceneContextValue = {
  activeScene: SceneName;
  setActiveScene: Dispatch<
    SetStateAction<SceneName>
  >;
};

type SceneRuntimeContextValue = {
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

const ActiveSceneContext =
  createContext<
    ActiveSceneContextValue | undefined
  >(undefined);

const SceneRuntimeContext =
  createContext<
    SceneRuntimeContextValue | undefined
  >(undefined);

export function SceneExperienceProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [
    activeScene,
    setActiveScene,
  ] = useState<SceneName>("hero");

  /*
   * Scroll progress lives entirely in a ref.
   *
   * Updating this object does not trigger
   * React renders.
   */
  const sceneProgress =
    useRef<SceneProgressMap>({
      ...initialProgress,
    });

  /*
   * sceneProgress itself is a stable ref object,
   * so this provider value does not need useMemo.
   */
  const runtimeValue = {
    sceneProgress,
  };

  return (
    <SceneRuntimeContext.Provider
      value={runtimeValue}
    >
      <ActiveSceneContext.Provider
        value={{
          activeScene,
          setActiveScene,
        }}
      >
        {children}
      </ActiveSceneContext.Provider>
    </SceneRuntimeContext.Provider>
  );
}

export function useActiveScene() {
  const context =
    useContext(
      ActiveSceneContext,
    );

  if (!context) {
    throw new Error(
      "useActiveScene must be used within SceneExperienceProvider",
    );
  }

  return context;
}

export function useSceneRuntime() {
  const context =
    useContext(
      SceneRuntimeContext,
    );

  if (!context) {
    throw new Error(
      "useSceneRuntime must be used within SceneExperienceProvider",
    );
  }

  return context;
}