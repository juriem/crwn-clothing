import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";
import {
    Arrow,
    CheckoutItemContainer,
    Field,
    Image,
    ImageContainer,
    Quantity, QuantityValue,
    RemoveButton
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItemFromCart }) => {
    const { imageUrl, name, quantity, price } = cartItem;

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Image alt='image' src={imageUrl}/>
            </ImageContainer>
            <Field className='name'>{name}</Field>
            <Quantity>
                <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
                <QuantityValue>{quantity}</QuantityValue>
                <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
            </Quantity>
            <Field className='price'>{price}</Field>
            <RemoveButton onClick={
                () => clearItemFromCart(cartItem)
            }>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);