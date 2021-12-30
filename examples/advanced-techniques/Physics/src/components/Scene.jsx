import { Physics } from '@react-three/cannon'
import { useControls } from 'leva'
import React from 'react'
import { Balls } from './Balls'
import { Plane } from './Plane'

export function Scene() {
  const { gravity } = useControls({ gravity: { value: [0, -9.81, 0], step: 0.2 } })
  return (
    <Physics allowSleep broadphase="SAP" gravity={gravity} defaultContactMaterial={{ friction: 0.1, restitution: 0.1 }}>
      <Plane size={[200, 200]} />
      <Balls />
    </Physics>
  )
}
