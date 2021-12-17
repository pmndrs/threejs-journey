import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, useMemo } from 'react'
import useRefs from 'react-use-refs'
import * as THREE from 'three'

const Box = React.forwardRef(function (props, ref) {
    const randomFactor = useMemo(() => 0.5 + Math.random() * 3, [])
    useFrame(({ clock }) => {
      const elepsedTime = clock.getElapsedTime()
      ref.current.position.y = Math.sin(elepsedTime * randomFactor) * 1.5
    })
  
    return (
      <mesh ref={ref} {...props}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    )
})
  
Box.displayName = 'Box'

function RayCaster() {
  const [box1Ref, box2Ref, box3Ref] = useRefs()

  const raycaster = useMemo(() => new THREE.Raycaster(new THREE.Vector3(-3, 0, 0), new THREE.Vector3(1, 0, 0)), [])

  useFrame(() => {
    const intersections = raycaster.intersectObjects([box1Ref.current, box2Ref.current, box3Ref.current])
    ;[box1Ref, box2Ref, box3Ref].forEach((ref) => {
      ref.current.material.color.set('red')
    })
    for (const intersect of intersections) {
      intersect.object.material.color.set('#0000ff')
    }
  })

  return (
    <>
      <Box ref={box1Ref} position={[-2, 0, 0]} />
      <Box ref={box2Ref} />
      <Box ref={box3Ref} position={[2, 0, 0]} />
    </>
  )
}

function RayCasterExample() {
    return (
        <Canvas>
        <color attach="background" args={['black']} />
        <OrbitControls makeDefault />
        <ambientLight />
        <Suspense fallback={null}>
            <RayCaster />
        </Suspense>
        </Canvas>
    )
}

export { RayCasterExample }