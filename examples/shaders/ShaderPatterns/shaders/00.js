import { generateShader } from '../utils/generateShader'

export const _0 = generateShader(
  '_0',
  /* glsl */ `
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,
  /* glsl */ `
  uniform float uTime;
  void main() {
    gl_FragColor = vec4(0.0, sin(uTime), 1.0, 1.0);
  }`
)
