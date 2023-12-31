import { Slider } from "antd"
import { useContext, useRef } from "react"
import { DimensionContext } from "../../contexts/DimensionContext"

export const DimensionFeature = ()=>{
  const {dimensions,setDimension,unit,maxValues,minValues} = useContext(DimensionContext)
  const ref = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLElement>(null)
  const handleSlide=(x:number,y:number,z:number)=>{
      setDimension({x,y,z})
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
            <p className="text-lg font-medium">Dimensions</p>
            <p className="text-gray-500 text-xs">Adjust Dimensions that suits you</p>
          </div>
          <button onClick={toggleShown} className="h-8 w-8 flex items-center justify-center bg-white rounded-md" >
            <i ref={iconRef} className="bi bi-chevron-down"></i>       
          </button>
        </header>
        <div className="bg-white my-4 rounded-md hidden" style={{transition:"all ease 0.5s"}} ref={ref}>
         <div className="p-3">
         <div>
            <p>Current Width:{dimensions.x * unit.conversion}{unit.name}</p>
            <Slider
             min={(minValues.x/maxValues.x) * 100}
             value={(dimensions.x/maxValues.x) * 100}
             onChange={(value)=>handleSlide(((value*maxValues.x)/100),dimensions.y,dimensions.z)}
            />
          </div> 
          <div>
            <p>Current Height:{dimensions.y * unit.conversion}{unit.name}</p>
            <Slider
             min={(minValues.y/maxValues.y) * 100}
             value={(dimensions.y/maxValues.y) * 100}
             onChange={(value)=>handleSlide(dimensions.x,((value*maxValues.y)/100),dimensions.z)}
            />
          </div>
           <div>
            <p>Current Depth:{dimensions.z * unit.conversion}{unit.name}</p>
            <Slider
             min={(minValues.z/maxValues.z) * 100}
             value={(dimensions.z/maxValues.z) * 100}
             onChange={(value)=>handleSlide(dimensions.x,dimensions.y,((value*90)/100))}
            />
          </div>
         </div>
          
        </div>
    </div>
)
}