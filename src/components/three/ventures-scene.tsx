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
  type VenturesSceneName,
  useVenturesSceneExperience,
} from "./ventures-scene-experience";

/* ============================================================
   CONFIGURATION
============================================================ */

const SCENE_INDEX: Record<VenturesSceneName, number> = {
  hero: 0,
  philosophy: 1,
  portfolio: 2,
  featured: 3,
  emergence: 4,
  capabilities: 5,
  stages: 6,
  future: 7,
  cta: 8,
};

const BLUE = "#3B82F6";
const TEAL = "#22D3EE";
const GREEN = "#10B981";
const PURPLE = "#A855F7";
const ORANGE = "#F97316";
const NAVY = "#0A1D2F";

/* ============================================================
   GLOBAL POINTER
============================================================ */

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
        (event.clientX / window.innerWidth) * 2 - 1;

      pointer.current.y =
        -(
          (event.clientY / window.innerHeight) * 2 -
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

/* ============================================================
   MEDIA HELPERS
============================================================ */

function useReducedMotion() {
  const [reduced, setReduced] =
    useState(false);

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
      media.removeEventListener(
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
    const update = () => {
      setCompact(window.innerWidth < 768);
    };

    update();

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener(
        "resize",
        update,
      );
    };
  }, []);

  return compact;
}

/* ============================================================
   TRANSITION WEIGHT
============================================================ */

function getSceneWeight(progress: number) {
  const fadeIn = MathUtils.smoothstep(
    progress,
    0.04,
    0.25,
  );

  const fadeOut =
    1 -
    MathUtils.smoothstep(
      progress,
      0.76,
      0.98,
    );

  return fadeIn * fadeOut;
}

/* ============================================================
   BASIC NODE
============================================================ */

type NodeProps = {
  position: [number, number, number];
  color: string;
  size?: number;
  glow?: boolean;
};

function Node({
  position,
  color,
  size = 0.09,
  glow = false,
}: NodeProps) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry
          args={[
            size,
            24,
            24,
          ]}
        />

        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={
            glow ? 2.4 : 0.9
          }
          roughness={0.24}
          metalness={0.25}
        />
      </mesh>

      {glow && (
        <mesh scale={2.5}>
          <sphereGeometry
            args={[
              size,
              18,
              18,
            ]}
          />

          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.08}
            blending={AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      )}
    </group>
  );
}

/* ============================================================
   CONNECTION LINE
============================================================ */

function Connection({
  from,
  to,
  color = BLUE,
  opacity = 0.25,
}: {
  from: Vector3;
  to: Vector3;
  color?: string;
  opacity?: number;
}) {
  const geometry = useMemo(() => {
    const mid = from
      .clone()
      .lerp(to, 0.5);

    mid.z += 0.25;

    const curve =
      new CatmullRomCurve3([
        from,
        mid,
        to,
      ]);

    const points =
      curve.getPoints(32);

    const positions = new Float32Array(
      points.length * 3,
    );

    points.forEach((point, index) => {
      positions[index * 3] = point.x;
      positions[index * 3 + 1] = point.y;
      positions[index * 3 + 2] = point.z;
    });

    const nextGeometry =
      new BufferGeometry();

    nextGeometry.setAttribute(
      "position",
      new Float32BufferAttribute(
        positions,
        3,
      ),
    );

    return nextGeometry;
  }, [from, to]);

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
   VENTURE CORE
============================================================ */

function VentureCore({
  scale = 1,
  intensity = 1,
  color = TEAL,
}: {
  scale?: number;
  intensity?: number;
  color?: string;
}) {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y =
      state.clock.elapsedTime * 0.12;

    group.current.rotation.x =
      Math.sin(
        state.clock.elapsedTime * 0.24,
      ) * 0.08;
  });

  return (
    <group
      ref={group}
      scale={scale}
    >
      <mesh>
        <icosahedronGeometry
          args={[0.65, 2]}
        />

        <meshPhysicalMaterial
          color={NAVY}
          emissive={color}
          emissiveIntensity={
            0.45 * intensity
          }
          roughness={0.18}
          metalness={0.62}
          transmission={0.08}
          thickness={0.8}
          transparent
          opacity={0.92}
        />
      </mesh>

      <mesh scale={1.18}>
        <icosahedronGeometry
          args={[0.65, 1]}
        />

        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.16 * intensity}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      <mesh scale={1.55}>
        <sphereGeometry
          args={[0.55, 24, 24]}
        />

        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.035 * intensity}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

