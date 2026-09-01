"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import {
  ACESFilmicToneMapping,
  AdditiveBlending,
  BufferGeometry,
  CatmullRomCurve3,
  Color,
  Float32BufferAttribute,
  Group,
  MathUtils,
  PerspectiveCamera,
  Vector3,
} from "three";
import {
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  type ResearchSceneName,
  useResearchSceneExperience,
} from "./research-scene-experience";

/* ============================================================
   BRAND
============================================================ */

const BLUE = "#3B82F6";
const TEAL = "#22D3EE";
const GREEN = "#10B981";
const PURPLE = "#A855F7";
const NAVY = "#0A1D2F";

const SCENE_INDEX: Record<ResearchSceneName, number> = {
  hero: 0,
  why: 1,
  areas: 2,
  method: 3,
  current: 4,
  application: 5,
  principles: 6,
  questions: 7,
  cta: 8,
};

/* ============================================================
   SHARED HOOKS
============================================================ */

function useGlobalPointer() {
  const pointer = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      pointer.current.x =
        (event.clientX / window.innerWidth) * 2 - 1;

      pointer.current.y =
        -((event.clientY / window.innerHeight) * 2 - 1);
    };

    window.addEventListener(
      "pointermove",
      onPointerMove,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        onPointerMove,
      );
    };
  }, []);

  return pointer;
}

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] =
    useState(false);

  useEffect(() => {
    const query = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const update = () => {
      setReducedMotion(query.matches);
    };

    update();

    query.addEventListener("change", update);

    return () => {
      query.removeEventListener(
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
    const update = () => {
      setCompact(window.innerWidth < 768);
    };

    update();

    window.addEventListener(
      "resize",
      update,
    );

    return () => {
      window.removeEventListener(
        "resize",
        update,
      );
    };
  }, []);

  return compact;
}

function getSceneWeight(progress: number) {
  const distanceFromCenter =
    Math.abs(progress - 0.5);

  return MathUtils.clamp(
    1 - distanceFromCenter * 1.7,
    0,
    1,
  );
}

/* ============================================================
   NODE
============================================================ */

function ResearchNode({
  position,
  color = BLUE,
  scale = 1,
  active = false,
}: {
  position: [number, number, number];
  color?: string;
  scale?: number;
  active?: boolean;
}) {
  return (
    <group position={position} scale={scale}>
      <mesh>
        <sphereGeometry args={[0.07, 18, 18]} />

        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={active ? 2.4 : 0.75}
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>

      {active && (
        <mesh>
          <sphereGeometry args={[0.16, 18, 18]} />

          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.09}
            blending={AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      )}
    </group>
  );
}

/* ============================================================
   CURVED CONNECTION
============================================================ */

function ResearchConnection({
  start,
  end,
  color = BLUE,
  opacity = 0.22,
  curve = 0.25,
}: {
  start: Vector3;
  end: Vector3;
  color?: string;
  opacity?: number;
  curve?: number;
}) {
  const geometry = useMemo(() => {
    const midpoint = new Vector3()
      .addVectors(start, end)
      .multiplyScalar(0.5);

    midpoint.z += curve;
    midpoint.y += curve * 0.35;

    const path = new CatmullRomCurve3([
      start,
      midpoint,
      end,
    ]);

    const points = path.getPoints(30);

    const nextGeometry =
      new BufferGeometry().setFromPoints(points);

    return nextGeometry;
  }, [start, end, curve]);

  useEffect(() => {
    return () => {
      geometry.dispose();
    };
  }, [geometry]);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        blending={AdditiveBlending}
        depthWrite={false}
      />
    </line>
  );
}

/* ============================================================
   RESEARCH CORE
============================================================ */

function ResearchCore({
  scale = 1,
  color = TEAL,
}: {
  scale?: number;
  color?: string;
}) {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y +=
      delta * 0.12;

    group.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.25) *
      0.08;
  });

  return (
    <group ref={group} scale={scale}>
      <mesh>
        <icosahedronGeometry args={[0.58, 2]} />

        <meshPhysicalMaterial
          color={NAVY}
          emissive={color}
          emissiveIntensity={0.42}
          roughness={0.16}
          metalness={0.22}
          transparent
          opacity={0.82}
          transmission={0.16}
          thickness={0.6}
        />
      </mesh>

      <mesh scale={1.12}>
        <icosahedronGeometry args={[0.58, 1]} />

        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.14}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      <mesh scale={1.55}>
        <sphereGeometry args={[0.58, 24, 24]} />

        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.025}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

