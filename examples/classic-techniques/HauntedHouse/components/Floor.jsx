import React, { useLayoutEffect } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import map from '../assets/floor/color.jpg'
import normalMap from '../assets/floor/normal.jpg'
import roughnessMap from '../assets/floor/roughness.jpg'
import aoMap from '../assets/floor/ambientOcclusion.jpg'
import displacementMap from '../assets/floor/height.png'

function Floor() {
  const textureProps = useTexture({
    map: map.src,
    normalMap: normalMap.src,
    roughnessMap: roughnessMap.src,
    aoMap: aoMap.src,
    displacementMap: displacementMap.src,
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
