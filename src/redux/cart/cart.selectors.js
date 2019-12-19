import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (amount, cartItem) => amount + cartItem.quantity,
        0
    )
);

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (amount, item) => amount + item.quantity * item.price,
        0
    )
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);