import { Image, Slider } from "antd"
import { useContext, useRef } from "react"
import { layouts, } from "../../repo"
import { WardrobeLayoutObject } from "../../interfaces"
import { LayoutContext } from "../../contexts/LayoutContext"
import { DimensionContext } from "../../contexts/DimensionContext"


export const LayoutFeature = ()=>{
  const {layout,setNewLayout} = useContext(LayoutContext)
  const {setMinValues,setMaxValues,setDimension} = useContext(DimensionContext)
  const ref = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLElement>(null)
  const toggleShown=()=>{
    ref.current?.classList.toggle("hidden")
    iconRef.current?.classList.toggle("bi-chevron-down")
    iconRef.current?.classList.toggle("bi-chevron-up")
  }
  const handleSelect=(newLayout:WardrobeLayoutObject)=>{
    return ()=>{
       setNewLayout(newLayout)
       setMinValues(newLayout.minValues)
       setMaxValues(newLayout.maxValues)
       setDimension(newLayout.minValues)
    }
  }
  return (
    <div className="bg-gray-200 rounded-md p-2 mb-2">
        <header className=" flex items-center justify-between">
          <div>
            <p className="text-lg font-medium">Choose Layout</p>
            <p className="text-gray-500 text-xs">Pick a layout that best fit you</p>
          </div>
          <button onClick={toggleShown} className="h-8 w-8 flex items-center justify-center bg-white rounded-md" >
            <i ref={iconRef} className="bi bi-chevron-down"></i>       
          </button>
        </header>
        <div className="bg-white my-4 rounded-md hidden" style={{transition:"all ease 0.5s"}} ref={ref}>
         <div className="p-3">
            <div className="my-2">
                <div className="grid grid-cols-4 gap-2">
                    {layouts.map(item=>(
                        <div key={item.slug} onClick={handleSelect(item)} className="relative p-1 flex items-center justify-center rounded-md cursor-pointer" style={{background:"#E0E0E0"}}>
                           {item.slug !== layout.slug
                           ?<button className="w-5 h-5 z-20 rounded-full absolute top-2 right-2 border border-white"></button>
                           :<button className="w-5 h-5 z-20 rounded-full absolute top-2 right-2 ">
                            <i className="bi bi-check-circle-fill text-white"></i>
                           </button>
                           }
                            <Image
                            preview={false}
                            height={"100px"}
                            className="object-cover h-40"
                            src={item.preview}
                            alt={item.name}
                            />
                        </div>
                    ))}
                </div>
            </div> 
         </div>
          
        </div>
    </div>
)
}