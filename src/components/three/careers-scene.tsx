"use client";

import { Sparkles } from "@react-three/drei";
import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber";
import {
  AdditiveBlending,
  CatmullRomCurve3,
  Color,
  Group,
  MathUtils,
  PerspectiveCamera,
  TubeGeometry,
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
  type CareersSceneName,
  useCareersSceneExperience,
} from "@/src/components/three/careers-scene-experience";

/* ============================================================
   BRAND
============================================================ */

const BLUE = "#2563EB";
const LIGHT_BLUE = "#60A5FA";
const TEAL = "#22D3EE";
const GREEN = "#10B981";
const PURPLE = "#A855F7";
const NAVY = "#0A1D2F";

const SCENE_INDEX: Record<CareersSceneName, number> = {
  hero: 0,
  why: 1,
  work: 2,
  growth: 3,
  values: 4,
  roles: 5,
  process: 6,
  cta: 7,
};

/* ============================================================
   GLOBAL POINTER
============================================================ */

function useGlobalPointer() {
  const pointer = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      pointer.current.x =
        (event.clientX / window.innerWidth) * 2 - 1;

      pointer.current.y =
        -((event.clientY / window.innerHeight) * 2 - 1);
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

/* ============================================================
   DEVICE / MOTION
============================================================ */

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const update = () => {
      setReduced(media.matches);
    };

    update();

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  return reduced;
}

function useCompactScene() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const update = () => {
      setCompact(window.innerWidth < 768);
    };

    update();

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  return compact;
}

/* ============================================================
   HELPERS
============================================================ */

function getSceneWeight(progress: number) {
  const entrance = MathUtils.smoothstep(
    progress,
    0.03,
    0.28,
  );

  const exit =
    1 -
    MathUtils.smoothstep(
      progress,
      0.72,
      0.98,
    );

  return Math.max(
    0.12,
    Math.min(1, entrance * exit),
  );
}

function TalentNode({
  position,
  color = BLUE,
  size = 0.11,
  glow = true,
}: {
  position: [number, number, number];
  color?: string;
  size?: number;
  glow?: boolean;
}) {
  return (
    <group position={position}>
      {glow && (
        <mesh>
          <sphereGeometry args={[size * 2.4, 18, 18]} />

          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.045}
            depthWrite={false}
            blending={AdditiveBlending}
          />
        </mesh>
      )}

      <mesh>
        <sphereGeometry args={[size, 24, 24]} />

        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.2}
          roughness={0.28}
          metalness={0.12}
        />
      </mesh>
    </group>
  );
}

function Connection({
  start,
  end,
  color = TEAL,
  opacity = 0.22,
}: {
  start: [number, number, number];
  end: [number, number, number];
  color?: string;
  opacity?: number;
}) {
  const geometry = useMemo(() => {
    const startVector = new Vector3(...start);
    const endVector = new Vector3(...end);

    const midpoint = startVector
      .clone()
      .lerp(endVector, 0.5);

    midpoint.z += 0.22;

    const curve = new CatmullRomCurve3([
      startVector,
      midpoint,
      endVector,
    ]);

    return new TubeGeometry(
  curve,
  24,
  0.008,
  6,
  false,
);
  }, [start, end]);

  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        depthWrite={false}
        blending={AdditiveBlending}
      />
    </mesh>
  );
}

function CapabilityCore({
  color = TEAL,
  scale = 1,
}: {
  color?: string;
  scale?: number;
}) {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y =
      state.clock.elapsedTime * 0.12;

    group.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.25) *
      0.08;
  });

  return (
    <group
      ref={group}
      scale={scale}
    >
      <mesh>
        <icosahedronGeometry args={[0.68, 2]} />

        <meshStandardMaterial
          color={NAVY}
          emissive={color}
          emissiveIntensity={0.45}
          roughness={0.22}
          metalness={0.62}
          transparent
          opacity={0.82}
        />
      </mesh>

      <mesh scale={1.16}>
        <icosahedronGeometry args={[0.68, 1]} />

        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.17}
          depthWrite={false}
        />
      </mesh>

      <mesh scale={1.48}>
        <torusGeometry
          args={[0.67, 0.008, 8, 80]}
        />

        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.2}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

