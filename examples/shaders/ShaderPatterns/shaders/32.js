import { generateShader } from '../utils/generateShader'

export const _32 = generateShader(
  '_32',
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
    float strength = (0.15 * randomFactors.z) / (distance(vec2(vUv.x * randomFactors.x, (vUv.y - 0.5 * randomFactors.y) * 5.0 + 0.5), vec2(0.5)));

    gl_FragColor = vec4(vec3(strength), 1.0);
  }`
)