/* ============================================================
   ORBIT RING
============================================================ */

function OrbitRing({
  radius,
  color,
  rotation = [0, 0, 0],
  opacity = 0.16,
}: {
  radius: number;
  color: string;
  rotation?: [
    number,
    number,
    number,
  ];
  opacity?: number;
}) {
  return (
    <mesh rotation={rotation}>
      <torusGeometry
        args={[
          radius,
          0.008,
          8,
          96,
        ]}
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
   Possibilities exist as unresolved signals around a central
   field. Nothing has become a venture yet.
============================================================ */

function HeroWorld({
  compact,
}: {
  compact: boolean;
}) {
  const group = useRef<Group>(null);

  const signals = useMemo(() => {
    const count = compact ? 16 : 28;

    return Array.from(
      { length: count },
      (_, index) => {
        const angle =
          (index / count) *
          Math.PI *
          2;

        const radius =
          1.8 +
          (index % 5) * 0.28;

        const y =
          Math.sin(index * 1.73) *
          1.45;

        return {
          position: [
            Math.cos(angle) * radius,
            y,
            Math.sin(angle) *
              radius *
              0.55,
          ] as [
            number,
            number,
            number,
          ],
          color:
            index % 4 === 0
              ? PURPLE
              : index % 3 === 0
                ? TEAL
                : BLUE,
          size:
            0.035 +
            (index % 3) * 0.014,
        };
      },
    );
  }, [compact]);

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y =
      state.clock.elapsedTime * 0.025;
  });

  return (
    <group ref={group}>
      <VentureCore
        scale={0.68}
        intensity={0.65}
      />

      {signals.map(
        (signal, index) => (
          <Float
            key={index}
            speed={
              0.45 +
              (index % 4) * 0.1
            }
            rotationIntensity={0}
            floatIntensity={0.3}
          >
            <Node {...signal} />
          </Float>
        ),
      )}

      <OrbitRing
        radius={1.55}
        color={BLUE}
        rotation={[
          Math.PI / 2.4,
          0.2,
          0,
        ]}
        opacity={0.08}
      />

      <OrbitRing
        radius={2.45}
        color={PURPLE}
        rotation={[
          Math.PI / 2,
          -0.35,
          0.4,
        ]}
        opacity={0.06}
      />
    </group>
  );
}

/* ============================================================
   PHILOSOPHY
   Most signals are filtered. A few converge toward the core.
============================================================ */

function PhilosophyWorld({
  compact,
}: {
  compact: boolean;
}) {
  const group = useRef<Group>(null);

  const candidates = useMemo(
    () => [
      new Vector3(-2.7, 1.45, -0.3),
      new Vector3(2.4, 1.15, 0.1),
      new Vector3(-2.1, -1.55, 0.3),
      new Vector3(2.7, -1.35, -0.4),
      new Vector3(0.2, 2.25, -0.5),
      new Vector3(-0.1, -2.3, 0.15),
    ],
    [],
  );

  const accepted = useMemo(
    () => [
      new Vector3(-1.15, 0.55, 0.1),
      new Vector3(1.1, -0.42, 0.05),
      new Vector3(0.35, 1.05, -0.15),
    ],
    [],
  );

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.z =
      Math.sin(
        state.clock.elapsedTime * 0.16,
      ) * 0.025;
  });

  return (
    <group
      ref={group}
      scale={compact ? 0.85 : 1}
    >
      <VentureCore
        scale={0.75}
        intensity={0.8}
      />

      {candidates.map(
        (position, index) => (
          <Node
            key={`candidate-${index}`}
            position={[
              position.x,
              position.y,
              position.z,
            ]}
            color={
              index % 2 === 0
                ? "#64748B"
                : PURPLE
            }
            size={0.055}
          />
        ),
      )}

      {accepted.map(
        (position, index) => (
          <group
            key={`accepted-${index}`}
          >
            <Node
              position={[
                position.x,
                position.y,
                position.z,
              ]}
              color={
                index === 0
                  ? BLUE
                  : index === 1
                    ? TEAL
                    : GREEN
              }
              size={0.09}
              glow
            />

            <Connection
              from={position}
              to={
                new Vector3(0, 0, 0)
              }
              color={
                index === 0
                  ? BLUE
                  : index === 1
                    ? TEAL
                    : GREEN
              }
              opacity={0.28}
            />
          </group>
        ),
      )}
    </group>
  );
}

