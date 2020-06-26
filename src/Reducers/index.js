import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import activeItemReducer from "./activeItemReducer";
import searchReducer from "./searchReducer";
const rootReducer = combineReducers({
  home: homeReducer,
  item: activeItemReducer,
  search: searchReducer,
});

export default rootReducer;
