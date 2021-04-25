import { combineReducers } from "redux";

import usersReducer from "./userReducer";
import ordersReducer from "./ordersReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  auth: usersReducer,
  orders: ordersReducer,
  products: productReducer,
  cart:cartReducer,
});
