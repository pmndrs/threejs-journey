import { OrbitControls, useTexture, Sphere, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useControls } from 'leva'
import React, { Suspense, useEffect } from 'react'
import * as THREE from 'three'

import map from './assets/gold/color.jpg'
import displacementMap from './assets/gold/displacement.jpg'
import metalnessMap from './assets/gold/metalness.jpg'
import normalMap from './assets/gold/normal.jpg'
import roughnessMap from './assets/gold/roughness.jpg'

function Box() {
  const { args1 } = useControls({ args1: [1, 32, 32] })

  const textureProps = useTexture({
    map: map.src,
    displacementMap: displacementMap.src,
    metalnessMap: metalnessMap.src,
    normalMap: normalMap.src,
    roughnessMap: roughnessMap.src,
  })

  useEffect(() => {
    if (textureProps) {
      textureProps.map.magFilter = THREE.NearestFilter
    }
  }, [textureProps])

  return (
    <Sphere args={[...args1]}>
      <meshPhysicalMaterial {...textureProps} displacementScale={0.5} />
    </Sphere>
  )
}

function TexturesExample() {
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

export {TexturesExample}