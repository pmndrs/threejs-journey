import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Scene } from './components/Scene'

function PhysicsExample() {
  return (
    <Canvas shadows>
      <OrbitControls />
      <Suspense fallback={null}>
        <Stage>
          <Scene />
        </Stage>
      </Suspense>
    </Canvas>
  )
}

export {PhysicsExample}