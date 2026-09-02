"use client";

import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber";

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
} from "react";

import {
  type WorkSceneName,
  useWorkActiveScene,
  useWorkSceneRuntime,
} from "./work-scene-experience";

const BLUE = "#3B82F6";
const TEAL = "#22D3EE";
const VIOLET = "#A855F7";
const ORANGE = "#F97316";
const WHITE = "#EAF2FF";

type PointerRef = MutableRefObject<{
  x: number;
  y: number;
}>;

type Position = [
  number,
  number,
  number,
];

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

function useCompactScene() {
  const [compact, setCompact] =
    useState(false);

  useEffect(() => {
    const query =
      window.matchMedia(
        "(max-width: 767px)",
      );

    const update = () => {
      setCompact(query.matches);
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

  return compact;
}

function useGlobalPointer(
  enabled: boolean,
) {
  const pointer = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (!enabled) {
      pointer.current.x = 0;
      pointer.current.y = 0;

      return;
    }

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
  }, [enabled]);

  return pointer;
}

function createSignalPositions(
  count: number,
  radius: number,
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
        Math.random() * 0.75);

    positions[i] =
      Math.cos(angle) *
      distance;

    positions[i + 1] =
      (Math.random() - 0.5) *
      radius *
      1.2;

    positions[i + 2] =
      Math.sin(angle) *
      distance *
      0.7;
  }

  return positions;
}

function Connection({
  start,
  end,
  color = TEAL,
  opacity = 0.35,
}: {
  start: Position;
  end: Position;
  color?: string;
  opacity?: number;
}) {
  const geometry =
    useMemo(() => {
      const result =
        new BufferGeometry();

      result.setAttribute(
        "position",
        new Float32BufferAttribute(
          [
            ...start,
            ...end,
          ],
          3,
        ),
      );

      return result;
    }, [start, end]);

  useEffect(() => {
    return () => {
      geometry.dispose();
    };
  }, [geometry]);

  return (
    <lineSegments
      geometry={geometry}
    >
      <lineBasicMaterial
        color={color}
        transparent
        opacity={opacity}
      />
    </lineSegments>
  );
}

/* =========================================================
   HERO
========================================================= */

function HeroWorld({
  compact,
}: {
  compact: boolean;
}) {
  const positions =
    useMemo(
      () =>
        createSignalPositions(
          compact ? 45 : 80,
          4,
        ),
      [compact],
    );

  const curveGeometry =
    useMemo(() => {
      const curve =
        new CatmullRomCurve3([
          new Vector3(
            -4,
            -1.2,
            0,
          ),
          new Vector3(
            -2,
            1.4,
            0.4,
          ),
          new Vector3(
            0,
            -0.2,
            0.8,
          ),
          new Vector3(
            2,
            1,
            -0.25,
          ),
          new Vector3(
            4.2,
            -0.6,
            0.2,
          ),
        ]);

      return new BufferGeometry().setFromPoints(
        curve.getPoints(
          compact ? 28 : 48,
        ),
      );
    }, [compact]);

  useEffect(() => {
    return () => {
      curveGeometry.dispose();
    };
  }, [curveGeometry]);

  return (
    <group position={[1.65, 0, 0]}>
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
          opacity={0.72}
          depthWrite={false}
          blending={
            AdditiveBlending
          }
          sizeAttenuation
        />
      </points>

      <lineSegments
        geometry={curveGeometry}
      >
        <lineBasicMaterial
          color={TEAL}
          transparent
          opacity={0.45}
        />
      </lineSegments>

      <mesh>
        <icosahedronGeometry
          args={[0.58, 1]}
        />

        <meshStandardMaterial
          color={BLUE}
          emissive={BLUE}
          emissiveIntensity={0.3}
          wireframe
          transparent
          opacity={0.72}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   EXPLORE
========================================================= */

function ExploreWorld({
  compact,
}: {
  compact: boolean;
}) {
  const positions =
    useMemo(
      () =>
        createSignalPositions(
          compact ? 38 : 65,
          3.4,
        ),
      [compact],
    );

  const trajectories =
    useMemo(() => {
      const result: BufferGeometry[] =
        [];

      const amount =
        compact ? 3 : 5;

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
              compact ? 24 : 40,
            ),
          ),
        );
      }

      return result;
    }, [compact]);

  useEffect(() => {
    return () => {
      trajectories.forEach(
        (geometry) => {
          geometry.dispose();
        },
      );
    };
  }, [trajectories]);

  return (
    <group position={[1.6, 0, 0]}>
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
          opacity={0.75}
          depthWrite={false}
          blending={
            AdditiveBlending
          }
        />
      </points>

      {trajectories.map(
        (geometry, index) => (
          <lineSegments
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
              opacity={0.4}
            />
          </lineSegments>
        ),
      )}
    </group>
  );
}

