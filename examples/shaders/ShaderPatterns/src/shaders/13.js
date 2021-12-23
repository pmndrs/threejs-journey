import { generateShader } from '../utils/generateShader'

export const _13 = generateShader(
  '_13',
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
    float strength = step(0.8,mod(vUv.x * 10.0 * randomFactors.x, 1.0));
    strength += step(0.8, mod(vUv.y * 10.0 * randomFactors.y, 1.0));

    gl_FragColor = vec4(vec3(strength), 1.0);
  }`
)
