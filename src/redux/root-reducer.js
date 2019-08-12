import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import shopReducer from "./shop/shopReducer";

const rootReducer = combineReducers({
  user: userReducer,
  shop: shopReducer
});

export default rootReducer;
