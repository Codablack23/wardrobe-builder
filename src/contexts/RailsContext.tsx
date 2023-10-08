import {createContext, useEffect, useState} from 'react'
import { ContextProviderProps } from '../interfaces'


export const RailsContext = createContext({
    rails:"none",
    setRails:(newValue:string) => { }
})
export function RailsContextProvider(props:ContextProviderProps){
    const [rails,setRails] = useState("none")
    useEffect(()=>{
        console.log(rails)
    },[])
   return (
    <RailsContext.Provider value={{rails,setRails}}>
      {props.children}
    </RailsContext.Provider>
   )
}