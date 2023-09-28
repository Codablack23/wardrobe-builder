import "../styles/customizer.scss"
import SelectAngle from "../components/SelectAngle"
import ModelViewer from "../components/ModelViewer"
import CustomizerSideBar from "../components/CustomizerSideBar"


export default function CustomizerView(){ 
    
    return (
        <div className="customizer-container md:h-screen overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="canvas-container relative h-80 md:h-screen p-5 md:col-span-2">
              <ModelViewer/>
            </div>
            <div className="customizer-sidebar md:col-span-1">
                <CustomizerSideBar/>
            </div>
          </div>
        </div>
    )
}