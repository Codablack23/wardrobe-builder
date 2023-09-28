import { FolderCabinet } from "./components/Models/Folder_cabinet";
import { Wardrobe2 } from "./components/Models/Wardrobe-2";
import { Wardrobe5 } from "./components/Models/Wardrobe-5";
import { MaterialObject, WardrobeLayoutObject } from "./interfaces";
import { BasicShelf } from "./components/Models/Shelf"
import { BookShelf } from "./components/Models/Book_shelf";
import { BookShelf2 } from "./components/Models/Book_shelf_2";

export const materials:MaterialObject[] = [
    {
       name:"plywood",
       id:1,
       src:"/materials/plywood.jpg"
    },
    {
       name:"wood_table",
       id:1,
       src:"/materials/wood_table.jpg"
    },
    {
       name:"kitchen_wood",
       id:1,
       src:"/materials/kitchen_wood.jpg"
    },
    {
       name:"laminate_floor",
       id:1,
       src:"/materials/laminate_floor.jpg"
    }
]

export const shelvesData = [
   {
     column:1,
     shelf_no:1,
     isShown:false
   },
   {
     column:2,
     shelf_no:1,
     isShown:false
   },
   {
     column:3,
     shelf_no:1,
     isShown:false
   },
   {
     column:4,
     shelf_no:1,
     isShown:false
   },
   {
     column:5,
     shelf_no:1,
     isShown:false
   }
]

export const layouts:WardrobeLayoutObject[] = [
   {
    name:"Wardrobe",
    id:1,
    type:"wardrobe",
    slug:"wardrobe-1",
    Model:Wardrobe2,
    preview:"/styles/layout-1.png",
    maxValues:{
      x:360,
      y:270,
      z:90
  },  
  minValues:{
      x:90,
      y:230,
      z:60
  },
   
   }, 
   {
    name:"Folder Cabinet",
    id:1,
    type:"cabinet",
    slug:"folder-cabinet",
    Model:FolderCabinet,
    preview:"/styles/layout-3.png",
    minValues:{
      x:60,
      y:100,
      z:60
     },
     maxValues:{
      x:100,
      y:170,
      z:90
     }
   }, 
  //  {
  //   name:"Basic Shelf",
  //   id:1,
  //   type:"shelf",
  //   slug:"basic-shelf",
  //   Model:BasicShelf,
  //   preview:"/styles/layout-4.png"
  //  }, 
  //  {
  //   name:"Book Shelf",
  //   id:1,
  //   type:"shelf",
  //   slug:"book-shelf",
  //   Model:BookShelf,
  //   preview:"/styles/layout-5.png"
  //  }, 
   {
    name:"Book Shelf",
    id:1,
    type:"shelf",
    slug:"book-shelf",
    Model:BookShelf2,
    preview:"/styles/layout-4.png",
    maxValues:{
      x:360,
      y:270,
      z:90
  },  
  minValues:{
      x:90,
      y:230,
      z:60
  },
   },
]

export function getMinMaxValue(type:string,x:number,y:number){
  if(type==="cabinet") return {minHeight:y * 0.5,maxHeight:170,minWidth:x * 0.5,maxWidth:180};
  return {minHeight:y * 1,maxHeight:270,minWidth:x * 1,maxWidth:360};
}