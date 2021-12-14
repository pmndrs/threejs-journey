import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import React, { useRef } from 'react'

function Ghosts() {
  const firstGhost = useRef()
  const secondGhost = useRef()
  const thirdGhost = useRef()

  const { firstColor, secondColor, thirdColor } = useControls('ghosts', {
    firstColor: '#ff00ff',
    secondColor: '#00ffff',
    thirdColor: '#ffff00'
  })

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    const ghost1Angle = elapsedTime * 0.5
    firstGhost.current.position.x = Math.cos(ghost1Angle) * 5
    firstGhost.current.position.z = Math.sin(ghost1Angle) * 5
    firstGhost.current.position.y = Math.sin(elapsedTime * 5)

    const ghost2Angle = -elapsedTime * 0.32
    secondGhost.current.position.x = Math.cos(ghost2Angle) * 6
    secondGhost.current.position.z = Math.sin(ghost2Angle) * 6
    secondGhost.current.position.y = Math.sin(elapsedTime * 6) + Math.sin(elapsedTime * 2.5)

    const ghost3Angle = -elapsedTime * 0.18
    thirdGhost.current.position.x = Math.cos(ghost3Angle) * (8 + Math.sin(elapsedTime * 0.32))
    thirdGhost.current.position.z = Math.sin(ghost3Angle) * (8 + Math.sin(elapsedTime * 0.5))
    thirdGhost.current.position.y = Math.sin(elapsedTime * 6) + Math.sin(elapsedTime * 2.5)
  })

  return (
    <>
      <pointLight castShadow ref={firstGhost} args={[firstColor, 2, 3]} />
      <pointLight castShadow ref={secondGhost} args={[secondColor, 2, 3]} />
      <pointLight castShadow ref={thirdGhost} args={[thirdColor, 2, 3]} />
    </>
  )
}

export { Ghosts }
