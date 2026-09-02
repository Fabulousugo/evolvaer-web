"use client";

import {
  Canvas,
  useThree,
} from "@react-three/fiber";
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

const BLUE = "#3B82F6";
const CYAN = "#22D3EE";
const TEAL = "#10B981";
const PURPLE = "#A855F7";

type Point3 = [
  number,
  number,
  number,
];

declare global {
  interface Window {
    exportContactScene?: () => void;
  }
}

function useCompactScene() {
  const [compact, setCompact] =
    useState(false);

  useEffect(() => {
    const media = window.matchMedia(
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

function SignalNode({
  position,
  color = CYAN,
  size = 0.06,
  halo = false,
}: {
  position: Point3;
  color?: string;
  size?: number;
  halo?: boolean;
}) {
  return (
    <group position={position}>
      {halo && (
        <mesh scale={2.6}>
          <sphereGeometry
            args={[size, 10, 10]}
          />

          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.06}
            blending={AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      )}

      <mesh>
        <sphereGeometry
          args={[size, 12, 12]}
        />

        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.92}
        />
      </mesh>
    </group>
  );
}

function SignalPath({
  points,
  color = CYAN,
  opacity = 0.18,
  radius = 0.007,
}: {
  points: Point3[];
  color?: string;
  opacity?: number;
  radius?: number;
}) {
  const geometry = useMemo(() => {
    const curve =
      new CatmullRomCurve3(
        points.map(
          (point) =>
            new Vector3(...point),
        ),
      );

    return new TubeGeometry(
      curve,
      18,
      radius,
      5,
      false,
    );
  }, [points, radius]);

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
        blending={AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

function ChannelRing({
  radius,
  color,
  opacity,
  rotation = [
    Math.PI / 2,
    0,
    0,
  ],
}: {
  radius: number;
  color: string;
  opacity: number;
  rotation?: Point3;
}) {
  return (
    <mesh rotation={rotation}>
      <torusGeometry
        args={[
          radius,
          0.007,
          4,
          48,
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

function CommunicationCore() {
  return (
    <group>
      <SignalNode
        position={[0, 0, 0]}
        color={CYAN}
        size={0.11}
        halo
      />

      <ChannelRing
        radius={0.42}
        color={CYAN}
        opacity={0.15}
      />

      <ChannelRing
        radius={0.72}
        color={BLUE}
        opacity={0.08}
      />

      <ChannelRing
        radius={1.04}
        color={PURPLE}
        opacity={0.035}
      />

      <ChannelRing
        radius={0.58}
        color={TEAL}
        opacity={0.045}
        rotation={[
          0.75,
          0.25,
          0.15,
        ]}
      />
    </group>
  );
}

function StaticContactWorld({
  compact,
}: {
  compact: boolean;
}) {
  const incoming = useMemo<
    Array<{
      path: Point3[];
      color: string;
    }>
  >(
    () => [
      {
        color: BLUE,
        path: [
          [-3.5, 1.65, -0.4],
          [-2.35, 1.05, 0],
          [-1.05, 0.4, 0.15],
          [0, 0, 0],
        ],
      },
      {
        color: CYAN,
        path: [
          [-3.55, -1.45, -0.3],
          [-2.25, -0.95, 0],
          [-1, -0.35, 0.15],
          [0, 0, 0],
        ],
      },
      {
        color: PURPLE,
        path: [
          [-0.9, 2.65, -0.55],
          [-0.65, 1.75, -0.1],
          [-0.3, 0.8, 0.12],
          [0, 0, 0],
        ],
      },
    ],
    [],
  );

  const outgoing = useMemo<
    Array<{
      path: Point3[];
      color: string;
    }>
  >(
    () => [
      {
        color: BLUE,
        path: [
          [0, 0, 0],
          [1.15, 0.45, 0.15],
          [2.15, 1.2, 0],
          [3.35, 1.65, -0.3],
        ],
      },
      {
        color: CYAN,
        path: [
          [0, 0, 0],
          [1.25, 0.15, 0.15],
          [2.25, 0.4, 0],
          [3.5, 0.45, -0.2],
        ],
      },
      {
        color: PURPLE,
        path: [
          [0, 0, 0],
          [1.2, -0.2, 0.15],
          [2.25, -0.55, 0],
          [3.45, -0.65, -0.2],
        ],
      },
      {
        color: TEAL,
        path: [
          [0, 0, 0],
          [1.05, -0.5, 0.15],
          [2.05, -1.25, 0],
          [3.25, -1.75, -0.3],
        ],
      },
    ],
    [],
  );

  return (
    <group
      position={
        compact
          ? [0, 0, -0.9]
          : [1.45, 0, -1]
      }
      scale={compact ? 0.7 : 1}
      rotation={[
        0.04,
        -0.08,
        0,
      ]}
    >
      {incoming.map(
        (signal, index) => {
          const start =
            signal.path[0];

          return (
            <group
              key={`in-${index}`}
            >
              <SignalPath
                points={signal.path}
                color={signal.color}
                opacity={0.14}
              />

              <SignalNode
                position={start}
                color={signal.color}
                size={0.055}
                halo={index === 0}
              />
            </group>
          );
        },
      )}

      <CommunicationCore />

      {outgoing.map(
        (signal, index) => {
          const end =
            signal.path[
              signal.path.length - 1
            ];

          return (
            <group
              key={`out-${index}`}
            >
              <SignalPath
                points={signal.path}
                color={signal.color}
                opacity={
                  index === 1
                    ? 0.24
                    : 0.16
                }
              />

              <SignalNode
                position={end}
                color={signal.color}
                size={0.06}
                halo
              />
            </group>
          );
        },
      )}

      {!compact && (
        <>
          <SignalNode
            position={[
              -2.7,
              0.15,
              -0.5,
            ]}
            color={TEAL}
            size={0.03}
          />

          <SignalNode
            position={[
              2.75,
              2.15,
              -0.6,
            ]}
            color={BLUE}
            size={0.03}
          />

          <SignalNode
            position={[
              2.9,
              -2.15,
              -0.5,
            ]}
            color={PURPLE}
            size={0.03}
          />
        </>
      )}

      <ChannelRing
        radius={2.75}
        color={CYAN}
        opacity={0.035}
        rotation={[
          0.9,
          0.25,
          0.1,
        ]}
      />

      <ChannelRing
        radius={2.35}
        color={BLUE}
        opacity={0.025}
        rotation={[
          1.25,
          -0.35,
          0.45,
        ]}
      />
    </group>
  );
}

function SceneLighting() {
  return (
    <>
      <ambientLight
        intensity={0.5}
      />

      <pointLight
        position={[4, 4, 5]}
        intensity={1.2}
        color={BLUE}
      />

      <pointLight
        position={[-4, -2, 4]}
        intensity={0.9}
        color={CYAN}
      />

      <pointLight
        position={[0, 3, -1]}
        intensity={0.55}
        color={PURPLE}
      />
    </>
  );
}

/*
 * TEMPORARY:
 * Allows us to export the rendered
 * WebGL scene as a transparent PNG.
 *
 * Remove this once the static image
 * has been captured.
 */
function SceneExporter() {
  const {
    gl,
    scene,
    camera,
    invalidate,
  } = useThree();

  useEffect(() => {
    window.exportContactScene =
      () => {
        /*
         * Request a fresh R3F frame first.
         */
        invalidate();

        /*
         * Wait for the browser to reach
         * the next paint frame, then
         * explicitly render immediately
         * before reading the buffer.
         */
        requestAnimationFrame(() => {
          gl.render(
            scene,
            camera,
          );

          const canvas =
            gl.domElement;

          const dataUrl =
            canvas.toDataURL(
              "image/png",
            );

          const link =
            document.createElement(
              "a",
            );

          link.href = dataUrl;
          link.download =
            "contact-scene.png";

          document.body.appendChild(
            link,
          );

          link.click();
          link.remove();

          console.log(
            `Exported ${canvas.width} × ${canvas.height}`,
          );
        });
      };

    console.log(
      "Contact scene exporter ready",
    );

    return () => {
      delete window
        .exportContactScene;
    };
  }, [
    gl,
    scene,
    camera,
    invalidate,
  ]);

  return null;
}

export function ContactScene() {
  const compact =
    useCompactScene();

  return (
    <Canvas
      dpr={1}
      frameloop="demand"
      camera={{
        position: compact
          ? [0, 0, 9]
          : [0, 0, 8.5],
        fov: compact
          ? 53
          : 46,
        near: 0.1,
        far: 50,
      }}
      gl={{
        alpha: true,

        /*
         * TEMPORARY:
         * true while creating
         * our source image.
         */
        antialias: true,

        /*
         * TEMPORARY:
         * required so the rendered
         * framebuffer can be exported.
         */
        preserveDrawingBuffer:
          true,

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
      <SceneExporter />

      <SceneLighting />

      <StaticContactWorld
        compact={compact}
      />
    </Canvas>
  );
}