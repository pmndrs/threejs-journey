import React from 'react'
import { useTexture } from '@react-three/drei'
import map from '../../assets/door/color.jpg'
import alphaMap from '../../assets/door/opacity.jpg'
import normalMap from '../../assets/door/normal.jpg'
import metalnessMap from '../../assets/door/metallic.jpg'
import roughnessMap from '../../assets/door/roughness.jpg'
import displacementMap from '../../assets/door/height.png'
import aoMap from '../../assets/door/ambientOcclusion.jpg'

function Door(props) {
  const textureProps = useTexture({
    map: map.src,
    alphaMap: alphaMap.src,
    normalMap: normalMap.src,
    metalnessMap: metalnessMap.src,
    roughnessMap: roughnessMap.src,
    displacementMap: displacementMap.src,
    aoMap: aoMap.src,
  })

  return (
    <mesh receiveShadow position={[0, 1, 2.51]} {...props}>
      <planeGeometry args={[2.2, 2.2, 100, 100]} />
      <meshStandardMaterial transparent displacementScale={0.15} {...textureProps} />
    </mesh>
  )
}

export { Door }
