/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/old_mirror.glb --t 
Author: Paubr (https://sketchfab.com/paubr)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/old-mirror-704371139f0d4b1db43dc2e243bf6df8
Title: Old Mirror
*/

import * as THREE from 'three'
import React, { useContext, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useLoader } from '@react-three/fiber'
import {DimensionContext} from '../../contexts/DimensionContext'
import {MaterialContext} from '../../contexts/MaterialContext'

type GLTFResult = GLTF & {
  nodes: {
    defaultMaterial: THREE.Mesh
    defaultMaterial_1: THREE.Mesh
  }
  materials: {
    Wooden_Frame: THREE.MeshStandardMaterial
    mirror: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function OldMirror(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/old_mirror.glb') as GLTFResult
  const {material} = useContext(MaterialContext)
  const bodyMap = useLoader(THREE.TextureLoader,material.body.src)
  const BodyMaterial = new  THREE.MeshStandardMaterial()

  BodyMaterial.map = bodyMap
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI ,0, -Math.PI/2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          {/* <mesh geometry={nodes.defaultMaterial.geometry} material={BodyMaterial} /> */}
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.mirror} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/old_mirror.glb')
