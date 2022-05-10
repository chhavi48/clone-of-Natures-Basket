import React,{useState} from "react";
import { LoginContainer } from "./stlyed";
import { LoginContent } from "./stlyed";
import styles from './style.module.css';
import { faEnvelope, faKey, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css';
import { Loginstatus ,Loginsuccess} from "../Redux/Login/action";
import {useDispatch} from 'react-redux';
import axios from "axios";

export const Login=()=>{
    const [userData,setUserData]=useState({});
    const dispatch=useDispatch();
    const handleCancel=()=>{
      dispatch(Loginstatus(false));
    }
    const handleChange=(e)=>{
        let inputname=e.target.name;
        setUserData({...userData,[inputname]:e.target.value});
    }
    
    const handleLogin=()=>{
  dispatch(Loginsuccess(userData));
  localStorage.setItem('userdata',JSON.stringify(userData));
  alert("Login successfull")
    }
    return(
        <>
        <LoginContainer >
            {/* <form onSubmit={handleLogin}> */}
            <div ><FontAwesomeIcon icon={faXmark} className="cancelicon" onClick={handleCancel}/></div>
            <div className="loginform">
                <div className="email"><div ><FontAwesomeIcon icon={faEnvelope} className='loginIcons'/></div>
                <div><input type='email' placeholder='Email Address' name='email' onChange={handleChange} required /></div>
                </div>
                <div className="password"><div ><FontAwesomeIcon icon={faKey} className='loginIcons'/></div>
                <div><input type='password' placeholder='Password' name='password' onChange={handleChange} required/></div>
                </div>
                <div className='loginbtn'><input type='submit'  onClick={handleLogin}value='Login' /><br></br> <p style={{color:'#cb3771',fontSize:'12px'}}>forgot password?</p></div>
                 <button>Login Via OTP</button>
            </div>
            {/* </form> */}
        </LoginContainer>
        </>
    )


}