/* ============================================================
   01 — HERO
   UNRESOLVED INFORMATION
============================================================ */

function HeroWorld() {
  const compact = useCompactScene();
  const reducedMotion = useReducedMotion();

  const group = useRef<Group>(null);

  const points = useMemo(() => {
    const count = compact ? 24 : 48;

    return Array.from(
      { length: count },
      (_, index) => {
        const angle =
          index * 2.399963229728653;

        const radius =
          1.1 +
          ((index * 0.47) % 3.4);

        const x =
          Math.cos(angle) * radius;

        const y =
          Math.sin(angle * 1.31) *
          (1.15 + (index % 4) * 0.22);

        const z =
          Math.sin(angle) * radius * 0.75;

        return {
          position: [
            x,
            y,
            z,
          ] as [number, number, number],
          scale:
            0.45 +
            (index % 5) * 0.12,
          color:
            index % 7 === 0
              ? TEAL
              : index % 5 === 0
                ? PURPLE
                : BLUE,
        };
      },
    );
  }, [compact]);

  useFrame((state, delta) => {
    if (!group.current) {
      return;
    }

    if (!reducedMotion) {
      group.current.rotation.y +=
        delta * 0.025;

      group.current.rotation.z =
        Math.sin(
          state.clock.elapsedTime * 0.1,
        ) * 0.035;
    }
  });

  return (
    <group ref={group}>
      {points.map(
        (
          point,
          index,
        ) => (
          <ResearchNode
            key={index}
            position={point.position}
            color={point.color}
            scale={point.scale}
            active={index % 11 === 0}
          />
        ),
      )}

      {!compact && (
        <Sparkles
          count={60}
          scale={[9, 5, 5]}
          size={1.1}
          speed={
            reducedMotion ? 0 : 0.12
          }
          opacity={0.22}
          color={BLUE}
        />
      )}
    </group>
  );
}

/* ============================================================
   02 — WHY RESEARCH
   SIGNAL SEPARATES FROM NOISE
============================================================ */

function WhyWorld() {
  const group = useRef<Group>(null);

  const noise = useMemo(
    () =>
      Array.from(
        { length: 28 },
        (_, index) => {
          const angle =
            index * 1.87;

          const radius =
            1.8 +
            (index % 5) * 0.42;

          return [
            Math.cos(angle) * radius,
            Math.sin(angle * 1.4) * 1.7,
            Math.sin(angle) *
              radius *
              0.55,
          ] as [
            number,
            number,
            number,
          ];
        },
      ),
    [],
  );

  const signal = useMemo(
    () => [
      new Vector3(-2.4, -0.6, 0),
      new Vector3(-1.3, -0.2, 0.1),
      new Vector3(-0.2, 0.08, 0),
      new Vector3(1.05, 0.36, 0.05),
      new Vector3(2.25, 0.7, 0),
    ],
    [],
  );

  useFrame(
    (state) => {
      if (!group.current) {
        return;
      }

      group.current.rotation.y =
        Math.sin(
          state.clock.elapsedTime * 0.16,
        ) * 0.08;
    },
  );

  return (
    <group ref={group}>
      {noise.map(
        (position, index) => (
          <ResearchNode
            key={`noise-${index}`}
            position={position}
            color={
              index % 4 === 0
                ? PURPLE
                : BLUE
            }
            scale={0.45}
          />
        ),
      )}

      {signal.map(
        (position, index) => (
          <ResearchNode
            key={`signal-${index}`}
            position={[
              position.x,
              position.y,
              position.z,
            ]}
            color={TEAL}
            scale={
              0.8 + index * 0.12
            }
            active
          />
        ),
      )}

      {signal
        .slice(0, -1)
        .map((start, index) => (
          <ResearchConnection
            key={`connection-${index}`}
            start={start}
            end={signal[index + 1]}
            color={TEAL}
            opacity={0.38}
            curve={
              index % 2 === 0
                ? 0.18
                : -0.18
            }
          />
        ))}
    </group>
  );
}

/* ============================================================
   03 — RESEARCH AREAS
   INFORMATION FORMS CLUSTERS
============================================================ */

