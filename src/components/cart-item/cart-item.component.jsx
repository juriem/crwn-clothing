import React from 'react';


import { CartItemContainer, CartItemDetail, CartItemDetailsContainer, CartItemImage } from "./cart-item.styles";

const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item' />
        <CartItemDetailsContainer>
            <CartItemDetail>{name}</CartItemDetail>
            <CartItemDetail>{quantity} x {price}</CartItemDetail>
        </CartItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;