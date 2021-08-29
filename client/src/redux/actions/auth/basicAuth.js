import axios from "axios";
import * as actionTypes from "../actionTypes";
import { url } from "../../../config/_env";
import { setMsjTypeCode } from "../../../helpers/statuString";
import {
  deleteAuthCookieString,
  getAuthCookieString,
  setAuthCookieStrings,
} from "../../../helpers/stringsManage";

let URL = `${url}/auth`;

/*
    Por el momento la autenticacion funciona en base a cookies. Redux se utilizara para cambios de estado en este caso para setear mensjaes en funcion del status code recibido para generar alerta en caso de que exista algun error
  */

export const singup = (content) => async (dispatch) => {
  /*
    content={
       name, lastname, email, password, role
    }
  */
  try {
    console.log(content);
    const signup = await axios.post(`${URL}/signup`, {
      name: content.name,
      lastname: content.lastname,
      email: content.email,
      password: content.password,
      role: content.role,
    });
    console.log(signup);
    if (signup.data && signup.data.created) {
      dispatch({
        type: actionTypes.BASIC_AUTH_SIGNUP,
        msj: setMsjTypeCode(signup.status),
      });
      setAuthCookieStrings({ user_name: content.name });
      return true;
    } else {
      dispatch({
        type: actionTypes.BASIC_AUTH_SIGNUP_ERROR,
        status: signup.status,
        msj: setMsjTypeCode(signup.status),
      });
      return false;
    }
  } catch (e) {
    console.log(e);
    dispatch({
      type: actionTypes.BASIC_AUTH_SIGNUP_ERROR,
      status: e.response.status,
      msj: setMsjTypeCode(e.response.status),
    });
    return false;
  }
};

export const signin = (content) => async (dispatch) => {
  /*
    content={
       username, email, password
    }
  */
  try {
    const signinData = await axios.post(`${URL}/signin`, content);
    console.log(signinData);
    if (signinData.data && signinData.data.login) {
      dispatch({
        type: actionTypes.BASIC_AUTH_LOGIN,
        ath: signinData.data.auth,
        msj: setMsjTypeCode(signinData.data.status),
      });
      setAuthCookieStrings(signinData.data.auth);
      return true;
    } else {
      dispatch({
        type: actionTypes.BASIC_AUTH_LOGIN_ERROR,
        ath: signinData.data.auth,
        msj: setMsjTypeCode(signinData.data.status),
      });
      return false;
    }
  } catch (e) {
    console.error(e);
    dispatch({
      type: actionTypes.BASIC_AUTH_LOGIN_ERROR,
      msj: setMsjTypeCode(e.response.status),
    });
    return false;
  }
};

export const logout = () => async (dispatch) => {
  try {
    let tk = getAuthCookieString("token").token;
    const logoutData = await axios.post(
      `${URL}/logout`,
      {},
      {
        headers: { "fayser-auth": tk },
      }
    );
    console.log(logoutData);
    if (logoutData.data && logoutData.data.logout) {
      deleteAuthCookieString();
      dispatch({
        type: actionTypes.BASIC_AUTH_LOGOUT,
        msj: "ok",
      });
      return true
    }
    return false
  } catch (e) {
    console.log(e);
    return false
  }
};
