import React, { forwardRef, useMemo } from "react";
import { Uniform } from "three";
import { Effect } from "postprocessing";

const fragmentShader = /* glsl */ `
  uniform vec3 args;

  void mainUv(inout vec2 uv) {
    uv = vec2(uv.x, uv.y + sin(uv.x * 10.0 * args.x) * 0.1 * args.y * tan(args.z));
  }
`;

let _uArgs;

class DisplacementEffect extends Effect {
  constructor({ args = null } = {}) {
    super("DisplacementEffect", fragmentShader, {
      uniforms: new Map([["args", new Uniform(args)]])
    });

    _uArgs = args;
  }

  update(renderer, inputBuffer, deltaTime) {
    this.uniforms.get("args").value = _uArgs;
  }
}

const Displacement = forwardRef(({ args }, ref) => {
  const effect = useMemo(() => new DisplacementEffect({ args }), [args]);
  return <primitive ref={ref} object={effect} dispose={null} />;
});

export { Displacement };
