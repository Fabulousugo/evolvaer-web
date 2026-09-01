"use client";

import {
  useEffect,
  useRef,
  type ReactNode,
} from "react";

import {
  type AboutSceneName,
  useAboutSceneExperience,
} from "./about-scene-experience";

type AboutSceneSectionProps = {
  scene: AboutSceneName;
  children: ReactNode;
};

export function AboutSceneSection({
  scene,
  children,
}: AboutSceneSectionProps) {
  const sectionRef =
    useRef<HTMLDivElement>(null);

  const {
    setActiveScene,
    sceneProgress,
  } = useAboutSceneExperience();

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
       * Section progress is measured
       * from the moment the section
       * begins entering the viewport
       * until it fully leaves it.
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
       * The section crossing the centre
       * of the viewport becomes the
       * active semantic scene.
       *
       * Progress itself remains continuous
       * and is what the Three.js world
       * will use for transitions.
       */

      const viewportCentre =
        viewportHeight *
        0.5;

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

    const handleScroll =
      () => {
        /*
         * Throttle layout reads to
         * one calculation per frame.
         */

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
      data-about-scene={
        scene
      }
      className="relative"
    >
      {children}
    </div>
  );
}