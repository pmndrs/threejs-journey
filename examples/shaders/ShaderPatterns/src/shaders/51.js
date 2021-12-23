import glsl from 'babel-plugin-glsl/macro'
import { generateShader } from '../utils/generateShader'

export const _51 = generateShader(
  '_51',
  /* glsl */ `
  varying vec2 vUv;

  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
  }`,
  glsl/* glsl */ `
  #pragma glslify: cnoise2 = require(glsl-noise/classic/2d.glsl) 
  varying vec2 vUv;
  uniform float uTime;
  uniform vec3 randomFactors;

  void main() {
    float strength = sin(cnoise2(vUv * 5.0 * randomFactors.xy) * uTime * 10.0);
    strength = step(min(max(0.1 ,abs(randomFactors.z / 10.0)) , 0.9), strength);

    gl_FragColor = vec4(vec3(strength), 1.0);
  }`
)
