/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/folder_cabinet.glb --t 
Author: anujpatwari (https://sketchfab.com/anujpatwari)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/folder-cabinet-b717e66170e24501abe1b1e7fdbc57b6
Title: Folder Cabinet
*/

import * as THREE from 'three'
import React, { useContext, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useLoader } from '@react-three/fiber'
import {MaterialContext} from '../../contexts/MaterialContext'
import { DimensionContext } from '../../contexts/DimensionContext'

type GLTFResult = GLTF & {
  nodes: {
    pCylinder4_lambert1_0: THREE.Mesh
    pCylinder3_lambert1_0: THREE.Mesh
    pCylinder2_lambert1_0: THREE.Mesh
    pCylinder1_lambert1_0: THREE.Mesh
    pCube1_lambert1_0: THREE.Mesh
  }
  materials: {
    lambert1: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>


export function FolderCabinet(props: JSX.IntrinsicElements['group']) {
  const { nodes} = useGLTF('/folder_cabinet.glb') as GLTFResult
  const {material} = useContext(MaterialContext)
  const {dimensions} = useContext(DimensionContext)
  const bodyMap = useLoader(THREE.TextureLoader,material.body.src)
  const BodyMaterial = new  THREE.MeshStandardMaterial()
  const handleMap = useLoader(THREE.TextureLoader,material.door.src)
  const HandleMaterial = new  THREE.MeshStandardMaterial()
  BodyMaterial.map = bodyMap
  HandleMaterial.map = handleMap
  const {x,y,z} = dimensions

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pCylinder4_lambert1_0.geometry} material={HandleMaterial} position={[0, -y/10 , z/2]} rotation={[0, 0, Math.PI / 2]} scale={[y/50, x/8, z/30]}  />
      <mesh geometry={nodes.pCylinder4_lambert1_0.geometry} material={HandleMaterial} position={[0, -y/3 , z/2]} rotation={[0, 0, Math.PI / 2]} scale={[y/50, x/8, z/30]}  />
      <mesh geometry={nodes.pCylinder4_lambert1_0.geometry} material={HandleMaterial} position={[0,  y/10 , z/2]} rotation={[0, 0, Math.PI / 2]} scale={[y/50, x/8, z/30]}  />
      <mesh geometry={nodes.pCylinder4_lambert1_0.geometry} material={HandleMaterial} position={[0,  y/2.75 , z/1.9]} rotation={[0, 0, Math.PI / 2]} scale={[y/50, x/8, z/30]}  />
      {/* <mesh geometry={nodes.pCylinder3_lambert1_0.geometry} material={HandleMaterial} position={[0, -y/4, z/2]} rotation={[0, 0.022, Math.PI / 2]} scale={[x/30, y/30, z/30]} /> */}
      {/* <mesh geometry={nodes.pCylinder2_lambert1_0.geometry} material={HandleMaterial} position={[0, y/4, z/2]} rotation={[0, 0, Math.PI / 2]}  scale={[x/30, y/30, z/30]} /> */}
      {/* <mesh geometry={nodes.pCylinder1_lambert1_0.geometry} material={HandleMaterial} position={[0, y - 10, z]} rotation={[0, 0, Math.PI / 2]} scale={[x/30, y/30, z/30]} /> */}
      <mesh geometry={nodes.pCube1_lambert1_0.geometry} material={BodyMaterial} scale={[x, y, z]} />
    </group>
  )
}

useGLTF.preload('/folder_cabinet.glb')
