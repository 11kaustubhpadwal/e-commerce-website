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
    default:
      return state;
  }
};
