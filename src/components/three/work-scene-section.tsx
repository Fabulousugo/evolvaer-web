"use client";

import {
  useEffect,
  useRef,
  type ReactNode,
} from "react";

import {
  type WorkSceneName,
  useWorkActiveScene,
  useWorkSceneRuntime,
} from "./work-scene-experience";

type WorkSceneSectionProps = {
  scene: WorkSceneName;
  children: ReactNode;
  className?: string;
};

type WorkSceneEntry = {
  element: HTMLDivElement;
  scene: WorkSceneName;
  top: number;
  height: number;
  sceneProgress: ReturnType<
    typeof useWorkSceneRuntime
  >["sceneProgress"];
  setActiveScene: ReturnType<
    typeof useWorkActiveScene
  >["setActiveScene"];
};

const entries: Set<WorkSceneEntry> =
  new Set();

let frame = 0;
let listenersAttached = false;
let resizeObserver:
  | ResizeObserver
  | null = null;

let lastActiveScene:
  | WorkSceneName
  | null = null;

function measureEntry(
  entry: WorkSceneEntry,
) {
  const rect =
    entry.element.getBoundingClientRect();

  entry.top =
    rect.top + window.scrollY;

  entry.height =
    rect.height;
}

function measureAll() {
  entries.forEach(
    measureEntry,
  );
}

function updateScenes() {
  frame = 0;

  if (!entries.size) return;

  const scrollY =
    window.scrollY;

  const viewportHeight =
    window.innerHeight;

  const viewportCentre =
    scrollY +
    viewportHeight * 0.5;

  let nearest:
    | WorkSceneEntry
    | null = null;

  let nearestDistance =
    Number.POSITIVE_INFINITY;

  entries.forEach(
    (entry) => {
      const sectionTop =
        entry.top;

      const sectionHeight =
        entry.height;

      const sectionBottom =
        sectionTop +
        sectionHeight;

      const totalDistance =
        sectionHeight +
        viewportHeight;

      const travelled =
        scrollY +
        viewportHeight -
        sectionTop;

      const progress =
        Math.min(
          1,
          Math.max(
            0,
            travelled /
              totalDistance,
          ),
        );

      entry.sceneProgress.current[
        entry.scene
      ] = progress;

      if (
        viewportCentre >=
          sectionTop &&
        viewportCentre <=
          sectionBottom
      ) {
        nearest = entry;
        nearestDistance = 0;

        return;
      }

      const distance =
        viewportCentre <
        sectionTop
          ? sectionTop -
            viewportCentre
          : viewportCentre -
            sectionBottom;

      if (
        distance <
        nearestDistance
      ) {
        nearestDistance =
          distance;

        nearest = entry;
      }
    },
  );

  if (
    nearest !== null &&
    nearest.scene !== lastActiveScene
  ) {
    lastActiveScene =
      nearest.scene;

    nearest.setActiveScene(
      nearest.scene,
    );
  }
}

function scheduleUpdate() {
  if (frame) return;

  frame =
    window.requestAnimationFrame(
      updateScenes,
    );
}

function handleScroll() {
  scheduleUpdate();
}

function handleResize() {
  measureAll();
  scheduleUpdate();
}

function attachListeners() {
  if (
    listenersAttached ||
    !entries.size
  ) {
    return;
  }

  listenersAttached = true;

  window.addEventListener(
    "scroll",
    handleScroll,
    {
      passive: true,
    },
  );

  window.addEventListener(
    "resize",
    handleResize,
  );

  if (
    typeof ResizeObserver !==
    "undefined"
  ) {
    resizeObserver =
      new ResizeObserver(() => {
        measureAll();
        scheduleUpdate();
      });

    entries.forEach(
      (entry) => {
        resizeObserver?.observe(
          entry.element,
        );
      },
    );
  }

  measureAll();
  scheduleUpdate();
}

function detachListeners() {
  if (
    entries.size ||
    !listenersAttached
  ) {
    return;
  }

  listenersAttached = false;

  window.removeEventListener(
    "scroll",
    handleScroll,
  );

  window.removeEventListener(
    "resize",
    handleResize,
  );

  resizeObserver?.disconnect();
  resizeObserver = null;

  if (frame) {
    window.cancelAnimationFrame(
      frame,
    );

    frame = 0;
  }

  lastActiveScene = null;
}

export function WorkSceneSection({
  scene,
  children,
  className,
}: WorkSceneSectionProps) {
  const sectionRef =
    useRef<HTMLDivElement>(null);

  const {
    sceneProgress,
  } = useWorkSceneRuntime();

  const {
    setActiveScene,
  } = useWorkActiveScene();

  useEffect(() => {
    const element =
      sectionRef.current;

    if (!element) return;

    const entry: WorkSceneEntry =
      {
        element,
        scene,
        top: 0,
        height: 0,
        sceneProgress,
        setActiveScene,
      };

    entries.add(entry);

    measureEntry(entry);

    if (
      resizeObserver
    ) {
      resizeObserver.observe(
        element,
      );
    }

    attachListeners();
    scheduleUpdate();

    return () => {
      resizeObserver?.unobserve(
        element,
      );

      entries.delete(entry);

      detachListeners();
      scheduleUpdate();
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
      className={
        className
          ? `relative ${className}`
          : "relative"
      }
    >
      {children}
    </div>
  );
}