import CartTypes  from "./cart.types";

export const showHideCartDropdown = () => ({
    type: CartTypes.SHOW_HIDE_CART_DROPDOWN,
    payload: null
});

export const addItem = item => ({
    type: CartTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CartTypes.REMOVE_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CartTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

