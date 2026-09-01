"use client";

import {
  type ReactNode,
  useEffect,
  useRef,
} from "react";

import {
  type VenturesSceneName,
  useVenturesSceneExperience,
} from "./ventures-scene-experience";

type VenturesSceneSectionProps = {
  scene: VenturesSceneName;
  children: ReactNode;
  className?: string;
};

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

export function VenturesSceneSection({
  scene,
  children,
  className = "",
}: VenturesSceneSectionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const {
    setActiveScene,
    sceneProgress,
  } = useVenturesSceneExperience();

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
       * Progress begins when the section enters the bottom of
       * the viewport and reaches 1 once it has completely moved
       * beyond the top.
       */
      const progress = clamp(
        (viewportHeight - rect.top) /
          (rect.height + viewportHeight),
      );

      sceneProgress.current[scene] = progress;

      /*
       * Whichever section contains the centre of the viewport
       * becomes the active 3D state.
       *
       * Using the viewport centre instead of simply checking
       * rect.top gives us much smoother transitions between
       * neighbouring sections.
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
      data-ventures-scene={scene}
      className={className}
    >
      {children}
    </div>
  );
}