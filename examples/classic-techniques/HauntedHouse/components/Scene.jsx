import React from 'react'
import { Floor, House, Graves, Ghosts } from '.'

function HauntedHouse() {
  return (
    <group>
      <House />
      <Graves />
      <Ghosts />
      <Floor />
    </group>
  )
}

export { HauntedHouse }
