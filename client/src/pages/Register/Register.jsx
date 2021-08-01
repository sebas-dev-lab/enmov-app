import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <span className="register--title">Register</span>
      <form className="register--form">
        <label>Email</label>
        <input type="email" placeholder="Enter your email..." />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." />
        <button className="register--form--button">Register</button>
      </form>
      <Link to="/signin" className="link">
        <button className="register--form--login-button">Login</button>
      </Link>
    </div>
  );
};

export default Register;
