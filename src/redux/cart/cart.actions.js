import CartTypes  from "./cart.types";

export const showHideCartDropdown = () => ({
    type: CartTypes.SHOW_HIDE_CART_DROPDOWN,
    payload: null
});

export const addItem = item => ({
    type: CartTypes.ADD_ITEM,
    payload: item
});
