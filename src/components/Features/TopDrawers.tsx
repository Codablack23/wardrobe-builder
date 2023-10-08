import { useContext, useRef } from "react"
import { Select } from "antd"
import { DrawerContext } from "../../contexts/DrawersContext"

export default function TopDrawersFeature(){
    const {topDrawers,setTopDrawers}  = useContext(DrawerContext)
    const options = [
        {value:0,label:"0"},
        {value:1,label:"1"},
        {value:2,label:"2"},
        {value:3,label:"3"},
        {value:4,label:"4"},

    ]
    const onSelect=(value:number)=>{
      setTopDrawers(value)
    }
    return (
      <div className="bg-gray-200 rounded-md p-2 mb-2">
             <div className="flex justify-between items-center">
                <div className="flex-1">
                    <p className="text-sm font-medium">Top Drawers</p>
                </div>
                <div className="flex-1">
                <Select
                style={{width:"100%"}}
                options={options}
                onSelect={onSelect}
                value={topDrawers}
                defaultValue={topDrawers}
                />
                </div>
             </div>
           </div>
      )
}