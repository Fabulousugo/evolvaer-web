"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sparkles } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type Theme = "light" | "dark";

function useSiteTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const root = document.documentElement;
    const update = () => setTheme(root.classList.contains("dark") ? "dark" : "light");

    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return theme;
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

function useCompactScene() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const update = () => setCompact(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return compact;
}

/* ============================================================
   EVOLVAER CORE (Optimized Geometries & Materials)
   ============================================================ */

function EvolvaerCore({ isDark, reducedMotion }: { isDark: boolean; reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const outerRing = useRef<THREE.Mesh>(null);
  const midRing = useRef<THREE.Mesh>(null);
  const innerRing = useRef<THREE.Mesh>(null);
  const nucleus = useRef<THREE.Mesh>(null);

  /* Materials optimized for fill-rate and reduced shader overhead */
  const glassMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: isDark ? "#6aa9ff" : "#d7e7ff",
        roughness: 0.1,
        metalness: 0.1,
        transparent: true,
        opacity: isDark ? 0.65 : 0.5,
      }),
    [isDark]
  );

  const blueMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: isDark ? "#3B82F6" : "#2563EB",
        metalness: 0.7,
        roughness: 0.2,
      }),
    [isDark]
  );

  const tealMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: isDark ? "#22D3EE" : "#10B981",
        metalness: 0.6,
        roughness: 0.2,
      }),
    [isDark]
  );

  const violetMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: isDark ? "#A855F7" : "#7C3AED",
        metalness: 0.6,
        roughness: 0.2,
      }),
    [isDark]
  );

  const coreMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: isDark ? "#f8fafc" : "#0a1d2f",
        metalness: 0.6,
        roughness: 0.15,
        emissive: isDark ? new THREE.Color("#17345f") : new THREE.Color("#07131f"),
        emissiveIntensity: isDark ? 0.35 : 0.08,
      }),
    [isDark]
  );

  /* Animation Frame Loop using smooth dampening */
  useFrame((state, delta) => {
    if (!group.current || reducedMotion) return;

    const elapsed = state.clock.elapsedTime;
    const pointerX = state.pointer.x;
    const pointerY = state.pointer.y;

    const targetY = -0.26 + pointerX * 0.14;
    const targetX = 0.07 - pointerY * 0.08;

    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY, 2.5, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetX, 2.5, delta);

    group.current.position.y = Math.sin(elapsed * 0.55) * 0.05;
    group.current.position.x = Math.cos(elapsed * 0.3) * 0.015;

    if (outerRing.current) outerRing.current.rotation.z = elapsed * 0.06;
    if (midRing.current) midRing.current.rotation.y = elapsed * -0.09;
    if (innerRing.current) innerRing.current.rotation.x = elapsed * 0.11;

    if (nucleus.current) {
      const pulse = 1 + Math.sin(elapsed * 1.7) * 0.045;
      nucleus.current.scale.setScalar(pulse);
    }
  });

  return (
    <Float
      speed={reducedMotion ? 0 : 1.1}
      rotationIntensity={reducedMotion ? 0 : 0.12}
      floatIntensity={reducedMotion ? 0 : 0.22}
    >
      <group ref={group} position={[0.3, 0, 0]} rotation={[0.08, -0.26, -0.07]} scale={0.98}>
        {/* GLASS SHELL (Reduced segments: 16x64 instead of 48x220) */}
        <mesh material={glassMaterial} rotation={[Math.PI * 0.42, Math.PI * 0.14, Math.PI * 0.11]} scale={[1.16, 0.8, 1]}>
          <torusGeometry args={[1.66, 0.11, 16, 64]} />
        </mesh>

        <mesh material={glassMaterial} rotation={[Math.PI * 0.63, -Math.PI * 0.19, -Math.PI * 0.2]} scale={[1, 0.84, 1.1]}>
          <torusGeometry args={[1.43, 0.085, 16, 64]} />
        </mesh>

        {/* BRAND ORBITS */}
        <mesh ref={outerRing} material={blueMaterial} rotation={[Math.PI * 0.49, Math.PI * 0.4, Math.PI * 0.1]} scale={[1.08, 0.88, 1]}>
          <torusGeometry args={[1.36, 0.11, 16, 64]} />
        </mesh>

        <mesh ref={midRing} material={tealMaterial} rotation={[Math.PI * 0.21, Math.PI * 0.56, -Math.PI * 0.14]} position={[0.06, -0.06, -0.2]} scale={[1, 0.85, 1.05]}>
          <torusGeometry args={[1.12, 0.045, 12, 48]} />
        </mesh>

        <mesh ref={innerRing} material={violetMaterial} rotation={[Math.PI * 0.72, -Math.PI * 0.05, Math.PI * 0.25]} position={[-0.1, 0.02, -0.3]} scale={[0.94, 0.82, 1]}>
          <torusGeometry args={[0.94, 0.032, 12, 48]} />
        </mesh>

        {/* INNER ENERGY LINES */}
        <mesh material={blueMaterial} rotation={[Math.PI * 0.52, Math.PI * 0.1, Math.PI * 0.4]}>
          <torusGeometry args={[0.76, 0.018, 8, 36]} />
        </mesh>

        <mesh material={tealMaterial} rotation={[Math.PI * 0.22, -Math.PI * 0.46, Math.PI * 0.22]}>
          <torusGeometry args={[0.63, 0.015, 8, 36]} />
        </mesh>

        {/* CORE */}
        <mesh ref={nucleus} material={violetMaterial} position={[0.04, -0.02, 0.08]}>
          <icosahedronGeometry args={[0.22, 2]} />
        </mesh>

        <mesh material={coreMaterial} position={[0.04, -0.02, 0.08]} scale={0.66}>
          <icosahedronGeometry args={[0.22, 2]} />
        </mesh>

        {/* ORBITAL NODES */}
        <mesh material={blueMaterial} position={[1.1, 0.54, 0.38]}>
          <sphereGeometry args={[0.055, 16, 16]} />
        </mesh>

        <mesh material={tealMaterial} position={[-0.82, -0.72, 0.55]}>
          <sphereGeometry args={[0.045, 16, 16]} />
        </mesh>

        <mesh material={violetMaterial} position={[0.2, 1.04, -0.72]}>
          <sphereGeometry args={[0.048, 16, 16]} />
        </mesh>
      </group>
    </Float>
  );
}

