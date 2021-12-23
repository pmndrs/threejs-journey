import { useControls } from 'leva'
import React from 'react'

function DoorLight() {
  const { distance, intensity } = useControls('door light', {
    intensity: 1,
    distance: 7
  })

  return (
    <>
      <pointLight castShadow distance={distance} intensity={intensity} position={[0, 2.7, 2.9]} />
    </>
  )
}

export { DoorLight }
