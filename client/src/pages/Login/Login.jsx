import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { signinPromise } from "../../helpers/authHelpers";
import { message } from "antd";
import UserAuth from "../../components/UserAuth/Index";
import LoginAdmin from "../../components/Admin/LoginAdmin";
import { getCookie } from "../../helpers/cookieFunctions";

const Login = ({ authType }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { ath, msj } = useSelector((store) => store.auth);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  let onChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const signinFetch = (info, redirPath) => {
    signinPromise(dispatch, info).then((res) => {
      if (pathname === "/signin") {
        if (res) {
          openMessage().then((res) => {
            history.push(redirPath);
          });
        } else {
          warning();
        }
      } else {
        if (res) {
          if (getCookie("ath")) {
            openMessage().then((res) => {
              history.push(`${redirPath}/${getCookie("ui")}`);
            });
          }
        } else {
          warning();
        }
      }
    });
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
    signinFetch(data, "/");
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    signinFetch(values, "/admin/dashboard");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Fragment>
      {authType === "commonUser" ? (
        <UserAuth
          onChange={onChange}
          data={data}
          onSingin={onSingin}
          ath={ath}
          msj={msj}
        />
      ) : (
        <LoginAdmin onFinish={onFinish} onFinishFailed={onFinishFailed} />
      )}
    </Fragment>
  );
};

export default Login;
