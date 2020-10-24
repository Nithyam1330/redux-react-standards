import {combineReducers, createStore} from 'redux';
import { userReducer } from './Users/UserReducer';

const reducer = combineReducers({
    userReducer: userReducer
})
export const store = createStore(reducer);