/* ============================================================
   01 — HERO
   Independent capability entering the same field.
============================================================ */

function HeroWorld() {
  const group = useRef<Group>(null);
  const reducedMotion = useReducedMotion();

  const people = useMemo(
    () => [
      [-3.1, 1.7, -0.5],
      [-1.7, 2.35, -1.3],
      [0.2, 2.05, -0.9],
      [2.2, 1.5, -1.5],
      [3.35, 0.1, -0.7],
      [2.45, -1.7, -1.1],
      [0.6, -2.15, -0.5],
      [-1.5, -1.85, -1.4],
      [-3.2, -0.6, -0.8],
      [-0.35, 0.15, 0.3],
      [1.35, 0.45, -0.2],
      [-1.2, 0.7, -0.45],
    ] as [number, number, number][],
    [],
  );

  useFrame((state) => {
    if (!group.current || reducedMotion) {
      return;
    }

    group.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.13) *
      0.09;

    group.current.rotation.z =
      Math.sin(state.clock.elapsedTime * 0.09) *
      0.025;
  });

  return (
    <group ref={group}>
      {people.map((position, index) => (
        <TalentNode
          key={index}
          position={position}
          color={
            index % 4 === 0
              ? PURPLE
              : index % 3 === 0
                ? TEAL
                : index % 2 === 0
                  ? GREEN
                  : BLUE
          }
          size={
            index === 9 ||
            index === 10 ||
            index === 11
              ? 0.15
              : 0.09
          }
        />
      ))}

      <Connection
        start={[-1.2, 0.7, -0.45]}
        end={[-0.35, 0.15, 0.3]}
        color={BLUE}
        opacity={0.12}
      />

      <Connection
        start={[-0.35, 0.15, 0.3]}
        end={[1.35, 0.45, -0.2]}
        color={TEAL}
        opacity={0.12}
      />
    </group>
  );
}

/* ============================================================
   02 — WHY JOIN
   Individual capability begins connecting around shared work.
============================================================ */

function WhyWorld() {
  const group = useRef<Group>(null);

  const nodes = useMemo(
    () => [
      [-2.8, 1.5, -0.8],
      [-1.25, 2.0, -0.5],
      [0.4, 1.65, -0.15],
      [2.1, 1.25, -0.9],
      [2.8, -0.55, -0.6],
      [1.2, -1.8, -0.3],
      [-0.7, -1.65, 0.1],
      [-2.45, -0.7, -0.75],
    ] as [number, number, number][],
    [],
  );

  const connections = useMemo(
    () => [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 0],
      [1, 6],
      [2, 5],
    ],
    [],
  );

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y =
      state.clock.elapsedTime * 0.035;
  });

  return (
    <group ref={group}>
      <CapabilityCore
        color={TEAL}
        scale={0.78}
      />

      {nodes.map((position, index) => (
        <TalentNode
          key={index}
          position={position}
          color={
            index % 3 === 0
              ? PURPLE
              : index % 2 === 0
                ? TEAL
                : BLUE
          }
          size={0.1}
        />
      ))}

      {connections.map(
        ([from, to], index) => (
          <Connection
            key={index}
            start={nodes[from]}
            end={nodes[to]}
            color={
              index % 3 === 0
                ? PURPLE
                : index % 2 === 0
                  ? TEAL
                  : BLUE
            }
            opacity={0.16}
          />
        ),
      )}
    </group>
  );
}

/* ============================================================
   03 — HOW WE WORK
   Distinct capabilities become a collaborative system.
============================================================ */

