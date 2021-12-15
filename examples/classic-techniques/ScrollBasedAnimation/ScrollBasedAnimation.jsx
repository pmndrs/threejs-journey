import { Scroll, ScrollControls } from '@react-three/drei'
import { useFrame, Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Html } from './components/Html'
import { Objects } from './components/Objects'
import { Particles } from './components/Particles'
import styles from './styles.module.css'

function ScrollBasedAnimation() {
  useFrame(({ mouse, camera }) => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.5, 0.03)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.8, 0.01)
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, Math.max(4, Math.abs(mouse.x * mouse.y * 8)), 0.01)
    camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, mouse.x * -Math.PI * 0.025, 0.001)
  })

  return (
    <ScrollControls pages={3}>
      <Scroll>
        <Particles />
        <Objects />
      </Scroll>
      <Scroll html>
        <Html />
      </Scroll>
    </ScrollControls>
  )
}

function ScrollBasedAnimationExample() {
    return (
        <Canvas className={styles.canvas}>
        <ambientLight />
        <directionalLight color="red" intensity={10} />
        <Suspense fallback={null}>
            <ScrollBasedAnimation />
        </Suspense>
        </Canvas>
    )
}

export {ScrollBasedAnimationExample}  