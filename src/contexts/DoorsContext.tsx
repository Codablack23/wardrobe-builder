import { createContext, useState } from "react";
import { ContextProviderProps } from "../interfaces";

export const DoorsContext = createContext({
    shownDoors:[false,false,false,false],
    setShownDoors:(shownDoors:boolean[])=>{

    }
})

export default function DoorsContextProvider(props:ContextProviderProps){
    const [shownDoors,setShownDoors] = useState([false,false,false,false])
   return (
    <DoorsContext.Provider value={{shownDoors,setShownDoors}}>
        {props.children}
    </DoorsContext.Provider>
   )
}