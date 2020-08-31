import React from 'react';

export default ({ addProduct }) => {
    return(
        <button 
            onClick={addProduct}
            className="app-btn text-xl">
            Agregar al carrito
        </button>
    )
}
