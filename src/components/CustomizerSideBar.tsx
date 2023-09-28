import { useContext } from "react";
import { BaseFeature } from "./Features/BaseFeature";
import { DimensionFeature } from "./Features/DimensionFeature";
import { DoorFeature } from "./Features/DoorFeature";
import { LayoutFeature } from "./Features/LayoutFeature";
import { MaterialFeature } from "./Features/MaterialFeature";
import { ShelvesFeature } from "./Features/ShelvesFeature";
import { LayoutContext } from "../contexts/LayoutContext";

export default function CustomizerSideBar(){
  const {layout} = useContext(LayoutContext)
  return (
        <div className="bg-white md:h-screen overflow-y-auto p-4">
          <p className="text-2xl text-center font-semibold">Customize Your Wardrobe</p>
          <p className="text-center my-4">Features</p>
          <div className="gap-1">
            <LayoutFeature/>
            <DimensionFeature/>
            <MaterialFeature/>
            {layout.type === "wardrobe"?<BaseFeature/>:null} 
            {layout.type === "wardrobe"?<DoorFeature/>:null}
            {layout.type === "wardrobe"?<ShelvesFeature/>:null}
          </div>
        </div>
    )
}