function ResearchCluster({
  position,
  color,
  seed,
}: {
  position: [
    number,
    number,
    number,
  ];
  color: string;
  seed: number;
}) {
  const group = useRef<Group>(null);

  const nodes = useMemo(
    () =>
      Array.from(
        { length: 9 },
        (_, index) => {
          const angle =
            index * 2.13 +
            seed;

          const radius =
            0.38 +
            (index % 3) * 0.18;

          return [
            Math.cos(angle) * radius,
            Math.sin(angle * 1.4) *
              radius,
            Math.sin(angle) *
              radius *
              0.7,
          ] as [
            number,
            number,
            number,
          ];
        },
      ),
    [seed],
  );

  useFrame(
    (state) => {
      if (!group.current) {
        return;
      }

      group.current.rotation.y =
        state.clock.elapsedTime *
        0.04 *
        (seed + 1);
    },
  );

  return (
    <group
      ref={group}
      position={position}
    >
      <ResearchNode
        position={[0, 0, 0]}
        color={color}
        scale={1.25}
        active
      />

      {nodes.map(
        (node, index) => (
          <ResearchNode
            key={index}
            position={node}
            color={color}
            scale={0.45}
          />
        ),
      )}
    </group>
  );
}

function AreasWorld() {
  return (
    <group>
      <ResearchCluster
        position={[-2.25, 1.2, 0]}
        color={BLUE}
        seed={0.5}
      />

      <ResearchCluster
        position={[1.85, 1.25, -0.25]}
        color={TEAL}
        seed={1.2}
      />

      <ResearchCluster
        position={[-1.5, -1.35, 0.15]}
        color={PURPLE}
        seed={2}
      />

      <ResearchCluster
        position={[2.1, -1.15, 0]}
        color={GREEN}
        seed={2.7}
      />

      <ResearchCore
        scale={0.65}
        color={TEAL}
      />
    </group>
  );
}

/* ============================================================
   04 — METHOD
   OBSERVATION → QUESTION → INVESTIGATION → TEST → LEARN
============================================================ */

function MethodWorld() {
  const {
    sceneProgress,
  } = useResearchSceneExperience();

  const group = useRef<Group>(null);

  const stages = useMemo(
    () => [
      new Vector3(-3.2, 0, 0),
      new Vector3(-1.6, 0.45, 0),
      new Vector3(0, -0.2, 0),
      new Vector3(1.65, 0.38, 0),
      new Vector3(3.2, 0, 0),
    ],
    [],
  );

  useFrame(
    (state) => {
      if (!group.current) {
        return;
      }

      const progress =
        sceneProgress.current.method;

      group.current.rotation.y =
        Math.sin(
          state.clock.elapsedTime * 0.13,
        ) * 0.06;

      group.current.position.x =
        MathUtils.lerp(
          0.35,
          -0.35,
          progress,
        );
    },
  );

  return (
    <group ref={group}>
      {stages.map(
        (stage, index) => (
          <ResearchNode
            key={index}
            position={[
              stage.x,
              stage.y,
              stage.z,
            ]}
            color={
              index === 4
                ? GREEN
                : index >= 2
                  ? TEAL
                  : BLUE
            }
            scale={
              0.8 + index * 0.14
            }
            active={
              index === 2 ||
              index === 4
            }
          />
        ),
      )}

      {stages
        .slice(0, -1)
        .map((stage, index) => (
          <ResearchConnection
            key={index}
            start={stage}
            end={stages[index + 1]}
            color={
              index > 1
                ? TEAL
                : BLUE
            }
            opacity={
              0.24 +
              index * 0.055
            }
            curve={
              index % 2 === 0
                ? 0.28
                : -0.24
            }
          />
        ))}
    </group>
  );
}

/* ============================================================
   05 — CURRENT RESEARCH
   EVIDENCE FORMS AN ANALYTICAL MODEL
============================================================ */

