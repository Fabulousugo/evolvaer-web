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

import { useTheme } from "@/src/components/theme-provider";

import {
  type AboutSceneName,
  useAboutActiveScene,
  useAboutSceneRuntime,
} from "./about-scene-experience";

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

      globalPointer.x = 0;
      globalPointer.y = 0;
    };
  }, [enabled]);
}

/* ============================================================
   MEDIA HELPERS
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
   SHARED HELPERS
============================================================ */

type Vec3 = [
  number,
  number,
  number,
];

function Connection({
  start,
  end,
  color,
  opacity,
}: {
  start: Vec3;
  end: Vec3;
  color: string;
  opacity: number;
}) {
  const {
    midpoint,
    length,
    quaternion,
  } = useMemo(() => {
    const from =
      new THREE.Vector3(...start);

    const to =
      new THREE.Vector3(...end);

    const direction =
      new THREE.Vector3().subVectors(
        to,
        from,
      );

    const distance =
      direction.length();

    const middle =
      new THREE.Vector3()
        .addVectors(from, to)
        .multiplyScalar(0.5);

    const rotation =
      new THREE.Quaternion();

    if (distance > 0) {
      rotation.setFromUnitVectors(
        new THREE.Vector3(
          0,
          1,
          0,
        ),
        direction
          .clone()
          .normalize(),
      );
    }

    return {
      midpoint: middle,
      length: distance,
      quaternion: rotation,
    };
  }, [start, end]);

  return (
    <mesh
      position={midpoint}
      quaternion={quaternion}
    >
      <cylinderGeometry
        args={[
          0.012,
          0.012,
          length,
          6,
        ]}
      />

      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
      />
    </mesh>
  );
}

/* ============================================================
   WORLD DEFINITIONS
============================================================ */

type WorldProps = {
  isDark: boolean;
};

function OriginWorld({
  isDark,
}: WorldProps) {
  const ribbonOne =
    useMemo(
      () =>
        new THREE.CatmullRomCurve3([
          new THREE.Vector3(
            -2.6,
            -1.2,
            -0.4,
          ),
          new THREE.Vector3(
            -1.4,
            -0.2,
            0.15,
          ),
          new THREE.Vector3(
            -0.2,
            0.6,
            -0.1,
          ),
          new THREE.Vector3(
            1.1,
            -0.25,
            0.1,
          ),
          new THREE.Vector3(
            2.55,
            0.5,
            0.15,
          ),
        ]),
      [],
    );

  const ribbonTwo =
    useMemo(
      () =>
        new THREE.CatmullRomCurve3([
          new THREE.Vector3(
            -2.3,
            1.2,
            -0.55,
          ),
          new THREE.Vector3(
            -1.1,
            0.4,
            0.1,
          ),
          new THREE.Vector3(
            0,
            -0.35,
            0.25,
          ),
          new THREE.Vector3(
            1.25,
            0.65,
            0,
          ),
          new THREE.Vector3(
            2.5,
            0,
            -0.3,
          ),
        ]),
      [],
    );

  return (
    <group
      position={[
        1.5,
        0,
        -2.3,
      ]}
    >
      <mesh>
        <tubeGeometry
          args={[
            ribbonOne,
            48,
            0.075,
            8,
            false,
          ]}
        />

        <meshStandardMaterial
          color="#3B82F6"
          emissive="#3B82F6"
          emissiveIntensity={
            isDark ? 0.18 : 0.02
          }
          roughness={0.4}
          metalness={0.1}
          transparent
          opacity={
            isDark ? 0.78 : 0.5
          }
        />
      </mesh>

      <mesh>
        <tubeGeometry
          args={[
            ribbonTwo,
            48,
            0.055,
            8,
            false,
          ]}
        />

        <meshStandardMaterial
          color="#22D3EE"
          emissive="#22D3EE"
          emissiveIntensity={
            isDark ? 0.15 : 0.02
          }
          roughness={0.42}
          metalness={0.08}
          transparent
          opacity={
            isDark ? 0.7 : 0.42
          }
        />
      </mesh>

      <mesh>
        <icosahedronGeometry
          args={[0.5, 2]}
        />

        <meshStandardMaterial
          color={
            isDark
              ? "#F5FAFF"
              : "#0A1D2F"
          }
          roughness={0.3}
          metalness={0.25}
        />
      </mesh>

      <mesh scale={0.3}>
        <icosahedronGeometry
          args={[0.5, 1]}
        />

        <meshBasicMaterial
          color="#3B82F6"
        />
      </mesh>
    </group>
  );
}

