import * as THREE from 'three'
import { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'

export default function Sudo() {
  const { nodes } = useGLTF('/level-react-draco.glb')
  const [spring, api] = useSpring(() => ({ rotation: [Math.PI / 2, 0, 0.29], config: { friction: 40 } }), [])
  useEffect(() => {
    let timeout
    const wander = () => {
      api.start({
        rotation: [
          Math.PI / 2 + THREE.MathUtils.randFloatSpread(2) * 0.3,
          0,
          0.29 + THREE.MathUtils.randFloatSpread(2) * 0.2,
        ],
      })
      timeout = setTimeout(wander, (1 + Math.random() * 3) * 1000)
    }
    wander()
    return () => clearTimeout(timeout)
  }, [])
  return (
    <>
      <mesh
        geometry={nodes.Sudo.geometry}
        material={nodes.Sudo.material}
        position={[0.68, 0.33, -0.67]}
        rotation={[Math.PI / 2, 0, 0.29]}
      />
      <a.mesh
        geometry={nodes.SudoHead.geometry}
        material={nodes.SudoHead.material}
        position={[0.68, 0.33, -0.67]}
        {...spring}
      />
    </>
  )
}
