import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import guestReducer from "./guestReducer";

export default combineReducers({
  products: productsReducer,
  guest: guestReducer,
});
