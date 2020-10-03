import { ADD_TO_CART, REMOVE_FROM_CART, CART_ACTION_LOADING } from "../types";

// Add an item to the cart
export const addToCart = (item, quantity) => {
  return (dispatch) => {
    dispatch(setLoading());

    dispatch({ type: ADD_TO_CART, payload: { item, quantity } });
  };
};

// Remove an item from the cart
export const removeFromCart = (productID) => {
  return (dispatch) => {
    dispatch(setLoading());

    dispatch({ type: REMOVE_FROM_CART, payload: productID });
  };
};

// Set loading for adding a item to the cart
export const setLoading = () => {
  return {
    type: CART_ACTION_LOADING,
  };
};
