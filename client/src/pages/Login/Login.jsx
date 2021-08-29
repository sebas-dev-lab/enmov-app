import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signinPromise } from "../../helpers/authHelpers";
import { message } from "antd";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { ath, msj } = useSelector((store) => store.auth);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  let onChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };
  
  const openMessage = () => {
    let loading = new Promise((res, rej) => {
      const key = "updatable";
      message.loading({ content: "Comprobando credenciales...", key });
      setTimeout(() => {
        message.success({ content: "Registro correcto", key, duration: 2 });
        res(true);
      }, 1000);
    });
    return loading;
  };

  const warning = () => {
    message.warning("El loguin no se realizo de forma exitosa");
  };

  let onSingin = (e) => {
    e.preventDefault();
    signinPromise(dispatch, data).then((res) => {
      if (res) {
        openMessage().then((res) => {
          history.push("/");
        });
      } else {
        warning();
      }
    });
  };

  return (
    <div className="login">
      <span className="login--title">Login</span>
      <form className="login--form">
        <label>Email</label>
        <input
          onChange={onChange}
          name={"email"}
          value={data.email}
          type="email"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          onChange={onChange}
          name={"password"}
          value={data.password}
          type="password"
          placeholder="Enter your password..."
        />
        <div className="auth-msj">{!ath && <p>{msj}</p>}</div>
        <button onClick={onSingin} className="login--form--button">
          Ingresar
        </button>
      </form>
      <Link to="/signup" className="link">
        <button className="login--form--register-button">Register</button>
      </Link>
    </div>
  );
};

export default Login;