function CurrentWorld() {
  const group = useRef<Group>(null);

  const evidence = useMemo(
    () =>
      [
        [-2.5, 1.4, 0.2],
        [-2.1, -0.8, -0.2],
        [-0.9, 1.7, 0.1],
        [-0.5, -1.5, 0.3],
        [0.9, 1.45, -0.1],
        [1.5, -1.25, 0.2],
        [2.6, 0.45, 0],
      ] as [
        number,
        number,
        number,
      ][],
    [],
  );

  useFrame(
    (state, delta) => {
      if (!group.current) {
        return;
      }

      group.current.rotation.y +=
        delta * 0.045;

      group.current.rotation.x =
        Math.sin(
          state.clock.elapsedTime * 0.18,
        ) * 0.06;
    },
  );

  return (
    <group ref={group}>
      <ResearchCore
        scale={1.18}
        color={TEAL}
      />

      {evidence.map(
        (position, index) => {
          const point =
            new Vector3(...position);

          return (
            <group key={index}>
              <ResearchNode
                position={position}
                color={
                  index % 3 === 0
                    ? PURPLE
                    : index % 2 === 0
                      ? TEAL
                      : BLUE
                }
                scale={0.7}
                active={index % 3 === 0}
              />

              <ResearchConnection
                start={point}
                end={
                  new Vector3(
                    0,
                    0,
                    0,
                  )
                }
                color={
                  index % 2 === 0
                    ? TEAL
                    : BLUE
                }
                opacity={0.22}
                curve={
                  index % 2 === 0
                    ? 0.3
                    : -0.25
                }
              />
            </group>
          );
        },
      )}
    </group>
  );
}

/* ============================================================
   06 — APPLICATION
   KNOWLEDGE BRANCHES INTO ACTION
============================================================ */

function ApplicationWorld() {
  const core = useMemo(
    () => new Vector3(-1.4, 0, 0),
    [],
  );

  const destinations = useMemo(
    () => [
      new Vector3(1.8, 1.55, 0),
      new Vector3(2.5, 0.05, 0.15),
      new Vector3(1.8, -1.55, 0),
    ],
    [],
  );

  return (
    <group>
      <group
        position={[
          core.x,
          core.y,
          core.z,
        ]}
      >
        <ResearchCore
          scale={0.9}
          color={TEAL}
        />
      </group>

      {destinations.map(
        (destination, index) => (
          <group key={index}>
            <ResearchNode
              position={[
                destination.x,
                destination.y,
                destination.z,
              ]}
              color={
                index === 0
                  ? BLUE
                  : index === 1
                    ? PURPLE
                    : GREEN
              }
              scale={
                1 + index * 0.12
              }
              active
            />

            <ResearchConnection
              start={core}
              end={destination}
              color={
                index === 0
                  ? BLUE
                  : index === 1
                    ? PURPLE
                    : GREEN
              }
              opacity={0.36}
              curve={
                (index - 1) * 0.4
              }
            />
          </group>
        ),
      )}
    </group>
  );
}

/* ============================================================
   07 — PRINCIPLES
   FOUR ANCHORS STABILISE THE SYSTEM
============================================================ */

function PrinciplesWorld() {
  const group = useRef<Group>(null);

  const anchors = useMemo(
    () => [
      {
        position: new Vector3(
          -2.2,
          1.55,
          0,
        ),
        color: BLUE,
      },
      {
        position: new Vector3(
          2.2,
          1.55,
          0,
        ),
        color: TEAL,
      },
      {
        position: new Vector3(
          -2.2,
          -1.55,
          0,
        ),
        color: PURPLE,
      },
      {
        position: new Vector3(
          2.2,
          -1.55,
          0,
        ),
        color: GREEN,
      },
    ],
    [],
  );

  useFrame(
    (state) => {
      if (!group.current) {
        return;
      }

      group.current.rotation.y =
        Math.sin(
          state.clock.elapsedTime * 0.1,
        ) * 0.04;
    },
  );

  return (
    <group ref={group}>
      <ResearchCore
        scale={0.82}
        color={TEAL}
      />

      {anchors.map(
        (anchor, index) => (
          <group key={index}>
            <ResearchNode
              position={[
                anchor.position.x,
                anchor.position.y,
                anchor.position.z,
              ]}
              color={anchor.color}
              scale={1.1}
              active
            />

            <ResearchConnection
              start={anchor.position}
              end={
                new Vector3(
                  0,
                  0,
                  0,
                )
              }
              color={anchor.color}
              opacity={0.3}
              curve={
                index % 2 === 0
                  ? 0.22
                  : -0.22
              }
            />
          </group>
        ),
      )}

      <ResearchConnection
        start={anchors[0].position}
        end={anchors[1].position}
        color={BLUE}
        opacity={0.1}
      />

      <ResearchConnection
        start={anchors[1].position}
        end={anchors[3].position}
        color={TEAL}
        opacity={0.1}
      />

      <ResearchConnection
        start={anchors[3].position}
        end={anchors[2].position}
        color={GREEN}
        opacity={0.1}
      />

      <ResearchConnection
        start={anchors[2].position}
        end={anchors[0].position}
        color={PURPLE}
        opacity={0.1}
      />
    </group>
  );
}

