import React from 'react';
import { Routes, Route,Link } from 'react-router-dom';


import Productdetail from './components/Productdetail';
import Sidebar121 from "./components/Sidebar121";





function App() {
  return (
    <>
      
      <Routes>
        <Route exact path="/" element={<Sidebar121 />} />
        <Route
          exact
          path="/productdetail/:productid"
          element={<Productdetail />}
        />
      </Routes>
    </>
  );
}

export default App;
