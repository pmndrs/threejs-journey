import React from 'react'
import { OrbitControls } from '@react-three/drei'

function Controls() {
  return <OrbitControls maxPolarAngle={Math.PI * 0.49} minDistance={5} maxDistance={20} makeDefault />
}

export { Controls }
