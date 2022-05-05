import React from 'react'
// import styled from 'styled-components';
// const backcard=styled.div`
//   backgeound-image:url("https://blog.naturesbasket.co.in/wp-content/uploads/2021/10/shutterstock_386792203.jpg")
// `;
const Blogs = () => {
  return (
      <>
    <div>Blogs</div>
      <div className='row'>
          <div className='col-sm-12'>
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_1320x355-blog2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/d8cc09f5-5d68-4853-ae9a-233ceabe3acd.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_1320x355-blog2.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
          </div>
      </div>

      <div className='row mt-3'>
          <div className='col-sm-1'></div>
          <div className='col-sm-3'>
          <div className="card" style={{width: "19rem"}}>
  <img src="https://blog.naturesbasket.co.in/wp-content/uploads/2018/09/healthy-food-2-1024x683.jpeg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Healthy Food</p>
  </div>
</div>
          </div>
          {/* <div className='col-sm-1'></div> */}
          <div className='col-sm-3'>
          <div className="card" style={{width: "19rem"}}>
  <img src="https://blog.naturesbasket.co.in/wp-content/uploads/2018/09/recipes1-1024x683.jpeg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Food Recipes</p>
  </div>
</div>
          </div>
          {/* <div className='col-sm-1'></div> */}
          <div className='col-sm-3'>
          <div className="card" style={{width: "19rem"}}>
  <img src="https://blog.naturesbasket.co.in/wp-content/uploads/2018/09/sweets--1024x683.jpeg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Baking</p>
  </div>
</div>
          </div>

      </div>

      <div className='row mt-5'>
          <div className='col-sm-1'></div>
          <div className='col-sm-3'>
          <div className="card" style={{width: "19rem"}}>
  <img src="https://blog.naturesbasket.co.in/wp-content/uploads/2018/09/meat-1024x683.jpeg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Seafood Recipes</p>
  </div>
</div>
          </div>
          {/* <div className='col-sm-1'></div> */}
          <div className='col-sm-3'>
          <div className="card" style={{width: "19rem"}}>
  <img src="https://blog.naturesbasket.co.in/wp-content/uploads/2018/09/whats-cooking1-1024x683.jpeg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Food Trends</p>
  </div>
</div>
          </div>
          {/* <div className='col-sm-1'></div> */}
          <div className='col-sm-3'>
          <div className="card" style={{width: "19rem"}}>
  <img src="https://blog.naturesbasket.co.in/wp-content/uploads/2018/09/news-1024x680.jpeg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Gift Hampers</p>
  </div>
</div>
          </div>

      </div>

      <div className='row'>

        <div className='col-sm-8'>
          <p>Trending Now chhhavui</p>
          <div className='col-sm-4'>
                <div style={{ 
      backgroundImage: `url("https://blog.naturesbasket.co.in/wp-content/uploads/2021/10/shutterstock_386792203.jpg")` 
    }}>
          </div>
          </div>
          <div className='col-sm-4'></div>
        </div>
        <div className='col-sm-4'></div>
      </div>
    </>
  )
}

export default Blogs