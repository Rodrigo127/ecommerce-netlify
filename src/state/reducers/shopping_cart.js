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
<<<<<<< HEAD
         return {shopping_cart: state.shopping_cart.concat([action.payload])};
     }

    if(action.type === CLEAR_SHOPPING_CART){
        return {shopping_cart: []};
    }

     return state;
 }
=======
        const productIfAny = shopping_cart.find(product => product.id === action.payload.id);
        if(productIfAny){
           return {shopping_cart: shopping_cart.map( product => {
               if(product.id === productIfAny.id) return { ...product, quantity: product.quantity + 1 }
               return product;
           })}
        }

        return { shopping_cart: shopping_cart.concat([
           {
               ...action.payload,
               quantity: 1
           }
       ])};
    }

    if(action.type === CLEAR_SHOPPING_CART){
        return { shopping_cart: [] };
    }

    return { shopping_cart };
}
>>>>>>> 7c8203e6954461fc369910e9f618139b7fff066a
