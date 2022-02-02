import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Model } from "./Model";

export default function App() {
  return (
    <Canvas shadows>
      <OrbitControls makeDefault autoRotate />
      <directionalLight
        castShadow
        color="white"
        intensity={5}
        position={[2, 10, 5]}
      />
      <Suspense fallback={null}>
        <Stage preset="rembrandt" intensity={1}>
          <Model />
        </Stage>
      </Suspense>
    </Canvas>
  );
}
