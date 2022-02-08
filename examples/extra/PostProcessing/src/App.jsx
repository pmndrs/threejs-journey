import { Environment, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Effects } from "./Effects";
import { Model } from "./Model";

export default function App() {
  return (
    <Canvas shadows>
      <OrbitControls makeDefault autoRotate />
      <Suspense fallback={null}>
        <Effects />
        <Environment preset="dawn" background />
        <Stage environment="dawn" intensity={1}>
          <Model />
        </Stage>
      </Suspense>
    </Canvas>
  );
}
