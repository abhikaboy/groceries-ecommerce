import { SET_RECENTLY_BOUGHT } from "./types";
export const setRecentlyBought = (products) => {
  return (dispatch) => {
    dispatch({
      type: SET_RECENTLY_BOUGHT,
      payload: products,
    });
  };
};
