import { generateShader } from '../utils/generateShader'

export const _2 = generateShader(
  '_2',
  /* glsl */ `
  varying vec2 vUv;
  varying float vRandom;
  attribute float aRandom;
  uniform vec3 randomFactors;  
  uniform float uTime;

  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.z += aRandom * randomFactors.x * sin(uTime) / 2.0;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
    vUv = uv;
    vRandom = aRandom;
  }`,
  /* glsl */ `
  varying vec2 vUv;
  varying float vRandom;
  void main() {
    gl_FragColor = vec4(0.0, vRandom, 1.0, 1.0);
  }`
)
