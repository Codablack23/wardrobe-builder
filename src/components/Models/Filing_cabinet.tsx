/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/filing_cabinet.glb --t 
Author: Brandon Westlake (https://sketchfab.com/dr.badass2142)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/office-filing-cabinet-free-cd6f9016db8644129af1b6026f9e46bd
Title: Office Filing Cabinet (FREE)
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube000_Material_0: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function FilingCabinet(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/filing_cabinet.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      {/* <mesh geometry={nodes.Cube000_Material_0.geometry} material={materials.Material} rotation={[-Math.PI / 2, 0, 0]} /> */}
    </group>
  )
}

useGLTF.preload('/filing_cabinet.glb')
