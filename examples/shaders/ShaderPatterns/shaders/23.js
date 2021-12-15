import { generateShader } from '../utils/generateShader'

export const _23 = generateShader(
  '_23',
  /* glsl */ `
  varying vec2 vUv;

  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
  }`,
  /* glsl */ `
  uniform vec3 randomFactors;
  varying vec2 vUv;

  void main() {
    float strength = floor(vUv.x * (randomFactors.x * 10.0)) / (randomFactors.x * 10.0);

    gl_FragColor = vec4(vec3(strength), 1.0);
  }`
)
