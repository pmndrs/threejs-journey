import { generateShader } from '../utils/generateShader'

export const _44 = generateShader(
  '_44',
  /* glsl */ `
  varying vec2 vUv;

  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
  }`,
  /* glsl */ `
  varying vec2 vUv;
  uniform float uTime;
  uniform vec3 randomFactors;
  #define PI 3.1415926535897932384626433832795

  void main() {

    float strength = atan(vUv.x - 0.5, vUv.y - 0.5) * randomFactors.y;
    strength /= (PI * 2.0 * randomFactors.x);
    strength += 0.5;
    strength = mod(strength * 10.0 * randomFactors.z * sin(uTime / 5.0), 1.0);

    gl_FragColor = vec4(vec3(strength), 1.0);
  }`
)
