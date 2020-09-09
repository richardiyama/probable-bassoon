import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import thunk from 'redux-thunk';
import {productListReducer, productDetailsReducer} from './reducer/productListReducer';
import {cartReducer} from './reducer/cartReducer';

const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails:productDetailsReducer,
    cart: cartReducer
})

const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;