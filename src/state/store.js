import { createStore, compose, applyMiddleware } from "redux";


export default () => createStore(
    (state)=> state,
    {hola: "hola mundo"},
    compose(
        /*window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/
    )
);