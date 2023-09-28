import { createContext, useEffect, useState } from "react";
import { Wardrobe2 } from "../components/Models/Wardrobe-2";
import { ContextProviderProps, WardrobeLayoutObject } from "../interfaces";

export const LayoutContext = createContext({
    layout:{
        name:"Wardrobe 1",
        type:"wardrobe",
        slug:"wardrobe-1",
        id:1,
        Model:Wardrobe2,
        maxValues:{
            x:360,
            y:270,
            z:90
        },  
        minValues:{
            x:90,
            y:230,
            z:60
        },
    },
    setNewLayout:(newLayout:WardrobeLayoutObject)=>{}
})

export default function LayoutContextProvider(props:ContextProviderProps){
    const [layout,setNewLayout] = useState({
        name:"Wardrobe 1",
        type:"wardrobe",
        slug:"wardrobe-1",
        id:1,
        Model:Wardrobe2,
        maxValues:{
            x:360,
            y:270,
            z:90
        },  
        minValues:{
            x:90,
            y:230,
            z:60
        },

    })
    useEffect(()=>{
        console.log(layout)
    },[layout])
    return(
      <LayoutContext.Provider value={{layout,setNewLayout}}>
        {props.children}
      </LayoutContext.Provider>
    )
}