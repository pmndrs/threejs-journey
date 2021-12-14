import { Instance, Instances, useTexture } from '@react-three/drei'
import { useControls } from 'leva'
import React, { useMemo } from 'react'
import map from '../assets/grave/color.jpg'
import roughnessMap from '../assets/grave/roughness.jpg'

function Graves() {
  const { size, minRadius } = useControls('graves', {
    size: 200,
    minRadius: {
      value: 6,
      min: 6,
      max: 12
    }
  })

  const textureProps = useTexture({
    map: map.src,
    roughnessMap: roughnessMap.src,
  })

  return (
    <Instances castShadow>
      <boxGeometry args={[0.6, 0.8, 0.2]} />
      <meshStandardMaterial {...textureProps} />
      {Array.from({ length: size }).map((_, i) => (
        <Grave key={i} minRadius={minRadius} />
      ))}
    </Instances>
  )
}

function Grave({ minRadius }) {
  const { rotationDelta, radiusDelta } = useControls('grave', {
    radiusDelta: {
      value: 20,
      min: 1
    },
    rotationDelta: {
      value: 0.4,
      min: -1,
      max: 1
    }
  })

  const { x, z, xRotation, yRotation } = useMemo(() => {
    const angle = Math.random() * Math.PI * 2
    const radius = minRadius + Math.random() * radiusDelta

    const x = Math.cos(angle) * radius
    const z = Math.sin(angle) * radius

    const xRotation = Math.random() - 0.5
    const yRotation = Math.random() - 0.5

    return { x, z, xRotation, yRotation }
  }, [minRadius, radiusDelta])

  return <Instance position={[x, 0.3, z]} rotation={[xRotation * rotationDelta, yRotation * rotationDelta, 0]} />
}

export { Graves }
