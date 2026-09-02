"use client";

import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { useTheme } from "@/src/components/theme-provider";

type Vec3 = [
  number,
  number,
  number,
];

function useCompactScene() {
  const [compact, setCompact] =
    useState(false);

  useEffect(() => {
    const media =
      window.matchMedia(
        "(max-width: 767px)",
      );

    const update = () => {
      setCompact(media.matches);
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
        direction.clone().normalize(),
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
        depthWrite={false}
      />
    </mesh>
  );
}

function StaticAboutWorld({
  isDark,
  compact,
}: {
  isDark: boolean;
  compact: boolean;
}) {
  const nodes = useMemo<
    Array<{
      position: Vec3;
      color: string;
      type:
        | "research"
        | "engineering"
        | "ventures"
        | "innovation";
    }>
  >(
    () => [
      {
        position: [
          -2.05,
          1.25,
          0,
        ],
        color: "#3B82F6",
        type: "research",
      },
      {
        position: [
          2.05,
          1.2,
          -0.15,
        ],
        color: "#22D3EE",
        type: "engineering",
      },
      {
        position: [
          -1.85,
          -1.35,
          -0.1,
        ],
        color: "#A855F7",
        type: "ventures",
      },
      {
        position: [
          1.9,
          -1.3,
          0.1,
        ],
        color: "#3B82F6",
        type: "innovation",
      },
    ],
    [],
  );

  return (
    <group
      position={
        compact
          ? [0, 0, -2.3]
          : [1.45, 0, -2.35]
      }
      scale={compact ? 0.76 : 1}
      rotation={[0.06, -0.1, 0]}
    >
      {nodes.map(
        (node, index) => (
          <group key={node.type}>
            <Connection
              start={[0, 0, 0]}
              end={node.position}
              color={node.color}
              opacity={
                isDark
                  ? 0.32
                  : 0.14
              }
            />

            <mesh
              position={node.position}
            >
              {index === 0 && (
                <icosahedronGeometry
                  args={[0.3, 1]}
                />
              )}

              {index === 1 && (
                <octahedronGeometry
                  args={[0.31, 0]}
                />
              )}

              {index === 2 && (
                <dodecahedronGeometry
                  args={[0.29, 0]}
                />
              )}

              {index === 3 && (
                <boxGeometry
                  args={[
                    0.46,
                    0.46,
                    0.46,
                  ]}
                />
              )}

              <meshStandardMaterial
                color={node.color}
                emissive={node.color}
                emissiveIntensity={
                  isDark
                    ? 0.28
                    : 0.035
                }
                roughness={0.36}
                metalness={0.18}
              />
            </mesh>

            <mesh
              position={node.position}
              scale={1.65}
            >
              <sphereGeometry
                args={[
                  0.27,
                  10,
                  10,
                ]}
              />

              <meshBasicMaterial
                color={node.color}
                wireframe
                transparent
                opacity={
                  isDark
                    ? 0.09
                    : 0.045
                }
                depthWrite={false}
              />
            </mesh>
          </group>
        ),
      )}

      {/* Central Evolvaer core */}
      <mesh>
        <icosahedronGeometry
          args={[0.62, 2]}
        />

        <meshStandardMaterial
          color={
            isDark
              ? "#F4F8FF"
              : "#0A1D2F"
          }
          emissive="#3B82F6"
          emissiveIntensity={
            isDark ? 0.18 : 0.015
          }
          roughness={0.28}
          metalness={0.25}
        />
      </mesh>

      <mesh scale={1.18}>
        <icosahedronGeometry
          args={[0.62, 1]}
        />

        <meshBasicMaterial
          color="#22D3EE"
          wireframe
          transparent
          opacity={
            isDark ? 0.18 : 0.08
          }
          depthWrite={false}
        />
      </mesh>

      <mesh scale={0.28}>
        <sphereGeometry
          args={[1, 12, 12]}
        />

        <meshStandardMaterial
          color="#EAF3FF"
          emissive="#3B82F6"
          emissiveIntensity={
            isDark ? 0.9 : 0.25
          }
        />
      </mesh>

      {/* Outer structure */}
      <mesh
        rotation={[
          0.7,
          0.3,
          0.15,
        ]}
      >
        <torusGeometry
          args={[
            2.65,
            0.008,
            4,
            64,
          ]}
        />

        <meshBasicMaterial
          color="#3B82F6"
          transparent
          opacity={
            isDark ? 0.11 : 0.05
          }
          depthWrite={false}
        />
      </mesh>

      <mesh
        rotation={[
          1.3,
          -0.25,
          0.45,
        ]}
      >
        <torusGeometry
          args={[
            2.25,
            0.007,
            4,
            64,
          ]}
        />

        <meshBasicMaterial
          color="#A855F7"
          transparent
          opacity={
            isDark ? 0.08 : 0.035
          }
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

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

      <pointLight
        position={[2, 1, 4]}
        intensity={
          isDark ? 0.45 : 0.25
        }
        color="#22D3EE"
      />
    </>
  );
}

export function AboutScene() {
  const {
    theme,
    mounted,
  } = useTheme();

  const compact =
    useCompactScene();

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
        position: [0, 0, 7.4],
        fov: 41,
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
        gl.outputColorSpace =
          THREE.SRGBColorSpace;

        gl.toneMapping =
          THREE.ACESFilmicToneMapping;

        gl.toneMappingExposure =
          isDark ? 1 : 0.92;

        gl.setClearColor(
          0x000000,
          0,
        );
      }}
    >
      <Lighting isDark={isDark} />

      <StaticAboutWorld
        isDark={isDark}
        compact={compact}
      />
    </Canvas>
  );
}