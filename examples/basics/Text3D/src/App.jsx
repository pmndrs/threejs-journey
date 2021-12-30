import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader, extend } from '@react-three/fiber'
import { useControls } from 'leva'
import React, { Suspense, useLayoutEffect, useMemo, useRef } from 'react'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'

extend({ TextGeometry })

function HelloText() {
  const ref = useRef()
  const { color, text } = useControls({ color: 'aqua', text: 'Hello' })
  const font = useLoader(FontLoader, '/typefaces/optimer_bold.typeface.json')
  const config = useMemo(() => ({ font, size: 5, height: 2 }), [font])
  useLayoutEffect(() => void ref.current.geometry.center(), [text])
  return (
    <mesh ref={ref}>
      <textGeometry args={[text, config]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 20] }}>
      <OrbitControls makeDefault />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="yellow" />
      <Suspense fallback={null}>
        <HelloText />
      </Suspense>
    </Canvas>
  )
}