function WorkWorld() {
  const group = useRef<Group>(null);

  const teams = useMemo(
    () => [
      {
        position: [-2.3, 1.25, -0.4] as [
          number,
          number,
          number,
        ],
        color: BLUE,
      },
      {
        position: [2.25, 1.2, -0.7] as [
          number,
          number,
          number,
        ],
        color: PURPLE,
      },
      {
        position: [-1.8, -1.55, -0.8] as [
          number,
          number,
          number,
        ],
        color: TEAL,
      },
      {
        position: [2.0, -1.45, -0.35] as [
          number,
          number,
          number,
        ],
        color: GREEN,
      },
    ],
    [],
  );

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.15) *
      0.08;
  });

  return (
    <group ref={group}>
      <CapabilityCore
        color={TEAL}
        scale={0.9}
      />

      {teams.map((team, index) => (
        <group
          key={index}
          position={team.position}
        >
          <TalentNode
            position={[0, 0, 0]}
            color={team.color}
            size={0.14}
          />

          <TalentNode
            position={[-0.35, 0.28, -0.15]}
            color={team.color}
            size={0.055}
          />

          <TalentNode
            position={[0.38, 0.2, -0.2]}
            color={team.color}
            size={0.055}
          />

          <TalentNode
            position={[0.05, -0.4, 0.08]}
            color={team.color}
            size={0.055}
          />
        </group>
      ))}

      {teams.map((team, index) => (
        <Connection
          key={`core-${index}`}
          start={team.position}
          end={[0, 0, 0]}
          color={team.color}
          opacity={0.2}
        />
      ))}
    </group>
  );
}

/* ============================================================
   04 — GROWTH
   Capability expands, branches and creates new capability.
============================================================ */

function GrowthWorld() {
  const group = useRef<Group>(null);

  const { sceneProgress } =
    useCareersSceneExperience();

  const branches = useMemo(
    () => [
      [0, 0, 0],
      [-0.7, 0.7, -0.15],
      [-1.45, 1.35, -0.45],
      [-2.2, 2.0, -0.8],
      [0.75, 0.75, -0.2],
      [1.5, 1.4, -0.5],
      [2.25, 2.05, -0.9],
      [-0.8, -0.75, -0.15],
      [-1.6, -1.45, -0.5],
      [-2.4, -2.0, -0.85],
      [0.8, -0.75, -0.2],
      [1.6, -1.45, -0.55],
      [2.4, -2.0, -0.9],
    ] as [number, number, number][],
    [],
  );

  const edges = useMemo(
    () => [
      [0, 1],
      [1, 2],
      [2, 3],
      [0, 4],
      [4, 5],
      [5, 6],
      [0, 7],
      [7, 8],
      [8, 9],
      [0, 10],
      [10, 11],
      [11, 12],
    ],
    [],
  );

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    const progress =
      sceneProgress.current.growth;

    const expansion =
      0.72 +
      MathUtils.smoothstep(
        progress,
        0.12,
        0.82,
      ) *
        0.35;

    group.current.scale.setScalar(
      MathUtils.lerp(
        group.current.scale.x,
        expansion,
        0.06,
      ),
    );

    group.current.rotation.z =
      Math.sin(state.clock.elapsedTime * 0.11) *
      0.035;
  });

  return (
    <group ref={group}>
      <CapabilityCore
        color={GREEN}
        scale={0.68}
      />

      {branches.map((position, index) => (
        <TalentNode
          key={index}
          position={position}
          color={
            index === 0
              ? GREEN
              : index % 4 === 0
                ? PURPLE
                : index % 3 === 0
                  ? TEAL
                  : BLUE
          }
          size={
            index === 0
              ? 0.13
              : Math.max(
                  0.055,
                  0.1 - index * 0.002,
                )
          }
        />
      ))}

      {edges.map(([from, to], index) => (
        <Connection
          key={index}
          start={branches[from]}
          end={branches[to]}
          color={
            index % 3 === 0
              ? GREEN
              : index % 2 === 0
                ? TEAL
                : BLUE
          }
          opacity={0.19}
        />
      ))}
    </group>
  );
}

/* ============================================================
   05 — VALUES
   Four anchors stabilise the shared culture.
============================================================ */

