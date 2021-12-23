import { generateShader } from '../utils/generateShader'

export const _24 = generateShader(
  '_24',
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
    float strength = floor(vUv.x * (randomFactors.x * 10.0)) / (randomFactors.x * 10.0);
    strength *= floor(vUv.y * (randomFactors.y * 10.0)) / (randomFactors.y * 10.0);


    gl_FragColor = vec4(vec3(strength), 1.0);
  }`
)
