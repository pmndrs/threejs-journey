import * as THREE from 'three'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import '../shaders/FireflyMaterial'

export default function Fireflies({ count = 40 }) {
  const shader = useRef()
  const [positionArray, scaleArray] = useMemo(() => {
    const positionArray = new Float32Array(count * 3)
    const scaleArray = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      new THREE.Vector3((Math.random() - 0.5) * 4, Math.random() * 1.5, (Math.random() - 0.5) * 4).toArray(positionArray, i * 3)
      scaleArray[i] = Math.random()
    }
    return [positionArray, scaleArray]
  }, [count])
  useFrame((state, delta) => (shader.current.time += delta / 2))
  return (
    <points key={count}>
      <bufferGeometry>
        <bufferAttribute attachObject={['attributes', 'position']} count={count} array={positionArray} itemSize={3} />
        <bufferAttribute attachObject={['attributes', 'aScale']} count={count} array={scaleArray} itemSize={1} />
      </bufferGeometry>
      <fireflyMaterial ref={shader} transparent depthWrite={false} />
    </points>
  )
}