function ValuesWorld() {
  const group = useRef<Group>(null);

  const anchors = useMemo(
    () => [
      {
        position: [0, 2.5, -0.5] as [
          number,
          number,
          number,
        ],
        color: BLUE,
      },
      {
        position: [2.6, 0, -0.65] as [
          number,
          number,
          number,
        ],
        color: PURPLE,
      },
      {
        position: [0, -2.5, -0.5] as [
          number,
          number,
          number,
        ],
        color: TEAL,
      },
      {
        position: [-2.6, 0, -0.65] as [
          number,
          number,
          number,
        ],
        color: GREEN,
      },
    ],
    [],
  );

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.z =
      Math.sin(state.clock.elapsedTime * 0.12) *
      0.045;
  });

  return (
    <group ref={group}>
      <CapabilityCore
        color={TEAL}
        scale={0.84}
      />

      {anchors.map((anchor, index) => (
        <group key={index}>
          <TalentNode
            position={anchor.position}
            color={anchor.color}
            size={0.17}
          />

          <Connection
            start={anchor.position}
            end={[0, 0, 0]}
            color={anchor.color}
            opacity={0.24}
          />
        </group>
      ))}

      <mesh rotation={[0, 0, Math.PI / 4]}>
        <torusGeometry
          args={[2.58, 0.009, 8, 96]}
        />

        <meshBasicMaterial
          color={TEAL}
          transparent
          opacity={0.07}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

/* ============================================================
   06 — OPEN ROLES
   The system opens into distinct opportunity paths.
============================================================ */

function RolesWorld() {
  const group = useRef<Group>(null);

  const paths = useMemo(
    () => [
      {
        position: [-2.8, 1.8, -0.7] as [
          number,
          number,
          number,
        ],
        color: BLUE,
      },
      {
        position: [0, 2.45, -0.45] as [
          number,
          number,
          number,
        ],
        color: TEAL,
      },
      {
        position: [2.8, 1.8, -0.75] as [
          number,
          number,
          number,
        ],
        color: PURPLE,
      },
      {
        position: [-2.45, -1.65, -0.8] as [
          number,
          number,
          number,
        ],
        color: GREEN,
      },
      {
        position: [2.45, -1.65, -0.65] as [
          number,
          number,
          number,
        ],
        color: LIGHT_BLUE,
      },
    ],
    [],
  );

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.1) *
      0.06;
  });

  return (
    <group ref={group}>
      <CapabilityCore
        color={BLUE}
        scale={0.76}
      />

      {paths.map((path, index) => (
        <group key={index}>
          <Connection
            start={[0, 0, 0]}
            end={path.position}
            color={path.color}
            opacity={0.2}
          />

          <TalentNode
            position={path.position}
            color={path.color}
            size={0.16}
          />

          <TalentNode
            position={[
              path.position[0] * 1.17,
              path.position[1] * 1.17,
              path.position[2] - 0.1,
            ]}
            color={path.color}
            size={0.05}
          />
        </group>
      ))}
    </group>
  );
}

/* ============================================================
   07 — HIRING PROCESS
   A candidate moves through a clear sequence toward the team.
============================================================ */

