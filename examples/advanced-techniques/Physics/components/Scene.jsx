import { Physics } from '@react-three/cannon'
import * as CANNON from 'cannon-es'
import { useControls } from 'leva'
import React from 'react'
import { Balls } from './Balls'
import { Plane } from './Plane'

const defaultMaterial = new CANNON.Material('default')
const defaultContactMaterial = new CANNON.ContactMaterial(defaultMaterial, defaultMaterial, {
  friction: 0.1,
  restitution: 0.1
})

function Scene() {
  const { gravity } = useControls({
    gravity: {
      value: [0, -9.81, 0],
      step: 0.2
    }
  })

  return (
    <Physics allowSleep broadphase="SAP" gravity={gravity} defaultContactMaterial={defaultContactMaterial}>
      <Plane size={[200, 200]} />
      <Balls />
    </Physics>
  )
}

export { Scene }
