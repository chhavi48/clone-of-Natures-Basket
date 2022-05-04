import React from 'react'

const Cards = () => {
  return (
   <>
   <div className='outer mt-4' style={{display:"flex"}}>
       <div className='row'>
         
               <div className='col-sm-1'></div>
               <div className='col-sm-3'>
               <div className="card" style={{width: "20rem",borderBottom:"4px solid gray"}}>
  <img src="https://www.naturesbasket.co.in/Images/NaturesBasketGifting.jpeg?v=7" className="card-img-top" alt="img"/>
</div>
               </div>
               <div className='col-sm-3'>
               <div className="card" style={{width: "20rem",marginLeft:"40%", borderBottom:"4px solid gray"}}>
  <img src="https://www.naturesbasket.co.in/Images/Japanesecuisine-webbox.png?v=9" alt="img"/>
</div>
               </div>
               <div className='col-sm-3'>
               <div className="card" style={{width: "20rem", marginLeft:"80%",borderBottom:"4px solid gray"}}>
  <img src="https://www.naturesbasket.co.in/Images/Gluten-free-web%20box%20banner.png?v=15" className="card-img-top" alt="img"/>
</div>
               </div>
               <div className='col-sm-2'></div>
           </div>

       </div>

       <div className='shop mt-2'>
           <div className='row'>
               <div className='col-sm-12'>
                   <p style={{fontSize:"24px"}}>SHOP BY CATEGORY</p>
               </div>
           </div>
       </div>

<div className='catergory'>
    <div className='row'>
     
        <div className='col-sm-2'>
        <div className="card" style={{width: "18rem" ,marginRight:"50%"}}>
  <img src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Exoticvegetablesweb.png" className="card-img-top" alt="..."/>

  <ul className="list-group list-group-flush" style={{fontSize:"13px",marginRight:"40%"}}>
    <li className="list-group" style={{marginTop:"2%",fontSize:"15px"}}>Exotic Vegetables</li>
    <li className="list-group" style={{marginTop:"2%"}}>Asparagus Artichokes</li>
    <li className="list-group" style={{marginTop:"2%"}}>Avocados Peppers</li>
    <li className="list-group" style={{marginTop:"2%"}}>Broccoli Zucchini</li>
    <li className="list-group" style={{color:"green",marginTop:"2%"}}>View All</li>
  </ul>
 
</div>
        </div>
        <div className='col-sm-2'>
        <div className="card" style={{width: "18rem", marginLeft:"50%"}}>
  <img src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/coldcutweb.png" className="card-img-top" alt="..."/>

  <ul className="list-group list-group-flush" style={{fontSize:"13px",marginRight:"40%"}}>
    <li className="list-group" style={{marginTop:"2%",fontSize:"15px"}}>Exotic Vegetables</li>
    <li className="list-group" style={{marginTop:"2%"}}>Asparagus Artichokes</li>
    <li className="list-group" style={{marginTop:"2%"}}>Avocados Peppers</li>
    <li className="list-group" style={{marginTop:"2%"}}>Broccoli Zucchini</li>
    <li className="list-group" style={{color:"green",marginTop:"2%"}}>View All</li>
  </ul>
 
</div>
        </div>
        <div className='col-sm-2'>
        <div className="card" style={{width: "18rem" ,marginLeft:"100%"}}>
  <img src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Freshartisinalbreadsweb.png" className="card-img-top" alt="..."/>

  <ul className="list-group list-group-flush" style={{fontSize:"13px",marginRight:"40%"}}>
    <li className="list-group" style={{marginTop:"2%",fontSize:"15px"}}>Exotic Vegetables</li>
    <li className="list-group" style={{marginTop:"2%"}}>Asparagus Artichokes</li>
    <li className="list-group" style={{marginTop:"2%"}}>Avocados Peppers</li>
    <li className="list-group" style={{marginTop:"2%"}}>Broccoli Zucchini</li>
    <li className="list-group" style={{color:"green",marginTop:"2%"}}>View All</li>
  </ul>
 
</div>
        </div>
        <div className='col-sm-2'>
        <div className="card" style={{width: "18rem",marginLeft:"150%"}}>
  <img src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/dailyessentialsweb.png" className="card-img-top" alt="..."/>

  <ul className="list-group list-group-flush" style={{fontSize:"13px",marginRight:"40%"}}>
    <li className="list-group" style={{marginTop:"2%",fontSize:"15px"}}>Exotic Vegetables</li>
    <li className="list-group" style={{marginTop:"2%"}}>Asparagus Artichokes</li>
    <li className="list-group" style={{marginTop:"2%"}}>Avocados Peppers</li>
    <li className="list-group" style={{marginTop:"2%"}}>Broccoli Zucchini</li>
    <li className="list-group" style={{color:"green",marginTop:"2%"}}>View All</li>
  </ul>
 
</div>
        </div>
        <div className='col-sm-1'></div>
    </div>
</div>

   </>
  )
}

export default Cards