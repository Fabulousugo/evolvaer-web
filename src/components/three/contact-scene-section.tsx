"use client";

import {
  type ReactNode,
  useEffect,
  useRef,
} from "react";

import {
  type ContactSceneName,
  useContactSceneExperience,
} from "@/src/components/three/contact-scene-experience";

type ContactSceneSectionProps = {
  scene: ContactSceneName;
  children: ReactNode;
  className?: string;
};

function clamp(
  value: number,
  min = 0,
  max = 1,
) {
  return Math.min(Math.max(value, min), max);
}

export function ContactSceneSection({
  scene,
  children,
  className = "",
}: ContactSceneSectionProps) {
  const sectionRef =
    useRef<HTMLDivElement | null>(null);

  const {
    activeScene,
    setActiveScene,
    sceneProgress,
  } = useContactSceneExperience();

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return;
    }

    let frameId: number | null = null;

    const update = () => {
      frameId = null;

      const rect =
        element.getBoundingClientRect();

      const viewportHeight =
        window.innerHeight;

      /*
       * Progress starts as the section enters the
       * viewport and reaches 1 once it has moved
       * completely through it.
       */
      const progress = clamp(
        (viewportHeight - rect.top) /
          (rect.height + viewportHeight),
      );

      sceneProgress.current[scene] =
        progress;

      /*
       * A scene becomes active when the centre of
       * the viewport sits inside this section.
       *
       * This is more stable than switching as soon
       * as a section touches the viewport edge.
       */
      const viewportCenter =
        viewportHeight * 0.5;

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

      frameId =
        window.requestAnimationFrame(update);
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
        window.cancelAnimationFrame(
          frameId,
        );
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
      data-contact-scene={scene}
      className={className}
    >
      {children}
    </div>
  );
}