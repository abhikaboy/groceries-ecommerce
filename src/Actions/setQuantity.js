import { SET_QUANTITY } from "./types";
export const setQuantity = (num) => {
  return (dispatch) => {
    dispatch({
      type: SET_QUANTITY,
      payload: num,
    });
  };
};
