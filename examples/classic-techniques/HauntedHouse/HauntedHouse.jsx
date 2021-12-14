import { Canvas } from '@react-three/fiber'
import { Stats } from '@react-three/drei'
import React, { Suspense } from 'react'
import { Fog, HauntedHouse, Lights, Controls } from './components'

function HauntedHouseExample() {
  return (
    <Canvas
      mode="concurrent"
      shadows
      camera={{
        position: [0, 5, 15]
      }}>
      <Stats />
      <Controls />
      <Lights />
      <Fog />
      <Suspense fallback={null}>
        <HauntedHouse />
      </Suspense>
    </Canvas>
  )
}

export {HauntedHouseExample}