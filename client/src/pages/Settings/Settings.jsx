import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import { path } from "../../helpers/path";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings--wrapper">
        <div className="settings--wrapper--title">
          <span className="settings--wrapper--title--update">
            Update Your Account
          </span>
          <span className="settings--wrapper--title--delete">
            Delete Account
          </span>
        </div>
        <form className="settings--form">
          <label htmlFor="">Profile Picture</label>
          <div className="settings--form--pp">
            <img src={path.settings.img} alt="" />
            <label htmlFor="settings--form--file--input">
              <i className="settings--form--file--input--icon far fa-user-circle"></i>
            </label>
            <input type="file" id="settings--form--file--input" />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Username" />
          <label>Email</label>
          <input type="email" placeholder="email@dom.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settings--form--submit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Settings;