/* ============================================================
   08 — OPEN QUESTIONS
   KNOWLEDGE CREATES NEW UNKNOWN TERRITORY
============================================================ */

function QuestionsWorld() {
  const compact = useCompactScene();
  const group = useRef<Group>(null);

  const questions = useMemo(() => {
    const count = compact ? 9 : 16;

    return Array.from(
      { length: count },
      (_, index) => {
        const angle =
          (index / count) *
          Math.PI *
          2;

        const radius =
          2.2 +
          (index % 4) * 0.45;

        return {
          position: new Vector3(
            Math.cos(angle) * radius,
            Math.sin(
              angle * 1.3,
            ) *
              (1.4 +
                (index % 3) *
                  0.25),
            Math.sin(angle) *
              radius *
              0.4,
          ),
          color:
            index % 4 === 0
              ? PURPLE
              : index % 3 === 0
                ? TEAL
                : BLUE,
        };
      },
    );
  }, [compact]);

  useFrame(
    (state, delta) => {
      if (!group.current) {
        return;
      }

      group.current.rotation.y +=
        delta * 0.025;

      group.current.scale.setScalar(
        1 +
          Math.sin(
            state.clock.elapsedTime *
              0.35,
          ) *
            0.018,
      );
    },
  );

  return (
    <group ref={group}>
      <ResearchCore
        scale={1}
        color={TEAL}
      />

      {questions.map(
        (question, index) => (
          <group key={index}>
            <ResearchNode
              position={[
                question.position.x,
                question.position.y,
                question.position.z,
              ]}
              color={question.color}
              scale={
                0.55 +
                (index % 4) * 0.08
              }
              active={index % 5 === 0}
            />

            {index % 3 === 0 && (
              <ResearchConnection
                start={
                  new Vector3(
                    0,
                    0,
                    0,
                  )
                }
                end={question.position}
                color={question.color}
                opacity={0.12}
                curve={
                  index % 2 === 0
                    ? 0.35
                    : -0.35
                }
              />
            )}
          </group>
        ),
      )}
    </group>
  );
}

/* ============================================================
   09 — CTA
   ONE PRECISE SIGNAL
============================================================ */

function CtaWorld() {
  const compact = useCompactScene();
  const reducedMotion = useReducedMotion();
  const group = useRef<Group>(null);

  useFrame(
    (state, delta) => {
      if (!group.current) {
        return;
      }

      if (!reducedMotion) {
        group.current.rotation.y +=
          delta * 0.06;

        group.current.rotation.x +=
          delta * 0.018;
      }

      const pulse =
        1 +
        Math.sin(
          state.clock.elapsedTime *
            0.75,
        ) *
          0.025;

      const baseScale =
        compact ? 0.78 : 1;

      group.current.scale.setScalar(
        baseScale * pulse,
      );
    },
  );

  return (
    <group ref={group}>
      <ResearchCore
        scale={1.35}
        color={TEAL}
      />

      <mesh
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
      >
        <torusGeometry
          args={[
            1.35,
            0.006,
            8,
            120,
          ]}
        />

        <meshBasicMaterial
          color={BLUE}
          transparent
          opacity={0.18}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      <mesh
        rotation={[
          Math.PI / 2.8,
          0.4,
          0,
        ]}
      >
        <torusGeometry
          args={[
            1.8,
            0.004,
            8,
            120,
          ]}
        />

        <meshBasicMaterial
          color={PURPLE}
          transparent
          opacity={0.09}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      <ResearchNode
        position={[0, 2.25, 0]}
        color={TEAL}
        scale={0.65}
      />

      <ResearchNode
        position={[0, -2.25, 0]}
        color={BLUE}
        scale={0.65}
      />
    </group>
  );
}

