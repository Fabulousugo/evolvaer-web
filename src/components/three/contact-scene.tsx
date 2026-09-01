"use client";

import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import {
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  AdditiveBlending,
  CatmullRomCurve3,
  Group,
  MathUtils,
  PerspectiveCamera,
  TubeGeometry,
  Vector3,
} from "three";

import {
  type ContactSceneName,
  useContactSceneExperience,
} from "@/src/components/three/contact-scene-experience";

/* ============================================================
   BRAND
============================================================ */

const BLUE = "#3B82F6";
const DEEP_BLUE = "#2563EB";
const CYAN = "#22D3EE";
const TEAL = "#10B981";
const PURPLE = "#A855F7";
const STEEL = "#94A3B8";

const SCENE_INDEX: Record<ContactSceneName, number> = {
  hero: 0,
  intent: 1,
  form: 2,
  routes: 3,
  cta: 4,
};

/* ============================================================
   ENVIRONMENT HOOKS
============================================================ */

function useGlobalPointer() {
  const pointer = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const update = (event: PointerEvent) => {
      pointer.current.x =
        (event.clientX / window.innerWidth) * 2 - 1;

      pointer.current.y =
        -(
          (event.clientY / window.innerHeight) *
            2 -
          1
        );
    };

    window.addEventListener(
      "pointermove",
      update,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        update,
      );
    };
  }, []);

  return pointer;
}

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] =
    useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const update = () => {
      setReducedMotion(media.matches);
    };

    update();

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener(
        "change",
        update,
      );
    };
  }, []);

  return reducedMotion;
}

function useCompactScene() {
  const [compact, setCompact] =
    useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(max-width: 767px)",
    );

    const update = () => {
      setCompact(media.matches);
    };

    update();

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener(
        "change",
        update,
      );
    };
  }, []);

  return compact;
}

function clamp(value: number) {
  return Math.min(Math.max(value, 0), 1);
}

function getSceneWeight(progress: number) {
  const centred =
    1 - Math.abs(progress - 0.5) * 2;

  return MathUtils.lerp(
    0.04,
    0.12,
    clamp(centred),
  );
}

/* ============================================================
   SIGNAL NODE
============================================================ */

function SignalNode({
  position,
  color = CYAN,
  size = 0.06,
  intensity = 1,
}: {
  position: [number, number, number];
  color?: string;
  size?: number;
  intensity?: number;
}) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[size, 18, 18]} />

        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.9}
        />
      </mesh>

      <mesh scale={2.5}>
        <sphereGeometry args={[size, 16, 16]} />

        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.06 * intensity}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

/* ============================================================
   SIGNAL PATH
============================================================ */

function SignalPath({
  points,
  color = CYAN,
  opacity = 0.2,
  radius = 0.008,
}: {
  points: [number, number, number][];
  color?: string;
  opacity?: number;
  radius?: number;
}) {
  const geometry = useMemo(() => {
    const vectors = points.map(
      (point) => new Vector3(...point),
    );

    const curve = new CatmullRomCurve3(
      vectors,
    );

    return new TubeGeometry(
      curve,
      40,
      radius,
      6,
      false,
    );
  }, [points, radius]);

  useEffect(() => {
    return () => {
      geometry.dispose();
    };
  }, [geometry]);

  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        blending={AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

/* ============================================================
   MOVING SIGNAL
============================================================ */

function MovingSignal({
  points,
  color = CYAN,
  speed = 0.18,
  offset = 0,
  size = 0.035,
  reducedMotion = false,
}: {
  points: [number, number, number][];
  color?: string;
  speed?: number;
  offset?: number;
  size?: number;
  reducedMotion?: boolean;
}) {
  const ref = useRef<Group>(null);

  const curve = useMemo(() => {
    return new CatmullRomCurve3(
      points.map(
        (point) => new Vector3(...point),
      ),
    );
  }, [points]);

  useFrame(({ clock }) => {
    if (!ref.current) {
      return;
    }

    const t = reducedMotion
      ? offset % 1
      : (
          clock.elapsedTime * speed +
          offset
        ) % 1;

    const point =
      curve.getPointAt(t);

    ref.current.position.copy(point);
  });

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[size, 14, 14]} />

        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.95}
        />
      </mesh>

      <mesh scale={3}>
        <sphereGeometry args={[size, 12, 12]} />

        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.08}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

