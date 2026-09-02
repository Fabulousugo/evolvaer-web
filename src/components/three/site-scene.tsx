"use client";

import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import * as THREE from "three";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
} from "react";

import {
  useTheme,
} from "@/src/components/theme-provider";

import {
  type SceneName,
  useActiveScene,
  useSceneRuntime,
} from "./scene-experience";

/* ============================================================
   TYPES
============================================================ */

type WorldProps = {
  isDark: boolean;
};

type Point3 = [
  number,
  number,
  number,
];

/* ============================================================
   SCENE ORDER
============================================================ */

const SCENE_ORDER: SceneName[] = [
  "hero",
  "approach",
  "exploration",
  "ventures",
  "research",
  "philosophy",
  "final",
];

/* ============================================================
   GLOBAL POINTER
============================================================ */

const globalPointer = {
  x: 0,
  y: 0,
};

function useGlobalPointerTracking(
  enabled: boolean,
) {
  useEffect(() => {
    if (!enabled) {
      globalPointer.x = 0;
      globalPointer.y = 0;

      return;
    }

    const update = (
      event: PointerEvent,
    ) => {
      globalPointer.x =
        (
          event.clientX /
          window.innerWidth
        ) *
          2 -
        1;

      globalPointer.y =
        -(
          (
            event.clientY /
            window.innerHeight
          ) *
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
}

/* ============================================================
   MEDIA PREFERENCES
============================================================ */

function useMediaQuery(
  query: string,
) {
  const [matches, setMatches] =
    useState(false);

  useEffect(() => {
    const media =
      window.matchMedia(query);

    const update = () => {
      setMatches(media.matches);
    };

    update();

    media.addEventListener(
      "change",
      update,
    );

    return () => {
      media.removeEventListener(
        "change",
        update,
      );
    };
  }, [query]);

  return matches;
}

function useReducedMotion() {
  return useMediaQuery(
    "(prefers-reduced-motion: reduce)",
  );
}

function useCompactScene() {
  return useMediaQuery(
    "(max-width: 767px)",
  );
}

/* ============================================================
   BASIC CONNECTION
============================================================ */

function Connection({
  from,
  to,
  color,
  opacity = 0.32,
  radius = 0.012,
}: {
  from: Point3;
  to: Point3;
  color: string;
  opacity?: number;
  radius?: number;
}) {
  const data = useMemo(() => {
    const start =
      new THREE.Vector3(...from);

    const end =
      new THREE.Vector3(...to);

    const direction =
      new THREE.Vector3()
        .subVectors(
          end,
          start,
        );

    const midpoint =
      new THREE.Vector3()
        .addVectors(
          start,
          end,
        )
        .multiplyScalar(0.5);

    const length =
      direction.length();

    const quaternion =
      new THREE.Quaternion();

    quaternion.setFromUnitVectors(
      new THREE.Vector3(
        0,
        1,
        0,
      ),
      direction
        .clone()
        .normalize(),
    );

    return {
      midpoint,
      length,
      quaternion,
    };
  }, [from, to]);

  return (
    <mesh
      position={[
        data.midpoint.x,
        data.midpoint.y,
        data.midpoint.z,
      ]}
      quaternion={
        data.quaternion
      }
    >
      <cylinderGeometry
        args={[
          radius,
          radius,
          data.length,
          6,
        ]}
      />

      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        depthWrite={false}
      />
    </mesh>
  );
}

/* ============================================================
   HERO
   Flowing technological core
============================================================ */

function HeroWorld({
  isDark,
}: WorldProps) {
  const ribbonOne =
    useMemo(
      () =>
        new THREE.CatmullRomCurve3(
          [
            new THREE.Vector3(
              -2,
              -1.2,
              0,
            ),
            new THREE.Vector3(
              -1,
              0.5,
              0.55,
            ),
            new THREE.Vector3(
              0,
              1.25,
              0,
            ),
            new THREE.Vector3(
              1,
              0.35,
              -0.55,
            ),
            new THREE.Vector3(
              2,
              -1.1,
              0.25,
            ),
          ],
        ),
      [],
    );

  const ribbonTwo =
    useMemo(
      () =>
        new THREE.CatmullRomCurve3(
          [
            new THREE.Vector3(
              -1.8,
              0.9,
              -0.35,
            ),
            new THREE.Vector3(
              -0.8,
              0,
              0.5,
            ),
            new THREE.Vector3(
              0,
              -1.2,
              0,
            ),
            new THREE.Vector3(
              0.9,
              -0.2,
              -0.45,
            ),
            new THREE.Vector3(
              1.8,
              1.05,
              0.2,
            ),
          ],
        ),
      [],
    );

  return (
    <group
      position={[
        2,
        0,
        -1.5,
      ]}
    >
      <mesh>
        <tubeGeometry
          args={[
            ribbonOne,
            48,
            0.1,
            8,
            false,
          ]}
        />

        <meshStandardMaterial
          color={
            isDark
              ? "#3B82F6"
              : "#2563EB"
          }
          metalness={0.5}
          roughness={0.25}
        />
      </mesh>

      <mesh>
        <tubeGeometry
          args={[
            ribbonTwo,
            48,
            0.065,
            8,
            false,
          ]}
        />

        <meshStandardMaterial
          color={
            isDark
              ? "#22D3EE"
              : "#10B981"
          }
          metalness={0.4}
          roughness={0.3}
        />
      </mesh>

      <mesh>
        <icosahedronGeometry
          args={[0.62, 2]}
        />

        <meshStandardMaterial
          color={
            isDark
              ? "#DCEBFF"
              : "#F8FAFC"
          }
          metalness={0.25}
          roughness={0.18}
        />
      </mesh>
    </group>
  );
}

/* ============================================================
   APPROACH
   Connected process constellation
============================================================ */

const APPROACH_NODES: {
  position: Point3;
  color: string;
  scale: number;
}[] = [
  {
    position: [
      -2.3,
      0.25,
      0,
    ],
    color: "#3B82F6",
    scale: 0.22,
  },
  {
    position: [
      -1.4,
      1.05,
      -0.25,
    ],
    color: "#22D3EE",
    scale: 0.27,
  },
  {
    position: [
      -0.45,
      0.2,
      0.2,
    ],
    color: "#A855F7",
    scale: 0.23,
  },
  {
    position: [
      0.55,
      1,
      -0.25,
    ],
    color: "#3B82F6",
    scale: 0.27,
  },
  {
    position: [
      1.45,
      0.1,
      0.15,
    ],
    color: "#22D3EE",
    scale: 0.23,
  },
  {
    position: [
      2.3,
      0.75,
      -0.3,
    ],
    color: "#A855F7",
    scale: 0.28,
  },
];

function ApproachWorld({
  isDark,
}: WorldProps) {
  return (
    <group
      position={[
        0.8,
        0,
        -2,
      ]}
    >
      {APPROACH_NODES
        .slice(0, -1)
        .map(
          (
            node,
            index,
          ) => (
            <Connection
              key={
                `approach-line-${index}`
              }
              from={
                node.position
              }
              to={
                APPROACH_NODES[
                  index + 1
                ].position
              }
              color="#60A5FA"
              opacity={
                isDark
                  ? 0.34
                  : 0.2
              }
            />
          ),
        )}

      {APPROACH_NODES.map(
        (
          node,
          index,
        ) => (
          <mesh
            key={
              `approach-${index}`
            }
            position={
              node.position
            }
            scale={
              node.scale
            }
          >
            {index % 3 ===
            0 ? (
              <icosahedronGeometry
                args={[1, 1]}
              />
            ) : index % 3 ===
              1 ? (
              <octahedronGeometry
                args={[1, 0]}
              />
            ) : (
              <dodecahedronGeometry
                args={[1, 0]}
              />
            )}

            <meshStandardMaterial
              color={
                node.color
              }
              metalness={0.35}
              roughness={0.3}
              emissive={
                node.color
              }
              emissiveIntensity={
                isDark
                  ? 0.08
                  : 0.015
              }
            />
          </mesh>
        ),
      )}

      <mesh
        position={[
          0,
          0.55,
          -0.05,
        ]}
      >
        <icosahedronGeometry
          args={[0.42, 2]}
        />

        <meshStandardMaterial
          color={
            isDark
              ? "#E6F1FF"
              : "#0A1D2F"
          }
          metalness={0.3}
          roughness={0.22}
        />
      </mesh>
    </group>
  );
}

/* ============================================================
   EXPLORATION
   Lightweight possibility field
============================================================ */

function ExplorationWorld({
  isDark,
}: WorldProps) {
  return (
    <group
      position={[
        0.8,
        -0.55,
        -2.2,
      ]}
      rotation={[
        -0.28,
        0,
        0,
      ]}
    >
      <gridHelper
        args={[
          8,
          18,
          isDark
            ? "#22D3EE"
            : "#10B981",
          isDark
            ? "#1E3A5F"
            : "#CBD5E1",
        ]}
        position={[
          0,
          -0.5,
          0,
        ]}
      />

      <mesh
        position={[
          -1.5,
          0.75,
          0,
        ]}
      >
        <icosahedronGeometry
          args={[
            0.38,
            1,
          ]}
        />

        <meshBasicMaterial
          wireframe
          color="#22D3EE"
          transparent
          opacity={
            isDark
              ? 0.8
              : 0.55
          }
        />
      </mesh>

      <mesh
        position={[
          1.55,
          0.4,
          -0.7,
        ]}
      >
        <octahedronGeometry
          args={[
            0.32,
            1,
          ]}
        />

        <meshBasicMaterial
          wireframe
          color="#3B82F6"
          transparent
          opacity={
            isDark
              ? 0.78
              : 0.5
          }
        />
      </mesh>

      <mesh
        position={[
          0.2,
          1.15,
          -1.2,
        ]}
      >
        <dodecahedronGeometry
          args={[
            0.27,
            0,
          ]}
        />

        <meshBasicMaterial
          wireframe
          color="#A855F7"
          transparent
          opacity={
            isDark
              ? 0.7
              : 0.46
          }
        />
      </mesh>
    </group>
  );
}

/* ============================================================
   VENTURES
   Connected network
============================================================ */

const VENTURE_NODES: {
  position: Point3;
  color: string;
  scale: number;
}[] = [
  {
    position: [
      -2,
      0.9,
      -0.3,
    ],
    color: "#3B82F6",
    scale: 0.3,
  },
  {
    position: [
      -1.25,
      -1.1,
      0.15,
    ],
    color: "#10B981",
    scale: 0.25,
  },
  {
    position: [
      1.45,
      1,
      -0.45,
    ],
    color: "#A855F7",
    scale: 0.3,
  },
  {
    position: [
      2.1,
      -0.65,
      0.1,
    ],
    color: "#10B981",
    scale: 0.23,
  },
  {
    position: [
      0.45,
      1.7,
      -0.8,
    ],
    color: "#3B82F6",
    scale: 0.22,
  },
  {
    position: [
      0.1,
      -1.6,
      -0.5,
    ],
    color: "#A855F7",
    scale: 0.21,
  },
];

function VenturesWorld({
  isDark,
}: WorldProps) {
  return (
    <group
      position={[
        0.8,
        0,
        -2.2,
      ]}
    >
      {VENTURE_NODES.map(
        (
          node,
          index,
        ) => (
          <Connection
            key={
              `venture-line-${index}`
            }
            from={[
              0,
              0,
              0,
            ]}
            to={
              node.position
            }
            color={
              node.color
            }
            opacity={
              isDark
                ? 0.28
                : 0.15
            }
          />
        ),
      )}

      <mesh>
        <icosahedronGeometry
          args={[
            0.62,
            2,
          ]}
        />

        <meshStandardMaterial
          color={
            isDark
              ? "#DCEBFF"
              : "#0A1D2F"
          }
          metalness={0.38}
          roughness={0.24}
        />
      </mesh>

      {VENTURE_NODES.map(
        (
          node,
          index,
        ) => (
          <mesh
            key={
              `venture-${index}`
            }
            position={
              node.position
            }
            scale={
              node.scale
            }
          >
            {index % 3 ===
            0 ? (
              <icosahedronGeometry
                args={[1, 1]}
              />
            ) : index % 3 ===
              1 ? (
              <octahedronGeometry
                args={[1, 0]}
              />
            ) : (
              <dodecahedronGeometry
                args={[1, 0]}
              />
            )}

            <meshStandardMaterial
              color={
                node.color
              }
              metalness={0.35}
              roughness={0.3}
              emissive={
                node.color
              }
              emissiveIntensity={
                isDark
                  ? 0.07
                  : 0.01
              }
            />
          </mesh>
        ),
      )}
    </group>
  );
}

/* ============================================================
   RESEARCH
   Analytical data field
============================================================ */

const RESEARCH_BARS = [
  0.45,
  0.8,
  1.2,
  0.62,
  1.4,
  0.95,
  1.65,
  0.7,
  1.15,
  1.5,
  0.82,
  1.25,
];

function ResearchWorld({
  isDark,
}: WorldProps) {
  return (
    <group
      position={[
        0.8,
        -0.75,
        -2.3,
      ]}
      rotation={[
        -0.12,
        -0.18,
        0,
      ]}
    >
      {RESEARCH_BARS.map(
        (
          height,
          index,
        ) => {
          const row =
            Math.floor(
              index / 4,
            );

          const column =
            index % 4;

          const x =
            (
              column -
              1.5
            ) *
            0.7;

          const z =
            (
              row -
              1
            ) *
            0.72;

          const color =
            index % 3 === 0
              ? "#A855F7"
              : index % 3 ===
                  1
                ? "#3B82F6"
                : "#22D3EE";

          return (
            <mesh
              key={
                `research-${index}`
              }
              position={[
                x,
                height / 2,
                z,
              ]}
            >
              <boxGeometry
                args={[
                  0.09,
                  height,
                  0.09,
                ]}
              />

              <meshBasicMaterial
                color={color}
                transparent
                opacity={
                  isDark
                    ? 0.68
                    : 0.38
                }
              />
            </mesh>
          );
        },
      )}

      <Connection
        from={[
          -2.1,
          1.5,
          -0.6,
        ]}
        to={[
          -0.7,
          0.9,
          0,
        ]}
        color="#A855F7"
        opacity={
          isDark
            ? 0.35
            : 0.18
        }
      />

      <Connection
        from={[
          -0.7,
          0.9,
          0,
        ]}
        to={[
          0.65,
          1.55,
          -0.45,
        ]}
        color="#3B82F6"
        opacity={
          isDark
            ? 0.35
            : 0.18
        }
      />

      <Connection
        from={[
          0.65,
          1.55,
          -0.45,
        ]}
        to={[
          2,
          0.8,
          -0.1,
        ]}
        color="#22D3EE"
        opacity={
          isDark
            ? 0.35
            : 0.18
        }
      />

      <mesh
        position={[
          1.9,
          1.45,
          -0.4,
        ]}
      >
        <icosahedronGeometry
          args={[
            0.38,
            2,
          ]}
        />

        <meshStandardMaterial
          color={
            isDark
              ? "#C4B5FD"
              : "#7C3AED"
          }
          metalness={0.28}
          roughness={0.24}
        />
      </mesh>
    </group>
  );
}

/* ============================================================
   PHILOSOPHY
   Aperture
============================================================ */

function PhilosophyWorld({
  isDark,
}: WorldProps) {
  const leftCurve =
    useMemo(
      () =>
        new THREE.CatmullRomCurve3(
          [
            new THREE.Vector3(
              -0.3,
              -2,
              0,
            ),
            new THREE.Vector3(
              -1,
              -1,
              0.1,
            ),
            new THREE.Vector3(
              -1.15,
              0,
              0.2,
            ),
            new THREE.Vector3(
              -0.95,
              1,
              0.1,
            ),
            new THREE.Vector3(
              -0.25,
              2,
              0,
            ),
          ],
        ),
      [],
    );

  const rightCurve =
    useMemo(
      () =>
        new THREE.CatmullRomCurve3(
          [
            new THREE.Vector3(
              0.3,
              -2,
              0,
            ),
            new THREE.Vector3(
              1,
              -1,
              -0.1,
            ),
            new THREE.Vector3(
              1.15,
              0,
              -0.2,
            ),
            new THREE.Vector3(
              0.95,
              1,
              -0.1,
            ),
            new THREE.Vector3(
              0.25,
              2,
              0,
            ),
          ],
        ),
      [],
    );

  const innerCurve =
    useMemo(
      () =>
        new THREE.CatmullRomCurve3(
          [
            new THREE.Vector3(
              -0.05,
              -1.25,
              -0.1,
            ),
            new THREE.Vector3(
              -0.4,
              -0.5,
              0.2,
            ),
            new THREE.Vector3(
              -0.48,
              0.2,
              0.3,
            ),
            new THREE.Vector3(
              -0.3,
              0.85,
              0.1,
            ),
            new THREE.Vector3(
              0.05,
              1.3,
              -0.1,
            ),
          ],
        ),
      [],
    );

  return (
    <group
      position={[
        1.25,
        0,
        -2.4,
      ]}
    >
      <mesh>
        <tubeGeometry
          args={[
            leftCurve,
            48,
            0.025,
            6,
            false,
          ]}
        />

        <meshBasicMaterial
          color={
            isDark
              ? "#60A5FA"
              : "#2563EB"
          }
          transparent
          opacity={
            isDark
              ? 0.82
              : 0.58
          }
        />
      </mesh>

      <mesh>
        <tubeGeometry
          args={[
            rightCurve,
            48,
            0.025,
            6,
            false,
          ]}
        />

        <meshBasicMaterial
          color={
            isDark
              ? "#22D3EE"
              : "#10B981"
          }
          transparent
          opacity={
            isDark
              ? 0.78
              : 0.54
          }
        />
      </mesh>

      <mesh>
        <tubeGeometry
          args={[
            innerCurve,
            40,
            0.014,
            5,
            false,
          ]}
        />

        <meshBasicMaterial
          color={
            isDark
              ? "#C084FC"
              : "#7C3AED"
          }
          transparent
          opacity={
            isDark
              ? 0.5
              : 0.3
          }
        />
      </mesh>

      <mesh>
        <octahedronGeometry
          args={[
            0.34,
            1,
          ]}
        />

        <meshStandardMaterial
          color={
            isDark
              ? "#F4F8FF"
              : "#0A1D2F"
          }
          metalness={0.25}
          roughness={0.18}
        />
      </mesh>
    </group>
  );
}

/* ============================================================
   FINAL
   Convergence
============================================================ */

function FinalWorld({
  isDark,
}: WorldProps) {
  const streams =
    useMemo(
      () => [
        {
          color:
            "#3B82F6",
          curve:
            new THREE.CatmullRomCurve3(
              [
                new THREE.Vector3(
                  -4,
                  2,
                  -0.8,
                ),
                new THREE.Vector3(
                  -2.7,
                  1.3,
                  0.2,
                ),
                new THREE.Vector3(
                  -1.4,
                  0.6,
                  -0.2,
                ),
                new THREE.Vector3(
                  0,
                  0,
                  0,
                ),
              ],
            ),
        },
        {
          color:
            "#22D3EE",
          curve:
            new THREE.CatmullRomCurve3(
              [
                new THREE.Vector3(
                  -3.8,
                  -2,
                  -0.4,
                ),
                new THREE.Vector3(
                  -2.5,
                  -1.3,
                  0.3,
                ),
                new THREE.Vector3(
                  -1.2,
                  -0.55,
                  -0.15,
                ),
                new THREE.Vector3(
                  0,
                  0,
                  0,
                ),
              ],
            ),
        },
        {
          color:
            "#A855F7",
          curve:
            new THREE.CatmullRomCurve3(
              [
                new THREE.Vector3(
                  4,
                  1.8,
                  -0.6,
                ),
                new THREE.Vector3(
                  2.7,
                  1.2,
                  0.25,
                ),
                new THREE.Vector3(
                  1.4,
                  0.55,
                  -0.2,
                ),
                new THREE.Vector3(
                  0,
                  0,
                  0,
                ),
              ],
            ),
        },
        {
          color:
            "#60A5FA",
          curve:
            new THREE.CatmullRomCurve3(
              [
                new THREE.Vector3(
                  3.7,
                  -2.1,
                  -0.8,
                ),
                new THREE.Vector3(
                  2.5,
                  -1.4,
                  0.2,
                ),
                new THREE.Vector3(
                  1.2,
                  -0.6,
                  -0.2,
                ),
                new THREE.Vector3(
                  0,
                  0,
                  0,
                ),
              ],
            ),
        },
      ],
      [],
    );

  return (
    <group
      position={[
        1.45,
        0,
        -2.2,
      ]}
    >
      {streams.map(
        (
          stream,
          index,
        ) => (
          <mesh
            key={
              `final-${index}`
            }
          >
            <tubeGeometry
              args={[
                stream.curve,
                56,
                index === 0
                  ? 0.04
                  : 0.03,
                6,
                false,
              ]}
            />

            <meshBasicMaterial
              color={
                stream.color
              }
              transparent
              opacity={
                isDark
                  ? 0.82
                  : 0.58
              }
            />
          </mesh>
        ),
      )}

      <mesh>
        <icosahedronGeometry
          args={[
            0.46,
            2,
          ]}
        />

        <meshStandardMaterial
          color="#F5FAFF"
          metalness={0.18}
          roughness={0.15}
        />
      </mesh>

      <mesh
        position={[
          0,
          0,
          -0.15,
        ]}
      >
        <cylinderGeometry
          args={[
            0.018,
            0.018,
            5.5,
            6,
          ]}
        />

        <meshBasicMaterial
          color="#60A5FA"
          transparent
          opacity={
            isDark
              ? 0.16
              : 0.08
          }
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

/* ============================================================
   WORLD REGISTRY
============================================================ */

const SCENE_WORLDS = {
  hero: HeroWorld,
  approach: ApproachWorld,
  exploration:
    ExplorationWorld,
  ventures: VenturesWorld,
  research: ResearchWorld,
  philosophy:
    PhilosophyWorld,
  final: FinalWorld,
} satisfies Record<
  SceneName,
  ComponentType<WorldProps>
>;

/* ============================================================
   ACTIVE WORLD MOTION
   One animation loop for every world
============================================================ */

function ActiveWorld({
  scene,
  isDark,
  reducedMotion,
}: {
  scene: SceneName;
  isDark: boolean;
  reducedMotion: boolean;
}) {
  const groupRef =
    useRef<THREE.Group>(null);

  const {
    sceneProgress,
  } = useSceneRuntime();

  const World =
    SCENE_WORLDS[scene];

  useFrame(
    (state, delta) => {
      const group =
        groupRef.current;

      if (!group) {
        return;
      }

      const progress =
        sceneProgress.current[
          scene
        ];

      if (reducedMotion) {
        group.rotation.x = 0;
        group.rotation.y = 0;
        group.position.y = 0;
        group.position.z = 0;
        group.scale.setScalar(
          1,
        );

        return;
      }

      const time =
        state.clock.elapsedTime;

      const centredProgress =
        THREE.MathUtils.clamp(
          (
            progress -
            0.5
          ) *
            2,
          -1,
          1,
        );

      group.rotation.y =
        THREE.MathUtils.damp(
          group.rotation.y,
          globalPointer.x *
            0.06 +
            centredProgress *
              0.035,
          3,
          delta,
        );

      group.rotation.x =
        THREE.MathUtils.damp(
          group.rotation.x,
          globalPointer.y *
            -0.025,
          3,
          delta,
        );

      group.position.y =
        THREE.MathUtils.damp(
          group.position.y,
          Math.sin(
            time * 0.32,
          ) *
            0.045 +
            centredProgress *
              -0.08,
          3,
          delta,
        );

      group.position.z =
        THREE.MathUtils.damp(
          group.position.z,
          Math.abs(
            centredProgress,
          ) *
            -0.22,
          3,
          delta,
        );

      const targetScale =
        1 -
        Math.abs(
          centredProgress,
        ) *
          0.035;

      const nextScale =
        THREE.MathUtils.damp(
          group.scale.x,
          targetScale,
          3,
          delta,
        );

      group.scale.setScalar(
        nextScale,
      );
    },
  );

  return (
    <group
      ref={groupRef}
    >
      <World
        isDark={isDark}
      />
    </group>
  );
}

/* ============================================================
   CAMERA
============================================================ */

type CameraTarget = {
  position: Point3;
  lookAt: Point3;
  fov: number;
};

const CAMERA_TARGETS: Record<
  SceneName,
  CameraTarget
> = {
  hero: {
    position: [
      0,
      0,
      7,
    ],
    lookAt: [
      0.4,
      0,
      -1.5,
    ],
    fov: 42,
  },

  approach: {
    position: [
      -0.05,
      0.12,
      7.25,
    ],
    lookAt: [
      0.25,
      0.1,
      -1.7,
    ],
    fov: 42,
  },

  exploration: {
    position: [
      0,
      0.25,
      7,
    ],
    lookAt: [
      0.1,
      -0.25,
      -1.9,
    ],
    fov: 43,
  },

  ventures: {
    position: [
      0,
      0,
      7.3,
    ],
    lookAt: [
      0.4,
      0,
      -1.9,
    ],
    fov: 42,
  },

  research: {
    position: [
      0.05,
      0.2,
      7.1,
    ],
    lookAt: [
      0.3,
      -0.2,
      -2,
    ],
    fov: 42,
  },

  philosophy: {
    position: [
      0,
      0,
      7,
    ],
    lookAt: [
      0.45,
      0,
      -1.85,
    ],
    fov: 41,
  },

  final: {
    position: [
      0,
      0.1,
      7.5,
    ],
    lookAt: [
      0.55,
      0,
      -2,
    ],
    fov: 40,
  },
};

function CameraRig({
  activeScene,
  reducedMotion,
}: {
  activeScene: SceneName;
  reducedMotion: boolean;
}) {
  const lookTarget =
    useRef(
      new THREE.Vector3(),
    );

  useFrame(
    (
      state,
      delta,
    ) => {
      const target =
        CAMERA_TARGETS[
          activeScene
        ];

      const pointerStrength =
        reducedMotion
          ? 0
          : 1;

      const targetX =
        target.position[0] +
        globalPointer.x *
          0.09 *
          pointerStrength;

      const targetY =
        target.position[1] +
        globalPointer.y *
          0.05 *
          pointerStrength;

      const damping =
        reducedMotion
          ? 12
          : 3.5;

      state.camera.position.x =
        THREE.MathUtils.damp(
          state.camera
            .position.x,
          targetX,
          damping,
          delta,
        );

      state.camera.position.y =
        THREE.MathUtils.damp(
          state.camera
            .position.y,
          targetY,
          damping,
          delta,
        );

      state.camera.position.z =
        THREE.MathUtils.damp(
          state.camera
            .position.z,
          target.position[2],
          damping,
          delta,
        );

      lookTarget.current.x =
        THREE.MathUtils.damp(
          lookTarget.current.x,
          target.lookAt[0],
          damping,
          delta,
        );

      lookTarget.current.y =
        THREE.MathUtils.damp(
          lookTarget.current.y,
          target.lookAt[1],
          damping,
          delta,
        );

      lookTarget.current.z =
        THREE.MathUtils.damp(
          lookTarget.current.z,
          target.lookAt[2],
          damping,
          delta,
        );

      state.camera.lookAt(
        lookTarget.current,
      );

      if (
        state.camera instanceof
        THREE.PerspectiveCamera
      ) {
        const nextFov =
          THREE.MathUtils.damp(
            state.camera.fov,
            target.fov,
            damping,
            delta,
          );

        if (
          Math.abs(
            nextFov -
              state.camera
                .fov,
          ) >
          0.001
        ) {
          state.camera.fov =
            nextFov;

          state.camera
            .updateProjectionMatrix();
        }
      }
    },
  );

  return null;
}

/* ============================================================
   LIGHTING
============================================================ */

function Lighting({
  isDark,
}: WorldProps) {
  return (
    <>
      <ambientLight
        intensity={
          isDark
            ? 0.8
            : 1.25
        }
      />

      <directionalLight
        position={[
          4,
          6,
          5,
        ]}
        intensity={
          isDark
            ? 2
            : 2.5
        }
      />
    </>
  );
}

/* ============================================================
   SCENE DIRECTOR
============================================================ */

function SceneDirector({
  activeScene,
  isDark,
  reducedMotion,
}: {
  activeScene: SceneName;
  isDark: boolean;
  reducedMotion: boolean;
}) {
  return (
    <>
      <Lighting
        isDark={isDark}
      />

      <CameraRig
        activeScene={
          activeScene
        }
        reducedMotion={
          reducedMotion
        }
      />

      <ActiveWorld
        key={activeScene}
        scene={activeScene}
        isDark={isDark}
        reducedMotion={
          reducedMotion
        }
      />
    </>
  );
}

/* ============================================================
   SITE SCENE
============================================================ */

export function SiteScene() {
  const {
  activeScene,
} = useActiveScene();

  const {
    theme,
    mounted,
  } = useTheme();

  const reducedMotion =
    useReducedMotion();

  const compact =
    useCompactScene();

  useGlobalPointerTracking(
    !compact &&
      !reducedMotion,
  );

  if (!mounted) {
    return null;
  }

  const isDark =
    theme === "dark";

  return (
    <div
      aria-hidden="true"
      className="h-full w-full"
    >
      <Canvas
        camera={{
          position: [
            0,
            0,
            7,
          ],
          fov: 42,
          near: 0.1,
          far: 50,
        }}
        dpr={1}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference:
            "high-performance",
        }}
        frameloop={
          reducedMotion
            ? "demand"
            : "always"
        }
        onCreated={({
          gl,
        }) => {
          gl.outputColorSpace =
            THREE.SRGBColorSpace;

          gl.toneMapping =
            THREE.ACESFilmicToneMapping;

          gl.toneMappingExposure =
            1;

          gl.setClearColor(
            0x000000,
            0,
          );
        }}
      >
        <SceneDirector
          activeScene={
            activeScene
          }
          isDark={isDark}
          reducedMotion={
            reducedMotion
          }
        />
      </Canvas>
    </div>
  );
}