import {applyMiddleware, combineReducers, createStore} from 'redux';
import { userReducer } from './Users/UserReducer';
import {logger} from 'redux-logger';
const reducer = combineReducers({
    userReducer: userReducer
})
export const store = createStore(reducer, applyMiddleware(logger));