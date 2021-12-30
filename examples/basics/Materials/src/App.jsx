import { OrbitControls, Plane, Sphere, Stage, Torus } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useControls } from 'leva'
import React, { RefObject, Suspense, useState } from 'react'
import * as THREE from 'three'

function Model() {
  const materialProps = useControls({ color: 'aqua', opacity: 1, roughness: 0.5, metalness: 0.5 })
  const [material, setMaterial] = useState()
  return (
    <>
      <meshPhysicalMaterial ref={setMaterial} side={THREE.DoubleSide} {...materialProps} />
      <Sphere args={[1, 32, 32]} material={material} />
      <Plane args={[2, 2]} position={[3, 0, 0]} material={material} />
      <Torus args={[1, 0.5, 32, 32]} position={[-3.5, 0, 0]} material={material} />
    </>
  )
}

export default function App() {
  return (
    <Canvas shadows dpr={[1, 2]}>
      <OrbitControls makeDefault />
      <Suspense fallback={null}>
        <Stage intensity={1}>
          <Model />
        </Stage>
      </Suspense>
    </Canvas>
  )
}
