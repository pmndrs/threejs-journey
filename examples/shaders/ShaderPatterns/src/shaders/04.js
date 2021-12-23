import { generateShader } from '../utils/generateShader'

export const _4 = generateShader(
  '_4',
  /* glsl */ `
  varying vec2 vUv;

  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
  }`,
  /* glsl */ `
  varying vec2 vUv;
  void main() {
    gl_FragColor = vec4(vUv, 1.0, 1.0);
  }`
)
