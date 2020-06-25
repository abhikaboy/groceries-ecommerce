import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import activeItemReducer from "./activeItemReducer";
const rootReducer = combineReducers({
  home: homeReducer,
  item: activeItemReducer,
});

export default rootReducer;