/* ============================================================
   PORTFOLIO
   Multiple venture nodes emerge from the same Evolvaer core.
============================================================ */

function PortfolioWorld({
  compact,
}: {
  compact: boolean;
}) {
  const group = useRef<Group>(null);

  const ventures = useMemo(
    () => [
      {
        position: new Vector3(
          -2.25,
          1.2,
          0.15,
        ),
        color: BLUE,
        size: 0.22,
      },
      {
        position: new Vector3(
          2.25,
          1.0,
          -0.15,
        ),
        color: TEAL,
        size: 0.18,
      },
      {
        position: new Vector3(
          -1.9,
          -1.45,
          -0.1,
        ),
        color: PURPLE,
        size: 0.16,
      },
      {
        position: new Vector3(
          2.05,
          -1.4,
          0.2,
        ),
        color: GREEN,
        size: 0.17,
      },
    ],
    [],
  );

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y =
      Math.sin(
        state.clock.elapsedTime * 0.18,
      ) * 0.06;
  });

  return (
    <group
      ref={group}
      scale={compact ? 0.78 : 1}
    >
      <VentureCore
        scale={0.82}
        intensity={1}
      />

      {ventures.map(
        (venture, index) => (
          <group key={index}>
            <Node
              position={[
                venture.position.x,
                venture.position.y,
                venture.position.z,
              ]}
              color={venture.color}
              size={venture.size}
              glow
            />

            <Connection
              from={
                new Vector3(0, 0, 0)
              }
              to={venture.position}
              color={venture.color}
              opacity={0.3}
            />

            <OrbitingSatellite
              center={venture.position}
              radius={
                0.38 +
                index * 0.035
              }
              color={venture.color}
              speed={
                0.4 +
                index * 0.08
              }
            />
          </group>
        ),
      )}
    </group>
  );
}

/* ============================================================
   SATELLITE
============================================================ */

function OrbitingSatellite({
  center,
  radius,
  color,
  speed,
}: {
  center: Vector3;
  radius: number;
  color: string;
  speed: number;
}) {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.z =
      state.clock.elapsedTime * speed;
  });

  return (
    <group
      ref={group}
      position={[
        center.x,
        center.y,
        center.z,
      ]}
    >
      <OrbitRing
        radius={radius}
        color={color}
        opacity={0.09}
      />

      <group
        position={[
          radius,
          0,
          0,
        ]}
      >
        <Node
          position={[0, 0, 0]}
          color={color}
          size={0.035}
        />
      </group>
    </group>
  );
}

/* ============================================================
   FEATURED VENTURE — ADAPTCUES
   One venture becomes dominant without losing its connection
   to the Evolvaer core.
============================================================ */

function FeaturedWorld({
  compact,
}: {
  compact: boolean;
}) {
  const group = useRef<Group>(null);

  const evolvaer =
    useMemo(
      () =>
        new Vector3(
          compact ? -1.6 : -2.25,
          0,
          -0.35,
        ),
      [compact],
    );

  const adaptcues =
    useMemo(
      () =>
        new Vector3(
          compact ? 0.9 : 1.55,
          0,
          0.2,
        ),
      [compact],
    );

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y =
      Math.sin(
        state.clock.elapsedTime * 0.2,
      ) * 0.025;
  });

  return (
    <group ref={group}>
      <group
        position={[
          evolvaer.x,
          evolvaer.y,
          evolvaer.z,
        ]}
      >
        <VentureCore
          scale={0.52}
          intensity={0.55}
          color={BLUE}
        />
      </group>

      <Connection
        from={evolvaer}
        to={adaptcues}
        color={TEAL}
        opacity={0.42}
      />

      <group
        position={[
          adaptcues.x,
          adaptcues.y,
          adaptcues.z,
        ]}
      >
        <AdaptcuesCore
          compact={compact}
        />
      </group>

      {!compact && (
        <>
          <Node
            position={[
              2.9,
              1.35,
              -0.25,
            ]}
            color={TEAL}
            size={0.055}
          />

          <Node
            position={[
              3.15,
              -1.1,
              0.15,
            ]}
            color={PURPLE}
            size={0.045}
          />

          <Node
            position={[
              0.45,
              1.65,
              -0.4,
            ]}
            color={BLUE}
            size={0.04}
          />
        </>
      )}
    </group>
  );
}

/* ============================================================
   ADAPTCUES CORE
============================================================ */

