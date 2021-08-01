import React from "react";
import { path } from "../../helpers/path";

const Header = () => {
  return (
    <div className="header">
      <div className="header--titles">
        <span className="header--titles t1">En mov app</span>
        <span className="header--titles t2">Blog</span>
      </div>
      <img className="header--img" src={path.home.img} alt="home" />
    </div>
  );
};

export default Header;
