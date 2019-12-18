import React from 'react';
import { connect} from 'react-redux';

import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import { showHideCartDropdown } from "../../redux/cart/cart.actions";


const CartIcon = ({handleClick}) => (
    <div className='cart-icon' onClick={handleClick}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'> 0 </span>
    </div>
);

const mapDispatchToProps = dispatch => (
    {
        handleClick: () => dispatch(showHideCartDropdown())
    }
);

export default connect(null, mapDispatchToProps)(CartIcon);