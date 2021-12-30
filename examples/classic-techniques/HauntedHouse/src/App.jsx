import { Canvas } from '@react-three/fiber'
import { Stats, OrbitControls } from '@react-three/drei'
import React, { Suspense } from 'react'
import { Fog, Floor, House, Graves, Ghosts } from './components'

export default function App() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 5, 15] }}>
      <Stats />
      <OrbitControls maxPolarAngle={Math.PI * 0.49} minDistance={5} maxDistance={20} makeDefault />
      <ambientLight intensity={0.12} color="lightcyan" />
      <directionalLight color="lightcyan" castShadow intensity={0.12} />
      <Fog />
      <Suspense fallback={null}>
        <House />
        <Graves />
        <Ghosts />
        <Floor />
      </Suspense>
    </Canvas>
  )
}
