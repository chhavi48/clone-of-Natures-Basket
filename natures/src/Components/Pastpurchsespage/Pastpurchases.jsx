import React from "react";
import './slider.css';

const Pastpurchases = () => {
  return (
    <>
      <div className="shiva">
        <div className="row">
          <div className="col-sm-12">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://d1z88p83zuviay.cloudfront.net/BannerImages/5658ebaa-f296-4121-991c-c2009109e764_1320x376.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/d8cc09f5-5d68-4853-ae9a-233ceabe3acd.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_1320x355-blog2.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel_inner_two">
        <img
          src="https://www.naturesbasket.co.in/Images/NaturesBasketGifting.jpeg?v=7"
          alt=""
        />

        <img
          src="https://www.naturesbasket.co.in/Images/Japanesecuisine-webbox.png?v=9"
          alt="..."
        />

        <img
          src="https://www.naturesbasket.co.in/Images/Gluten-free-web%20box%20banner.png?v=15"
          alt="..."
        />
      </div>

      <div className="datta">
        <h4>----------------SHOP BY CATEGORY------------------</h4>
      </div>
      <div className="sec_image">
        <img
          src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Exoticvegetablesweb.png"
          alt=""
        />

        <img
          src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/coldcutweb.png"
          alt=""
        />
        <img
          src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Freshartisinalbreadsweb.png"
          alt=""
        />
        <img
          src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/dailyessentialsweb.png"
          alt=""
        />
      </div>
      <div className="wtext">
        <div className="text">
          <h5>EXOTIC VEGETABLES</h5>
          <p>Asparagus Artichokes</p>
          <p>Avacados Peppers</p>
          <p>Broccoli Zuccini</p>
          <h6 className="green">View All</h6>
        </div>
        <div className="text">
          <h5>Meat , Poultry & Sea Fod</h5>
          <p>Chicken Cuts Lollipops Mince</p>
          <p>Fish Other Sea Food</p>
          <p>Fresh Kebabs Others</p>
          <h6 className="green">View All</h6>
        </div>
        <div className="text">
          <h5>Fresh Artisanal Breads</h5>
          <p>Breadsticks Crostinni Lavache</p>
          <p>Buns Croissants Bagels</p>
          <p>Muffins Cakes Brownies</p>
          <h6 className="green">View All</h6>
        </div>
        <div className="last">
          <h5>Daily Essentials</h5>
          <p>Snacks & Beverages</p>
          <p>Breakfast , Dairy & Bakery</p>
          <p>Staples</p>
          <h6 className="green">View All</h6>
        </div>
      </div>
      <div className="datta">
        <h4>--------TRENDING OFFERS---------</h4>
      </div>
      <div className="fourimg">
        <div className="seperateimg">
          <img
            src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ed4612bb-9b28-4140-bc73-148fd7967a5f_425x425.jpg"
            alt=""
          />
          <h6>Delivery in 90 Minutes</h6>
          <p>BORGES FUSILLI PASTA 500g</p>
          <br />

          <button className="btngr">ADD</button>
        </div>
        <div className="seperateimg">
          <img
            src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/aa2669bc-0025-4871-b258-bc5edcc9bf4e_425x425.jpg"
            alt=""
          />
          <h6>Delivery in 90 Minutes</h6>
          <p>Jimmy's Cocktails - Sex On The Beach 250ML</p>
          <button className="btngr">ADD</button>
        </div>
        <div className="seperateimg">
          <img
            src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/0e6ef359-783c-42c5-a138-81194b8b99b1_425x425.jpg"
            alt=""
          />
          <h6>Delivery in 90 Minutes</h6>
          <p>MAMIE YOVA STRAWBERY STIRRRED YOGHURT90G</p>
          <button className="btngr">ADD</button>
        </div>
        <div className="seperateimg">
          <img
            src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/4c3e9034-6b25-4b21-8ed6-e73765e1d6fd_425x425.jpg"
            alt=""
          />
          <h6>Delivery in 90 Minutes</h6>
          <p>TRUEFARM ORGANIC ROLLED OATS 25g</p>
          <br />
          <button className="btngr">ADD</button>
        </div>
      </div>

      <div className="datta">
        <h4>-------CURATED FOR YOU--------</h4>
      </div>
      <div className="fourimg">
        <div className="seperateimg">
          <img
            src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1386cd6f-2788-43d8-9a61-bbd3a5a3d039_425x425.jpg"
            alt=""
          />
          <h6>Delivery in 90 Minutes</h6>
          <p>HEIDI GRANDOR DARK COFFEE-55% 80g</p>

          <p>M.R.P. ₹ 300.0 </p>
          <br />
          <button className="btngr">ADD</button>
        </div>
        <div className="seperateimg">
          <img
            src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/6304d56e-40cd-442b-91d6-e4ad22838903_425x425.jpg"
            alt=""
          />
          <h6>Delivery in 90 Minutes</h6>

          <p>HA MULTIGRAIN HALF LOAF ECONOMY 30-</p>
          <p>M.R.P. ₹ 60.00 </p>

          <button className="btngr">ADD</button>
        </div>
        <div className="seperateimg">
          <img
            src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/228ef3ed-7dd4-48c8-a411-e8a60d0c2b21_425x425.jpg"
            alt=""
          />
          <h6>Delivery in 90 Minutes</h6>
          <p>BIRA 91 GOLD WHEAT STRONG 500ML</p>
          <p>M.R.P. ₹ 180.00 </p>
          <br />

          <button className="btngr">ADD</button>
        </div>
        <div className="seperateimg">
          <img
            src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/eb42d578-0144-4aef-906e-31e45011eec0_425x425.jpg"
            alt=""
          />
          <h6>Delivery in 90 Minutes</h6>
          <p>SAUCERY HARISSA SAUCE 200G</p>
          <p>M.R.P. ₹ 290.00 </p>
          <br />
          <button className="btngr">ADD</button>
        </div>
      </div>

      <div className="shiva">
        <div className="row">
          <div className="col-sm-12">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://d1z88p83zuviay.cloudfront.net/BannerImages/5658ebaa-f296-4121-991c-c2009109e764_1320x376.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/d8cc09f5-5d68-4853-ae9a-233ceabe3acd.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_1320x355-blog2.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="datta">
        <h4>--------WHAT'S TRENDING---------</h4>
      </div>
      <div className="fourimg">
        <div className="seperateimg">
          <img
            src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_425x425.jpg"
            alt=""
          />
          <h6 className="delver">Delivery in 90 Minutes</h6>
          <p>HA TAPIOCA FLOUR 400G</p>

          <p>M.R.P. ₹ 210.0 </p>
          <br />
          <button className="btngr">ADD</button>
        </div>
        <div className="seperateimg">
          <img
            src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/97e020df-acc1-4b42-bc2c-40160bacf0c0_425x425.jpg"
            alt=""
          />
          <h6 className="delver">Delivery in 90 Minutes</h6>

          <p>KW MAGNUM CHOCOTRFFLE STICK 80Ml</p>
          <p>M.R.P. ₹ 80.00 </p>
          <br />

          <button className="btngr">ADD</button>
        </div>
        <div className="seperateimg">
          <img
            src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c14f4343-335e-42d6-84bc-7d2e412d6660_425x425.jpg"
            alt=""
          />
          <h6 className="delver">Delivery in 90 Minutes</h6>
          <p>RAY SPRAY OIL JAR 200Ml</p>
          <p>M.R.P. ₹ 499.00 </p>
          <br />

          <button className="btngr">ADD</button>
        </div>
        <div className="seperateimg">
          <img
            src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_425x425.jpg"
            alt=""
          />
          <h6 className="delver">Delivery in 90 Minutes</h6>
          <p>HA TAPIOCA FLOUR 400G</p>
          <p>M.R.P. ₹ 210.00 </p>
          <br />
          <button className="btngr">ADD</button>
        </div>
      </div>

      <div className="datta">
        <h4>------OUR EVENTS-------</h4>
      </div>
      <div className="lastimgs">

        <div>

        <img src="https://www.naturesbasket.co.in/Images/PhotoGallery/SanjeevKapoor_at_KolkataGallary.jpg" />
        </div>
        <div>
        <img src="https://d1z88p83zuviay.cloudfront.net/Images/PhotoGallery/Laffaire_Event_Thumbnail.png" />
        </div>
        <div>
        <img src="data:image/jpeg;base64,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"
/>
</div>
      </div>

      <div className="datta">
        <h4>------SHOP BY WORLD BRANDS------</h4>

      </div>
      <div className="logos">
        <div>
          <img src="https://d1z88p83zuviay.cloudfront.net/Images/lexlusif.jpg" alt=""/>
        </div>
        <div>
          <img src="https://d1z88p83zuviay.cloudfront.net/Images/healthy.jpg" alt=""/>
        </div>
        <div>
          <img src="https://d1z88p83zuviay.cloudfront.net/Images/cambay-tiger.jpg" alt=""/>
        </div>
        <div>
          <img src="https://d1z88p83zuviay.cloudfront.net/Images/real-thai.jpg" alt=""/>
        </div>
        <div>
          <img src="https://d1z88p83zuviay.cloudfront.net/Images/barilla.jpg" alt=""/>
        </div>
       
      </div>
    </>
  );
};

export default Pastpurchases;
