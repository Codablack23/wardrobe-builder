import { createContext, useState } from "react";
import { ContextProviderProps } from "../interfaces";

export const DividerContext = createContext({
    divider:"none",
    setDivider:(divider:string)=>{

    }
})

export default function DividerContextProvider(props:ContextProviderProps){
    const [divider,setDivider] = useState("none")
    return(
        <DividerContext.Provider value={{divider,setDivider}}>
            {props.children}
        </DividerContext.Provider>
    )
}