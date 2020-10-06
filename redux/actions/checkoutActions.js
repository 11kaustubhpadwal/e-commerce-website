import {
  SET_DELIVERY_ADDRESS,
  SET_DELIVERY_METHOD,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_TC_AGREEMENT,
} from "../types";

// Set first name
export const setFirstName = (e) => {
  return (dispatch) => {
    dispatch({ type: SET_FIRST_NAME, payload: e.target.value });
  };
};

// Set last name
export const setLastName = (e) => {
  return (dispatch) => {
    dispatch({ type: SET_LAST_NAME, payload: e.target.value });
  };
};

// Set delivery address
export const setDeliveryAddress = (e) => {
  return (dispatch) => {
    dispatch({ type: SET_DELIVERY_ADDRESS, payload: e.target.value });
  };
};

// Set delivery method
export const setDeliveryMethod = (e) => {
  return (dispatch) => {
    dispatch({ type: SET_DELIVERY_METHOD, payload: e.target.value });
  };
};

// Set TC agreement
export const setTCAgreement = (e) => {
  return (dispatch) => {
    dispatch({ type: SET_TC_AGREEMENT, payload: e.target.value });
  };
};
