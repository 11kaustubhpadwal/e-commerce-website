import { ADD_TO_CART, REMOVE_FROM_CART, CART_ACTION_LOADING } from "../types";

const initialState = {
  cartItems: [],
  itemQuantity: 0,
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload.item],
        itemQuantity: action.payload.quantity,
        loading: false,
      };
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
    default:
      return state;
  }
};
