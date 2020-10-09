import {
  CANCEL_ORDER_ERROR,
  CANCEL_ORDER_SUCCESS,
  PLACE_ORDER_ERROR,
  PLACE_ORDER_SUCCESS,
  GET_ALL_ORDERS_ERROR,
  GET_ALL_ORDERS_SUCCESS,
  GET_USER_ORDERS_ERROR,
  GET_USER_ORDERS_SUCCESS,
} from "../types";

const initialState = {
  orders: [],
  success: null,
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
