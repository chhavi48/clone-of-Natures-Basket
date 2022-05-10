import React from "react";
import { data } from "./data";
import './Offer.css';

const Offers = () => {
  // console.log(data);

  return (
    <div className="Offerspage">
      <p className="header">Home   Offers    Deals</p>

      <div className="htype">
        <h6 className="deal">DEALS</h6>

        <h5 className="lat">LATEST DEALS</h5>

        <h6 className="totprod"> 421 products</h6>
      </div>

      <div className="offercontainer">
        {data.map((el) => {
          return (
            <div>
              <img className="offerimage" src={el.imgurl} />
              <p  className="bhar">DELIVERY IN 90 MINUTES</p>
              <h5 className="clname">{el.name}</h5>
              <p className='Offerpera'>1 pc</p>
              <p className="buy">{`Buy @ Rs.${el.mrp}/-`}</p>
              <div className="shiva">
                <h6 className="ith">{`M.R.P ₹${el.mrpstr}`}</h6>
                <h5 className="it">{`₹ ${el.mrp}`}</h5>

                <button className="AddToCart">ADD</button>
              </div>
            </div>
          );
        })}
      </div>
      <div>{/* <h1>Footer</h1> */}</div>
    </div>
  );
};
export default Offers;
