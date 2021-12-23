import { Points, Point, useTexture, OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import React, { Suspense, useRef } from 'react'
import * as THREE from 'three'
import colors from 'nice-color-palettes'
import { Canvas, useFrame } from '@react-three/fiber'

const particleTextures = [
  'texture/1.png',
  'texture/2.png',
  'texture/3.png',
  'texture/4.png',
  'texture/5.png',
  'texture/6.png',
  'texture/7.png',
  'texture/8.png',
  'texture/9.png',
  'texture/10.png',
  'texture/11.png',
  'texture/12.png',
  'texture/13.png',
]

const palette = colors[Math.floor(Math.random() * colors.length)]

const controls = {
  textureType: {
    value: 0,
    min: 0,
    max: 12,
    step: 1
  },
  count: {
    value: 4500,
    min: 1,
    max: 10000
  },
  size: {
    value: 0.5,
    min: 0.1,
    max: 20
  },
  radius: {
    value: 25,
    min: 1,
    max: 100
  },
  branches: {
    value: 5,
    min: 1,
    max: 20,
    step: 1
  },
  spin: {
    value: 0.5,
    min: -3,
    max: 3,
    step: 0.0001
  },
  randomness: {
    value: 0.1,
    min: 0,
    max: 1,
    step: 0.0001
  },
  randomnessPower: {
    value: 8,
    min: 1,
    max: 10,
    step: 0.0001
  },
  rotationSpeed: {
    value: 0.2,
    min: 0,
    max: 5
  },
  insideColor: palette[0],
  outsideColor: palette[1 + Math.floor(Math.random() * (palette.length - 2))]
}

function Galaxy() {
  const {
    count,
    size,
    textureType,
    radius,
    branches,
    spin,
    randomness,
    randomnessPower,
    rotationSpeed,
    insideColor,
    outsideColor
  } = useControls(controls)
  const particleTexture = useTexture(particleTextures[textureType])

  const particlesRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()

    particlesRef.current.rotation.y = elapsedTime * rotationSpeed
  })

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
      {Array.from({ length: count }).map((_, i) => {
        const pointRadius = Math.random() * radius
        const spinAngle = pointRadius * spin
        const branchAngle = ((i % branches) / branches) * Math.PI * 2

        const randomX = Math.pow(Math.random(), randomnessPower) * (Math.random() > 0.5 ? 1 : -1) * randomness * radius
        const randomY = Math.pow(Math.random(), randomnessPower) * (Math.random() > 0.5 ? 1 : -1) * randomness * radius
        const randomZ = Math.pow(Math.random(), randomnessPower) * (Math.random() > 0.5 ? 1 : -1) * randomness * radius

        const position = [
          Math.cos(branchAngle + spinAngle) * pointRadius + randomX,
          randomY,
          Math.sin(branchAngle + spinAngle) * pointRadius + randomZ
        ]

        const color = new THREE.Color(insideColor).lerp(new THREE.Color(outsideColor), pointRadius / radius)

        return <Point key={i} position={position} color={color} />
      })}
    </Points>
  )
}

function App() {
  return (
    <Canvas>
      <color attach="background" args={['black']} />
      <OrbitControls makeDefault />
      <ambientLight />
      <Suspense fallback={null}>
        <Galaxy />
      </Suspense>
  </Canvas>
  )
}

export default App