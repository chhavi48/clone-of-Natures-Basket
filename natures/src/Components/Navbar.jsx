import React,{useState} from 'react';
import {Link } from 'react-router-dom';
import {Login} from './Login';
import { Signup } from './Signup';
import styles from './style.module.css';
import { Nav } from './stlyed';
import { Navcontent } from './stlyed';
import { Infoline } from './stlyed';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faCartPlus, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from './Navpages/dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { hovercheck} from '../Redux/NavbarPages/action';

export const Navbar =()=>{
    const [dropdown,setDropdown]=useState(false);
    const [authstatus,setAuthstatus]=useState(false);
    const status=useSelector(state=>state.status);
    const dispatch=useDispatch();
    const handleClick=()=>{
       setAuthstatus(true);
    }
    const handleMouseOver=()=>{  
        setDropdown(!false);      
    }
    const handleMouseOut=()=>{
        setDropdown(false)
    }
    
    return (
        <>
        <Nav>
        {authstatus && < Login />}
            <Navcontent>
                <div><img src="https://www.naturesbasket.co.in/Images/logosnew.png?v=2" /></div>
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

                    <div style={{display:'flex'}} className='auth'>
                        <p onClick={handleClick} id="login">Login |</p> 
                        <p >Signup</p>
                    </div>
                    </div>

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
                    <input type="text" placeholder='start shopping...' />
                    <div className='search-bar'><img src="https://www.naturesbasket.co.in/Images/search-button.jpg" style={{height:'37px'}}/> </div>
            <div className='cart'>
               <div><Link to="/Favourite" ><FontAwesomeIcon icon={faStar} style={{color:'#83ba3c',height:'20px'}}/></Link></div> 
                <div><span >|</span></div>
                <div> <Link to="/AddtoCart" ><FontAwesomeIcon icon={faCartPlus} style={{color:'#83ba3c',height:'20px'}} /></Link></div>
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
<div><a href='#'>PAST PURCHASES</a></div>
<div><a href='#'>GIFTING</a></div>
<div><a href='#'>REWARDS</a></div>
<div><a href='#'>BLOG</a></div>
<div><a href='#'>OFFERS</a></div>
<div><a href='#'>CONNOISSEUR'S SELECTION</a></div>
<div><a href='#'>BOOK STORE VISIT</a></div>
            </div>
        </Nav>
        </>
    )
}