// import actions
import { SET_SEARCH } from "../Actions/types";
const searchInit = {
  display: false,
};
const searchReducer = (state = searchInit, action = {}) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        display: action.payload,
      };

    default:
      return state;
  }
};
export default searchReducer;
