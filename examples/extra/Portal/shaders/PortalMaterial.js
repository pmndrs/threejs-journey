import * as THREE from 'three'
import { extend } from '@react-three/fiber'
import glsl from 'babel-plugin-glsl/macro'

export default class PortalMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uTime: { value: 0 },
        uColorStart: { value: new THREE.Color('hotpink') },
        uColorEnd: { value: new THREE.Color('white') },
      },
      vertexShader: `
      varying vec2 vUv;
      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectionPosition = projectionMatrix * viewPosition;
        gl_Position = projectionPosition;
        vUv = uv;
      }
      `,
      fragmentShader: glsl`
      #pragma glslify: cnoise3 = require(glsl-noise/classic/3d.glsl) 
      uniform float uTime;
      uniform vec3 uColorStart;
      uniform vec3 uColorEnd;
      varying vec2 vUv;
      void main() {
        vec2 displacedUv = vUv + cnoise3(vec3(vUv * 7.0, uTime * 0.1));
        float strength = cnoise3(vec3(displacedUv * 5.0, uTime * 0.2));
        float outerGlow = distance(vUv, vec2(0.5)) * 4.0 - 1.4;
        strength += outerGlow;
        strength += step(-0.2, strength) * 0.8;
        strength = clamp(strength, 0.0, 1.0);
        vec3 color = mix(uColorStart, uColorEnd, strength);
        gl_FragColor = vec4(color, 1.0);
      }
      `,
    })
  }

  get time() {
    return this.uniforms.uTime.value
  }

  set time(v) {
    this.uniforms.uTime.value = v
  }

  get colorStart() {
    return this.uniforms.uColorStart.value
  }

  get colorEnd() {
    return this.uniforms.uColorEnd.value
  }
}

extend({ PortalMaterial })
