import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import FloatingShape from "./models/FloatingShape";

/**
 * Drop-in 3D canvas. Kept deliberately minimal (one light rig, one shape)
 * so it stays performant across pages instead of running a heavy scene
 * on every route.
 */
export default function Scene3D({ color = "#ff8a3d", className = "" }) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 3, 4]} intensity={1.2} />
          <pointLight position={[-3, -2, -2]} intensity={0.6} color="#5fd0c0" />
          <FloatingShape color={color} />
        </Suspense>
      </Canvas>
    </div>
  );
}
