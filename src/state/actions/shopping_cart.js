import { ADD_ITEM,CLEAR_SHOPPING_CART,DUMMY_ACTION } from '../actionTypes';

//Action creators for shopping_cart
// Funciones que retornan acciones


/**
 * { type: '', payload: {} }
 * 
 * 
 */

export const addItem = (product) => {
    return{
        type: ADD_ITEM, 
        payload: product
    }
}

export const clearShoppingCart = () => ({
    type: CLEAR_SHOPPING_CART
})

export const dummyAction = () => ({
    type: DUMMY_ACTION
})