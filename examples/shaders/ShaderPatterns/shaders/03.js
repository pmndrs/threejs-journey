import { generateShader } from '../utils/generateShader'

export const _3 = generateShader(
  '_3',
  /* glsl */ `
  varying vec2 vUv;
  varying vec2 vWave;
  uniform vec3 randomFactors;
  uniform float uTime;

  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float waveX = sin(modelPosition.x * 30.0  * (uTime / 2.0)) * (randomFactors.x / 1.0);
    float waveY = sin(position.y * 30.0  * (uTime / 2.0)) * (randomFactors.y / 1.0);

    modelPosition.z += waveX * 0.1 * randomFactors.x;
    modelPosition.z += waveY * 0.1 * randomFactors.y;
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
    vUv = uv;
    vWave = vec2(waveX, waveY);
  }`,
  /* glsl */ `
  varying vec2 vUv;
  varying vec2 vWave;
  void main() {
    gl_FragColor = vec4(0.0, max(vWave.x, vWave.y), 1.0, 1.0);
  }`
)
