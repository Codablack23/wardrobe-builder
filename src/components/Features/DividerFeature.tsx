import { useContext, useRef } from "react"
import { DividerContext } from "../../contexts/DividerContext"
import { Select } from "antd"

export default function DividerFeature(){
    const {divider,setDivider}  = useContext(DividerContext)
    const options = [
        {value:"none",label:"None"},
        {value:"center",label:"Center"},
        {value:"left",label:"Left"},
        {value:"right",label:"RIght"},

    ]
    const onSelect=(value:string)=>{
      setDivider(value)
    }
    return (
      <div className="bg-gray-200 rounded-md p-2 mb-2">
             <div className="flex justify-between items-center">
                <div className="flex-1">
                <p className="text-sm font-medium">Dividers</p>
                </div>
                <div className="flex-1">
                <Select
                style={{width:"100%"}}
                options={options}
                onSelect={onSelect}
                value={divider}
                defaultValue={divider}
                />
                </div>
             </div>
           </div>
      )
}