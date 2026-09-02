"use client";

import dynamic from "next/dynamic";

const ResearchScene = dynamic(
  () =>
    import("./research-page-scene").then(
      (module) => module.ResearchPageScene,
    ),
  {
    ssr: false,
    loading: () => null,
  },
);

export function ResearchSceneLoader() {
  return <ResearchScene />;
}