import React from 'react';
import DummyComponent from './DummyComponent';
import {connect, useDispatch} from "react-redux";
import { dummyAction } from '../state/actions/shopping_cart';

const DummyBtn = (props) => {
    const dispatch = useDispatch();

    const dummy_function = (ev) => {
        dispatch(dummyAction());
    }

    return(
        <DummyComponent dummy_function={dummy_function} />
    )
}

const mapStateToProps = (state) => state.shopping_cart;
export default connect(null, {dummyAction})(DummyBtn);
