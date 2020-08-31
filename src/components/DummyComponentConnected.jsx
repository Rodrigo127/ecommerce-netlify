import React from 'React';
import DummyComponent from './DummyComponent';
import { useDispatch } from 'react-redux';
import { dummyAction } from '../state/actions/shopping_cart';

export default(props) => {
    const dispatch = useDispatch();

    const dummy_function = () => {
        dispatch(dummyAction())
    }

    return(
        <DummyComponent dummy_function={dummy_function} />
    )
}