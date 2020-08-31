/**
 * Es una funcion que recibe el estado y que recibe una accion
 * dentro de esta funcion se genera un nuevo estado con los cambios
 * se retorna
 * y redux toma este como el nuevo estado
 * 
 * Son Funciones puras
 */

import { ADD_ITEM,CLEAR_SHOPPING_CART } from "../actionTypes";

 export default function(state = {}, action){
    const {shopping_cart} = state;

    if(action.type === ADD_ITEM){
         return {shopping_cart: state.shopping_cart.concat([action.payload])};
     }

    if(action.type === CLEAR_SHOPPING_CART){
        return {shopping_cart: []};
    }

     return state;
 }

 
 