/* ============================================================
   CHANNEL RING
============================================================ */

function ChannelRing({
  radius,
  color,
  opacity,
  rotation = [0, 0, 0],
}: {
  radius: number;
  color: string;
  opacity: number;
  rotation?: [number, number, number];
}) {
  return (
    <mesh rotation={rotation}>
      <torusGeometry
        args={[radius, 0.008, 6, 80]}
      />

      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        blending={AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

/* ============================================================
   HERO
   Unresolved transmissions
============================================================ */

function HeroWorld({
  reducedMotion,
}: {
  reducedMotion: boolean;
}) {
  const group = useRef<Group>(null);

  const paths = useMemo<
    [number, number, number][][]
  >(
    () => [
      [
        [-3.4, 1.8, -0.6],
        [-2.3, 1.25, 0],
        [-1.2, 0.65, 0.25],
        [0, 0.2, 0],
      ],
      [
        [-3.6, -1.35, -0.2],
        [-2.4, -0.95, 0.15],
        [-1.15, -0.4, 0.25],
        [0, 0.2, 0],
      ],
      [
        [3.5, 1.45, -0.45],
        [2.45, 1.05, 0.1],
        [1.2, 0.55, 0.3],
        [0, 0.2, 0],
      ],
      [
        [3.5, -1.55, -0.4],
        [2.45, -1.05, 0.1],
        [1.2, -0.35, 0.25],
        [0, 0.2, 0],
      ],
      [
        [-0.8, 2.7, -0.7],
        [-0.55, 1.8, 0],
        [-0.25, 0.85, 0.25],
        [0, 0.2, 0],
      ],
    ],
    [],
  );

  useFrame(({ clock }) => {
    if (!group.current) {
      return;
    }

    if (reducedMotion) {
      group.current.rotation.y = 0;
      return;
    }

    group.current.rotation.y =
      Math.sin(clock.elapsedTime * 0.18) *
      0.05;

    group.current.rotation.z =
      Math.sin(clock.elapsedTime * 0.11) *
      0.015;
  });

  return (
    <group
      ref={group}
      position={[0.8, 0, 0]}
    >
      {paths.map((path, index) => (
        <group key={index}>
          <SignalPath
            points={path}
            color={
              index % 3 === 0
                ? BLUE
                : index % 3 === 1
                  ? CYAN
                  : PURPLE
            }
            opacity={0.1}
          />

          <MovingSignal
            points={path}
            color={
              index % 3 === 0
                ? BLUE
                : index % 3 === 1
                  ? CYAN
                  : PURPLE
            }
            offset={index * 0.17}
            speed={0.1 + index * 0.015}
            reducedMotion={reducedMotion}
          />
        </group>
      ))}

      <SignalNode
        position={[0, 0.2, 0]}
        color={CYAN}
        size={0.075}
      />

      <ChannelRing
        radius={0.36}
        color={CYAN}
        opacity={0.07}
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
      />

      <ChannelRing
        radius={0.62}
        color={BLUE}
        opacity={0.035}
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
      />
    </group>
  );
}

/* ============================================================
   INTENT
   Signals align around a question
============================================================ */

function IntentWorld({
  reducedMotion,
}: {
  reducedMotion: boolean;
}) {
  const group = useRef<Group>(null);

  const sources = useMemo(
    () => [
      [-3, 1.75, -0.3],
      [-3.15, 0.6, 0.15],
      [-3.1, -0.65, -0.1],
      [-2.8, -1.8, 0.1],
      [3, 1.55, -0.25],
      [3.15, 0.35, 0.15],
      [3, -1, -0.1],
    ] as [number, number, number][],
    [],
  );

  useFrame(({ clock }) => {
    if (
      !group.current ||
      reducedMotion
    ) {
      return;
    }

    group.current.rotation.y =
      Math.sin(clock.elapsedTime * 0.16) *
      0.035;
  });

  return (
    <group
      ref={group}
      position={[0.8, 0, 0]}
    >
      {sources.map((source, index) => {
        const path: [
          number,
          number,
          number,
        ][] = [
          source,
          [
            source[0] * 0.55,
            source[1] * 0.55,
            0.18,
          ],
          [0, 0, 0],
        ];

        const color =
          index % 4 === 0
            ? BLUE
            : index % 4 === 1
              ? CYAN
              : index % 4 === 2
                ? PURPLE
                : TEAL;

        return (
          <group key={index}>
            <SignalPath
              points={path}
              color={color}
              opacity={0.13}
            />

            <SignalNode
              position={source}
              color={color}
              size={0.045}
              intensity={0.6}
            />

            <MovingSignal
              points={path}
              color={color}
              speed={0.12}
              offset={index * 0.13}
              reducedMotion={reducedMotion}
            />
          </group>
        );
      })}

      <SignalNode
        position={[0, 0, 0]}
        color={CYAN}
        size={0.09}
      />

      <ChannelRing
        radius={0.5}
        color={CYAN}
        opacity={0.1}
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
      />

      <ChannelRing
        radius={0.9}
        color={PURPLE}
        opacity={0.035}
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
      />
    </group>
  );
}

/* ============================================================
   FORM
   Stable communication channel
============================================================ */

function FormWorld({
  reducedMotion,
}: {
  reducedMotion: boolean;
}) {
  const group = useRef<Group>(null);

  const primaryPath = useMemo<
    [number, number, number][]
  >(
    () => [
      [-3.7, 0, 0],
      [-2.2, 0.12, 0.05],
      [-0.9, -0.08, 0.08],
      [0.8, 0.08, 0.05],
      [2.15, -0.06, 0],
      [3.7, 0, 0],
    ],
    [],
  );

  const upperPath = useMemo<
    [number, number, number][]
  >(
    () => [
      [-3.4, 0.52, -0.3],
      [-1.7, 0.4, -0.15],
      [0, 0.5, -0.1],
      [1.8, 0.38, -0.15],
      [3.4, 0.52, -0.3],
    ],
    [],
  );

  const lowerPath = useMemo<
    [number, number, number][]
  >(
    () => [
      [-3.4, -0.52, -0.3],
      [-1.7, -0.4, -0.15],
      [0, -0.5, -0.1],
      [1.8, -0.38, -0.15],
      [3.4, -0.52, -0.3],
    ],
    [],
  );

  useFrame(({ clock }) => {
    if (
      !group.current ||
      reducedMotion
    ) {
      return;
    }

    group.current.position.y =
      Math.sin(clock.elapsedTime * 0.35) *
      0.025;
  });

  return (
    <group
      ref={group}
      position={[0.85, 0, 0]}
    >
      <SignalPath
        points={primaryPath}
        color={CYAN}
        opacity={0.34}
        radius={0.012}
      />

      <SignalPath
        points={upperPath}
        color={BLUE}
        opacity={0.07}
      />

      <SignalPath
        points={lowerPath}
        color={PURPLE}
        opacity={0.07}
      />

      <MovingSignal
        points={primaryPath}
        color={CYAN}
        speed={0.15}
        offset={0}
        size={0.045}
        reducedMotion={reducedMotion}
      />

      <MovingSignal
        points={primaryPath}
        color={BLUE}
        speed={0.15}
        offset={0.5}
        size={0.035}
        reducedMotion={reducedMotion}
      />

      <SignalNode
        position={[-3.7, 0, 0]}
        color={BLUE}
        size={0.08}
      />

      <SignalNode
        position={[3.7, 0, 0]}
        color={TEAL}
        size={0.08}
      />

      <group position={[0, 0, 0]}>
        {[0.42, 0.7, 1].map(
          (radius, index) => (
            <ChannelRing
              key={radius}
              radius={radius}
              color={
                index === 0
                  ? CYAN
                  : index === 1
                    ? BLUE
                    : PURPLE
              }
              opacity={
                index === 0
                  ? 0.08
                  : 0.025
              }
              rotation={[
                Math.PI / 2,
                0,
                0,
              ]}
            />
          ),
        )}
      </group>
    </group>
  );
}

/* ============================================================
   ROUTES
   One conversation finds the right destination
============================================================ */

function RoutesWorld({
  reducedMotion,
}: {
  reducedMotion: boolean;
}) {
  const group = useRef<Group>(null);

  const routes = useMemo(
    () =>
      [
        {
          color: BLUE,
          path: [
            [-3.2, 0, 0],
            [-1.3, 0, 0.1],
            [0, 0.25, 0.15],
            [1.6, 1.55, 0],
            [3.25, 1.75, -0.2],
          ],
        },
        {
          color: CYAN,
          path: [
            [-3.2, 0, 0],
            [-1.3, 0, 0.1],
            [0, 0, 0.15],
            [1.7, 0.65, 0],
            [3.4, 0.65, -0.15],
          ],
        },
        {
          color: PURPLE,
          path: [
            [-3.2, 0, 0],
            [-1.3, 0, 0.1],
            [0, 0, 0.15],
            [1.7, -0.4, 0],
            [3.4, -0.45, -0.15],
          ],
        },
        {
          color: TEAL,
          path: [
            [-3.2, 0, 0],
            [-1.3, 0, 0.1],
            [0, -0.2, 0.15],
            [1.6, -1.45, 0],
            [3.2, -1.7, -0.2],
          ],
        },
      ] as {
        color: string;
        path: [
          number,
          number,
          number,
        ][];
      }[],
    [],
  );

  useFrame(({ clock }) => {
    if (
      !group.current ||
      reducedMotion
    ) {
      return;
    }

    group.current.rotation.x =
      Math.sin(clock.elapsedTime * 0.16) *
      0.012;
  });

  return (
    <group
      ref={group}
      position={[0.8, 0, 0]}
    >
      <SignalNode
        position={[-3.2, 0, 0]}
        color={CYAN}
        size={0.08}
      />

      {routes.map(
        (route, index) => {
          const end =
            route.path[
              route.path.length - 1
            ];

          return (
            <group key={index}>
              <SignalPath
                points={route.path}
                color={route.color}
                opacity={0.15}
              />

              <MovingSignal
                points={route.path}
                color={route.color}
                speed={
                  0.1 + index * 0.012
                }
                offset={index * 0.2}
                reducedMotion={
                  reducedMotion
                }
              />

              <SignalNode
                position={end}
                color={route.color}
                size={0.055}
              />
            </group>
          );
        },
      )}

      <ChannelRing
        radius={0.42}
        color={CYAN}
        opacity={0.055}
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
      />
    </group>
  );
}

/* ============================================================
   CTA
   Communication resolves into connection
============================================================ */

function CtaWorld({
  reducedMotion,
}: {
  reducedMotion: boolean;
}) {
  const group = useRef<Group>(null);
  const core = useRef<Group>(null);

  const paths = useMemo<
    [number, number, number][][]
  >(
    () => [
      [
        [-3.6, 1.5, -0.35],
        [-2, 0.8, 0],
        [-0.8, 0.3, 0.15],
        [0, 0, 0],
      ],
      [
        [-3.5, -1.5, -0.35],
        [-2, -0.8, 0],
        [-0.8, -0.3, 0.15],
        [0, 0, 0],
      ],
      [
        [3.6, 1.5, -0.35],
        [2, 0.8, 0],
        [0.8, 0.3, 0.15],
        [0, 0, 0],
      ],
      [
        [3.5, -1.5, -0.35],
        [2, -0.8, 0],
        [0.8, -0.3, 0.15],
        [0, 0, 0],
      ],
    ],
    [],
  );

  useFrame(({ clock }) => {
    if (group.current) {
      if (reducedMotion) {
        group.current.rotation.y = 0;
      } else {
        group.current.rotation.y =
          Math.sin(
            clock.elapsedTime * 0.14,
          ) * 0.025;
      }
    }

    if (
      core.current &&
      !reducedMotion
    ) {
      const scale =
        1 +
        Math.sin(
          clock.elapsedTime * 0.8,
        ) *
          0.035;

      core.current.scale.setScalar(
        scale,
      );
    }
  });

  return (
    <group
      ref={group}
      position={[0.7, 0, 0]}
    >
      {paths.map((path, index) => (
        <group key={index}>
          <SignalPath
            points={path}
            color={
              index === 0
                ? BLUE
                : index === 1
                  ? CYAN
                  : index === 2
                    ? PURPLE
                    : TEAL
            }
            opacity={0.1}
          />

          <MovingSignal
            points={path}
            color={
              index === 0
                ? BLUE
                : index === 1
                  ? CYAN
                  : index === 2
                    ? PURPLE
                    : TEAL
            }
            speed={0.09}
            offset={index * 0.23}
            reducedMotion={reducedMotion}
          />
        </group>
      ))}

      <group ref={core}>
        <SignalNode
          position={[0, 0, 0]}
          color={CYAN}
          size={0.1}
        />

        <ChannelRing
          radius={0.42}
          color={CYAN}
          opacity={0.13}
          rotation={[
            Math.PI / 2,
            0,
            0,
          ]}
        />

        <ChannelRing
          radius={0.72}
          color={BLUE}
          opacity={0.065}
          rotation={[
            Math.PI / 2,
            0,
            0,
          ]}
        />

        <ChannelRing
          radius={1.05}
          color={PURPLE}
          opacity={0.025}
          rotation={[
            Math.PI / 2,
            0,
            0,
          ]}
        />
      </group>
    </group>
  );
}

/* ============================================================
   SPATIAL TRANSITION
============================================================ */

function ContactTransitionGroup({
  scene,
  children,
}: {
  scene: ContactSceneName;
  children: ReactNode;
}) {
  const ref = useRef<Group>(null);

  const {
    activeScene,
    sceneProgress,
  } = useContactSceneExperience();

  useFrame((_, delta) => {
    if (!ref.current) {
      return;
    }

    const activeIndex =
      SCENE_INDEX[activeScene];

    const sceneIndex =
      SCENE_INDEX[scene];

    const difference =
      sceneIndex - activeIndex;

    const isActive =
      activeScene === scene;

    const progress =
      sceneProgress.current[scene];

    const progressWeight =
      getSceneWeight(progress);

    const targetX =
      difference * 2.8;

    const targetY =
      difference * -0.75;

    const targetZ = isActive
      ? 0
      : -2.8 - Math.abs(difference) * 0.45;

    const targetScale = isActive
      ? 1
      : 0.72 - progressWeight * 0.1;

    const targetRotationY =
      difference * -0.18;

    const targetRotationZ =
      difference * 0.025;

    ref.current.position.x =
      MathUtils.damp(
        ref.current.position.x,
        targetX,
        3.4,
        delta,
      );

    ref.current.position.y =
      MathUtils.damp(
        ref.current.position.y,
        targetY,
        3.4,
        delta,
      );

    ref.current.position.z =
      MathUtils.damp(
        ref.current.position.z,
        targetZ,
        3.4,
        delta,
      );

    ref.current.scale.x =
      MathUtils.damp(
        ref.current.scale.x,
        targetScale,
        3.4,
        delta,
      );

    ref.current.scale.y =
      MathUtils.damp(
        ref.current.scale.y,
        targetScale,
        3.4,
        delta,
      );

    ref.current.scale.z =
      MathUtils.damp(
        ref.current.scale.z,
        targetScale,
        3.4,
        delta,
      );

    ref.current.rotation.y =
      MathUtils.damp(
        ref.current.rotation.y,
        targetRotationY,
        3.4,
        delta,
      );

    ref.current.rotation.z =
      MathUtils.damp(
        ref.current.rotation.z,
        targetRotationZ,
        3.4,
        delta,
      );

    ref.current.visible =
      Math.abs(difference) <= 1;
  });

  return (
    <group ref={ref}>
      {children}
    </group>
  );
}

/* ============================================================
   SCENE DIRECTOR
============================================================ */

function SceneDirector({
  reducedMotion,
}: {
  reducedMotion: boolean;
}) {
  return (
    <>
      <ContactTransitionGroup scene="hero">
        <HeroWorld
          reducedMotion={reducedMotion}
        />
      </ContactTransitionGroup>

      <ContactTransitionGroup scene="intent">
        <IntentWorld
          reducedMotion={reducedMotion}
        />
      </ContactTransitionGroup>

      <ContactTransitionGroup scene="form">
        <FormWorld
          reducedMotion={reducedMotion}
        />
      </ContactTransitionGroup>

      <ContactTransitionGroup scene="routes">
        <RoutesWorld
          reducedMotion={reducedMotion}
        />
      </ContactTransitionGroup>

      <ContactTransitionGroup scene="cta">
        <CtaWorld
          reducedMotion={reducedMotion}
        />
      </ContactTransitionGroup>
    </>
  );
}

/* ============================================================
   CAMERA
============================================================ */

const CAMERA_POSITIONS: Record<
  ContactSceneName,
  [number, number, number]
> = {
  hero: [0, 0.15, 8.4],
  intent: [0, 0.1, 8],
  form: [0, 0, 7.8],
  routes: [0, 0, 8.1],
  cta: [0, 0, 7.6],
};

function CameraRig({
  reducedMotion,
}: {
  reducedMotion: boolean;
}) {
  const { camera } = useThree();

  const {
    activeScene,
  } = useContactSceneExperience();

  const pointer =
    useGlobalPointer();

  useFrame((_, delta) => {
    const perspectiveCamera =
      camera as PerspectiveCamera;

    const target =
      CAMERA_POSITIONS[activeScene];

    const pointerX = reducedMotion
      ? 0
      : pointer.current.x * 0.18;

    const pointerY = reducedMotion
      ? 0
      : pointer.current.y * 0.12;

    perspectiveCamera.position.x =
      MathUtils.damp(
        perspectiveCamera.position.x,
        target[0] + pointerX,
        2.6,
        delta,
      );

    perspectiveCamera.position.y =
      MathUtils.damp(
        perspectiveCamera.position.y,
        target[1] + pointerY,
        2.6,
        delta,
      );

    perspectiveCamera.position.z =
      MathUtils.damp(
        perspectiveCamera.position.z,
        target[2],
        2.6,
        delta,
      );

    perspectiveCamera.lookAt(
      0.65,
      0,
      0,
    );
  });

  return null;
}

/* ============================================================
   BACKGROUND SIGNAL FIELD
============================================================ */

function BackgroundField({
  compact,
}: {
  compact: boolean;
}) {
  return (
    <group>
      <Sparkles
        count={compact ? 22 : 48}
        scale={
          compact
            ? [7, 5, 3]
            : [11, 7, 4]
        }
        size={compact ? 1.2 : 1.5}
        speed={0.12}
        opacity={0.13}
        color={STEEL}
      />

      <Sparkles
        count={compact ? 8 : 18}
        scale={
          compact
            ? [6, 4, 2]
            : [9, 5, 3]
        }
        size={compact ? 1 : 1.25}
        speed={0.08}
        opacity={0.08}
        color={CYAN}
      />
    </group>
  );
}

/* ============================================================
   LIGHTING
============================================================ */

function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.38} />

      <pointLight
        position={[4, 4, 5]}
        intensity={7}
        color={BLUE}
      />

      <pointLight
        position={[-4, -2, 4]}
        intensity={5}
        color={CYAN}
      />

      <pointLight
        position={[0, 3, -1]}
        intensity={3}
        color={PURPLE}
      />
    </>
  );
}

/* ============================================================
   CANVAS
============================================================ */

export function ContactScene() {
  const reducedMotion =
    useReducedMotion();

  const compact =
    useCompactScene();

  return (
    <Canvas
      dpr={
        compact
          ? [1, 1.25]
          : [1, 1.7]
      }
      gl={{
        alpha: true,
        antialias: !compact,
        powerPreference:
          "high-performance",
      }}
      camera={{
        position: [0, 0.15, 8.4],
        fov: compact ? 53 : 46,
        near: 0.1,
        far: 100,
      }}
      frameloop="always"
      style={{
        background: "transparent",
      }}
    >
      <SceneLighting />

      <BackgroundField
        compact={compact}
      />

      <SceneDirector
        reducedMotion={reducedMotion}
      />

      <CameraRig
        reducedMotion={reducedMotion}
      />
    </Canvas>
  );
}