function StoryWorld({
  isDark,
}: WorldProps) {
  const nodes = useMemo<
    Array<{
      position: Vec3;
      color: string;
    }>
  >(
    () => [
      {
        position: [
          -2.1,
          1.1,
          -0.2,
        ],
        color: "#3B82F6",
      },
      {
        position: [
          -1.8,
          -1,
          0,
        ],
        color: "#22D3EE",
      },
      {
        position: [
          2.1,
          0.9,
          -0.3,
        ],
        color: "#A855F7",
      },
      {
        position: [
          1.9,
          -1.1,
          0.05,
        ],
        color: "#3B82F6",
      },
    ],
    [],
  );

  return (
    <group
      position={[
        1.45,
        0,
        -2.45,
      ]}
    >
      {nodes.map(
        (node, index) => (
          <group
            key={index}
          >
            <Connection
              start={
                node.position
              }
              end={[0, 0, 0]}
              color={
                node.color
              }
              opacity={
                isDark
                  ? 0.3
                  : 0.13
              }
            />

            <mesh
              position={
                node.position
              }
            >
              <octahedronGeometry
                args={[
                  0.2,
                  0,
                ]}
              />

              <meshStandardMaterial
                color={
                  node.color
                }
                emissive={
                  node.color
                }
                emissiveIntensity={
                  isDark
                    ? 0.12
                    : 0.015
                }
                roughness={0.4}
              />
            </mesh>
          </group>
        ),
      )}

      <mesh>
        <dodecahedronGeometry
          args={[0.43, 1]}
        />

        <meshStandardMaterial
          color={
            isDark
              ? "#EAF3FF"
              : "#0A1D2F"
          }
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>
    </group>
  );
}

function CapabilitiesWorld({
  isDark,
}: WorldProps) {
  const nodes = useMemo<
    Array<{
      position: Vec3;
      color: string;
    }>
  >(
    () => [
      {
        position: [
          -1.65,
          0.9,
          0,
        ],
        color: "#3B82F6",
      },
      {
        position: [
          0,
          -1.2,
          0.25,
        ],
        color: "#22D3EE",
      },
      {
        position: [
          1.65,
          0.9,
          -0.1,
        ],
        color: "#A855F7",
      },
    ],
    [],
  );

  return (
    <group
      position={[
        1.4,
        0,
        -2.35,
      ]}
    >
      {nodes.map(
        (node, index) => (
          <group key={index}>
            <Connection
              start={[
                0,
                0,
                0,
              ]}
              end={
                node.position
              }
              color={
                node.color
              }
              opacity={
                isDark
                  ? 0.3
                  : 0.12
              }
            />

            <mesh
              position={
                node.position
              }
            >
              {index === 1 ? (
                <octahedronGeometry
                  args={[
                    0.34,
                    1,
                  ]}
                />
              ) : (
                <icosahedronGeometry
                  args={[
                    0.32,
                    1,
                  ]}
                />
              )}

              <meshStandardMaterial
                color={
                  node.color
                }
                emissive={
                  node.color
                }
                emissiveIntensity={
                  isDark
                    ? 0.13
                    : 0.015
                }
                roughness={0.38}
              />
            </mesh>
          </group>
        ),
      )}

      <mesh>
        <icosahedronGeometry
          args={[0.48, 2]}
        />

        <meshStandardMaterial
          color={
            isDark
              ? "#F4F8FF"
              : "#0A1D2F"
          }
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>
    </group>
  );
}

function OperatingWorld({
  isDark,
}: WorldProps) {
  const steps = useMemo<
    Array<Vec3>
  >(
    () => [
      [-2.2, 0.75, 0],
      [
        -0.75,
        0.15,
        -0.15,
      ],
      [
        0.75,
        -0.35,
        0.1,
      ],
      [
        2.2,
        0.45,
        -0.2,
      ],
    ],
    [],
  );

  return (
    <group
      position={[
        1.35,
        0,
        -2.3,
      ]}
    >
      {steps.map(
        (position, index) => (
          <group key={index}>
            {index <
              steps.length -
                1 && (
              <Connection
                start={
                  position
                }
                end={
                  steps[
                    index + 1
                  ]
                }
                color={
                  index % 2 ===
                  0
                    ? "#3B82F6"
                    : "#22D3EE"
                }
                opacity={
                  isDark
                    ? 0.28
                    : 0.11
                }
              />
            )}

            <mesh
              position={
                position
              }
            >
              <boxGeometry
                args={[
                  0.42,
                  0.42,
                  0.42,
                ]}
              />

              <meshStandardMaterial
                color={
                  index % 2 ===
                  0
                    ? "#3B82F6"
                    : "#22D3EE"
                }
                emissive={
                  index % 2 ===
                  0
                    ? "#3B82F6"
                    : "#22D3EE"
                }
                emissiveIntensity={
                  isDark
                    ? 0.1
                    : 0.01
                }
                roughness={0.4}
              />
            </mesh>
          </group>
        ),
      )}
    </group>
  );
}