/* =========================================================
   RESEARCH
========================================================= */

const RESEARCH_NODES: Position[] =
  [
    [-2.4, 1.35, 0],
    [-1.1, -1.35, 0.5],
    [0, 0.4, 0],
    [1.2, -1, -0.35],
    [2.5, 1.2, 0.25],
    [0.7, 1.8, -0.5],
    [-2.3, -0.2, -0.5],
  ];

const RESEARCH_CONNECTIONS = [
  [0, 2],
  [0, 6],
  [1, 2],
  [1, 6],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 5],
  [3, 5],
] as const;

function ResearchWorld() {
  return (
    <group position={[1.55, 0, 0]}>
      {RESEARCH_CONNECTIONS.map(
        ([a, b]) => (
          <Connection
            key={`${a}-${b}`}
            start={
              RESEARCH_NODES[a]
            }
            end={
              RESEARCH_NODES[b]
            }
            color={TEAL}
            opacity={0.48}
          />
        ),
      )}

      {RESEARCH_NODES.map(
        (position, index) => (
          <mesh
            key={index}
            position={position}
          >
            <sphereGeometry
              args={[
                index === 2
                  ? 0.2
                  : 0.11,
                10,
                10,
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
                  ? 0.8
                  : 0.25
              }
            />
          </mesh>
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
          opacity={0.07}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   ENGINEER
========================================================= */

const ENGINEER_MODULES: Position[] =
  [
    [-1.7, 1.1, 0],
    [0, 1.1, 0],
    [1.7, 1.1, 0],
    [-1.7, -1.1, 0],
    [0, -1.1, 0],
    [1.7, -1.1, 0],
  ];

function EngineerWorld() {
  return (
    <group position={[1.6, 0, 0]}>
      {ENGINEER_MODULES.map(
        (position, index) => (
          <group
            key={index}
            position={position}
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
                opacity={0.68}
              />
            </mesh>

            <mesh scale={0.2}>
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
                  0.55
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
          opacity={0.08}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   BUILD
========================================================= */

function BuildWorld() {
  return (
    <group position={[1.55, 0, 0]}>
      <mesh>
        <icosahedronGeometry
          args={[2.35, 1]}
        />

        <meshStandardMaterial
          color={BLUE}
          emissive={BLUE}
          emissiveIntensity={0.16}
          wireframe
          transparent
          opacity={0.72}
        />
      </mesh>

      <mesh scale={0.68}>
        <dodecahedronGeometry
          args={[2.35, 0]}
        />

        <meshStandardMaterial
          color={TEAL}
          emissive={TEAL}
          emissiveIntensity={0.2}
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>

      <mesh scale={0.36}>
        <octahedronGeometry
          args={[2.2, 0]}
        />

        <meshStandardMaterial
          color={WHITE}
          emissive={VIOLET}
          emissiveIntensity={0.65}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   SCALE
========================================================= */

const SCALE_COPIES: Array<
  [number, number, number, number]
> = [
  [0, 0, 0, 1],
  [-2.4, 1.35, -0.7, 0.47],
  [2.5, 1.45, -0.8, 0.52],
  [-2.7, -1.55, -1, 0.42],
  [2.8, -1.4, -1.1, 0.45],
  [0, 2.6, -1.4, 0.34],
  [0, -2.65, -1.5, 0.33],
];

function ScaleWorld() {
  return (
    <group position={[1.5, 0, 0]}>
      {SCALE_COPIES.map(
        (
          [x, y, z, scale],
          index,
        ) => (
          <group
            key={index}
            position={[x, y, z]}
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
                    ? 0.32
                    : 0.1
                }
                wireframe
                transparent
                opacity={
                  index === 0
                    ? 0.8
                    : 0.48
                }
              />
            </mesh>

            {index === 0 && (
              <mesh scale={0.32}>
                <sphereGeometry
                  args={[
                    1,
                    12,
                    12,
                  ]}
                />

                <meshStandardMaterial
                  color={WHITE}
                  emissive={TEAL}
                  emissiveIntensity={
                    0.8
                  }
                />
              </mesh>
            )}
          </group>
        ),
      )}
    </group>
  );
}

/* =========================================================
   IMPACT
========================================================= */

function ImpactWorld() {
  const rings = [
    {
      radius: 1.05,
      color: WHITE,
      opacity: 0.42,
    },
    {
      radius: 1.7,
      color: TEAL,
      opacity: 0.34,
    },
    {
      radius: 2.4,
      color: BLUE,
      opacity: 0.27,
    },
    {
      radius: 3.15,
      color: VIOLET,
      opacity: 0.2,
    },
  ];

  return (
    <group position={[1.55, 0, 0]}>
      {rings.map(
        ({
          radius,
          color,
          opacity,
        }) => (
          <mesh key={radius}>
            <sphereGeometry
              args={[
                radius,
                18,
                12,
              ]}
            />

            <meshBasicMaterial
              color={color}
              wireframe
              transparent
              opacity={opacity}
            />
          </mesh>
        ),
      )}

      <mesh>
        <sphereGeometry
          args={[
            0.34,
            14,
            14,
          ]}
        />

        <meshStandardMaterial
          color={WHITE}
          emissive={TEAL}
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   INTEGRATED
========================================================= */

const INTEGRATED_STAGES: Array<{
  position: Position;
  color: string;
}> = [
  {
    position: [-2.3, 1.3, 0],
    color: BLUE,
  },
  {
    position: [0, 2, 0],
    color: VIOLET,
  },
  {
    position: [2.3, 1.3, 0],
    color: TEAL,
  },
  {
    position: [2.3, -1.3, 0],
    color: VIOLET,
  },
  {
    position: [0, -2, 0],
    color: ORANGE,
  },
  {
    position: [-2.3, -1.3, 0],
    color: TEAL,
  },
];

function IntegratedWorld() {
  return (
    <group position={[1.55, 0, 0]}>
      {INTEGRATED_STAGES.map(
        (stage, index) => {
          const next =
            INTEGRATED_STAGES[
              (index + 1) %
                INTEGRATED_STAGES.length
            ];

          return (
            <group key={index}>
              <Connection
                start={
                  stage.position
                }
                end={
                  next.position
                }
                color={BLUE}
                opacity={0.3}
              />

              <Connection
                start={
                  stage.position
                }
                end={[0, 0, 0]}
                color={TEAL}
                opacity={0.22}
              />

              <mesh
                position={
                  stage.position
                }
              >
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
                    0.5
                  }
                />
              </mesh>
            </group>
          );
        },
      )}

      <mesh>
        <icosahedronGeometry
          args={[0.9, 1]}
        />

        <meshStandardMaterial
          color={WHITE}
          emissive={BLUE}
          emissiveIntensity={0.4}
          wireframe
        />
      </mesh>

      <mesh scale={0.32}>
        <sphereGeometry
          args={[
            1,
            12,
            12,
          ]}
        />

        <meshStandardMaterial
          color={WHITE}
          emissive={TEAL}
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   CTA
========================================================= */

function CtaWorld() {
  return (
    <group position={[1.5, 0, 0]}>
      <mesh>
        <icosahedronGeometry
          args={[2.2, 1]}
        />

        <meshStandardMaterial
          color={BLUE}
          emissive={BLUE}
          emissiveIntensity={0.2}
          wireframe
          transparent
          opacity={0.72}
        />
      </mesh>

      <mesh scale={0.58}>
        <dodecahedronGeometry
          args={[2.2, 0]}
        />

        <meshStandardMaterial
          color={TEAL}
          emissive={TEAL}
          emissiveIntensity={0.3}
          wireframe
        />
      </mesh>

      <mesh scale={0.2}>
        <sphereGeometry
          args={[
            2,
            12,
            12,
          ]}
        />

        <meshStandardMaterial
          color={WHITE}
          emissive={VIOLET}
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   ACTIVE WORLD
========================================================= */

function World({
  scene,
  compact,
}: {
  scene: WorkSceneName;
  compact: boolean;
}) {
  switch (scene) {
    case "hero":
      return (
        <HeroWorld
          compact={compact}
        />
      );

    case "explore":
      return (
        <ExploreWorld
          compact={compact}
        />
      );

    case "research":
      return <ResearchWorld />;

    case "engineer":
      return <EngineerWorld />;

    case "build":
      return <BuildWorld />;

    case "scale":
      return <ScaleWorld />;

    case "impact":
      return <ImpactWorld />;

    case "integrated":
      return <IntegratedWorld />;

    case "cta":
      return <CtaWorld />;
  }
}

function ActiveWorld({
  activeScene,
  sceneProgress,
  compact,
  pointer,
  reducedMotion,
}: {
  activeScene: WorkSceneName;
  sceneProgress: MutableRefObject<
    Record<
      WorkSceneName,
      number
    >
  >;
  compact: boolean;
  pointer: PointerRef;
  reducedMotion: boolean;
}) {
  const group =
    useRef<Group>(null);

  useFrame(
    (_, delta) => {
      if (!group.current) {
        return;
      }

      const progress =
        sceneProgress.current[
          activeScene
        ];

      const px =
        reducedMotion ||
        compact
          ? 0
          : pointer.current.x;

      const py =
        reducedMotion ||
        compact
          ? 0
          : pointer.current.y;

      if (!reducedMotion) {
        group.current.rotation.y +=
          delta *
          (0.035 +
            progress *
              0.025);
      }

      group.current.rotation.x =
        MathUtils.lerp(
          group.current.rotation.x,
          py * 0.045,
          0.035,
        );

      group.current.rotation.z =
        MathUtils.lerp(
          group.current.rotation.z,
          px * 0.025,
          0.035,
        );

      const targetScale =
        0.96 +
        progress * 0.04;

      const nextScale =
        MathUtils.lerp(
          group.current.scale.x,
          targetScale,
          0.04,
        );

      group.current.scale.setScalar(
        nextScale,
      );
    },
  );

  return (
    <group ref={group}>
      <World
        key={activeScene}
        scene={activeScene}
        compact={compact}
      />
    </group>
  );
}

/* =========================================================
   CAMERA
========================================================= */

const CAMERA_TARGETS: Record<
  WorkSceneName,
  {
    position: Position;
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
  compact,
  reducedMotion,
}: {
  activeScene: WorkSceneName;
  pointer: PointerRef;
  compact: boolean;
  reducedMotion: boolean;
}) {
  const { camera } =
    useThree();

  useFrame(() => {
    const target =
      CAMERA_TARGETS[
        activeScene
      ];

    const pointerEnabled =
      !reducedMotion &&
      !compact;

    const pointerX =
      pointerEnabled
        ? pointer.current.x *
          0.2
        : 0;

    const pointerY =
      pointerEnabled
        ? pointer.current.y *
          0.12
        : 0;

    camera.position.x =
      MathUtils.lerp(
        camera.position.x,
        target.position[0] +
          pointerX,
        0.04,
      );

    camera.position.y =
      MathUtils.lerp(
        camera.position.y,
        target.position[1] +
          pointerY,
        0.04,
      );

    camera.position.z =
      MathUtils.lerp(
        camera.position.z,
        target.position[2],
        0.04,
      );

    if (
      "fov" in camera &&
      typeof camera.fov ===
        "number"
    ) {
      camera.fov =
        MathUtils.lerp(
          camera.fov,
          target.fov,
          0.04,
        );

      camera.updateProjectionMatrix();
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
   DIRECTOR
========================================================= */

function WorkSceneDirector({
  pointer,
  compact,
  reducedMotion,
}: {
  pointer: PointerRef;
  compact: boolean;
  reducedMotion: boolean;
}) {
  const {
    activeScene,
  } = useWorkActiveScene();

  const {
    sceneProgress,
  } = useWorkSceneRuntime();

  return (
    <>
      <ambientLight
        intensity={0.72}
      />

      <directionalLight
        position={[5, 6, 6]}
        intensity={1.25}
        color={WHITE}
      />

      <CameraRig
        activeScene={
          activeScene
        }
        pointer={pointer}
        compact={compact}
        reducedMotion={
          reducedMotion
        }
      />

      <ActiveWorld
        activeScene={
          activeScene
        }
        sceneProgress={
          sceneProgress
        }
        compact={compact}
        pointer={pointer}
        reducedMotion={
          reducedMotion
        }
      />
    </>
  );
}

/* =========================================================
   CANVAS
========================================================= */

export function WorkScene() {
  const compact =
    useCompactScene();

  const reducedMotion =
    useReducedMotion();

  const pointer =
    useGlobalPointer(
      !compact &&
        !reducedMotion,
    );

  return (
    <Canvas
      frameloop={
        reducedMotion
          ? "demand"
          : "always"
      }
      dpr={1}
      camera={{
        position: [
          0,
          0,
          8.4,
        ],
        fov: 42,
        near: 0.1,
        far: 50,
      }}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference:
          "high-performance",
      }}
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
    >
      <WorkSceneDirector
        pointer={pointer}
        compact={compact}
        reducedMotion={
          reducedMotion
        }
      />
    </Canvas>
  );
}