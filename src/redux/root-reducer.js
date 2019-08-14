import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import shopReducer from "./shop/shopReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  user: userReducer,
  shop: shopReducer,
  cart: cartReducer
});

export default rootReducer;
