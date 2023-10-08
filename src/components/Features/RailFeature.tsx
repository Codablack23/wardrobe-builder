import { useContext, useRef } from "react"
import { Select } from "antd"
import { RailsContext } from "../../contexts/RailsContext"

export default function RailFeature(){
    const {rails,setRails}  = useContext(RailsContext)
    const options = [
        {value:"none",label:"None"},
        {value:"single",label:"Single"},
        {value:"double",label:"Double"},
        {value:"double_and_shelf",label:"Double and shelf"},
        {value:"forward",label:"Forward"},

    ]
    const onSelect=(value:string)=>{
      setRails(value)
    }
    return (
      <div className="bg-gray-200 rounded-md p-2">
             <div className="flex justify-between items-center">
                <div className="flex-1">
                    <p className="text-sm font-medium">Add Rails</p>
                </div>
                <div className="flex-1">
                <Select
                style={{width:"100%"}}
                options={options}
                onSelect={onSelect}
                value={rails}
                defaultValue={rails}
                />
                </div>
             </div>
           </div>
      )
}