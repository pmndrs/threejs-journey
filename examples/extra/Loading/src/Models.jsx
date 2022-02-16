// File not related to excerise, check './Loader/Loader.jsx'

import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

function Barn(props) {
  const { nodes, materials } = useGLTF(
    "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/barn/model.gltf"
  );

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Barn_001.geometry} material={materials.None} />
    </group>
  );
}

function Skunk(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/skunk/model.gltf"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions?.Idle.play();
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Bone} position={[1, 0, 0]} />
      <skinnedMesh
        geometry={nodes.Cube003.geometry}
        material={materials["1"]}
        skeleton={nodes.Cube003.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Cube003_1.geometry}
        material={materials["2"]}
        skeleton={nodes.Cube003_1.skeleton}
      />
    </group>
  );
}

function Wolf(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/korrigan-wolf/model.gltf"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions?.course_cavalier.play();
    actions?.course_loup.play();
  }, [actions]);

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();
    const radius = 12;
    group.current.position.x = Math.sin(elapsedTime / 2.5) * radius;
    group.current.position.z = Math.cos(elapsedTime / 2.5) * radius;
    group.current.rotation.y += 0.01;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[0, 0.48, 0]} scale={0.15}>
        <primitive object={nodes.root} />
        <skinnedMesh
          geometry={nodes.Cavalier.geometry}
          material={materials["color_main.015"]}
          skeleton={nodes.Cavalier.skeleton}
        />
      </group>
      <group scale={0.61}>
        <primitive object={nodes.spine004} />
        <skinnedMesh
          geometry={nodes.Loup.geometry}
          material={materials["color_main.002"]}
          skeleton={nodes.Loup.skeleton}
        />
      </group>
    </group>
  );
}