function AdaptcuesCore({
  compact,
}: {
  compact: boolean;
}) {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    const time =
      state.clock.elapsedTime;

    group.current.rotation.y =
      time * 0.16;

    group.current.rotation.z =
      Math.sin(time * 0.32) * 0.06;
  });

  return (
    <group
      ref={group}
      scale={compact ? 0.8 : 1}
    >
      <mesh>
        <dodecahedronGeometry
          args={[0.82, 1]}
        />

        <meshPhysicalMaterial
          color="#071827"
          emissive={TEAL}
          emissiveIntensity={0.72}
          roughness={0.14}
          metalness={0.62}
          transmission={0.06}
        />
      </mesh>

      <mesh scale={1.16}>
        <dodecahedronGeometry
          args={[0.82, 0]}
        />

        <meshBasicMaterial
          color={TEAL}
          wireframe
          transparent
          opacity={0.28}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      <OrbitRing
        radius={1.18}
        color={TEAL}
        rotation={[
          1.15,
          0.3,
          0.2,
        ]}
        opacity={0.22}
      />

      <OrbitRing
        radius={1.43}
        color={PURPLE}
        rotation={[
          0.4,
          0.9,
          1.2,
        ]}
        opacity={0.11}
      />

      <Node
        position={[
          1.12,
          0.25,
          0,
        ]}
        color={TEAL}
        size={0.06}
        glow
      />
    </group>
  );
}

/* ============================================================
   EMERGENCE
   Signal → Validation → Product → Venture
============================================================ */

function EmergenceWorld({
  compact,
}: {
  compact: boolean;
}) {
  const group = useRef<Group>(null);

  const points = useMemo(
    () => [
      {
        position: new Vector3(
          -2.7,
          1.4,
          0,
        ),
        color: BLUE,
        size: 0.07,
      },
      {
        position: new Vector3(
          -1.1,
          0.45,
          0,
        ),
        color: PURPLE,
        size: 0.1,
      },
      {
        position: new Vector3(
          0.7,
          -0.35,
          0,
        ),
        color: TEAL,
        size: 0.15,
      },
      {
        position: new Vector3(
          2.5,
          -1.1,
          0,
        ),
        color: GREEN,
        size: 0.25,
      },
    ],
    [],
  );

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y =
      Math.sin(
        state.clock.elapsedTime * 0.17,
      ) * 0.04;
  });

  return (
    <group
      ref={group}
      scale={compact ? 0.78 : 1}
    >
      {points.map(
        (point, index) => (
          <group key={index}>
            <Node
              position={[
                point.position.x,
                point.position.y,
                point.position.z,
              ]}
              color={point.color}
              size={point.size}
              glow={index === 3}
            />

            {index <
              points.length - 1 && (
              <Connection
                from={point.position}
                to={
                  points[index + 1]
                    .position
                }
                color={
                  points[index + 1]
                    .color
                }
                opacity={
                  0.18 +
                  index * 0.08
                }
              />
            )}
          </group>
        ),
      )}

      <OrbitRing
        radius={0.52}
        color={GREEN}
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
        opacity={0.16}
      />
    </group>
  );
}

/* ============================================================
   CAPABILITIES
   Research / Technology / Product / Venture capability orbit
   the venture core.
============================================================ */

function CapabilitiesWorld({
  compact,
}: {
  compact: boolean;
}) {
  const group = useRef<Group>(null);

  const capabilities = useMemo(
    () => [
      {
        position: new Vector3(
          0,
          2.05,
          0,
        ),
        color: PURPLE,
      },
      {
        position: new Vector3(
          2.2,
          0,
          0,
        ),
        color: TEAL,
      },
      {
        position: new Vector3(
          0,
          -2.05,
          0,
        ),
        color: GREEN,
      },
      {
        position: new Vector3(
          -2.2,
          0,
          0,
        ),
        color: BLUE,
      },
    ],
    [],
  );

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.z =
      state.clock.elapsedTime *
      0.035;
  });

  return (
    <group
      ref={group}
      scale={compact ? 0.78 : 1}
    >
      <VentureCore
        scale={0.9}
        intensity={1.2}
      />

      {capabilities.map(
        (capability, index) => (
          <group key={index}>
            <Node
              position={[
                capability.position.x,
                capability.position.y,
                capability.position.z,
              ]}
              color={
                capability.color
              }
              size={0.15}
              glow
            />

            <Connection
              from={
                capability.position
              }
              to={
                new Vector3(0, 0, 0)
              }
              color={
                capability.color
              }
              opacity={0.34}
            />
          </group>
        ),
      )}

      <OrbitRing
        radius={2.15}
        color={TEAL}
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
        opacity={0.09}
      />
    </group>
  );
}

