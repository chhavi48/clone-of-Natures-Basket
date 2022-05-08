import React from 'react'
import "./Flt.css"
const Flt = ({filterItem , menuList}) => {
  return (
   <>
    <nav className='filter' id="filter2">
     <div className='btn-group'>
       <div className='top-nav'>
         <h2 >Filter</h2> 
         <button className='clbtn'>Clear All</button >
         </div> <hr /> 
     <h3>CHESE, MEAT& FRUITS</h3>
         {menuList.map((currElem) =>{
             return (
               <>
               <div className='filter-button'>
                 
               <button className='btn-group-item'  onClick={()=>filterItem(currElem)}>{currElem}</button>  <br />
               </div>
               </>
             )
         })
         }

     </div>
   </nav>
   </>
  )
}

export default Flt


