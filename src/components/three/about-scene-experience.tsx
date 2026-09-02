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

export type AboutSceneName =
  | "hero"
  | "story"
  | "capabilities"
  | "operating"
  | "evolution"
  | "principles"
  | "ambition"
  | "cta";

export type AboutSceneProgressMap =
  Record<AboutSceneName, number>;

type AboutActiveSceneContextValue = {
  activeScene: AboutSceneName;
  setActiveScene: Dispatch<
    SetStateAction<AboutSceneName>
  >;
};

type AboutSceneRuntimeContextValue = {
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

const AboutActiveSceneContext =
  createContext<
    AboutActiveSceneContextValue | undefined
  >(undefined);

const AboutSceneRuntimeContext =
  createContext<
    AboutSceneRuntimeContextValue | undefined
  >(undefined);

export function AboutSceneExperienceProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [
    activeScene,
    setActiveScene,
  ] = useState<AboutSceneName>("hero");

  const sceneProgress =
    useRef<AboutSceneProgressMap>({
      ...initialProgress,
    });

  const runtimeValue = {
    sceneProgress,
  };

  return (
    <AboutSceneRuntimeContext.Provider
      value={runtimeValue}
    >
      <AboutActiveSceneContext.Provider
        value={{
          activeScene,
          setActiveScene,
        }}
      >
        {children}
      </AboutActiveSceneContext.Provider>
    </AboutSceneRuntimeContext.Provider>
  );
}

export function useAboutActiveScene() {
  const context =
    useContext(
      AboutActiveSceneContext,
    );

  if (!context) {
    throw new Error(
      "useAboutActiveScene must be used within AboutSceneExperienceProvider",
    );
  }

  return context;
}

export function useAboutSceneRuntime() {
  const context =
    useContext(
      AboutSceneRuntimeContext,
    );

  if (!context) {
    throw new Error(
      "useAboutSceneRuntime must be used within AboutSceneExperienceProvider",
    );
  }

  return context;
}