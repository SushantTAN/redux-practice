import counterReducer from './counter';
import loggedReducer from './isLogged';
import arrayReducer from './array';
import axiosReducer from './axios';
import {combineReducers} from 'redux';


const allReducers = combineReducers({
    counterReducer,
    loggedReducer,
    arrayReducer,
    axiosReducer,
    
})

export default allReducers;