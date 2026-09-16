import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Icosahedron } from "@react-three/drei";

/**
 * An abstract wireframe-lit icosahedron — reads as "system / node / signal",
 * not a literal object, so it fits any of the site's technical themes
 * (AI, robotics, quantum, blockchain) without over-committing to one.
 */
export default function FloatingShape({ color = "#ff8a3d" }) {
  const meshRef = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.12;
      meshRef.current.rotation.y += delta * 0.18;
    }
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.position.y = Math.sin(t * 0.6) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <Icosahedron ref={meshRef} args={[1.6, 1]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.35}
          speed={1.4}
          roughness={0.25}
          metalness={0.6}
          wireframe={false}
        />
      </Icosahedron>
      <Icosahedron args={[1.62, 1]} scale={1.001}>
        <meshBasicMaterial color={color} wireframe transparent opacity={0.15} />
      </Icosahedron>
    </group>
  );
}
