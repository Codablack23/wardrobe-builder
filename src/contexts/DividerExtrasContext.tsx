import { createContext, useState } from "react";
import { ContextProviderProps } from "../interfaces";

export const DividerExtraContext = createContext({
    dividerRail:"none",
    dividerShelves:0,
    dividerTopShelves:0,
    action:{
        setDividerRail:(newValue:string)=>{},
        setDividerTopShelves:(newValue:number) =>{},
        setDividerShelves:(newValue:number)=>{}
    }
})

export default function DividerExtraContextProvider(props:ContextProviderProps){
  const [dividerRail,setDividerRail] = useState("none")
  const [dividerShelves,setDividerShelves] = useState(0)
  const [dividerTopShelves,setDividerTopShelves] = useState(0)

  const action = {setDividerRail,setDividerShelves,setDividerTopShelves}

  return (
    <DividerExtraContext.Provider value={{dividerRail,dividerShelves,dividerTopShelves,action}}>
        {props.children}
    </DividerExtraContext.Provider>
  )

}