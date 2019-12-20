import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_ZcVY56Xq1zakdvUz3RbXMzHH006hTRg0nW';
    const token = token => {
        console.log(token);
        alert('Payment Sucessfull')
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            token={token}
            stripeKey={publishableKey}/>
    )
};

export default StripeCheckoutButton;