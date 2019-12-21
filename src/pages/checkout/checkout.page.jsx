import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector} from "reselect";
import { selectCartItems, selectCartTotalPrice } from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.components";

import {
    CheckoutHeaderBlock,
    CheckoutHeaderContainer,
    CheckoutPageContainer,
    CheckoutTotalContainer, PayButton, TestWarning
} from "./checkout.styles";


const CheckoutPage = ({cartItems, totalPrice}) => (

    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <CheckoutHeaderBlock>
                <span>Product</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Description</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Quantity</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Price</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Remove</span>
            </CheckoutHeaderBlock>
        </CheckoutHeaderContainer>
        {
            cartItems.map(item => (
                <CheckoutItem key={item.id} cartItem={item} />
            ))
        }
        <CheckoutTotalContainer>
            <span>TOTAL: {totalPrice}</span>
        </CheckoutTotalContainer>
        <TestWarning>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Epx: 01/20 - CVV: 123
        </TestWarning>
        <PayButton price={totalPrice}/>
    </CheckoutPageContainer>

);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);