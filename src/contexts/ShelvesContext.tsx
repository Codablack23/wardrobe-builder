import { createContext,useState } from "react";
import { ContextProviderProps, ShelfObject } from "../interfaces";
import { shelvesData } from "../repo";

export const ShelvesContext = createContext({
    shelves:shelvesData,
    setShelves:(newShevlves:ShelfObject[])=>{}
})

export default function ShelvesContextProvider(props:ContextProviderProps){
 const [shelves, setShelves] = useState<ShelfObject[]>(shelvesData)
  return(
   <ShelvesContext.Provider value={{shelves,setShelves}}>
     {props.children}
   </ShelvesContext.Provider>
  )
}
