import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function useRandomAttribute() {
  const geometryRef = useRef()
  useEffect(() => {
    if (geometryRef.current) {
      const attributesCount = geometryRef.current.attributes.position.count
      const newRandomAttributes = new Float32Array(attributesCount)
      for (let i = 0; i < attributesCount; i++) newRandomAttributes[i] = Math.random()
      geometryRef.current.setAttribute('aRandom', new THREE.BufferAttribute(newRandomAttributes, 1))
    }
  }, [geometryRef])
  return geometryRef
}
