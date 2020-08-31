import React from 'React';
import ClearShoppingCart from './ClearShoppingCart';
import { connect, useDispatch } from 'react-redux';
import { clearShoppingCart } from '../state/actions/shopping_cart';

const ClearChoppingCartBtn = ({}) => {
    const dispatch = useDispatch();

    const clearShoppingCartEvent = (ev) => {
        dispatch(clearShoppingCart())
    }

    return(
        <ClearShoppingCart clear={clearShoppingCartEvent} />
    )
}

const mapStateToProps = (state) => state.shopping_cart;
export default connect(null, {clearShoppingCart})(ClearChoppingCartBtn)
