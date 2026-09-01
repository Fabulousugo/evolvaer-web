"use client";

import {
  Canvas,
  useFrame,
} from "@react-three/fiber";
import {
  Float,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useTheme } from "@/src/components/theme-provider";
import {
  type AboutSceneName,
  useAboutSceneExperience,
} from "./about-scene-experience";

/* =========================================================
   GLOBAL POINTER
========================================================= */

function useGlobalPointer() {
  const pointer = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handlePointerMove = (
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
      handlePointerMove,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove,
      );
    };
  }, []);

  return pointer;
}

/* =========================================================
   MEDIA HELPERS
========================================================= */

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] =
    useState(false);

  useEffect(() => {
    const media =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      );

    const update = () => {
      setReducedMotion(
        media.matches,
      );
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
  }, []);

  return reducedMotion;
}

function useCompactScene() {
  const [compact, setCompact] =
    useState(false);

  useEffect(() => {
    const media =
      window.matchMedia(
        "(max-width: 767px)",
      );

    const update = () => {
      setCompact(
        media.matches,
      );
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
  }, []);

  return compact;
}

/* =========================================================
   MATH HELPERS
========================================================= */

function getSceneWeight(
  progress: number,
  scene: AboutSceneName,
) {
  if (scene === "hero") {
    return (
      1 -
      THREE.MathUtils.smoothstep(
        progress,
        0.68,
        0.98,
      )
    );
  }

  if (scene === "cta") {
    return THREE.MathUtils.smoothstep(
      progress,
      0.06,
      0.36,
    );
  }

  const entering =
    THREE.MathUtils.smoothstep(
      progress,
      0.04,
      0.3,
    );

  const leaving =
    1 -
    THREE.MathUtils.smoothstep(
      progress,
      0.7,
      0.96,
    );

  return Math.min(
    entering,
    leaving,
  );
}

/* =========================================================
   HERO / ORIGIN WORLD
========================================================= */

function OriginWorld({
  isDark,
}: {
  isDark: boolean;
}) {
  const groupRef =
    useRef<THREE.Group>(null);

  const coreRef =
    useRef<THREE.Mesh>(null);

  const ribbonRefs =
    useRef<
      Array<THREE.Mesh | null>
    >([]);

  const fragmentRefs =
    useRef<
      Array<THREE.Mesh | null>
    >([]);

  const pointer =
    useGlobalPointer();

  const {
    sceneProgress,
  } = useAboutSceneExperience();

  const ribbons =
    useMemo(() => {
      return [
        {
          color: "#3B82F6",
          curve:
            new THREE.CatmullRomCurve3(
              [
                new THREE.Vector3(
                  -2.6,
                  -1.2,
                  -0.4,
                ),
                new THREE.Vector3(
                  -1.7,
                  -0.3,
                  0.2,
                ),
                new THREE.Vector3(
                  -0.7,
                  0.65,
                  -0.15,
                ),
                new THREE.Vector3(
                  0.4,
                  0.25,
                  0.2,
                ),
                new THREE.Vector3(
                  1.45,
                  -0.45,
                  -0.1,
                ),
                new THREE.Vector3(
                  2.55,
                  0.5,
                  0.15,
                ),
              ],
            ),
        },
        {
          color: "#22D3EE",
          curve:
            new THREE.CatmullRomCurve3(
              [
                new THREE.Vector3(
                  -2.3,
                  1.25,
                  -0.6,
                ),
                new THREE.Vector3(
                  -1.35,
                  0.55,
                  0.15,
                ),
                new THREE.Vector3(
                  -0.3,
                  -0.35,
                  0.3,
                ),
                new THREE.Vector3(
                  0.8,
                  0.3,
                  -0.1,
                ),
                new THREE.Vector3(
                  1.65,
                  1,
                  0.15,
                ),
                new THREE.Vector3(
                  2.6,
                  0.1,
                  -0.35,
                ),
              ],
            ),
        },
        {
          color: "#A855F7",
          curve:
            new THREE.CatmullRomCurve3(
              [
                new THREE.Vector3(
                  -2.15,
                  0.2,
                  -1,
                ),
                new THREE.Vector3(
                  -1.25,
                  -0.7,
                  -0.2,
                ),
                new THREE.Vector3(
                  -0.15,
                  -0.1,
                  0.3,
                ),
                new THREE.Vector3(
                  0.95,
                  0.8,
                  -0.25,
                ),
                new THREE.Vector3(
                  1.75,
                  0.2,
                  0.1,
                ),
                new THREE.Vector3(
                  2.3,
                  -0.8,
                  -0.5,
                ),
              ],
            ),
        },
      ];
    }, []);

  const fragments =
    useMemo(
      () =>
        Array.from(
          { length: 18 },
          (_, index) => {
            const angle =
              (index / 18) *
              Math.PI *
              2;

            const radius =
              2.4 +
              (index % 3) *
                0.35;

            return {
              x:
                Math.cos(angle) *
                radius,

              y:
                Math.sin(angle) *
                radius *
                0.7,

              z:
                Math.sin(
                  angle * 1.8,
                ) * 0.9,

              phase:
                index * 0.37,
            };
          },
        ),
      [],
    );

  useFrame(
    (state, delta) => {
      const group =
        groupRef.current;

      if (!group) return;

      const progress =
        sceneProgress.current
          .hero;

      const time =
        state.clock.elapsedTime;

      group.rotation.y =
        THREE.MathUtils.damp(
          group.rotation.y,
          pointer.current.x *
            0.06 +
            Math.sin(
              time * 0.12,
            ) *
              0.035,
          3,
          delta,
        );

      group.rotation.x =
        THREE.MathUtils.damp(
          group.rotation.x,
          pointer.current.y *
            -0.035,
          3,
          delta,
        );

      /*
       * Hero starts coherent.
       * As the visitor leaves,
       * the system begins opening.
       */

      const opening =
        THREE.MathUtils.smoothstep(
          progress,
          0.5,
          0.92,
        );

      ribbonRefs.current.forEach(
        (ribbon, index) => {
          if (!ribbon) return;

          const direction =
            index === 0
              ? -1
              : index === 1
                ? 1
                : 0;

          ribbon.position.y =
            THREE.MathUtils.damp(
              ribbon.position.y,
              direction *
                opening *
                0.65,
              4,
              delta,
            );

          ribbon.position.z =
            THREE.MathUtils.damp(
              ribbon.position.z,
              -opening *
                (0.25 +
                  index *
                    0.18),
              4,
              delta,
            );

          ribbon.rotation.z =
            THREE.MathUtils.damp(
              ribbon.rotation.z,
              direction *
                opening *
                0.08,
              4,
              delta,
            );
        },
      );

      if (coreRef.current) {
        coreRef.current.rotation.x +=
          delta * 0.09;

        coreRef.current.rotation.y +=
          delta * 0.15;

        const pulse =
          1 +
          Math.sin(
            time * 0.9,
          ) *
            0.035;

        coreRef.current.scale.setScalar(
          THREE.MathUtils.lerp(
            pulse,
            0.7,
            opening,
          ),
        );
      }

      /*
       * Fragments move from a loose
       * outer cloud into a tighter
       * evolving structure.
       */

      fragmentRefs.current.forEach(
        (fragment, index) => {
          if (!fragment) return;

          const source =
            fragments[index];

          const coherence =
            1 -
            THREE.MathUtils.smoothstep(
              progress,
              0.55,
              0.95,
            );

          const compression =
            THREE.MathUtils.lerp(
              1,
              0.38,
              coherence,
            );

          fragment.position.x =
            source.x *
            compression;

          fragment.position.y =
            source.y *
              compression +
            Math.sin(
              time * 0.3 +
                source.phase,
            ) *
              0.04;

          fragment.position.z =
            source.z *
            compression;
        },
      );
    },
  );

  return (
    <group
      ref={groupRef}
      position={[
        1.5,
        0,
        -2.3,
      ]}
    >
      {ribbons.map(
        (
          ribbon,
          index,
        ) => (
          <mesh
            key={`origin-ribbon-${index}`}
            ref={(element) => {
              ribbonRefs.current[
                index
              ] = element;
            }}
          >
            <tubeGeometry
              args={[
                ribbon.curve,
                120,
                index === 0
                  ? 0.07
                  : 0.045,
                12,
                false,
              ]}
            />

            <meshPhysicalMaterial
              color={
                ribbon.color
              }
              emissive={
                ribbon.color
              }
              emissiveIntensity={
                isDark
                  ? 0.2
                  : 0.03
              }
              metalness={0.28}
              roughness={0.16}
              clearcoat={1}
              transparent
              opacity={
                isDark
                  ? 0.82
                  : 0.62
              }
            />
          </mesh>
        ),
      )}

      <Float
        speed={0.45}
        floatIntensity={0.06}
      >
        <mesh ref={coreRef}>
          <icosahedronGeometry
            args={[0.5, 3]}
          />

          <meshPhysicalMaterial
            color={
              isDark
                ? "#F5FAFF"
                : "#0A1D2F"
            }
            metalness={
              isDark
                ? 0.06
                : 0.5
            }
            roughness={0.1}
            transmission={
              isDark
                ? 0.55
                : 0.05
            }
            thickness={1}
            clearcoat={1}
            transparent
            opacity={0.9}
          />
        </mesh>
      </Float>

      <mesh>
        <sphereGeometry
          args={[
            0.12,
            24,
            24,
          ]}
        />

        <meshBasicMaterial
          color="#3B82F6"
        />
      </mesh>

      {fragments.map(
        (
          fragment,
          index,
        ) => (
          <mesh
            key={`origin-fragment-${index}`}
            ref={(element) => {
              fragmentRefs.current[
                index
              ] = element;
            }}
            position={[
              fragment.x,
              fragment.y,
              fragment.z,
            ]}
          >
            {index % 4 === 0 ? (
              <octahedronGeometry
                args={[
                  0.045,
                  0,
                ]}
              />
            ) : (
              <sphereGeometry
                args={[
                  0.022,
                  8,
                  8,
                ]}
              />
            )}

            <meshBasicMaterial
              color={
                index % 3 === 0
                  ? "#3B82F6"
                  : index % 3 ===
                      1
                    ? "#22D3EE"
                    : "#A855F7"
              }
              transparent
              opacity={
                isDark
                  ? 0.65
                  : 0.34
              }
            />
          </mesh>
        ),
      )}

      <pointLight
        position={[
          0,
          0,
          1.2,
        ]}
        intensity={
          isDark
            ? 10
            : 5
        }
        distance={8}
        color="#3B82F6"
      />

      <Sparkles
        count={22}
        scale={[8, 5, 5]}
        size={0.55}
        speed={0.035}
        opacity={
          isDark
            ? 0.14
            : 0.05
        }
        color="#BFDBFE"
      />
    </group>
  );
}

/* =========================================================
   STORY WORLD
========================================================= */

function StoryWorld({
  isDark,
}: {
  isDark: boolean;
}) {
  const groupRef =
    useRef<THREE.Group>(null);

  const signalRefs =
    useRef<
      Array<THREE.Mesh | null>
    >([]);

  const coreRef =
    useRef<THREE.Mesh>(null);

  const {
    sceneProgress,
  } = useAboutSceneExperience();

  const signals =
    useMemo(
      () => [
        {
          start: [
            -2.5,
            1.4,
            -0.3,
          ] as [
            number,
            number,
            number,
          ],

          target: [
            -0.5,
            0.3,
            0,
          ] as [
            number,
            number,
            number,
          ],

          color:
            "#3B82F6",
        },

        {
          start: [
            -2.2,
            -1.2,
            -0.5,
          ] as [
            number,
            number,
            number,
          ],

          target: [
            -0.25,
            -0.25,
            0.1,
          ] as [
            number,
            number,
            number,
          ],

          color:
            "#22D3EE",
        },

        {
          start: [
            2.6,
            1,
            -0.6,
          ] as [
            number,
            number,
            number,
          ],

          target: [
            0.45,
            0.22,
            -0.05,
          ] as [
            number,
            number,
            number,
          ],

          color:
            "#A855F7",
        },

        {
          start: [
            2.4,
            -1.35,
            -0.3,
          ] as [
            number,
            number,
            number,
          ],

          target: [
            0.3,
            -0.3,
            0.05,
          ] as [
            number,
            number,
            number,
          ],

          color:
            "#3B82F6",
        },
      ],
      [],
    );

  useFrame((state, delta) => {
    const group =
      groupRef.current;

    if (!group) return;

    const progress =
      sceneProgress.current
        .story;

    const time =
      state.clock.elapsedTime;

    const convergence =
      THREE.MathUtils.smoothstep(
        progress,
        0.1,
        0.72,
      );

    group.rotation.y =
      Math.sin(
        time * 0.1,
      ) * 0.025;

    signalRefs.current.forEach(
      (signal, index) => {
        if (!signal) return;

        const config =
          signals[index];

        signal.position.x =
          THREE.MathUtils.damp(
            signal.position.x,
            THREE.MathUtils.lerp(
              config.start[0],
              config.target[0],
              convergence,
            ),
            5,
            delta,
          );

        signal.position.y =
          THREE.MathUtils.damp(
            signal.position.y,
            THREE.MathUtils.lerp(
              config.start[1],
              config.target[1],
              convergence,
            ),
            5,
            delta,
          );

        signal.position.z =
          THREE.MathUtils.damp(
            signal.position.z,
            THREE.MathUtils.lerp(
              config.start[2],
              config.target[2],
              convergence,
            ),
            5,
            delta,
          );

        signal.rotation.x +=
          delta * 0.08;

        signal.rotation.y +=
          delta * 0.12;
      },
    );

    if (coreRef.current) {
      const coreEntry =
        THREE.MathUtils.smoothstep(
          progress,
          0.35,
          0.78,
        );

      coreRef.current.scale.setScalar(
        THREE.MathUtils.lerp(
          0.08,
          1,
          coreEntry,
        ),
      );

      coreRef.current.rotation.y +=
        delta * 0.14;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[
        1.45,
        0,
        -2.45,
      ]}
    >
      {signals.map(
        (
          signal,
          index,
        ) => (
          <mesh
            key={`story-signal-${index}`}
            ref={(element) => {
              signalRefs.current[
                index
              ] = element;
            }}
            position={
              signal.start
            }
          >
            {index % 2 === 0 ? (
              <icosahedronGeometry
                args={[
                  0.22,
                  1,
                ]}
              />
            ) : (
              <octahedronGeometry
                args={[
                  0.2,
                  0,
                ]}
              />
            )}

            <meshPhysicalMaterial
              color={
                signal.color
              }
              emissive={
                signal.color
              }
              emissiveIntensity={
                isDark
                  ? 0.18
                  : 0.03
              }
              metalness={0.3}
              roughness={0.16}
              clearcoat={1}
            />
          </mesh>
        ),
      )}

      <mesh ref={coreRef}>
        <dodecahedronGeometry
          args={[0.42, 1]}
        />

        <meshPhysicalMaterial
          color={
            isDark
              ? "#EAF3FF"
              : "#0A1D2F"
          }
          roughness={0.12}
          metalness={0.3}
          transmission={
            isDark
              ? 0.42
              : 0.02
          }
          clearcoat={1}
        />
      </mesh>

      <pointLight
        intensity={
          isDark
            ? 7
            : 3
        }
        distance={7}
        color="#22D3EE"
      />
    </group>
  );
}

/* =========================================================
   CAPABILITIES WORLD
========================================================= */

function CapabilitiesWorld({
  isDark,
}: {
  isDark: boolean;
}) {
  const groupRef =
    useRef<THREE.Group>(null);

  const nodeRefs =
    useRef<
      Array<THREE.Mesh | null>
    >([]);

  const coreRef =
    useRef<THREE.Mesh>(null);

  const {
    sceneProgress,
  } = useAboutSceneExperience();

  const nodes =
    useMemo(
      () => [
        {
          position: [
            -1.65,
            0.9,
            0,
          ] as [
            number,
            number,
            number,
          ],

          color:
            "#3B82F6",
        },

        {
          position: [
            0,
            -1.2,
            0.25,
          ] as [
            number,
            number,
            number,
          ],

          color:
            "#22D3EE",
        },

        {
          position: [
            1.65,
            0.9,
            -0.1,
          ] as [
            number,
            number,
            number,
          ],

          color:
            "#A855F7",
        },
      ],
      [],
    );

  useFrame(
    (state, delta) => {
      const group =
        groupRef.current;

      if (!group) return;

      const progress =
        sceneProgress.current
          .capabilities;

      const time =
        state.clock.elapsedTime;

      const spread =
        THREE.MathUtils.smoothstep(
          progress,
          0.08,
          0.5,
        );

      group.rotation.y =
        Math.sin(
          time * 0.12,
        ) * 0.03;

      nodeRefs.current.forEach(
        (node, index) => {
          if (!node) return;

          const target =
            nodes[index]
              .position;

          node.position.x =
            THREE.MathUtils.damp(
              node.position.x,
              target[0] *
                spread,
              5,
              delta,
            );

          node.position.y =
            THREE.MathUtils.damp(
              node.position.y,
              target[1] *
                spread,
              5,
              delta,
            );

          node.position.z =
            THREE.MathUtils.damp(
              node.position.z,
              target[2] *
                spread,
              5,
              delta,
            );

          node.rotation.x +=
            delta *
            (0.08 +
              index * 0.02);

          node.rotation.y +=
            delta *
            (0.12 +
              index * 0.025);
        },
      );

      if (coreRef.current) {
        coreRef.current.rotation.x +=
          delta * 0.08;

        coreRef.current.rotation.y +=
          delta * 0.15;

        coreRef.current.scale.setScalar(
          1 +
            Math.sin(
              time * 0.9,
            ) *
              0.035,
        );
      }
    },
  );

  return (
    <group
      ref={groupRef}
      position={[
        1.4,
        0,
        -2.35,
      ]}
    >
      {nodes.map(
        (
          node,
          index,
        ) => (
          <mesh
            key={`capability-${index}`}
            ref={(element) => {
              nodeRefs.current[
                index
              ] = element;
            }}
          >
            {index === 0 ? (
              <icosahedronGeometry
                args={[
                  0.34,
                  2,
                ]}
              />
            ) : index === 1 ? (
              <octahedronGeometry
                args={[
                  0.38,
                  1,
                ]}
              />
            ) : (
              <dodecahedronGeometry
                args={[
                  0.34,
                  1,
                ]}
              />
            )}

            <meshPhysicalMaterial
              color={
                node.color
              }
              emissive={
                node.color
              }
              emissiveIntensity={
                isDark
                  ? 0.18
                  : 0.03
              }
              metalness={0.3}
              roughness={0.15}
              clearcoat={1}
            />
          </mesh>
        ),
      )}

      <mesh ref={coreRef}>
        <icosahedronGeometry
          args={[0.48, 3]}
        />

        <meshPhysicalMaterial
          color={
            isDark
              ? "#F4F8FF"
              : "#0A1D2F"
          }
          roughness={0.1}
          metalness={0.25}
          transmission={
            isDark
              ? 0.55
              : 0.04
          }
          clearcoat={1}
          transparent
          opacity={0.9}
        />
      </mesh>

      {nodes.map(
        (
          node,
          index,
        ) => (
          <mesh
            key={`capability-line-${index}`}
            position={[
              node.position[0] /
                2,
              node.position[1] /
                2,
              node.position[2] /
                2,
            ]}
            rotation={[
              0,
              0,
              index === 0
                ? -0.5
                : index === 1
                  ? 0
                  : 0.5,
            ]}
          >
            <boxGeometry
              args={[
                0.012,
                1.8,
                0.012,
              ]}
            />

            <meshBasicMaterial
              color={
                node.color
              }
              transparent
              opacity={
                isDark
                  ? 0.24
                  : 0.12
              }
            />
          </mesh>
        ),
      )}

      <pointLight
        position={[
          0,
          0,
          1,
        ]}
        intensity={
          isDark
            ? 9
            : 4
        }
        distance={8}
        color="#3B82F6"
      />
    </group>
  );
}

/* =========================================================
   SUPPORT WORLDS
========================================================= */

function OperatingWorld({
  isDark,
}: {
  isDark: boolean;
}) {
  const groupRef =
    useRef<THREE.Group>(null);

  const stepRefs =
    useRef<
      Array<THREE.Mesh | null>
    >([]);

  const {
    sceneProgress,
  } = useAboutSceneExperience();

  const steps =
    useMemo(
      () => [
        [
          -2.2,
          0.75,
          0,
        ],
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
      ] as Array<
        [
          number,
          number,
          number,
        ]
      >,
      [],
    );

  useFrame((state, delta) => {
    const progress =
      sceneProgress.current
        .operating;

    const time =
      state.clock.elapsedTime;

    stepRefs.current.forEach(
      (step, index) => {
        if (!step) return;

        const delay =
          index * 0.08;

        const entry =
          THREE.MathUtils.smoothstep(
            progress,
            0.08 + delay,
            0.38 + delay,
          );

        const target =
          steps[index];

        step.position.x =
          THREE.MathUtils.damp(
            step.position.x,
            THREE.MathUtils.lerp(
              -2.8,
              target[0],
              entry,
            ),
            5,
            delta,
          );

        step.position.y =
          THREE.MathUtils.damp(
            step.position.y,
            target[1],
            5,
            delta,
          );

        step.position.z =
          THREE.MathUtils.damp(
            step.position.z,
            target[2],
            5,
            delta,
          );

        step.rotation.y +=
          delta *
          (0.1 +
            index * 0.02);

        step.position.y +=
          Math.sin(
            time * 0.5 +
              index,
          ) *
          0.0015;
      },
    );
  });

  return (
    <group
      ref={groupRef}
      position={[
        1.35,
        0,
        -2.3,
      ]}
    >
      {steps.map(
        (
          step,
          index,
        ) => (
          <mesh
            key={`operating-step-${index}`}
            ref={(element) => {
              stepRefs.current[
                index
              ] = element;
            }}
            position={[
              -2.8,
              step[1],
              step[2],
            ]}
          >
            <boxGeometry
              args={[
                0.46,
                0.46,
                0.46,
              ]}
            />

            <meshPhysicalMaterial
              color={
                index % 2 === 0
                  ? "#3B82F6"
                  : "#22D3EE"
              }
              emissive={
                index % 2 === 0
                  ? "#3B82F6"
                  : "#22D3EE"
              }
              emissiveIntensity={
                isDark
                  ? 0.14
                  : 0.02
              }
              metalness={0.35}
              roughness={0.18}
              clearcoat={1}
            />
          </mesh>
        ),
      )}
    </group>
  );
}

function EvolutionWorld({
  isDark,
}: {
  isDark: boolean;
}) {
  const meshRef =
    useRef<THREE.Mesh>(null);

  const {
    sceneProgress,
  } = useAboutSceneExperience();

  useFrame((state, delta) => {
    const mesh =
      meshRef.current;

    if (!mesh) return;

    const progress =
      sceneProgress.current
        .evolution;

    const time =
      state.clock.elapsedTime;

    mesh.rotation.x =
      THREE.MathUtils.damp(
        mesh.rotation.x,
        progress *
          Math.PI *
          0.45,
        3,
        delta,
      );

    mesh.rotation.y =
      time * 0.12 +
      progress *
        Math.PI *
        0.6;

    const scale =
      0.9 +
      THREE.MathUtils.smoothstep(
        progress,
        0.15,
        0.75,
      ) *
        0.35;

    mesh.scale.setScalar(
      scale,
    );
  });

  return (
    <group
      position={[
        1.4,
        0,
        -2.5,
      ]}
    >
      <mesh ref={meshRef}>
        <icosahedronGeometry
          args={[1.25, 4]}
        />

        <meshPhysicalMaterial
          wireframe
          color={
            isDark
              ? "#22D3EE"
              : "#2563EB"
          }
          emissive={
            isDark
              ? "#22D3EE"
              : "#2563EB"
          }
          emissiveIntensity={
            isDark
              ? 0.2
              : 0.03
          }
          transparent
          opacity={
            isDark
              ? 0.7
              : 0.36
          }
        />
      </mesh>
    </group>
  );
}

function PrinciplesWorld({
  isDark,
}: {
  isDark: boolean;
}) {
  const anchors =
    useMemo(
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
      ] as Array<
        [
          number,
          number,
          number,
        ]
      >,
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
        (
          position,
          index,
        ) => (
          <mesh
            key={`principle-anchor-${index}`}
            position={
              position
            }
          >
            <octahedronGeometry
              args={[
                0.26,
                0,
              ]}
            />

            <meshPhysicalMaterial
              color={
                index % 2 === 0
                  ? "#3B82F6"
                  : "#22D3EE"
              }
              emissive={
                index % 2 === 0
                  ? "#3B82F6"
                  : "#22D3EE"
              }
              emissiveIntensity={
                isDark
                  ? 0.16
                  : 0.03
              }
              metalness={0.3}
              roughness={0.16}
              clearcoat={1}
            />
          </mesh>
        ),
      )}

      <mesh>
        <boxGeometry
          args={[
            1.2,
            1.2,
            1.2,
          ]}
        />

        <meshPhysicalMaterial
          wireframe
          color="#A855F7"
          transparent
          opacity={
            isDark
              ? 0.42
              : 0.18
          }
        />
      </mesh>
    </group>
  );
}

