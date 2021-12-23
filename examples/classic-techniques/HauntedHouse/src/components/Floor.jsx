import React, { useLayoutEffect } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

function Floor() {
  const textureProps = useTexture({
    map: 'texture/floor/color.jpg',
    normalMap: 'texture/floor/normal.jpg',
    roughnessMap: 'texture/floor/roughness.jpg',
    aoMap: 'texture/floor/ambientOcclusion.jpg',
    displacementMap: 'texture/floor/height.png',
  })

  useLayoutEffect(() => {
    Object.values(textureProps).forEach((texture) => {
      texture.wrapS = THREE.RepeatWrappings
      texture.wrapT = THREE.RepeatWrapping
      texture.repeat.set(32, 32)
    })
  }, [textureProps])

  return (
    <mesh receiveShadow rotation-x={-Math.PI / 2}>
      <planeGeometry args={[200, 200]} />
      <meshStandardMaterial displacementScale={0.1} {...textureProps} />
    </mesh>
  )
}

export { Floor }
