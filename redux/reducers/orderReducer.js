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

const initialState = {
  orders: [],
  success: null,
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ORDER_ERROR:
    case GET_USER_ORDERS_ERROR:
    case CANCEL_ORDER_ERROR: {
      return { ...state, error: action.payload, loading: false };
    }
    case PLACE_ORDER_SUCCESS:
    case CANCEL_ORDER_SUCCESS: {
      return { ...state, success: action.payload, loading: false };
    }
    case GET_USER_ORDERS_SUCCESS: {
      return { ...state, orders: action.payload, loading: false };
    }
    case ORDER_ACTION_LOADING: {
      return { ...state, loading: true };
    }
    default:
      return state;
  }
};
