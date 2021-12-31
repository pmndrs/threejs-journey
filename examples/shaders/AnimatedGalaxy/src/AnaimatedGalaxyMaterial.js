import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

const AnimatedGalaxyMaterial = new shaderMaterial(
  { uSize: 2, uTime: 1 },
  /* glsl */ `
    uniform float uTime;
    uniform float uSize;
    attribute float size;
    varying vec3 vColor;

    void main()
    {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);

        float angle = atan(modelPosition.x, modelPosition.z);
        float distanceToCenter = length(modelPosition.xz);
        float angleOffset = (1.0 / distanceToCenter) * uTime * 2.0;
        angle += angleOffset;
        modelPosition.x = cos(angle) * distanceToCenter;
        modelPosition.z = sin(angle) * distanceToCenter;

        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
        gl_Position = projectedPosition;

        gl_PointSize =  uSize * size * min(10.0, uTime * 2.0);
        gl_PointSize *= (1.0 / - viewPosition.z);
    
        vColor = color;
    }
  `,
  /* glsl */ `
    varying vec3 vColor;

    void main()
    {
        float strength = (0.15) / (distance(vec2(gl_PointCoord.x, (gl_PointCoord.y- 0.5) * 5.0 + 0.5), vec2(0.5)));
        strength *= (0.15) / (distance(vec2(gl_PointCoord.y, (gl_PointCoord.x- 0.5) * 5.0 + 0.5), vec2(0.5)));

        vec3 color = mix(vec3(0.0), vColor, strength);

        gl_FragColor = vec4(color, 1.0);
    }
  `
);

AnimatedGalaxyMaterial.key = Math.random();

extend({ AnimatedGalaxyMaterial });

export { AnimatedGalaxyMaterial };
