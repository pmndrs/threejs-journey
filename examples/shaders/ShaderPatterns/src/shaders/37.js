import { generateShader } from '../utils/generateShader'

export const _37 = generateShader(
  '_37',
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

    float strength = step(randomFactors.z / 25.0 , abs(distance(vUv, vec2(0.5 * randomFactors.x ,0.5 * randomFactors.y)) - 0.25));

    gl_FragColor = vec4(vec3(strength), 1.0);
  }`
)
