import React, {useState, useEffect} from 'react';

export default ({ priceId }) => {
    console.log(process.env.GATSBY_STRIPE_PUBLIC_KEY);

    const [stripe, setStripe] = useState({});
    useEffect(()=>{
        //setStripe(window.Stripe(process.env.STRIPE_PUBLIC_KEY))
        setStripe(window.Stripe("pk_test_51HDL9WHyrdmYOqrp2OE1ZXLGFZlwbTCuC7o1aHTE7deZRvXX3a9MizjfPcT2gSC3iY2IHwt8sagPFZ6azc9prhgK008qENIQec"))
    }, []); //componentDidMount

    const redirectToCheckout = async(ev) => {
        const response = await stripe.redirectToCheckout({
            lineItems: [
                    {price: priceId, quantity: 1},
                ],
            mode: 'payment',
            successUrl: window.location.origin + `/completado`,
            cancelUrl: window.location.origin + `/`
        });

        if(response.error){
            console.log(response.error);
        }
    }

    return(
    <button onClick={redirectToCheckout} className="app-btn text-xl">Checkout {process.env.GATSBY_STRIPE_PUBLIC_KEY}</button>
    )
}