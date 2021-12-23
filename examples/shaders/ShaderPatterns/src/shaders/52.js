import glsl from 'babel-plugin-glsl/macro'
import { generateShader } from '../utils/generateShader'

export const _52 = generateShader(
  '_52',
  glsl/* glsl */ `
  varying vec2 vUv;

  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
  }`,
  glsl/* glsl */ `
  #pragma glslify: cnoise3 = require(glsl-noise/classic/3d.glsl) 
  uniform float uTime;
  uniform vec3 randomFactors;
  varying vec2 vUv;

  void main() {
    vec2 displacedUv = vUv + cnoise3(vec3(vUv * 10.0 * randomFactors.x, uTime * 0.1));
    float strength = cnoise3(vec3(displacedUv * 10.0 * randomFactors.y, uTime * 0.2));
    float outerGlow = distance(vUv, vec2(0.5)) * 2.0 - 0.5 * randomFactors.z;
    strength += outerGlow;
    strength += step(-0.2, strength) * 0.6;
    strength = clamp(strength, 0.0, 1.0);
    vec3 color = mix(vec3(0.0, 0.2, 0.8) * randomFactors.x, vec3(1.0, 1.0, 1.0) * randomFactors.y, strength);
    gl_FragColor = vec4(color, 1.0);
  }`
)