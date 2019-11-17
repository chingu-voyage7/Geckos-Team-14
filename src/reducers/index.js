import { combineReducers } from "redux";
import cardListReducer from "./CardListReducer";

export default combineReducers({
  state: cardListReducer
});
