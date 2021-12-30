import { useEffect } from 'react'
import { useGLTF, useMatcapTexture } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'

export default function Icon() {
  const { nodes } = useGLTF('/level-react-draco.glb')
  const [matcap] = useMatcapTexture('65A0C7_C3E4F8_A7D5EF_97CAE9', 1024)
  const [springs, api] = useSpring(() => ({
    rotation: [0.8, 1.1, -0.4],
    position: [-0.79, 1.3, 0.62],
    config: { mass: 2, tension: 200 },
  }))
  useEffect(() => {
    let timeout
    let floating = false
    const bounce = () => {
      api.start({ rotation: [0.8 - (floating ? 0.3 : 0), 1.1, -0.4], position: [-0.79, floating ? 1.4 : 1.3, 0.62] })
      floating = !floating
      timeout = setTimeout(bounce, 1.5 * 1000)
    }
    bounce()
    return () => clearTimeout(timeout)
  }, [])
  return (
    <a.mesh geometry={nodes.React.geometry} {...springs}>
      <meshMatcapMaterial matcap={matcap} />
    </a.mesh>
  )
}
