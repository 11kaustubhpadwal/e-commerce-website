import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CART_ACTION_LOADING,
  CLEAR_CART,
} from "../types";

const initialState = {
  cartItems: [],
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      if (
        state.cartItems.length > 0 &&
        state.cartItems.includes(action.payload.item)
      ) {
        return {
          ...state,
          loading: false,
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            action.payload.item,
            {
              productID: action.payload.item.productID,
              quantity: action.payload.quantity,
            },
          ],
          loading: false,
        };
      }
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.productID !== action.payload
        ),
        loading: false,
      };
    }
    case CART_ACTION_LOADING: {
      return { ...state, loading: true };
    }
    case CLEAR_CART: {
      return { ...state, cartItems: [], error: null, loading: false };
    }
    default:
      return state;
  }
};
