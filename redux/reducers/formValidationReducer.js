import {
  STEP_1_VALIDATION_ERROR,
  STEP_2_VALIDATION_ERROR,
  STEP_3_VALIDATION_ERROR,
  SET_VALIDATOR_LOADING,
  CLEAR_VALIDATION_ERROR_MSG,
} from "../types";

const initialState = {
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STEP_1_VALIDATION_ERROR:
    case STEP_2_VALIDATION_ERROR:
    case STEP_3_VALIDATION_ERROR: {
      return { ...state, error: action.payload, loading: false };
    }
    case CLEAR_VALIDATION_ERROR_MSG: {
      return { ...state, error: null, loading: false };
    }
    case SET_VALIDATOR_LOADING: {
      return { ...state, loading: true };
    }
    default:
      return state;
  }
};
