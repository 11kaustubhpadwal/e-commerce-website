import {
  SET_DELIVERY_ADDRESS,
  SET_DELIVERY_METHOD,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_TC_AGREEMENT,
} from "../types";

const initialState = {
  firstName: "",
  lastName: "",
  deliveryAddress: "",
  deliveryMethod: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
