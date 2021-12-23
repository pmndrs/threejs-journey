import { generateShader } from '../utils/generateShader'

export const _46 = generateShader(
  '_46',
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

    float angle = atan(vUv.x - 0.5, vUv.y - 0.5) * randomFactors.y;
    angle /= (PI * 2.0 * randomFactors.x) + 0.5;
    float radius = 0.25 + sin(angle * 100.0 * uTime) * 0.02;
    float strength = 1.0 - step(0.01 * randomFactors.z, abs(distance(vUv, vec2(0.5)) - radius));

    gl_FragColor = vec4(vec3(strength), 1.0);
  }`
)
