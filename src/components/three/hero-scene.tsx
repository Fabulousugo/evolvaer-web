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
} from "react";

function Sculpture({
  isDark,
}: {
  isDark: boolean;
}) {
  const root = useRef<THREE.Group>(null);

  const goldMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#F4A62A",
        metalness: 0.88,
        roughness: 0.2,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
      }),
    [],
  );

  const midnightMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: isDark ? "#061522" : "#0D1B2A",
        metalness: 0.72,
        roughness: 0.16,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
      }),
    [],
  );

  const glassMaterial = useMemo(
  () =>
    new THREE.MeshPhysicalMaterial({
      color: isDark ? "#789aa5" : "#d8e4e4",
      metalness: 0.03,
      roughness: isDark ? 0.06 : 0.1,
      transmission: isDark ? 0.88 : 0.78,
      thickness: 0.5,
      ior: 1.3,
      transparent: true,
      opacity: isDark ? 0.82 : 0.68,
      clearcoat: 1,
      clearcoatRoughness: 0.04,
      side: THREE.DoubleSide,
    }),
  [isDark],
);
  useFrame((state) => {
    if (!root.current) return;

    const pointerX = state.pointer.x;
    const pointerY = state.pointer.y;

    root.current.rotation.y =
      THREE.MathUtils.lerp(
        root.current.rotation.y,
        -0.23 + pointerX * 0.07,
        0.025,
      );

    root.current.rotation.x =
      THREE.MathUtils.lerp(
        root.current.rotation.x,
        0.08 - pointerY * 0.035,
        0.025,
      );

    root.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.32) *
      0.035;
  });

  return (
    <group
      ref={root}
      scale={1.08}
      rotation={[0.08, -0.23, -0.04]}
      position={[0.15, 0, 0]}
    >
      {/* Large glass ring */}
      <mesh
        rotation={[
          Math.PI * 0.2,
          Math.PI * 0.1,
          Math.PI * 0.18,
        ]}
        position={[0.05, 0.28, -0.18]}
        material={glassMaterial}
      >
        <torusGeometry
          args={[1.62, 0.11, 36, 180]}
        />
      </mesh>

      {/* Second glass ring */}
      <mesh
        rotation={[
          Math.PI * 0.58,
          Math.PI * 0.06,
          -Math.PI * 0.28,
        ]}
        position={[0.15, -0.05, 0.05]}
        material={glassMaterial}
      >
        <torusGeometry
          args={[1.46, 0.115, 36, 180]}
        />
      </mesh>

      {/* Third glass ring */}
      <mesh
        rotation={[
          Math.PI * 0.4,
          Math.PI * 0.48,
          Math.PI * 0.05,
        ]}
        position={[-0.18, -0.18, -0.2]}
        material={glassMaterial}
      >
        <torusGeometry
          args={[1.28, 0.085, 32, 160]}
        />
      </mesh>

      {/* Midnight structural band */}
      <mesh
        rotation={[
          Math.PI * 0.53,
          Math.PI * 0.38,
          Math.PI * 0.12,
        ]}
        position={[-0.12, 0.02, 0.06]}
        material={midnightMaterial}
      >
        <torusGeometry
          args={[1.42, 0.245, 42, 180]}
        />
      </mesh>

      {/* Gold signature line */}
      <mesh
        rotation={[
          Math.PI * 0.53,
          Math.PI * 0.38,
          Math.PI * 0.12,
        ]}
        position={[-0.12, 0.02, 0.06]}
        material={goldMaterial}
      >
        <torusGeometry
          args={[1.42, 0.268, 32, 180]}
        />
      </mesh>

      {/* Inner midnight overlay — hides most of gold,
          leaving a refined golden edge */}
      <mesh
        rotation={[
          Math.PI * 0.53,
          Math.PI * 0.38,
          Math.PI * 0.12,
        ]}
        position={[-0.12, 0.02, 0.075]}
        material={midnightMaterial}
      >
        <torusGeometry
          args={[1.42, 0.235, 42, 180]}
        />
      </mesh>

      {/* Fine secondary gold ring */}
      <mesh
        rotation={[
          Math.PI * 0.18,
          Math.PI * 0.48,
          -Math.PI * 0.2,
        ]}
        position={[0.05, -0.05, -0.32]}
        material={goldMaterial}
      >
        <torusGeometry
          args={[1.08, 0.025, 20, 140]}
        />
      </mesh>
    </group>
  );
}

export function HeroScene() {
    const [isDark, setIsDark] = useState(false);

useEffect(() => {
  const root = document.documentElement;

  const updateTheme = () => {
    setIsDark(root.classList.contains("dark"));
  };

  updateTheme();

  const observer = new MutationObserver(updateTheme);

  observer.observe(root, {
    attributes: true,
    attributeFilter: ["class"],
  });

  return () => {
    observer.disconnect();
  };
}, []);
  return (
    <Canvas
      camera={{
        position: [0, 0, 6.4],
        fov: 38,
      }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.outputColorSpace =
          THREE.SRGBColorSpace;

        gl.toneMapping =
          THREE.ACESFilmicToneMapping;

        gl.toneMappingExposure = 1.1;
      }}
    >
     <ambientLight intensity={isDark ? 0.75 : 1.35} />

<directionalLight
  position={[4, 6, 7]}
  intensity={isDark ? 3.6 : 4.4}
  color={isDark ? "#fff7e9" : "#ffffff"}
/>

<pointLight
  position={[3.8, 1.7, 3.5]}
  intensity={isDark ? 28 : 18}
  color="#F4A62A"
  distance={9}
/>

<pointLight
  position={[-3.5, -1.5, 3]}
  intensity={isDark ? 18 : 8}
  color="#00897B"
  distance={8}
/>

<pointLight
  position={[1, 3, -2]}
  intensity={isDark ? 7 : 2}
  color="#6B4EFF"
  distance={7}
/>

<Sculpture isDark={isDark} />
    </Canvas>
  );
}