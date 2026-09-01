"use client";

import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  Float,
  Line,
  Sparkles,
} from "@react-three/drei";



import * as THREE from "three";

import { useTheme } from "@/src/components/theme-provider";

import {
  type SceneName,
  useSceneExperience,
} from "./scene-experience";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

/* ============================================================
   HELPERS
============================================================ */

function useGlobalPointer() {
  const pointer = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (
      typeof window ===
      "undefined"
    ) {
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
  }, []);

  return pointer;
}

const SCENE_ORDER: SceneName[] = [
  "hero",
  "approach",
  "exploration",
  "ventures",
  "research",
  "philosophy",
  "final",
];

function getSceneWeight(
  progress: number,
) {
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

function useReducedMotion() {
  const [
    reducedMotion,
    setReducedMotion,
  ] = useState(false);

  useEffect(() => {
    if (
      typeof window ===
      "undefined"
    ) {
      return;
    }

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
  const [
    compact,
    setCompact,
  ] = useState(false);

  useEffect(() => {
    if (
      typeof window ===
      "undefined"
    ) {
      return;
    }

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

/* ============================================================
   TRANSITION WRAPPER
============================================================ */

// function SceneGroup({
//   active,
//   children,
// }: {
//   active: boolean;
//   children:
//     React.ReactNode;
// }) {
//   const group =
//     useRef<THREE.Group>(
//       null,
//     );

//   useFrame(() => {
//     if (!group.current) {
//       return;
//     }

//     const targetScale =
//       active ? 1 : 0.01;

//     const currentScale =
//       group.current.scale.x;

//     const nextScale =
//       THREE.MathUtils.lerp(
//         currentScale,
//         targetScale,
//         active
//           ? 0.045
//           : 0.065,
//       );

//     group.current.scale.setScalar(
//       nextScale,
//     );

//     group.current.position.z =
//       THREE.MathUtils.lerp(
//         group.current
//           .position.z,
//         active
//           ? 0
//           : -4,
//         0.05,
//       );

//     group.current.visible =
//       active ||
//       nextScale >
//         0.025;
//   });

//   return (
//     <group
//       ref={group}
//       scale={
//         active
//           ? 1
//           : 0.01
//       }
//     >
//       {children}
//     </group>
//   );
// }

type SceneTransitionGroupProps = {
  scene: SceneName;
  activeScene: SceneName;
  reducedMotion: boolean;
  children: ReactNode;
};

function SceneTransitionGroup({
  scene,
  activeScene,
  reducedMotion,
  children,
}: SceneTransitionGroupProps) {
  const groupRef =
    useRef<THREE.Group>(null);

  const {
    sceneProgress,
  } = useSceneExperience();

  const weightRef =
    useRef(
      scene === activeScene
        ? 1
        : 0,
    );

  useFrame(
    (_, delta) => {
      const group =
        groupRef.current;

      if (!group) return;

      const progress =
        sceneProgress.current[
          scene
        ];

      /*
       * Reduced motion falls back
       * to the current scene.
       *
       * Normal mode follows actual
       * scroll progress.
       */
      const targetWeight =
        reducedMotion
          ? scene === activeScene
            ? 1
            : 0
          : getSceneWeight(
              progress,
            );

      weightRef.current =
        THREE.MathUtils.damp(
          weightRef.current,
          targetWeight,
          reducedMotion
            ? 14
            : 5,
          delta,
        );

      const weight =
        weightRef.current;

      /*
       * At the start of the section
       * the environment sits slightly
       * below and behind the camera.
       *
       * At the end it passes above
       * and backwards.
       */

      const scrollDirection =
        THREE.MathUtils.clamp(
          (progress - 0.5) *
            2,
          -1,
          1,
        );

      const distance =
        1 - weight;

      const targetZ =
        -distance * 3.2;

      const targetY =
        scrollDirection *
        distance *
        -0.75;

      const targetScale =
        THREE.MathUtils.lerp(
          0.78,
          1,
          weight,
        );

      const targetRotationX =
        scrollDirection *
        distance *
        0.045;

      const targetRotationZ =
        scrollDirection *
        distance *
        -0.035;

      const damping =
        reducedMotion
          ? 14
          : 5;

      group.position.z =
        THREE.MathUtils.damp(
          group.position.z,
          targetZ,
          damping,
          delta,
        );

      group.position.y =
        THREE.MathUtils.damp(
          group.position.y,
          targetY,
          damping,
          delta,
        );

      group.rotation.x =
        THREE.MathUtils.damp(
          group.rotation.x,
          targetRotationX,
          damping,
          delta,
        );

      group.rotation.z =
        THREE.MathUtils.damp(
          group.rotation.z,
          targetRotationZ,
          damping,
          delta,
        );

      const nextScale =
        THREE.MathUtils.damp(
          group.scale.x,
          targetScale,
          damping,
          delta,
        );

      group.scale.setScalar(
        nextScale,
      );

      /*
       * Don't keep distant worlds
       * rendering unnecessarily.
       */
      group.visible =
        weight > 0.012 ||
        scene === activeScene;
    },
  );

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

/* ============================================================
   HERO — RIBBON CORE
============================================================ */

function HeroWorld({
  isDark,
}: {
  isDark: boolean;
}) {
  const group =
    useRef<THREE.Group>(
      null,
    );

  const core =
    useRef<THREE.Mesh>(
      null,
    );

  const pointer =
    useGlobalPointer();

  const blueMaterial =
    useMemo(
      () =>
        new THREE.MeshPhysicalMaterial(
          {
            color: isDark
              ? "#3B82F6"
              : "#2563EB",

            metalness:
              0.55,

            roughness:
              0.16,

            clearcoat: 1,
          },
        ),
      [isDark],
    );

  const tealMaterial =
    useMemo(
      () =>
        new THREE.MeshPhysicalMaterial(
          {
            color: isDark
              ? "#22D3EE"
              : "#10B981",

            metalness:
              0.45,

            roughness:
              0.18,
          },
        ),
      [isDark],
    );

  const ribbonOne =
    useMemo(
      () =>
        new THREE.CatmullRomCurve3(
          [
            new THREE.Vector3(
              -2,
              -1.3,
              0,
            ),

            new THREE.Vector3(
              -1,
              0.5,
              0.7,
            ),

            new THREE.Vector3(
              0,
              1.4,
              0,
            ),

            new THREE.Vector3(
              1.1,
              0.4,
              -0.7,
            ),

            new THREE.Vector3(
              2,
              -1.2,
              0.3,
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
              1,
              -0.4,
            ),

            new THREE.Vector3(
              -0.8,
              0,
              0.65,
            ),

            new THREE.Vector3(
              0,
              -1.35,
              0,
            ),

            new THREE.Vector3(
              1,
              -0.2,
              -0.5,
            ),

            new THREE.Vector3(
              1.8,
              1.2,
              0.3,
            ),
          ],
        ),
      [],
    );

  useFrame(
    (state) => {
      if (
        !group.current
      ) {
        return;
      }

      const time =
        state.clock
          .elapsedTime;

      group.current.rotation.y =
        THREE.MathUtils.lerp(
          group.current
            .rotation.y,
          pointer.current.x *
            0.18,
          0.025,
        );

      group.current.rotation.x =
        THREE.MathUtils.lerp(
          group.current
            .rotation.x,
          pointer.current.y *
            -0.1,
          0.025,
        );

      group.current.position.y =
        Math.sin(
          time * 0.35,
        ) * 0.08;

      if (
        core.current
      ) {
        core.current.rotation.x +=
          0.002;

        core.current.rotation.y +=
          0.003;
      }
    },
  );

  return (
    <group
      ref={group}
      position={[
        2.1,
        0,
        -1.6,
      ]}
    >
      <mesh
        material={
          blueMaterial
        }
      >
        <tubeGeometry
          args={[
            ribbonOne,
            120,
            0.11,
            14,
            false,
          ]}
        />
      </mesh>

      <mesh
        material={
          tealMaterial
        }
      >
        <tubeGeometry
          args={[
            ribbonTwo,
            120,
            0.07,
            12,
            false,
          ]}
        />
      </mesh>

      <mesh ref={core}>
        <icosahedronGeometry
          args={[0.7, 4]}
        />

        <meshPhysicalMaterial
          color={
            isDark
              ? "#D8E8FF"
              : "#ffffff"
          }
          transmission={
            0.82
          }
          thickness={1}
          roughness={
            0.08
          }
          transparent
          opacity={0.6}
        />
      </mesh>

      <pointLight
        position={[
          0,
          0,
          1,
        ]}
        intensity={
          isDark ? 9 : 5
        }
        distance={7}
        color="#3B82F6"
      />
    </group>
  );
}

/* ============================================================
   APPROACH — PROCESS CONSTELLATION
============================================================ */

function ApproachWorld({
  isDark,
}: {
  isDark: boolean;
}) {
  const groupRef =
    useRef<THREE.Group>(null);

  const coreRef =
    useRef<THREE.Mesh>(null);

  const nodeRefs =
    useRef<
      Array<THREE.Mesh | null>
    >([]);

  const lineRef =
    useRef<THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>>(null);

  const pointer =
    useGlobalPointer();

  const {
    sceneProgress,
  } = useSceneExperience();

  const nodes = useMemo(
    () => [
      {
        position: [
          -2.45,
          0.35,
          0.1,
        ] as [
          number,
          number,
          number,
        ],
        color: "#3B82F6",
        scale: 0.25,
      },
      {
        position: [
          -1.55,
          1.2,
          -0.35,
        ] as [
          number,
          number,
          number,
        ],
        color: "#22D3EE",
        scale: 0.31,
      },
      {
        position: [
          -0.55,
          0.2,
          0.25,
        ] as [
          number,
          number,
          number,
        ],
        color: "#A855F7",
        scale: 0.27,
      },
      {
        position: [
          0.55,
          1.1,
          -0.3,
        ] as [
          number,
          number,
          number,
        ],
        color: "#3B82F6",
        scale: 0.32,
      },
      {
        position: [
          1.55,
          0.1,
          0.2,
        ] as [
          number,
          number,
          number,
        ],
        color: "#22D3EE",
        scale: 0.28,
      },
      {
        position: [
          2.5,
          0.85,
          -0.45,
        ] as [
          number,
          number,
          number,
        ],
        color: "#A855F7",
        scale: 0.34,
      },
    ],
    [],
  );

  const linePositions =
    useMemo(
      () =>
        new Float32Array(
          nodes.length * 3,
        ),
      [nodes.length],
    );

  useFrame((state, delta) => {
    const group =
      groupRef.current;

    if (!group) return;

    const progress =
      sceneProgress.current
        .approach;

    const time =
      state.clock.elapsedTime;

    const entry =
      THREE.MathUtils.smoothstep(
        progress,
        0.02,
        0.26,
      );

    const exit =
      1 -
      THREE.MathUtils.smoothstep(
        progress,
        0.78,
        0.98,
      );

    const visibility =
      Math.min(
        entry,
        exit,
      );

    /*
     * Overall scene movement.
     */

    group.position.y =
      THREE.MathUtils.damp(
        group.position.y,
        THREE.MathUtils.lerp(
          -0.45,
          0.08,
          entry,
        ),
        4,
        delta,
      );

    group.rotation.y =
      THREE.MathUtils.damp(
        group.rotation.y,
        pointer.current.x *
          0.07 +
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
     * Central intelligence / process core.
     */

    if (coreRef.current) {
      coreRef.current.rotation.x +=
        delta * 0.18;

      coreRef.current.rotation.y +=
        delta * 0.28;

      const pulse =
        1 +
        Math.sin(
          time * 1.1,
        ) *
          0.04;

      const coreEntry =
        THREE.MathUtils.smoothstep(
          progress,
          0.08,
          0.3,
        );

      coreRef.current.scale.setScalar(
        THREE.MathUtils.lerp(
          0.15,
          pulse,
          coreEntry,
        ) *
          THREE.MathUtils.lerp(
            0.8,
            1,
            visibility,
          ),
      );
    }

    /*
     * Each process stage assembles
     * sequentially.
     */

    nodeRefs.current.forEach(
      (node, index) => {
        if (!node) return;

        const target =
          nodes[index];

        const delay =
          index * 0.055;

        const nodeEntry =
          THREE.MathUtils.smoothstep(
            progress,
            0.08 + delay,
            0.3 + delay,
          );

        /*
         * Begin near the centre,
         * then expand into the
         * process path.
         */

        const startX =
          target.position[0] *
          0.08;

        const startY =
          -0.15 +
          index * 0.025;

        const startZ = -1.25;

        node.position.x =
          THREE.MathUtils.damp(
            node.position.x,
            THREE.MathUtils.lerp(
              startX,
              target.position[0],
              nodeEntry,
            ),
            6,
            delta,
          );

        node.position.y =
          THREE.MathUtils.damp(
            node.position.y,
            THREE.MathUtils.lerp(
              startY,
              target.position[1],
              nodeEntry,
            ),
            6,
            delta,
          );

        node.position.z =
          THREE.MathUtils.damp(
            node.position.z,
            THREE.MathUtils.lerp(
              startZ,
              target.position[2],
              nodeEntry,
            ),
            6,
            delta,
          );

        /*
         * Individual floating motion.
         */

        node.position.y +=
          Math.sin(
            time *
              (0.45 +
                index * 0.045) +
              index,
          ) *
          0.0018;

        node.rotation.x +=
          delta *
          (0.1 +
            index * 0.01);

        node.rotation.y +=
          delta *
          (0.16 +
            index * 0.012);

        const scale =
          target.scale *
          THREE.MathUtils.lerp(
            0.1,
            1,
            nodeEntry,
          );

        node.scale.setScalar(
          scale,
        );
      },
    );

    /*
     * IMPORTANT:
     *
     * Update the actual connection
     * line from the current node
     * positions.
     *
     * This fixes the mismatch in
     * the earlier implementation.
     */

    if (lineRef.current) {
      const geometry =
        lineRef.current
          .geometry;

      const attribute =
        geometry.getAttribute(
          "position",
        ) as THREE.BufferAttribute;

      nodeRefs.current.forEach(
        (node, index) => {
          if (!node) return;

          attribute.setXYZ(
            index,
            node.position.x,
            node.position.y,
            node.position.z,
          );
        },
      );

      attribute.needsUpdate =
        true;

      const material =
        lineRef.current
          .material as THREE.LineBasicMaterial;

      material.opacity =
        THREE.MathUtils.lerp(
          0,
          isDark
            ? 0.42
            : 0.24,
          entry,
        );
    }
  });

  return (
    <group
      ref={groupRef}
      position={[
        0.8,
        0,
        -2,
      ]}
    >
      {/* Dynamic process path */}

      <primitive
        object={new THREE.Line(
          new THREE.BufferGeometry(),
          new THREE.LineBasicMaterial(),
        )}
        ref={lineRef}
      >
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              linePositions,
              3,
            ]}
          />
        </bufferGeometry>

        <lineBasicMaterial
          color={
            isDark
              ? "#60A5FA"
              : "#2563EB"
          }
          transparent
          opacity={0}
        />
      </primitive>

      {/* Process nodes */}

      {nodes.map(
        (node, index) => (
          <mesh
            key={`approach-${index}`}
            ref={(element) => {
              nodeRefs.current[
                index
              ] = element;
            }}
          >
            {index === 0 ||
            index === 3 ? (
              <icosahedronGeometry
                args={[1, 1]}
              />
            ) : index === 1 ||
              index === 4 ? (
              <octahedronGeometry
                args={[1, 0]}
              />
            ) : (
              <dodecahedronGeometry
                args={[1, 0]}
              />
            )}

            <meshPhysicalMaterial
              color={
                node.color
              }
              metalness={0.42}
              roughness={0.18}
              clearcoat={1}
              clearcoatRoughness={
                0.08
              }
              emissive={
                node.color
              }
              emissiveIntensity={
                isDark
                  ? 0.12
                  : 0.025
              }
            />
          </mesh>
        ),
      )}

      {/* Central core */}

      <Float
        speed={0.6}
        floatIntensity={0.08}
      >
        <mesh
          ref={coreRef}
          position={[
            0,
            0.55,
            -0.1,
          ]}
        >
          <icosahedronGeometry
            args={[0.48, 3]}
          />

          <meshPhysicalMaterial
            color={
              isDark
                ? "#E6F1FF"
                : "#0A1D2F"
            }
            metalness={
              isDark
                ? 0.12
                : 0.5
            }
            roughness={0.12}
            transmission={
              isDark
                ? 0.45
                : 0.04
            }
            thickness={0.8}
            clearcoat={1}
            transparent
            opacity={0.88}
          />
        </mesh>
      </Float>

      {/* Core energy */}

      <mesh
        position={[
          0,
          0.55,
          -0.1,
        ]}
      >
        <sphereGeometry
          args={[
            0.13,
            24,
            24,
          ]}
        />

        <meshBasicMaterial
          color="#3B82F6"
        />
      </mesh>

      <pointLight
        position={[
          0,
          0.6,
          1,
        ]}
        intensity={
          isDark
            ? 8
            : 4
        }
        distance={7}
        color="#3B82F6"
      />

      <Sparkles
        count={24}
        scale={[7, 4, 4]}
        size={
          isDark
            ? 0.8
            : 0.5
        }
        speed={0.055}
        opacity={
          isDark
            ? 0.18
            : 0.07
        }
        color="#93C5FD"
      />
    </group>
  );
}

/* ============================================================
   EXPLORATION — PARTICLE TERRAIN
============================================================ */

function ExplorationWorld({
  isDark,
}: {
  isDark: boolean;
}) {
  const groupRef =
    useRef<THREE.Group>(null);

  const terrainRef =
    useRef<THREE.Points>(null);

  const objectOne =
    useRef<THREE.Mesh>(null);

  const objectTwo =
    useRef<THREE.Mesh>(null);

  const objectThree =
    useRef<THREE.Mesh>(null);

  const pointer =
    useGlobalPointer();

  const {
    sceneProgress,
  } = useSceneExperience();

  /*
   * Desktop-quality terrain.
   *
   * We'll reduce this further in
   * the mobile optimisation pass.
   */

  const terrain =
    useMemo(() => {
      const rows = 38;
      const columns = 64;

      const count =
        rows * columns;

      const positions =
        new Float32Array(
          count * 3,
        );

      const base =
        new Float32Array(
          count * 3,
        );

      let index = 0;

      for (
        let z = 0;
        z < rows;
        z++
      ) {
        for (
          let x = 0;
          x < columns;
          x++
        ) {
          const px =
            (x -
              columns / 2) *
            0.135;

          const pz =
            (z -
              rows / 2) *
            0.15;

          positions[
            index * 3
          ] = px;

          positions[
            index * 3 + 1
          ] = 0;

          positions[
            index * 3 + 2
          ] = pz;

          base[
            index * 3
          ] = px;

          base[
            index * 3 + 1
          ] = 0;

          base[
            index * 3 + 2
          ] = pz;

          index++;
        }
      }

      return {
        positions,
        base,
        count,
      };
    }, []);

  useFrame(
    (state, delta) => {
      const group =
        groupRef.current;

      const terrainMesh =
        terrainRef.current;

      if (
        !group ||
        !terrainMesh
      ) {
        return;
      }

      const progress =
        sceneProgress.current
          .exploration;

      const time =
        state.clock.elapsedTime;

      const entry =
        THREE.MathUtils.smoothstep(
          progress,
          0.02,
          0.28,
        );

      const exit =
        1 -
        THREE.MathUtils.smoothstep(
          progress,
          0.78,
          0.98,
        );

      const visibility =
        Math.min(
          entry,
          exit,
        );

      /*
       * Terrain rises from beneath
       * the page.
       */

      group.position.y =
        THREE.MathUtils.damp(
          group.position.y,
          THREE.MathUtils.lerp(
            -1.45,
            -0.62,
            entry,
          ),
          4,
          delta,
        );

      group.position.z =
        THREE.MathUtils.damp(
          group.position.z,
          THREE.MathUtils.lerp(
            -4,
            -2,
            entry,
          ),
          4,
          delta,
        );

      group.rotation.y =
        THREE.MathUtils.damp(
          group.rotation.y,
          pointer.current.x *
            0.065 +
            THREE.MathUtils.lerp(
              -0.08,
              0.08,
              progress,
            ),
          3,
          delta,
        );

      group.rotation.x =
        THREE.MathUtils.damp(
          group.rotation.x,
          -0.3 +
            pointer.current.y *
              -0.025,
          3,
          delta,
        );

      /*
       * Activate the field progressively.
       */

      const position =
        terrainMesh.geometry.getAttribute(
          "position",
        ) as THREE.BufferAttribute;

      const amplitude =
        THREE.MathUtils.lerp(
          0.04,
          1,
          entry,
        );

      for (
        let index = 0;
        index <
        terrain.count;
        index++
      ) {
        const px =
          terrain.base[
            index * 3
          ];

        const pz =
          terrain.base[
            index * 3 + 2
          ];

        /*
         * Multiple frequencies prevent
         * it from looking like a single
         * mathematical sine sheet.
         */

        const waveOne =
          Math.sin(
            px * 1.1 +
              time * 0.55,
          ) *
          0.2;

        const waveTwo =
          Math.cos(
            pz * 1.35 -
              time * 0.42,
          ) *
          0.17;

        const waveThree =
          Math.sin(
            px * 0.65 +
              pz * 0.9 +
              time * 0.3,
          ) *
          0.12;

        /*
         * A moving discovery pulse.
         */

        const distance =
          Math.sqrt(
            px * px +
              pz * pz,
          );

        const pulse =
          Math.sin(
            distance * 2.1 -
              time * 1.05,
          ) *
          0.075;

        const py =
          (
            waveOne +
            waveTwo +
            waveThree +
            pulse
          ) *
          amplitude;

        position.setY(
          index,
          py,
        );
      }

      position.needsUpdate =
        true;

      /*
       * Frontier forms.
       */

      if (objectOne.current) {
        objectOne.current.rotation.x +=
          delta * 0.13;

        objectOne.current.rotation.y +=
          delta * 0.19;

        objectOne.current.position.y =
          1.1 +
          Math.sin(
            time * 0.55,
          ) *
            0.1 +
          progress * 0.25;
      }

      if (objectTwo.current) {
        objectTwo.current.rotation.x -=
          delta * 0.1;

        objectTwo.current.rotation.y +=
          delta * 0.14;

        objectTwo.current.position.y =
          0.65 +
          Math.sin(
            time * 0.42 +
              2,
          ) *
            0.12;
      }

      if (
        objectThree.current
      ) {
        objectThree.current.rotation.x +=
          delta * 0.08;

        objectThree.current.rotation.z -=
          delta * 0.11;

        objectThree.current.position.y =
          1.45 +
          Math.sin(
            time * 0.36 +
              4,
          ) *
            0.09;
      }

      /*
       * Forms materialise as the
       * field activates.
       */

      [
        objectOne.current,
        objectTwo.current,
        objectThree.current,
      ].forEach(
        (object, index) => {
          if (!object) return;

          const objectEntry =
            THREE.MathUtils.smoothstep(
              progress,
              0.12 +
                index * 0.07,
              0.4 +
                index * 0.06,
            );

          const scale =
            THREE.MathUtils.lerp(
              0.05,
              1,
              objectEntry,
            ) *
            THREE.MathUtils.lerp(
              0.85,
              1,
              visibility,
            );

          object.scale.setScalar(
            scale,
          );
        },
      );
    },
  );

  return (
    <group
      ref={groupRef}
      position={[
        0.8,
        -0.7,
        -2,
      ]}
      rotation={[
        -0.3,
        0,
        0,
      ]}
    >
      {/* ==========================================
          POSSIBILITY FIELD
      ========================================== */}

      <points
        ref={terrainRef}
      >
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              terrain.positions,
              3,
            ]}
          />
        </bufferGeometry>

        <pointsMaterial
          color={
            isDark
              ? "#22D3EE"
              : "#10B981"
          }
          size={
            isDark
              ? 0.032
              : 0.027
          }
          transparent
          opacity={
            isDark
              ? 0.7
              : 0.42
          }
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {/* ==========================================
          FRONTIER OBJECT 1
      ========================================== */}

      <mesh
        ref={objectOne}
        position={[
          -1.65,
          1.1,
          0.15,
        ]}
      >
        <icosahedronGeometry
          args={[
            0.43,
            2,
          ]}
        />

        <meshPhysicalMaterial
          wireframe
          color="#22D3EE"
          emissive="#22D3EE"
          emissiveIntensity={
            isDark
              ? 0.22
              : 0.05
          }
          transparent
          opacity={
            isDark
              ? 0.8
              : 0.58
          }
        />
      </mesh>

      {/* ==========================================
          FRONTIER OBJECT 2
      ========================================== */}

      <mesh
        ref={objectTwo}
        position={[
          1.75,
          0.65,
          -0.7,
        ]}
      >
        <octahedronGeometry
          args={[
            0.34,
            1,
          ]}
        />

        <meshPhysicalMaterial
          wireframe
          color="#3B82F6"
          emissive="#3B82F6"
          emissiveIntensity={
            isDark
              ? 0.2
              : 0.04
          }
          transparent
          opacity={
            isDark
              ? 0.78
              : 0.55
          }
        />
      </mesh>

      {/* ==========================================
          FRONTIER OBJECT 3
      ========================================== */}

      <mesh
        ref={objectThree}
        position={[
          0.35,
          1.45,
          -1.45,
        ]}
      >
        <dodecahedronGeometry
          args={[
            0.28,
            0,
          ]}
        />

        <meshPhysicalMaterial
          wireframe
          color="#A855F7"
          emissive="#A855F7"
          emissiveIntensity={
            isDark
              ? 0.2
              : 0.04
          }
          transparent
          opacity={
            isDark
              ? 0.72
              : 0.5
          }
        />
      </mesh>

      {/* ==========================================
          FIELD LIGHTING
      ========================================== */}

      <pointLight
        position={[
          -1.2,
          1.5,
          1,
        ]}
        intensity={
          isDark
            ? 6
            : 3
        }
        distance={7}
        color="#22D3EE"
      />

      <pointLight
        position={[
          1.8,
          0.8,
          0,
        ]}
        intensity={
          isDark
            ? 4
            : 2
        }
        distance={6}
        color="#3B82F6"
      />

      <Sparkles
        count={28}
        scale={[
          8,
          5,
          6,
        ]}
        size={
          isDark
            ? 0.7
            : 0.45
        }
        speed={0.045}
        opacity={
          isDark
            ? 0.16
            : 0.06
        }
        color="#67E8F9"
      />
    </group>
  );
}

/* ============================================================
   VENTURES — NETWORK
============================================================ */

function VenturesWorld({
  isDark,
}: {
  isDark: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  const nodeRefs =
    useRef<Array<THREE.Mesh | null>>([]);

  const {
    sceneProgress,
  } = useSceneExperience();

  const nodes = useMemo(
    () => [
      {
        position: [-2.2, 0.95, -0.4],
        color: "#2563EB",
        scale: 0.38,
      },
      {
        position: [-1.4, -1.25, 0.2],
        color: "#10B981",
        scale: 0.3,
      },
      {
        position: [1.6, 1.15, -0.5],
        color: "#7C3AED",
        scale: 0.36,
      },
      {
        position: [2.35, -0.75, 0.15],
        color: "#10B981",
        scale: 0.28,
      },
      {
        position: [0.55, 1.95, -1],
        color: "#2563EB",
        scale: 0.26,
      },
      {
        position: [0.15, -1.9, -0.65],
        color: "#7C3AED",
        scale: 0.24,
      },
    ],
    [],
  );

  useFrame((state) => {
    const group =
      groupRef.current;

    if (!group) return;

    const progress =
      sceneProgress.current
        .ventures;

    const time =
      state.clock.elapsedTime;

    const entry =
      THREE.MathUtils.smoothstep(
        progress,
        0.02,
        0.26,
      );

    const exit =
      1 -
      THREE.MathUtils.smoothstep(
        progress,
        0.78,
        1,
      );

    const visibility =
      Math.min(
        entry,
        exit,
      );

    group.scale.setScalar(
      THREE.MathUtils.lerp(
        0.55,
        1,
        visibility,
      ),
    );

    group.position.y =
      THREE.MathUtils.lerp(
        -0.55,
        0.1,
        entry,
      );

    group.rotation.y =
      time * 0.05 +
      progress * 0.35;

    if (coreRef.current) {
      coreRef.current.rotation.x +=
        0.0015;

      coreRef.current.rotation.y +=
        0.0025;

      const pulse =
        1 +
        Math.sin(
          time * 1.1,
        ) *
          0.035;

      coreRef.current.scale.setScalar(
        pulse,
      );
    }

    nodeRefs.current.forEach(
      (node, index) => {
        if (!node) return;

        const target =
          nodes[index];

        const delay =
          index * 0.035;

        const nodeEntry =
          THREE.MathUtils.smoothstep(
            progress,
            0.08 + delay,
            0.35 + delay,
          );

        node.position.x =
          THREE.MathUtils.lerp(
            0,
            target.position[0],
            nodeEntry,
          );

        node.position.y =
          THREE.MathUtils.lerp(
            0,
            target.position[1],
            nodeEntry,
          );

        node.position.z =
          THREE.MathUtils.lerp(
            -1,
            target.position[2],
            nodeEntry,
          );

        node.position.y +=
          Math.sin(
            time *
              (0.55 +
                index * 0.07) +
              index,
          ) *
          0.08;

        node.rotation.x +=
          0.001;

        node.rotation.y +=
          0.0015;
      },
    );
  });

  return (
    <group
      ref={groupRef}
      position={[
        0.8,
        0,
        -2.2,
      ]}
    >
      {/* Core connections */}

      {nodes.map(
        (node, index) => (
          <Line
            key={`connection-${index}`}
            points={[
              [0, 0, 0],
              node.position as [
                number,
                number,
                number,
              ],
            ]}
            color={
              index % 3 === 0
                ? "#3B82F6"
                : index % 3 === 1
                  ? "#22D3EE"
                  : "#A855F7"
            }
            lineWidth={0.65}
            transparent
            opacity={
              isDark
                ? 0.34
                : 0.2
            }
          />
        ),
      )}

      {/* Central venture core */}

      <Float
        speed={0.8}
        floatIntensity={0.18}
      >
        <mesh ref={coreRef}>
          <icosahedronGeometry
            args={[
              0.72,
              3,
            ]}
          />

          <meshPhysicalMaterial
            color={
              isDark
                ? "#DCEBFF"
                : "#0A1D2F"
            }
            metalness={
              isDark
                ? 0.3
                : 0.7
            }
            roughness={0.16}
            clearcoat={1}
            transmission={
              isDark
                ? 0.35
                : 0.05
            }
            thickness={0.8}
            transparent
            opacity={
              isDark
                ? 0.8
                : 0.95
            }
          />
        </mesh>
      </Float>

      {/* Inner energy */}

      <mesh>
        <sphereGeometry
          args={[
            0.22,
            32,
            32,
          ]}
        />

        <meshBasicMaterial
          color={
            isDark
              ? "#3B82F6"
              : "#2563EB"
          }
        />
      </mesh>

      {/* Venture nodes */}

      {nodes.map(
        (
          node,
          index,
        ) => (
          <Float
            key={`node-${index}`}
            speed={
              0.7 +
              index * 0.05
            }
            floatIntensity={
              0.18
            }
          >
            <mesh
              ref={(element) => {
                nodeRefs.current[
                  index
                ] = element;
              }}
              scale={
                node.scale
              }
            >
              {index % 3 === 0 ? (
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

              <meshPhysicalMaterial
                color={
                  node.color
                }
                metalness={
                  0.48
                }
                roughness={
                  0.18
                }
                clearcoat={1}
                emissive={
                  node.color
                }
                emissiveIntensity={
                  isDark
                    ? 0.16
                    : 0.03
                }
              />
            </mesh>
          </Float>
        ),
      )}

      <pointLight
        position={[
          0,
          0,
          1.5,
        ]}
        intensity={
          isDark ? 10 : 5
        }
        distance={8}
        color="#3B82F6"
      />

      <Sparkles
        count={36}
        scale={[
          7,
          5,
          6,
        ]}
        size={
          isDark
            ? 1
            : 0.65
        }
        speed={0.08}
        opacity={
          isDark
            ? 0.22
            : 0.1
        }
        color="#93C5FD"
      />
    </group>
  );
}

/* ============================================================
   RESEARCH — DATA FIELD
============================================================ */

function ResearchWorld({
  isDark,
}: {
  isDark: boolean;
}) {
  const groupRef =
    useRef<THREE.Group>(null);

  const networkRef =
    useRef<THREE.Group>(null);

  const pulseRefs =
    useRef<Array<THREE.Mesh | null>>([]);

  const {
    sceneProgress,
  } = useSceneExperience();

  const columns = useMemo(
    () =>
      Array.from(
        {
          length: 56,
        },
        (_, index) => {
          const row =
            Math.floor(
              index / 8,
            );

          const column =
            index % 8;

          const x =
            (column - 3.5) *
            0.5;

          const z =
            (row - 3) *
            0.52;

          const seed =
            Math.abs(
              Math.sin(
                index * 1.73,
              ),
            );

          return {
            x,
            z,
            height:
              0.2 +
              seed * 1.35,
            phase:
              index * 0.42,
          };
        },
      ),
    [],
  );

  const networkNodes =
    useMemo(
      () => [
        [-2.2, 1.35, -0.6],
        [-1.35, 0.5, 0],
        [-0.55, 1.5, -0.5],
        [0.25, 0.65, 0.2],
        [1.15, 1.6, -0.7],
        [2.05, 0.75, -0.1],
      ],
      [],
    );

  useFrame((state) => {
    const group =
      groupRef.current;

    if (!group) return;

    const progress =
      sceneProgress.current
        .research;

    const time =
      state.clock.elapsedTime;

    const entry =
      THREE.MathUtils.smoothstep(
        progress,
        0.02,
        0.25,
      );

    const exit =
      1 -
      THREE.MathUtils.smoothstep(
        progress,
        0.78,
        1,
      );

    const visibility =
      Math.min(
        entry,
        exit,
      );

    group.scale.setScalar(
      THREE.MathUtils.lerp(
        0.7,
        1,
        visibility,
      ),
    );

    group.position.y =
      THREE.MathUtils.lerp(
        -1.25,
        -0.7,
        entry,
      );

    group.position.z =
      THREE.MathUtils.lerp(
        -4,
        -2.3,
        entry,
      );

    group.rotation.y =
      -0.18 +
      progress * 0.32;

    if (
      networkRef.current
    ) {
      networkRef.current.rotation.y =
        Math.sin(
          time * 0.12,
        ) * 0.08;

      networkRef.current.position.y =
        0.1 +
        Math.sin(
          time * 0.25,
        ) * 0.08;
    }

    pulseRefs.current.forEach(
      (pulse, index) => {
        if (!pulse) return;

        const base =
          columns[index];

        const signal =
          0.5 +
          0.5 *
            Math.sin(
              time * 1.35 +
                base.phase,
            );

        const y =
          base.height *
            0.5 +
          signal *
            0.3;

        pulse.position.y =
          y;

        const scale =
          0.65 +
          signal * 0.7;

        pulse.scale.setScalar(
          scale,
        );
      },
    );
  });

  return (
    <group
      ref={groupRef}
      position={[
        0.8,
        -0.7,
        -2.3,
      ]}
      rotation={[
        -0.18,
        -0.12,
        0,
      ]}
    >
      {/* =====================================================
          ANALYTICAL DATA FIELD
      ===================================================== */}

      <group>
        {columns.map(
          (
            column,
            index,
          ) => (
            <group
              key={
                `signal-${index}`
              }
              position={[
                column.x,
                0,
                column.z,
              ]}
            >
              <mesh
                position={[
                  0,
                  column.height /
                    2,
                  0,
                ]}
              >
                <boxGeometry
                  args={[
                    0.055,
                    column.height,
                    0.055,
                  ]}
                />

                <meshBasicMaterial
                  color={
                    index %
                      3 ===
                    0
                      ? "#A855F7"
                      : index %
                            3 ===
                          1
                        ? "#3B82F6"
                        : "#22D3EE"
                  }
                  transparent
                  opacity={
                    isDark
                      ? 0.6
                      : 0.34
                  }
                />
              </mesh>

              {/* moving signal */}

              <mesh
                ref={(
                  element,
                ) => {
                  pulseRefs.current[
                    index
                  ] =
                    element;
                }}
                position={[
                  0,
                  column.height,
                  0,
                ]}
              >
                <sphereGeometry
                  args={[
                    0.04,
                    14,
                    14,
                  ]}
                />

                <meshBasicMaterial
                  color={
                    index %
                      3 ===
                    0
                      ? "#A855F7"
                      : index %
                            3 ===
                          1
                        ? "#3B82F6"
                        : "#22D3EE"
                  }
                />
              </mesh>
            </group>
          ),
        )}
      </group>

      {/* =====================================================
          RESEARCH NETWORK
      ===================================================== */}

      <group
        ref={networkRef}
        position={[
          0.3,
          1.2,
          -0.8,
        ]}
      >
        <Line
          points={
            networkNodes as [
              number,
              number,
              number,
            ][]
          }
          color={
            isDark
              ? "#A855F7"
              : "#7C3AED"
          }
          lineWidth={0.65}
          transparent
          opacity={
            isDark
              ? 0.38
              : 0.2
          }
        />

        {networkNodes.map(
          (
            position,
            index,
          ) => (
            <Float
              key={
                `research-node-${index}`
              }
              speed={
                0.6 +
                index * 0.04
              }
              floatIntensity={
                0.14
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
                {index %
                  2 ===
                0 ? (
                  <icosahedronGeometry
                    args={[
                      0.15,
                      1,
                    ]}
                  />
                ) : (
                  <octahedronGeometry
                    args={[
                      0.14,
                      0,
                    ]}
                  />
                )}

                <meshPhysicalMaterial
                  color={
                    index %
                      3 ===
                    0
                      ? "#A855F7"
                      : index %
                            3 ===
                          1
                        ? "#3B82F6"
                        : "#22D3EE"
                  }
                  metalness={
                    0.4
                  }
                  roughness={
                    0.22
                  }
                  clearcoat={1}
                  emissive={
                    index %
                      3 ===
                    0
                      ? "#A855F7"
                      : index %
                            3 ===
                          1
                        ? "#3B82F6"
                        : "#22D3EE"
                  }
                  emissiveIntensity={
                    isDark
                      ? 0.12
                      : 0.02
                  }
                />
              </mesh>
            </Float>
          ),
        )}
      </group>

      {/* =====================================================
          PRIMARY ANALYSIS CORE
      ===================================================== */}

      <Float
        speed={0.65}
        floatIntensity={
          0.14
        }
      >
        <mesh
          position={[
            1.9,
            1.35,
            -0.45,
          ]}
        >
          <icosahedronGeometry
            args={[
              0.42,
              2,
            ]}
          />

          <meshPhysicalMaterial
            color={
              isDark
                ? "#DCCBFF"
                : "#7C3AED"
            }
            metalness={0.35}
            roughness={0.15}
            clearcoat={1}
            transmission={
              isDark
                ? 0.25
                : 0.05
            }
            transparent
            opacity={0.82}
          />
        </mesh>
      </Float>

      <pointLight
        position={[
          1.8,
          1.3,
          0.2,
        ]}
        intensity={
          isDark
            ? 9
            : 4
        }
        distance={7}
        color="#A855F7"
      />

      <Sparkles
        count={42}
        scale={[
          7,
          5,
          6,
        ]}
        size={
          isDark
            ? 0.9
            : 0.6
        }
        speed={0.07}
        opacity={
          isDark
            ? 0.22
            : 0.1
        }
        color={
          isDark
            ? "#C4B5FD"
            : "#7C3AED"
        }
      />
    </group>
  );
}

/* ============================================================
   PHILOSOPHY — LIGHT PORTAL
============================================================ */

function PhilosophyWorld({
  isDark,
}: {
  isDark: boolean;
}) {
  const groupRef =
    useRef<THREE.Group>(null);

  const coreRef =
    useRef<THREE.Mesh>(null);

  const leftArcRef =
    useRef<THREE.Mesh>(null);

  const rightArcRef =
    useRef<THREE.Mesh>(null);

  const innerArcRef =
    useRef<THREE.Mesh>(null);

  const particleRefs =
    useRef<
      Array<THREE.Mesh | null>
    >([]);

  const pointer =
    useGlobalPointer();

  const {
    sceneProgress,
  } = useSceneExperience();

  /*
   * Two large sculptural curves form
   * an aperture rather than an orbit.
   */

  const leftCurve =
    useMemo(
      () =>
        new THREE.CatmullRomCurve3(
          [
            new THREE.Vector3(
              -0.35,
              -2,
              0,
            ),
            new THREE.Vector3(
              -1.05,
              -1.15,
              0.12,
            ),
            new THREE.Vector3(
              -1.25,
              0,
              0.22,
            ),
            new THREE.Vector3(
              -1.02,
              1.15,
              0.1,
            ),
            new THREE.Vector3(
              -0.3,
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
              0.35,
              -2,
              0,
            ),
            new THREE.Vector3(
              1.05,
              -1.15,
              -0.12,
            ),
            new THREE.Vector3(
              1.25,
              0,
              -0.22,
            ),
            new THREE.Vector3(
              1.02,
              1.15,
              -0.1,
            ),
            new THREE.Vector3(
              0.3,
              2,
              0,
            ),
          ],
        ),
      [],
    );

  /*
   * The smaller third curve deliberately
   * breaks the symmetry.
   */

  const innerCurve =
    useMemo(
      () =>
        new THREE.CatmullRomCurve3(
          [
            new THREE.Vector3(
              -0.05,
              -1.35,
              -0.15,
            ),
            new THREE.Vector3(
              -0.48,
              -0.7,
              0.25,
            ),
            new THREE.Vector3(
              -0.58,
              0.15,
              0.35,
            ),
            new THREE.Vector3(
              -0.35,
              0.9,
              0.12,
            ),
            new THREE.Vector3(
              0.05,
              1.4,
              -0.1,
            ),
          ],
        ),
      [],
    );

  const particles =
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
              2.2 +
              (index % 4) *
                0.24;

            return {
              x:
                Math.cos(angle) *
                radius,

              y:
                Math.sin(angle) *
                radius *
                0.72,

              z:
                Math.sin(
                  angle * 1.7,
                ) * 0.65,

              phase:
                index * 0.41,
            };
          },
        ),
      [],
    );

  useFrame((state, delta) => {
    const group =
      groupRef.current;

    if (!group) return;

    const progress =
      sceneProgress.current
        .philosophy;

    const time =
      state.clock.elapsedTime;

    const entry =
      THREE.MathUtils.smoothstep(
        progress,
        0.03,
        0.28,
      );

    const exit =
      1 -
      THREE.MathUtils.smoothstep(
        progress,
        0.78,
        0.98,
      );

    const visibility =
      Math.min(
        entry,
        exit,
      );

    /*
     * The whole aperture emerges
     * vertically rather than spinning
     * into existence.
     */

    group.position.y =
      THREE.MathUtils.damp(
        group.position.y,
        THREE.MathUtils.lerp(
          0.55,
          0,
          entry,
        ),
        4,
        delta,
      );

    group.rotation.y =
      THREE.MathUtils.damp(
        group.rotation.y,
        pointer.current.x *
          0.055 +
          Math.sin(
            time * 0.08,
          ) *
            0.025,
        3,
        delta,
      );

    group.rotation.x =
      THREE.MathUtils.damp(
        group.rotation.x,
        pointer.current.y *
          -0.025,
        3,
        delta,
      );

    /*
     * Aperture opens as the visitor
     * moves through the section.
     */

    const opening =
      THREE.MathUtils.smoothstep(
        progress,
        0.08,
        0.52,
      );

    if (leftArcRef.current) {
      leftArcRef.current.position.x =
        THREE.MathUtils.damp(
          leftArcRef.current
            .position.x,
          THREE.MathUtils.lerp(
            0.42,
            0,
            opening,
          ),
          5,
          delta,
        );
    }

    if (rightArcRef.current) {
      rightArcRef.current.position.x =
        THREE.MathUtils.damp(
          rightArcRef.current
            .position.x,
          THREE.MathUtils.lerp(
            -0.42,
            0,
            opening,
          ),
          5,
          delta,
        );
    }

    if (innerArcRef.current) {
      innerArcRef.current.position.z =
        THREE.MathUtils.damp(
          innerArcRef.current
            .position.z,
          THREE.MathUtils.lerp(
            -1,
            0.15,
            opening,
          ),
          5,
          delta,
        );

      innerArcRef.current.rotation.y =
        Math.sin(
          time * 0.15,
        ) * 0.05;
    }

    /*
     * The central idea becomes clearer
     * as the principles converge.
     */

    if (coreRef.current) {
      coreRef.current.rotation.x +=
        delta * 0.09;

      coreRef.current.rotation.y +=
        delta * 0.14;

      const pulse =
        1 +
        Math.sin(
          time * 0.85,
        ) *
          0.035;

      const coreEntry =
        THREE.MathUtils.smoothstep(
          progress,
          0.2,
          0.58,
        );

      coreRef.current.scale.setScalar(
        THREE.MathUtils.lerp(
          0.25,
          pulse,
          coreEntry,
        ) *
          THREE.MathUtils.lerp(
            0.9,
            1,
            visibility,
          ),
      );
    }

    /*
     * Scattered principles gradually
     * converge around the aperture.
     */

    particleRefs.current.forEach(
      (particle, index) => {
        if (!particle) return;

        const source =
          particles[index];

        const convergence =
          THREE.MathUtils.smoothstep(
            progress,
            0.14,
            0.72,
          );

        const targetX =
          source.x * 0.36;

        const targetY =
          source.y * 0.48;

        const targetZ =
          source.z * 0.25;

        particle.position.x =
          THREE.MathUtils.lerp(
            source.x,
            targetX,
            convergence,
          );

        particle.position.y =
          THREE.MathUtils.lerp(
            source.y,
            targetY,
            convergence,
          ) +
          Math.sin(
            time * 0.35 +
              source.phase,
          ) *
            0.045;

        particle.position.z =
          THREE.MathUtils.lerp(
            source.z,
            targetZ,
            convergence,
          );
      },
    );
  });

  return (
    <group
      ref={groupRef}
      position={[
        1.35,
        0,
        -2.45,
      ]}
    >
      {/* Left aperture */}

      <mesh ref={leftArcRef}>
        <tubeGeometry
          args={[
            leftCurve,
            100,
            0.024,
            10,
            false,
          ]}
        />

        <meshPhysicalMaterial
          color={
            isDark
              ? "#60A5FA"
              : "#2563EB"
          }
          emissive="#3B82F6"
          emissiveIntensity={
            isDark
              ? 0.32
              : 0.06
          }
          metalness={0.28}
          roughness={0.18}
          clearcoat={1}
          transparent
          opacity={
            isDark
              ? 0.86
              : 0.65
          }
        />
      </mesh>

      {/* Right aperture */}

      <mesh ref={rightArcRef}>
        <tubeGeometry
          args={[
            rightCurve,
            100,
            0.024,
            10,
            false,
          ]}
        />

        <meshPhysicalMaterial
          color={
            isDark
              ? "#22D3EE"
              : "#10B981"
          }
          emissive="#22D3EE"
          emissiveIntensity={
            isDark
              ? 0.28
              : 0.05
          }
          metalness={0.25}
          roughness={0.18}
          clearcoat={1}
          transparent
          opacity={
            isDark
              ? 0.8
              : 0.6
          }
        />
      </mesh>

      {/* Asymmetric inner thought */}

      <mesh ref={innerArcRef}>
        <tubeGeometry
          args={[
            innerCurve,
            80,
            0.014,
            8,
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
              ? 0.52
              : 0.3
          }
        />
      </mesh>

      {/* Principle core */}

      <Float
        speed={0.45}
        floatIntensity={0.06}
      >
        <mesh ref={coreRef}>
          <octahedronGeometry
            args={[0.36, 2]}
          />

          <meshPhysicalMaterial
            color={
              isDark
                ? "#F4F8FF"
                : "#0A1D2F"
            }
            metalness={
              isDark
                ? 0.08
                : 0.5
            }
            roughness={0.1}
            transmission={
              isDark
                ? 0.58
                : 0.06
            }
            thickness={1}
            clearcoat={1}
            transparent
            opacity={0.9}
          />
        </mesh>
      </Float>

      {/* Inner principle light */}

      <mesh>
        <sphereGeometry
          args={[
            0.105,
            24,
            24,
          ]}
        />

        <meshBasicMaterial
          color="#22D3EE"
        />
      </mesh>

      {/* Converging principles */}

      {particles.map(
        (particle, index) => (
          <mesh
            key={`philosophy-particle-${index}`}
            ref={(element) => {
              particleRefs.current[
                index
              ] = element;
            }}
            position={[
              particle.x,
              particle.y,
              particle.z,
            ]}
          >
            {index % 5 === 0 ? (
              <octahedronGeometry
                args={[
                  0.045,
                  0,
                ]}
              />
            ) : (
              <sphereGeometry
                args={[
                  0.025,
                  10,
                  10,
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
                  ? 0.68
                  : 0.4
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
        distance={7}
        color="#3B82F6"
      />

      <Sparkles
        count={12}
        scale={[5, 5, 4]}
        size={0.5}
        speed={0.025}
        opacity={
          isDark
            ? 0.1
            : 0.04
        }
        color="#DBEAFE"
      />
    </group>
  );
}

/* ============================================================
   FINAL — CONVERGENCE
============================================================ */

function FinalWorld({
  isDark,
}: {
  isDark: boolean;
}) {
  const groupRef =
    useRef<THREE.Group>(null);

  const coreRef =
    useRef<THREE.Mesh>(null);

  const beamRef =
    useRef<THREE.Mesh>(null);

  const streamRefs =
    useRef<
      Array<THREE.Mesh | null>
    >([]);

  const particleRefs =
    useRef<
      Array<THREE.Mesh | null>
    >([]);

  const pointer =
    useGlobalPointer();

  const {
    sceneProgress,
  } = useSceneExperience();

  /*
   * Every stream represents a different
   * path arriving at the same outcome.
   */

  const streams =
    useMemo(
      () => [
        {
          color: "#3B82F6",

          curve:
            new THREE.CatmullRomCurve3(
              [
                new THREE.Vector3(
                  -4.5,
                  2.3,
                  -1,
                ),
                new THREE.Vector3(
                  -3,
                  1.5,
                  0.3,
                ),
                new THREE.Vector3(
                  -1.7,
                  0.8,
                  -0.3,
                ),
                new THREE.Vector3(
                  -0.65,
                  0.25,
                  0.2,
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
          color: "#22D3EE",

          curve:
            new THREE.CatmullRomCurve3(
              [
                new THREE.Vector3(
                  -4.2,
                  -2.4,
                  -0.4,
                ),
                new THREE.Vector3(
                  -2.9,
                  -1.65,
                  0.4,
                ),
                new THREE.Vector3(
                  -1.65,
                  -0.85,
                  -0.2,
                ),
                new THREE.Vector3(
                  -0.55,
                  -0.2,
                  0.15,
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
          color: "#A855F7",

          curve:
            new THREE.CatmullRomCurve3(
              [
                new THREE.Vector3(
                  4.4,
                  2,
                  -0.7,
                ),
                new THREE.Vector3(
                  3.15,
                  1.4,
                  0.35,
                ),
                new THREE.Vector3(
                  1.9,
                  0.7,
                  -0.25,
                ),
                new THREE.Vector3(
                  0.7,
                  0.2,
                  0.2,
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
          color: "#60A5FA",

          curve:
            new THREE.CatmullRomCurve3(
              [
                new THREE.Vector3(
                  3.8,
                  -2.6,
                  -1.1,
                ),
                new THREE.Vector3(
                  2.7,
                  -1.75,
                  0.2,
                ),
                new THREE.Vector3(
                  1.5,
                  -0.9,
                  -0.3,
                ),
                new THREE.Vector3(
                  0.5,
                  -0.25,
                  0.12,
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

  const particles =
    useMemo(
      () =>
        Array.from(
          { length: 32 },
          (_, index) => {
            const side =
              index % 2 === 0
                ? -1
                : 1;

            const layer =
              index % 5;

            return {
              x:
                side *
                (
                  2.2 +
                  layer *
                    0.48
                ),

              y:
                Math.sin(
                  index * 1.7,
                ) *
                2.1,

              z:
                Math.cos(
                  index * 0.83,
                ) *
                  0.9 -
                0.4,

              phase:
                index * 0.29,
            };
          },
        ),
      [],
    );

  useFrame((state, delta) => {
    const group =
      groupRef.current;

    if (!group) return;

    const progress =
      sceneProgress.current.final;

    const time =
      state.clock.elapsedTime;

    const entry =
      THREE.MathUtils.smoothstep(
        progress,
        0.02,
        0.32,
      );

    /*
     * Final doesn't leave.
     */

    group.position.z =
      THREE.MathUtils.damp(
        group.position.z,
        THREE.MathUtils.lerp(
          -4,
          -2.15,
          entry,
        ),
        4,
        delta,
      );

    group.position.y =
      THREE.MathUtils.damp(
        group.position.y,
        THREE.MathUtils.lerp(
          0.5,
          0,
          entry,
        ),
        4,
        delta,
      );

    group.rotation.y =
      THREE.MathUtils.damp(
        group.rotation.y,
        pointer.current.x *
          0.045,
        3,
        delta,
      );

    group.rotation.x =
      THREE.MathUtils.damp(
        group.rotation.x,
        pointer.current.y *
          -0.02,
        3,
        delta,
      );

    /*
     * Streams resolve progressively.
     */

    streamRefs.current.forEach(
      (stream, index) => {
        if (!stream) return;

        const delay =
          index * 0.055;

        const streamEntry =
          THREE.MathUtils.smoothstep(
            progress,
            0.08 + delay,
            0.48 + delay,
          );

        stream.scale.setScalar(
          THREE.MathUtils.damp(
            stream.scale.x,
            THREE.MathUtils.lerp(
              0.15,
              1,
              streamEntry,
            ),
            5,
            delta,
          ),
        );

        /*
         * Small independent motion
         * prevents a static logo-like
         * arrangement.
         */

        stream.rotation.z =
          Math.sin(
            time * 0.15 +
              index,
          ) *
          0.012;
      },
    );

    /*
     * Core becomes the strongest visual
     * element toward the end.
     */

    if (coreRef.current) {
      coreRef.current.rotation.x +=
        delta * 0.11;

      coreRef.current.rotation.y +=
        delta * 0.17;

      const coreEntry =
        THREE.MathUtils.smoothstep(
          progress,
          0.2,
          0.66,
        );

      const pulse =
        1 +
        Math.sin(
          time * 1.05,
        ) *
          0.045;

      const growth =
        THREE.MathUtils.lerp(
          0.2,
          1.18,
          coreEntry,
        );

      coreRef.current.scale.setScalar(
        growth * pulse,
      );
    }

    /*
     * Vertical energy release.
     */

    if (beamRef.current) {
      const beamEntry =
        THREE.MathUtils.smoothstep(
          progress,
          0.45,
          0.82,
        );

      beamRef.current.scale.y =
        THREE.MathUtils.damp(
          beamRef.current
            .scale.y,
          THREE.MathUtils.lerp(
            0.02,
            1,
            beamEntry,
          ),
          5,
          delta,
        );

      const material =
        beamRef.current
          .material as THREE.MeshBasicMaterial;

      material.opacity =
        THREE.MathUtils.damp(
          material.opacity,
          THREE.MathUtils.lerp(
            0,
            isDark
              ? 0.2
              : 0.1,
            beamEntry,
          ),
          5,
          delta,
        );
    }

    /*
     * Loose signals are pulled toward
     * the central core.
     */

    particleRefs.current.forEach(
      (particle, index) => {
        if (!particle) return;

        const source =
          particles[index];

        const convergence =
          THREE.MathUtils.smoothstep(
            progress,
            0.12,
            0.86,
          );

        const compression =
          THREE.MathUtils.lerp(
            1,
            0.16,
            convergence,
          );

        particle.position.x =
          source.x *
          compression;

        particle.position.y =
          source.y *
            compression +
          Math.sin(
            time * 0.45 +
              source.phase,
          ) *
            0.045;

        particle.position.z =
          source.z *
          compression;

        particle.rotation.x +=
          delta * 0.1;

        particle.rotation.y +=
          delta * 0.14;
      },
    );
  });

  return (
    <group
      ref={groupRef}
      position={[
        1.55,
        0,
        -2.15,
      ]}
    >
      {/* Converging energy streams */}

      {streams.map(
        (
          stream,
          index,
        ) => (
          <mesh
            key={`final-stream-${index}`}
            ref={(element) => {
              streamRefs.current[
                index
              ] = element;
            }}
          >
            <tubeGeometry
              args={[
                stream.curve,
                120,
                index === 0
                  ? 0.045
                  : 0.032,
                10,
                false,
              ]}
            />

            <meshPhysicalMaterial
              color={
                stream.color
              }
              emissive={
                stream.color
              }
              emissiveIntensity={
                isDark
                  ? 0.32
                  : 0.06
              }
              metalness={0.22}
              roughness={0.16}
              clearcoat={1}
              transparent
              opacity={
                isDark
                  ? 0.84
                  : 0.62
              }
            />
          </mesh>
        ),
      )}

      {/* Final crystalline core */}

      <Float
        speed={0.5}
        floatIntensity={0.05}
      >
        <mesh ref={coreRef}>
          <icosahedronGeometry
            args={[0.46, 4]}
          />

          <meshPhysicalMaterial
            color="#F5FAFF"
            metalness={0.04}
            roughness={0.08}
            transmission={
              isDark
                ? 0.7
                : 0.32
            }
            thickness={1.1}
            clearcoat={1}
            clearcoatRoughness={
              0.04
            }
            transparent
            opacity={0.92}
          />
        </mesh>
      </Float>

      {/* Energy nucleus */}

      <mesh>
        <sphereGeometry
          args={[
            0.17,
            32,
            32,
          ]}
        />

        <meshBasicMaterial
          color="#3B82F6"
        />
      </mesh>

      {/* Vertical release */}

      <mesh
        ref={beamRef}
        position={[
          0,
          0,
          -0.15,
        ]}
        scale={[
          1,
          0.02,
          1,
        ]}
      >
        <cylinderGeometry
          args={[
            0.022,
            0.022,
            6.5,
            14,
          ]}
        />

        <meshBasicMaterial
          color="#60A5FA"
          transparent
          opacity={0}
          depthWrite={false}
        />
      </mesh>

      {/* Converging fragments */}

      {particles.map(
        (
          particle,
          index,
        ) => (
          <mesh
            key={`final-particle-${index}`}
            ref={(element) => {
              particleRefs.current[
                index
              ] = element;
            }}
            position={[
              particle.x,
              particle.y,
              particle.z,
            ]}
          >
            {index % 6 === 0 ? (
              <octahedronGeometry
                args={[
                  0.05,
                  0,
                ]}
              />
            ) : (
              <sphereGeometry
                args={[
                  0.023,
                  9,
                  9,
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
                  ? 0.72
                  : 0.46
              }
            />
          </mesh>
        ),
      )}

      <pointLight
        position={[
          0,
          0,
          1.3,
        ]}
        intensity={
          isDark
            ? 14
            : 7
        }
        distance={9}
        color="#3B82F6"
      />

      <pointLight
        position={[
          -1.7,
          -1,
          0,
        ]}
        intensity={
          isDark
            ? 5
            : 2.5
        }
        distance={7}
        color="#22D3EE"
      />

      <pointLight
        position={[
          1.7,
          1,
          -0.4,
        ]}
        intensity={
          isDark
            ? 4
            : 2
        }
        distance={6}
        color="#A855F7"
      />

      <Sparkles
        count={24}
        scale={[8, 6, 5]}
        size={0.65}
        speed={0.035}
        opacity={
          isDark
            ? 0.14
            : 0.055
        }
        color="#DBEAFE"
      />
    </group>
  );
}

/* ============================================================
   CAMERA
============================================================ */

function CameraRig({
  activeScene,
  reducedMotion,
}: {
  activeScene: SceneName;
  reducedMotion: boolean;
}) {
  const pointer =
    useGlobalPointer();

  const {
    sceneProgress,
  } = useSceneExperience();

  const lookTarget =
    useRef(
      new THREE.Vector3(
        0,
        0,
        -1.5,
      ),
    );

  const targets =
    useMemo<
      Record<
        SceneName,
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
            -0.08,
            0.15,
            7.4,
          ],

          lookAt: [
            0.25,
            0.12,
            -1.7,
          ],

          fov: 41,
        },

        exploration: {
          position: [
            0.05,
            0.32,
            7.05,
          ],

          lookAt: [
            0,
            -0.25,
            -1.9,
          ],

          fov: 43,
        },

        ventures: {
          position: [
            -0.05,
            0,
            7.5,
          ],

          lookAt: [
            0.45,
            0,
            -1.9,
          ],

          fov: 41,
        },

        research: {
          position: [
            0.08,
            0.22,
            7.2,
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
            0.02,
            -1.85,
          ],

          fov: 40,
        },

        final: {
          position: [
            0,
            0.15,
            7.8,
          ],

          lookAt: [
            0.6,
            0,
            -2.1,
          ],

          fov: 39,
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

      let fov = 0;

      /*
       * Blend all scenes currently
       * intersecting the viewport.
       */
      SCENE_ORDER.forEach(
        (scene) => {
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
                );

          /*
           * Ensure we always have
           * one valid camera target.
           */
          if (
            scene ===
              activeScene &&
            weight < 0.01
          ) {
            weight = 0.01;
          }

          if (
            weight <= 0
          ) {
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

          fov +=
            target.fov *
            weight;
        },
      );

      /*
       * Extremely defensive fallback.
       */
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

        fov =
          fallback.fov;

        totalWeight = 1;
      }

      /*
       * Weighted average.
       */

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

      fov /=
        totalWeight;

      /*
       * Pointer movement is added
       * only after scroll blending.
       *
       * That keeps mouse movement
       * independent from scene changes.
       */

      const pointerStrength =
        reducedMotion
          ? 0
          : 1;

      cameraX +=
        pointer.current.x *
        0.15 *
        pointerStrength;

      cameraY +=
        pointer.current.y *
        0.09 *
        pointerStrength;

      lookX +=
        pointer.current.x *
        0.045 *
        pointerStrength;

      lookY +=
        pointer.current.y *
        0.025 *
        pointerStrength;

      /*
       * Smooth camera travel.
       */

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

      /*
       * Smooth look target.
       */

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

      /*
       * Lens itself now transitions.
       */

      if (
        state.camera instanceof
        THREE.PerspectiveCamera
      ) {
        state.camera.fov =
          THREE.MathUtils.damp(
            state.camera.fov,
            fov,
            damping,
            delta,
          );

        state.camera.updateProjectionMatrix();
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
          isDark
            ? 0.3
            : 0.8
        }
      />

      <directionalLight
        position={[
          5,
          7,
          6,
        ]}
        intensity={
          isDark
            ? 2
            : 2.8
        }
      />

      <pointLight
        position={[
          4,
          2,
          3,
        ]}
        intensity={
          isDark
            ? 8
            : 4
        }
        color="#3B82F6"
      />

      <pointLight
        position={[
          -4,
          -2,
          1,
        ]}
        intensity={
          isDark
            ? 6
            : 3
        }
        color="#22D3EE"
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

      <SceneTransitionGroup
        scene="hero"
        activeScene={
          activeScene
        }
        reducedMotion={
          reducedMotion
        }
      >
        <HeroWorld
          isDark={isDark}
        />
      </SceneTransitionGroup>

      <SceneTransitionGroup
        scene="approach"
        activeScene={
          activeScene
        }
        reducedMotion={
          reducedMotion
        }
      >
        <ApproachWorld
          isDark={isDark}
        />
      </SceneTransitionGroup>

      <SceneTransitionGroup
        scene="exploration"
        activeScene={
          activeScene
        }
        reducedMotion={
          reducedMotion
        }
      >
        <ExplorationWorld
          isDark={isDark}
        />
      </SceneTransitionGroup>

      <SceneTransitionGroup
        scene="ventures"
        activeScene={
          activeScene
        }
        reducedMotion={
          reducedMotion
        }
      >
        <VenturesWorld
          isDark={isDark}
        />
      </SceneTransitionGroup>

      <SceneTransitionGroup
        scene="research"
        activeScene={
          activeScene
        }
        reducedMotion={
          reducedMotion
        }
      >
        <ResearchWorld
          isDark={isDark}
        />
      </SceneTransitionGroup>

      <SceneTransitionGroup
        scene="philosophy"
        activeScene={
          activeScene
        }
        reducedMotion={
          reducedMotion
        }
      >
        <PhilosophyWorld
          isDark={isDark}
        />
      </SceneTransitionGroup>

      <SceneTransitionGroup
        scene="final"
        activeScene={
          activeScene
        }
        reducedMotion={
          reducedMotion
        }
      >
        <FinalWorld
          isDark={isDark}
        />
      </SceneTransitionGroup>
    </>
  );
}

/* ============================================================
   SITE SCENE
============================================================ */

export function SiteScene() {
  const {
    activeScene,
  } =
    useSceneExperience();

  const { theme } =
    useTheme();

  const reducedMotion =
    useReducedMotion();

  const compact =
    useCompactScene();

  const isDark =
    theme === "dark";

  return (
    <div
      aria-hidden="true"
      className="
        h-full
        w-full
      "
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
          far: 100,
        }}
        dpr={
          compact
            ? 1
            : [1, 1.4]
        }
        gl={{
          antialias:
            !compact,
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
          isDark={
            isDark
          }
          reducedMotion={
            reducedMotion
          }
        />
      </Canvas>
    </div>
  );
}