// import actions
const homeInit = {
  test: "",
};
const homeReducer = (state = homeInit, action = {}) => {
  switch (action.type) {
    case "lol":
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default homeReducer;
