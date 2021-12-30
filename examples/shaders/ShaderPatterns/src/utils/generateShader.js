import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import guid from 'short-uuid'

export function generateShader(name, vertex, fragment) {
  const shader = shaderMaterial({ randomFactors: [1, 1, 1], uTime: 1 }, vertex, fragment)
  shader.key = guid.generate()
  extend({ [name]: shader })
  return shader
}
