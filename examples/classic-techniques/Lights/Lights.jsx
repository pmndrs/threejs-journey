import { OrbitControls, Sphere, Plane, useHelper } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useControls } from 'leva'
import React, { Suspense, useRef } from 'react'
import * as THREE from 'three'

function Model() {
  return (
    <>
      <Sphere castShadow args={[1, 32, 32]}>
        <meshPhysicalMaterial color="aqua" />
      </Sphere>
      <Plane receiveShadow color="blue" args={[20, 20]} rotation={[Math.PI * -0.5, 0, 0]} position={[0, -1, 0]}>
        <meshPhysicalMaterial color="gray" />
      </Plane>
    </>
  )
}

function Light() {
  const lightProps = useControls({
    color: 'aqua',
    intensity: 1,
    position: [3, 3, 3],
    distance: 10,
    angle: Math.PI / 4,
    penumbra: 0.5,
    decay: 0.5
  })

  const mainLightRef = useRef()
  useHelper(mainLightRef, THREE.SpotLightHelper, 'red')
  return (
    <>
      <ambientLight color="aqua" />
      <spotLight ref={mainLightRef} castShadow {...lightProps} />
    </>
  )
}

function LightsExample() {
  return (
    <Canvas shadows>
      <OrbitControls makeDefault />
      <Light />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  )
}

export {LightsExample}
