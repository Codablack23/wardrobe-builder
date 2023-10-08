import { createContext, useState } from "react";
import { ContextProviderProps } from "../interfaces";

export const DoorsContext = createContext({
    doors:"none",
    doorMirror:"none",
    setDoors:(newDoor:string)=>{},
    setDoorMirror:(newDoorMirror:string)=>{},
})

export default function DoorsContextProvider(props:ContextProviderProps){
    const [doors,setDoors] = useState("none")
    const [doorMirror,setDoorMirror] = useState("none")
   return (
    <DoorsContext.Provider value={{doors,setDoors,doorMirror,setDoorMirror}}>
        {props.children}
    </DoorsContext.Provider>
   )
}