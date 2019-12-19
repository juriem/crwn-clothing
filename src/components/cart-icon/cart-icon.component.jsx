import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { showHideCartDropdown } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";


const CartIcon = ({ handleClick, itemCount }) => (
    <div className='cart-icon' onClick={handleClick}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'> {itemCount} </span>
    </div>
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