export default function Cart(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/ankou-with-cart/model.gltf"
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.rootankou} />
      <group name="ankou">
        <primitive object={nodes.spine004} />
        <skinnedMesh
          geometry={nodes.horse.geometry}
          material={nodes.horse.material}
          skeleton={nodes.horse.skeleton}
        />
        <mesh
          geometry={nodes.horse_coth.geometry}
          material={nodes.horse_coth.material}
          rotation={[0, 0.01, 0]}
        />
        <mesh
          geometry={nodes.horse_strap.geometry}
          material={nodes.horse_strap.material}
          rotation={[0, 0.01, 0]}
        />
        <mesh
          geometry={nodes.horse_strap001.geometry}
          material={nodes.horse_strap001.material}
          rotation={[0, 0.01, 0]}
        />
        <mesh
          geometry={nodes.strap_hook.geometry}
          material={nodes.strap_hook.material}
          rotation={[Math.PI / 2, 0, -0.01]}
        />
        <mesh
          geometry={nodes.strap_hook001.geometry}
          material={nodes.strap_hook001.material}
          position={[1.28, 0, -0.01]}
          rotation={[Math.PI / 2, 0, -0.01]}
        />
        <mesh
          geometry={nodes.strap_hook002.geometry}
          material={nodes.strap_hook002.material}
          position={[0, 0.01, 0.36]}
          rotation={[Math.PI / 2, 0, -0.01]}
        />
        <mesh
          geometry={nodes.strap_hook003.geometry}
          material={nodes.strap_hook003.material}
          position={[1.28, 0.01, 0.35]}
          rotation={[Math.PI / 2, 0, -0.01]}
        />
      </group>
      <skinnedMesh
        geometry={nodes.ankou_sickle.geometry}
        material={nodes.ankou_sickle.material}
        skeleton={nodes.ankou_sickle.skeleton}
      />
      <skinnedMesh
        geometry={nodes.ankou002.geometry}
        material={nodes.ankou002.material}
        skeleton={nodes.ankou002.skeleton}
      />
      <group position={[-0.08, 0.81, -0.78]}>
        <primitive object={nodes.cart} />
        <skinnedMesh
          geometry={nodes.accroche_crane.geometry}
          material={nodes.accroche_crane.material}
          skeleton={nodes.accroche_crane.skeleton}
        />
        <mesh
          geometry={nodes.cart_shaft.geometry}
          material={nodes.cart_shaft.material}
          position={[0.1, -0.8, 0.78]}
          rotation={[Math.PI / 2, 0, -1.56]}
        />
        <skinnedMesh
          geometry={nodes.bloc_wheel_D.geometry}
          material={nodes.bloc_wheel_D.material}
          skeleton={nodes.bloc_wheel_D.skeleton}
        />
        <skinnedMesh
          geometry={nodes.bloc_wheel_G.geometry}
          material={nodes.bloc_wheel_G.material}
          skeleton={nodes.bloc_wheel_G.skeleton}
        />
        <skinnedMesh
          geometry={nodes.cart_base.geometry}
          material={nodes.cart_base.material}
          skeleton={nodes.cart_base.skeleton}
        />
        <skinnedMesh
          geometry={nodes.cart_boad_AB.geometry}
          material={nodes.cart_boad_AB.material}
          skeleton={nodes.cart_boad_AB.skeleton}
        />
        <skinnedMesh
          geometry={nodes.cart_boad_AH.geometry}
          material={nodes.cart_boad_AH.material}
          skeleton={nodes.cart_boad_AH.skeleton}
        />
        <skinnedMesh
          geometry={nodes.cart_boad_DB.geometry}
          material={nodes.cart_boad_DB.material}
          skeleton={nodes.cart_boad_DB.skeleton}
        />
        <skinnedMesh
          geometry={nodes.cart_boad_DH.geometry}
          material={nodes.cart_boad_DH.material}
          skeleton={nodes.cart_boad_DH.skeleton}
        />
        <skinnedMesh
          geometry={nodes.cart_boad_GB.geometry}
          material={nodes.cart_boad_GB.material}
          skeleton={nodes.cart_boad_GB.skeleton}
        />
        <skinnedMesh
          geometry={nodes.cart_boad_GH.geometry}
          material={nodes.cart_boad_GH.material}
          skeleton={nodes.cart_boad_GH.skeleton}
        />
        <skinnedMesh
          geometry={nodes.cart_post_AD.geometry}
          material={nodes.cart_post_AD.material}
          skeleton={nodes.cart_post_AD.skeleton}
        />
        <skinnedMesh
          geometry={nodes.cart_post_AG.geometry}
          material={nodes.cart_post_AG.material}
          skeleton={nodes.cart_post_AG.skeleton}
        />
        <skinnedMesh
          geometry={nodes.cart_post_AM.geometry}
          material={nodes.cart_post_AM.material}
          skeleton={nodes.cart_post_AM.skeleton}
        />
        <skinnedMesh
          geometry={nodes.cart_post_Ar.geometry}
          material={nodes.cart_post_Ar.material}
          skeleton={nodes.cart_post_Ar.skeleton}
        />
        <skinnedMesh
          geometry={nodes.cart_post_ArD.geometry}
          material={nodes.cart_post_ArD.material}
          skeleton={nodes.cart_post_ArD.skeleton}
        />
        <skinnedMesh
          geometry={nodes.cart_post_ArG.geometry}
          material={nodes.cart_post_ArG.material}
          skeleton={nodes.cart_post_ArG.skeleton}
        />
        <skinnedMesh
          geometry={nodes.cart_post_crane.geometry}
          material={nodes.cart_post_crane.material}
          skeleton={nodes.cart_post_crane.skeleton}
        />
        <skinnedMesh
          geometry={nodes.cart_post_DMA.geometry}
          material={nodes.cart_post_DMA.material}
          skeleton={nodes.cart_post_DMA.skeleton}
        />
        <skinnedMesh
          geometry={nodes.cart_post_DMAr.geometry}
          material={nodes.cart_post_DMAr.material}
          skeleton={nodes.cart_post_DMAr.skeleton}
        />
        <skinnedMesh
          geometry={nodes.cart_post_GMA.geometry}
          material={nodes.cart_post_GMA.material}
          skeleton={nodes.cart_post_GMA.skeleton}
        />
        <skinnedMesh
          geometry={nodes.cart_post_GMAr.geometry}
          material={nodes.cart_post_GMAr.material}
          skeleton={nodes.cart_post_GMAr.skeleton}
        />
        <skinnedMesh
          geometry={nodes.cart_rope.geometry}
          material={nodes.cart_rope.material}
          skeleton={nodes.cart_rope.skeleton}
        />
        <skinnedMesh
          geometry={nodes.hub_wheel_D.geometry}
          material={nodes.hub_wheel_D.material}
          skeleton={nodes.hub_wheel_D.skeleton}
        />
        <skinnedMesh
          geometry={nodes.hub_wheel_G.geometry}
          material={nodes.hub_wheel_G.material}
          skeleton={nodes.hub_wheel_G.skeleton}
        />
        <skinnedMesh
          geometry={nodes.skull_1.geometry}
          material={nodes.skull_1.material}
          skeleton={nodes.skull_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.spokes_wheel_D.geometry}
          material={nodes.spokes_wheel_D.material}
          skeleton={nodes.spokes_wheel_D.skeleton}
        />
        <skinnedMesh
          geometry={nodes.spokes_wheel_G.geometry}
          material={nodes.spokes_wheel_G.material}
          skeleton={nodes.spokes_wheel_G.skeleton}
        />
        <skinnedMesh
          geometry={nodes.steel_wheel_D.geometry}
          material={nodes.steel_wheel_D.material}
          skeleton={nodes.steel_wheel_D.skeleton}
        />
        <skinnedMesh
          geometry={nodes.steel_wheel_G.geometry}
          material={nodes.steel_wheel_G.material}
          skeleton={nodes.steel_wheel_G.skeleton}
        />
        <skinnedMesh
          geometry={nodes.wood_wheel_D.geometry}
          material={nodes.wood_wheel_D.material}
          skeleton={nodes.wood_wheel_D.skeleton}
        />
        <skinnedMesh
          geometry={nodes.wood_wheel_G.geometry}
          material={nodes.wood_wheel_G.material}
          skeleton={nodes.wood_wheel_G.skeleton}
        />
      </group>
    </group>
  );
}


