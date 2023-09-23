import { ReactNode, createContext, useState } from "react";
import { Angles, ContextProviderProps, ViewContextObject } from "../interfaces";

export const ViewContext = createContext<ViewContextObject>({
    angle:[0,0,0],
    setAngle:(value:Angles ) => {
      
    }
})

export default function ViewContextProvider(props:ContextProviderProps){
    const [angle,setAngle] = useState<Angles>([0,0,0])
  return (
    <ViewContext.Provider value={{angle,setAngle}}>
      {props.children}
    </ViewContext.Provider>
  )
}