import { generateShader } from '../utils/generateShader'

export const _7 = generateShader(
  '_7',
  /* glsl */ `
  varying vec2 vUv;

  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
  }`,
  /* glsl */ `
  varying vec2 vUv;
  void main() {
    float strength = 1.0 - vUv.y;

    gl_FragColor = vec4(vec3(strength), 1.0);
  }`
)
