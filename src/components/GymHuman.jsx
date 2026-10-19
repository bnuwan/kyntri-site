import { useEffect, useMemo, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function GymHuman() {
  const group = useRef();

  const { scene, animations } = useGLTF("/models/gym-burpee.glb");
  const { actions } = useAnimations(animations, group);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const names = Object.keys(actions);

    if (names.length > 0) {
      actions[names[0]]
        .reset()
        .fadeIn(0.4)
        .play();
    }

    return () => {
      names.forEach((name) => {
        actions[name]?.fadeOut(0.3).stop();
      });
    };
  }, [actions]);

  const scale = useMemo(() => (isMobile ? 1.05 : 1.4), [isMobile]);

  const position = useMemo(
    () => (isMobile ? [0, -1.2, 0] : [0, -1.5, 0]),
    [isMobile]
  );

  return (
    <group ref={group}>
      <primitive
        object={scene}
        scale={scale}
        position={position}
        rotation={[0, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/gym-burpee.glb");