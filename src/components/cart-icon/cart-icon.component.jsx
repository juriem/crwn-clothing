import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { showHideCartDropdown } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { CartIconContainer, ItemCount, ShoppingIconContainer } from "./cart-icon.styles";


const CartIcon = ({ handleClick, itemCount }) => (
    <CartIconContainer onClick={handleClick}>
        <ShoppingIconContainer />
        <ItemCount> {itemCount} </ItemCount>
    </CartIconContainer>
);

const mapStateToProps = createStructuredSelector(
    {
        itemCount: selectCartItemsCount
    }
);

const mapDispatchToProps = dispatch => (
    {
        handleClick: () => dispatch(showHideCartDropdown())
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);