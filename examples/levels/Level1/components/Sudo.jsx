import { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'

export default function Sudo() {
  const { nodes } = useGLTF('/levels/level1/level.glb')
  const [spring, api] = useSpring(() => ({ rotation: [0, 0, 0], config: { friction: 40 } }), [])
  useEffect(() => {
    let timeout
    const wander = () => {
      api.start({ rotation: [0.8 + Math.random() * 0.4, 0.25 + Math.random() * 0.25, 0] })
      timeout = setTimeout(wander, (1 + Math.random() * 3) * 1000)
    }
    wander()
    return () => clearTimeout(timeout)
  }, [])
  return (
    <>
      <mesh geometry={nodes.Sudo.geometry} material={nodes.Sudo.material} position={[0.68, 0.33, -0.67]} rotation={[Math.PI / 2, 0, 0.29]} />
      <a.group position={[0.72, 0.29, -0.65]} rotation={[Math.PI / 2, 0, 0.29]} {...spring}>
        <mesh geometry={nodes.SudoHead_1.geometry} material={nodes.SudoHead_1.material} />
        <mesh geometry={nodes.SudoHead_2.geometry} material={nodes.SudoHead_2.material} />
      </a.group>
    </>
  )
}
