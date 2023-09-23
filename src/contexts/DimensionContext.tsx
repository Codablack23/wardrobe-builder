import { createContext, useState } from "react";
import { ContextProviderProps, Dimension, DimensionContextObject, Unit } from "../interfaces";
import { Wardrobe8 } from "../components/Wardrobe-8";

export const DimensionContext = createContext({
    dimensions:{
        x:90,
        y:230,
        z:60
    },
    unit:{
        name:"cm",
        conversion:1
    },
    setDimension:(newDimension:Dimension)=>{},
    setUnit:(newUnit:Unit)=>{}
})

export default function DimensionContextProvider(props:ContextProviderProps){
//    1 ft = 12inches = 30.48cm
    const [unit,setUnit] = useState<Unit>({
        name:"cm",
        conversion:1
    })
    const [dimensions,setDimension] = useState({
        x:90,
        y:230,
        z:60
    })
 
  
    return(
        <DimensionContext.Provider value={{
          dimensions,
          unit,
          setDimension,
          setUnit       
        }}>
            {props.children}
        </DimensionContext.Provider>
    )
}