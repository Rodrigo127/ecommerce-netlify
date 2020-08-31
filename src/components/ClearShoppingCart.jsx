import React from 'react';

export default (props) => {
    return(
        <button onClick={props.clear} className="app-btn-flat">
            Vaciar el carrito
        </button>
    )
}