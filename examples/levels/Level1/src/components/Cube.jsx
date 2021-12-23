import { useState, useEffect } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'

export default function Cube() {
  const { nodes } = useGLTF('/level.glb')
  const matcap = useTexture('/pink.jpg')
  const [floating, setFloating] = useState(false)
  const [rotation, setRotation] = useState([0, 0, 0])
  const positionSpring = useSpring({ position: [0, floating ? 0.2 : 0, 0], config: { friction: 80 } })
  const rotationSpring = useSpring({ rotation, config: { friction: 40 } })
  useEffect(() => {
    let timeout
    let rotation = [0, 0]
    const bounce = () => {
      rotation[0] += Math.ceil(Math.random() * 3)
      rotation[1] += Math.ceil(Math.random() * 3)
      setFloating((v) => !v)
      setRotation([rotation[0] * Math.PI * 0.5, rotation[1] * Math.PI * 0.5, 0])
      timeout = setTimeout(bounce, 1.5 * 1000)
    }
    bounce()
    return () => clearTimeout(timeout)
  }, [])
  return (
    <a.group {...positionSpring}>
      <a.mesh geometry={nodes.Cube.geometry} position={[-0.8, 1.24, 0.61]} {...rotationSpring}>
        <meshMatcapMaterial matcap={matcap} />
      </a.mesh>
    </a.group>
  )
}
