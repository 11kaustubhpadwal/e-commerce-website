import axios from "axios";
import {
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_SUCCESS,
} from "../types";

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
    } catch (error) {
      dispatch({ type: ADD_PRODUCT_ERROR, payload: error.response.data });
    }
  };
};

export const setLoading = () => {
  return {
    type: ADD_PRODUCT_LOADING,
  };
};
