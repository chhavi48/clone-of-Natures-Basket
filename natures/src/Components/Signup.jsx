import React,{useState} from "react";
import { LoginContainer } from "./stlyed";
import { LoginContent ,Signupform} from "./stlyed";
import styles from './style.module.css';
import { faEnvelope, faKey, faXmark, faMobileScreen} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css';
import { Loginstatus, Loginsuccess,Registerstatus} from "../Redux/Login/action";
import { Registerdata } from "../Redux/Signup/action";
import {useDispatch, useSelector} from 'react-redux';

export const Signup=()=>{
    const [userData,setUserData]=useState({});
    const [flag,setFlag]=useState(false);
    const dispatch=useDispatch();
    const registerstatus=useSelector((state)=>state.auth.registerstatus);
    const handleCancel=()=>{
      dispatch(Registerstatus(false));
    }
    const handleChangemobile=(e)=>{
       var  inputname= e.target.name;
        setUserData({...userData,[inputname]:e.target.value})
    }
    const handleChange=(e)=>{
        let inputname=e.target.name;
        setUserData({...userData,[inputname]:e.target.value});
    }
    const handleContinue=()=>{
      // dispatch(Registerdata({mobile:'mobile'}))
      console.log(userData.mobile)
      localStorage.setItem('userdata', JSON.stringify(userData));
      setFlag(true);
    }
  var storedata=localStorage.getItem('userdata');

    const handleRegister=()=>{
  dispatch(Loginsuccess(userData));
  localStorage.setItem('userdata',JSON.stringify(userData));
  alert("Register successfull")
  dispatch(Registerstatus(false));
    }
    return(
          <>{registerstatus &&  <>
            { !flag && <LoginContainer>
              <Signupform>
              <div ><FontAwesomeIcon icon={faXmark} className="cancelicon" style={{marginLeft:'180%'}} onClick={handleCancel}/></div>
                  <div style={{display:'flex'}}>
                  <div className="mobile-no"><FontAwesomeIcon icon={faMobileScreen} className='mobile-icon' />
                  <input type='number' name='mobile' placeholder="Mobile No." onChange={handleChangemobile} required/></div>
                  <div><input type='submit' value='Continue'  onClick={handleContinue} className="continue-btn"/></div>
                  </div>
              </Signupform>
            </LoginContainer>}
            { flag && <LoginContainer >
                <div ><FontAwesomeIcon icon={faXmark} className="cancelicon" onClick={handleCancel}/></div>
                <div className="loginform">
                    {flag && <div className="mobile">{userData.mobile}</div>}
                    <div className="otp"><input type='number' placeholder="Enter OTP" required /></div>
                    <div className="email"><div ><FontAwesomeIcon icon={faEnvelope} className='loginIcons'/></div>
                    <div><input type='email' placeholder='Email Address' name='email' onChange={handleChange} required /></div>
                    </div>
                    <div className="password"><div ><FontAwesomeIcon icon={faKey} className='loginIcons'/></div>
                    <div><input type='password' placeholder='Set Password' name='password' onChange={handleChange} required/></div>
                    </div>
                    <div className='loginbtn'><input type='submit'  onClick={handleRegister}value='Register' /></div>
                </div>
            </LoginContainer>}     
            </>
           }   
           </> 
    )
}