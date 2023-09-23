import { Children, ReactNode } from "react"

export type Angles = [x:number,y:number,z:number]

export interface ContextProviderProps{
    children:ReactNode
}
export interface ViewContextObject{
   angle:Angles,
   setAngle:(value:Angles)=>void
}
export interface Dimension{
    x:number,
    y:number,
    z:number
}
export interface Unit{
   name:string,
   conversion:number
}
export interface DimensionContextObject{
    dimensions:Dimension,
    unit:Unit,
    setDimension:(newDimension:Dimension)=>void
    setUnit:(newUnit:Unit)=>void
}