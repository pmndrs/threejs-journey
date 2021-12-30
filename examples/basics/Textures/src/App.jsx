import { OrbitControls, useTexture, Sphere, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useControls } from 'leva'
import React, { Suspense, useEffect } from 'react'
import * as THREE from 'three'

function Box() {
  const { args1 } = useControls({ args1: [1, 32, 32] })
  const textureProps = useTexture({
    map: 'texture/color.jpg',
    displacementMap: 'texture/displacement.jpg',
    metalnessMap: 'texture/metalness.jpg',
    normalMap: 'texture/normal.jpg',
    roughnessMap: 'texture/roughness.jpg',
  })
  return (
    <Sphere args={[...args1]}>
      <meshPhysicalMaterial {...textureProps} map-magFilter={THREE.NearestFilter} displacementScale={0.5} />
    </Sphere>
  )
}

export default function App() {
  return (
    <Canvas shadows dpr={[1, 2]}>
      <OrbitControls makeDefault autoRotate />
      <Suspense fallback={null}>
        <Stage preset="rembrandt" intensity={1} environment="city">
          <Box />
        </Stage>
      </Suspense>
    </Canvas>
  )
}
