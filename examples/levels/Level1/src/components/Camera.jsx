import { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'

export default function Camera() {
  const { nodes } = useGLTF('/level.glb')
  const [spring, api] = useSpring(() => ({ 'rotation-z': 0, config: { friction: 40 } }), [])
  useEffect(() => {
    let timeout
    const wander = () => {
      api.start({ 'rotation-z': Math.random() })
      timeout = setTimeout(wander, (1 + Math.random() * 5) * 1000)
    }
    wander()
    return () => clearTimeout(timeout)
  }, [])
  return <a.primitive {...spring} object={nodes.Camera} />
}
