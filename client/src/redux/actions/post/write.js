import axios from "axios";
import * as actionTypes from "../actionTypes";
import { url } from "../../../config/_env";
import { setMsjTypeCode } from "../../../helpers/statuString";
import { getAuthCookieString } from "../../../helpers/stringsManage";

let URL = `${url}/post`;

export const createNewPost = (content) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${URL}`, content, {
      headers: { "fayser-auth": getAuthCookieString("token").token },
    });
    if (data && data.created) {
      dispatch(getOnePost(data.post_id));
      return true;
    } else {
      dispatch({
        type: actionTypes.ERROR_CREATE_NEW_POST,
        msj: "Error al crear nuevo post",
      });
      return false;
    }
  } catch (e) {
    console.log(e.response.statue);
    dispatch({
      type: actionTypes.ERROR_CREATE_NEW_POST,
      msj: "Error al crear nuevo post",
    });
    return false;
  }
};

export const getOnePost = (post_id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/${post_id}`);
    if (data && data.get) {
      dispatch({
        type: actionTypes.GET_ONE_POST,
        post: data.post,
        images: data.images,
        reviews: data.reviews,
        average: data.average,
        scoreTypes: data.scoreTypes,
        referValues: data.referValues,
      });
      return true;
    } else {
      dispatch({
        type: actionTypes.ERROR_GET_ONE_POST,
        msj: "Error al obtener el Post seleccionado",
      });
      return false;
    }
  } catch (e) {
    console.log(e.response.status);
    dispatch({
      type: actionTypes.ERROR_GET_ONE_POST,
      msj: "Error al obtener el Post seleccionado",
    });
    return false;
  }
};

export const updatePost = (post_id, content) => async (dispatch) => {
  try {
    const { data } = await axios.put(`${URL}/update/${post_id}`, content, {
      headers: { "fayser-auth": getAuthCookieString("token").token },
    });
    if (data && data.updated) {
      dispatch({
        type: actionTypes.UPDATE_POST,
      });
      return true;
    } else {
      dispatch({
        type: actionTypes.ERROR_UPDATE_POST,
        msj: "Error al actulizar el Post",
      });
      return false;
    }
  } catch (e) {
    console.log(e.response.status);
    dispatch({
      type: actionTypes.ERROR_UPDATE_POST,
      msj: "Error al actulizar el Post",
    });
    return false;
  }
};