/* ============================================================
   STAGES
   Ventures move outward as they mature.
============================================================ */

function StagesWorld({
  compact,
}: {
  compact: boolean;
}) {
  const group = useRef<Group>(null);

  const stageNodes = useMemo(
    () => [
      {
        position: new Vector3(
          -2.35,
          0.75,
          0,
        ),
        color: BLUE,
        size: 0.12,
      },
      {
        position: new Vector3(
          0,
          0,
          0,
        ),
        color: TEAL,
        size: 0.22,
      },
      {
        position: new Vector3(
          2.45,
          -0.65,
          0,
        ),
        color: GREEN,
        size: 0.34,
      },
    ],
    [],
  );

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.position.y =
      Math.sin(
        state.clock.elapsedTime *
          0.3,
      ) * 0.05;
  });

  return (
    <group
      ref={group}
      scale={compact ? 0.78 : 1}
    >
      {stageNodes.map(
        (node, index) => (
          <group key={index}>
            <Node
              position={[
                node.position.x,
                node.position.y,
                node.position.z,
              ]}
              color={node.color}
              size={node.size}
              glow
            />

            {index <
              stageNodes.length -
                1 && (
              <Connection
                from={node.position}
                to={
                  stageNodes[index + 1]
                    .position
                }
                color={
                  stageNodes[index + 1]
                    .color
                }
                opacity={0.32}
              />
            )}
          </group>
        ),
      )}

      <OrbitRing
        radius={0.55}
        color={BLUE}
        opacity={0.1}
      />

      <group
        position={[2.45, -0.65, 0]}
      >
        <OrbitRing
          radius={0.7}
          color={GREEN}
          rotation={[
            0.8,
            0.4,
            0,
          ]}
          opacity={0.18}
        />

        <OrbitRing
          radius={1.0}
          color={TEAL}
          rotation={[
            1.4,
            0.2,
            0.7,
          ]}
          opacity={0.09}
        />
      </group>
    </group>
  );
}

/* ============================================================
   FUTURE
   The venture portfolio expands into an ecosystem.
============================================================ */

function FutureWorld({
  compact,
}: {
  compact: boolean;
}) {
  const group = useRef<Group>(null);

  const nodes = useMemo(() => {
    const count = compact ? 10 : 18;

    return Array.from(
      { length: count },
      (_, index) => {
        const ring =
          index < count * 0.45
            ? 1
            : 2;

        const radius =
          ring === 1
            ? 1.7
            : 3;

        const angle =
          (index / count) *
            Math.PI *
            2 +
          ring * 0.35;

        return {
          position: new Vector3(
            Math.cos(angle) * radius,
            Math.sin(angle) *
              radius *
              0.62,
            Math.sin(
              angle * 1.6,
            ) * 0.5,
          ),
          color:
            index % 5 === 0
              ? GREEN
              : index % 4 === 0
                ? PURPLE
                : index % 3 === 0
                  ? TEAL
                  : BLUE,
          size:
            ring === 1
              ? 0.12
              : 0.07,
        };
      },
    );
  }, [compact]);

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y =
      state.clock.elapsedTime *
      0.025;

    group.current.rotation.z =
      Math.sin(
        state.clock.elapsedTime *
          0.12,
      ) * 0.035;
  });

  return (
    <group
      ref={group}
      scale={compact ? 0.76 : 1}
    >
      <VentureCore
        scale={0.76}
        intensity={1}
      />

      {nodes.map(
        (node, index) => (
          <group key={index}>
            <Node
              position={[
                node.position.x,
                node.position.y,
                node.position.z,
              ]}
              color={node.color}
              size={node.size}
              glow={
                index % 5 === 0
              }
            />

            {index < 8 && (
              <Connection
                from={
                  new Vector3(
                    0,
                    0,
                    0,
                  )
                }
                to={node.position}
                color={node.color}
                opacity={0.12}
              />
            )}
          </group>
        ),
      )}

      <OrbitRing
        radius={1.7}
        color={TEAL}
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
        opacity={0.07}
      />

      <OrbitRing
        radius={3}
        color={BLUE}
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
        opacity={0.045}
      />
    </group>
  );
}

