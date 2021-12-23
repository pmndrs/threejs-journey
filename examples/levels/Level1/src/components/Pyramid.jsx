import { useEffect } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'

export default function Pyramid() {
  const { nodes } = useGLTF('/level.glb')
  const matcap = useTexture('/cyan.jpg')
  const [spring, api] = useSpring(() => ({ rotation: [0, 0, 0], config: { friction: 80 } }), [])
  useEffect(() => {
    let timeout
    const rotate = () => {
      api.start({ rotation: [(Math.random() - 0.5) * Math.PI * 3, 0, (Math.random() - 0.5) * Math.PI * 3] })
      timeout = setTimeout(rotate, (0.5 + Math.random() * 2) * 1000)
    }
    rotate()
    return () => void clearTimeout(timeout)
  }, [])
  return (
    <a.mesh geometry={nodes.Pyramid.geometry} position={[-0.8, 1.33, 0.25]} {...spring}>
      <meshMatcapMaterial matcap={matcap} />
    </a.mesh>
  )
}
