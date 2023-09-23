import {useContext } from "react"
import { Space,Select } from "antd"
import { ViewContext } from "../contexts/ViewContext"

export default function SelectAngle(){
    const {angle,setAngle} = useContext(ViewContext)
    const handleChange = (value: string) => {
        const arrValue = value.split(",").map(i=>parseInt(i))
        setAngle([arrValue[0],arrValue[1],arrValue[2]])
      };
    return(
        <div className="absolute rounded-md bg-gray-100 top-2 left-2 flex items-center justify-center  gap-4 w-48  z-10 p-1">
        <div>
        <p className="text-lg my-2 font-medium text-center">Your View</p>
         <Space wrap>
            <Select
             className="w-full"
              defaultValue={angle.toString()}
              style={{ width: 170 }}
              onChange={handleChange}
              options={[
                { value: "1,0,0", label: 'Top View' },
                { value: "0,0,0", label: 'Front View' },
                // { value: [], label: '180 degree' },
                { value: "0,1,0", label: 'Side View' },
              ]}
            />
          </Space>
        </div>
      </div>      
    )
}