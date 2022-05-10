
export const AddtoCart=()=>{
    return(
        <>
        <div className='container' style={{width:"700px",height:"500px" ,border:"2px solid black",marginLeft:"43%"}}>
        <div className='first' style={{height:"200px",overflow:"scroll"}}>
           <div className='firstdata mt-5' style={{display:"flex"}}>
               <img src="https://gnbdevcdn.s3.amazonaws.com/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_50x50.jpg"/>
           <p>HA TAPIOCA FLOUR 400g 1.00 Pc</p>
           <button style={{backgroundColor:"green",width:"100px",height:"25px",marginLeft:"200px"}}>- 1 +</button>
           <p style={{marginLeft:"20px"}}>₹212</p>
           </div>
  
           <div className='firstdata mt-3' style={{display:"flex"}}>
               <img src="https://gnbdevcdn.s3.amazonaws.com/ProductVariantThumbnailImages/6e654ba2-a7e8-440b-97ab-dc556dceaab4_50x50.jpg"/>
           <p>Kala Chana Organic Tattva 1.00 Pc</p>
           <button style={{backgroundColor:"green",width:"100px",height:"25px",marginLeft:"200px"}}>- 1 +</button>
           <p style={{marginLeft:"20px"}}>₹122</p>
           </div>
  
           <div className='firstdata mt-3' style={{display:"flex"}}>
               <img src="https://gnbdevcdn.s3.amazonaws.com/ProductVariantThumbnailImages/c14f4343-335e-42d6-84bc-7d2e412d6660_50x50.jpg"/>
           <p>RAY SPRAY OIL JAR 200ml 1.00 Pc</p>
           <button style={{backgroundColor:"green",width:"100px",height:"25px",marginLeft:"200px"}}>- 1 +</button>
           <p style={{marginLeft:"20px"}}>₹180</p>
           </div>
      
      </div>
           <div className='data' style={{height:"50px",marginRight:"400px"}}>
              <p> total price:  ₹514</p>
              <p> delivery Charge:₹50</p>
              {/* <button style={{marginLeft:"160%"}}>Proceed to CheckOut</button> */}
           </div>
      
      
        <div className='second mt-5' style={{height:"230px"}}>
        <hr></hr>
      <p>HAND-PICKED OFFERS JUST FOR YOU</p>
            <div className='one'>
                   <div className='cart' style={{display:"flex"}}>
                    
                       <img src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b2a10a60-7a17-409d-b069-4b8440d1a5be_425x425.jpg" style={{width:"100px"}}/>
                       <p style={{marginLeft:"20px"}}>Persist data salad</p><br></br>
                       <div className='button mt-5'>
                           <button  style={{backgroundColor:"green",borderRadius:"5px"}}>add</button>
                       </div>
                       
                       
                       <img src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/78b0f8aa-a2e0-4791-8c90-5aef2f784875_425x425.jpg" style={{width:"100px"}}/>
                       <p style={{marginLeft:"20px"}}>Typhoo Green Tea 25Typhoo Green Tea 25's</p><br></br>
                       <div className='button mt-5'>
                           <button  style={{backgroundColor:"green",borderRadius:"5px"}}>add</button>
                       </div>
                   </div>
  {/*               
                <div className='two'>
                  
            </div> */}
            </div>
           
        </div>
        </div>
        </>
    )
}