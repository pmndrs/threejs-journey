import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Model from './components/Model'
import Fireflies from './components/Fireflies'

function PortalExample() {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 45, position: [-4, 2, -4] }}>
      <Suspense fallback={null}>
        <color attach="background" args={['#1e2243']} />
        <Fireflies count={50} />
        <Model />
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
}

export {PortalExample}