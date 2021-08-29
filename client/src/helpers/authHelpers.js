import { signin, singup,logout } from "../redux/actions/auth/basicAuth";

export let labelInput = (item, type) => {
  let titles = {
    name: "Nombre",
    lastname: "Apellido",
    email: "Email",
    password: "Password",
  };
  let placeholder = {
    name: "Nombre...",
    lastname: "Apellido...",
    email: "Email...",
    password: "Tu contrasena...",
  };
  if (type === "title") {
    return titles[item];
  } else {
    return placeholder[item];
  }
};

export let signinPromise = (dispatch, content) => {
  let login = new Promise((res, rej) => {
    try {
      res(dispatch(signin(content)));
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });
  return login;
};

export let signupPromise = (dispatch, content) => {
  let signup = new Promise((res, rej) => {
    try {
      res(dispatch(singup(content)));
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });
  return signup;
};


export let logoutPromise = (dispatch) => {
  let logoutPromise = new Promise((res, rej) => {
    try {
      res(dispatch(logout()));
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });
  return logoutPromise;
};
