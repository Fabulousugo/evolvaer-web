"use client";

import dynamic from "next/dynamic";

const CareersScene = dynamic(
  () =>
    import("./careers-scene").then(
      (module) => module.CareersScene,
    ),
  {
    ssr: false,
    loading: () => null,
  },
);

export function CareersSceneLoader() {
  return <CareersScene />;
}