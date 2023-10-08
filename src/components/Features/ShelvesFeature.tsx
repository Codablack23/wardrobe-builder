import { useContext, useRef } from "react"
import { DimensionContext } from "../../contexts/DimensionContext"
import { ShelvesContext } from "../../contexts/ShelvesContext"
import { Slider, Space, Switch,Select } from "antd"
import DividerFeature from "./DividerFeature"
import DrawersFeature from "./DrawersFeature"
import RailFeature from "./RailFeature"
import TopDrawersFeature from "./TopDrawers"
import { DividerContext } from "../../contexts/DividerContext"
import DividerExtraFeatures from "./DividerExtraFeatures"


export const ShelvesFeature = ()=>{
  const {divider} = useContext(DividerContext)
  const {shelves,setShelves,topShelves,setTopShelves} = useContext(ShelvesContext)
  const ref = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLElement>(null)
  const toggleShown=()=>{
    ref.current?.classList.toggle("hidden")
    iconRef.current?.classList.toggle("bi-chevron-down")
    iconRef.current?.classList.toggle("bi-chevron-up")
  }
  const addShelf=()=>{
    if(shelves > 7){
      setShelves(8)
    }else{
      setShelves(shelves + 1)
    }
  }
  const removeShelf=()=>{
        if(shelves < 1){
          setShelves(0)
        }else{
          setShelves(shelves -1)
        }
  } 
  const addTopShelf=()=>{
    if(topShelves > 7){
      setTopShelves(8)
    }else{
      setTopShelves(topShelves + 1)
    }
  }
  const removeTopShelf=()=>{
        if(topShelves < 1){
          setShelves(0)
        }else{
          setTopShelves(topShelves -1)
        }
  }
  return (
    <div className="bg-gray-200 rounded-md p-2 mb-4">
        <header className=" flex items-center justify-between">
          <div>
            <p className="text-lg font-medium">Internals</p>
            <p className="text-gray-500 text-xs">Add or remove shelves to fit your taste</p>
          </div>
          <button onClick={toggleShown} className="h-8 w-8 flex items-center justify-center bg-white rounded-md" >
            <i ref={iconRef} className="bi bi-chevron-down"></i>       
          </button>
        </header>
        <div className="my-4 rounded-md hidden" style={{transition:"all ease 0.5s"}} ref={ref}>
         <div className="">
             <div>
                 <div className=" py-2 px-2">  
                 <p className="my-1 text-sm font-medium">Shelf Number</p>  
                 <div className="bg-white flex items-center justify-between rounded-md">
                   <button onClick={removeShelf} disabled={shelves < 1} className="disabled:text-gray-400 disabled:cursor-not-allowed py-2 px-4"><i className="bi bi-dash-lg text-2xl"></i></button>
                    <p className="font-bold">{shelves}</p>
                   <button onClick={addShelf} disabled={shelves > 7} className="disabled:text-gray-400 disabled:cursor-not-allowed py-2 px-4"><i className="bi bi-plus-lg text-2xl"></i></button>
                 </div>
               </div>
             </div>    
             <div>
                 <div className="py-3 px-3">  
                 <p className="my-1 text-sm font-medium">Top Shelf Number</p>  
                 <div className="bg-white flex items-center justify-between rounded-md">
                   <button onClick={removeTopShelf} disabled={topShelves < 1} className="disabled:text-gray-400 disabled:cursor-not-allowed py-2 px-4"><i className="bi bi-dash-lg text-2xl"></i></button>
                    <p className="font-bold">{topShelves}</p>
                   <button onClick={addTopShelf} disabled={topShelves > 7} className="disabled:text-gray-400 disabled:cursor-not-allowed py-2 px-4"><i className="bi bi-plus-lg text-2xl"></i></button>
                 </div>
               </div>
             </div>        
         </div>
         <br />
          <DividerFeature/>
          {divider !== "none"?
           <div className="my-2 border-t border-b border-gray-800 py-3">
              <DividerExtraFeatures/>
           </div>
          :null}
          <RailFeature/>
          <DrawersFeature/>
          <TopDrawersFeature/>
        
        </div>
    </div>
)
}