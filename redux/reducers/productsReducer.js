import {
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_SUCCESS,
  CLEAR_FEEDBACK_MESSAGE,
} from "../types";

const initialState = {
  success: null,
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_SUCCESS: {
      return {
        ...state,
        success: action.payload,
        loading: false,
      };
    }
    case ADD_PRODUCT_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case ADD_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case CLEAR_FEEDBACK_MESSAGE: {
      return {
        ...state,
        success: null,
        error: null,
        loading: false,
      };
    }
    default:
      return state;
  }
};
