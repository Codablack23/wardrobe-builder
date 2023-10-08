/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/mirror2.glb --t 
Author: Canary Games (https://sketchfab.com/CapAlatriste)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/6-infinite-mirror-3december2019-aed1aa465fe84ec5ab16d6cdad1ff78c
Title: #6 Infinite Mirror 3December2019
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
    Object_3: THREE.Mesh
    Object_4: THREE.Mesh
    Object_5: THREE.Mesh
    Object_6: THREE.Mesh
  }
  materials: {
    Magic_Mirror_Back_Front: THREE.MeshStandardMaterial
    Magic_Mirror_Fondo: THREE.MeshPhysicalMaterial
    Magic_Mirror_Front: THREE.MeshStandardMaterial
    Magic_Mirror: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function MirrorModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/mirror2.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, 0, 6]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Magic_Mirror_Back_Front} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Magic_Mirror_Fondo} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Magic_Mirror_Front} />
        {/* <mesh geometry={nodes.Object_5.geometry} material={materials.Magic_Mirror} /> */}
        {/* <mesh geometry={nodes.Object_6.geometry} material={materials.Magic_Mirror} /> */}
      </group>
    </group>
  )
}

useGLTF.preload('/mirror2.glb')