function AmbitionWorld({
  isDark,
}: {
  isDark: boolean;
}) {
  const groupRef =
    useRef<THREE.Group>(null);

  const {
    sceneProgress,
  } = useAboutSceneExperience();

  useFrame((_, delta) => {
    const group =
      groupRef.current;

    if (!group) return;

    const progress =
      sceneProgress.current
        .ambition;

    const expansion =
      THREE.MathUtils.smoothstep(
        progress,
        0.1,
        0.8,
      );

    const scale =
      THREE.MathUtils.lerp(
        0.7,
        1.6,
        expansion,
      );

    const next =
      THREE.MathUtils.damp(
        group.scale.x,
        scale,
        3,
        delta,
      );

    group.scale.setScalar(
      next,
    );
  });

  return (
    <group
      ref={groupRef}
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

        <meshPhysicalMaterial
          wireframe
          color="#3B82F6"
          transparent
          opacity={
            isDark
              ? 0.55
              : 0.28
          }
        />
      </mesh>

      <mesh scale={1.55}>
        <icosahedronGeometry
          args={[1, 1]}
        />

        <meshPhysicalMaterial
          wireframe
          color="#22D3EE"
          transparent
          opacity={
            isDark
              ? 0.26
              : 0.12
          }
        />
      </mesh>

      <Sparkles
        count={28}
        scale={[7, 5, 5]}
        size={0.55}
        speed={0.04}
        opacity={
          isDark
            ? 0.13
            : 0.05
        }
        color="#93C5FD"
      />
    </group>
  );
}

