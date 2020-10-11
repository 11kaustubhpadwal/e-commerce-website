import {
  CANCEL_ORDER_ERROR,
  CANCEL_ORDER_SUCCESS,
  PLACE_ORDER_ERROR,
  PLACE_ORDER_SUCCESS,
  GET_ALL_ORDERS_ERROR,
  GET_ALL_ORDERS_SUCCESS,
  GET_USER_ORDERS_ERROR,
  GET_USER_ORDERS_SUCCESS,
  ORDER_ACTION_LOADING,
} from "../types";

import axios from "axios";

// Place a new order
export const placeOrder = (data) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());

      const response = await axios({
        method: "post",
        url: "/api/user/orders",
        headers: {
          "Content-Type": "application/json",
        },
        data,
      });

      dispatch({
        type: PLACE_ORDER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: PLACE_ORDER_ERROR, payload: error.response.data });
    }
  };
};

// Get a user's orders
export const getUserOrders = (email) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());

      const response = await axios({
        method: "get",
        url: `/api/user/orders?email=${email}`,
      });

      dispatch({
        type: GET_USER_ORDERS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: GET_USER_ORDERS_ERROR, payload: error.response.data });
    }
  };
};

// Cancel an order
export const cancelOrder = (orderNumber, closeModal, email) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());

      const response = await axios({
        method: "patch",
        url: `/api/user/orders?orderNumber=${orderNumber}`,
      });

      dispatch({
        type: CANCEL_ORDER_SUCCESS,
        payload: response.data,
      });

      closeModal(false);

      if (email !== "admin@print-tex.com") {
        dispatch(getUserOrders(email));
      } else {
        dispatch(getAllOrders());
      }
    } catch (error) {
      dispatch({ type: CANCEL_ORDER_ERROR, payload: error.response.data });
    }
  };
};

// Get all orders
export const getAllOrders = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());

      const response = await axios({
        method: "get",
        url: "/api/administrator/orders",
      });

      dispatch({
        type: GET_ALL_ORDERS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: GET_ALL_ORDERS_ERROR, payload: error.response.data });
    }
  };
};

// Set loading
export const setLoading = () => {
  return {
    type: ORDER_ACTION_LOADING,
  };
};
