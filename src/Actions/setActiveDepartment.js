import { SET_ACTIVE_DEPARTMENT } from "./types";
export const setActiveDepartment = (departmentID) => {
  return (dispatch) => {
    dispatch({
      type: SET_ACTIVE_DEPARTMENT,
      payload: departmentID,
    });
  };
};
