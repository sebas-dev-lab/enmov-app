// Reducer
import { combineReducers } from "redux";
// Auth
import authReducers from "./auth/basicAuth";
// User

const mainReducers = combineReducers({
  auth: authReducers,
});

export default mainReducers;
