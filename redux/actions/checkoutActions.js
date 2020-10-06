import {
  SET_DELIVERY_ADDRESS,
  SET_DELIVERY_METHOD,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_TC_AGREEMENT,
  SET_CARDHOLDER_NAME,
  SET_CARD_NUMBER,
  SET_EXPIRY_MONTH,
  SET_EXPIRY_YEAR,
  SET_SECURITY_CODE,
  SET_TOTAL_COST,
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

// Set card number
export const setCardNumber = (e) => {
  return (dispatch) => {
    dispatch({ type: SET_CARD_NUMBER, payload: e.target.value });
  };
};

// Set cardholder name
export const setCardHolderName = (e) => {
  return (dispatch) => {
    dispatch({ type: SET_CARDHOLDER_NAME, payload: e.target.value });
  };
};

// Set security code
export const setSecurityCode = (e) => {
  return (dispatch) => {
    dispatch({ type: SET_SECURITY_CODE, payload: e.target.value });
  };
};

// Set expiry month
export const setExpiryMonth = (e) => {
  return (dispatch) => {
    dispatch({ type: SET_EXPIRY_MONTH, payload: e.target.value });
  };
};

// Set expiry year
export const setExpiryYear = (e) => {
  return (dispatch) => {
    dispatch({ type: SET_EXPIRY_YEAR, payload: e.target.value });
  };
};

// Set total cost
export const setTotalCost = (total) => {
  return (dispatch) => {
    dispatch({ type: SET_TOTAL_COST, payload: total });
  };
};
