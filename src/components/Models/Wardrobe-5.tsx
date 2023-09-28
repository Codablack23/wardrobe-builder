/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/wardrobe-5.glb --t 
Author: ElectroDbstp (https://sketchfab.com/ElectroDbstp)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/wardrobe-30f77ad5f3874ce1a0af653268494927
Title: Wardrobe
*/

import * as THREE from 'three'
import React, { useContext, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { MaterialContext } from '../../contexts/MaterialContext'
import { useLoader } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Wardrobe__0: THREE.Mesh
    ['Box001_Material_#27_0']: THREE.Mesh
    ['Box002_Material_#27_0']: THREE.Mesh
    ['Box003_Material_#27_0']: THREE.Mesh
    ['Box004_Material_#27_0']: THREE.Mesh
    ['Box005_Material_#27_0']: THREE.Mesh
    ['Box006_Material_#27_0']: THREE.Mesh
    ['Box007_Material_#27_0']: THREE.Mesh
    ['Box008_Material_#27_0']: THREE.Mesh
    ['Box009_Material_#27_0']: THREE.Mesh
    Cylinder001__0: THREE.Mesh
  }
  materials: {
    Wardrobe__0: THREE.MeshStandardMaterial
    Material_27: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Wardrobe5(props: JSX.IntrinsicElements['group']) {
  const {material} = useContext(MaterialContext)
  const bodyMap = useLoader(THREE.TextureLoader,material.body.src)
  const Material = new  THREE.MeshStandardMaterial()
  Material.map = bodyMap
  const { nodes, materials } = useGLTF('/wardrobe-5.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.027}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh 
          material={Material}
          geometry={nodes.Wardrobe__0.geometry}  position={[-0.828, 37.469, 0.924]} rotation={[-Math.PI, 0, Math.PI / 2]} />
         
          <mesh name="hinge-1" geometry={nodes['Box001_Material_#27_0'].geometry} material={materials.Material_27} position={[-1.884, 7.269, -20.79]} rotation={[-Math.PI, 0, 0]} />
          <mesh name="hinge-2" geometry={nodes['Box002_Material_#27_0'].geometry} material={materials.Material_27} position={[-1.884, 37.131, -20.79]} rotation={[-Math.PI, 0, 0]} />
          <mesh name="hinge-3" geometry={nodes['Box003_Material_#27_0'].geometry} material={materials.Material_27} position={[-1.884, 67.214, -20.79]} rotation={[-Math.PI, 0, 0]} />
          <mesh name="hinge-4" geometry={nodes['Box004_Material_#27_0'].geometry} material={materials.Material_27} position={[-1.884, 7.269, -6.181]} rotation={[-Math.PI, 0, 0]} />
          <mesh name="hinge-5" geometry={nodes['Box005_Material_#27_0'].geometry} material={materials.Material_27} position={[-1.884, 37.131, -6.181]} rotation={[-Math.PI, 0, 0]} />
          <mesh name="hinge-6" geometry={nodes['Box006_Material_#27_0'].geometry} material={materials.Material_27} position={[-1.884, 67.214, -6.181]} rotation={[-Math.PI, 0, 0]} />
          <mesh name="hinge-7" geometry={nodes['Box007_Material_#27_0'].geometry} material={materials.Material_27} position={[0.242, 7.269, 22.464]} rotation={[Math.PI, 0, -Math.PI]} />
          <mesh name="hinge-8" geometry={nodes['Box008_Material_#27_0'].geometry} material={materials.Material_27} position={[0.242, 37.131, 22.464]} rotation={[Math.PI, 0, -Math.PI]} />
          <mesh name="hinge-9" geometry={nodes['Box009_Material_#27_0'].geometry} material={materials.Material_27} position={[0.242, 67.214, 22.464]} rotation={[Math.PI, 0, -Math.PI]} />
          <mesh name="hanger-rod" geometry={nodes.Cylinder001__0.geometry} material={materials.Wardrobe__0} position={[18.916, 68.61, -21.211]} rotation={[-Math.PI, 0, 0]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/wardrobe-5.glb')