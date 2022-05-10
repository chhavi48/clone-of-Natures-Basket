import React, { useState } from "react";
import wineData from "./Wine";
import styles from "./B.modules.css";
import { useNavigate } from "react-router-dom";
import './style.css';

export default function Winehome() {
const [data, setData] = useState(wineData);
let navigate = useNavigate()
const filterResult = (cateitem) =>{
  const result = wineData.filter((currentData) =>{
   
    return currentData.brands === cateitem;
  })
  setData(result)

}


  return (
    <div className="winepage">
      <div className="primary">
      <div className={styles.uprimg} width = "100%">
        <img
          src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/wbinnercatwebnew.jpg"
          alt=""
        />
      </div>

      <div className="mainbox121">
        <div className="devid121">
          <div className="sidebar121">
            <div className="side12">
              <h4>Filter</h4>
              <p className="clearall" onClick={()=> setData(wineData)} >Clear All</p>
            </div>
            <hr />

            <h3>Wine and Beer</h3>
            <h4>Wine</h4>
            <h4>Beer</h4>

            <div className="winestypes" style={{ marginLeft : "0px"}}></div>
            <hr />
            <h5>Brands</h5>
            <div className="brandtypes">
              <label>
                <p onClick={ () => filterResult("Grover")} >
                  <input type="checkbox" />
                  Grover
                </p>
              </label>
              <br />
              <label>
                <p onClick={ () => filterResult("Fratelli")}>
                  <input type="checkbox" />
                  Fratelli
                </p>
              </label>
              <br />
              <label>
                <p onClick={ () => filterResult("Nature's Basket")}>
                  <input type="checkbox" />
                  Nature's Basket
                </p>
              </label>
              <br />
              <label>
                <p onClick={ () => filterResult("Sula")}>
                  <input type="checkbox" />
                  Sula
                </p>
              </label>
              <br />
              <label>
                <p onClick={ () => filterResult("Kinfisher")}>
                  <input type="checkbox" />
                  Kinfisher
                </p>
              </label>
              <br />
              <label>
                <p>
                  <input type="checkbox" />
                  Dole
                </p>
              </label>
              <br />
              <label>
                <p>
                  <input type="checkbox" />
                  Louis Jadot
                </p>
              </label>
              <br />
              <label>
                <p>
                  <input type="checkbox" />
                  Marchesi
                </p>
              </label>
              <br />
              <label>
                <p>
                  <input type="checkbox" />
                  Reveilo
                </p>
              </label>
              <br />
              <label>
                <p>
                  <input type="checkbox" />
                  Allegrini
                </p>
              </label>
              <br />
              <label>
                <p>
                  <input type="checkbox" />
                  Bira
                </p>
              </label>
              <br />
              <label>
                <p>
                  <input type="checkbox" />
                  Darenberg
                </p>
              </label>
              <br />
              <label>
                <p>
                  <input type="checkbox" />
                  Baron Phillepe
                </p>
              </label>
              <br />
              <label>
                <p>
                  <input type="checkbox" />
                  Budwiser's
                </p>
              </label>
              <br />
              <label>
                <p>
                  <input type="checkbox" />
                  Lindemens
                </p>
              </label>
              <br />
              <label>
                <p>
                  <input type="checkbox" />
                  Penfolds
                </p>
              </label>
              <br />
            </div>
            
           
            
            <div className="brandtypes1">
              <label>
                <p>
                  <input type="checkbox" />
                  New Products
                </p>
              </label>
            </div>
          </div>
          <div>
            <div>
              <div className="topsection121">
                <p >Home Wine & Beer</p>
              </div>
              <div className="upperpar121">
                <div className={styles.frouitsheading121}>
                  <h2>WINE & BEER </h2>
                  &nbsp;&nbsp;&nbsp;
                  <p> 479 Products </p>
                </div>
                <div>
                  <select className={styles.relevance121}  >
                    <option value="">Relevance</option>
                    <option value="high">price low to high</option>
                    <option value="low"> price high to low</option>
                  </select>
                </div>
              </div>

              <hr />
            </div>
            <div className="products121">
              {/* all products will go here.............. */}

              <div className="maincontainer121">
                {/* mapping data...... */}

                {data.map((values) => {
                  const { id, img, text, MRP, Quantity, Name } = values;

                  return (
                    <>
                      <div className="allcards" key={id} onClick={()=>navigate(`/Wineproductdetails/${id}/${Name}/${MRP}/${text}`)}>
                        {/* products.............. */}

                        <div className="card121">
                          <img src={img} alt="" />
                          <p style={{ color: "brown", marginTop: "20px"  , border : "1px solid" ,borderRadius : "8px"}}>
                            {text}
                          </p>
                          <p>{Name}</p>
                          <p>{Quantity}</p>

                          <div className="buttonandprice">
                            <button
                              style={{
                                border: "1px solid gray",
                                borderRadius: "10px",
                                height: "40px",
                              }}
                            >
                              <p>Mrp&#8377;{MRP} </p>
                            </button>

                            <button
                              style={{
                                border: "1px solid gray",
                                display: "flex",
                                borderRadius: "10px",
                                color: "white",
                                backgroundColor: "#84bd3c",
                                height: "40px",
                                textAlign: "center",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <div style={{ display: "flex" }}>
                                <span
                                  style={{ padding: "5px" }}
                                  class="material-symbols-outlined"
                                >
                                  shopping_cart_checkout
                                </span>
                                <p style={{ marginTop: "5px" }}>ADD</p>
                              </div>
                            </button>
                          </div>
                        </div>

                        {/* ..................... */}
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
