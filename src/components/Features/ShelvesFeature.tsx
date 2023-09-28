import { useContext, useRef } from "react"
import { DimensionContext } from "../../contexts/DimensionContext"
import { ShelvesContext } from "../../contexts/ShelvesContext"
import { Slider, Space, Switch,Select } from "antd"


export const ShelvesFeature = ()=>{
  const {dimensions} = useContext(DimensionContext)
  const {shelves,setShelves} = useContext(ShelvesContext)
  const {x} = dimensions
  const ref = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLElement>(null)
  const toggleShown=()=>{
    ref.current?.classList.toggle("hidden")
    iconRef.current?.classList.toggle("bi-chevron-down")
    iconRef.current?.classList.toggle("bi-chevron-up")
  }
  const toggleSwitch = (index:number)=>{
    return ()=>{
        const newValues = shelves.map((value,i)=>{
            if(i === index) return {
                ...value,
                isShown:!value.isShown
            };
            return value
        })
        setShelves(newValues)
    }
  }
  const addShelf=(index:number)=>{
   return ()=>{
    const newValues = shelves.map((item,i)=>{
        if(i === index) return {
            ...item,
            shelf_no:item.shelf_no < 5?item.shelf_no + 1:item.shelf_no
        };
        return item
    })
    setShelves(newValues)
   }
  }
  const removeShelf=(index:number)=>{
    return ()=>{
        const newValues = shelves.map((item,i)=>{
            if(i === index) return {
                ...item,
                shelf_no:item.shelf_no > 1?item.shelf_no - 1:item.shelf_no
            };
            return item
        })
        setShelves(newValues)
    }
  }
  return (
    <div className="bg-gray-200 rounded-md p-2 mb-2">
        <header className=" flex items-center justify-between">
          <div>
            <p className="text-lg font-medium">Add Shelves</p>
            <p className="text-gray-500 text-xs">Add or remove shelves to fit your taste</p>
          </div>
          <button onClick={toggleShown} className="h-8 w-8 flex items-center justify-center bg-white rounded-md" >
            <i ref={iconRef} className="bi bi-chevron-down"></i>       
          </button>
        </header>
        <div className="my-4 rounded-md hidden" style={{transition:"all ease 0.5s"}} ref={ref}>
         <div className="">
         {
           new Array(parseInt(((x/90) !== 4?(x/90) + 1:4).toString()))
           .fill("")
           .map((item,i)=>(
             <div key={`column-${i+1}`}>
                <div className="flex bg-white p-2 py-3 mb-2 rounded-md items-center my-2 justify-between">
                <div>
                  <p>Column {i + 1}</p>
                </div>
                <div>
                    <Switch 
                    checked={shelves[i].isShown}
                    onClick={toggleSwitch(i)}
                    className="bg-gray-200"/>
                </div>
                </div> 
                {shelves[i].isShown?
                 <div className="my-2 py-3 px-3">  
                 <p className="my-2 font-medium">Update Shelf Number</p>  
                 <div className="bg-white flex items-center justify-between rounded-md">
                   <button onClick={removeShelf(i)} disabled={shelves[i].shelf_no < 2} className="disabled:text-gray-400 disabled:cursor-not-allowed py-4 px-4"><i className="bi bi-dash-lg text-2xl"></i></button>
                    <p className="font-bold">{shelves[i].shelf_no}</p>
                   <button onClick={addShelf(i)} disabled={shelves[i].shelf_no > 4} className="disabled:text-gray-400 disabled:cursor-not-allowed py-4 px-4"><i className="bi bi-plus-lg text-2xl"></i></button>
                 </div>
               </div>
                :null}
             </div>
           ))     
         }
        
         </div>
          
        </div>
    </div>
)
}