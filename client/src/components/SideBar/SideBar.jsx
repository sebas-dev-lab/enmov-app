import React from "react";
import { path } from "../../helpers/path";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar--item">
        <span className="sidebar--item title">ABOUT ME</span>
        <img src={path.sidebar.img} alt="aboutme" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid odit
          quo veniam nesciunt laboriosam autem eum debitis quibusdam!
          Perspiciatis incidunt qui odio eligendi cupiditate
        </p>
      </div>
      <div className="sidebar--item">
        <span className="sidebar--item title">CATEGORIES</span>
        <ul className="sidebar--list">
          <li className="sidebar--list--item">Life</li>
          <li className="sidebar--list--item">Music</li>
          <li className="sidebar--list--item">Style</li>
          <li className="sidebar--list--item">Sports</li>
          <li className="sidebar--list--item">Tech</li>
          <li className="sidebar--list--item">Cinema</li>
        </ul>
      </div>
      <div className="sidebar--item">
        <span className="sidebar--item title">FOLLOW US</span>
        <div className="sidebar--item--social">
          <i className="sidebar--item--social--sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebar--item--social--sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebar--item--social--sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebar--item--social--sidebarIcon fab fa-pinterest-square"></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
