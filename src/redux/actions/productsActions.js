import { actionTypes } from "../constants/action-types";
export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProduct = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = (product) => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCT,
    payload: product,
  };
};
export const updateProductCount = (number) => {
  return {
    type: actionTypes.UPDATE_PRODUCT_COUNT,
    payload: number,
  };
};
export const setCartProducts = (product) => {
  return {
    type: actionTypes.SET_CART_PRODUCTS,
    payload: product,
  };
};
