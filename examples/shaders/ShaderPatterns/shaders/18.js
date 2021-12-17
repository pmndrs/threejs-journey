import { generateShader } from '../utils/generateShader'

export const _18 = generateShader(
  '_18',
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
    float strength = abs(vUv.x - 0.5 * randomFactors.x);

    gl_FragColor = vec4(vec3(strength), 1.0);
  }`
)
