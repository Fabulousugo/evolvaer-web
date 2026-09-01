"use client";

import {
  type ReactNode,
  useEffect,
  useRef,
} from "react";

import {
  type ResearchSceneName,
  useResearchSceneExperience,
} from "./research-scene-experience";

type ResearchSceneSectionProps = {
  scene: ResearchSceneName;
  children: ReactNode;
  className?: string;
};

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

export function ResearchSceneSection({
  scene,
  children,
  className = "",
}: ResearchSceneSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const {
    setActiveScene,
    sceneProgress,
  } = useResearchSceneExperience();

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
       * 0 = section has not entered the viewport
       * 1 = section has completely travelled through it
       */
      const progress = clamp(
        (viewportHeight - rect.top) /
          (rect.height + viewportHeight),
      );

      sceneProgress.current[scene] = progress;

      /*
       * The scene whose section currently contains the
       * vertical centre of the viewport becomes active.
       */
      const viewportCenter = viewportHeight * 0.5;

      const containsViewportCenter =
        rect.top <= viewportCenter &&
        rect.bottom >= viewportCenter;

      if (containsViewportCenter) {
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

    window.addEventListener(
      "scroll",
      requestUpdate,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      requestUpdate,
    );

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
    scene,
    sceneProgress,
    setActiveScene,
  ]);

  return (
    <div
      ref={sectionRef}
      className={className}
      data-research-scene={scene}
    >
      {children}
    </div>
  );
}