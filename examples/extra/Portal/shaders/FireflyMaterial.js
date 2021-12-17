import * as THREE from 'three'
import { extend } from '@react-three/fiber'

export default class FireflyMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        uSize: { value: 150 },
      },
      vertexShader: `
      uniform float uPixelRatio;
      uniform float uSize;
      uniform float uTime;
      attribute float aScale;    
      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        modelPosition.y += sin(uTime + modelPosition.x * 100.0) * aScale * 0.2;
        modelPosition.z += cos(uTime + modelPosition.x * 100.0) * aScale * 0.2;
        modelPosition.x += cos(uTime + modelPosition.x * 100.0) * aScale * 0.2;
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectionPostion = projectionMatrix * viewPosition;    
        gl_Position = projectionPostion;
        gl_PointSize = uSize * aScale * uPixelRatio;
        gl_PointSize *= (1.0 / - viewPosition.z);
      }`,
      fragmentShader: `
      void main() {
        float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
        float strength = 0.05 / distanceToCenter - 0.1;
        gl_FragColor = vec4(1.0, 1.0, 1.0, strength);
      }`,
    })
  }

  get time() {
    return this.uniforms.uTime.value
  }

  set time(v) {
    this.uniforms.uTime.value = v
  }
}

extend({ FireflyMaterial })
