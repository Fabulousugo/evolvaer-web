"use client";

import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber";

import {
  Float,
  Sparkles,
} from "@react-three/drei";

import {
  ACESFilmicToneMapping,
  AdditiveBlending,
  BufferGeometry,
  CatmullRomCurve3,
  Color,
  Float32BufferAttribute,
  Group,
  MathUtils,
  Vector3,
} from "three";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
  type ReactNode,
} from "react";

import {
  type WorkSceneName,
  useWorkSceneExperience,
} from "./work-scene-experience";

/* =========================================================
   CONSTANTS
========================================================= */

const SCENE_ORDER: WorkSceneName[] = [
  "hero",
  "explore",
  "research",
  "engineer",
  "build",
  "scale",
  "impact",
  "integrated",
  "cta",
];

const SCENE_INDEX: Record<
  WorkSceneName,
  number
> = {
  hero: 0,
  explore: 1,
  research: 2,
  engineer: 3,
  build: 4,
  scale: 5,
  impact: 6,
  integrated: 7,
  cta: 8,
};

const BLUE = "#3B82F6";
const TEAL = "#22D3EE";
const VIOLET = "#A855F7";
const ORANGE = "#F97316";
const WHITE = "#EAF2FF";

/* =========================================================
   GLOBAL POINTER
========================================================= */

