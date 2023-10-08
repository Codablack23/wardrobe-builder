import { createContext,useState } from "react";
import { ContextProviderProps, ShelfObject } from "../interfaces";

export const ShelvesContext = createContext({
    shelves:0,
    setShelves:(shelf:number)=>{},
    topShelves:0,
    setTopShelves:(shelf:number)=>{}
})

export default function ShelvesContextProvider(props:ContextProviderProps){
 const [shelves, setShelves] = useState(0)
 const [topShelves, setTopShelves] = useState(0)
  return(
   <ShelvesContext.Provider value={{shelves,setShelves,topShelves,setTopShelves}}>
     {props.children}
   </ShelvesContext.Provider>
  )
}
