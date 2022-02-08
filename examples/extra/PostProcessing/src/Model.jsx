import { useGLTF } from "@react-three/drei";
import React from "react";

function Model(props) {
  const { nodes, materials } = useGLTF("models/DamagedHelmet.gltf");

  return (
    <group {...props} dispose={null}>
      <mesh
        rotation-x={Math.PI * 0.5}
        material={materials["Material_MR"]}
        geometry={nodes["node_damagedHelmet_-6514"].geometry}
        castShadow
      ></mesh>
    </group>
  );
}
export { Model };