/* ============================================================
   SPATIAL SCENE TRANSITION

   No opacity crossfade.

   Previous and next research states physically move away from
   or towards the observation field.
============================================================ */

function ResearchTransitionGroup({
  scene,
  activeScene,
  progress,
  children,
}: {
  scene: ResearchSceneName;
  activeScene: ResearchSceneName;
  progress: number;
  children: ReactNode;
}) {
  const group = useRef<Group>(null);

  const sceneIndex =
    SCENE_INDEX[scene];

  const activeIndex =
    SCENE_INDEX[activeScene];

  const difference =
    sceneIndex - activeIndex;

  const visible =
    Math.abs(difference) <= 1;

  useFrame((_, delta) => {
    if (!group.current) {
      return;
    }

    const isActive =
      difference === 0;

    const weight =
      getSceneWeight(progress);

    const targetX = isActive
      ? 0
      : difference * 5.5;

    const targetY = isActive
      ? 0
      : difference > 0
        ? -0.7
        : 0.7;

    const targetZ = isActive
      ? 0
      : -3.6;

    const targetScale = isActive
      ? 0.9 + weight * 0.1
      : 0.68;

    const targetRotationY =
      difference * -0.2;

    group.current.position.x =
      MathUtils.damp(
        group.current.position.x,
        targetX,
        4.5,
        delta,
      );

    group.current.position.y =
      MathUtils.damp(
        group.current.position.y,
        targetY,
        4.5,
        delta,
      );

    group.current.position.z =
      MathUtils.damp(
        group.current.position.z,
        targetZ,
        4.5,
        delta,
      );

    const nextScale =
      MathUtils.damp(
        group.current.scale.x,
        targetScale,
        4.5,
        delta,
      );

    group.current.scale.setScalar(
      nextScale,
    );

    group.current.rotation.y =
      MathUtils.damp(
        group.current.rotation.y,
        targetRotationY,
        4.2,
        delta,
      );

    group.current.visible =
      visible;
  });

  return (
    <group
      ref={group}
      visible={visible}
    >
      {children}
    </group>
  );
}

/* ============================================================
   SCENE DIRECTOR
============================================================ */

function ResearchSceneDirector() {
  const {
    activeScene,
    sceneProgress,
  } = useResearchSceneExperience();

  return (
    <>
      <ResearchTransitionGroup
        scene="hero"
        activeScene={activeScene}
        progress={
          sceneProgress.current.hero
        }
      >
        <HeroWorld />
      </ResearchTransitionGroup>

      <ResearchTransitionGroup
        scene="why"
        activeScene={activeScene}
        progress={
          sceneProgress.current.why
        }
      >
        <WhyWorld />
      </ResearchTransitionGroup>

      <ResearchTransitionGroup
        scene="areas"
        activeScene={activeScene}
        progress={
          sceneProgress.current.areas
        }
      >
        <AreasWorld />
      </ResearchTransitionGroup>

      <ResearchTransitionGroup
        scene="method"
        activeScene={activeScene}
        progress={
          sceneProgress.current.method
        }
      >
        <MethodWorld />
      </ResearchTransitionGroup>

      <ResearchTransitionGroup
        scene="current"
        activeScene={activeScene}
        progress={
          sceneProgress.current.current
        }
      >
        <CurrentWorld />
      </ResearchTransitionGroup>

      <ResearchTransitionGroup
        scene="application"
        activeScene={activeScene}
        progress={
          sceneProgress.current.application
        }
      >
        <ApplicationWorld />
      </ResearchTransitionGroup>

      <ResearchTransitionGroup
        scene="principles"
        activeScene={activeScene}
        progress={
          sceneProgress.current.principles
        }
      >
        <PrinciplesWorld />
      </ResearchTransitionGroup>

      <ResearchTransitionGroup
        scene="questions"
        activeScene={activeScene}
        progress={
          sceneProgress.current.questions
        }
      >
        <QuestionsWorld />
      </ResearchTransitionGroup>

      <ResearchTransitionGroup
        scene="cta"
        activeScene={activeScene}
        progress={
          sceneProgress.current.cta
        }
      >
        <CtaWorld />
      </ResearchTransitionGroup>
    </>
  );
}

