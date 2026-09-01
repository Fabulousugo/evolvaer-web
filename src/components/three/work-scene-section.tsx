"use client";

import {
  useEffect,
  useRef,
  type ReactNode,
} from "react";

import {
  type WorkSceneName,
  useWorkSceneExperience,
} from "./work-scene-experience";

type WorkSceneSectionProps = {
  scene: WorkSceneName;
  children: ReactNode;
};

export function WorkSceneSection({
  scene,
  children,
}: WorkSceneSectionProps) {
  const sectionRef =
    useRef<HTMLDivElement>(null);

  const {
    setActiveScene,
    sceneProgress,
  } = useWorkSceneExperience();

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
       * Progress begins as the section
       * enters the viewport and reaches 1
       * once it has travelled completely
       * through it.
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
       * Whichever section currently owns
       * the centre of the viewport becomes
       * the active 3D stage.
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
      data-work-scene={scene}
      className="relative"
    >
      {children}
    </div>
  );
}