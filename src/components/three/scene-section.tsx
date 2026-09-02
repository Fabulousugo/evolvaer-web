"use client";

import {
  useEffect,
  useRef,
  type ReactNode,
} from "react";

import {
  type SceneName,
  useActiveScene,
  useSceneRuntime,
} from "./scene-experience";

type SceneSectionProps = {
  scene: SceneName;
  children: ReactNode;
  className?: string;
};

type SceneEntry = {
  scene: SceneName;
  element: HTMLDivElement;
  top: number;
  height: number;
  setActiveScene: (
    scene: SceneName,
  ) => void;
  sceneProgress: ReturnType<
    typeof useSceneRuntime
  >["sceneProgress"];
};

/*
 * All homepage scene sections share this
 * single registry and scroll pipeline.
 */
const entries =
  new Set<SceneEntry>();

let frame = 0;
let listening = false;
let needsMeasurement = true;

let lastActiveScene:
  | SceneName
  | null = null;

let resizeObserver:
  | ResizeObserver
  | null = null;

/* ============================================================
   HELPERS
============================================================ */

function clamp(
  value: number,
) {
  return Math.min(
    1,
    Math.max(0, value),
  );
}

/* ============================================================
   MEASUREMENT
============================================================ */

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

/* ============================================================
   SCROLL UPDATE
============================================================ */

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
    | SceneEntry
    | null = null;

  let nearestEntry:
    | SceneEntry
    | null = null;

  let nearestDistance =
    Number.POSITIVE_INFINITY;

  for (const entry of entries) {
    const sectionTop =
      entry.top;

    const sectionBottom =
      sectionTop +
      entry.height;

    /*
     * Progress begins as the bottom of
     * the viewport reaches the section
     * and finishes when the viewport has
     * travelled beyond it.
     *
     * No DOM measurements happen here.
     */
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

    /*
     * Prefer the section containing the
     * centre of the viewport.
     */
    if (
      viewportCentre >=
        sectionTop &&
      viewportCentre <=
        sectionBottom
    ) {
      activeEntry = entry;
      continue;
    }

    /*
     * Fallback for small gaps between
     * sections.
     */
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

/* ============================================================
   FRAME SCHEDULING
============================================================ */

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

/* ============================================================
   GLOBAL LISTENERS
============================================================ */

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

/* ============================================================
   REGISTRY
============================================================ */

function subscribe(
  entry: SceneEntry,
) {
  entries.add(entry);

  startListening();

  resizeObserver?.observe(
    entry.element,
  );

  /*
   * Geometry is measured on the next
   * animation frame rather than forcing
   * synchronous layout during mount.
   */
  scheduleMeasurement();

  return () => {
    resizeObserver?.unobserve(
      entry.element,
    );

    entries.delete(entry);

    /*
     * Remaining section geometry may have
     * changed after an element disappears.
     */
    if (entries.size > 0) {
      scheduleMeasurement();
    }

    stopListening();
  };
}

/* ============================================================
   COMPONENT
============================================================ */

export function SceneSection({
  scene,
  children,
  className = "",
}: SceneSectionProps) {
  const sectionRef =
    useRef<HTMLDivElement>(null);

  const {
    sceneProgress,
  } = useSceneRuntime();

  const {
    setActiveScene,
  } = useActiveScene();

  useEffect(() => {
    const element =
      sectionRef.current;

    if (!element) {
      return;
    }

    const entry: SceneEntry = {
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
      data-scene={scene}
      className={`relative ${className}`}
    >
      {children}
    </div>
  );
}