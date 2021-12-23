import { generateShader } from '../utils/generateShader'

export const _10 = generateShader(
  '_10',
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
    float strength = mod(vUv.y * 10.0 * randomFactors.x, 1.0);
    strength = step(0.5, strength);

    gl_FragColor = vec4(vec3(strength), 1.0);
  }`
)
