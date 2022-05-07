import { WINE_BEER ,HOVER_CHECK} from "./action";

const initstate={status:false}
export  const reducer=(state=initstate,{type,payload})=>{
switch(type,payload){
    case HOVER_CHECK:{
        return{...state,status:payload}
    }
    default:{
        return state;
    }
}
}