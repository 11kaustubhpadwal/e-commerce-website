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
  CLEAR_STATE,
} from "../types";

const initialState = {
  firstName: "",
  lastName: "",
  deliveryAddress: "",
  deliveryMethod: null,
  cardNumber: null,
  cardholderName: "",
  securityCode: null,
  expiryMonth: null,
  expiryYear: null,
  totalCost: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST_NAME: {
      return { ...state, firstName: action.payload };
    }
    case SET_LAST_NAME: {
      return { ...state, lastName: action.payload };
    }
    case SET_DELIVERY_ADDRESS: {
      return { ...state, deliveryAddress: action.payload };
    }
    case SET_DELIVERY_METHOD: {
      return { ...state, deliveryMethod: action.payload };
    }
    case SET_CARD_NUMBER: {
      return { ...state, cardNumber: action.payload };
    }
    case SET_CARDHOLDER_NAME: {
      return { ...state, cardholderName: action.payload };
    }
    case SET_EXPIRY_MONTH: {
      return { ...state, expiryMonth: action.payload };
    }
    case SET_EXPIRY_YEAR: {
      return { ...state, expiryYear: action.payload };
    }
    case SET_SECURITY_CODE: {
      return { ...state, securityCode: action.payload };
    }
    default:
      return state;
  }
};
