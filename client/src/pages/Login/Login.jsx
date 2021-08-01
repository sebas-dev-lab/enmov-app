import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <span className="login--title">Login</span>
      <form className="login--form">
        <label>Email</label>
        <input type="email" placeholder="Enter your email..." />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." />
        <button className="login--form--button">Login</button>
      </form>
      <Link to="/signup" className="link">
        <button className="login--form--register-button">Register</button>
      </Link>
    </div>
  );
};

export default Login;
