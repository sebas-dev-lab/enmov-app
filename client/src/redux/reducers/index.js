// Reducer
import { combineReducers } from "redux";
// Auth
import authReducers from "./auth/basicAuth";
// User

// Post
import writePostReducers from "./post/write";

const mainReducers = combineReducers({
  auth: authReducers,
  post: writePostReducers,
});

export default mainReducers;
