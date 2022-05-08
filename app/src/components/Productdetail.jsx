import React,{useState} from 'react';
// import Fruitsdata from './Fruitsdata';
import { useParams } from 'react-router-dom';
import Fruitsdata from "./Fruitsdata";


export default function Productdetail() {

  const [data, setData] = useState(Fruitsdata);


  var { productid } = useParams();

  var thisdata = [];
  function clickedaddbutton(id, title, img, qt, rs) {
    alert("This product has been added to cart");

    var thisdata=JSON.parse(localStorage.getItem("thisdatakey"))

    thisdata.push(
      ...thisdata,
      {
      id: id,
      title: title,
      img: img,
      qt: qt,
      rs: rs,
    })

    localStorage.setItem("thisdatakey",JSON.stringify(thisdata))
    
    
  }
 
  
  const filterResult = () => {

    
    const result = Fruitsdata.filter((currData) => {
     
      
        return currData.id === 1;
      
    });
    setData(result);
  };
  
  
  

  return (
    <div >
      {data.map((values) => {
        const { id, img, title, rs, qt } = values;

        return (
          <div className="upperbox121" key={id}>
            <div className="imagediv121">
              <img
                src={img}
                height="420px"
                width="420px"
                alt=""
                style={{ borderRadius: "30px" }}
              />
            </div>
            <div className="details121">
              <h2>{title}</h2>
              <p>share</p>
              <p>Product of : USA.</p>
              <p>
                When it comes to {title}, our mind remembers Natures basket
                automatically. Enjoy every bite of this All time favourite{" "}
                {title} of the world.
              </p>

              <h6 style={{ color: "gray" }}>{qt}</h6>

              <div className="buttonandprice121">
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
              <p style={{ fontSize: "12px" }}>
                <i> inclusive of all the taxes</i>
              </p>
              <hr />
              <h6>Know More</h6>
              <p style={{ fontSize: "14px", marginRight: "20px" }}>
                {title} is Medium to large, elongated bright {title} with creamy
                yellow flesh. Red Delicious is the most popular {title} in the
                United States. Enjoy every bite of the All time favourite{" "}
                {title} of the world.
                <br /> #Bright {title} <br /> #Made from United states
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
      
    