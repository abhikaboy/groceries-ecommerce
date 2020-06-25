// import actions
import { SET_ACTIVE } from "../Actions/types";
const activeItemInit = {
  name: "",
  description: "",
  url: "",
  display: false,
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
      };

    default:
      return state;
  }
};
export default activeItemReducer;
