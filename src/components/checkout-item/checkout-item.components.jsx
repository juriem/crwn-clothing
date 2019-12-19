import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';

import { clearItemFromCart } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItemFromCart}) => {
    const  { imageUrl, name, quantity, price } = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='image' src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={
                () => clearItemFromCart(cartItem)
            }>&#10005;</div>
        </div>
    );
};

const mapDispatchToProps = dispatch =>({
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);