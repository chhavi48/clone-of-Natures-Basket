import React, { useState } from 'react'
import "./style.css"
import  "./CardDetails.css"
import "./Flt"
import { CardDetails } from './CardDetails'
// import { CardDetails } from './CardDetails'


export const MenuCard = ({ menuData }) => {
    console.log(menuData)
    var h1 = "<h1>how are you</h1>"
    const [style, setStyle] = useState(h1);
    const showDetails = () =>{
        console.log("you just clicked");
        document.getElementById("data4").innerHTML = `
        <div className="card_details_maindiv" style="display:flex; width:70vw;justify-content: space-between;">
        <div>
        <img className='cdimg' src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/144cafa8-fcfb-4e9a-8ec2-bd837694f99c_425x425.jpg" alt="" />
        </div>
         <div className="cardchild">
           <h2>NB REGULAR CHEESE PLATTER - 1 Pc</h2>
          
           <div className="socialicon">
             <p> <b>Share</b> </p>         
           <i style={{margin: "15px 0px", fontSize : " 25px"}} class="fa-brands fa-facebook"></i>
           <i style={{margin: "15px 20px", fontSize : " 25px"}} class="fa-brands fa-twitter"></i>
           </div >
             <p>GOUDAX2(FLAVOURS), SMOKED BLACK PEPPER, EDAM</p>
           <div className="rsandimg">
             <p className='chprice'>MRP₹533</p>
             <img className='icimg' src="https://www.naturesbasket.co.in/Images/CartAddBtn.PNG" alt="" />
           </div>
           <p>(Inclusive of all taxes)</p>
           <hr />
           <p>Know More</p>
           <p>GOUDAX2(FLAVOURS), SMOKED BLACK PEPPER, EDAM</p>
  
          </div>
      </div>`
    //   <CardDetails/>
    document.getElementById("filter2").style.display="none"
    document.getElementById("fmainNone").style.display="none"
        setStyle(h1);
    }
  
    return (
  <>
  <div className='fmain' id='fmainNone'>
            <h2>CHEESE, MEAT & FRUIT PLATTERS  <sub><span style={{color:"lightgrey"}}>{menuData.length}producs</span></sub></h2>
            <hr />
            <h3 style={{textAlign:"center"}}> {menuData[0].category}  RECOMMENDED FOR YOU</h3>  
            <section className='main-card--container'>               
                {menuData.map((currElem) => {
                    
                    const { id, name, category, image, qty, price } = currElem;
                    return (
                        
                        <>   
                                          
                            <div className='card-container' key={currElem.id}>
                                <div className='card' >
                                    <div className='card-body' onClick={showDetails} >
                                        <div className='star' >

                                            <img src={image} alt="images" className='card-media' />
                                         
                                        </div>
                                        <span className='card-author subtle' style={{ color: "green" }}>{name}</span>
                                        <h4 className='card-title'>{qty}</h4>
                                        <div className='order'>
                                            <span className='card-read'>Rs.{price}</span>
                                            {/* <span className='card-tag subtle'>Order Now</span> */}
                                            <img src="https://www.naturesbasket.co.in/Images/CartAddBtn.PNG" alt="Order logo" className='orderImg' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )

                })}
            </section>
            </div>

        </>
    )
}



// const CardDetails = () => {  
//     // console.log(Menu.price)
//   return (
//     <>
//     <div className="card_details_maindiv" >
//       <div>
//       <img className='cdimg' src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/144cafa8-fcfb-4e9a-8ec2-bd837694f99c_425x425.jpg" alt="" />
//       </div>
//        <div className="cardchild">
//          <h2>NB REGULAR CHEESE PLATTER - 1 Pc</h2>
        
//          <div className="socialicon">
//            <p> <b>Share</b> </p>         
//          <i style={{margin: "15px 0px", fontSize : " 25px"}} class="fa-brands fa-facebook"></i>
//          <i style={{margin: "15px 20px", fontSize : " 25px"}} class="fa-brands fa-twitter"></i>
//          </div >
//            <p>GOUDAX2(FLAVOURS), SMOKED BLACK PEPPER, EDAM</p>
//          <div className="rsandimg">
//            <p className='chprice'>MRP₹533</p>
//            <img className='icimg' src="https://www.naturesbasket.co.in/Images/CartAddBtn.PNG" alt="" />
//          </div>
//          <p>(Inclusive of all taxes)</p>
//          <hr />
//          <p>Know More</p>
//          <p>GOUDAX2(FLAVOURS), SMOKED BLACK PEPPER, EDAM</p>

//         </div>
//     </div>
//     </>
//   )
// }
