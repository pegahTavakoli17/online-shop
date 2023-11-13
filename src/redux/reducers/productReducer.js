// import { productsCount } from "../actions/productsActions";
import { actionTypes } from "../constants/action-types";
const initialState = {
  products: [],
};
const countState = {
  count: 0,
};
const cartState = {
  cart: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};
export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        ...payload,
      };
    case actionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
export const productsCount = (state = countState, { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_PRODUCT_COUNT:
      return {
        ...state,
        count: payload,
      };
    default:
      return state;
  }
};
export const cartReducer = (state = cartState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_CART_PRODUCTS:
      return {
        ...state,
        cart: payload,
      };
    default:
      return state;
  }
};
