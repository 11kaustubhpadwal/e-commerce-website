import {
  STEP_1_VALIDATION_ERROR,
  STEP_2_VALIDATION_ERROR,
  STEP_3_VALIDATION_ERROR,
  SET_VALIDATOR_LOADING,
  CLEAR_VALIDATION_ERROR_MSG,
} from "../types";

export const checkStep1Details = (data) => {
  return (dispatch) => {
    dispatch(setValidatorLoading());

    const { firstName, lastName, deliveryAddress, deliveryMethod } = data;

    if (
      firstName === "" ||
      lastName === "" ||
      deliveryAddress === "" ||
      deliveryMethod === null
    ) {
      dispatch({
        type: STEP_1_VALIDATION_ERROR,
        payload: "Please fill all the details.",
      });
    } else {
      dispatch({
        type: CLEAR_VALIDATION_ERROR_MSG,
      });
    }
  };
};

export const checkStep2Details = (data) => {
  return (dispatch) => {
    dispatch(setValidatorLoading());

    const {
      cardNumber,
      cardholderName,
      securityCode,
      expiryMonth,
      expiryYear,
    } = data;

    if (
      cardNumber === null ||
      cardNumber === "" ||
      cardholderName === "" ||
      securityCode === null ||
      securityCode === "" ||
      expiryMonth === null ||
      expiryMonth === "" ||
      expiryYear === null ||
      expiryYear === "" ||
      expiryYear.length < 4 ||
      expiryYear.length > 4 ||
      expiryMonth.length < 1 ||
      expiryMonth.length > 2 ||
      securityCode.length < 3 ||
      securityCode.length > 3
    ) {
      dispatch({
        type: STEP_2_VALIDATION_ERROR,
        payload: "Please fill all the details.",
      });
    } else {
      dispatch({
        type: CLEAR_VALIDATION_ERROR_MSG,
      });
    }
  };
};

export const checkStep3Details = (data) => {
  return (dispatch) => {
    dispatch(setValidatorLoading());

    const { tcAgreement } = data;

    if (tcAgreement === false) {
      dispatch({
        type: STEP_3_VALIDATION_ERROR,
        payload: "Please agree to the terms and conditions to proceed.",
      });
    } else {
      dispatch({
        type: CLEAR_VALIDATION_ERROR_MSG,
      });
    }
  };
};

export const setValidatorLoading = () => {
  return (dispatch) => {
    dispatch({ type: SET_VALIDATOR_LOADING });
  };
};
