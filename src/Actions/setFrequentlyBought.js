import { SET_FREQUENTLY_BOUGHT } from "./types";
export const setFrequentlyBought = (products) => {
  return (dispatch) => {
    dispatch({
      type: SET_FREQUENTLY_BOUGHT,
      payload: products,
    });
  };
};
