import React, { forwardRef, useMemo } from "react";
import { Uniform } from "three";
import { Effect } from "postprocessing";

const fragmentShader = /* glsl */ `
  uniform sampler2D normalMap;
  uniform sampler2D tDiffuse;
  uniform vec3 args;

	void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec3 normalColor = texture2D(normalMap, uv).xyz * 2.0 - 1.0;
    vec2 newUv = uv + normalColor.xy * 0.05 * args.x;
    vec4 color = texture2D(tDiffuse, newUv);

    vec3 lightDirection = normalize(vec3(- 1.0, 1.0, 0.0));
    float lightness = clamp(dot(normalColor, lightDirection), 0.0, 1.0);
    color.rgb += lightness * 2.0 * args.y;

    outputColor = color;
  }
`;

let _uNormalMap;
let _uArgs;

class TextureOverlayEffect extends Effect {
  constructor({ normalMap = null, args = null } = {}) {
    super("TextureOverlayEffect", fragmentShader, {
      uniforms: new Map([
        ["normalMap", new Uniform(normalMap)],
        ["args", new Uniform(args)]
      ])
    });

    _uNormalMap = normalMap;
    _uArgs = args;
  }

  update(renderer, inputBuffer, deltaTime) {
    this.uniforms.get("normalMap").value = _uNormalMap;
    this.uniforms.get("args").value = _uArgs;
  }
}

const TextureOverlay = forwardRef(({ normalMap, args }, ref) => {
  const effect = useMemo(() => new TextureOverlayEffect({ normalMap, args }), [
    normalMap,
    args
  ]);
  return <primitive ref={ref} object={effect} dispose={null} />;
});

export { TextureOverlay };
