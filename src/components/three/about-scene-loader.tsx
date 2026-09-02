"use client";

import dynamic from "next/dynamic";

const AboutScene = dynamic(
  () =>
    import("./about-scene").then(
      (module) => module.AboutScene,
    ),
  {
    ssr: false,
    loading: () => null,
  },
);

export function AboutSceneLoader() {
  return <AboutScene />;
}