import React from 'react'
import {useControls} from 'leva'

function Fog() {
  const { color, near, far } = useControls('fog', {
    color: '#1b153e',
    near: {
      min: 1,
      value: 1,
    },
    far: {
      min: 10,
      value: 20
    }
  })

  return <>
    <fog attach="fog" args={[color, near, far]} />
    <color attach="background" args={[color]} />
    </>
}

export {Fog}