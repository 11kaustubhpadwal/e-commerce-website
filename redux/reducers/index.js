import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import guestReducer from "./guestReducer";
import cartReducer from "./cartReducer";
import checkoutReducer from "./checkoutReducer";

export default combineReducers({
  products: productsReducer,
  guest: guestReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
});
