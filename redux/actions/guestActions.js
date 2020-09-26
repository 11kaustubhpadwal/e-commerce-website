import axios from "axios";
import {
  GET_PRODUCTS_LIST_ERROR,
  GET_PRODUCTS_LIST_LOADING,
  GET_PRODUCTS_LIST_SUCCESS,
  CLEAR_RESPONSE,
} from "../types";

// Get a list of all products in the shop for the guest user
export const getProductsGuest = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());

      const response = await axios({
        method: "get",
        url: "/api/administrator/products",
      });

      dispatch({
        type: GET_PRODUCTS_LIST_SUCCESS,
        payload: response.data.products,
      });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_LIST_ERROR, payload: error.response.data });

      setTimeout(() => {
        dispatch({ type: CLEAR_RESPONSE });
      }, 10000);
    }
  };
};

// Set loading for getting the products
export const setLoading = () => {
  return {
    type: GET_PRODUCTS_LIST_LOADING,
  };
};
