import React from "react";
import {Routes,Route} from 'react-router-dom';
import {Navbar} from './Components/Navbar';
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { AddtoCart } from "./Components/Cart/AddtoCart";
import { Favourite } from "./Components/Cart/favourite";
import { Contactus } from "./Components/Navpages/Contactus";
import { Freshfast } from "./Components/Navpages/Freshfast";
import { StoreLocater } from "./Components/Navpages/Storelocater";
import { Homepage } from "./Components/Homepage";
import Blogs from './Components/homepages/Blogs';
import { Cheese } from "./Components/cheesepage/src/Chesepage/Cheese";
import Winehome from './Components/Winebeerpage/Winehome';
export const MainRoutes=()=>{
return(
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Freshfast" element={<Freshfast />}></Route>
        <Route path="/Storelocater" element={<StoreLocater />}></Route>
        <Route path="/Contactus" element={<Contactus />}></Route>
        <Route path="/Favourite" element={<Favourite />}></Route>
        <Route path="/AddtoCart" element={<AddtoCart />}></Route>
        <Route path="/Blogs" element={<Blogs />}></Route>
        <Route path="/Cheese" element={<Cheese />}></Route>
        <Route path="/Winehome" element={<Winehome />}></Route>
    </Routes>
    </>
)
}