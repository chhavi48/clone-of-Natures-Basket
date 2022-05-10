import {legacy_createStore as createStore,applyMiddleware,combineReducers} from 'redux';
import { authreducer } from './Login/authreducer';
import {signupreducer} from './Signup/signupreducer';

const rootreducer=combineReducers({
    auth:authreducer,
    signup:signupreducer
})
const Middleware=(store)=>(next)=>(action)=>{
    if((typeof action) ==='function'){
        return action(store.dispatch);
    }
     next(action);
}
const Middlewares=applyMiddleware(Middleware);

export const  store=createStore(rootreducer,Middlewares);