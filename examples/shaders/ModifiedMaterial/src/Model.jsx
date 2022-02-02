import {
  MeshDistortMaterial,
  MeshWobbleMaterial,
  useGLTF,
  useTexture
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { twistMaterial } from "./twistMaterial";

function Model(props) {
  const [{ modificationType, randomFactors }, set] = useControls(() => ({
    modificationType: {
      options: ["normal", "twist", "distort", "wobble"]
    },
    randomFactors: [1, 1]
  }));

  useEffect(() => {
    set({ randomFactors: [1, 1] });
  }, [modificationType, set]);

  const group = useRef();
  const { nodes } = useGLTF("models/LeePerrySmith.glb");
  const textures = useTexture({
    map: "textures/color.jpg",
    normalMap: "textures/normal.jpg"
  });

  const materialRef = useRef();
  const materialDepthRef = useRef();
  const shaderRef = useRef();
  useFrame((_, delta) => {
    if (shaderRef.current) shaderRef.current.uniforms.uTime.value += delta;
  });

  useEffect(() => {
    const material = materialRef.current;
    if (!material || modificationType !== "twist") return;
    twistMaterial(material, (shader) => (shaderRef.current = shader));
    twistMaterial(materialDepthRef.current);
  }, [nodes, materialRef, materialDepthRef, shaderRef, modificationType]);

  useEffect(() => {
    if (!shaderRef.current) return;
    shaderRef.current.uniforms.randomFactors = { value: randomFactors };
  }, [shaderRef, randomFactors]);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow geometry={nodes.LeePerrySmith.geometry}>
        <meshDepthMaterial
          ref={materialDepthRef}
          attach="customDepthMaterial"
          depthPacking={THREE.RGBADepthPacking}
        />
        {modificationType === "normal" && (
          <meshStandardMaterial {...textures} />
        )}
        {modificationType === "twist" && (
          <>
            <meshStandardMaterial ref={materialRef} {...textures} />
          </>
        )}
        {modificationType === "distort" && (
          <MeshDistortMaterial
            attach="material"
            speed={randomFactors[0]}
            distort={randomFactors[1] * 0.4}
            {...textures}
          />
        )}
        {modificationType === "wobble" && (
          <MeshWobbleMaterial
            attach="material"
            speed={randomFactors[0]}
            factor={randomFactors[1]}
            {...textures}
          />
        )}
      </mesh>
    </group>
  );
}

export { Model };
