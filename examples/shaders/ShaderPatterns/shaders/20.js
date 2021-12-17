import { generateShader } from '../utils/generateShader'

export const _20 = generateShader(
  '_20',
  /* glsl */ `
  varying vec2 vUv;

  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
  }`,
  /* glsl */ `
  varying vec2 vUv;
  uniform vec3 randomFactors;

  void main() {
    float strength = max(abs(vUv.x - 0.5 * randomFactors.x), abs(vUv.y - 0.5 * randomFactors.y));

    gl_FragColor = vec4(vec3(strength), 1.0);
  }`
)