function Girafee(props) {
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/giraffe/model.gltf')
  return <primitive object={scene} {...props} />
}


function Table(props) {
  const { scene } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/table/model.gltf')
  return <primitive object={scene} {...props} />
}


function TurnTable(props) {
  const { scene } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/turntable/model.gltf')
  return <primitive object={scene} {...props} />
}


        
        
function Wizard(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/druid/model.gltf')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
      actions?.PortalOpen.play();
    }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={1.91} >
      <primitive object={nodes.root} />
      <skinnedMesh geometry={nodes.druid.geometry} material={materials.color_main} skeleton={nodes.druid.skeleton} />
      </group>
    </group>
  )
}

function DancingElf(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/korrigan-hat/model.gltf')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
      actions?.course_chapeau.play();
    }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[0, 0.01, 0,]} >
      <primitive object={nodes.root} />
      <skinnedMesh geometry={nodes.Chapeau.geometry} material={materials['color_main.014']} skeleton={nodes.Chapeau.skeleton} />
      </group>
    </group>
  )
}

function Models() {
  return (
    <group>
      <Skunk position={[3.5, 0, 1]} scale={0.1} rotation-y={-Math.PI * 0.25} />
      <Barn />
      <Wolf position={[5, -0.2, 0]} rotation-y={Math.PI * 0.25} />
      <Cart position={[-5, 0, 0]} scale={0.4} />
      <Girafee position={[3, 0, -3 ]} rotation-y={Math.PI * -0.25} scale={3}/>
      <Table scale={0.2} position={[0, 0, 0.8]} />
      <TurnTable position={[0.5, 0.15, -1]} />
      <Wizard scale={0.6}/>
      <DancingElf position={[0.32, 0.2, -1]} />
    </group>
  );
}

export { Models };
