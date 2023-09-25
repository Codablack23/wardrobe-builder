import { createContext, useState } from "react";
import { ContextProviderProps } from "../interfaces";

export const BaseContext = createContext({
    base:7,
    setBase:(newBase:number)=>{

    }
})

export default function BaseContextProvider(props:ContextProviderProps){
    const [base,setBase] = useState(7)
    return(
        <BaseContext.Provider value={{base,setBase}}>
            {props.children}
        </BaseContext.Provider>
    )
}