/* ============================================================
   CAMERA

   Research camera movement is intentionally restrained.

   The feeling should be observation / inspection rather than
   travelling through a venture ecosystem.
============================================================ */

function ResearchCameraRig() {
  const {
    activeScene,
  } = useResearchSceneExperience();

  const { camera } = useThree();

  const pointer =
    useGlobalPointer();

  const reducedMotion =
    useReducedMotion();

  const targets: Record<
    ResearchSceneName,
    [number, number, number]
  > = {
    hero: [0.55, 0.1, 8.5],
    why: [-0.35, 0.05, 8.1],
    areas: [0.25, 0.05, 8.8],
    method: [0, 0.1, 8.6],
    current: [0.4, 0, 8],
    application: [0, 0, 8.5],
    principles: [0, 0, 8.3],
    questions: [0, 0, 9],
    cta: [0, 0, 7.7],
  };

  useFrame((_, delta) => {
    const perspectiveCamera =
      camera as PerspectiveCamera;

    const target =
      targets[activeScene];

    const pointerX =
      reducedMotion
        ? 0
        : pointer.current.x * 0.22;

    const pointerY =
      reducedMotion
        ? 0
        : pointer.current.y * 0.14;

    perspectiveCamera.position.x =
      MathUtils.damp(
        perspectiveCamera.position.x,
        target[0] + pointerX,
        3.4,
        delta,
      );

    perspectiveCamera.position.y =
      MathUtils.damp(
        perspectiveCamera.position.y,
        target[1] + pointerY,
        3.4,
        delta,
      );

    perspectiveCamera.position.z =
      MathUtils.damp(
        perspectiveCamera.position.z,
        target[2],
        3.4,
        delta,
      );

    perspectiveCamera.lookAt(
      0,
      0,
      0,
    );
  });

  return null;
}

/* ============================================================
   BACKGROUND FIELD
============================================================ */

function ResearchBackgroundField() {
  const compact =
    useCompactScene();

  const reducedMotion =
    useReducedMotion();

  return (
    <>
      <Sparkles
        count={compact ? 22 : 48}
        scale={[12, 8, 7]}
        size={0.75}
        speed={
          reducedMotion ? 0 : 0.08
        }
        opacity={0.1}
        color={BLUE}
      />

      {!compact && (
        <Sparkles
          count={24}
          scale={[10, 7, 5]}
          size={0.55}
          speed={
            reducedMotion
              ? 0
              : 0.045
          }
          opacity={0.07}
          color={TEAL}
        />
      )}
    </>
  );
}

/* ============================================================
   LIGHTING
============================================================ */

function ResearchLighting() {
  return (
    <>
      <ambientLight intensity={0.7} />

      <directionalLight
        position={[4, 6, 7]}
        intensity={1.15}
        color="#FFFFFF"
      />

      <pointLight
        position={[-4, 2, 4]}
        intensity={8}
        distance={11}
        color={BLUE}
      />

      <pointLight
        position={[4, -1, 3]}
        intensity={7}
        distance={10}
        color={TEAL}
      />

      <pointLight
        position={[0, 4, -2]}
        intensity={5}
        distance={9}
        color={PURPLE}
      />
    </>
  );
}

/* ============================================================
   CANVAS CONTENT
============================================================ */

function ResearchCanvasContent() {
  return (
    <>
      <ResearchLighting />

      <ResearchBackgroundField />

      <ResearchSceneDirector />

      <ResearchCameraRig />
    </>
  );
}

/* ============================================================
   EXPORTED PERSISTENT SCENE
============================================================ */

export function ResearchPageScene() {
  const compact =
    useCompactScene();

  return (
    <Canvas
      camera={{
        position: [0, 0, 8.5],
        fov: compact ? 52 : 46,
        near: 0.1,
        far: 100,
      }}
      dpr={
        compact
          ? [1, 1.25]
          : [1, 1.75]
      }
      gl={{
        antialias: !compact,
        alpha: true,
        powerPreference:
          "high-performance",
      }}
      frameloop="always"
      onCreated={({ gl }) => {
        gl.toneMapping =
          ACESFilmicToneMapping;

        gl.toneMappingExposure =
          1.05;

        gl.setClearColor(
          new Color("#000000"),
          0,
        );
      }}
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
      }}
    >
      <ResearchCanvasContent />
    </Canvas>
  );
}