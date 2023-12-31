/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/mirror.glb --t 
Author: m31odyr (https://sketchfab.com/m31odyr)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/small-bathroom-mirror-c4f77299116b42fd9879b3a9da9bed62
Title: Small Bathroom Mirror
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
  }
  materials: {
    initialShadingGroup: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Mirror(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/mirror.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.initialShadingGroup} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/mirror.glb')
