"use client";

import {
  Canvas,
  useFrame,
} from "@react-three/fiber";
import {
  Environment,
  Float,
  Sparkles,
} from "@react-three/drei";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as THREE from "three";

type Theme = "light" | "dark";

function useSiteTheme() {
  const [theme, setTheme] =
    useState<Theme>("light");

  useEffect(() => {
    const root =
      document.documentElement;

    const update = () => {
      setTheme(
        root.classList.contains("dark")
          ? "dark"
          : "light",
      );
    };

    update();

    const observer =
      new MutationObserver(update);

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () =>
      observer.disconnect();
  }, []);

  return theme;
}

/* ============================================================
   EVOLVAER CORE
   ============================================================ */

function EvolvaerCore({
  isDark,
}: {
  isDark: boolean;
}) {
  const group =
    useRef<THREE.Group>(null);

  const outerRing =
    useRef<THREE.Mesh>(null);

  const midRing =
    useRef<THREE.Mesh>(null);

  const innerRing =
    useRef<THREE.Mesh>(null);

  const nucleus =
    useRef<THREE.Mesh>(null);

  /* ----------------------------------------------------------
     MATERIALS
     ---------------------------------------------------------- */

  const glassMaterial =
    useMemo(
      () =>
        new THREE.MeshPhysicalMaterial({
          color: isDark
            ? "#6aa9ff"
            : "#d7e7ff",

          roughness: 0.06,
          metalness: 0.04,

          transmission:
            isDark ? 0.82 : 0.72,

          thickness: 0.7,

          ior: 1.42,

          transparent: true,

          opacity:
            isDark ? 0.62 : 0.56,

          clearcoat: 1,

          clearcoatRoughness:
            0.035,
        }),
      [isDark],
    );

  const blueMaterial =
    useMemo(
      () =>
        new THREE.MeshPhysicalMaterial({
          color: isDark
            ? "#3B82F6"
            : "#2563EB",

          metalness: 0.72,
          roughness: 0.16,

          clearcoat: 1,

          clearcoatRoughness:
            0.055,
        }),
      [isDark],
    );

  const tealMaterial =
    useMemo(
      () =>
        new THREE.MeshPhysicalMaterial({
          color: isDark
            ? "#22D3EE"
            : "#10B981",

          metalness: 0.55,
          roughness: 0.16,

          clearcoat: 1,

          clearcoatRoughness:
            0.055,
        }),
      [isDark],
    );

  const violetMaterial =
    useMemo(
      () =>
        new THREE.MeshPhysicalMaterial({
          color: isDark
            ? "#A855F7"
            : "#7C3AED",

          metalness: 0.62,
          roughness: 0.18,

          clearcoat: 1,

          clearcoatRoughness:
            0.05,
        }),
      [isDark],
    );

  const coreMaterial =
    useMemo(
      () =>
        new THREE.MeshPhysicalMaterial({
          color: isDark
            ? "#f8fafc"
            : "#0a1d2f",

          metalness: 0.65,
          roughness: 0.12,

          clearcoat: 1,

          emissive: isDark
            ? new THREE.Color(
                "#17345f",
              )
            : new THREE.Color(
                "#07131f",
              ),

          emissiveIntensity:
            isDark ? 0.35 : 0.08,
        }),
      [isDark],
    );

  /* ----------------------------------------------------------
     MOTION
     ---------------------------------------------------------- */

  useFrame((state) => {
    if (!group.current) return;

    const elapsed =
      state.clock.elapsedTime;

    const pointerX =
      state.pointer.x;

    const pointerY =
      state.pointer.y;

    const targetY =
      -0.26 +
      pointerX * 0.14;

    const targetX =
      0.07 -
      pointerY * 0.08;

    group.current.rotation.y =
      THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetY,
        0.028,
      );

    group.current.rotation.x =
      THREE.MathUtils.lerp(
        group.current.rotation.x,
        targetX,
        0.028,
      );

    group.current.position.y =
      Math.sin(
        elapsed * 0.55,
      ) * 0.05;

    group.current.position.x =
      Math.cos(
        elapsed * 0.3,
      ) * 0.015;

    if (outerRing.current) {
      outerRing.current.rotation.z =
        elapsed * 0.06;
    }

    if (midRing.current) {
      midRing.current.rotation.y =
        elapsed * -0.09;
    }

    if (innerRing.current) {
      innerRing.current.rotation.x =
        elapsed * 0.11;
    }

    if (nucleus.current) {
      const pulse =
        1 +
        Math.sin(
          elapsed * 1.7,
        ) *
          0.045;

      nucleus.current.scale.setScalar(
        pulse,
      );
    }
  });

  return (
    <Float
      speed={1.1}
      rotationIntensity={0.12}
      floatIntensity={0.22}
    >
      <group
        ref={group}
        position={[0.3, 0, 0]}
        rotation={[
          0.08,
          -0.26,
          -0.07,
        ]}
        scale={0.98}
      >
        {/* =====================================================
            GLASS SHELL
            ===================================================== */}

        <mesh
          material={glassMaterial}
          rotation={[
            Math.PI * 0.42,
            Math.PI * 0.14,
            Math.PI * 0.11,
          ]}
          scale={[
            1.16,
            0.8,
            1,
          ]}
        >
          <torusGeometry
            args={[
              1.66,
              0.11,
              48,
              220,
            ]}
          />
        </mesh>

        <mesh
          material={glassMaterial}
          rotation={[
            Math.PI * 0.63,
            -Math.PI * 0.19,
            -Math.PI * 0.2,
          ]}
          scale={[
            1,
            0.84,
            1.1,
          ]}
        >
          <torusGeometry
            args={[
              1.43,
              0.085,
              42,
              220,
            ]}
          />
        </mesh>

        {/* =====================================================
            BRAND ORBITS
            ===================================================== */}

        <mesh
          ref={outerRing}
          material={
            blueMaterial
          }
          rotation={[
            Math.PI * 0.49,
            Math.PI * 0.4,
            Math.PI * 0.1,
          ]}
          scale={[
            1.08,
            0.88,
            1,
          ]}
        >
          <torusGeometry
            args={[
              1.36,
              0.11,
              40,
              220,
            ]}
          />
        </mesh>

        <mesh
          ref={midRing}
          material={
            tealMaterial
          }
          rotation={[
            Math.PI * 0.21,
            Math.PI * 0.56,
            -Math.PI * 0.14,
          ]}
          position={[
            0.06,
            -0.06,
            -0.2,
          ]}
          scale={[
            1,
            0.85,
            1.05,
          ]}
        >
          <torusGeometry
            args={[
              1.12,
              0.045,
              28,
              200,
            ]}
          />
        </mesh>

        <mesh
          ref={innerRing}
          material={
            violetMaterial
          }
          rotation={[
            Math.PI * 0.72,
            -Math.PI * 0.05,
            Math.PI * 0.25,
          ]}
          position={[
            -0.1,
            0.02,
            -0.3,
          ]}
          scale={[
            0.94,
            0.82,
            1,
          ]}
        >
          <torusGeometry
            args={[
              0.94,
              0.032,
              24,
              180,
            ]}
          />
        </mesh>

        {/* =====================================================
            INNER ENERGY LINES
            ===================================================== */}

        <mesh
          material={
            blueMaterial
          }
          rotation={[
            Math.PI * 0.52,
            Math.PI * 0.1,
            Math.PI * 0.4,
          ]}
        >
          <torusGeometry
            args={[
              0.76,
              0.018,
              18,
              160,
            ]}
          />
        </mesh>

        <mesh
          material={
            tealMaterial
          }
          rotation={[
            Math.PI * 0.22,
            -Math.PI * 0.46,
            Math.PI * 0.22,
          ]}
        >
          <torusGeometry
            args={[
              0.63,
              0.015,
              18,
              150,
            ]}
          />
        </mesh>

        {/* =====================================================
            CORE
            ===================================================== */}

        <mesh
          ref={nucleus}
          material={
            violetMaterial
          }
          position={[
            0.04,
            -0.02,
            0.08,
          ]}
        >
          <icosahedronGeometry
            args={[
              0.22,
              4,
            ]}
          />
        </mesh>

        <mesh
          material={
            coreMaterial
          }
          position={[
            0.04,
            -0.02,
            0.08,
          ]}
          scale={0.66}
        >
          <icosahedronGeometry
            args={[
              0.22,
              3,
            ]}
          />
        </mesh>

        {/* =====================================================
            ORBITAL NODES
            ===================================================== */}

        <mesh
          material={
            blueMaterial
          }
          position={[
            1.1,
            0.54,
            0.38,
          ]}
        >
          <sphereGeometry
            args={[
              0.055,
              30,
              30,
            ]}
          />
        </mesh>

        <mesh
          material={
            tealMaterial
          }
          position={[
            -0.82,
            -0.72,
            0.55,
          ]}
        >
          <sphereGeometry
            args={[
              0.045,
              30,
              30,
            ]}
          />
        </mesh>

        <mesh
          material={
            violetMaterial
          }
          position={[
            0.2,
            1.04,
            -0.72,
          ]}
        >
          <sphereGeometry
            args={[
              0.048,
              30,
              30,
            ]}
          />
        </mesh>
      </group>
    </Float>
  );
}

