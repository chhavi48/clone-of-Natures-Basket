export const REGISTER_REQUEST='REGISTER_REQUEST';
export const REGISTER_ERROR='REGISTER_ERROR';
export const REGISTER_LOADING='REGISTER_LOADING';
export const REGISTER_DATA='REGISTER_DATA';
export const REGISTER_STATUS='REGISTER_STATUS';

export const Registerrequest=(payload)=>(dispatch)=>{
fetch('https://reqres.in/api/register',{
    method:'POST',
    body:payload,
    headers:{'Content-type':'application/json'}
}).then(res=>res.json())
.then(data=>dispatch(Registerstatus(true)))
.catch(error=>dispatch(Registererror(true)))
}

export const Registerstatus=(payload)=>({
    type:REGISTER_STATUS,
    payload
})
export const Registererror=(payload)=>({
    type:REGISTER_ERROR,
    payload
})
export const Registerloading=(payload)=>({
    type:REGISTER_ERROR,
    payload
})
 
export const Registerdata=(payload)=>({
type:REGISTER_DATA,
payload
})