/* ============================================================
   CTA
   Everything resolves into one clear luminous venture core.
============================================================ */

function CtaWorld({
  compact,
}: {
  compact: boolean;
}) {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    const time =
      state.clock.elapsedTime;

    group.current.rotation.y =
      time * 0.08;

    const pulse =
      1 +
      Math.sin(time * 0.8) *
        0.025;

    group.current.scale.setScalar(
      pulse,
    );
  });

  return (
    <group
      ref={group}
      scale={compact ? 0.78 : 1}
    >
      <VentureCore
        scale={1.08}
        intensity={1.45}
        color={TEAL}
      />

      <OrbitRing
        radius={1.15}
        color={TEAL}
        rotation={[
          0.7,
          0.5,
          0.1,
        ]}
        opacity={0.22}
      />

      <OrbitRing
        radius={1.55}
        color={BLUE}
        rotation={[
          1.4,
          0.15,
          0.7,
        ]}
        opacity={0.12}
      />

      <OrbitRing
        radius={2.05}
        color={PURPLE}
        rotation={[
          0.4,
          1.1,
          0.2,
        ]}
        opacity={0.07}
      />

      <Sparkles
        count={compact ? 20 : 40}
        scale={[
          5,
          4,
          3,
        ]}
        size={1.2}
        speed={0.16}
        opacity={0.24}
        color={TEAL}
      />
    </group>
  );
}

/* ============================================================
   SPATIAL SCENE TRANSITION

   We avoid fading entire scenes in/out.
   Instead, inactive ecosystems move deeper into space while
   the current state occupies the visual field.
============================================================ */

function VenturesTransitionGroup({
  scene,
  children,
}: {
  scene: VenturesSceneName;
  children: ReactNode;
}) {
  const group = useRef<Group>(null);

  const {
    activeScene,
    sceneProgress,
  } = useVenturesSceneExperience();

  useFrame((_, delta) => {
    if (!group.current) {
      return;
    }

    const activeIndex =
      SCENE_INDEX[activeScene];

    const index =
      SCENE_INDEX[scene];

    const difference =
      index - activeIndex;

    const progress =
      sceneProgress.current[scene];

    const weight =
      scene === activeScene
        ? Math.max(
            0.65,
            getSceneWeight(progress),
          )
        : 0;

    const targetZ =
      difference === 0
        ? 0
        : -6 -
          Math.abs(difference) *
            1.8;

    const targetY =
      difference * -0.75;

    const targetX =
      difference === 0
        ? 0
        : difference > 0
          ? 1.6
          : -1.6;

    const targetScale =
      difference === 0
        ? 0.96 + weight * 0.04
        : 0.72;

    group.current.position.x =
      MathUtils.damp(
        group.current.position.x,
        targetX,
        3.2,
        delta,
      );

    group.current.position.y =
      MathUtils.damp(
        group.current.position.y,
        targetY,
        3.2,
        delta,
      );

    group.current.position.z =
      MathUtils.damp(
        group.current.position.z,
        targetZ,
        3.4,
        delta,
      );

    const scale =
      MathUtils.damp(
        group.current.scale.x,
        targetScale,
        3.4,
        delta,
      );

    group.current.scale.setScalar(
      scale,
    );

    group.current.rotation.y =
      MathUtils.damp(
        group.current.rotation.y,
        difference === 0
          ? 0
          : difference * 0.08,
        3,
        delta,
      );

    group.current.visible =
      Math.abs(difference) <= 1;
  });

  return (
    <group ref={group}>
      {children}
    </group>
  );
}

/* ============================================================
   DIRECTOR
============================================================ */

function VenturesSceneDirector() {
  const compact =
    useCompactScene();

  return (
    <group>
      <VenturesTransitionGroup scene="hero">
        <HeroWorld compact={compact} />
      </VenturesTransitionGroup>

      <VenturesTransitionGroup scene="philosophy">
        <PhilosophyWorld
          compact={compact}
        />
      </VenturesTransitionGroup>

      <VenturesTransitionGroup scene="portfolio">
        <PortfolioWorld
          compact={compact}
        />
      </VenturesTransitionGroup>

      <VenturesTransitionGroup scene="featured">
        <FeaturedWorld
          compact={compact}
        />
      </VenturesTransitionGroup>

      <VenturesTransitionGroup scene="emergence">
        <EmergenceWorld
          compact={compact}
        />
      </VenturesTransitionGroup>

      <VenturesTransitionGroup scene="capabilities">
        <CapabilitiesWorld
          compact={compact}
        />
      </VenturesTransitionGroup>

      <VenturesTransitionGroup scene="stages">
        <StagesWorld
          compact={compact}
        />
      </VenturesTransitionGroup>

      <VenturesTransitionGroup scene="future">
        <FutureWorld
          compact={compact}
        />
      </VenturesTransitionGroup>

      <VenturesTransitionGroup scene="cta">
        <CtaWorld compact={compact} />
      </VenturesTransitionGroup>
    </group>
  );
}

