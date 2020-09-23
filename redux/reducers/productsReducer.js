import {
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_SUCCESS,
} from "../types";

const initialState = {
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
