import {applyMiddleware, combineReducers, createStore} from 'redux';
import { userReducer } from './Users/UserReducer';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';
import createSaga from 'redux-saga';
import { rootSaga } from '../saga';
// import {composeWithDevTools} from 'redux-devtools-extension';

// @ts-ignore
const composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"];
const reducer = combineReducers({
    userReducer: userReducer
})
const sagaConfiguration = createSaga();
export const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk, sagaConfiguration)));
sagaConfiguration.run(rootSaga);
