import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import thunk from 'redux-thunk';
import {productListReducer, productDetailsReducer} from './reducer/productListReducer';
import {cartReducer} from './reducer/cartReducer';
import Cookie from 'js-cookie';
import { userSigninReducer } from './reducer/userReducer';

const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = {cart:{cartItems}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails:productDetailsReducer,
    cart: cartReducer,
    userSignin:userSigninReducer
})

const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;