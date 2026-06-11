"use client";

import { Float, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Ridge({
  position,
  scale,
  rotation,
}: {
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number];
}) {
  return (
    <mesh position={position} scale={scale} rotation={rotation}>
      <coneGeometry args={[1, 1.8, 5, 3]} />
      <meshBasicMaterial color="#d8e5ea" wireframe transparent opacity={0.1} />
    </mesh>
  );
}

export default function MountainScene3D() {
  return (
    <Canvas
      dpr={[1, 1.4]}
      gl={{ antialias: false, alpha: true }}
      className="opacity-75"
      aria-hidden="true"
    >
      <PerspectiveCamera makeDefault position={[0, 0.3, 6]} fov={42} />
      <fog attach="fog" args={["#030303", 4, 10]} />
      <Float speed={0.35} rotationIntensity={0.05} floatIntensity={0.15}>
        <group position={[1.5, -1.25, -0.4]} rotation={[0.1, -0.25, 0]}>
          <Ridge
            position={[-2.2, 0, 0]}
            scale={[2.4, 2.2, 1.4]}
            rotation={[0, 0.2, 0]}
          />
          <Ridge
            position={[0, 0.1, -1]}
            scale={[3.2, 2.9, 1.7]}
            rotation={[0, -0.1, 0]}
          />
          <Ridge
            position={[2.4, -0.2, -0.3]}
            scale={[2, 1.8, 1.2]}
            rotation={[0, -0.3, 0]}
          />
        </group>
      </Float>
    </Canvas>
  );
}
