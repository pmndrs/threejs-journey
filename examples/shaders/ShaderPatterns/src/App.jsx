import { Html, Scroll, ScrollControls } from '@react-three/drei'
import { useFrame, useThree, Canvas } from '@react-three/fiber'
import { Box, Flex } from '@react-three/flex'
import { useControls } from 'leva'
import React, { useRef, useState, Suspense } from 'react'
import * as THREE from 'three'
import * as shaders from './shaders'
import { useRandomAttribute } from './utils/useRandomAttirbute'
import styles from './styles.module.css'

const shaderNames = Object.keys(shaders)

function Scene() {
  const { height, width } = useThree((state) => state.viewport)
  const [scrollPages, setScrollPages] = useState(1)
  const handleReflow = (_, flexHeight) => setScrollPages(Math.ceil(flexHeight / height))
  return (
    <ScrollControls pages={scrollPages}>
      <Scroll>
        <Flex
          size={[width, height, 0]}
          position={[-width / 2, height / 2, 0]}
          flexDirection="row"
          justifyContent="center"
          wrap="wrap"
          padding={0.5}
          onReflow={handleReflow}>
          {shaderNames.map((shader, i) => (
            <Box key={i} centerAnchor margin={0.25}>
              <ShaderPreview label={i} Shader={shader} />
            </Box>
          ))}
        </Flex>
      </Scroll>
    </ScrollControls>
  )
}

function ShaderPreview({ label, Shader }) {
  const { randomFactors, animate } = useControls({ randomFactors: [1, 1, 1], animate: false })
  const geometryRef = useRandomAttribute()
  const shaderRef = useRef()
  useFrame((_, delta) => animate && (shaderRef.current.uTime += delta))
  return (
    <group>
      <mesh>
        <planeGeometry ref={geometryRef} args={[2, 2, 32, 32]} />
        <Shader
          side={THREE.DoubleSide}
          attach="material"
          key={shaders[Shader].key}
          ref={shaderRef}
          randomFactors={randomFactors}
        />
      </mesh>
      <Html color="black" position={[-1.2, 1.2, 0]}>
        <h2>{label}</h2>
      </Html>
    </group>
  )
}

export default function App() {
  return (
    <Canvas dpr={[1, 2]} className={styles.canvas}>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
