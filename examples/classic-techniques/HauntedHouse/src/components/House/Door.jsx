import React from 'react'
import { useTexture } from '@react-three/drei'

function Door(props) {
  const textureProps = useTexture({
    map: 'textures/door/color.jpg',
    alphaMap: 'textures/door/opacity.jpg',
    normalMap: 'textures/door/normal.jpg',
    metalnessMap: 'textures/door/metallic.jpg',
    roughnessMap: 'textures/door/roughness.jpg',
    displacementMap: 'textures/door/height.png',
    aoMap: 'textures/door/ambientOcclusion.jpg',
  })

  return (
    <mesh receiveShadow position={[0, 1, 2.51]} {...props}>
      <planeGeometry args={[2.2, 2.2, 100, 100]} />
      <meshStandardMaterial transparent displacementScale={0.15} {...textureProps} />
    </mesh>
  )
}

export { Door }
