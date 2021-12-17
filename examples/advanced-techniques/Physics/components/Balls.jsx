import { useSphere } from '@react-three/cannon'
import { useFrame } from '@react-three/fiber'
import { button, useControls } from 'leva'
import palettes from 'nice-color-palettes'
import React, { useMemo, useState } from 'react'

const palette = palettes[Math.floor(Math.random() * (palettes.length - 1))]

function generateRandomBall() {
  return {
    position: [(0.5 - Math.random()) * 50, 20 + (0.5 - Math.random()) * 50, (0.5 - Math.random()) * 50],
    color: palette[Math.floor(Math.random() * (palette.length - 1))],
    radius: Math.random() * 5
  }
}

function Balls() {
  const [balls, setBalls] = useState(() => Array.from({ length: 3 }).map(generateRandomBall))

  function addRandomBall() {
    setBalls((currBalls) => [...currBalls, generateRandomBall()])
  }

  const { flood } = useControls({
    addBall: button(addRandomBall),
    flood: false
  })

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    if (flood && Math.floor(elapsedTime * 10) % 2 === 0) {
      addRandomBall()
    }
  })

  return balls.map((ballInfo, i) => <Ball key={i} {...ballInfo} />)
}

function Ball({ position = [0, 1, 0], color, radius }) {
  // TODO: Move sound file to relative folder instead of `public`
  const knockSound = useMemo(() => new Audio('/sounds/knock.wav'), [])

  function playAudio(collision) {
    if (collision.contact.impactVelocity > 1.5) {
      knockSound.volume = radius / 5
      knockSound.play()
    }
  }

  const [ref] = useSphere(() => ({ mass: 1, args: [radius], position, friction: 0.1, onCollide: playAudio }))

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export { Balls }
