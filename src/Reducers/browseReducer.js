// import actions
import { SET_DEPARTMENTS } from "../Actions/types";
import { SET_ACTIVE_DEPARTMENT } from "../Actions/types";
import { SET_CATEGORIES } from "../Actions/types";
import { SET_PRODUCTS } from "../Actions/types";

const browseInit = {
  departments: [],
  activeDepartmentId: 3,
  activeDepartment: [],
  categories: ["default"],
  products: [],
};

const axios = require("axios");
const browseReducer = (state = browseInit, action = {}) => {
  switch (action.type) {
    case SET_DEPARTMENTS:
      return {
        ...state,
        departments: action.payload,
        activeDepartment: action.payload[0],
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_ACTIVE_DEPARTMENT:
      let activeDepartment = state.departments.find(
        (department) => department.id == action.payload
      );
      return {
        ...state,
        activeDepartmentId: action.payload,
        activeDepartment: activeDepartment,
      };
    // case SET_PRODUCTS:

    default:
      return state;
  }
};
export default browseReducer;
