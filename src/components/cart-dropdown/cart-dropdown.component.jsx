import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom';

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { showHideCartDropdown } from "../../redux/cart/cart.actions";
import { CartDropdownContainer, CartItemsContainer, CheckoutButton, EmptyMessageText } from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ?
                    cartItems.map(item => (
                        <CartItem key={item.id} item={item}/>
                    ))
                    :
                    <EmptyMessageText>Your cart is empty</EmptyMessageText>
            }
        </CartItemsContainer>
        <CheckoutButton onClick={
            () => {
                history.push('/checkout');
                dispatch(showHideCartDropdown())
            }
        }>
            GO TO CHECKOUT
        </CheckoutButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItems
    }
);

export default withRouter(connect(mapStateToProps)(CartDropdown));