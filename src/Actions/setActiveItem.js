import { SET_ACTIVE } from "./types";
export const setActive = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_ACTIVE,
      name: data.name,
      description: data.description,
      url: data.url,
      price: data.price,
      display: data.display,
    });
  };
};
