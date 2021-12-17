import { generateShader } from '../utils/generateShader'

export const _27 = generateShader(
  '_27',
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

  float random(vec2 st)
  {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  void main() {
    vec2 gridUv = vec2(floor(vUv.x * (randomFactors.x * 10.0)) / (randomFactors.x * 10.0)
                       ,floor((vUv.y + (vUv.x / randomFactors.z)) * (randomFactors.y * 10.0)) / (randomFactors.y * 10.0));
    float strength = random(gridUv * uTime);

    gl_FragColor = vec4(vec3(strength), 1.0);
  }`
)
