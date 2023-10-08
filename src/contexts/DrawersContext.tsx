import { createContext, useState } from "react";
import { ContextProviderProps } from "../interfaces";

export const DrawerContext = createContext({
    drawers:0,
    topDrawers:0,
    setDrawers:(newDrawers:number)=>{},
    setTopDrawers:(newDrawers:number)=>{}
})

export default function DrawerContextProvider(props:ContextProviderProps){
    const [drawers,setDrawers] = useState(0)
    const [topDrawers,setTopDrawers] = useState(0)

    return (
        <DrawerContext.Provider value={{drawers,topDrawers,setDrawers,setTopDrawers}}>
            {props.children}
        </DrawerContext.Provider>
    )
}