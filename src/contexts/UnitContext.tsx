import { createContext, useState } from "react";
import { ContextProviderProps, WardrobeLayoutObject } from "../interfaces";

interface UnitContextType {
    units:WardrobeLayoutObject[],
    addUnit:(unit:WardrobeLayoutObject)=>void,
    removeUnit:(id:number)=>void
}

export const UnitContext = createContext<UnitContextType>({
    units:[],
    addUnit:(unit:WardrobeLayoutObject)=>{},
    removeUnit:(id:number)=>{}
})

export default function UnitContextProvider(props:ContextProviderProps){
    const [units,setUnits] = useState<WardrobeLayoutObject[]>([])

    const addUnit = (unit:WardrobeLayoutObject)=>{
        const existingUnit = units.filter(item=>item.id === unit.id)
        if(existingUnit.length === 0){
            setUnits(prev=>[...prev,unit])
        }
    } 
    const removeUnit = (id:number)=>{
        const existingUnit = units.filter(item=>item.id !== id)
        setUnits(existingUnit)
    }

   return(
    <UnitContext.Provider value={{units,addUnit,removeUnit}}>
      {props.children}
    </UnitContext.Provider>
   )
}