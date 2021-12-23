import { generateShader } from '../utils/generateShader'

export const _28 = generateShader(
  '_28',
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
    float strength = length(vUv * randomFactors.x);

    gl_FragColor = vec4(vec3(strength), 1.0);
  }`
)
