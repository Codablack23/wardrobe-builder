import { Image, Slider } from "antd"
import { useContext, useRef } from "react"
import { materials } from "../../repo"
import { MaterialContext } from "../../contexts/MaterialContext"
import { MaterialObject } from "../../interfaces"


export const MaterialFeature = ()=>{
  const {material,setMaterial} = useContext(MaterialContext)
  const ref = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLElement>(null)
  const toggleShown=()=>{
    ref.current?.classList.toggle("hidden")
    // ref.current?.classList.toggle("overflow-hidden")
  }
  const handleSelect=(body:MaterialObject,door:MaterialObject,shelf:MaterialObject)=>{
    return ()=>{
      setMaterial({
        door,
        shelf,
        body
      })
    }
  }
  return (
    <div className="bg-gray-200 rounded-md p-2 mb-2">
        <header className=" flex items-center justify-between">
          <div>
            <p className="text-lg font-medium">Material</p>
            <p className="text-gray-500 text-xs">Choose a material that suits you</p>
          </div>
          <button onClick={toggleShown} className="h-8 w-8 flex items-center justify-center bg-white rounded-md" >
            <i ref={iconRef} className="bi bi-chevron-down"></i>       
          </button>
        </header>
        <div className="bg-white my-4 rounded-md hidden" style={{transition:"all ease 0.5s"}} ref={ref}>
         <div className="p-3">
            <div className="my-2">
                <p className="font-medium mb-2">Body Material</p>
                <div className="grid grid-cols-2 gap-3 h-44 overflow-y-auto">
                    {materials.map(mat=>(
                        <div onClick={handleSelect(mat,material.door,material.shelf)} className="relative cursor-pointer">
                           {mat.name !== material.body.name
                           ?<button className="w-5 h-5 z-20 rounded-full absolute top-2 right-2 border border-white"></button>
                           :<button className="w-5 h-5 z-20 rounded-full absolute top-2 right-2 ">
                            <i className="bi bi-check-circle-fill text-white"></i>
                           </button>
                           }
                            <Image
                            preview={false}
                            src={mat.src}
                            alt={mat.name}
                            />
                        </div>
                    ))}
                </div>
            </div> 
            <div className="my-2">
                <p className="font-medium mb-2">Door Material</p>
                <div className="grid grid-cols-2 gap-3 h-44 overflow-y-auto">
                    {materials.map(mat=>(
                        <div onClick={handleSelect(material.body,mat,material.shelf)} className="relative cursor-pointer">
                           {mat.name !== material.door.name
                           ?<button className="w-5 h-5 z-20 rounded-full absolute top-2 right-2 border border-white"></button>
                           :<button className="w-5 h-5 z-20 rounded-full absolute top-2 right-2 ">
                            <i className="bi bi-check-circle-fill text-white"></i>
                           </button>
                           }
                            <Image
                            preview={false}
                            src={mat.src}
                            alt={mat.name}
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