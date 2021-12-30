import { Points, Point, useTexture, OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import React, { Suspense, useRef } from 'react'
import * as THREE from 'three'
import colors from 'nice-color-palettes'
import { Canvas, useFrame } from '@react-three/fiber'

const particleTextures = [
  'textures/1.png',
  'textures/2.png',
  'textures/3.png',
  'textures/4.png',
  'textures/5.png',
  'textures/6.png',
  'textures/7.png',
  'textures/8.png',
  'textures/9.png',
  'textures/10.png',
  'textures/11.png',
  'textures/12.png',
  'textures/13.png',
]

const palette = colors[Math.floor(Math.random() * colors.length)]

function Particles() {
  const { count, size, positionFactor, textureType, rotationSpeed } = useControls({
    textureType: { value: 0, min: 0, max: 12, step: 1 },
    count: { value: 2000, min: 1, max: 10000 },
    size: { value: 2, min: 1, max: 20 },
    positionFactor: { value: 60, min: 5, max: 200 },
    rotationSpeed: 0.1,
  })
  const particleTexture = useTexture(particleTextures[textureType])
  const particlesRef = useRef()
  useFrame((state) => (particlesRef.current.rotation.y = state.clock.getElapsedTime() * rotationSpeed))
  return (
    <Points ref={particlesRef} limit={10000}>
      <pointsMaterial
        size={size}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
        vertexColors
        map={particleTexture}
        alphaMap={particleTexture}
      />
      {Array.from({ length: count }).map((_, i) => (
        <Point
          key={i}
          position={[
            (0.5 - Math.random()) * positionFactor,
            (0.5 - Math.random()) * positionFactor,
            (0.5 - Math.random()) * positionFactor,
          ]}
          color={palette[Math.floor(Math.random() * palette.length)]}
        />
      ))}
    </Points>
  )
}

export default function App() {
  return (
    <Canvas dpr={[1, 2]}>
      <color attach="background" args={['black']} />
      <OrbitControls makeDefault />
      <ambientLight />
      <Suspense fallback={null}>
        <Particles />
      </Suspense>
    </Canvas>
  )
}
