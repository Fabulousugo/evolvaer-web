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

export type ContactSceneName =
  | "hero"
  | "intent"
  | "form"
  | "routes"
  | "cta";

export type ContactSceneProgressMap = Record<
  ContactSceneName,
  number
>;

type ContactSceneExperienceContextValue = {
  activeScene: ContactSceneName;
  setActiveScene: (
    scene: ContactSceneName,
  ) => void;
  sceneProgress: MutableRefObject<ContactSceneProgressMap>;
};

const ContactSceneExperienceContext =
  createContext<ContactSceneExperienceContextValue | null>(
    null,
  );

const initialProgress: ContactSceneProgressMap = {
  hero: 0,
  intent: 0,
  form: 0,
  routes: 0,
  cta: 0,
};

export function ContactSceneExperienceProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeScene, setActiveScene] =
    useState<ContactSceneName>("hero");

  const sceneProgress =
    useRef<ContactSceneProgressMap>({
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
    <ContactSceneExperienceContext.Provider value={value}>
      {children}
    </ContactSceneExperienceContext.Provider>
  );
}

export function useContactSceneExperience() {
  const context = useContext(
    ContactSceneExperienceContext,
  );

  if (!context) {
    throw new Error(
      "useContactSceneExperience must be used inside ContactSceneExperienceProvider.",
    );
  }

  return context;
}