/* ============================================================
   CAMERA

   The camera shifts its framing depending on what the HTML
   needs. Featured Venture deliberately moves the 3D subject
   to one side so Adaptcues content has room.
============================================================ */

function VenturesCameraRig() {
  const { camera } = useThree();

  const {
    activeScene,
  } = useVenturesSceneExperience();

  const pointer =
    useGlobalPointer();

  const reducedMotion =
    useReducedMotion();

  useFrame((_, delta) => {
    const perspectiveCamera =
      camera as PerspectiveCamera;

    let targetX = 0;
    let targetY = 0;
    let targetZ = 7.8;

    switch (activeScene) {
      case "hero":
        targetX = 1.05;
        targetY = 0.05;
        targetZ = 8.2;
        break;

      case "philosophy":
        targetX = 0.8;
        targetY = 0;
        targetZ = 8.4;
        break;

      case "portfolio":
        targetX = 0;
        targetY = 0;
        targetZ = 8.7;
        break;

      case "featured":
        targetX = 0.9;
        targetY = 0;
        targetZ = 7.7;
        break;

      case "emergence":
        targetX = 0;
        targetY = 0;
        targetZ = 8.5;
        break;

      case "capabilities":
        targetX = 0;
        targetY = 0;
        targetZ = 8.6;
        break;

      case "stages":
        targetX = 0;
        targetY = 0;
        targetZ = 8.4;
        break;

      case "future":
        targetX = 0;
        targetY = 0;
        targetZ = 9.2;
        break;

      case "cta":
        targetX = 0.8;
        targetY = 0;
        targetZ = 7.4;
        break;
    }

    if (!reducedMotion) {
      targetX +=
        pointer.current.x * 0.22;

      targetY +=
        pointer.current.y * 0.15;
    }

    perspectiveCamera.position.x =
      MathUtils.damp(
        perspectiveCamera.position.x,
        targetX,
        2.6,
        delta,
      );

    perspectiveCamera.position.y =
      MathUtils.damp(
        perspectiveCamera.position.y,
        targetY,
        2.6,
        delta,
      );

    perspectiveCamera.position.z =
      MathUtils.damp(
        perspectiveCamera.position.z,
        targetZ,
        2.6,
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
   LIGHTING
============================================================ */

function VenturesLighting() {
  return (
    <>
      <ambientLight intensity={0.35} />

      <directionalLight
        position={[4, 5, 6]}
        intensity={1.4}
        color="#FFFFFF"
      />

      <pointLight
        position={[4, 1, 4]}
        intensity={18}
        distance={12}
        color={BLUE}
      />

      <pointLight
        position={[-4, -1, 3]}
        intensity={14}
        distance={11}
        color={TEAL}
      />

      <pointLight
        position={[0, 4, -2]}
        intensity={11}
        distance={10}
        color={PURPLE}
      />
    </>
  );
}

/* ============================================================
   BACKGROUND FIELD
============================================================ */

function BackgroundField() {
  const compact =
    useCompactScene();

  return (
    <Sparkles
      count={compact ? 28 : 65}
      scale={[12, 8, 6]}
      size={0.7}
      speed={0.08}
      opacity={0.12}
      color="#60A5FA"
    />
  );
}

/* ============================================================
   CANVAS
============================================================ */

export function VenturesScene() {
  const compact =
    useCompactScene();

  return (
    <Canvas
      dpr={compact ? [1, 1.25] : [1, 1.75]}
      camera={{
        position: [0, 0, 8.2],
        fov: compact ? 52 : 46,
        near: 0.1,
        far: 100,
      }}
      gl={{
        alpha: true,
        antialias: !compact,
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
    >
      <VenturesLighting />

      <BackgroundField />

      <VenturesSceneDirector />

      <VenturesCameraRig />
    </Canvas>
  );
}