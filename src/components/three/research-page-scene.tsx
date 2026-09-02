"use client";

import { Canvas } from "@react-three/fiber";
import {
  ACESFilmicToneMapping,
  AdditiveBlending,
  BufferGeometry,
  CatmullRomCurve3,
  Color,
  Vector3,
} from "three";
import {
  useEffect,
  useMemo,
  useState,
} from "react";

const BLUE = "#3B82F6";
const TEAL = "#22D3EE";
const GREEN = "#10B981";
const PURPLE = "#A855F7";
const NAVY = "#0A1D2F";

const ORIGIN = new Vector3(0, 0, 0);

type Vec3 = [
  number,
  number,
  number,
];

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

function ResearchNode({
  position,
  color = BLUE,
  scale = 1,
  active = false,
}: {
  position: Vec3;
  color?: string;
  scale?: number;
  active?: boolean;
}) {
  return (
    <group
      position={position}
      scale={scale}
    >
      <mesh>
        <sphereGeometry
          args={[0.075, 10, 10]}
        />

        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={
            active ? 1.15 : 0.4
          }
          roughness={0.45}
          metalness={0.06}
        />
      </mesh>

      {active && (
        <mesh scale={2.1}>
          <sphereGeometry
            args={[0.075, 8, 8]}
          />

          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.065}
            blending={
              AdditiveBlending
            }
            depthWrite={false}
          />
        </mesh>
      )}
    </group>
  );
}

function ResearchConnection({
  start,
  end,
  color = BLUE,
  opacity = 0.18,
  curve = 0.2,
}: {
  start: Vector3;
  end: Vector3;
  color?: string;
  opacity?: number;
  curve?: number;
}) {
  const geometry =
    useMemo(() => {
      const midpoint =
        new Vector3()
          .addVectors(start, end)
          .multiplyScalar(0.5);

      midpoint.z += curve;
      midpoint.y +=
        curve * 0.25;

      const path =
        new CatmullRomCurve3([
          start,
          midpoint,
          end,
        ]);

      return new BufferGeometry()
        .setFromPoints(
          path.getPoints(12),
        );
    }, [start, end, curve]);

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
        blending={
          AdditiveBlending
        }
        depthWrite={false}
      />
    </lineSegments>
  );
}

