import { generateShader } from '../utils/generateShader'

export const _43 = generateShader(
  '_43',
  /* glsl */ `
  varying vec2 vUv;

  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
  }`,
  /* glsl */ `
  varying vec2 vUv;
  uniform vec3 randomFactors;
  #define PI 3.1415926535897932384626433832795

  void main() {

    float strength = atan(vUv.x - 0.5 * randomFactors.x, vUv.y - 0.5 * randomFactors.y);
    strength /= (PI * 2.0 * randomFactors.z);
    strength += 0.5;

    gl_FragColor = vec4(vec3(strength), 1.0);
  }`
)
