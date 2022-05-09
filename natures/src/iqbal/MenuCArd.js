import React, { useState } from 'react'
import "./style.css"
import  "./CardDetails.css"
import "./Flt"

export const MenuCard = ({ menuData }) => {
    console.log(menuData)
    var h1 = "<h1>how are you</h1>"
    const [style, setStyle] = useState(h1);
    const showDetails = () =>{
        console.log("you just clicked");
        document.getElementById("data4").innerHTML = `
        <div className="card_details_maindiv" style="display:flex; width:80vw;justify-content: space-between;font-family: system-ui;">
        <div>
        <img className='cdimg' style = "border: 1px solid lightgrey; border-radius: 10px; box-shadow: 5px 10px lightgrey;"
         src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/144cafa8-fcfb-4e9a-8ec2-bd837694f99c_425x425.jpg" alt="" />
        </div>
         <div className="cardchild">
           <h2>NB REGULAR CHEESE PLATTER - 1 Pc</h2>
          
           <div className="socialicon"
           style = "display: flex; justify-content:flex-start;">
             <p style = "margin-right:8px"> <b>Share</b> </p>         
           <i style="margin: 20px 10px 0px 0px ; fontSize:35px; " class="fa-brands fa-facebook"></i>
           <i style="margin: 20px 10px 0px 5px ; fontSize:35px; "  class="fa-brands fa-twitter"></i>
           </div >
             <p>GOUDAX2(FLAVOURS), SMOKED BLACK PEPPER, EDAM</p>
           <div className="rsandimg"
           style= "display: flex; justify-content:flex-start;margin-bottom: 0px;">
             <p  style = " border: 1px solid lightgrey;border-radius: 6px; padding: 10px;"
             className='chprice'>MRP ₹533</p>
             <img  style = "   border-radius: 10px; width: 6pc; height: 2.5pc ; margin-top: 15px;"
             className='icimg' src="https://www.naturesbasket.co.in/Images/CartAddBtn.PNG" alt="" />
           </div>
           <p style = "margin: 2px auto 0px auto">(Inclusive of all taxes)</p>
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



