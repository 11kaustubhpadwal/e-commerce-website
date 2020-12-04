import axios from "axios";
import {
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  REMOVE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_ERROR,
  CLEAR_FEEDBACK_MESSAGE,
} from "../types";

// Add a new product to the shop
export const addProduct = (product, closeForm) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());

      const response = await axios({
        method: "post",
        url: "/api/administrator/products",
        headers: {
          "Content-Type": "application/json",
        },
        data: product,
      });

      dispatch({
        type: ADD_PRODUCT_SUCCESS,
        payload: response.data,
      });

      closeForm();

      dispatch(getProducts());

      setTimeout(() => {
        dispatch({ type: CLEAR_FEEDBACK_MESSAGE });
      }, 5000);
    } catch (error) {
      dispatch({ type: ADD_PRODUCT_ERROR, payload: error.response.data });

      closeForm();

      dispatch(getProducts());

      setTimeout(() => {
        dispatch({ type: CLEAR_FEEDBACK_MESSAGE });
      }, 5000);
    }
  };
};

// Get a list of all products in the shop
export const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());

      const response = await axios({
        method: "get",
        url: "/api/administrator/products",
      });

      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: response.data.products,
      });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR, payload: error.response.data });

      setTimeout(() => {
        dispatch({ type: CLEAR_FEEDBACK_MESSAGE });
      }, 5000);
    }
  };
};

// Remove a product from the shop
export const removeProduct = (productID, closeDialog) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());

      const response = await axios({
        method: "delete",
        url: "/api/administrator/products",
        headers: {
          "Content-Type": "application/json",
        },
        data: { productID },
      });

      dispatch({
        type: REMOVE_PRODUCT_SUCCESS,
        payload: response.data,
      });

      closeDialog();

      dispatch(getProducts());

      setTimeout(() => {
        dispatch({ type: CLEAR_FEEDBACK_MESSAGE });
      }, 5000);
    } catch (error) {
      dispatch({ type: REMOVE_PRODUCT_ERROR, payload: error.response.data });

      closeDialog();

      dispatch(getProducts());

      setTimeout(() => {
        dispatch({ type: CLEAR_FEEDBACK_MESSAGE });
      }, 5000);
    }
  };
};

// Set loading for adding a new product
export const setLoading = () => {
  return {
    type: ADD_PRODUCT_LOADING,
  };
};
