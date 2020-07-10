import { SET_CATEGORIES } from "./types";
export const setCategories = (categories) => {
  return (dispatch) => {
    dispatch({
      type: SET_CATEGORIES,
      payload: categories,
    });
  };
};
