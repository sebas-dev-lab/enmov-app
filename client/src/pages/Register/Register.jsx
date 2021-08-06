import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <span className="register--title">Register</span>
      <form className="register--form">
        <label>Nombre</label>
        <input type="text" placeholder="Nombre..." />
        <label>Apellido</label>
        <input type="text" placeholder="Apellido..." />
        <label>Email</label>
        <input type="email" placeholder="Ingresa tu email..." />
        <label>Password</label>
        <input type="password" placeholder="Elige una contraseña..." />
        <button className="register--form--button">Registrarse</button>
      </form>
      <Link to="/signin" className="link">
        <button className="register--form--login-button">Ingresar</button>
      </Link>
    </div>
  );
};

export default Register;
