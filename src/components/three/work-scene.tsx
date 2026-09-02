"use client";

import { Canvas } from "@react-three/fiber";
import {
  ACESFilmicToneMapping,
  Color,
} from "three";

const BLUE = "#3B82F6";
const TEAL = "#22D3EE";
const VIOLET = "#A855F7";
const ORANGE = "#F97316";
const WHITE = "#EAF2FF";

type Position = [
  number,
  number,
  number,
];

const STAGES: Array<{
  position: Position;
  color: string;
}> = [
  {
    position: [-2.3, 1.3, 0],
    color: BLUE,
  },
  {
    position: [0, 2, 0],
    color: VIOLET,
  },
  {
    position: [2.3, 1.3, 0],
    color: TEAL,
  },
  {
    position: [2.3, -1.3, 0],
    color: VIOLET,
  },
  {
    position: [0, -2, 0],
    color: ORANGE,
  },
  {
    position: [-2.3, -1.3, 0],
    color: TEAL,
  },
];

function Connection({
  start,
  end,
  color = TEAL,
  opacity = 0.3,
}: {
  start: Position;
  end: Position;
  color?: string;
  opacity?: number;
}) {
  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[
            new Float32Array([
              ...start,
              ...end,
            ]),
            3,
          ]}
        />
      </bufferGeometry>

      <lineBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        depthWrite={false}
      />
    </line>
  );
}

function StaticWorkWorld() {
  return (
    <group
      position={[1.55, 0, -0.5]}
      rotation={[0.08, -0.12, 0]}
    >
      {STAGES.map((stage, index) => {
        const next =
          STAGES[
            (index + 1) %
              STAGES.length
          ];

        return (
          <group key={index}>
            <Connection
              start={stage.position}
              end={next.position}
              color={BLUE}
              opacity={0.28}
            />

            <Connection
              start={stage.position}
              end={[0, 0, 0]}
              color={TEAL}
              opacity={0.18}
            />

            <mesh
              position={stage.position}
            >
              <octahedronGeometry
                args={[0.34, 0]}
              />

              <meshStandardMaterial
                color={stage.color}
                emissive={stage.color}
                emissiveIntensity={0.5}
                roughness={0.32}
                metalness={0.25}
              />
            </mesh>

            <mesh
              position={stage.position}
              scale={1.8}
            >
              <octahedronGeometry
                args={[0.34, 0]}
              />

              <meshBasicMaterial
                color={stage.color}
                wireframe
                transparent
                opacity={0.08}
                depthWrite={false}
              />
            </mesh>
          </group>
        );
      })}

      <mesh>
        <icosahedronGeometry
          args={[0.9, 1]}
        />

        <meshStandardMaterial
          color={WHITE}
          emissive={BLUE}
          emissiveIntensity={0.4}
          wireframe
          transparent
          opacity={0.85}
        />
      </mesh>

      <mesh scale={0.32}>
        <sphereGeometry
          args={[1, 12, 12]}
        />

        <meshStandardMaterial
          color={WHITE}
          emissive={TEAL}
          emissiveIntensity={1}
          roughness={0.2}
          metalness={0.3}
        />
      </mesh>

      <mesh
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
      >
        <torusGeometry
          args={[
            2.85,
            0.008,
            4,
            64,
          ]}
        />

        <meshBasicMaterial
          color={BLUE}
          transparent
          opacity={0.07}
          depthWrite={false}
        />
      </mesh>

      <mesh
        rotation={[
          0.7,
          0.4,
          0.2,
        ]}
      >
        <torusGeometry
          args={[
            2.35,
            0.007,
            4,
            64,
          ]}
        />

        <meshBasicMaterial
          color={VIOLET}
          transparent
          opacity={0.06}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function Lighting() {
  return (
    <>
      <ambientLight intensity={0.72} />

      <directionalLight
        position={[5, 6, 6]}
        intensity={1.25}
        color={WHITE}
      />

      <pointLight
        position={[2, 1, 4]}
        intensity={0.55}
        color={TEAL}
      />
    </>
  );
}

export function WorkScene() {
  return (
    <Canvas
      frameloop="demand"
      dpr={1}
      camera={{
        position: [0, 0, 8.7],
        fov: 43,
        near: 0.1,
        far: 50,
      }}
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
    >
      <Lighting />
      <StaticWorkWorld />
    </Canvas>
  );
}