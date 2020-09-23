import axios from "axios";
import {
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_SUCCESS,
} from "../types";

export const addProduct = (productTextFields, productImage) => {
  return async (dispatch) => {
    try {
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
        data: productImage,
      });

      dispatch({
        type: ADD_PRODUCT_SUCCESS,
        payload: { response1, response2 },
      });
    } catch (error) {
      dispatch({ type: ADD_PRODUCT_ERROR, payload: error.response.data });
    }
  };
};
