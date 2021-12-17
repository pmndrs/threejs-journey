import { generateShader } from '../utils/generateShader'

export const _40 = generateShader(
  '_40',
  /* glsl */ `
  varying vec2 vUv;

  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
  }`,
  /* glsl */ `
  varying vec2 vUv;
  uniform vec3 randomFactors;
  uniform float uTime;

  void main() {
    vec2 wavedUv = vec2(
      vUv.x + sin(vUv.y * 30.0 * uTime) * (randomFactors.z /10.0),
      vUv.y + sin(vUv.x * 30.0 * uTime) * (randomFactors.z /10.0)
      );

    float strength = 1.0 - step(randomFactors.y / 100.0 , abs(distance(wavedUv, vec2(0.5)) - (randomFactors.x / 4.0)));

    gl_FragColor = vec4(vec3(strength), 1.0);
  }`
)
