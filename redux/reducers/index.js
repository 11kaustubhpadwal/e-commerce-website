import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import guestReducer from "./guestReducer";
import cartReducer from "./cartReducer";
import checkoutReducer from "./checkoutReducer";
import formValidationReducer from "./formValidationReducer";

export default combineReducers({
  products: productsReducer,
  guest: guestReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  validator: formValidationReducer,
});
