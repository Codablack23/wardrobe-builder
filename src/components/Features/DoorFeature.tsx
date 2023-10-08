import { useContext, useRef } from "react"
import { DoorsContext } from "../../contexts/DoorsContext"
import { Select } from "antd"

export const DoorFeature = ()=>{
  const {doors,doorMirror,setDoors,setDoorMirror} = useContext(DoorsContext)
  const Options = [
    {value:"none",label:"None"},
    {value:"left",label:"Left"},
    {value:"right",label:"Right"},
    {value:"both",label:"Both"},
    ] 
    const selectDoors=(value:string)=>{
      setDoors(value)
    }  
    const selectMirror=(value:string)=>{
      setDoorMirror(value)
    }  
  const ref = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLElement>(null)
  const toggleShown=()=>{
    ref.current?.classList.toggle("hidden")
    iconRef.current?.classList.toggle("bi-chevron-down")
    iconRef.current?.classList.toggle("bi-chevron-up")
  }
 
  return (
    <div className="bg-gray-200 rounded-md p-2 mb-2">
        <header className=" flex items-center justify-between">
          <div>
            <p className="text-lg font-medium">Doors</p>
            <p className="text-gray-500 text-xs">customize your doors to your taste</p>
          </div>
          <button onClick={toggleShown} className="h-8 w-8 flex items-center justify-center bg-white rounded-md" >
            <i ref={iconRef} className="bi bi-chevron-down"></i>       
          </button>
        </header>
        <div className="my-4 rounded-md hidden" style={{transition:"all ease 0.5s"}} ref={ref}>
             <div className="flex justify-between items-center mb-2">
                <div className="flex-[2]">
                    <p className="text-sm font-medium">Show Doors</p>
                </div>
                <div className="flex-1">
                    <Select
                    style={{width:"100%"}}
                    options={Options}
                    onSelect={selectDoors}
                    value={doors}
                    defaultValue={doors}
                    />
                </div>
             </div> 
             <div className="flex justify-between items-center mb-2">
                <div className="flex-[2]">
                    <p className="text-sm font-medium">Door Mirror</p>
                </div>
                <div className="flex-1">
                    <Select
                    style={{width:"100%"}}
                    options={Options}
                    onSelect={selectMirror}
                    value={doorMirror}
                    defaultValue={doorMirror}
                    />
                </div>
             </div>
          
        </div>
    </div>
)
}