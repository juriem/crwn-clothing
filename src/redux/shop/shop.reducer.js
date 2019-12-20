import SHOP_DATA from "./shop.data";

const INITIAL_STATE = {
    collections: SHOP_DATA,
    cartItems: {
        item1: {

        },
        item2: {

        }
    }
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch ( action.type ) {
        default:
            return state;
    }
};
export default shopReducer;