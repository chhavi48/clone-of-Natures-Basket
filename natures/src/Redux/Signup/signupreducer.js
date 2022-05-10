import { REGISTER_STATUS,REGISTER_ERROR,REGISTER_LOADING, REGISTER_DATA } from "./action";

const Initstate={registerdata:'',registerstatus:false,error:false,loading:false};

export const signupreducer=(state=Initstate,{type,paylaod})=>{
switch(type){
    case REGISTER_DATA:{
        return{...state,registerdata:paylaod }
    }
    case REGISTER_STATUS:{
        return{...state,registerstatus:paylaod}
    }
    case REGISTER_ERROR:{
        return{...state,error:true,loading:false}
    }
    case REGISTER_LOADING:{
        return{...state,loading:true,error:false}
    }
    default:{
        return state;
    }
}
}