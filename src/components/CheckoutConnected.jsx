import React, {useState, useEffect} from 'react';
import Checkout from './Checkout';

export default ({ shoppingCart }) => {

    const [stripe, setStripe] = useState({});
    useEffect(()=>{
        setStripe(window.Stripe(process.env.GATSBY_STRIPE_PUBLIC_KEY))
    }, []); //componentDidMount

    const redirectToCheckout = async(ev) => {
        const response = await stripe.redirectToCheckout({
            lineItems: shoppingCart.map( product => ({price: product.id, quantity: product.quantity})),
            mode: 'payment',
            successUrl: window.location.origin + `/completado`,
            cancelUrl: window.location.origin + `/`
        });

        if(response.error){
            console.log(response.error);
        }
    }

    return(
        <Checkout redirectToCheckout={redirectToCheckout} />
    )
}