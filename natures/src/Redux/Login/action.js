import axios from'axios';
export const WINE_BEER='WINE_BEER';
export const LOGIN_STATUS='LOGIN_STATUS';
export const ERROR='ERROR';
export const LOADING='LOADING';
export const REGISTER_STATUS='REGISTER_STATUS';
// action creator


export const Loginstatus=(payload)=>({
    type:LOGIN_STATUS,
    payload
})
export const Registerstatus=(payload)=>({
    type:REGISTER_STATUS,
    payload
})
export const Loginerror=(payload)=>({
    type:ERROR,
    payload
})
export const Loginloading=(payload)=>({
    type:LOADING,
    payload
})
export const Loginsuccess=(paylaod)=>(dispatch)=>{
    fetch('https://reqres.in/api/login',{
    method:'POST',
    body:JSON.stringify(paylaod),
    headers:{'Content-Type':'application/json'}
})
.then(res=>res.json())
.then(data=>{console.log(data); dispatch(Loginstatus(false))})
.catch(dispatch(Loginerror(true)))
}