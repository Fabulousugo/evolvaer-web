"use client";

import {
  type ReactNode,
  useEffect,
  useRef,
} from "react";

import {
  type CareersSceneName,
  useCareersSceneExperience,
} from "@/src/components/three/careers-scene-experience";

type CareersSceneSectionProps = {
  scene: CareersSceneName;
  children: ReactNode;
  className?: string;
};

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

export function CareersSceneSection({
  scene,
  children,
  className = "",
}: CareersSceneSectionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const {
    activeScene,
    setActiveScene,
    sceneProgress,
  } = useCareersSceneExperience();

  useEffect(() => {
    let frameId: number | null = null;

    const update = () => {
      frameId = null;

      const element = sectionRef.current;

      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      /*
       * Section progress:
       *
       * 0 = section has not entered the viewport
       * 1 = section has completely moved through it
       */
      const progress = clamp(
        (viewportHeight - rect.top) /
          (rect.height + viewportHeight),
      );

      sceneProgress.current[scene] = progress;

      /*
       * The section containing the centre of the viewport
       * becomes the active 3D scene.
       */
      const viewportCenter = viewportHeight * 0.5;

      const containsViewportCenter =
        rect.top <= viewportCenter &&
        rect.bottom >= viewportCenter;

      if (
        containsViewportCenter &&
        activeScene !== scene
      ) {
        setActiveScene(scene);
      }
    };

    const requestUpdate = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", requestUpdate, {
      passive: true,
    });

    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener(
        "scroll",
        requestUpdate,
      );

      window.removeEventListener(
        "resize",
        requestUpdate,
      );

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [
    activeScene,
    scene,
    sceneProgress,
    setActiveScene,
  ]);

  return (
    <div
      ref={sectionRef}
      data-careers-scene={scene}
      className={className}
    >
      {children}
    </div>
  );
}