function EvolutionWorld({
  isDark,
}: WorldProps) {
  return (
    <group
      position={[
        1.4,
        0,
        -2.5,
      ]}
    >
      <mesh>
        <icosahedronGeometry
          args={[1.25, 2]}
        />

        <meshBasicMaterial
          wireframe
          color={
            isDark
              ? "#22D3EE"
              : "#2563EB"
          }
          transparent
          opacity={
            isDark
              ? 0.62
              : 0.3
          }
        />
      </mesh>

      <mesh scale={0.62}>
        <icosahedronGeometry
          args={[1, 1]}
        />

        <meshBasicMaterial
          wireframe
          color="#A855F7"
          transparent
          opacity={
            isDark
              ? 0.28
              : 0.12
          }
        />
      </mesh>
    </group>
  );
}

function PrinciplesWorld({
  isDark,
}: WorldProps) {
  const anchors =
    useMemo<Array<Vec3>>(
      () => [
        [
          -1.6,
          1.15,
          0,
        ],
        [
          1.6,
          1.15,
          0,
        ],
        [
          -1.6,
          -1.15,
          0,
        ],
        [
          1.6,
          -1.15,
          0,
        ],
      ],
      [],
    );

  return (
    <group
      position={[
        1.4,
        0,
        -2.35,
      ]}
    >
      {anchors.map(
        (position, index) => (
          <group key={index}>
            <Connection
              start={
                position
              }
              end={[0, 0, 0]}
              color={
                index % 2 === 0
                  ? "#3B82F6"
                  : "#22D3EE"
              }
              opacity={
                isDark
                  ? 0.25
                  : 0.1
              }
            />

            <mesh
              position={
                position
              }
            >
              <octahedronGeometry
                args={[
                  0.25,
                  0,
                ]}
              />

              <meshStandardMaterial
                color={
                  index % 2 ===
                  0
                    ? "#3B82F6"
                    : "#22D3EE"
                }
                emissive={
                  index % 2 ===
                  0
                    ? "#3B82F6"
                    : "#22D3EE"
                }
                emissiveIntensity={
                  isDark
                    ? 0.1
                    : 0.01
                }
                roughness={0.4}
              />
            </mesh>
          </group>
        ),
      )}

      <mesh>
        <boxGeometry
          args={[
            1.15,
            1.15,
            1.15,
          ]}
        />

        <meshBasicMaterial
          wireframe
          color="#A855F7"
          transparent
          opacity={
            isDark
              ? 0.4
              : 0.17
          }
        />
      </mesh>
    </group>
  );
}

function AmbitionWorld({
  isDark,
}: WorldProps) {
  return (
    <group
      position={[
        1.4,
        0,
        -2.7,
      ]}
    >
      <mesh>
        <icosahedronGeometry
          args={[1, 2]}
        />

        <meshBasicMaterial
          wireframe
          color="#3B82F6"
          transparent
          opacity={
            isDark
              ? 0.55
              : 0.27
          }
        />
      </mesh>

      <mesh scale={1.55}>
        <icosahedronGeometry
          args={[1, 1]}
        />

        <meshBasicMaterial
          wireframe
          color="#22D3EE"
          transparent
          opacity={
            isDark
              ? 0.25
              : 0.11
          }
        />
      </mesh>

      <mesh scale={0.3}>
        <icosahedronGeometry
          args={[1, 1]}
        />

        <meshBasicMaterial
          color="#A855F7"
          transparent
          opacity={
            isDark
              ? 0.8
              : 0.5
          }
        />
      </mesh>
    </group>
  );
}

