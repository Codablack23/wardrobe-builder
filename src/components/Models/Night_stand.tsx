/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/night_stand.glb --t 
Author: VioletBoom (https://sketchfab.com/violetboom)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/night-stand-c2b22722e149416bacf7420a59cb472b
Title: Night Stand
*/

import * as THREE from 'three'
import React, { useContext, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useLoader } from '@react-three/fiber'
import {DimensionContext} from '../../contexts/DimensionContext'
import {MaterialContext} from '../../contexts/MaterialContext'
import { materials } from '../../repo'

type GLTFResult = GLTF & {
  nodes: {
    Cube000_0: THREE.Mesh
    Cube_0: THREE.Mesh
    Cube001_0: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function NightStand(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF('/night_stand.glb') as GLTFResult
  const {material} = useContext(MaterialContext)
  // const {dimensions} = useContext(DimensionContext)
  const bodyMap = useLoader(THREE.TextureLoader,material.body.src)
  const BodyMaterial = new  THREE.MeshStandardMaterial()
  const handleMap = useLoader(THREE.TextureLoader,material.door.src)
  const HandleMaterial = new  THREE.MeshStandardMaterial()
  BodyMaterial.map = bodyMap
  HandleMaterial.map = handleMap
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0.026, 0, 2.15]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Cube001_0.geometry} material={BodyMaterial} />
          <mesh geometry={nodes.Cube_0.geometry} material={HandleMaterial} position={[0.839, -1.835, 0.105]} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
        {/* <mesh geometry={nodes.Cube000_0.geometry} scale={[0.35,1,1]} material={BodyMaterial} position={[0.059, 0.013, 1]} rotation={[0, Math.PI / 2, 0]} /> */}
      </group>
    </group>
  )
}

useGLTF.preload('/night_stand.glb')