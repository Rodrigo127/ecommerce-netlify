import React from 'react';
import {connect, useDispatch} from "react-redux";
import {addToCart, addItem} from "../state/actions/shopping_cart";

const AddToCartBtn = ({ sku }) => {
    const dispatch = useDispatch();
    return(
        <button 
            onClick={ ev => dispatch(addItem(sku)) }
            className="app-btn text-xl">
            Agregar al carrito
        </button>
    )
}

const mapStateToProps = (state) => state.shopping_cart;
export default connect(mapStateToProps, {addToCart})(AddToCartBtn);