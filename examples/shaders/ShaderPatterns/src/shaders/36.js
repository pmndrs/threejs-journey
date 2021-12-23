import { generateShader } from '../utils/generateShader'

export const _36 = generateShader(
  '_36',
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

    float strength = abs(distance(vUv, vec2(0.5 * randomFactors.x ,0.5 * randomFactors.y)) - (randomFactors.z / 4.0));

    gl_FragColor = vec4(vec3(strength), 1.0);
  }`
)
