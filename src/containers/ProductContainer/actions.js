import {
  ADD_TO_CART,
  ASC_PRODUCT,
  CHECKOUT_CART,
  DECREASE_PRODUCT,
  DELETE_TO_CART,
  DESC_PRODUCT,
  FIND_PRODUCT_BY_SIZE,
  INCREASE_PRODUCT,
} from "./constants";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
export const deleteToCart = (id) => {
  return {
    type: DELETE_TO_CART,
    payload: id,
  };
};
export const increaseToCart = (id) => {
  return {
    type: INCREASE_PRODUCT,
    payload: id,
  };
};
export const decreaseToCart = (id) => {
  return {
    type: DECREASE_PRODUCT,
    payload: id,
  };
};
export const findProductBySize = (size) => {
  return {
    type: FIND_PRODUCT_BY_SIZE,
    payload: size,
  };
};
export const checkOutCart = (product) => {
  return {
    type: CHECKOUT_CART,
    payload: product,
  };
};
