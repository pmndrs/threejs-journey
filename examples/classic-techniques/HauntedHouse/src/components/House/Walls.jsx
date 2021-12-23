import React from 'react'
import { useTexture } from '@react-three/drei'

function Walls() {
  const textureProps = useTexture({
    map: 'texture/walls/color.jpg',
    normalMap: 'texture/walls/normal.jpg',
    roughnessMap: 'texture/walls/roughness.jpg',
    aoMap: 'texture/walls/ambientOcclusion.jpg',
  })

  return (
    <mesh castShadow receiveShadow position={[0, 1.5, 0]}>
      <boxGeometry args={[5, 3, 5]} />
      <meshStandardMaterial {...textureProps} />
    </mesh>
  )
}

export { Walls }
