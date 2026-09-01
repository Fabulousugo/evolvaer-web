"use client";

import {
  useEffect,
  useRef,
  type ReactNode,
} from "react";

import {
  type SceneName,
  useSceneExperience,
} from "./scene-experience";

type SceneSectionProps = {
  scene: SceneName;
  children: ReactNode;
};

export function SceneSection({
  scene,
  children,
}: SceneSectionProps) {
  const sectionRef =
    useRef<HTMLDivElement>(null);

  const {
    setActiveScene,
    sceneProgress,
  } =
    useSceneExperience();

  useEffect(() => {
    const element =
      sectionRef.current;

    if (!element) return;

    let frame = 0;

    const updateProgress = () => {
      frame = 0;

      const rect =
        element.getBoundingClientRect();

      const viewportHeight =
        window.innerHeight;

      /*
       * Progress:
       *
       * 0 = section entering viewport
       * 0.5 = section centred
       * 1 = section leaving viewport
       */

      const totalDistance =
        rect.height +
        viewportHeight;

      const travelled =
        viewportHeight -
        rect.top;

      const progress =
        Math.min(
          1,
          Math.max(
            0,
            travelled /
              totalDistance,
          ),
        );

      sceneProgress.current[
        scene
      ] = progress;

      /*
       * Determine active scene from
       * viewport centre.
       */
      const viewportCentre =
        viewportHeight * 0.5;

      const sectionTop =
        rect.top;

      const sectionBottom =
        rect.bottom;

      if (
        viewportCentre >=
          sectionTop &&
        viewportCentre <=
          sectionBottom
      ) {
        setActiveScene(scene);
      }
    };

    const handleScroll = () => {
      if (frame) return;

      frame =
        window.requestAnimationFrame(
          updateProgress,
        );
    };

    updateProgress();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      handleScroll,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );

      window.removeEventListener(
        "resize",
        handleScroll,
      );

      if (frame) {
        window.cancelAnimationFrame(
          frame,
        );
      }
    };
  }, [
    scene,
    sceneProgress,
    setActiveScene,
  ]);

  return (
    <div
      ref={sectionRef}
      data-scene={scene}
      className="relative"
    >
      {children}
    </div>
  );
}