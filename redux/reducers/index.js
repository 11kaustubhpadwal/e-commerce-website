import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import guestReducer from "./guestReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  products: productsReducer,
  guest: guestReducer,
  search: searchReducer,
});