/* ============================================================
   CAMERA
   ============================================================ */

function CameraRig({ reducedMotion }: { reducedMotion: boolean }) {
  useFrame((state, delta) => {
    if (reducedMotion) return;
    const targetX = state.pointer.x * 0.18;
    const targetY = state.pointer.y * 0.1;

    state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, targetX, 2, delta);
    state.camera.position.y = THREE.MathUtils.damp(state.camera.position.y, targetY, 2, delta);
    state.camera.lookAt(0.15, 0, 0);
  });

  return null;
}

/* ============================================================
   LIGHTING & SCENE
   ============================================================ */

function Scene({ isDark, compact, reducedMotion }: { isDark: boolean; compact: boolean; reducedMotion: boolean }) {
  return (
    <>
      <ambientLight intensity={isDark ? 0.42 : 1.05} />
      <directionalLight position={[5, 7, 6]} intensity={isDark ? 2.5 : 3.5} color="#ffffff" />
      <pointLight position={[4, 2.4, 4]} intensity={isDark ? 12 : 8} distance={10} color={isDark ? "#3B82F6" : "#2563EB"} />
      <pointLight position={[-4, -1.2, 3]} intensity={isDark ? 8 : 4} distance={9} color={isDark ? "#22D3EE" : "#10B981"} />

      <Sparkles
        count={compact ? 12 : 20}
        scale={[6, 5, 5]}
        size={isDark ? 1.25 : 0.8}
        speed={reducedMotion ? 0 : 0.18}
        opacity={isDark ? 0.35 : 0.18}
        color={isDark ? "#93c5fd" : "#2563eb"}
      />

      <Environment preset="city" environmentIntensity={isDark ? 0.32 : 0.48} />
      <CameraRig reducedMotion={reducedMotion} />
      <EvolvaerCore isDark={isDark} reducedMotion={reducedMotion} />
    </>
  );
}

/* ============================================================
   HERO SCENE
   ============================================================ */

export function HeroScene() {
  const theme = useSiteTheme();
  const compact = useCompactScene();
  const reducedMotion = useReducedMotion();
  const isDark = theme === "dark";

  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 6.7], fov: 35 }}
        dpr={compact ? 1 : [1, 1.25]}
        gl={{
          antialias: !compact,
          alpha: true,
          powerPreference: "high-performance",
          precision: "mediump", // Memory & FPS optimization
        }}
        frameloop="demand" // Pause rendering when not interacting or static
        onCreated={({ gl }) => {
          gl.outputColorSpace = THREE.SRGBColorSpace;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = isDark ? 1.08 : 1;
        }}
      >
        <Scene isDark={isDark} compact={compact} reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}