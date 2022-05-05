import React from 'react';
import {Link } from 'react-router-dom';
import {Login} from './Login';
import { Signup } from './Signup';
import styles from './style.module.css';
import { Nav } from './stlyed';
import { Navcontent } from './stlyed';
import { Infoline } from './stlyed';
import './style.css';

export const Navbar =()=>{
    return (
        <>
        <Nav>
            <Infoline>
   <p>Now accepting Home delivery of Wine & Beer orders (Mumbai, Thane & Pune). Delivery timings 10.00 AM to 8:00 PM subject to 
    verification of permit and age by delivery person. Age criteria 21+ for mild beer and 25+ for strong beer and wine.</p>
            </Infoline>
            <Navcontent>
                <icon><img src="https://www.naturesbasket.co.in/Images/logosnew.png?v=2" /></icon>
                <div className='navpages'>
                <div className={styles.pagesflex}>
                    <div className={styles.pages}> 
                    <Link to="/" className={styles.Link}>Online Slots Availability  |</Link>
                    <Link to="/Freshfast" className={styles.Link}>   Fresh & Fast   |</Link>
                    <Link to="/Storelocater" className={styles.Link}>   Store Locater   |</Link>
                    <Link to="/Contactus" className={styles.Link}>   Contact us   |</Link>
                    </div>

                    <div>
                        <Link to="/Login">Login |  </Link>
                        <Link to="/Signup">Signup</Link>
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
                    <button>search</button>
                <div className='cart'>
                <Link to="/Favourite" >Favourite    </Link>
                <Link to="/AddtoCart" >Cart</Link>
                </div>
                </div>
            </div>
            <div className='all-Pages'>

            </div>
        </Navcontent>
        </Nav>
        </>
    )
}