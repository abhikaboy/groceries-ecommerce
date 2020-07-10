import { SET_DEPARTMENTS } from "./types";
export const setDepartments = (departments) => {
  return (dispatch) => {
    dispatch({
      type: SET_DEPARTMENTS,
      payload: departments,
    });
  };
};