function CtaWorld({
  isDark,
}: WorldProps) {
  const streams =
    useMemo(
      () => [
        new THREE.CatmullRomCurve3([
          new THREE.Vector3(
            -2.3,
            1.1,
            0,
          ),
          new THREE.Vector3(
            -1.1,
            0.5,
            0.1,
          ),
          new THREE.Vector3(
            0,
            0,
            0,
          ),
        ]),

        new THREE.CatmullRomCurve3([
          new THREE.Vector3(
            -2.1,
            -1.1,
            -0.2,
          ),
          new THREE.Vector3(
            -0.9,
            -0.5,
            0,
          ),
          new THREE.Vector3(
            0,
            0,
            0,
          ),
        ]),

        new THREE.CatmullRomCurve3([
          new THREE.Vector3(
            2.3,
            0.9,
            -0.2,
          ),
          new THREE.Vector3(
            1.1,
            0.4,
            0.1,
          ),
          new THREE.Vector3(
            0,
            0,
            0,
          ),
        ]),
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
        (curve, index) => (
          <mesh key={index}>
            <tubeGeometry
              args={[
                curve,
                40,
                0.025,
                6,
                false,
              ]}
            />

            <meshBasicMaterial
              color={
                index === 0
                  ? "#3B82F6"
                  : index === 1
                    ? "#22D3EE"
                    : "#A855F7"
              }
              transparent
              opacity={
                isDark
                  ? 0.5
                  : 0.25
              }
            />
          </mesh>
        ),
      )}

      <mesh>
        <icosahedronGeometry
          args={[0.5, 2]}
        />

        <meshStandardMaterial
          color={
            isDark
              ? "#F4F8FF"
              : "#EAF3FF"
          }
          emissive="#3B82F6"
          emissiveIntensity={
            isDark
              ? 0.16
              : 0.03
          }
          roughness={0.3}
          metalness={0.15}
        />
      </mesh>

      <mesh scale={0.28}>
        <sphereGeometry
          args={[
            0.5,
            12,
            12,
          ]}
        />

        <meshBasicMaterial
          color="#3B82F6"
        />
      </mesh>
    </group>
  );
}

/* ============================================================
   WORLD REGISTRY
============================================================ */

const ABOUT_SCENE_WORLDS =
  {
    hero: OriginWorld,
    story: StoryWorld,
    capabilities:
      CapabilitiesWorld,
    operating: OperatingWorld,
    evolution: EvolutionWorld,
    principles: PrinciplesWorld,
    ambition: AmbitionWorld,
    cta: CtaWorld,
  } satisfies Record<
    AboutSceneName,
    ComponentType<WorldProps>
  >;

/* ============================================================
   ACTIVE WORLD
============================================================ */

function ActiveWorld({
  scene,
  isDark,
  reducedMotion,
}: {
  scene: AboutSceneName;
  isDark: boolean;
  reducedMotion: boolean;
}) {
  const groupRef =
    useRef<THREE.Group>(null);

  const {
    sceneProgress,
  } = useAboutSceneRuntime();

  const World =
    ABOUT_SCENE_WORLDS[scene];

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

      const time =
        state.clock.elapsedTime;

      const pointerX =
        reducedMotion
          ? 0
          : globalPointer.x;

      const pointerY =
        reducedMotion
          ? 0
          : globalPointer.y;

      const targetRotationY =
        pointerX * 0.055 +
        (
          reducedMotion
            ? 0
            : Math.sin(
                time * 0.22,
              ) * 0.025
        );

      const targetRotationX =
        pointerY * -0.03;

      group.rotation.y =
        THREE.MathUtils.damp(
          group.rotation.y,
          targetRotationY,
          3,
          delta,
        );

      group.rotation.x =
        THREE.MathUtils.damp(
          group.rotation.x,
          targetRotationX,
          3,
          delta,
        );

      /*
       * One subtle shared motion system
       * replaces the individual useFrame
       * callback previously living inside
       * every world.
       */
      const progressLift =
        THREE.MathUtils.lerp(
          -0.08,
          0.08,
          THREE.MathUtils.smoothstep(
            progress,
            0.15,
            0.85,
          ),
        );

      group.position.y =
        THREE.MathUtils.damp(
          group.position.y,
          progressLift +
            (
              reducedMotion
                ? 0
                : Math.sin(
                    time * 0.32,
                  ) * 0.035
            ),
          3,
          delta,
        );
    },
  );

  return (
    <group ref={groupRef}>
      <World
        isDark={isDark}
      />
    </group>
  );
}

/* ============================================================
   CAMERA
============================================================ */

const CAMERA_TARGETS: Record<
  AboutSceneName,
  {
    position: Vec3;
    lookAt: Vec3;
    fov: number;
  }
