import React from 'react'
import { useTexture } from '@react-three/drei'
import map from '../../assets/walls/color.jpg'
import normalMap from '../../assets/walls/normal.jpg'
import roughnessMap from '../../assets/walls/roughness.jpg'
import aoMap from '../../assets/walls/ambientOcclusion.jpg'

function Walls() {
  const textureProps = useTexture({
    map: map.src, 
    normalMap: normalMap.src, 
    roughnessMap: roughnessMap.src, 
    aoMap: aoMap.src, 
  })

  return (
    <mesh castShadow receiveShadow position={[0, 1.5, 0]}>
      <boxGeometry args={[5, 3, 5]} />
      <meshStandardMaterial {...textureProps} />
    </mesh>
  )
}

export { Walls }
