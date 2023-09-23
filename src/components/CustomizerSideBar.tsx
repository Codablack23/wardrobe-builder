import { DimensionFeature } from "./Features/DimensionFeature";
import { MaterialFeature } from "./Features/MaterialFeature";

export default function CustomizerSideBar(){
  return (
        <div className="bg-white md:h-screen overflow-y-auto p-4">
          <p className="text-2xl text-center font-semibold">Customize Your Wardrobe</p>
          <p className="text-center my-4">Features</p>
          <div className="gap-1">
            <DimensionFeature/>
            <MaterialFeature/>
          </div>
        </div>
    )
}