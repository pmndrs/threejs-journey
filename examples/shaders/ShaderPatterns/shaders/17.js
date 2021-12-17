import { generateShader } from '../utils/generateShader'

export const _17 = generateShader(
  '_17',
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
    float barX = step(0.4, mod(vUv.x * 10.0 * randomFactors.x - 0.2 * randomFactors.z, 1.0)) * step(0.8, mod(vUv.y * 10.0 * randomFactors.y, 1.0));
    float barY = (step(0.8, mod(vUv.x * 10.0 * randomFactors.x, 1.0))) * step(0.4, mod(vUv.y * 10.0 * randomFactors.y - 0.2 * randomFactors.z, 1.0));

    float strength = barX + barY;

    gl_FragColor = vec4(vec3(strength), 1.0);
  }`
)
