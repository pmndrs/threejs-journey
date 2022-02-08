import React, { forwardRef, useMemo } from "react";
import { Uniform } from "three";
import { Effect } from "postprocessing";

const fragmentShader = /* glsl */ `
  uniform vec3 tint;

	void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    outputColor = inputColor * vec4(tint, 1.0);
  }
`;

let _uTint;

class TintEffect extends Effect {
  constructor({ tint = null } = {}) {
    super("TintEffect", fragmentShader, {
      uniforms: new Map([["tint", new Uniform(tint)]])
    });

    _uTint = tint;
  }

  update(renderer, inputBuffer, deltaTime) {
    this.uniforms.get("tint").value = _uTint;
  }
}

const Tint = forwardRef(({ tint }, ref) => {
  const effect = useMemo(() => new TintEffect({ tint }), [tint]);
  return <primitive ref={ref} object={effect} dispose={null} />;
});

export { Tint };
