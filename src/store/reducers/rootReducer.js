import authReducer from './authReducer';
import productoReducer from './productoReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    producto: productoReducer
});

export default rootReducer