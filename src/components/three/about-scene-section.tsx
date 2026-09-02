"use client";

import {
  useEffect,
  useRef,
  type ReactNode,
} from "react";

import {
  type AboutSceneName,
  useAboutActiveScene,
  useAboutSceneRuntime,
} from "./about-scene-experience";

type AboutSceneSectionProps = {
  scene: AboutSceneName;
  children: ReactNode;
  className?: string;
};

type AboutSceneEntry = {
  scene: AboutSceneName;
  element: HTMLDivElement;
  top: number;
  height: number;
  setActiveScene: (
    scene: AboutSceneName,
  ) => void;
  sceneProgress: ReturnType<
    typeof useAboutSceneRuntime
  >["sceneProgress"];
};

const entries =
  new Set<AboutSceneEntry>();

let frame = 0;
let listening = false;
let needsMeasurement = true;

let lastActiveScene:
  | AboutSceneName
  | null = null;

let resizeObserver:
  | ResizeObserver
  | null = null;

function clamp(
  value: number,
) {
  return Math.min(
    1,
    Math.max(0, value),
  );
}

function measureEntries() {
  const scrollY =
    window.scrollY;

  for (const entry of entries) {
    const rect =
      entry.element.getBoundingClientRect();

    entry.top =
      rect.top + scrollY;

    entry.height =
      rect.height;
  }

  needsMeasurement = false;
}

function updateEntries() {
  if (entries.size === 0) {
    return;
  }

  const scrollY =
    window.scrollY;

  const viewportHeight =
    window.innerHeight;

  const viewportBottom =
    scrollY +
    viewportHeight;

  const viewportCentre =
    scrollY +
    viewportHeight * 0.5;

  let activeEntry:
    | AboutSceneEntry
    | null = null;

  let nearestEntry:
    | AboutSceneEntry
    | null = null;

  let nearestDistance =
    Number.POSITIVE_INFINITY;

  for (const entry of entries) {
    const sectionTop =
      entry.top;

    const sectionBottom =
      sectionTop +
      entry.height;

    const progress =
      clamp(
        (
          viewportBottom -
          sectionTop
        ) /
          (
            entry.height +
            viewportHeight
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
      activeEntry = entry;
      continue;
    }

    const sectionCentre =
      sectionTop +
      entry.height * 0.5;

    const distance =
      Math.abs(
        viewportCentre -
          sectionCentre,
      );

    if (
      distance <
      nearestDistance
    ) {
      nearestDistance =
        distance;

      nearestEntry =
        entry;
    }
  }

  const nextActive =
    activeEntry ??
    nearestEntry;

  if (
    nextActive &&
    nextActive.scene !==
      lastActiveScene
  ) {
    lastActiveScene =
      nextActive.scene;

    nextActive.setActiveScene(
      nextActive.scene,
    );
  }
}

function flush() {
  frame = 0;

  if (needsMeasurement) {
    measureEntries();
  }

  updateEntries();
}

function scheduleUpdate() {
  if (frame) {
    return;
  }

  frame =
    window.requestAnimationFrame(
      flush,
    );
}

function scheduleMeasurement() {
  needsMeasurement = true;

  scheduleUpdate();
}

function startListening() {
  if (listening) {
    return;
  }

  listening = true;

  window.addEventListener(
    "scroll",
    scheduleUpdate,
    {
      passive: true,
    },
  );

  window.addEventListener(
    "resize",
    scheduleMeasurement,
    {
      passive: true,
    },
  );

  if (
    typeof ResizeObserver !==
    "undefined"
  ) {
    resizeObserver =
      new ResizeObserver(
        scheduleMeasurement,
      );

    for (const entry of entries) {
      resizeObserver.observe(
        entry.element,
      );
    }
  }
}

function stopListening() {
  if (
    !listening ||
    entries.size > 0
  ) {
    return;
  }

  listening = false;

  window.removeEventListener(
    "scroll",
    scheduleUpdate,
  );

  window.removeEventListener(
    "resize",
    scheduleMeasurement,
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
  needsMeasurement = true;
}

function subscribe(
  entry: AboutSceneEntry,
) {
  entries.add(entry);

  startListening();

  resizeObserver?.observe(
    entry.element,
  );

  scheduleMeasurement();

  return () => {
    resizeObserver?.unobserve(
      entry.element,
    );

    entries.delete(entry);

    if (entries.size > 0) {
      scheduleMeasurement();
    }

    stopListening();
  };
}

export function AboutSceneSection({
  scene,
  children,
  className = "",
}: AboutSceneSectionProps) {
  const sectionRef =
    useRef<HTMLDivElement>(null);

  const {
    sceneProgress,
  } = useAboutSceneRuntime();

  const {
    setActiveScene,
  } = useAboutActiveScene();

  useEffect(() => {
    const element =
      sectionRef.current;

    if (!element) {
      return;
    }

    const entry: AboutSceneEntry = {
      scene,
      element,
      top: 0,
      height: 0,
      setActiveScene,
      sceneProgress,
    };

    return subscribe(entry);
  }, [
    scene,
    sceneProgress,
    setActiveScene,
  ]);

  return (
    <div
      ref={sectionRef}
      data-about-scene={scene}
      className={`relative ${className}`}
    >
      {children}
    </div>
  );
}