import { generateShader } from '../utils/generateShader'

export const _30 = generateShader(
  '_30',
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
    float strength = 1.0 * randomFactors.z - distance(vUv, vec2(0.5 * randomFactors.x ,0.5 * randomFactors.y));

    gl_FragColor = vec4(vec3(strength), 1.0);
  }`
)
