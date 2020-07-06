// import actions
import { SET_ACTIVE } from "../Actions/types";
import { SET_QUANTITY } from "../Actions/types";
const activeItemInit = {
  name: "",
  description: "",
  url: "",
  display: false,
  quantity: 0,
};
const activeItemReducer = (state = activeItemInit, action = {}) => {
  switch (action.type) {
    case SET_ACTIVE:
      return {
        ...state,
        name: action.name,
        description: action.description,
        url: action.url,
        display: action.display,
        price: action.price,
        quantity: 1,
      };
    case SET_QUANTITY:
      return {
        ...state,
        quantity: action.payload,
      };
    default:
      return state;
  }
};
export default activeItemReducer;
