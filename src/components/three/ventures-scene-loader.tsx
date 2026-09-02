"use client";

import dynamic from "next/dynamic";

const VenturesScene = dynamic(
  () =>
    import("./ventures-scene").then(
      (module) => module.VenturesScene,
    ),
  {
    ssr: false,
    loading: () => null,
  },
);

export function VenturesSceneLoader() {
  return <VenturesScene />;
}