import React from "react";
import { Link } from "react-router-dom";

const UserAuth = ({ onChange, data, onSingin, ath, msj }) => {
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

export default UserAuth;
