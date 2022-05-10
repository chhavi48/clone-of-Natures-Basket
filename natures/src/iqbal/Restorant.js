import React, {useState} from 'react'
import "./style.css"
import Menu from "./manuApi"
import { MenuCard } from './MenuCArd'
import Flt from './Flt'
// import './CardDetails.css'
// import { CardDetails } from './CardDetails'
// import { showDetails} from './MenuCArd'

const uniqueList = [
  ...new Set(Menu.map((currElem) =>{
  return currElem.category;
})),
"All",
]
console.log(uniqueList);

export const Restorant = () => {
  const [menuData, setMenuData] = useState(Menu)
  const [menuList, setMenuList] = useState(uniqueList)


  const filterItem = (category) =>{
    if(category ==="All"){        
      setMenuData( Menu);
      return;
    }
    const updatedList = Menu.filter((currElem) =>{
      return currElem.category === category

    })
    setMenuData(updatedList)
  }

   
  return (

   <>
   <div className='mdiv'>
   <Flt filterItem = {filterItem}  menuList={menuList}/>
   <MenuCard menuData = {menuData} />
   <div id= "data4"></div>

   </div>

   </>
  )
}
