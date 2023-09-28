import { PresentationControls, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Vector3 } from "three"
import {ViewContext} from "../contexts/ViewContext"
import Loader from "./Loader"
import { Suspense, useContext} from "react"
import { LayoutContext } from "../contexts/LayoutContext"
import { BookShelf2 } from "./Models/Book_shelf_2"


export default function ModelViewer(){
    const {angle} = useContext(ViewContext)
    const {layout} = useContext(LayoutContext)
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
                   <layout.Model/>
                   </Stage> 
                 </PresentationControls>
               </Canvas>
            </Suspense>
        </>
    )
}