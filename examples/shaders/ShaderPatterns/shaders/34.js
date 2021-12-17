import { generateShader } from '../utils/generateShader'

export const _34 = generateShader(
  '_34',
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

  vec2 rotate(vec2 uv, float rotation, vec2 mid)
  {
      return vec2(
        cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
        cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
      );
  }

  void main() {
    vec2 rotatedUv = rotate(vUv, PI * 0.25 * randomFactors.z, vec2(0.5));

    float strength = 0.15 / (distance(vec2(rotatedUv.x * randomFactors.x, (rotatedUv.y * randomFactors.y - 0.5) * 5.0 + 0.5), vec2(0.5)));
    strength *= 0.15 / (distance(vec2(rotatedUv.y * randomFactors.y, (rotatedUv.x * randomFactors.x - 0.5) * 5.0 + 0.5), vec2(0.5)));

    gl_FragColor = vec4(vec3(strength), 1.0);
  }`
)
