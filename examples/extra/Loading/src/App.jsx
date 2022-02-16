import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Models } from "./Models";
import {Loader} from './Loader/Loader'

export default function App() {
  return (
    <>
    <Loader/>
    <Canvas shadows>
      <OrbitControls makeDefault autoRotate={false} />
      <Suspense fallback={null}>
        <Stage environment={null} intensity={1}>
          <Models />
        </Stage>
      </Suspense>
    </Canvas>
    </>
  );
}
