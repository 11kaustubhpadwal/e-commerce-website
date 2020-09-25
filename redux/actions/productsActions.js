import axios from "axios";
import {
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  CLEAR_FEEDBACK_MESSAGE,
} from "../types";

// Add a new product to the shop
export const addProduct = (productTextFields, productImage, closeForm) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());

      const formData = new FormData();
      formData.append("productImage", productImage);

      const response1 = await axios({
        method: "post",
        url: "/api/administrator/products",
        headers: {
          "Content-Type": "application/json",
        },
        data: productTextFields,
      });

      const response2 = await axios({
        method: "post",
        url: "/api/administrator/productImage",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      });

      const response = { response1: response1.data, response2: response2.data };

      dispatch({
        type: ADD_PRODUCT_SUCCESS,
        payload: response,
      });

      closeForm();

      getProducts();

      setTimeout(() => {
        dispatch({ type: CLEAR_FEEDBACK_MESSAGE });
      }, 5000);
    } catch (error) {
      dispatch({ type: ADD_PRODUCT_ERROR, payload: error.response.data });

      closeForm();

      getProducts();

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

// Set loading for adding a new product
export const setLoading = () => {
  return {
    type: ADD_PRODUCT_LOADING,
  };
};
