import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
  productsCount,
  cartReducer,
} from "./productReducer";
const reducer = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  count: productsCount,
  cart: cartReducer,
});
export default reducer;
