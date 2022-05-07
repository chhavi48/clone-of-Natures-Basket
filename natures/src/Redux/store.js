import {legacy_createStore as createStore} from 'redux';
import { reducer } from './NavbarPages/reducer';

export const  store=createStore(reducer);