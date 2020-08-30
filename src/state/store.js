import { createStore, compose, applyMiddleware } from "redux";
import shopping_cart from "./reducers/shopping_cart";

export default () => createStore(
    shopping_cart,
    {shopping_cart: []},
    compose(
        /*window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/
    )
);