// import actions
import { SET_DEPARTMENTS } from "../Actions/types";
import { SET_ACTIVE_DEPARTMENT } from "../Actions/types";
import { SET_CATEGORIES } from "../Actions/types";
import { SET_CART } from "../Actions/types";

const cartInit = {
  total_cart_items: 0,
  total_cart_cost: 0,
  sales_tax: 0,
  delivery_fees: 0,
  pickup_fees: 0,
  convenience_fees: 0,
  cart_grand_total: 0,
  cart_items: [],
};

const axios = require("axios");

const cartReducer = (state = cartInit, action = {}) => {
  switch (action.type) {
    case SET_CART:
      return action.payload;
    default:
      return state;
  }
};
export default cartReducer;
