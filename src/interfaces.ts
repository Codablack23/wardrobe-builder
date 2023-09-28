import { GroupProps } from "@react-three/fiber"
import { Children, ReactNode } from "react"
import { Texture } from "three"

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
export interface MaterialObject{
    name:string,
    id:number,
    src:string
}
export interface MaterialContextObject{
    door:MaterialObject,
    shelf:MaterialObject,
    body:MaterialObject,
    [key:string]:MaterialObject
}

export interface ShelfObject{
        column:number,
        shelf_no:number,
        isShown:boolean
}
export interface WardrobeLayoutObject{
    name:string,
    type:string
    id:number
    slug:string
    Model:(props: GroupProps) => JSX.Element,
    preview?:string,
    minValues:Dimension,
    maxValues:Dimension
}