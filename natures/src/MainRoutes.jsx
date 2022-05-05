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

export const MainRoutes=()=>{
return(
    <>
    <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/Freshfast" element={<Freshfast />}></Route>
        <Route path="/Storelocater" element={<StoreLocater />}></Route>
        <Route path="/Contactus" element={<Contactus />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Favourite" element={<Favourite />}></Route>
        <Route path="/AddtoCart" element={<AddtoCart />}></Route>
    </Routes>
    </>
)
}