import React from 'react'
import { Bushes } from './Bushes'
import { Door } from './Door'
import { DoorLight } from './DoorLight'
import { Roof } from './Roof'
import { Walls } from './Walls'

function House(props) {
  return (
    <group {...props}>
      <Roof />
      <Walls />
      <DoorLight />
      <Door />
      <Bushes />
    </group>
  )
}

export { House }
