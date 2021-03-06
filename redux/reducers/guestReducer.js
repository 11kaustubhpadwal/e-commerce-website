import {
  GET_PRODUCTS_LIST_ERROR,
  GET_PRODUCTS_LIST_SUCCESS,
  GET_PRODUCTS_LIST_LOADING,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_SUCCESS,
  CLEAR_RESPONSE,
} from "../types";

const initialState = {
  productsList: [],
  product: null,
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_LIST_SUCCESS: {
      return {
        ...state,
        productsList: action.payload,
        loading: false,
      };
    }
    case GET_PRODUCTS_LIST_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case GET_PRODUCTS_LIST_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    }
    case GET_PRODUCT_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case CLEAR_RESPONSE: {
      return {
        ...state,
        error: null,
        loading: false,
      };
    }
    default:
      return state;
  }
};
