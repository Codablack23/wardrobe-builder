import { BaseFeature } from "./Features/BaseFeature";
import { DimensionFeature } from "./Features/DimensionFeature";
import { DoorFeature } from "./Features/DoorFeature";
import { MaterialFeature } from "./Features/MaterialFeature";
import { ShelvesFeature } from "./Features/ShelvesFeature";

export default function CustomizerSideBar(){
  return (
        <div className="bg-white md:h-screen overflow-y-auto p-4">
          <p className="text-2xl text-center font-semibold">Customize Your Wardrobe</p>
          <p className="text-center my-4">Features</p>
          <div className="gap-1">
            <DimensionFeature/>
            <MaterialFeature/>
            <BaseFeature/>
            <DoorFeature/>
            <ShelvesFeature/>
          </div>
        </div>
    )
}