function CtaWorld({
  isDark,
}: {
  isDark: boolean;
}) {
  const coreRef =
    useRef<THREE.Mesh>(null);

  const {
    sceneProgress,
  } = useAboutSceneExperience();

  useFrame((state) => {
    const core =
      coreRef.current;

    if (!core) return;

    const progress =
      sceneProgress.current
        .cta;

    const pulse =
      1 +
      Math.sin(
        state.clock.elapsedTime *
          1.1,
      ) *
        0.04;

    const scale =
      THREE.MathUtils.lerp(
        0.55,
        1.2,
        THREE.MathUtils.smoothstep(
          progress,
          0.08,
          0.55,
        ),
      );

    core.scale.setScalar(
      scale * pulse,
    );

    core.rotation.y += 0.003;
  });

  return (
    <group
      position={[
        1.45,
        0,
        -2.2,
      ]}
    >
      <mesh ref={coreRef}>
        <icosahedronGeometry
          args={[0.5, 4]}
        />

        <meshPhysicalMaterial
          color={
            isDark
              ? "#F4F8FF"
              : "#EAF3FF"
          }
          transmission={0.6}
          thickness={1}
          roughness={0.08}
          clearcoat={1}
          transparent
          opacity={0.92}
        />
      </mesh>

      <mesh>
        <sphereGeometry
          args={[
            0.16,
            32,
            32,
          ]}
        />

        <meshBasicMaterial
          color="#3B82F6"
        />
      </mesh>

      <pointLight
        intensity={
          isDark
            ? 14
            : 7
        }
        distance={9}
        color="#3B82F6"
      />
    </group>
  );
}

