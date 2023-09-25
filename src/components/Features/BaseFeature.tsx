import { Slider } from "antd"
import { useContext, useRef } from "react"
import { BaseContext } from "../../contexts/BaseContext"
import { DimensionContext } from "../../contexts/DimensionContext"

export const BaseFeature = ()=>{
  const {base,setBase} = useContext(BaseContext)
  const {unit} = useContext(DimensionContext)
  const ref = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLElement>(null)
  const handleSlide=(value:any)=>{
    const newValue = (value * 14)/100
    setBase(newValue)
  }
  const toggleShown=()=>{
    ref.current?.classList.toggle("hidden")
    iconRef.current?.classList.toggle("bi-chevron-down")
    iconRef.current?.classList.toggle("bi-chevron-up")
  }
  return (
    <div className="bg-gray-200 rounded-md p-2 mb-2">
        <header className=" flex items-center justify-between">
          <div>
            <p className="text-lg font-medium">Base Height</p>
            <p className="text-gray-500 text-xs">Adjust the base that suits you</p>
          </div>
          <button onClick={toggleShown} className="h-8 w-8 flex items-center justify-center bg-white rounded-md" >
            <i ref={iconRef} className="bi bi-chevron-down"></i>       
          </button>
        </header>
        <div className="bg-white my-4 rounded-md hidden" style={{transition:"all ease 0.5s"}} ref={ref}>
         <div className="p-3">
         <div>
            <p>Current Base Height:{base} {unit.name}</p>
            <Slider
             min={7/14 * 100}
             value={(base/14) * 100}
             onChange={handleSlide}
            />
          </div> 
         </div>
          
        </div>
    </div>
)
}