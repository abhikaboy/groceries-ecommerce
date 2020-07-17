import { SET_ACTIVE_CATEGORY } from "./types";
export const setActiveCategory = (category) => {
  return (dispatch) => {
    dispatch({
      type: SET_ACTIVE_CATEGORY,
      payload: category,
    });
  };
};