function useGlobalPointer() {
  const pointer = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const update = (
      event: PointerEvent,
    ) => {
      pointer.current.x =
        (event.clientX /
          window.innerWidth) *
          2 -
        1;

      pointer.current.y =
        -(
          (event.clientY /
            window.innerHeight) *
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

/* =========================================================
   REDUCED MOTION
========================================================= */

function useReducedMotion() {
  const [reduced, setReduced] =
    useState(false);

  useEffect(() => {
    const query =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      );

    const update = () => {
      setReduced(query.matches);
    };

    update();

    query.addEventListener(
      "change",
      update,
    );

    return () => {
      query.removeEventListener(
        "change",
        update,
      );
    };
  }, []);

  return reduced;
}

/* =========================================================
   COMPACT / MOBILE SCENE
========================================================= */

function useCompactScene() {
  const [compact, setCompact] =
    useState(false);

  useEffect(() => {
    const update = () => {
      setCompact(
        window.innerWidth < 768,
      );
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

/* =========================================================
   HELPERS
========================================================= */

function clamp01(value: number) {
  return Math.min(
    1,
    Math.max(0, value),
  );
}

function smoothstep(value: number) {
  const t = clamp01(value);

  return (
    t *
    t *
    (3 - 2 * t)
  );
}

/* =========================================================
   SIGNAL POINT CLOUD
========================================================= */

function createSignalPositions(
  count: number,
  radius = 4,
) {
  const positions =
    new Float32Array(
      count * 3,
    );

  for (
    let index = 0;
    index < count;
    index++
  ) {
    const i = index * 3;

    const angle =
      Math.random() *
      Math.PI *
      2;

    const distance =
      radius *
      (0.25 +
        Math.random() *
          0.75);

    positions[i] =
      Math.cos(angle) *
      distance;

    positions[i + 1] =
      (Math.random() - 0.5) *
      radius *
      1.25;

    positions[i + 2] =
      Math.sin(angle) *
      distance *
      0.7;
  }

  return positions;
}

/* =========================================================
   HERO WORLD
   Raw possibility / unresolved signals
========================================================= */

function HeroWorld({
  progressRef,
  pointer,
  compact,
  reducedMotion,
}: {
  progressRef: MutableRefObject<
    Record<WorkSceneName, number>
  >;
  pointer: MutableRefObject<{
    x: number;
    y: number;
  }>;
  compact: boolean;
  reducedMotion: boolean;
}) {
  const group =
    useRef<Group>(null);

  const pointCount =
    compact ? 70 : 130;

  const positions =
    useMemo(
      () =>
        createSignalPositions(
          pointCount,
          4.1,
        ),
      [pointCount],
    );

  const curveGeometry =
    useMemo(() => {
      const points = [
        new Vector3(
          -4.1,
          -1.2,
          0,
        ),
        new Vector3(
          -2.1,
          1.5,
          0.4,
        ),
        new Vector3(
          0,
          -0.2,
          0.8,
        ),
        new Vector3(
          2,
          1.1,
          -0.25,
        ),
        new Vector3(
          4.3,
          -0.6,
          0.2,
        ),
      ];

      const curve =
        new CatmullRomCurve3(
          points,
        );

      return new BufferGeometry().setFromPoints(
        curve.getPoints(
          compact ? 60 : 110,
        ),
      );
    }, [compact]);

  useFrame(
    (_, delta) => {
      if (!group.current) return;

      const progress =
        progressRef.current.hero;

      const px =
        pointer.current.x;

      const py =
        pointer.current.y;

      if (!reducedMotion) {
        group.current.rotation.y +=
          delta * 0.07;

        group.current.rotation.x =
          MathUtils.lerp(
            group.current.rotation.x,
            py * 0.08,
            0.03,
          );
      }

      group.current.rotation.z =
        MathUtils.lerp(
          group.current.rotation.z,
          px * 0.05,
          0.03,
        );

      const scale =
        0.92 +
        progress *
          0.09;

      group.current.scale.setScalar(
        scale,
      );
    },
  );

  return (
    <group
      ref={group}
      position={[1.65, 0, 0]}
    >
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              positions,
              3,
            ]}
          />
        </bufferGeometry>

        <pointsMaterial
          color={BLUE}
          size={
            compact
              ? 0.055
              : 0.065
          }
          transparent
          opacity={0.82}
          depthWrite={false}
          blending={
            AdditiveBlending
          }
          sizeAttenuation
        />
      </points>

      <line geometry={curveGeometry}>
        <lineBasicMaterial
          color={TEAL}
          transparent
          opacity={0.5}
        />
      </line>

      <Float
        speed={
          reducedMotion ? 0 : 1
        }
        rotationIntensity={
          reducedMotion
            ? 0
            : 0.2
        }
        floatIntensity={
          reducedMotion
            ? 0
            : 0.4
        }
      >
        <mesh>
          <icosahedronGeometry
            args={[0.56, 1]}
          />

          <meshStandardMaterial
            color={BLUE}
            emissive={BLUE}
            emissiveIntensity={0.35}
            wireframe
            transparent
            opacity={0.7}
          />
        </mesh>
      </Float>

      <Sparkles
        count={
          compact ? 18 : 35
        }
        scale={[7, 5, 5]}
        size={1.8}
        speed={
          reducedMotion
            ? 0
            : 0.25
        }
        color={TEAL}
      />
    </group>
  );
}

/* =========================================================
   EXPLORE WORLD
   Signals are discovered and trajectories appear
========================================================= */

function ExploreWorld({
  progressRef,
  compact,
  reducedMotion,
}: {
  progressRef: MutableRefObject<
    Record<WorkSceneName, number>
  >;
  compact: boolean;
  reducedMotion: boolean;
}) {
  const group =
    useRef<Group>(null);

  const count =
    compact ? 55 : 100;

  const positions =
    useMemo(
      () =>
        createSignalPositions(
          count,
          3.4,
        ),
      [count],
    );

  const trajectories =
    useMemo(() => {
      const result: BufferGeometry[] =
        [];

      const amount =
        compact ? 3 : 6;

      for (
        let i = 0;
        i < amount;
        i++
      ) {
        const offset =
          i -
          (amount - 1) / 2;

        const curve =
          new CatmullRomCurve3([
            new Vector3(
              -4,
              offset * 0.6,
              -0.4,
            ),
            new Vector3(
              -2,
              offset * 0.2 +
                Math.sin(i),
              0.5,
            ),
            new Vector3(
              0,
              offset * 0.16,
              0,
            ),
            new Vector3(
              2.2,
              -offset * 0.25,
              0.4,
            ),
            new Vector3(
              4,
              -offset * 0.45,
              -0.2,
            ),
          ]);

        result.push(
          new BufferGeometry().setFromPoints(
            curve.getPoints(
              compact
                ? 40
                : 80,
            ),
          ),
        );
      }

      return result;
    }, [compact]);

  useFrame(
    (_, delta) => {
      if (!group.current) return;

      const progress =
        smoothstep(
          progressRef.current
            .explore,
        );

      if (!reducedMotion) {
        group.current.rotation.y +=
          delta *
          (0.04 +
            progress * 0.04);
      }

      group.current.rotation.z =
        Math.sin(
          progress *
            Math.PI,
        ) * 0.04;
    },
  );

  return (
    <group
      ref={group}
      position={[1.6, 0, 0]}
    >
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              positions,
              3,
            ]}
          />
        </bufferGeometry>

        <pointsMaterial
          color={BLUE}
          size={0.065}
          transparent
          opacity={0.82}
          depthWrite={false}
          blending={
            AdditiveBlending
          }
        />
      </points>

      {trajectories.map(
        (
          geometry,
          index,
        ) => (
          <line
            key={index}
            geometry={geometry}
          >
            <lineBasicMaterial
              color={
                index % 2 === 0
                  ? TEAL
                  : VIOLET
              }
              transparent
              opacity={0.43}
            />
          </line>
        ),
      )}

      <Sparkles
        count={
          compact ? 15 : 30
        }
        scale={[7, 5, 4]}
        size={1.6}
        speed={
          reducedMotion
            ? 0
            : 0.3
        }
        color={WHITE}
      />
    </group>
  );
}

/* =========================================================
   RESEARCH WORLD
   Signals organise into a network
========================================================= */

function ResearchWorld({
  progressRef,
  reducedMotion,
}: {
  progressRef: MutableRefObject<
    Record<WorkSceneName, number>
  >;
  reducedMotion: boolean;
}) {
  const group =
    useRef<Group>(null);

  const nodes = useMemo(
    () => [
      [-2.4, 1.35, 0],
      [-1.1, -1.35, 0.5],
      [0, 0.4, 0],
      [1.2, -1, -0.35],
      [2.5, 1.2, 0.25],
      [0.7, 1.8, -0.5],
      [-2.3, -0.2, -0.5],
    ],
    [],
  );

  const connections =
    useMemo(
      () => [
        [0, 2],
        [0, 6],
        [1, 2],
        [1, 6],
        [2, 3],
        [2, 5],
        [3, 4],
        [4, 5],
        [3, 5],
      ],
      [],
    );

  const lineGeometry =
    useMemo(() => {
      const vertices: number[] =
        [];

      for (const [
        a,
        b,
      ] of connections) {
        vertices.push(
          ...nodes[a],
          ...nodes[b],
        );
      }

      const geometry =
        new BufferGeometry();

      geometry.setAttribute(
        "position",
        new Float32BufferAttribute(
          vertices,
          3,
        ),
      );

      return geometry;
    }, [
      connections,
      nodes,
    ]);

  useFrame(
    (_, delta) => {
      if (!group.current) return;

      const progress =
        smoothstep(
          progressRef.current
            .research,
        );

      if (!reducedMotion) {
        group.current.rotation.y +=
          delta * 0.055;
      }

      group.current.scale.setScalar(
        0.82 +
          progress * 0.18,
      );
    },
  );

  return (
    <group
      ref={group}
      position={[1.55, 0, 0]}
    >
      <lineSegments
        geometry={lineGeometry}
      >
        <lineBasicMaterial
          color={TEAL}
          transparent
          opacity={0.55}
        />
      </lineSegments>

      {nodes.map(
        (
          position,
          index,
        ) => (
          <Float
            key={index}
            speed={
              reducedMotion
                ? 0
                : 0.7
            }
            floatIntensity={
              reducedMotion
                ? 0
                : 0.2
            }
          >
            <mesh
              position={
                position as [
                  number,
                  number,
                  number,
                ]
              }
            >
              <sphereGeometry
                args={[
                  index === 2
                    ? 0.19
                    : 0.11,
                  16,
                  16,
                ]}
              />

              <meshStandardMaterial
                color={
                  index === 2
                    ? TEAL
                    : BLUE
                }
                emissive={
                  index === 2
                    ? TEAL
                    : BLUE
                }
                emissiveIntensity={
                  index === 2
                    ? 1.1
                    : 0.45
                }
              />
            </mesh>
          </Float>
        ),
      )}

      <mesh>
        <icosahedronGeometry
          args={[2.85, 1]}
        />

        <meshBasicMaterial
          color={VIOLET}
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   ENGINEER WORLD
   Network becomes structured modules
========================================================= */

function EngineerWorld({
  progressRef,
  reducedMotion,
}: {
  progressRef: MutableRefObject<
    Record<WorkSceneName, number>
  >;
  reducedMotion: boolean;
}) {
  const group =
    useRef<Group>(null);

  const modules = [
    [-1.7, 1.1, 0],
    [0, 1.1, 0],
    [1.7, 1.1, 0],
    [-1.7, -1.1, 0],
    [0, -1.1, 0],
    [1.7, -1.1, 0],
  ];

  useFrame(
    (_, delta) => {
      if (!group.current) return;

      const progress =
        smoothstep(
          progressRef.current
            .engineer,
        );

      if (!reducedMotion) {
        group.current.rotation.y +=
          delta * 0.05;
      }

      group.current.rotation.x =
        MathUtils.lerp(
          group.current.rotation.x,
          -0.1 +
            progress * 0.2,
          0.04,
        );
    },
  );

  return (
    <group
      ref={group}
      position={[1.6, 0, 0]}
    >
      {modules.map(
        (
          position,
          index,
        ) => (
          <group
            key={index}
            position={
              position as [
                number,
                number,
                number,
              ]
            }
          >
            <mesh>
              <boxGeometry
                args={[
                  1.05,
                  1.05,
                  1.05,
                ]}
              />

              <meshStandardMaterial
                color={
                  index % 3 === 0
                    ? BLUE
                    : index % 3 ===
                        1
                      ? TEAL
                      : VIOLET
                }
                wireframe
                transparent
                opacity={0.72}
              />
            </mesh>

            <mesh
              scale={0.2}
            >
              <octahedronGeometry
                args={[1, 0]}
              />

              <meshStandardMaterial
                color={WHITE}
                emissive={
                  index % 2 === 0
                    ? BLUE
                    : TEAL
                }
                emissiveIntensity={
                  0.8
                }
              />
            </mesh>
          </group>
        ),
      )}

      <mesh
        scale={[3.15, 2.15, 1]}
      >
        <boxGeometry
          args={[1, 1, 1]}
        />

        <meshBasicMaterial
          color={BLUE}
          wireframe
          transparent
          opacity={0.09}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   BUILD WORLD
   Modules assemble into one coherent product/system
========================================================= */

function BuildWorld({
  progressRef,
  reducedMotion,
}: {
  progressRef: MutableRefObject<
    Record<WorkSceneName, number>
  >;
  reducedMotion: boolean;
}) {
  const group =
    useRef<Group>(null);

  useFrame(
    (_, delta) => {
      if (!group.current) return;

      const progress =
        smoothstep(
          progressRef.current.build,
        );

      if (!reducedMotion) {
        group.current.rotation.y +=
          delta * 0.075;
      }

      group.current.rotation.x =
        -0.14 +
        progress * 0.18;

      group.current.scale.setScalar(
        0.9 +
          progress * 0.1,
      );
    },
  );

  return (
    <group
      ref={group}
      position={[1.55, 0, 0]}
    >
      <Float
        speed={
          reducedMotion
            ? 0
            : 0.65
        }
        floatIntensity={
          reducedMotion
            ? 0
            : 0.18
        }
      >
        <mesh>
          <icosahedronGeometry
            args={[2.35, 2]}
          />

          <meshStandardMaterial
            color={BLUE}
            emissive={BLUE}
            emissiveIntensity={0.18}
            wireframe
            transparent
            opacity={0.72}
          />
        </mesh>

        <mesh
          scale={0.68}
        >
          <dodecahedronGeometry
            args={[2.35, 1]}
          />

          <meshStandardMaterial
            color={TEAL}
            emissive={TEAL}
            emissiveIntensity={0.28}
            wireframe
            transparent
            opacity={0.55}
          />
        </mesh>

        <mesh
          scale={0.36}
        >
          <octahedronGeometry
            args={[2.2, 0]}
          />

          <meshStandardMaterial
            color={WHITE}
            emissive={VIOLET}
            emissiveIntensity={0.9}
          />
        </mesh>
      </Float>

      <Sparkles
        count={28}
        scale={[5, 5, 5]}
        size={1.7}
        speed={
          reducedMotion
            ? 0
            : 0.2
        }
        color={TEAL}
      />
    </group>
  );
}

/* =========================================================
   SCALE WORLD
   The coherent system replicates
========================================================= */

function ScaleWorld({
  progressRef,
  reducedMotion,
}: {
  progressRef: MutableRefObject<
    Record<WorkSceneName, number>
  >;
  reducedMotion: boolean;
}) {
  const group =
    useRef<Group>(null);

  const copies = [
    [0, 0, 0, 1],
    [-2.4, 1.35, -0.7, 0.47],
    [2.5, 1.45, -0.8, 0.52],
    [-2.7, -1.55, -1, 0.42],
    [2.8, -1.4, -1.1, 0.45],
    [0, 2.6, -1.4, 0.34],
    [0, -2.65, -1.5, 0.33],
  ];

  useFrame(
    (_, delta) => {
      if (!group.current) return;

      const progress =
        smoothstep(
          progressRef.current.scale,
        );

      if (!reducedMotion) {
        group.current.rotation.y +=
          delta * 0.045;
      }

      group.current.scale.setScalar(
        0.86 +
          progress * 0.14,
      );
    },
  );

  return (
    <group
      ref={group}
      position={[1.5, 0, 0]}
    >
      {copies.map(
        (
          item,
          index,
        ) => {
          const [
            x,
            y,
            z,
            scale,
          ] = item;

          return (
            <group
              key={index}
              position={[
                x,
                y,
                z,
              ]}
              scale={scale}
            >
              <mesh>
                <icosahedronGeometry
                  args={[1.5, 1]}
                />

                <meshStandardMaterial
                  color={
                    index === 0
                      ? BLUE
                      : index % 2 ===
                          0
                        ? TEAL
                        : VIOLET
                  }
                  emissive={
                    index === 0
                      ? BLUE
                      : TEAL
                  }
                  emissiveIntensity={
                    index === 0
                      ? 0.45
                      : 0.15
                  }
                  wireframe
                  transparent
                  opacity={
                    index === 0
                      ? 0.82
                      : 0.52
                  }
                />
              </mesh>

              {index === 0 && (
                <mesh
                  scale={0.32}
                >
                  <sphereGeometry
                    args={[
                      1,
                      20,
                      20,
                    ]}
                  />

                  <meshStandardMaterial
                    color={WHITE}
                    emissive={TEAL}
                    emissiveIntensity={
                      1.2
                    }
                  />
                </mesh>
              )}
            </group>
          );
        },
      )}

      <Sparkles
        count={35}
        scale={[7, 7, 4]}
        size={1.5}
        speed={
          reducedMotion
            ? 0
            : 0.18
        }
        color={BLUE}
      />
    </group>
  );
}

/* =========================================================
   IMPACT WORLD
   Expansion becomes measurable outward influence
========================================================= */

function ImpactWorld({
  progressRef,
  reducedMotion,
}: {
  progressRef: MutableRefObject<
    Record<WorkSceneName, number>
  >;
  reducedMotion: boolean;
}) {
  const group =
    useRef<Group>(null);

  useFrame(
    ({ clock }) => {
      if (!group.current) return;

      const progress =
        smoothstep(
          progressRef.current.impact,
        );

      if (!reducedMotion) {
        group.current.rotation.y =
          clock.elapsedTime *
          0.075;
      }

      group.current.scale.setScalar(
        0.88 +
          progress * 0.14,
      );
    },
  );

  return (
    <group
      ref={group}
      position={[1.55, 0, 0]}
    >
      {[1.05, 1.7, 2.4, 3.15].map(
        (
          radius,
          index,
        ) => (
          <mesh
            key={radius}
          >
            <sphereGeometry
              args={[
                radius,
                32,
                20,
              ]}
            />

            <meshBasicMaterial
              color={
                index === 0
                  ? WHITE
                  : index === 1
                    ? TEAL
                    : index === 2
                      ? BLUE
                      : VIOLET
              }
              wireframe
              transparent
              opacity={
                0.42 -
                index *
                  0.075
              }
            />
          </mesh>
        ),
      )}

      <mesh>
        <sphereGeometry
          args={[0.34, 24, 24]}
        />

        <meshStandardMaterial
          color={WHITE}
          emissive={TEAL}
          emissiveIntensity={1.7}
        />
      </mesh>

      <Sparkles
        count={40}
        scale={[7, 7, 7]}
        size={1.6}
        speed={
          reducedMotion
            ? 0
            : 0.22
        }
        color={TEAL}
      />
    </group>
  );
}

/* =========================================================
   INTEGRATED WORLD
   All six capabilities are one connected system
========================================================= */

function IntegratedWorld({
  reducedMotion,
}: {
  reducedMotion: boolean;
}) {
  const group =
    useRef<Group>(null);

  const stages = [
    {
      position: [
        -2.3,
        1.3,
        0,
      ],
      color: BLUE,
    },
    {
      position: [
        0,
        2,
        0,
      ],
      color: VIOLET,
    },
    {
      position: [
        2.3,
        1.3,
        0,
      ],
      color: TEAL,
    },
    {
      position: [
        2.3,
        -1.3,
        0,
      ],
      color: VIOLET,
    },
    {
      position: [
        0,
        -2,
        0,
      ],
      color: ORANGE,
    },
    {
      position: [
        -2.3,
        -1.3,
        0,
      ],
      color: TEAL,
    },
  ];

  const lineGeometry =
    useMemo(() => {
      const vertices: number[] =
        [];

      for (
        let index = 0;
        index <
        stages.length;
        index++
      ) {
        const current =
          stages[index];

        const next =
          stages[
            (index + 1) %
              stages.length
          ];

        vertices.push(
          ...current.position,
          ...next.position,
        );

        vertices.push(
          ...current.position,
          0,
          0,
          0,
        );
      }

      const geometry =
        new BufferGeometry();

      geometry.setAttribute(
        "position",
        new Float32BufferAttribute(
          vertices,
          3,
        ),
      );

      return geometry;
    }, []);

  useFrame(
    (_, delta) => {
      if (
        !group.current ||
        reducedMotion
      ) {
        return;
      }

      group.current.rotation.y +=
        delta * 0.055;
    },
  );

  return (
    <group
      ref={group}
      position={[1.55, 0, 0]}
    >
      <lineSegments
        geometry={lineGeometry}
      >
        <lineBasicMaterial
          color={BLUE}
          transparent
          opacity={0.35}
        />
      </lineSegments>

      {stages.map(
        (
          stage,
          index,
        ) => (
          <group
            key={index}
            position={
              stage.position as [
                number,
                number,
                number,
              ]
            }
          >
            <mesh>
              <octahedronGeometry
                args={[
                  0.34,
                  0,
                ]}
              />

              <meshStandardMaterial
                color={
                  stage.color
                }
                emissive={
                  stage.color
                }
                emissiveIntensity={
                  0.75
                }
              />
            </mesh>
          </group>
        ),
      )}

      <mesh>
        <icosahedronGeometry
          args={[0.9, 1]}
        />

        <meshStandardMaterial
          color={WHITE}
          emissive={BLUE}
          emissiveIntensity={0.6}
          wireframe
        />
      </mesh>

      <mesh scale={0.32}>
        <sphereGeometry
          args={[1, 24, 24]}
        />

        <meshStandardMaterial
          color={WHITE}
          emissive={TEAL}
          emissiveIntensity={1.6}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   CTA WORLD
========================================================= */

function CtaWorld({
  reducedMotion,
}: {
  reducedMotion: boolean;
}) {
  const group =
    useRef<Group>(null);

  useFrame(
    (_, delta) => {
      if (
        !group.current ||
        reducedMotion
      ) {
        return;
      }

      group.current.rotation.y +=
        delta * 0.07;

      group.current.rotation.x +=
        delta * 0.025;
    },
  );

  return (
    <group
      ref={group}
      position={[1.5, 0, 0]}
    >
      <mesh>
        <icosahedronGeometry
          args={[2.2, 2]}
        />

        <meshStandardMaterial
          color={BLUE}
          emissive={BLUE}
          emissiveIntensity={0.28}
          wireframe
          transparent
          opacity={0.72}
        />
      </mesh>

      <mesh scale={0.58}>
        <dodecahedronGeometry
          args={[2.2, 1]}
        />

        <meshStandardMaterial
          color={TEAL}
          emissive={TEAL}
          emissiveIntensity={0.45}
          wireframe
        />
      </mesh>

      <mesh scale={0.2}>
        <sphereGeometry
          args={[2, 24, 24]}
        />

        <meshStandardMaterial
          color={WHITE}
          emissive={VIOLET}
          emissiveIntensity={1.8}
        />
      </mesh>

      <Sparkles
        count={35}
        scale={[6, 6, 6]}
        size={1.8}
        speed={
          reducedMotion
            ? 0
            : 0.2
        }
        color={TEAL}
      />
    </group>
  );
}

/* =========================================================
   SPATIAL TRANSITION GROUP

   We deliberately do NOT crossfade worlds.
   They move through space instead.
========================================================= */

function WorkTransitionGroup({
  scene,
  activeScene,
  children,
}: {
  scene: WorkSceneName;
  activeScene: WorkSceneName;
  children: ReactNode;
}) {
  const group =
    useRef<Group>(null);

  useFrame(() => {
    if (!group.current) return;

    const ownIndex =
      SCENE_INDEX[scene];

    const activeIndex =
      SCENE_INDEX[
        activeScene
      ];

    const difference =
      ownIndex -
      activeIndex;

    const active =
      difference === 0;

    const targetZ = active
      ? 0
      : difference < 0
        ? -10
        : 10;

    const targetY = active
      ? 0
      : difference < 0
        ? 2.2
        : -2.2;

    const targetScale =
      active ? 1 : 0.7;

    group.current.position.z =
      MathUtils.lerp(
        group.current.position.z,
        targetZ,
        0.055,
      );

    group.current.position.y =
      MathUtils.lerp(
        group.current.position.y,
        targetY,
        0.055,
      );

    const nextScale =
      MathUtils.lerp(
        group.current.scale.x,
        targetScale,
        0.055,
      );

    group.current.scale.setScalar(
      nextScale,
    );

    group.current.rotation.z =
      MathUtils.lerp(
        group.current.rotation.z,
        difference * 0.08,
        0.045,
      );
  });

  return (
    <group ref={group}>
      {children}
    </group>
  );
}

/* =========================================================
   CAMERA
========================================================= */

const CAMERA_TARGETS: Record<
  WorkSceneName,
  {
    position: [
      number,
      number,
      number,
    ];
    fov: number;
  }
> = {
  hero: {
    position: [0, 0, 8.4],
    fov: 42,
  },

  explore: {
    position: [
      0.2,
      0.15,
      8.8,
    ],
    fov: 44,
  },

  research: {
    position: [
      0.25,
      0,
      8,
    ],
    fov: 40,
  },

  engineer: {
    position: [
      0,
      0.15,
      8.5,
    ],
    fov: 43,
  },

  build: {
    position: [
      0.15,
      0,
      7.6,
    ],
    fov: 39,
  },

  scale: {
    position: [
      0,
      0,
      9.2,
    ],
    fov: 46,
  },

  impact: {
    position: [
      0,
      0,
      9.6,
    ],
    fov: 47,
  },

  integrated: {
    position: [
      0,
      0,
      8.7,
    ],
    fov: 43,
  },

  cta: {
    position: [
      0,
      0,
      7.8,
    ],
    fov: 40,
  },
};

function CameraRig({
  activeScene,
  pointer,
  reducedMotion,
}: {
  activeScene: WorkSceneName;
  pointer: MutableRefObject<{
    x: number;
    y: number;
  }>;
  reducedMotion: boolean;
}) {
  const { camera } =
    useThree();

  useFrame(() => {
    const target =
      CAMERA_TARGETS[
        activeScene
      ];

    const pointerX =
      reducedMotion
        ? 0
        : pointer.current.x *
          0.28;

    const pointerY =
      reducedMotion
        ? 0
        : pointer.current.y *
          0.18;

    camera.position.x =
      MathUtils.lerp(
        camera.position.x,
        target.position[0] +
          pointerX,
        0.035,
      );

    camera.position.y =
      MathUtils.lerp(
        camera.position.y,
        target.position[1] +
          pointerY,
        0.035,
      );

    camera.position.z =
      MathUtils.lerp(
        camera.position.z,
        target.position[2],
        0.035,
      );

    const perspective =
      camera as typeof camera & {
        fov?: number;
        updateProjectionMatrix: () => void;
      };

    if (
      typeof perspective.fov ===
      "number"
    ) {
      perspective.fov =
        MathUtils.lerp(
          perspective.fov,
          target.fov,
          0.035,
        );

      perspective.updateProjectionMatrix();
    }

    camera.lookAt(
      1.25,
      0,
      0,
    );
  });

  return null;
}

/* =========================================================
   LIGHTING
========================================================= */

function Lighting() {
  return (
    <>
      <ambientLight
        intensity={0.7}
      />

      <directionalLight
        position={[5, 6, 6]}
        intensity={1.3}
        color={WHITE}
      />

      <pointLight
        position={[
          4,
          2,
          3,
        ]}
        intensity={7}
        distance={12}
        color={BLUE}
      />

      <pointLight
        position={[
          -3,
          -2,
          2,
        ]}
        intensity={5}
        distance={12}
        color={TEAL}
      />

      <pointLight
        position={[
          2,
          -4,
          -2,
        ]}
        intensity={4}
        distance={12}
        color={VIOLET}
      />
    </>
  );
}

/* =========================================================
   DIRECTOR
========================================================= */

function WorkSceneDirector() {
  const {
    activeScene,
    sceneProgress,
  } = useWorkSceneExperience();

  const pointer =
    useGlobalPointer();

  const reducedMotion =
    useReducedMotion();

  const compact =
    useCompactScene();

  return (
    <>
      <CameraRig
        activeScene={
          activeScene
        }
        pointer={pointer}
        reducedMotion={
          reducedMotion
        }
      />

      <Lighting />

      <WorkTransitionGroup
        scene="hero"
        activeScene={
          activeScene
        }
      >
        <HeroWorld
          progressRef={
            sceneProgress
          }
          pointer={pointer}
          compact={compact}
          reducedMotion={
            reducedMotion
          }
        />
      </WorkTransitionGroup>

      <WorkTransitionGroup
        scene="explore"
        activeScene={
          activeScene
        }
      >
        <ExploreWorld
          progressRef={
            sceneProgress
          }
          compact={compact}
          reducedMotion={
            reducedMotion
          }
        />
      </WorkTransitionGroup>

      <WorkTransitionGroup
        scene="research"
        activeScene={
          activeScene
        }
      >
        <ResearchWorld
          progressRef={
            sceneProgress
          }
          reducedMotion={
            reducedMotion
          }
        />
      </WorkTransitionGroup>

      <WorkTransitionGroup
        scene="engineer"
        activeScene={
          activeScene
        }
      >
        <EngineerWorld
          progressRef={
            sceneProgress
          }
          reducedMotion={
            reducedMotion
          }
        />
      </WorkTransitionGroup>

      <WorkTransitionGroup
        scene="build"
        activeScene={
          activeScene
        }
      >
        <BuildWorld
          progressRef={
            sceneProgress
          }
          reducedMotion={
            reducedMotion
          }
        />
      </WorkTransitionGroup>

      <WorkTransitionGroup
        scene="scale"
        activeScene={
          activeScene
        }
      >
        <ScaleWorld
          progressRef={
            sceneProgress
          }
          reducedMotion={
            reducedMotion
          }
        />
      </WorkTransitionGroup>

      <WorkTransitionGroup
        scene="impact"
        activeScene={
          activeScene
        }
      >
        <ImpactWorld
          progressRef={
            sceneProgress
          }
          reducedMotion={
            reducedMotion
          }
        />
      </WorkTransitionGroup>

      <WorkTransitionGroup
        scene="integrated"
        activeScene={
          activeScene
        }
      >
        <IntegratedWorld
          reducedMotion={
            reducedMotion
          }
        />
      </WorkTransitionGroup>

      <WorkTransitionGroup
        scene="cta"
        activeScene={
          activeScene
        }
      >
        <CtaWorld
          reducedMotion={
            reducedMotion
          }
        />
      </WorkTransitionGroup>
    </>
  );
}

/* =========================================================
   CANVAS
========================================================= */

export function WorkScene() {
  const compact =
    useCompactScene();

  return (
    <Canvas
      frameloop="always"
      dpr={
        compact
          ? [1, 1.25]
          : [1, 1.75]
      }
      camera={{
        position: [
          0,
          0,
          8.4,
        ],
        fov: 42,
        near: 0.1,
        far: 100,
      }}
      gl={{
        antialias:
          !compact,
        alpha: true,
        powerPreference:
          "high-performance",
      }}
      onCreated={({
        gl,
      }) => {
        gl.toneMapping =
          ACESFilmicToneMapping;

        gl.toneMappingExposure =
          1.05;

        gl.setClearColor(
          new Color(
            "#000000",
          ),
          0,
        );
      }}
    >
      <WorkSceneDirector />
    </Canvas>
  );
}