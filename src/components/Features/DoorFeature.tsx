import { useContext, useRef } from "react"
import { DimensionContext } from "../../contexts/DimensionContext"
import { DoorsContext } from "../../contexts/DoorsContext"
import { Switch } from "antd"

export const DoorFeature = ()=>{
  const {dimensions} = useContext(DimensionContext)
  const {shownDoors,setShownDoors} = useContext(DoorsContext)
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
        const newValues = shownDoors.map((value,i)=>{
            if(i === index) return !value;
            return value
        })
        setShownDoors(newValues)
    }
  }
  return (
    <div className="bg-gray-200 rounded-md p-2 mb-2">
        <header className=" flex items-center justify-between">
          <div>
            <p className="text-lg font-medium">Adjust Door</p>
            <p className="text-gray-500 text-xs">Add doors to your specified column</p>
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
            <div key={`door-${i + 1}`} className="flex bg-white p-2 py-3 mb-2 rounded-md items-center my-2 justify-between">
             <div>
                <p>Column {i + 1}</p>
             </div>
             <div>
                <Switch 
                 checked={shownDoors[i]}
                 onClick={toggleSwitch(i)}
                className="bg-gray-200"/>
             </div>
            </div> 
           ))     
         }
        
         </div>
          
        </div>
    </div>
)
}