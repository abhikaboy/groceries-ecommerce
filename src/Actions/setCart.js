import { SET_CART } from "./types";
export const setCart = (cart) => {
  return (dispatch) => {
    dispatch({
      type: SET_CART,
      payload: cart,
    });
  };
};
