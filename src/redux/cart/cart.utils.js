export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingItem = cartItems.find(item => item.id === cartItemToAdd.id);

    if( existingItem ) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
};

export const getTotalForCart = cartItems => {
    let quantity = 0;
    cartItems.forEach(item => quantity = quantity + item.quantity);
    return quantity;
};