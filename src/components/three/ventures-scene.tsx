"use client";

import { Canvas } from "@react-three/fiber";
import {
  ACESFilmicToneMapping,
  AdditiveBlending,
  BufferGeometry,
  CatmullRomCurve3,
  Color,
  Float32BufferAttribute,
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

const ORIGIN =
  new Vector3(0, 0, 0);

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

type NodeProps = {
  position: [
    number,
    number,
    number,
  ];
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
            10,
            10,
          ]}
        />

        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={
            glow ? 1.1 : 0.35
          }
          roughness={0.38}
          metalness={0.16}
        />
      </mesh>

      {glow && (
        <mesh scale={2}>
          <sphereGeometry
            args={[
              size,
              8,
              8,
            ]}
          />

          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.045}
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

function Connection({
  from,
  to,
  color = BLUE,
  opacity = 0.2,
}: {
  from: Vector3;
  to: Vector3;
  color?: string;
  opacity?: number;
}) {
  const geometry =
    useMemo(() => {
      const mid =
        from.clone().lerp(
          to,
          0.5,
        );

      mid.z += 0.18;

      const curve =
        new CatmullRomCurve3([
          from,
          mid,
          to,
        ]);

      const points =
        curve.getPoints(12);

      const positions =
        new Float32Array(
          points.length * 3,
        );

      points.forEach(
        (point, index) => {
          positions[
            index * 3
          ] = point.x;

          positions[
            index * 3 + 1
          ] = point.y;

          positions[
            index * 3 + 2
          ] = point.z;
        },
      );

      const result =
        new BufferGeometry();

      result.setAttribute(
        "position",
        new Float32BufferAttribute(
          positions,
          3,
        ),
      );

      return result;
    }, [from, to]);

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

function VentureCore({
  scale = 1,
}: {
  scale?: number;
}) {
  return (
    <group scale={scale}>
      <mesh>
        <icosahedronGeometry
          args={[0.65, 1]}
        />

        <meshStandardMaterial
          color={NAVY}
          emissive={TEAL}
          emissiveIntensity={0.5}
          roughness={0.28}
          metalness={0.42}
        />
      </mesh>

      <mesh scale={1.18}>
        <icosahedronGeometry
          args={[0.65, 0]}
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
    </group>
  );
}

function VentureNode({
  position,
  color,
  size,
  featured = false,
}: {
  position: Vector3;
  color: string;
  size: number;
  featured?: boolean;
}) {
  return (
    <group
      position={[
        position.x,
        position.y,
        position.z,
      ]}
    >
      {featured ? (
        <>
          <mesh>
            <dodecahedronGeometry
              args={[size * 2.8, 0]}
            />

            <meshStandardMaterial
              color="#071827"
              emissive={TEAL}
              emissiveIntensity={0.62}
              roughness={0.22}
              metalness={0.48}
            />
          </mesh>

          <mesh scale={1.16}>
            <dodecahedronGeometry
              args={[size * 2.8, 0]}
            />

            <meshBasicMaterial
              color={TEAL}
              wireframe
              transparent
              opacity={0.22}
              blending={
                AdditiveBlending
              }
              depthWrite={false}
            />
          </mesh>
        </>
      ) : (
        <Node
          position={[0, 0, 0]}
          color={color}
          size={size}
          glow
        />
      )}

      <OrbitRing
        radius={
          featured
            ? 0.72
            : size * 2.7
        }
        color={color}
        rotation={[
          1.1,
          0.3,
          0.15,
        ]}
        opacity={
          featured
            ? 0.16
            : 0.08
        }
      />
    </group>
  );
}

function OrbitRing({
  radius,
  color,
  rotation = [0, 0, 0],
  opacity = 0.12,
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
          4,
          48,
        ]}
      />

      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        blending={
          AdditiveBlending
        }
        depthWrite={false}
      />
    </mesh>
  );
}

function StaticVenturesWorld({
  compact,
}: {
  compact: boolean;
}) {
  const ventures =
    useMemo(
      () => [
        {
          position:
            new Vector3(
              -2.15,
              1.25,
              0.1,
            ),
          color: BLUE,
          size: 0.16,
          featured: false,
        },
        {
          position:
            new Vector3(
              2.1,
              1,
              -0.1,
            ),
          color: TEAL,
          size: 0.2,
          featured: true,
        },
        {
          position:
            new Vector3(
              -1.8,
              -1.45,
              -0.1,
            ),
          color: PURPLE,
          size: 0.14,
          featured: false,
        },
        {
          position:
            new Vector3(
              2,
              -1.4,
              0.15,
            ),
          color: GREEN,
          size: 0.15,
          featured: false,
        },
      ],
      [],
    );

  return (
    <group
      position={
        compact
          ? [0, 0, -0.8]
          : [1.75, 0, -1]
      }
      scale={
        compact ? 0.72 : 1
      }
      rotation={[
        0.06,
        -0.12,
        0,
      ]}
    >
      {/* Evolvaer venture engine */}
      <VentureCore scale={0.88} />

      {ventures.map(
        (venture, index) => (
          <group key={index}>
            <Connection
              from={ORIGIN}
              to={
                venture.position
              }
              color={
                venture.color
              }
              opacity={
                venture.featured
                  ? 0.34
                  : 0.22
              }
            />

            <VentureNode
              position={
                venture.position
              }
              color={
                venture.color
              }
              size={
                venture.size
              }
              featured={
                venture.featured
              }
            />
          </group>
        ),
      )}

      {/* Portfolio orbit */}
      <OrbitRing
        radius={2.5}
        color={TEAL}
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
        opacity={0.07}
      />

      <OrbitRing
        radius={2.9}
        color={BLUE}
        rotation={[
          0.65,
          0.4,
          0.25,
        ]}
        opacity={0.045}
      />

      {/* Future venture signals */}
      {!compact && (
        <>
          <Node
            position={[
              0.25,
              2.35,
              -0.35,
            ]}
            color={PURPLE}
            size={0.04}
          />

          <Node
            position={[
              2.9,
              0.15,
              -0.45,
            ]}
            color={TEAL}
            size={0.035}
          />

          <Node
            position={[
              -2.75,
              -0.2,
              -0.4,
            ]}
            color={BLUE}
            size={0.035}
          />

          <Node
            position={[
              0,
              -2.4,
              -0.35,
            ]}
            color={GREEN}
            size={0.04}
          />
        </>
      )}
    </group>
  );
}

function VenturesLighting() {
  return (
    <>
      <ambientLight
        intensity={0.5}
      />

      <directionalLight
        position={[4, 5, 6]}
        intensity={1.5}
        color="#FFFFFF"
      />

      <pointLight
        position={[2, 1, 4]}
        intensity={0.55}
        color={TEAL}
      />
    </>
  );
}

export function VenturesScene() {
  const compact =
    useCompactScene();

  return (
    <Canvas
      dpr={1}
      frameloop="demand"
      camera={{
        position: compact
          ? [0, 0, 8.8]
          : [0, 0, 8.4],
        fov: compact ? 50 : 44,
        near: 0.1,
        far: 50,
      }}
      gl={{
        alpha: true,
        antialias: false,
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
      <VenturesLighting />

      <StaticVenturesWorld
        compact={compact}
      />
    </Canvas>
  );
}