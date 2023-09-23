import { useLoader } from "@react-three/fiber";
import { createContext, useState } from "react";
import { TextureLoader } from "three";
import { ContextProviderProps, MaterialContextObject } from "../interfaces";

export const MaterialContext = createContext({
   material:{
    door:{name:"plywood",id:1,src:"/materials/plywood.jpg"},
    body:{name:"plywood",id:1,src:"/materials/plywood.jpg"},
    shelf:{name:"plywood",id:1,src:"/materials/plywood.jpg"},
   },
   setMaterial:(material:MaterialContextObject)=>{}
})

export default function MaterialContextProvider(props:ContextProviderProps){
    const [material,setMaterial] = useState({
        door:{name:"plywood",id:1,src:"/materials/plywood.jpg"},
        body:{name:"plywood",id:1,src:"/materials/plywood.jpg"},
        shelf:{name:"plywood",id:1,src:"/materials/plywood.jpg"},
    })
    return(
        <MaterialContext.Provider value={{material,setMaterial}}>
          {props.children}
        </MaterialContext.Provider>
    )
}