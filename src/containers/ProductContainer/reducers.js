import {
  ADD_TO_CART,
  INCREASE_PRODUCT,
  CHECKOUT_CART,
  DELETE_TO_CART,
  DECREASE_PRODUCT,
} from "./constants";
import { products } from "./data";
const initialState = {
  products: products,
  carts: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        carts: [{ ...action.payload, quantity: 1 }, ...state.carts],
      };
    case DELETE_TO_CART:
      const newCart = state.carts.filter((cart) => cart.id !== action.payload);
      return {
        ...state,
        carts: newCart,
      };
    //giam
    case DECREASE_PRODUCT:
      let resultDEC = [...state.carts].map((cart) => {
        if (cart.id === action.payload)
          return { ...cart, quantity: --cart.quantity };
        return cart;
      });
      return {
        ...state,
        carts: resultDEC,
      };
    //tang
    case INCREASE_PRODUCT:
      let resultINC = [...state.carts].map((cart) => {
        if (cart.id === action.payload)
          return { ...cart, quantity: ++cart.quantity };
        return cart;
      });
      return {
        ...state,
        carts: resultINC,
      };
    case CHECKOUT_CART:
      return {
        ...state,
        carts: [],
      };
    default:
      return state;
  }
};
export default cartReducer;
