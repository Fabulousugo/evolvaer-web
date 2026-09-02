"use client";

import dynamic from "next/dynamic";

const WorkScene = dynamic(
  () =>
    import("./work-scene").then(
      (module) => module.WorkScene,
    ),
  {
    ssr: false,
    loading: () => null,
  },
);

export function WorkSceneLoader() {
  return <WorkScene />;
}