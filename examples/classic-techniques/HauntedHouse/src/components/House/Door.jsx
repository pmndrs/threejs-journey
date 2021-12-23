import React from 'react'
import { useTexture } from '@react-three/drei'

function Door(props) {
  const textureProps = useTexture({
    map: 'texture/door/color.jpg',
    alphaMap: 'texture/door/opacity.jpg',
    normalMap: 'texture/door/normal.jpg',
    metalnessMap: 'texture/door/metallic.jpg',
    roughnessMap: 'texture/door/roughness.jpg',
    displacementMap: 'texture/door/height.png',
    aoMap: 'texture/door/ambientOcclusion.jpg',
  })

  return (
    <mesh receiveShadow position={[0, 1, 2.51]} {...props}>
      <planeGeometry args={[2.2, 2.2, 100, 100]} />
      <meshStandardMaterial transparent displacementScale={0.15} {...textureProps} />
    </mesh>
  )
}

export { Door }
