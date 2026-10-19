import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useEffect, useState } from "react";
import GymHuman from "./GymHuman";

export default function GymCanvas() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      shadows={!isMobile}
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      camera={{
        position: isMobile ? [0, 1.3, 4.2] : [0, 1.6, 5],
        fov: isMobile ? 42 : 35,
      }}
      gl={{
        antialias: !isMobile,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      <ambientLight intensity={1.8} />

      <directionalLight
        position={[5, 8, 5]}
        intensity={2.5}
        castShadow={!isMobile}
      />

      <pointLight
        position={[-5, 4, 5]}
        intensity={1.8}
        color="#22d3ee"
      />

      <Environment preset="city" />

      <group
        scale={isMobile ? 0.82 : 1}
        position={isMobile ? [0, -0.65, 0] : [0, -0.3, 0]}
      >
        <GymHuman />
      </group>

      <OrbitControls
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
}