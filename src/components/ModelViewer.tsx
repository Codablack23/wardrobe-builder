import { PresentationControls, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Vector3 } from "three"
import {ViewContext} from "../contexts/ViewContext"
import Loader from "./Loader"
import { Suspense, useContext} from "react"
import { Wardrobe8 } from "./Wardrobe-8"
import { Wardrobe2 } from "./Wardrobe-2"
import { Wardrobe3 } from "./Wardrobe-3"
import { Wardrobe4 } from "./Wardrobe-4"
import { Wardrobe5 } from "./Wardrobe-5"

export default function ModelViewer(){
    const {angle} = useContext(ViewContext)
    return (
        <>
            <Suspense fallback={<Loader/>}>
              <Canvas>
                 <PresentationControls rotation={angle}>
                    <Stage
                   environment={{files:"/bg.hdr",background:false}}
                   scale={new Vector3(10,10,10)} 
                   intensity={0.6} 
                   castShadow={false}
                   >
                   {/* <Wardrobe2/> */}
                   {/* <Wardrobe3/> */}
                   {/* <Wardrobe4/> */}
                   {/* <Wardrobe5/> */}
                
                   {/* <Wardrobe8/> */}
                   <Wardrobe2/>
                   </Stage> 
                 </PresentationControls>
               </Canvas>
            </Suspense>
        </>
    )
}