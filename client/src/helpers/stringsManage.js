import { deleteCookie, setCookie, getCookie } from "./cookieFunctions";

export const cookieStrings = {
  /*
        Setear los strings donde se almacenaran las cookies
    */
  auth: {
    user_id: "ui",
    user_name: "un",
    login: "ath",
    token: "tn",
  },
};
let { auth } = cookieStrings;

// ------------------------- Authentication ------------------------- //
export const setAuthCookieStrings = (values) => {
  /*
        values={
            ...auth => con datos del usuario. Usar cookieString para setear los datos del usuario.
        }
    */
  for (let i in auth) {
    setCookie(auth[i], values[i], 30);
  }
};

export const getAuthCookieString = (values) => {
  /*
        values={
            ...auth => con datos del usuario. Usar cookieString para setear los datos del usuario.
        }
    */
  let getData = {};
  if (typeof values === "array") {
    for (let i in values) {
      getData[values[i]] = getCookie(auth[values[i]]);
    }
  } else {
    getData[values] = getCookie(auth[values]);
  }
  return getData;
};

export const deleteAuthCookieString = () => {
  for (let i in auth) {
    deleteCookie(auth[i]);
  }
};