/* =========================================================
   SCENE TRANSITION GROUP
========================================================= */

function AboutTransitionGroup({
  scene,
  activeScene,
  reducedMotion,
  children,
}: {
  scene: AboutSceneName;
  activeScene: AboutSceneName;
  reducedMotion: boolean;
  children: React.ReactNode;
}) {
  const groupRef =
    useRef<THREE.Group>(null);

  const {
    sceneProgress,
  } = useAboutSceneExperience();

  useFrame((_, delta) => {
    const group =
      groupRef.current;

    if (!group) return;

    const progress =
      sceneProgress.current[
        scene
      ];

    const weight =
      reducedMotion
        ? scene === activeScene
          ? 1
          : 0
        : getSceneWeight(
            progress,
            scene,
          );

    const direction =
      progress < 0.5
        ? -1
        : 1;

    const distance =
      1 - weight;

    const targetScale =
      THREE.MathUtils.lerp(
        0.82,
        1,
        weight,
      );

    const nextScale =
      THREE.MathUtils.damp(
        group.scale.x,
        targetScale,
        reducedMotion
          ? 14
          : 5,
        delta,
      );

    group.scale.setScalar(
      nextScale,
    );

    group.position.z =
      THREE.MathUtils.damp(
        group.position.z,
        -distance * 3,
        5,
        delta,
      );

    group.position.y =
      THREE.MathUtils.damp(
        group.position.y,
        direction *
          distance *
          0.5,
        5,
        delta,
      );

    group.visible =
      weight > 0.01 ||
      scene === activeScene;
  });

  return (
    <group
      ref={groupRef}
      visible={
        scene === activeScene
      }
    >
      {children}
    </group>
  );
}

