import {
  BASIC_AUTH_SIGNUP,
  BASIC_AUTH_LOGIN,
  BASIC_AUTH_LOGOUT,
  BASIC_AUTH_VERIFY_SESSION,
  BASIC_AUTH_SIGNUP_ERROR,
  BASIC_AUTH_LOGOUT_ERROR,
  BASIC_AUTH_LOGIN_ERROR,
  BASIC_AUTH_VERIFY_SESSION_ERROR,
} from "../../actions/actionTypes";

const initialState = {
  ath: false,
  msj: "",
  signupMsj:''
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case BASIC_AUTH_SIGNUP:
      return {
        ...state,
        signupMsj: action.msj,
      };
    case BASIC_AUTH_LOGIN:
      return {
        ...state,
        ath: action.ath,
        msj: action.msj,
      };
    case BASIC_AUTH_LOGOUT:
      return {
        ...state,
        ath: false,
        msj: '',
      };
    case BASIC_AUTH_SIGNUP_ERROR:
      return {
        ...state,
        signupMsj: action.msj,
      };
    case BASIC_AUTH_LOGIN_ERROR:
      return {
        ...state,
        ath: false,
        msj: action.msj,
      };
    case BASIC_AUTH_LOGOUT_ERROR:
      return {
        ...state,
        msj: action.msj,
      };
    default:
      return state;
  }
};

export default authReducers;
