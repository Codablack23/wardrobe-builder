import { Slider } from "antd"
import { useContext } from "react"
import { DimensionContext } from "../contexts/DimensionContext"
import { DimensionContextObject } from "../interfaces"

const DimensionFeature = ()=>{
  const {dimensions,setDimension,unit} = useContext(DimensionContext)
  const handleSlide=(x:number,y:number,z:number)=>{
      setDimension({x,y,z})
  }
  return (
    <div className="bg-gray-200 rounded-md p-2 mb-2">
        <header className=" flex items-center justify-between">
          <div>
            <p className="text-lg font-medium">Dimensions</p>
            <p className="text-gray-500 text-xs">Adjust Dimensions that suits you</p>
          </div>
          <button className="h-8 w-8 flex items-center justify-center bg-white rounded-md" >
            <i className="bi bi-chevron-down"></i>       
          </button>
        </header>
        <div className="bg-white p-2 my-4 rounded-md">
          <div>
            <p>Current Width:{dimensions.x * unit.conversion}{unit.name}</p>
            <Slider
             value={(dimensions.x/360) * 100}
             onChange={(value)=>handleSlide(((value*360)/100),dimensions.y,dimensions.z)}
            />
          </div> 
          <div>
            <p>Current Height:{dimensions.y * unit.conversion}{unit.name}</p>
            <Slider
             value={(dimensions.y/270) * 100}
             onChange={(value)=>handleSlide(dimensions.x,((value*270)/100),dimensions.z)}
            />
          </div>
           <div>
            <p>Current Depth:{dimensions.z * unit.conversion}{unit.name}</p>
            <Slider

             value={(dimensions.z/90) * 100}
             onChange={(value)=>handleSlide(dimensions.x,dimensions.y,((value*90)/100))}
            />
          </div>
          
        </div>
    </div>
)
}

export default function CustomizerSideBar(){
  

    return (
        <div className="bg-white md:h-screen overflow-y-auto p-4">
          <p className="text-2xl text-center font-semibold">Customize Your Wardrobe</p>
          <p className="text-center my-4">Features</p>
          <div className="gap-1">
            <DimensionFeature/>
          </div>
        </div>
    )
}