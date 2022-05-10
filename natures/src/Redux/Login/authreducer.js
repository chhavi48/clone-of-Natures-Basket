import {LOGIN_STATUS, ERROR,LOADING,REGISTER_STATUS} from "./action";

const initstate={authstatus:false,registerstatus:false,error:false,loading:false};

export  const authreducer=(state=initstate,{type,payload})=>{
switch(type){
    case LOGIN_STATUS:{
        return{...state,authstatus:payload,error:false,loading:false}
    }
    case REGISTER_STATUS:{
        return{...state,registerstatus:payload,error:false,loading:false}
    }
   case ERROR:{
       return{...state,error:true,loading:false}
   }
   case LOADING:{
       return{...state,loading:true,error:false}
   }
    default:{
        return state;
    }
}
}