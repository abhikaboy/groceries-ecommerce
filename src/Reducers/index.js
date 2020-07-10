import { combineReducers } from "redux";
import apiConfig from "./apiConfig";
import activeItemReducer from "./activeItemReducer";
import searchReducer from "./searchReducer";
import browseReducer from "./browseReducer";
import cartReducer from "./cartReducer";
const rootReducer = combineReducers({
  api: apiConfig,
  item: activeItemReducer,
  search: searchReducer,
  browse: browseReducer,
  cart: cartReducer,
});

export default rootReducer;
