import React,{useEffect, useState} from 'react';
import {Link } from 'react-router-dom';
import {Login} from './Login';
import { Signup } from './Signup';
import styles from './style.module.css';
import { Nav } from './stlyed';
import { Navcontent } from './stlyed';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faCartPlus, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from './Navpages/dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Loginstatus,Registerstatus} from '../Redux/Login/action';
import { Trending } from './Navpages/Trending';
// import { Registerstatus } from '../Redux/Signup/action';

export const Navbar =()=>{
    const [dropdown,setDropdown]=useState(false);
    const [flag,setFlag]=useState(true);
    const [trend,setTrend]=useState(false);
    const [cart,setCart]=useState(false);
    const [hoverlogin,setHoverlogin]=useState(false)
    const authstatus=useSelector((state)=>state.auth.authstatus);
    const registerstatus=useSelector((state)=>state.auth.registerstatus);
    const dispatch=useDispatch();

    const handleClick=()=>{
    dispatch(Loginstatus(true));
    }
    const handleRegister=()=>{
        dispatch(Registerstatus(true ));
    }
    console.log(authstatus,'authstatus');
console.log(registerstatus,'-registerstatus');
    const handleMouseOver=()=>{  
        setDropdown(!false);      
    }
    const handleMouseOut=()=>{
        setDropdown(false)
    }
    var storedata=JSON.parse(localStorage.getItem('userdata'));
    var userstatus=false;
    if(storedata===null){
          userstatus=false;
    }else{
          userstatus=true;
    }
    const handlelogged=()=>{

    }
    const handleMouseover=()=>{
setHoverlogin(true)
    }
    const handleMouseout=()=>{
        setHoverlogin(false)
            }
    const handlelogout=()=>{
       localStorage.clear();
       setFlag(!flag);
    }
    const handleaddcart=()=>{
       setCart(!cart);
    }
    const handleSearch=()=>{
setTrend(true);
    }
    const handleSearchout=()=>{
        setTrend(false);
    }
    // setFlag(true);
    return (
        <>
        <Nav>
        {authstatus && < Login />}
        {registerstatus && < Signup />}
        {/* <Signup /> */}
            <Navcontent>
                <Link to='/'><div><img src="https://www.naturesbasket.co.in/Images/logosnew.png?v=2" /></div></Link>
                <div className='navpages'>
                <div className={styles.pagesflex}>
                    <div className={styles.pages}> 
                    <Link to="/" className={styles.Link}>Online Slots Availability </Link>
                    <span>|</span>
                    <Link to="/Freshfast" className={styles.Link}>Fresh & Fast</Link>
                    <span>|</span>
                    <Link to="/Storelocater" className={styles.Link}>Store Locater </Link>
                    <span>|</span>
                    <Link to="/Contactus" className={styles.Link}>Contact us</Link>
                    <span>|</span>
                    </div>

                    <div style={{display:'flex'}} className='auth' onMouseOver={handleMouseover} onMouseOut={handleMouseout}>
                        {!userstatus? (<p onClick={handleClick} className="login">Login |</p> ):
                        (<p onClick={handlelogged} onMouseOver={handleMouseover} onMouseOut={handleMouseout}className="login" style={{fontSize:'15px'}}>{storedata.email}</p>)} 
                        {!userstatus && <p onClick={handleRegister}>Register</p>}
                    </div>
                    </div>
                   {hoverlogin && <div>{userstatus && <div className='logout' onMouseOver={handleMouseover} onMouseOut={handleMouseout}><button onClick={handlelogout} >Logout</button></div> }</div> }

                    <div className={styles.searchflex}>
                    <button className='pin'>Pin</button>
                    <select>
                        <option value="mumbai">Mumbai</option>
                        <option value="pune">Pune</option>
                        <option value="delhincr">Delhi NCR</option>
                        <option value='thane'>Thane</option>
                        <option value='bengaluru'>Bengaluru</option>
                        <option value='navi-mumbai'>Navi Mumbai</option>
                        <option value='Kolkata'>Kolkata</option>
                        <option value='Raigarh-mh'>Raigarh MH</option>
                    </select>
                    <input type="text" onMouseOver={handleSearch} onMouseOut={handleSearchout} placeholder='start shopping...' />
                   {/* <div> {trend && <Trending />}</div> */}
                    <div className='search-bar'><img src="https://www.naturesbasket.co.in/Images/search-button.jpg" style={{height:'37px'}}/> </div>
            <div className='cart'>
               <div><Link to="/Favourite" ><FontAwesomeIcon icon={faStar} style={{color:'#83ba3c',height:'20px'}}/></Link></div> 
                <div><span >|</span></div>
                <div className='addcart' onClick={handleaddcart}> <Link to="/AddtoCart" ><FontAwesomeIcon icon={faCartPlus} style={{color:'#83ba3c',height:'20px'}} /></Link></div>
            </div>
                </div>
            </div>
        </Navcontent>
        <div className='all-Pages'>
 <div className='dropdown' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}> 
   <button  >
    SHOP BY CATEGORY <FontAwesomeIcon icon={faCaretDown} />
  </button>
 {dropdown && <Dropdown onMouseOver={handleMouseOver}/>} 
</div>
<div><Link to='Pastpurchases'>PAST PURCHASES</Link></div>
<div><a href='#'>GIFTING</a></div>
<div><a href='#'>REWARDS</a></div>
<div><Link to='/Blogs'>BLOG</Link></div>
<div><Link to='Offers'>OFFERS</Link></div>
<div><a href='#'>CONNOISSEUR'S SELECTION</a></div>
<div><a href='#'>BOOK STORE VISIT</a></div>
            </div>
        </Nav>
        </>
    )
}