function ProcessWorld() {
  const group = useRef<Group>(null);

  const { sceneProgress } =
    useCareersSceneExperience();

  const stages = useMemo(
    () =>
      [
        [-3.2, 0, -0.7],
        [-1.65, 0.5, -0.35],
        [0, 0, 0],
        [1.65, -0.45, -0.35],
        [3.2, 0, -0.7],
      ] as [number, number, number][],
    [],
  );

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    const progress =
      sceneProgress.current.process;

    group.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.12) *
      0.035;

    group.current.position.x =
      MathUtils.lerp(
        group.current.position.x,
        (progress - 0.5) * -0.45,
        0.04,
      );
  });

  return (
    <group ref={group}>
      {stages.map((position, index) => (
        <TalentNode
          key={index}
          position={position}
          color={
            index === stages.length - 1
              ? GREEN
              : index === 0
                ? PURPLE
                : index === 2
                  ? TEAL
                  : BLUE
          }
          size={
            index === stages.length - 1
              ? 0.2
              : 0.12
          }
        />
      ))}

      {stages.slice(0, -1).map(
        (position, index) => (
          <Connection
            key={index}
            start={position}
            end={stages[index + 1]}
            color={
              index === stages.length - 2
                ? GREEN
                : index % 2 === 0
                  ? BLUE
                  : TEAL
            }
            opacity={0.25}
          />
        ),
      )}

      <mesh
        position={[
          stages[4][0],
          stages[4][1],
          stages[4][2],
        ]}
        scale={1.65}
      >
        <torusGeometry
          args={[0.32, 0.008, 8, 64]}
        />

        <meshBasicMaterial
          color={GREEN}
          transparent
          opacity={0.18}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

/* ============================================================
   08 — CTA
   Many capabilities resolve into one expanding future.
============================================================ */

function CtaWorld() {
  const group = useRef<Group>(null);

  const outerNodes = useMemo(
    () => [
      [-2.5, 1.7, -0.8],
      [-0.9, 2.65, -0.65],
      [1.2, 2.45, -0.7],
      [2.75, 1.15, -0.75],
      [2.55, -1.25, -0.7],
      [0.8, -2.5, -0.65],
      [-1.35, -2.35, -0.8],
      [-2.75, -0.85, -0.65],
    ] as [number, number, number][],
    [],
  );

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y =
      state.clock.elapsedTime * 0.045;

    const pulse =
      1 +
      Math.sin(state.clock.elapsedTime * 0.7) *
        0.018;

    group.current.scale.setScalar(pulse);
  });

  return (
    <group ref={group}>
      <CapabilityCore
        color={TEAL}
        scale={1.05}
      />

      {outerNodes.map((position, index) => (
        <group key={index}>
          <Connection
            start={position}
            end={[0, 0, 0]}
            color={
              index % 4 === 0
                ? PURPLE
                : index % 3 === 0
                  ? GREEN
                  : index % 2 === 0
                    ? TEAL
                    : BLUE
            }
            opacity={0.17}
          />

          <TalentNode
            position={position}
            color={
              index % 4 === 0
                ? PURPLE
                : index % 3 === 0
                  ? GREEN
                  : index % 2 === 0
                    ? TEAL
                    : BLUE
            }
            size={0.09}
          />
        </group>
      ))}

      <mesh>
        <torusGeometry
          args={[2.9, 0.009, 8, 120]}
        />

        <meshBasicMaterial
          color={TEAL}
          transparent
          opacity={0.08}
          depthWrite={false}
        />
      </mesh>

      <mesh
        rotation={[
          Math.PI / 2.7,
          0,
          Math.PI / 5,
        ]}
      >
        <torusGeometry
          args={[3.25, 0.007, 8, 120]}
        />

        <meshBasicMaterial
          color={PURPLE}
          transparent
          opacity={0.055}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

/* ============================================================
   SPATIAL TRANSITION
============================================================ */

function CareersTransitionGroup({
  scene,
  children,
}: {
  scene: CareersSceneName;
  children: ReactNode;
}) {
  const group = useRef<Group>(null);

  const {
    activeScene,
    sceneProgress,
  } = useCareersSceneExperience();

  const activeIndex =
    SCENE_INDEX[activeScene];

  const sceneIndex =
    SCENE_INDEX[scene];

  const distance =
    sceneIndex - activeIndex;

  const visible =
    Math.abs(distance) <= 1;

  useFrame(() => {
    if (!group.current) {
      return;
    }

    const progress =
      sceneProgress.current[scene];

    const active =
      activeScene === scene;

    const targetX = active
      ? 0
      : distance * 5.8;

    const targetY = active
      ? 0
      : distance * -1.2;

    const targetZ = active
      ? 0
      : -5.5 - Math.abs(distance) * 1.5;

    const progressWeight =
      getSceneWeight(progress);

    const targetScale = active
      ? 0.92 + progressWeight * 0.08
      : 0.7;

    group.current.position.x =
      MathUtils.lerp(
        group.current.position.x,
        targetX,
        0.055,
      );

    group.current.position.y =
      MathUtils.lerp(
        group.current.position.y,
        targetY,
        0.055,
      );

    group.current.position.z =
      MathUtils.lerp(
        group.current.position.z,
        targetZ,
        0.055,
      );

    group.current.scale.x =
      MathUtils.lerp(
        group.current.scale.x,
        targetScale,
        0.055,
      );

    group.current.scale.y =
      MathUtils.lerp(
        group.current.scale.y,
        targetScale,
        0.055,
      );

    group.current.scale.z =
      MathUtils.lerp(
        group.current.scale.z,
        targetScale,
        0.055,
      );

    group.current.rotation.y =
      MathUtils.lerp(
        group.current.rotation.y,
        active
          ? 0
          : distance * 0.28,
        0.045,
      );

    group.current.visible = visible;
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
   DIRECTOR
============================================================ */

function SceneDirector() {
  return (
    <group>
      <CareersTransitionGroup scene="hero">
        <HeroWorld />
      </CareersTransitionGroup>

      <CareersTransitionGroup scene="why">
        <WhyWorld />
      </CareersTransitionGroup>

      <CareersTransitionGroup scene="work">
        <WorkWorld />
      </CareersTransitionGroup>

      <CareersTransitionGroup scene="growth">
        <GrowthWorld />
      </CareersTransitionGroup>

      <CareersTransitionGroup scene="values">
        <ValuesWorld />
      </CareersTransitionGroup>

      <CareersTransitionGroup scene="roles">
        <RolesWorld />
      </CareersTransitionGroup>

      <CareersTransitionGroup scene="process">
        <ProcessWorld />
      </CareersTransitionGroup>

      <CareersTransitionGroup scene="cta">
        <CtaWorld />
      </CareersTransitionGroup>
    </group>
  );
}

/* ============================================================
   CAMERA
============================================================ */

const CAMERA_POSITIONS: Record<
  CareersSceneName,
  [number, number, number]
> = {
  hero: [0.45, 0.15, 8.6],
  why: [-0.25, 0.1, 8.25],
  work: [0.35, 0.05, 8.45],
  growth: [-0.2, 0, 8.65],
  values: [0.25, 0, 8.45],
  roles: [-0.25, 0.1, 8.7],
  process: [0, 0.1, 8.55],
  cta: [0, 0, 8.9],
};

function CameraRig() {
  const { camera } = useThree();

  const { activeScene } =
    useCareersSceneExperience();

  const pointer = useGlobalPointer();
  const reducedMotion = useReducedMotion();

  useFrame(() => {
    const perspective =
      camera as PerspectiveCamera;

    const target =
      CAMERA_POSITIONS[activeScene];

    const pointerX = reducedMotion
      ? 0
      : pointer.current.x * 0.16;

    const pointerY = reducedMotion
      ? 0
      : pointer.current.y * 0.1;

    perspective.position.x =
      MathUtils.lerp(
        perspective.position.x,
        target[0] + pointerX,
        0.035,
      );

    perspective.position.y =
      MathUtils.lerp(
        perspective.position.y,
        target[1] + pointerY,
        0.035,
      );

    perspective.position.z =
      MathUtils.lerp(
        perspective.position.z,
        target[2],
        0.035,
      );

    perspective.lookAt(0, 0, 0);
  });

  return null;
}

/* ============================================================
   BACKGROUND FIELD
============================================================ */

function BackgroundField() {
  const compact = useCompactScene();

  return (
    <Sparkles
      count={compact ? 24 : 48}
      scale={compact ? 9 : 13}
      size={compact ? 1 : 1.35}
      speed={0.12}
      opacity={0.16}
      color={LIGHT_BLUE}
      noise={1.2}
    />
  );
}

/* ============================================================
   LIGHTING
============================================================ */

function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.6} />

      <directionalLight
        position={[4, 5, 6]}
        intensity={1.2}
        color="#FFFFFF"
      />

      <pointLight
        position={[-4, 2, 4]}
        intensity={11}
        distance={12}
        color={BLUE}
      />

      <pointLight
        position={[4, -1, 3]}
        intensity={9}
        distance={11}
        color={TEAL}
      />

      <pointLight
        position={[0, 4, 1]}
        intensity={7}
        distance={10}
        color={PURPLE}
      />
    </>
  );
}

/* ============================================================
   CANVAS
============================================================ */

export function CareersScene() {
  const compact = useCompactScene();

  return (
    <Canvas
      camera={{
        position: [
          0.45,
          0.15,
          8.6,
        ],
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
        alpha: true,
        antialias: !compact,
        powerPreference: "high-performance",
      }}
      frameloop="always"
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
      }}
    >
      <SceneLighting />

      <BackgroundField />

      <SceneDirector />

      <CameraRig />
    </Canvas>
  );
}