function ResearchCore() {
  return (
    <group>
      <mesh>
        <icosahedronGeometry
          args={[0.62, 1]}
        />

        <meshStandardMaterial
          color={NAVY}
          emissive={TEAL}
          emissiveIntensity={0.42}
          roughness={0.3}
          metalness={0.18}
        />
      </mesh>

      <mesh scale={1.15}>
        <icosahedronGeometry
          args={[0.62, 1]}
        />

        <meshBasicMaterial
          color={TEAL}
          wireframe
          transparent
          opacity={0.16}
          blending={
            AdditiveBlending
          }
          depthWrite={false}
        />
      </mesh>

      <mesh scale={0.26}>
        <sphereGeometry
          args={[1, 12, 12]}
        />

        <meshStandardMaterial
          color="#EAF3FF"
          emissive={TEAL}
          emissiveIntensity={0.9}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

function ResearchCluster({
  position,
  color,
  seed,
  compact,
}: {
  position: Vec3;
  color: string;
  seed: number;
  compact: boolean;
}) {
  const nodes =
    useMemo(() => {
      const count =
        compact ? 4 : 7;

      return Array.from(
        { length: count },
        (_, index) => {
          const angle =
            index * 2.13 + seed;

          const radius =
            0.38 +
            (index % 3) * 0.17;

          return [
            Math.cos(angle) *
              radius,

            Math.sin(
              angle * 1.4,
            ) * radius,

            Math.sin(angle) *
              radius *
              0.65,
          ] as Vec3;
        },
      );
    }, [seed, compact]);

  const clusterOrigin =
    useMemo(
      () =>
        new Vector3(
          position[0],
          position[1],
          position[2],
        ),
      [position],
    );

  return (
    <group position={position}>
      <ResearchNode
        position={[0, 0, 0]}
        color={color}
        scale={1.35}
        active
      />

      {nodes.map(
        (node, index) => {
          const nodeVector =
            new Vector3(
              position[0] +
                node[0],
              position[1] +
                node[1],
              position[2] +
                node[2],
            );

          return (
            <group key={index}>
              <ResearchNode
                position={node}
                color={color}
                scale={0.5}
                active={
                  index === 0
                }
              />

              {!compact &&
                index < 3 && (
                  <group
                    position={[
                      -position[0],
                      -position[1],
                      -position[2],
                    ]}
                  >
                    <ResearchConnection
                      start={
                        clusterOrigin
                      }
                      end={
                        nodeVector
                      }
                      color={color}
                      opacity={0.1}
                      curve={
                        index %
                          2 ===
                        0
                          ? 0.08
                          : -0.08
                      }
                    />
                  </group>
                )}
            </group>
          );
        },
      )}
    </group>
  );
}

function StaticResearchWorld({
  compact,
}: {
  compact: boolean;
}) {
  const clusters =
    useMemo(
      () => [
        {
          position: [
            -2.15,
            1.25,
            0,
          ] as Vec3,
          color: BLUE,
          seed: 0.5,
        },
        {
          position: [
            2,
            1.2,
            -0.2,
          ] as Vec3,
          color: TEAL,
          seed: 1.2,
        },
        {
          position: [
            -1.75,
            -1.35,
            0.1,
          ] as Vec3,
          color: PURPLE,
          seed: 2,
        },
        {
          position: [
            2.05,
            -1.25,
            0,
          ] as Vec3,
          color: GREEN,
          seed: 2.7,
        },
      ],
      [],
    );

  return (
    <group
      position={
        compact
          ? [0, 0, -0.8]
          : [1.65, 0, -1]
      }
      scale={
        compact ? 0.72 : 1
      }
      rotation={[
        0.07,
        -0.12,
        0,
      ]}
    >
      <ResearchCore />

      {clusters.map(
        (
          cluster,
          index,
        ) => {
          const destination =
            new Vector3(
              ...cluster.position,
            );

          return (
            <group key={index}>
              <ResearchConnection
                start={ORIGIN}
                end={destination}
                color={
                  cluster.color
                }
                opacity={0.22}
                curve={
                  index % 2 ===
                  0
                    ? 0.25
                    : -0.25
                }
              />

              <ResearchCluster
                position={
                  cluster.position
                }
                color={
                  cluster.color
                }
                seed={
                  cluster.seed
                }
                compact={
                  compact
                }
              />
            </group>
          );
        },
      )}

      {/* Research field boundary */}
      <mesh
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
      >
        <torusGeometry
          args={[
            2.75,
            0.007,
            4,
            64,
          ]}
        />

        <meshBasicMaterial
          color={BLUE}
          transparent
          opacity={0.055}
          blending={
            AdditiveBlending
          }
          depthWrite={false}
        />
      </mesh>

      <mesh
        rotation={[
          0.65,
          0.45,
          0.2,
        ]}
      >
        <torusGeometry
          args={[
            2.35,
            0.006,
            4,
            64,
          ]}
        />

        <meshBasicMaterial
          color={PURPLE}
          transparent
          opacity={0.045}
          blending={
            AdditiveBlending
          }
          depthWrite={false}
        />
      </mesh>

      {!compact && (
        <>
          <ResearchNode
            position={[
              0.2,
              2.55,
              -0.3,
            ]}
            color={TEAL}
            scale={0.45}
          />

          <ResearchNode
            position={[
              2.85,
              0,
              -0.4,
            ]}
            color={BLUE}
            scale={0.4}
          />

          <ResearchNode
            position={[
              -2.75,
              -0.1,
              -0.35,
            ]}
            color={PURPLE}
            scale={0.4}
          />
        </>
      )}
    </group>
  );
}

function ResearchLighting() {
  return (
    <>
      <ambientLight
        intensity={0.62}
      />

      <directionalLight
        position={[4, 6, 7]}
        intensity={1.35}
        color="#FFFFFF"
      />

      <pointLight
        position={[2, 1, 4]}
        intensity={0.45}
        color={TEAL}
      />
    </>
  );
}

export function ResearchPageScene() {
  const compact =
    useCompactScene();

  return (
    <Canvas
      camera={{
        position: compact
          ? [0, 0, 8.9]
          : [0, 0, 8.5],
        fov: compact ? 52 : 45,
        near: 0.1,
        far: 50,
      }}
      dpr={1}
      frameloop="demand"
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
      style={{
        width: "100%",
        height: "100%",
        background:
          "transparent",
      }}
    >
      <ResearchLighting />

      <StaticResearchWorld
        compact={compact}
      />
    </Canvas>
  );
}