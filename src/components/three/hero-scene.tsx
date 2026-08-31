"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as THREE from "three";

type Theme = "light" | "dark";

function useSiteTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const root = document.documentElement;

    const update = () => {
      setTheme(
        root.classList.contains("dark")
          ? "dark"
          : "light",
      );
    };

    update();

    const observer = new MutationObserver(update);

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return theme;
}

function SculpturalForm({
  isDark,
}: {
  isDark: boolean;
}) {
  const group = useRef<THREE.Group>(null);

  const glassMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: isDark ? "#8fa8b2" : "#e4ebec",
        roughness: 0.08,
        metalness: 0.02,
        transmission: isDark ? 0.83 : 0.72,
        thickness: 0.65,
        ior: 1.38,
        transparent: true,
        opacity: isDark ? 0.78 : 0.67,
        clearcoat: 1,
        clearcoatRoughness: 0.04,
      }),
    [isDark],
  );

  const navyMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: isDark ? "#071522" : "#0D1B2A",
        metalness: 0.62,
        roughness: 0.16,
        clearcoat: 1,
        clearcoatRoughness: 0.06,
      }),
    [isDark],
  );

  const goldMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#F4A62A",
        metalness: 0.92,
        roughness: 0.2,
        clearcoat: 1,
        clearcoatRoughness: 0.07,
      }),
    [],
  );

  const tealGlass = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: isDark ? "#5a9f98" : "#a7cbc6",
        roughness: 0.1,
        metalness: 0.02,
        transmission: 0.74,
        thickness: 0.42,
        transparent: true,
        opacity: isDark ? 0.48 : 0.34,
        clearcoat: 1,
      }),
    [isDark],
  );

  useFrame((state) => {
    if (!group.current) return;

    const targetY = -0.28 + state.pointer.x * 0.055;
    const targetX = 0.08 - state.pointer.y * 0.025;

    group.current.rotation.y =
      THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetY,
        0.025,
      );

    group.current.rotation.x =
      THREE.MathUtils.lerp(
        group.current.rotation.x,
        targetX,
        0.025,
      );

    group.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.3) *
      0.025;
  });

  return (
    <group
      ref={group}
      position={[0.25, 0.05, 0]}
      rotation={[0.08, -0.28, -0.08]}
      scale={0.96}
    >
      {/* Main architectural glass loop */}
      <mesh
        material={glassMaterial}
        rotation={[
          Math.PI * 0.43,
          Math.PI * 0.12,
          Math.PI * 0.14,
        ]}
        scale={[1.15, 0.78, 1]}
      >
        <torusGeometry args={[1.62, 0.12, 48, 220]} />
      </mesh>

      {/* Crossing glass loop */}
      <mesh
        material={glassMaterial}
        rotation={[
          Math.PI * 0.61,
          -Math.PI * 0.2,
          -Math.PI * 0.2,
        ]}
        scale={[1, 0.82, 1.1]}
      >
        <torusGeometry args={[1.42, 0.095, 42, 210]} />
      </mesh>

      {/* Structural navy loop */}
      <mesh
        material={navyMaterial}
        rotation={[
          Math.PI * 0.5,
          Math.PI * 0.43,
          Math.PI * 0.1,
        ]}
        scale={[1.04, 0.86, 1]}
      >
        <torusGeometry args={[1.34, 0.13, 44, 210]} />
      </mesh>

      {/* Fine gold signature ring */}
      <mesh
        material={goldMaterial}
        rotation={[
          Math.PI * 0.49,
          Math.PI * 0.43,
          Math.PI * 0.1,
        ]}
        scale={[1.04, 0.86, 1]}
      >
        <torusGeometry args={[1.34, 0.035, 26, 210]} />
      </mesh>

      {/* Secondary gold arc / orbital feel */}
      <mesh
        material={goldMaterial}
        rotation={[
          Math.PI * 0.2,
          Math.PI * 0.55,
          -Math.PI * 0.17,
        ]}
        position={[0.08, -0.08, -0.22]}
        scale={[1, 0.84, 1.05]}
      >
        <torusGeometry args={[1.09, 0.022, 22, 180]} />
      </mesh>

      {/* Restrained teal glass detail */}
      <mesh
        material={tealGlass}
        rotation={[
          Math.PI * 0.72,
          -Math.PI * 0.06,
          Math.PI * 0.24,
        ]}
        position={[-0.1, 0.02, -0.35]}
        scale={[0.94, 0.82, 1]}
      >
        <torusGeometry args={[1.16, 0.055, 28, 180]} />
      </mesh>

      {/* Small inner nucleus */}
      <mesh
        material={navyMaterial}
        position={[0.05, -0.03, 0.1]}
      >
        <sphereGeometry args={[0.14, 48, 48]} />
      </mesh>

      <mesh
        material={goldMaterial}
        position={[0.05, -0.03, 0.1]}
        scale={1.18}
      >
        <sphereGeometry args={[0.14, 48, 48]} />
      </mesh>

      <mesh
        material={navyMaterial}
        position={[0.05, -0.03, 0.11]}
        scale={0.91}
      >
        <sphereGeometry args={[0.14, 48, 48]} />
      </mesh>
    </group>
  );
}

function Scene({
  isDark,
}: {
  isDark: boolean;
}) {
  return (
    <>
      <ambientLight
        intensity={isDark ? 0.55 : 1.15}
      />

      {/* Main neutral key light */}
      <directionalLight
        position={[5, 7, 6]}
        intensity={isDark ? 3.1 : 4.2}
        color={isDark ? "#fff4dc" : "#ffffff"}
      />

      {/* Gold rim */}
      <pointLight
        position={[4, 1.8, 4]}
        intensity={isDark ? 20 : 13}
        distance={9}
        color="#F4A62A"
      />

      {/* Teal reflection */}
      <pointLight
        position={[-4, -1, 3]}
        intensity={isDark ? 10 : 5}
        distance={8}
        color="#00897B"
      />

      {/* Cool fill */}
      <pointLight
        position={[0, 4, -2]}
        intensity={isDark ? 4 : 2}
        distance={8}
        color="#d8e7ee"
      />

      <SculpturalForm isDark={isDark} />
    </>
  );
}

export function HeroScene() {
  const theme = useSiteTheme();
  const isDark = theme === "dark";

  return (
    <div className="h-full w-full">
      <Canvas
        camera={{
          position: [0, 0, 6.8],
          fov: 36,
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

          gl.toneMappingExposure = 1.05;
        }}
      >
        <Scene isDark={isDark} />
      </Canvas>
    </div>
  );
}