/* =========================================================
   CAMERA
========================================================= */

function CameraRig({
  activeScene,
  reducedMotion,
}: {
  activeScene: AboutSceneName;
  reducedMotion: boolean;
}) {
  const pointer =
    useGlobalPointer();

  const {
    sceneProgress,
  } = useAboutSceneExperience();

  const lookTarget =
    useRef(
      new THREE.Vector3(
        0.5,
        0,
        -1.8,
      ),
    );

  const targets =
    useMemo<
      Record<
        AboutSceneName,
        {
          position: [
            number,
            number,
            number,
          ];
          lookAt: [
            number,
            number,
            number,
          ];
          fov: number;
        }
      >
    >(
      () => ({
        hero: {
          position: [
            0,
            0,
            7.2,
          ],
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
          position: [
            0,
            0,
            7,
          ],
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
      }),
      [],
    );

  useFrame(
    (state, delta) => {
      let totalWeight = 0;

      let cameraX = 0;
      let cameraY = 0;
      let cameraZ = 0;

      let lookX = 0;
      let lookY = 0;
      let lookZ = 0;

      let targetFov = 0;

      (
        Object.keys(
          targets,
        ) as AboutSceneName[]
      ).forEach((scene) => {
        let weight =
          reducedMotion
            ? scene ===
              activeScene
              ? 1
              : 0
            : getSceneWeight(
                sceneProgress
                  .current[
                  scene
                ],
                scene,
              );

        if (
          scene ===
            activeScene &&
          weight < 0.01
        ) {
          weight = 0.01;
        }

        if (weight <= 0) {
          return;
        }

        const target =
          targets[scene];

        totalWeight +=
          weight;

        cameraX +=
          target.position[0] *
          weight;

        cameraY +=
          target.position[1] *
          weight;

        cameraZ +=
          target.position[2] *
          weight;

        lookX +=
          target.lookAt[0] *
          weight;

        lookY +=
          target.lookAt[1] *
          weight;

        lookZ +=
          target.lookAt[2] *
          weight;

        targetFov +=
          target.fov *
          weight;
      });

      if (
        totalWeight <=
        0.0001
      ) {
        const fallback =
          targets[
            activeScene
          ];

        cameraX =
          fallback.position[0];

        cameraY =
          fallback.position[1];

        cameraZ =
          fallback.position[2];

        lookX =
          fallback.lookAt[0];

        lookY =
          fallback.lookAt[1];

        lookZ =
          fallback.lookAt[2];

        targetFov =
          fallback.fov;

        totalWeight = 1;
      }

      cameraX /=
        totalWeight;

      cameraY /=
        totalWeight;

      cameraZ /=
        totalWeight;

      lookX /=
        totalWeight;

      lookY /=
        totalWeight;

      lookZ /=
        totalWeight;

      targetFov /=
        totalWeight;

      if (!reducedMotion) {
        cameraX +=
          pointer.current.x *
          0.13;

        cameraY +=
          pointer.current.y *
          0.08;

        lookX +=
          pointer.current.x *
          0.035;

        lookY +=
          pointer.current.y *
          0.02;
      }

      const damping =
        reducedMotion
          ? 14
          : 3.2;

      state.camera.position.x =
        THREE.MathUtils.damp(
          state.camera
            .position.x,
          cameraX,
          damping,
          delta,
        );

      state.camera.position.y =
        THREE.MathUtils.damp(
          state.camera
            .position.y,
          cameraY,
          damping,
          delta,
        );

      state.camera.position.z =
        THREE.MathUtils.damp(
          state.camera
            .position.z,
          cameraZ,
          damping,
          delta,
        );

      lookTarget.current.x =
        THREE.MathUtils.damp(
          lookTarget.current.x,
          lookX,
          damping,
          delta,
        );

      lookTarget.current.y =
        THREE.MathUtils.damp(
          lookTarget.current.y,
          lookY,
          damping,
          delta,
        );

      lookTarget.current.z =
        THREE.MathUtils.damp(
          lookTarget.current.z,
          lookZ,
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
        state.camera.fov =
          THREE.MathUtils.damp(
            state.camera.fov,
            targetFov,
            damping,
            delta,
          );

        state.camera.updateProjectionMatrix();
      }
    },
  );

  return null;
}

/* =========================================================
   LIGHTING
========================================================= */

function Lighting({
  isDark,
}: {
  isDark: boolean;
}) {
  return (
    <>
      <ambientLight
        intensity={
          isDark
            ? 0.7
            : 1.2
        }
      />

      <directionalLight
        position={[
          4,
          5,
          4,
        ]}
        intensity={
          isDark
            ? 2.4
            : 3.2
        }
        color="#EAF3FF"
      />

      <pointLight
        position={[
          4,
          1,
          3,
        ]}
        intensity={
          isDark
            ? 8
            : 4
        }
        distance={10}
        color="#3B82F6"
      />

      <pointLight
        position={[
          -4,
          -1,
          2,
        ]}
        intensity={
          isDark
            ? 5
            : 2.5
        }
        distance={9}
        color="#22D3EE"
      />
    </>
  );
}

/* =========================================================
   DIRECTOR
========================================================= */

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

      <AboutTransitionGroup
        scene="hero"
        activeScene={
          activeScene
        }
        reducedMotion={
          reducedMotion
        }
      >
        <OriginWorld
          isDark={isDark}
        />
      </AboutTransitionGroup>

      <AboutTransitionGroup
        scene="story"
        activeScene={
          activeScene
        }
        reducedMotion={
          reducedMotion
        }
      >
        <StoryWorld
          isDark={isDark}
        />
      </AboutTransitionGroup>

      <AboutTransitionGroup
        scene="capabilities"
        activeScene={
          activeScene
        }
        reducedMotion={
          reducedMotion
        }
      >
        <CapabilitiesWorld
          isDark={isDark}
        />
      </AboutTransitionGroup>

      <AboutTransitionGroup
        scene="operating"
        activeScene={
          activeScene
        }
        reducedMotion={
          reducedMotion
        }
      >
        <OperatingWorld
          isDark={isDark}
        />
      </AboutTransitionGroup>

      <AboutTransitionGroup
        scene="evolution"
        activeScene={
          activeScene
        }
        reducedMotion={
          reducedMotion
        }
      >
        <EvolutionWorld
          isDark={isDark}
        />
      </AboutTransitionGroup>

      <AboutTransitionGroup
        scene="principles"
        activeScene={
          activeScene
        }
        reducedMotion={
          reducedMotion
        }
      >
        <PrinciplesWorld
          isDark={isDark}
        />
      </AboutTransitionGroup>

      <AboutTransitionGroup
        scene="ambition"
        activeScene={
          activeScene
        }
        reducedMotion={
          reducedMotion
        }
      >
        <AmbitionWorld
          isDark={isDark}
        />
      </AboutTransitionGroup>

      <AboutTransitionGroup
        scene="cta"
        activeScene={
          activeScene
        }
        reducedMotion={
          reducedMotion
        }
      >
        <CtaWorld
          isDark={isDark}
        />
      </AboutTransitionGroup>
    </>
  );
}

/* =========================================================
   CANVAS
========================================================= */

export function AboutScene() {
  const {
    activeScene,
  } = useAboutSceneExperience();

  const {
    theme,
  } = useTheme();

  const reducedMotion =
    useReducedMotion();

  const compact =
    useCompactScene();

  const isDark =
    theme === "dark";

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
        far: 100,
      }}
      dpr={
        compact
          ? 1
          : [
              1,
              1.4,
            ]
      }
      frameloop="always"
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