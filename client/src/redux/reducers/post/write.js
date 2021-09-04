import {
  CREATE_NEW_POST,
  UPDATE_POST,
  GET_ALL_POST,
  GET_ONE_POST,
  DELETE_POST,
  ERROR_CREATE_NEW_POST,
  ERROR_DELETE_POST,
  ERROR_GET_ONE_POST,
  ERROR_GET_ALL_POST,
  ERROR_UPDATE_POST,
} from "../../actions/actionTypes";

const initialState = {
  post: {},
  images: [],
  reviews: [],
  average: null,
  scoreTypes: "",
  referValues: {},
  msj: "",
};

const writePostReducers = (state = initialState, action) => {
  switch (action.type) {
    //   No error
    case GET_ONE_POST:
      return {
        ...state,
        post: action.post,
        images: action.images,
        reviews: action.reviews,
        average: action.average,
        scoreTypes: action.scoreTypes,
        referValues: action.referValues,
      };

    // Error
    case ERROR_CREATE_NEW_POST:
      return {
        msj: action.msj,
      };
    case ERROR_DELETE_POST:
      return {
        msj: action.msj,
      };
    case ERROR_GET_ONE_POST:
      return {
        msj: action.msj,
      };
    case ERROR_UPDATE_POST:
      return {
        msj: action.msj,
      };
    // Default
    default:
      return state;
  }
};

export default writePostReducers;
