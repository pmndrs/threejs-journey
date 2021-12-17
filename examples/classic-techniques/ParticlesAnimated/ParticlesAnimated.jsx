import { Points, Point, useTexture, OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import React, { Suspense, useRef } from 'react'
import * as THREE from 'three'
import colors from 'nice-color-palettes'
import { Canvas, useFrame } from '@react-three/fiber'

import texture1 from './assets/1.png'
import texture2 from './assets/2.png'
import texture3 from './assets/3.png'
import texture4 from './assets/4.png'
import texture5 from './assets/5.png'
import texture6 from './assets/6.png'
import texture7 from './assets/7.png'
import texture8 from './assets/8.png'
import texture9 from './assets/9.png'
import texture10 from './assets/10.png'
import texture11 from './assets/11.png'
import texture12 from './assets/12.png'
import texture13 from './assets/13.png'

const particleTextures = [
    texture1.src,
    texture2.src,
    texture3.src,
    texture4.src,
    texture5.src,
    texture6.src,
    texture7.src,
    texture8.src,
    texture9.src,
    texture10.src,
    texture11.src,
    texture12.src,
    texture13.src
]

const palette = colors[Math.floor(Math.random() * colors.length)]

function ParticlesAnimated() {
  const { count, size, positionFactor, textureType, rotationSpeed, waveFactor } = useControls({
    textureType: {
      value: 0,
      min: 0,
      max: 12,
      step: 1
    },
    count: {
      value: 2000,
      min: 1,
      max: 10000
    },
    size: {
      value: 2,
      min: 1,
      max: 20
    },
    positionFactor: {
      value: 60,
      min: 5,
      max: 200
    },
    waveFactor: {
      value: 5,
      min: 1,
      max: 500
    },
    rotationSpeed: 0.1
  })
  const particleTexture = useTexture(particleTextures[textureType])

  const particlesRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    particlesRef.current.rotation.x = elapsedTime * rotationSpeed

    for (let i = 0; i < count; i++) {
      let i3 = i * 3

      const x = particlesRef.current.geometry.attributes.position.array[i3]
      particlesRef.current.geometry.attributes.position.array[i3 + 1] = Math.sin(elapsedTime + x) * waveFactor
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true
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
      {Array.from({ length: count }).map((_, i) => (
        <Point
          key={i}
          position={[
            (0.5 - Math.random()) * positionFactor,
            (0.5 - Math.random()) * positionFactor,
            (0.5 - Math.random()) * positionFactor
          ]}
          color={palette[Math.floor(Math.random() * palette.length)]}
        />
      ))}
    </Points>
  )
}

function ParticlesAnimatedExample() {
    return (
      <Canvas>
        <color attach="background" args={['black']} />
        <OrbitControls makeDefault />
        <ambientLight />
        <Suspense fallback={null}>
          <ParticlesAnimated />
        </Suspense>
      </Canvas>
    )
  }
  

export { ParticlesAnimatedExample }
