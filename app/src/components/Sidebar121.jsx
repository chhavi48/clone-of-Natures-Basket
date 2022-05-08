import React, { useState } from "react";
// import styles from "../styles/Frouitandvegitables.module.css";
import Fruitsdata from "./Fruitsdata";
import { useNavigate } from "react-router-dom";


export default function Sebar121() {
  const [data, setData] = useState(Fruitsdata);
  const [cart, setCart] = useState([]);



  let navigate = useNavigate();


 var thisdata = [];
 function clickedaddbutton(id, title, img, qt, rs) {
   alert("This product has been added to cart");

 }



  const filterResult = (catItem) => {
    const result = Fruitsdata.filter((currData) => {
      if (catItem === "organic") {
        return currData.daily === catItem;
      } else if (catItem === "veg") {
        return currData.daily === catItem;
      } else if (catItem === "instock") {
        return currData.stock === catItem;
      } else {
        return currData.type === catItem;
      }
    });
    setData(result);
  };

  return (
    <div className="main121">
      <div className="devide121">
        <div className="sidebar121">
          <div className="header121">
            <span>Filter</span>
            <span className="clearall" onClick={() => setData(Fruitsdata)}>
              Clear All
            </span>
          </div>
          <hr />

          <h5>Fruits and Vegetables</h5>
          <div className="fruitstypes">
            <p onClick={() => filterResult("frouit")}>Fruits</p>
            <p onClick={() => filterResult("Exoticfrouit")}>Exotic Fruits</p>
            <p onClick={() => filterResult("vegitable")}>Daily vegetables</p>
            <p onClick={() => filterResult("Exoticvegitable")}>
              Exotic vegetables
            </p>
            <p onClick={() => filterResult("baby")}>Baby Tender vegetables</p>
            <p onClick={() => filterResult("vegitable")}>Organic vegetables</p>
            <p onClick={() => filterResult("canned")}>Canned and Frozen</p>
            <p onClick={() => filterResult("frozen")}>
              Cold Pressed and Freezed
            </p>
          </div>
          <hr />
          <h5>Brands</h5>
          <div className="brandtypes">
            <label>
              <p onClick={() => setData(Fruitsdata)}>
                <input type="checkbox" />
                Fruits and Vegetables
              </p>
            </label>
            <br />
            <label>
              <p onClick={() => filterResult("Exoticfrouit")}>
                <input type="checkbox" />
                Fruits and Vegetables Exotic
              </p>
            </label>
            <br />
            <label>
              <p onClick={() => filterResult("frozen")}>
                <input type="checkbox" />
                Faddox
              </p>
            </label>
            <br />
            <label>
              <p onClick={() => filterResult("canned")}>
                <input type="checkbox" />
                Nature's Basket
              </p>
            </label>
            <br />
            <label>
              <p onClick={() => filterResult("frozen")}>
                <input type="checkbox" />
                Nature's Best
              </p>
            </label>
            <br />
            <label>
              <p onClick={() => filterResult("Exoticvegitable")}>
                <input type="checkbox" />
                Tong Garden
              </p>
            </label>
            <br />
            <label>
              <p onClick={() => filterResult("canned")}>
                <input type="checkbox" />
                Dole
              </p>
            </label>
            <br />
            <label>
              <p onClick={() => filterResult("vegitable")}>
                <input type="checkbox" />
                Healthy Alternatives
              </p>
            </label>
            <br />
            <label>
              <p onClick={() => filterResult("frouit")}>
                <input type="checkbox" />
                Yummies
              </p>
            </label>
            <br />
            <label>
              <p onClick={() => filterResult("frozen")}>
                <input type="checkbox" />
                Daucy
              </p>
            </label>
            <br />
            <label>
              <p onClick={() => filterResult("frouit")}>
                <input type="checkbox" />
                Fruits
              </p>
            </label>
            <br />
            <label>
              <p onClick={() => filterResult("vegitable")}>
                <input type="checkbox" />
                Vegetables
              </p>
            </label>
            <br />
            <label>
              <p onClick={() => filterResult("canned")}>
                <input type="checkbox" />
                Freshcon
              </p>
            </label>
            <br />
            <label>
              <p onClick={() => filterResult("frozen")}>
                <input type="checkbox" />
                Happilo
              </p>
            </label>
            <br />
            <label>
              <p onClick={() => filterResult("frouit")}>
                <input type="checkbox" />
                Nature's
              </p>
            </label>
            <br />
            <label>
              <p onClick={() => filterResult("organic")}>
                <input type="checkbox" />
                Organic
              </p>
            </label>

            <br />
          </div>
          <hr />
          <h5>Dietary and Lifestyle</h5>
          <div className="brandtypes">
            <label>
              <p onClick={() => filterResult("organic")}>
                <input type="checkbox" />
                Organic
              </p>
            </label>
            <br />
            <label>
              <p onClick={() => filterResult("veg")}>
                <input type="checkbox" />
                Vegetarian
              </p>
            </label>
          </div>
          <hr />
          <h5>Availabilty</h5>
          <div className="brandtypes1">
            <label>
              <p onClick={() => filterResult("instock")}>
                <input type="checkbox" />
                Exclude out of stock
              </p>
            </label>
          </div>
          <hr />
          <h5>Others</h5>
          <div className="brandtypes1">
            <label>
              <p onClick={() => setData(Fruitsdata)}>
                <input type="checkbox" />
                New Products
              </p>
            </label>
          </div>
        </div>
        <div>
          <div>
            <div className="topsection121">
              <p>Home - Fruits & Vegetables</p>
            </div>
            <div className="upperpart121">
              <div className="">
                <h2>FRUITS & VEGETABLES </h2>
                &nbsp;&nbsp;&nbsp;
                <p> </p>
              </div>
              <div>
                <select className="relevance121">
                  <option value="">Relevance</option>
                  <option
                    
                  >
                    price low to high
                  </option>
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
                const { id, img, title, rs, qt } = values;

                return (
                  <div className="card121" key={id}>
                    <img
                      src={img}
                      alt=""
                      onClick={() => navigate(`/Productdetail/${id}`)}
                    />
                    <p style={{ color: "brown", marginTop: "20px" }}>{title}</p>
                    <p>{qt}</p>

                    <div className="buttonandprice">
                      <button
                        style={{
                          border: "1px solid gray",
                          borderRadius: "10px",
                          height: "40px",
                        }}
                      >
                        <p>Mrp&#8377;{rs} </p>
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
                        onClick={() => clickedaddbutton(id, title, img, qt, rs)}
                      >
                        <div style={{ display: "flex" }}>
                          <span
                            style={{ padding: "5px" }}
                            className="material-symbols-outlined"
                          >
                            shopping_cart_checkout
                          </span>
                          <p style={{ marginTop: "5px" }}>ADD </p>
                        </div>
                      </button>
                    </div>
                  </div>
                );
              })}

              {/* ............... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
