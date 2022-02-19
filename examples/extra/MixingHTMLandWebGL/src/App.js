// Original source: https://codesandbox.io/s/6oei7 by Paul Henschel - @drcmda

import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Model from './Model'

export default function Viewer() {
  const ref = useRef()
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 50 }}>
      <Suspense fallback={null}>
        <Stage controls={ref}>
          <Model />
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} autoRotate makeDefault />
    </Canvas>
  )
}
