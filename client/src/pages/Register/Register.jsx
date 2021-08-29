import React, { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { labelInput } from "../../helpers/authHelpers";
import { signupPromise } from "../../helpers/authHelpers";
import { message } from "antd";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { signupMsj } = useSelector((store) => store.auth);
  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    role: "users",
  });

  const onChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const openMessage = () => {
    let loading = new Promise((res, rej) => {
      const key = "updatable";
      message.loading({ content: "Comprobando tus datos...", key });
      setTimeout(() => {
        message.success({ content: "Registro correcto", key, duration: 2 });
        res(true);
      }, 1000);
    });
    return loading;
  };

  const warning = () => {
    message.warning("El registro no se realizo de forma exitosa");
  };

  const onSumbit = (e) => {
    e.preventDefault();
    signupPromise(dispatch, data).then((res) => {
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
    <div className="register">
      <span className="register--title">Crear cuenta</span>
      <form className="register--form">
        {Object.keys(data).map((item, i) => {
          if (item !== "role") {
            return (
              <Fragment key={item}>
                <label>{labelInput(item, "title")}</label>
                <input
                  name={item}
                  value={data[item]}
                  type={item === "password" ? "password" : "text"}
                  placeholder={labelInput(item)}
                  onChange={onChange}
                />
              </Fragment>
            );
          }
        })}
        {signupMsj && signupMsj !== "Creado correctamente" && <div className="auth-msj">{<p>{signupMsj}</p>}</div>}
        <button onClick={onSumbit} className="register--form--button">
          Registrarse
        </button>
      </form>
      <button className="register--form--login-button">Ingresar</button>
    </div>
  );
};

export default Register;
