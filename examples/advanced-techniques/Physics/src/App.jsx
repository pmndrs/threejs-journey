import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Scene } from './components/Scene'

export default function App() {
  return (
    <Canvas dpr={[1, 2]} shadows>
      <OrbitControls />
      <Suspense fallback={null}>
        <Stage>
          <Scene />
        </Stage>
      </Suspense>
    </Canvas>
  )
}
