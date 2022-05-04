import React from 'react'

const Cards = () => {
  return (
   <>
   <div className='outer mt-4' style={{display:"flex"}}>
       <div className='row'>
         
               <div className='col-sm-1'></div>
               <div className='col-sm-3'>
               <div className="card" style={{width: "20rem"}}>
  <img src="https://www.naturesbasket.co.in/Images/NaturesBasketGifting.jpeg?v=7" className="card-img-top" alt="img"/>
</div>
               </div>
               <div className='col-sm-3'>
               <div className="card" style={{width: "20rem",marginLeft:"40%"}}>
  <img src="https://www.naturesbasket.co.in/Images/Japanesecuisine-webbox.png?v=9" alt="img"/>
</div>
               </div>
               <div className='col-sm-3'>
               <div className="card" style={{width: "20rem", marginLeft:"80%"}}>
  <img src="https://www.naturesbasket.co.in/Images/Gluten-free-web%20box%20banner.png?v=15" className="card-img-top" alt="img"/>
</div>
               </div>
               <div className='col-sm-2'></div>
           </div>
       </div>
   </>
  )
}

export default Cards