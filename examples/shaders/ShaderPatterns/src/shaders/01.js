import { generateShader } from '../utils/generateShader'

export const _1 = generateShader(
  '_1',
  /* glsl */ `
  varying vec2 vUv;
  varying float vWave;
  uniform vec3 randomFactors;
  uniform float uTime;

  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float wave = sin(modelPosition.x * 10.0 * randomFactors.x * uTime);

    modelPosition.z += wave * 0.1 * randomFactors.x;
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
    vUv = uv;
    vWave = wave;
  }`,
  /* glsl */ `
  varying vec2 vUv;
  varying float vWave;
  void main() {
    gl_FragColor = vec4(0.0, vWave * 0.8, 1.0, 1.0);
  }`
)
