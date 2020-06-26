import { SET_SEARCH } from "./types";
export const setSearch = (show) => {
  return (dispatch) => {
    dispatch({
      type: SET_SEARCH,
      payload: show,
    });
  };
};
