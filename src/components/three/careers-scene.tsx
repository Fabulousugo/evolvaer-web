"use client";

import { Canvas } from "@react-three/fiber";
import {
  ACESFilmicToneMapping,
  AdditiveBlending,
  CatmullRomCurve3,
  Color,
  TubeGeometry,
  Vector3,
} from "three";
import {
  useEffect,
  useMemo,
  useState,
} from "react";

const BLUE = "#2563EB";
const LIGHT_BLUE = "#60A5FA";
const TEAL = "#22D3EE";
const GREEN = "#10B981";
const PURPLE = "#A855F7";
const NAVY = "#0A1D2F";

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

function TalentNode({
  position,
  color = BLUE,
  size = 0.11,
  glow = true,
}: {
  position: Vec3;
  color?: string;
  size?: number;
  glow?: boolean;
}) {
  return (
    <group position={position}>
      {glow && (
        <mesh>
          <sphereGeometry
            args={[
              size * 2.4,
              12,
              12,
            ]}
          />

          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.045}
            depthWrite={false}
            blending={
              AdditiveBlending
            }
          />
        </mesh>
      )}

      <mesh>
        <sphereGeometry
          args={[
            size,
            14,
            14,
          ]}
        />

        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.85}
          roughness={0.3}
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
  opacity = 0.2,
}: {
  start: Vec3;
  end: Vec3;
  color?: string;
  opacity?: number;
}) {
  const geometry =
    useMemo(() => {
      const startVector =
        new Vector3(...start);

      const endVector =
        new Vector3(...end);

      const midpoint =
        startVector
          .clone()
          .lerp(
            endVector,
            0.5,
          );

      midpoint.z += 0.18;

      const curve =
        new CatmullRomCurve3([
          startVector,
          midpoint,
          endVector,
        ]);

      return new TubeGeometry(
        curve,
        16,
        0.007,
        5,
        false,
      );
    }, [start, end]);

  useEffect(() => {
    return () => {
      geometry.dispose();
    };
  }, [geometry]);

  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        depthWrite={false}
        blending={
          AdditiveBlending
        }
      />
    </mesh>
  );
}

function CapabilityCore() {
  return (
    <group>
      <mesh>
        <icosahedronGeometry
          args={[0.7, 2]}
        />

        <meshStandardMaterial
          color={NAVY}
          emissive={TEAL}
          emissiveIntensity={0.42}
          roughness={0.24}
          metalness={0.48}
          transparent
          opacity={0.9}
        />
      </mesh>

      <mesh scale={1.16}>
        <icosahedronGeometry
          args={[0.7, 1]}
        />

        <meshBasicMaterial
          color={TEAL}
          wireframe
          transparent
          opacity={0.17}
          depthWrite={false}
        />
      </mesh>

      <mesh
        scale={1.48}
        rotation={[
          0.7,
          0.3,
          0.15,
        ]}
      >
        <torusGeometry
          args={[
            0.67,
            0.008,
            6,
            64,
          ]}
        />

        <meshBasicMaterial
          color={TEAL}
          transparent
          opacity={0.17}
          depthWrite={false}
        />
      </mesh>

      <mesh scale={0.27}>
        <sphereGeometry
          args={[1, 12, 12]}
        />

        <meshStandardMaterial
          color="#EAF3FF"
          emissive={TEAL}
          emissiveIntensity={0.85}
          roughness={0.18}
        />
      </mesh>
    </group>
  );
}

function TeamCluster({
  position,
  color,
  compact,
}: {
  position: Vec3;
  color: string;
  compact: boolean;
}) {
  return (
    <group position={position}>
      <TalentNode
        position={[0, 0, 0]}
        color={color}
        size={
          compact
            ? 0.13
            : 0.15
        }
      />

      <TalentNode
        position={[
          -0.35,
          0.28,
          -0.15,
        ]}
        color={color}
        size={0.055}
        glow={false}
      />

      <TalentNode
        position={[
          0.38,
          0.2,
          -0.2,
        ]}
        color={color}
        size={0.055}
        glow={false}
      />

      {!compact && (
        <TalentNode
          position={[
            0.05,
            -0.4,
            0.08,
          ]}
          color={color}
          size={0.055}
          glow={false}
        />
      )}

      <mesh
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
      >
        <torusGeometry
          args={[
            0.58,
            0.005,
            4,
            40,
          ]}
        />

        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.06}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function StaticCareersWorld({
  compact,
}: {
  compact: boolean;
}) {
  const teams =
    useMemo(
      () => [
        {
          position: [
            -2.25,
            1.3,
            -0.25,
          ] as Vec3,
          color: BLUE,
        },
        {
          position: [
            2.2,
            1.2,
            -0.4,
          ] as Vec3,
          color: PURPLE,
        },
        {
          position: [
            -1.85,
            -1.45,
            -0.4,
          ] as Vec3,
          color: TEAL,
        },
        {
          position: [
            2,
            -1.4,
            -0.2,
          ] as Vec3,
          color: GREEN,
        },
      ],
      [],
    );

  return (
    <group
      position={
        compact
          ? [0, 0, -0.9]
          : [1.65, 0, -1]
      }
      scale={
        compact ? 0.72 : 1
      }
      rotation={[
        0.06,
        -0.1,
        0,
      ]}
    >
      {/* Evolvaer team core */}
      <CapabilityCore />

      {/* Teams / disciplines */}
      {teams.map(
        (team, index) => (
          <group key={index}>
            <Connection
              start={
                team.position
              }
              end={[0, 0, 0]}
              color={team.color}
              opacity={0.22}
            />

            <TeamCluster
              position={
                team.position
              }
              color={team.color}
              compact={compact}
            />
          </group>
        ),
      )}

      {/* Collaboration field */}
      <mesh
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
      >
        <torusGeometry
          args={[
            2.72,
            0.007,
            4,
            64,
          ]}
        />

        <meshBasicMaterial
          color={TEAL}
          transparent
          opacity={0.065}
          depthWrite={false}
        />
      </mesh>

      <mesh
        rotation={[
          0.72,
          0.4,
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
          depthWrite={false}
        />
      </mesh>

      {/* Future talent */}
      {!compact && (
        <>
          <TalentNode
            position={[
              0.2,
              2.55,
              -0.5,
            ]}
            color={
              LIGHT_BLUE
            }
            size={0.045}
            glow={false}
          />

          <TalentNode
            position={[
              2.9,
              0.05,
              -0.55,
            ]}
            color={TEAL}
            size={0.04}
            glow={false}
          />

          <TalentNode
            position={[
              -2.8,
              -0.15,
              -0.55,
            ]}
            color={PURPLE}
            size={0.04}
            glow={false}
          />

          <TalentNode
            position={[
              0,
              -2.5,
              -0.45,
            ]}
            color={GREEN}
            size={0.04}
            glow={false}
          />
        </>
      )}
    </group>
  );
}

function SceneLighting() {
  return (
    <>
      <ambientLight
        intensity={0.62}
      />

      <directionalLight
        position={[4, 5, 6]}
        intensity={1.35}
        color="#FFFFFF"
      />

      <pointLight
        position={[-3, 2, 4]}
        intensity={0.5}
        color={BLUE}
      />

      <pointLight
        position={[3, -1, 4]}
        intensity={0.45}
        color={TEAL}
      />
    </>
  );
}

export function CareersScene() {
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
      style={{
        width: "100%",
        height: "100%",
        background:
          "transparent",
      }}
    >
      <SceneLighting />

      <StaticCareersWorld
        compact={compact}
      />
    </Canvas>
  );
}