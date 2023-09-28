import { createContext, useState } from "react";
import { ContextProviderProps, Dimension, DimensionContextObject, Unit } from "../interfaces";


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
    setDimension:(newDimension:Dimension)=>{},
    setMaxValues:(newDimension:Dimension)=>{},
    setMinValues:(newDimension:Dimension)=>{},
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
        y:215,
        z:60
    }) 
     const [minValues,setMinValues] = useState({
        x:90,
        y:215,
        z:60
    }) 
    const [maxValues,setMaxValues] = useState({
        x:360,
        y:270,
        z:90
    })
 
  
    return(
        <DimensionContext.Provider value={{
          dimensions,
          minValues,
          setMinValues,
          unit,
          setDimension,
          setUnit,
          maxValues,
          setMaxValues     
        }}>
            {props.children}
        </DimensionContext.Provider>
    )
}