> = {
  hero: {
    position: [0, 0, 7.2],
    lookAt: [
      0.45,
      0,
      -1.8,
    ],
    fov: 42,
  },

  story: {
    position: [
      -0.08,
      0.15,
      7.4,
    ],
    lookAt: [
      0.4,
      0,
      -1.9,
    ],
    fov: 41,
  },

  capabilities: {
    position: [
      0.05,
      0.1,
      7.15,
    ],
    lookAt: [
      0.35,
      0,
      -1.85,
    ],
    fov: 42,
  },

  operating: {
    position: [
      -0.08,
      0.2,
      7.5,
    ],
    lookAt: [
      0.45,
      0,
      -2,
    ],
    fov: 40,
  },

  evolution: {
    position: [0, 0, 7],
    lookAt: [
      0.4,
      0,
      -2,
    ],
    fov: 43,
  },

  principles: {
    position: [
      0,
      0.1,
      7.25,
    ],
    lookAt: [
      0.5,
      0,
      -1.8,
    ],
    fov: 41,
  },

  ambition: {
    position: [
      0,
      0.15,
      7.7,
    ],
    lookAt: [
      0.5,
      0,
      -2.2,
    ],
    fov: 39,
  },

  cta: {
    position: [
      0,
      0.05,
      7.9,
    ],
    lookAt: [
      0.55,
      0,
      -2.1,
    ],
    fov: 38,
  },
};

function CameraRig({
  activeScene,
  reducedMotion,
}: {
  activeScene: AboutSceneName;
  reducedMotion: boolean;
}) {
  const lookTarget =
    useRef(
      new THREE.Vector3(
        ...CAMERA_TARGETS.hero
          .lookAt,
      ),
    );

  useFrame(
    (state, delta) => {
      const target =
        CAMERA_TARGETS[
          activeScene
        ];

      const pointerX =
        reducedMotion
          ? 0
          : globalPointer.x;

      const pointerY =
        reducedMotion
          ? 0
          : globalPointer.y;

      const targetX =
        target.position[0] +
        pointerX * 0.1;

      const targetY =
        target.position[1] +
        pointerY * 0.06;

      const damping =
        reducedMotion
          ? 12
          : 3.4;

      state.camera.position.x =
        THREE.MathUtils.damp(
          state.camera.position.x,
          targetX,
          damping,
          delta,
        );

      state.camera.position.y =
        THREE.MathUtils.damp(
          state.camera.position.y,
          targetY,
          damping,
          delta,
        );

      state.camera.position.z =
        THREE.MathUtils.damp(
          state.camera.position.z,
          target.position[2],
          damping,
          delta,
        );

      lookTarget.current.x =
        THREE.MathUtils.damp(
          lookTarget.current.x,
          target.lookAt[0] +
            pointerX * 0.025,
          damping,
          delta,
        );

      lookTarget.current.y =
        THREE.MathUtils.damp(
          lookTarget.current.y,
          target.lookAt[1] +
            pointerY * 0.015,
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
              state.camera.fov,
          ) > 0.001
        ) {
          state.camera.fov =
            nextFov;

          state.camera.updateProjectionMatrix();
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
}: {
  isDark: boolean;
}) {
  return (
    <>
      <ambientLight
        intensity={
          isDark ? 0.8 : 1.25
        }
      />

      <directionalLight
        position={[4, 5, 4]}
        intensity={
          isDark ? 2.2 : 3
        }
        color="#EAF3FF"
      />
    </>
  );
}

/* ============================================================
   DIRECTOR
============================================================ */

function AboutSceneDirector({
  activeScene,
  isDark,
  reducedMotion,
}: {
  activeScene: AboutSceneName;
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
   CANVAS
============================================================ */

export function AboutScene() {
  const {
    activeScene,
  } = useAboutActiveScene();

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

  const isDark =
    theme === "dark";

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="h-full w-full"
      />
    );
  }

  return (
    <Canvas
      camera={{
        position: [
          0,
          0,
          7.2,
        ],
        fov: 42,
        near: 0.1,
        far: 50,
      }}
      dpr={1}
      frameloop={
        reducedMotion
          ? "demand"
          : "always"
      }
      gl={{
        antialias: false,
        alpha: true,
        powerPreference:
          "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.outputColorSpace =
          THREE.SRGBColorSpace;

        gl.toneMapping =
          THREE.ACESFilmicToneMapping;

        gl.toneMappingExposure =
          isDark
            ? 1
            : 0.92;

        gl.setClearColor(
          0x000000,
          0,
        );
      }}
    >
      <AboutSceneDirector
        activeScene={
          activeScene
        }
        isDark={isDark}
        reducedMotion={
          reducedMotion
        }
      />
    </Canvas>
  );
}