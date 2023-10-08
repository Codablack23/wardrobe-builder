import { Select } from "antd"
import { useContext } from "react"
import { RailsContext } from "../../contexts/RailsContext"
import { DividerExtraContext } from "../../contexts/DividerExtrasContext"

export default function DividerExtraFeatures(){
    const {dividerRail,dividerShelves,dividerTopShelves,action}  = useContext(DividerExtraContext)
    const railOptions = [
        {value:"none",label:"None"},
        {value:"single",label:"Single"},
        {value:"double",label:"Double"},
        {value:"double_and_shelf",label:"Double and shelf"},
        {value:"forward",label:"Forward"},

    ] 
    const shelvesOption = new Array(9).fill(0).map((item,index)=>({
        value:index,label:index.toString()
    }))
    const topShelvesOption = new Array(9).fill(0).map((item,index)=>({
        value:index,label:index.toString()
    }))
    const selectRails=(value:string)=>{
      action.setDividerRail(value)
    }  
    const selectShelves=(value:number)=>{
      action.setDividerShelves(value)
    }  
    const selectTopShelves=(value:number)=>{
      action.setDividerTopShelves(value)
    }
    return (
      <div className="bg-gray-200 rounded-md p-2 mb-1">
             <div className="flex justify-between items-center mb-2">
                <div className="flex-[2]">
                    <p className="text-sm font-medium">Add Divider Rails</p>
                </div>
                <div className="flex-1">
                    <Select
                    style={{width:"100%"}}
                    options={railOptions}
                    onSelect={selectRails}
                    value={dividerRail}
                    defaultValue={dividerRail}
                    />
                </div>
             </div> 
             <div className="flex justify-between items-center mb-1">
                <div className="flex-[2]">
                    <p className="text-sm font-medium">Add Divider Shelves</p>
                </div>
                <div className="flex-1">
                    <Select
                    style={{width:"100%"}}
                    options={shelvesOption}
                    onSelect={selectShelves}
                    value={dividerShelves}
                    defaultValue={dividerShelves}
                    />
                </div>
             </div> 
             <div className="flex justify-between items-center mb-1">
                <div className="flex-[2]">
                    <p className="text-sm font-medium">Add Divider Top Shelves</p>
                </div>
                <div className="flex-1">
                    <Select
                    style={{width:"100%"}}
                    options={topShelvesOption}
                    onSelect={selectTopShelves}
                    value={dividerTopShelves}
                    defaultValue={dividerTopShelves}
                    />
                </div>
             </div>
       </div>
      )
}