import React from 'react';
import CartItem from './CartItem';
import Total from './Total';
import DummyComponentConnected from './DummyComponentConnected';

export default ({ shoppingCart }) => {
    return(
        <div className="card">
            <div className="flex items-end bg-blue-700">
                <div className="flex-1">
                    <header className="flex p-6 item-center">
                        <h2 className="text-3xl flex-1 font-semibold">Mi carrito de compras</h2>
                        <div>
                            <DummyComponentConnected />
                        </div>
                    </header>
                    <ul>
                        {
                            shoppingCart.map( (product) => <CartItem product={product} key={product.id}>{product.nickname}</CartItem>)
                        }
                    </ul>
                </div>
                <div className="w-1/3 text-right p-6 font-semibold">
                    <Total shoppingCart={shoppingCart} />
                </div>
            </div>
        </div>
    )
}