/* ============================================================
   CAMERA
   ============================================================ */

function CameraRig() {
  useFrame((state) => {
    const targetX =
      state.pointer.x * 0.18;

    const targetY =
      state.pointer.y * 0.1;

    state.camera.position.x =
      THREE.MathUtils.lerp(
        state.camera.position.x,
        targetX,
        0.02,
      );

    state.camera.position.y =
      THREE.MathUtils.lerp(
        state.camera.position.y,
        targetY,
        0.02,
      );

    state.camera.lookAt(
      0.15,
      0,
      0,
    );
  });

  return null;
}

/* ============================================================
   LIGHTING
   ============================================================ */

function Scene({
  isDark,
}: {
  isDark: boolean;
}) {
  return (
    <>
      <ambientLight
        intensity={
          isDark ? 0.42 : 1.05
        }
      />

      {/* Main key */}
      <directionalLight
        position={[
          5,
          7,
          6,
        ]}
        intensity={
          isDark ? 3.2 : 4.2
        }
        color="#ffffff"
      />

      {/* Blue key rim */}
      <pointLight
        position={[
          4,
          2.4,
          4,
        ]}
        intensity={
          isDark ? 22 : 14
        }
        distance={10}
        color={
          isDark
            ? "#3B82F6"
            : "#2563EB"
        }
      />

      {/* Cyan / teal reflection */}
      <pointLight
        position={[
          -4,
          -1.2,
          3,
        ]}
        intensity={
          isDark ? 13 : 7
        }
        distance={9}
        color={
          isDark
            ? "#22D3EE"
            : "#10B981"
        }
      />

      {/* Violet depth */}
      <pointLight
        position={[
          1,
          3,
          -4,
        ]}
        intensity={
          isDark ? 8 : 3
        }
        distance={10}
        color={
          isDark
            ? "#A855F7"
            : "#7C3AED"
        }
      />

      {/* Soft neutral fill */}
      <pointLight
        position={[
          -1,
          5,
          2,
        ]}
        intensity={
          isDark ? 4 : 2
        }
        distance={9}
        color="#dbeafe"
      />

      {/* Small atmospheric particles */}
      <Sparkles
        count={42}
        scale={[
          6,
          5,
          5,
        ]}
        size={
          isDark ? 1.25 : 0.8
        }
        speed={0.18}
        opacity={
          isDark ? 0.35 : 0.18
        }
        color={
          isDark
            ? "#93c5fd"
            : "#2563eb"
        }
      />

      <Environment
        preset="city"
        environmentIntensity={
          isDark ? 0.32 : 0.48
        }
      />

      <CameraRig />

      <EvolvaerCore
        isDark={isDark}
      />
    </>
  );
}

/* ============================================================
   HERO SCENE
   ============================================================ */

export function HeroScene() {
  const theme =
    useSiteTheme();

  const isDark =
    theme === "dark";

  return (
    <div className="h-full w-full">
      <Canvas
        camera={{
          position: [
            0,
            0,
            6.7,
          ],
          fov: 35,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference:
            "high-performance",
        }}
        onCreated={({
          gl,
        }) => {
          gl.outputColorSpace =
            THREE.SRGBColorSpace;

          gl.toneMapping =
            THREE.ACESFilmicToneMapping;

          gl.toneMappingExposure =
            isDark ? 1.08 : 1;
        }}
      >
        <Scene
          isDark={isDark}
        />
      </Canvas>
    </div>
  );
}