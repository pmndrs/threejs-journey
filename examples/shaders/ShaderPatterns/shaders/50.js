import glsl from 'babel-plugin-glsl/macro'
import { generateShader } from '../utils/generateShader'

export const _50 = generateShader(
  '_50',
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
    float strength = sin(cnoise2(vUv * 5.0 * randomFactors.xy) * randomFactors.z * uTime * 10.0);

    gl_FragColor = vec4(vec3(strength), 1.0);
  }`
)
