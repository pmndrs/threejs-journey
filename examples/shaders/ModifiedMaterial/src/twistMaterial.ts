function twistMaterial(material, callback) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = { value: 0 };
    shader.uniforms.randomFactors = { value: [1, 1] };
    shader.vertexShader = shader.vertexShader.replace(
      "#include <common>",
      `
          #include <common>

          uniform float uTime;
          uniform vec2 randomFactors;

          mat2 get2dRotateMatrix(float _angle)
          {
              return mat2(cos(_angle), - sin(_angle), sin(_angle), cos(_angle));
          }
      `
    );
    shader.vertexShader = shader.vertexShader.replace(
      "#include <beginnormal_vertex>",
      `
      #include <beginnormal_vertex>

      float angle = (position.y + uTime * randomFactors.y) * 0.9 * randomFactors.x;
      mat2 rotateMatrix = get2dRotateMatrix(angle);

      objectNormal.xz = rotateMatrix * objectNormal.xz;
      `
    );
    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      `
      #include <begin_vertex>

      transformed.xz = rotateMatrix * transformed.xz;
      `
    );

    if (callback) callback(shader);
  };
}

export { twistMaterial };
