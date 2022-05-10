import React from "react";
import Slider from './homepages/Slider';
import Cards from './homepages/Cards';
import Events from './homepages/Events';
import {Navbar} from './Navbar';
import '../App.css';
export const Homepage=()=>{
    return(
        <>
        <div className="App">
        <Slider />
        <Cards />
        <Events />
        </div>
        </>
    )
}